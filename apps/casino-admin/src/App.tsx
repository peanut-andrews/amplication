import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { GameBankList } from "./gameBank/GameBankList";
import { GameBankCreate } from "./gameBank/GameBankCreate";
import { GameBankEdit } from "./gameBank/GameBankEdit";
import { GameBankShow } from "./gameBank/GameBankShow";
import { FishBankList } from "./fishBank/FishBankList";
import { FishBankCreate } from "./fishBank/FishBankCreate";
import { FishBankEdit } from "./fishBank/FishBankEdit";
import { FishBankShow } from "./fishBank/FishBankShow";
import { PersonList } from "./person/PersonList";
import { PersonCreate } from "./person/PersonCreate";
import { PersonEdit } from "./person/PersonEdit";
import { PersonShow } from "./person/PersonShow";
import { StatGameList } from "./statGame/StatGameList";
import { StatGameCreate } from "./statGame/StatGameCreate";
import { StatGameEdit } from "./statGame/StatGameEdit";
import { StatGameShow } from "./statGame/StatGameShow";
import { OpenShiftList } from "./openShift/OpenShiftList";
import { OpenShiftCreate } from "./openShift/OpenShiftCreate";
import { OpenShiftEdit } from "./openShift/OpenShiftEdit";
import { OpenShiftShow } from "./openShift/OpenShiftShow";
import { StatisticList } from "./statistic/StatisticList";
import { StatisticCreate } from "./statistic/StatisticCreate";
import { StatisticEdit } from "./statistic/StatisticEdit";
import { StatisticShow } from "./statistic/StatisticShow";
import { ShopList } from "./shop/ShopList";
import { ShopCreate } from "./shop/ShopCreate";
import { ShopEdit } from "./shop/ShopEdit";
import { ShopShow } from "./shop/ShopShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { BalanceTransactionList } from "./balanceTransaction/BalanceTransactionList";
import { BalanceTransactionCreate } from "./balanceTransaction/BalanceTransactionCreate";
import { BalanceTransactionEdit } from "./balanceTransaction/BalanceTransactionEdit";
import { BalanceTransactionShow } from "./balanceTransaction/BalanceTransactionShow";
import { GameList } from "./game/GameList";
import { GameCreate } from "./game/GameCreate";
import { GameEdit } from "./game/GameEdit";
import { GameShow } from "./game/GameShow";
import { BetList } from "./bet/BetList";
import { BetCreate } from "./bet/BetCreate";
import { BetEdit } from "./bet/BetEdit";
import { BetShow } from "./bet/BetShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { RoomList } from "./room/RoomList";
import { RoomCreate } from "./room/RoomCreate";
import { RoomEdit } from "./room/RoomEdit";
import { RoomShow } from "./room/RoomShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Casino"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="GameBank"
          list={GameBankList}
          edit={GameBankEdit}
          create={GameBankCreate}
          show={GameBankShow}
        />
        <Resource
          name="FishBank"
          list={FishBankList}
          edit={FishBankEdit}
          create={FishBankCreate}
          show={FishBankShow}
        />
        <Resource
          name="Person"
          list={PersonList}
          edit={PersonEdit}
          create={PersonCreate}
          show={PersonShow}
        />
        <Resource
          name="StatGame"
          list={StatGameList}
          edit={StatGameEdit}
          create={StatGameCreate}
          show={StatGameShow}
        />
        <Resource
          name="OpenShift"
          list={OpenShiftList}
          edit={OpenShiftEdit}
          create={OpenShiftCreate}
          show={OpenShiftShow}
        />
        <Resource
          name="Statistic"
          list={StatisticList}
          edit={StatisticEdit}
          create={StatisticCreate}
          show={StatisticShow}
        />
        <Resource
          name="Shop"
          list={ShopList}
          edit={ShopEdit}
          create={ShopCreate}
          show={ShopShow}
        />
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="BalanceTransaction"
          list={BalanceTransactionList}
          edit={BalanceTransactionEdit}
          create={BalanceTransactionCreate}
          show={BalanceTransactionShow}
        />
        <Resource
          name="Game"
          list={GameList}
          edit={GameEdit}
          create={GameCreate}
          show={GameShow}
        />
        <Resource
          name="Bet"
          list={BetList}
          edit={BetEdit}
          create={BetCreate}
          show={BetShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="Room"
          list={RoomList}
          edit={RoomEdit}
          create={RoomCreate}
          show={RoomShow}
        />
      </Admin>
    </div>
  );
};

export default App;
