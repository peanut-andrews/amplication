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
import { ShopController } from "../shop.controller";
import { ShopService } from "../shop.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  balance: 42,
  code: "exampleCode",
  createdAt: new Date(),
  description: "exampleDescription",
  facialRecognition: 42,
  id: "exampleId",
  isActive: "true",
  isMfaRequired: "true",
  name: "exampleName",
  shopSettingsId: "exampleShopSettingsId",
  tenantId: "exampleTenantId",
  updatedAt: new Date(),
  url: "exampleUrl",
};
const CREATE_RESULT = {
  balance: 42,
  code: "exampleCode",
  createdAt: new Date(),
  description: "exampleDescription",
  facialRecognition: 42,
  id: "exampleId",
  isActive: "true",
  isMfaRequired: "true",
  name: "exampleName",
  shopSettingsId: "exampleShopSettingsId",
  tenantId: "exampleTenantId",
  updatedAt: new Date(),
  url: "exampleUrl",
};
const FIND_MANY_RESULT = [
  {
    balance: 42,
    code: "exampleCode",
    createdAt: new Date(),
    description: "exampleDescription",
    facialRecognition: 42,
    id: "exampleId",
    isActive: "true",
    isMfaRequired: "true",
    name: "exampleName",
    shopSettingsId: "exampleShopSettingsId",
    tenantId: "exampleTenantId",
    updatedAt: new Date(),
    url: "exampleUrl",
  },
];
const FIND_ONE_RESULT = {
  balance: 42,
  code: "exampleCode",
  createdAt: new Date(),
  description: "exampleDescription",
  facialRecognition: 42,
  id: "exampleId",
  isActive: "true",
  isMfaRequired: "true",
  name: "exampleName",
  shopSettingsId: "exampleShopSettingsId",
  tenantId: "exampleTenantId",
  updatedAt: new Date(),
  url: "exampleUrl",
};

const service = {
  createShop() {
    return CREATE_RESULT;
  },
  shops: () => FIND_MANY_RESULT,
  shop: ({ where }: { where: { id: string } }) => {
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

describe("Shop", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ShopService,
          useValue: service,
        },
      ],
      controllers: [ShopController],
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

  test("POST /shops", async () => {
    await request(app.getHttpServer())
      .post("/shops")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /shops", async () => {
    await request(app.getHttpServer())
      .get("/shops")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /shops/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/shops"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /shops/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/shops"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /shops existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/shops")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/shops")
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
