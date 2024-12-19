import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ProductController } from "../product.controller";
import { ProductService } from "../product.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amountToReceiveInCents: 42,
  bonusCode: "exampleBonusCode",
  bonusSpins: 42,
  bonusTotalInCents: 42,
  createdAt: new Date(),
  description: "exampleDescription",
  discountInCents: 42,
  id: "exampleId",
  isPromo: "true",
  priceInCents: 42,
  title: "exampleTitle",
  totalDiscountInCents: 42,
  typeField: "exampleTypeField",
  url: "exampleUrl",
};
const CREATE_RESULT = {
  amountToReceiveInCents: 42,
  bonusCode: "exampleBonusCode",
  bonusSpins: 42,
  bonusTotalInCents: 42,
  createdAt: new Date(),
  description: "exampleDescription",
  discountInCents: 42,
  id: "exampleId",
  isPromo: "true",
  priceInCents: 42,
  title: "exampleTitle",
  totalDiscountInCents: 42,
  typeField: "exampleTypeField",
  url: "exampleUrl",
};
const FIND_MANY_RESULT = [
  {
    amountToReceiveInCents: 42,
    bonusCode: "exampleBonusCode",
    bonusSpins: 42,
    bonusTotalInCents: 42,
    createdAt: new Date(),
    description: "exampleDescription",
    discountInCents: 42,
    id: "exampleId",
    isPromo: "true",
    priceInCents: 42,
    title: "exampleTitle",
    totalDiscountInCents: 42,
    typeField: "exampleTypeField",
    url: "exampleUrl",
  },
];
const FIND_ONE_RESULT = {
  amountToReceiveInCents: 42,
  bonusCode: "exampleBonusCode",
  bonusSpins: 42,
  bonusTotalInCents: 42,
  createdAt: new Date(),
  description: "exampleDescription",
  discountInCents: 42,
  id: "exampleId",
  isPromo: "true",
  priceInCents: 42,
  title: "exampleTitle",
  totalDiscountInCents: 42,
  typeField: "exampleTypeField",
  url: "exampleUrl",
};

const service = {
  createProduct() {
    return CREATE_RESULT;
  },
  products: () => FIND_MANY_RESULT,
  product: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Product", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ProductService,
          useValue: service,
        },
      ],
      controllers: [ProductController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /products", async () => {
    await request(app.getHttpServer())
      .post("/products")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      });
  });

  test("GET /products", async () => {
    await request(app.getHttpServer())
      .get("/products")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
        },
      ]);
  });

  test("GET /products/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/products"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /products/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/products"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
      });
  });

  test("POST /products existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/products")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/products")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
