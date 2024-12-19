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
import { OpenShiftController } from "../openShift.controller";
import { OpenShiftService } from "../openShift.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  balance: 42,
  balanceIn: 42,
  balanceOut: 42,
  createdAt: new Date(),
  deletedAt: new Date(),
  endDate: new Date(),
  id: "exampleId",
  isDeleted: "true",
  jpg: 42,
  lastBanks: 42,
  moneyIn: 42,
  moneyOut: 42,
  oldBanks: 42,
  oldTotal: 42,
  personId: "examplePersonId",
  persons: 42,
  shopId: "exampleShopId",
  startDate: new Date(),
  transfers: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  balance: 42,
  balanceIn: 42,
  balanceOut: 42,
  createdAt: new Date(),
  deletedAt: new Date(),
  endDate: new Date(),
  id: "exampleId",
  isDeleted: "true",
  jpg: 42,
  lastBanks: 42,
  moneyIn: 42,
  moneyOut: 42,
  oldBanks: 42,
  oldTotal: 42,
  personId: "examplePersonId",
  persons: 42,
  shopId: "exampleShopId",
  startDate: new Date(),
  transfers: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    balance: 42,
    balanceIn: 42,
    balanceOut: 42,
    createdAt: new Date(),
    deletedAt: new Date(),
    endDate: new Date(),
    id: "exampleId",
    isDeleted: "true",
    jpg: 42,
    lastBanks: 42,
    moneyIn: 42,
    moneyOut: 42,
    oldBanks: 42,
    oldTotal: 42,
    personId: "examplePersonId",
    persons: 42,
    shopId: "exampleShopId",
    startDate: new Date(),
    transfers: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  balance: 42,
  balanceIn: 42,
  balanceOut: 42,
  createdAt: new Date(),
  deletedAt: new Date(),
  endDate: new Date(),
  id: "exampleId",
  isDeleted: "true",
  jpg: 42,
  lastBanks: 42,
  moneyIn: 42,
  moneyOut: 42,
  oldBanks: 42,
  oldTotal: 42,
  personId: "examplePersonId",
  persons: 42,
  shopId: "exampleShopId",
  startDate: new Date(),
  transfers: 42,
  updatedAt: new Date(),
};

const service = {
  createOpenShift() {
    return CREATE_RESULT;
  },
  openShifts: () => FIND_MANY_RESULT,
  openShift: ({ where }: { where: { id: string } }) => {
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

describe("OpenShift", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: OpenShiftService,
          useValue: service,
        },
      ],
      controllers: [OpenShiftController],
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

  test("POST /openShifts", async () => {
    await request(app.getHttpServer())
      .post("/openShifts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        deletedAt: CREATE_RESULT.deletedAt.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /openShifts", async () => {
    await request(app.getHttpServer())
      .get("/openShifts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          deletedAt: FIND_MANY_RESULT[0].deletedAt.toISOString(),
          endDate: FIND_MANY_RESULT[0].endDate.toISOString(),
          startDate: FIND_MANY_RESULT[0].startDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /openShifts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/openShifts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /openShifts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/openShifts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        deletedAt: FIND_ONE_RESULT.deletedAt.toISOString(),
        endDate: FIND_ONE_RESULT.endDate.toISOString(),
        startDate: FIND_ONE_RESULT.startDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /openShifts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/openShifts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        deletedAt: CREATE_RESULT.deletedAt.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/openShifts")
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
