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
import { GameController } from "../game.controller";
import { GameService } from "../game.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  advanced: "exampleAdvanced",
  bet: 42.42,
  bids: 42,
  cask: 42.42,
  categoryId: "exampleCategoryId",
  categoryTemp: 42.42,
  chanceFirepot1: 42.42,
  chanceFirepot2: 42.42,
  chanceFirepot3: 42.42,
  createdAt: 42.42,
  currentRtp: 42.42,
  denomination: 42.42,
  developer: "exampleDeveloper",
  device: 42,
  featured: "true",
  fireCount1: 42.42,
  fireCount2: 42.42,
  fireCount3: 42.42,
  gamebank: "exampleGamebank",
  id: "exampleId",
  isActive: "true",
  jackpotGroupId: "exampleJackpotGroupId",
  jpgId: 42,
  linesPercentConfigBonus: "exampleLinesPercentConfigBonus",
  linesPercentConfigBonusBonus: "exampleLinesPercentConfigBonusBonus",
  linesPercentConfigSpin: "exampleLinesPercentConfigSpin",
  linesPercentConfigSpinBonus: "exampleLinesPercentConfigSpinBonus",
  name: "exampleName",
  originalId: 42,
  popularity: 42.42,
  providerId: "exampleProviderId",
  rezerv: 42.42,
  rtpStatIn: 42.42,
  rtpStatOut: 42.42,
  scaleMode: "exampleScaleMode",
  slotViewState: "exampleSlotViewState",
  standardRtp: 42.42,
  statIn: 42.42,
  statOut: 42.42,
  title: "exampleTitle",
  updatedAt: new Date(),
  view: 42,
  vipLevel: 42,
};
const CREATE_RESULT = {
  advanced: "exampleAdvanced",
  bet: 42.42,
  bids: 42,
  cask: 42.42,
  categoryId: "exampleCategoryId",
  categoryTemp: 42.42,
  chanceFirepot1: 42.42,
  chanceFirepot2: 42.42,
  chanceFirepot3: 42.42,
  createdAt: 42.42,
  currentRtp: 42.42,
  denomination: 42.42,
  developer: "exampleDeveloper",
  device: 42,
  featured: "true",
  fireCount1: 42.42,
  fireCount2: 42.42,
  fireCount3: 42.42,
  gamebank: "exampleGamebank",
  id: "exampleId",
  isActive: "true",
  jackpotGroupId: "exampleJackpotGroupId",
  jpgId: 42,
  linesPercentConfigBonus: "exampleLinesPercentConfigBonus",
  linesPercentConfigBonusBonus: "exampleLinesPercentConfigBonusBonus",
  linesPercentConfigSpin: "exampleLinesPercentConfigSpin",
  linesPercentConfigSpinBonus: "exampleLinesPercentConfigSpinBonus",
  name: "exampleName",
  originalId: 42,
  popularity: 42.42,
  providerId: "exampleProviderId",
  rezerv: 42.42,
  rtpStatIn: 42.42,
  rtpStatOut: 42.42,
  scaleMode: "exampleScaleMode",
  slotViewState: "exampleSlotViewState",
  standardRtp: 42.42,
  statIn: 42.42,
  statOut: 42.42,
  title: "exampleTitle",
  updatedAt: new Date(),
  view: 42,
  vipLevel: 42,
};
const FIND_MANY_RESULT = [
  {
    advanced: "exampleAdvanced",
    bet: 42.42,
    bids: 42,
    cask: 42.42,
    categoryId: "exampleCategoryId",
    categoryTemp: 42.42,
    chanceFirepot1: 42.42,
    chanceFirepot2: 42.42,
    chanceFirepot3: 42.42,
    createdAt: 42.42,
    currentRtp: 42.42,
    denomination: 42.42,
    developer: "exampleDeveloper",
    device: 42,
    featured: "true",
    fireCount1: 42.42,
    fireCount2: 42.42,
    fireCount3: 42.42,
    gamebank: "exampleGamebank",
    id: "exampleId",
    isActive: "true",
    jackpotGroupId: "exampleJackpotGroupId",
    jpgId: 42,
    linesPercentConfigBonus: "exampleLinesPercentConfigBonus",
    linesPercentConfigBonusBonus: "exampleLinesPercentConfigBonusBonus",
    linesPercentConfigSpin: "exampleLinesPercentConfigSpin",
    linesPercentConfigSpinBonus: "exampleLinesPercentConfigSpinBonus",
    name: "exampleName",
    originalId: 42,
    popularity: 42.42,
    providerId: "exampleProviderId",
    rezerv: 42.42,
    rtpStatIn: 42.42,
    rtpStatOut: 42.42,
    scaleMode: "exampleScaleMode",
    slotViewState: "exampleSlotViewState",
    standardRtp: 42.42,
    statIn: 42.42,
    statOut: 42.42,
    title: "exampleTitle",
    updatedAt: new Date(),
    view: 42,
    vipLevel: 42,
  },
];
const FIND_ONE_RESULT = {
  advanced: "exampleAdvanced",
  bet: 42.42,
  bids: 42,
  cask: 42.42,
  categoryId: "exampleCategoryId",
  categoryTemp: 42.42,
  chanceFirepot1: 42.42,
  chanceFirepot2: 42.42,
  chanceFirepot3: 42.42,
  createdAt: 42.42,
  currentRtp: 42.42,
  denomination: 42.42,
  developer: "exampleDeveloper",
  device: 42,
  featured: "true",
  fireCount1: 42.42,
  fireCount2: 42.42,
  fireCount3: 42.42,
  gamebank: "exampleGamebank",
  id: "exampleId",
  isActive: "true",
  jackpotGroupId: "exampleJackpotGroupId",
  jpgId: 42,
  linesPercentConfigBonus: "exampleLinesPercentConfigBonus",
  linesPercentConfigBonusBonus: "exampleLinesPercentConfigBonusBonus",
  linesPercentConfigSpin: "exampleLinesPercentConfigSpin",
  linesPercentConfigSpinBonus: "exampleLinesPercentConfigSpinBonus",
  name: "exampleName",
  originalId: 42,
  popularity: 42.42,
  providerId: "exampleProviderId",
  rezerv: 42.42,
  rtpStatIn: 42.42,
  rtpStatOut: 42.42,
  scaleMode: "exampleScaleMode",
  slotViewState: "exampleSlotViewState",
  standardRtp: 42.42,
  statIn: 42.42,
  statOut: 42.42,
  title: "exampleTitle",
  updatedAt: new Date(),
  view: 42,
  vipLevel: 42,
};

const service = {
  createGame() {
    return CREATE_RESULT;
  },
  games: () => FIND_MANY_RESULT,
  game: ({ where }: { where: { id: string } }) => {
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

describe("Game", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: GameService,
          useValue: service,
        },
      ],
      controllers: [GameController],
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

  test("POST /games", async () => {
    await request(app.getHttpServer())
      .post("/games")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /games", async () => {
    await request(app.getHttpServer())
      .get("/games")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /games/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/games"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /games/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/games"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /games existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/games")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/games")
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
