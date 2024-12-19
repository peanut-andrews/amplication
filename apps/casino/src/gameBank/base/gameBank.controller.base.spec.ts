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
import { GameBankController } from "../gameBank.controller";
import { GameBankService } from "../gameBank.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  bonus: 42.42,
  createdAt: new Date(),
  deletedAt: new Date(),
  id: "exampleId",
  isDeleted: "true",
  little: 42.42,
  slots: 42.42,
  tableBank: 42.42,
  tempRtp: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  bonus: 42.42,
  createdAt: new Date(),
  deletedAt: new Date(),
  id: "exampleId",
  isDeleted: "true",
  little: 42.42,
  slots: 42.42,
  tableBank: 42.42,
  tempRtp: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    bonus: 42.42,
    createdAt: new Date(),
    deletedAt: new Date(),
    id: "exampleId",
    isDeleted: "true",
    little: 42.42,
    slots: 42.42,
    tableBank: 42.42,
    tempRtp: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  bonus: 42.42,
  createdAt: new Date(),
  deletedAt: new Date(),
  id: "exampleId",
  isDeleted: "true",
  little: 42.42,
  slots: 42.42,
  tableBank: 42.42,
  tempRtp: 42.42,
  updatedAt: new Date(),
};

const service = {
  createGameBank() {
    return CREATE_RESULT;
  },
  gameBanks: () => FIND_MANY_RESULT,
  gameBank: ({ where }: { where: { id: string } }) => {
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

describe("GameBank", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: GameBankService,
          useValue: service,
        },
      ],
      controllers: [GameBankController],
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

  test("POST /gameBanks", async () => {
    await request(app.getHttpServer())
      .post("/gameBanks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        deletedAt: CREATE_RESULT.deletedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /gameBanks", async () => {
    await request(app.getHttpServer())
      .get("/gameBanks")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          deletedAt: FIND_MANY_RESULT[0].deletedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /gameBanks/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/gameBanks"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /gameBanks/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/gameBanks"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        deletedAt: FIND_ONE_RESULT.deletedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /gameBanks existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/gameBanks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        deletedAt: CREATE_RESULT.deletedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/gameBanks")
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
