import { Bet } from "../bet/Bet";
import { Shop } from "../shop/Shop";
import { StatGame } from "../statGame/StatGame";

export type Game = {
  advanced: string | null;
  bet: number | null;
  bets?: Array<Bet>;
  bids: number | null;
  cask: number | null;
  categoryId: string | null;
  categoryTemp: number | null;
  chanceFirepot1: number | null;
  chanceFirepot2: number | null;
  chanceFirepot3: number | null;
  createdAt: number | null;
  currentRtp: number | null;
  denomination: number | null;
  developer: string | null;
  device: number;
  featured: boolean | null;
  fireCount1: number | null;
  fireCount2: number | null;
  fireCount3: number | null;
  gamebank: string | null;
  id: string;
  isActive: boolean | null;
  jackpotGroupId: string | null;
  jpgId: number;
  linesPercentConfigBonus: string | null;
  linesPercentConfigBonusBonus: string | null;
  linesPercentConfigSpin: string | null;
  linesPercentConfigSpinBonus: string | null;
  name: string;
  originalId: number | null;
  popularity: number | null;
  providerId: string | null;
  rezerv: number | null;
  rtpStatIn: number | null;
  rtpStatOut: number | null;
  scaleMode: string;
  shop?: Shop | null;
  slotViewState: string;
  standardRtp: number | null;
  statIn: number | null;
  statOut: number | null;
  stats?: Array<StatGame>;
  title: string;
  updatedAt: Date | null;
  view: number | null;
  vipLevel: number | null;
};
