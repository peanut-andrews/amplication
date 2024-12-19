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
import { StatGameController } from "../statGame.controller";
import { StatGameService } from "../statGame.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  balance: 42.42,
  bet: 42.42,
  bonusBank: 42.42,
  createdAt: new Date(),
  dateTime: new Date(),
  deletedAt: new Date(),
  denomination: 42.42,
  fishBank: 42.42,
  gameBank: 42.42,
  id: "exampleId",
  inGame: 42.42,
  inJpg: 42.42,
  inProfit: 42.42,
  isDeleted: "true",
  jackBalance: 42.42,
  littleBank: 42.42,
  slotsBank: 42.42,
  tableBank: 42.42,
  totalBank: 42.42,
  updatedAt: new Date(),
  win: 42.42,
};
const CREATE_RESULT = {
  balance: 42.42,
  bet: 42.42,
  bonusBank: 42.42,
  createdAt: new Date(),
  dateTime: new Date(),
  deletedAt: new Date(),
  denomination: 42.42,
  fishBank: 42.42,
  gameBank: 42.42,
  id: "exampleId",
  inGame: 42.42,
  inJpg: 42.42,
  inProfit: 42.42,
  isDeleted: "true",
  jackBalance: 42.42,
  littleBank: 42.42,
  slotsBank: 42.42,
  tableBank: 42.42,
  totalBank: 42.42,
  updatedAt: new Date(),
  win: 42.42,
};
const FIND_MANY_RESULT = [
  {
    balance: 42.42,
    bet: 42.42,
    bonusBank: 42.42,
    createdAt: new Date(),
    dateTime: new Date(),
    deletedAt: new Date(),
    denomination: 42.42,
    fishBank: 42.42,
    gameBank: 42.42,
    id: "exampleId",
    inGame: 42.42,
    inJpg: 42.42,
    inProfit: 42.42,
    isDeleted: "true",
    jackBalance: 42.42,
    littleBank: 42.42,
    slotsBank: 42.42,
    tableBank: 42.42,
    totalBank: 42.42,
    updatedAt: new Date(),
    win: 42.42,
  },
];
const FIND_ONE_RESULT = {
  balance: 42.42,
  bet: 42.42,
  bonusBank: 42.42,
  createdAt: new Date(),
  dateTime: new Date(),
  deletedAt: new Date(),
  denomination: 42.42,
  fishBank: 42.42,
  gameBank: 42.42,
  id: "exampleId",
  inGame: 42.42,
  inJpg: 42.42,
  inProfit: 42.42,
  isDeleted: "true",
  jackBalance: 42.42,
  littleBank: 42.42,
  slotsBank: 42.42,
  tableBank: 42.42,
  totalBank: 42.42,
  updatedAt: new Date(),
  win: 42.42,
};

const service = {
  createStatGame() {
    return CREATE_RESULT;
  },
  statGames: () => FIND_MANY_RESULT,
  statGame: ({ where }: { where: { id: string } }) => {
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

describe("StatGame", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StatGameService,
          useValue: service,
        },
      ],
      controllers: [StatGameController],
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

  test("POST /statGames", async () => {
    await request(app.getHttpServer())
      .post("/statGames")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateTime: CREATE_RESULT.dateTime.toISOString(),
        deletedAt: CREATE_RESULT.deletedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /statGames", async () => {
    await request(app.getHttpServer())
      .get("/statGames")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateTime: FIND_MANY_RESULT[0].dateTime.toISOString(),
          deletedAt: FIND_MANY_RESULT[0].deletedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /statGames/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/statGames"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /statGames/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/statGames"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateTime: FIND_ONE_RESULT.dateTime.toISOString(),
        deletedAt: FIND_ONE_RESULT.deletedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /statGames existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/statGames")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateTime: CREATE_RESULT.dateTime.toISOString(),
        deletedAt: CREATE_RESULT.deletedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/statGames")
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
