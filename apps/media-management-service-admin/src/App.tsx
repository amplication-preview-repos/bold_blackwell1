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
import { BooksList } from "./books/BooksList";
import { BooksCreate } from "./books/BooksCreate";
import { BooksEdit } from "./books/BooksEdit";
import { BooksShow } from "./books/BooksShow";
import { TextsList } from "./texts/TextsList";
import { TextsCreate } from "./texts/TextsCreate";
import { TextsEdit } from "./texts/TextsEdit";
import { TextsShow } from "./texts/TextsShow";
import { CaptionsList } from "./captions/CaptionsList";
import { CaptionsCreate } from "./captions/CaptionsCreate";
import { CaptionsEdit } from "./captions/CaptionsEdit";
import { CaptionsShow } from "./captions/CaptionsShow";
import { OrdersList } from "./orders/OrdersList";
import { OrdersCreate } from "./orders/OrdersCreate";
import { OrdersEdit } from "./orders/OrdersEdit";
import { OrdersShow } from "./orders/OrdersShow";
import { ClientsList } from "./clients/ClientsList";
import { ClientsCreate } from "./clients/ClientsCreate";
import { ClientsEdit } from "./clients/ClientsEdit";
import { ClientsShow } from "./clients/ClientsShow";
import { SoundsLabelsList } from "./soundsLabels/SoundsLabelsList";
import { SoundsLabelsCreate } from "./soundsLabels/SoundsLabelsCreate";
import { SoundsLabelsEdit } from "./soundsLabels/SoundsLabelsEdit";
import { SoundsLabelsShow } from "./soundsLabels/SoundsLabelsShow";
import { AccountsList } from "./accounts/AccountsList";
import { AccountsCreate } from "./accounts/AccountsCreate";
import { AccountsEdit } from "./accounts/AccountsEdit";
import { AccountsShow } from "./accounts/AccountsShow";
import { PhonesList } from "./phones/PhonesList";
import { PhonesCreate } from "./phones/PhonesCreate";
import { PhonesEdit } from "./phones/PhonesEdit";
import { PhonesShow } from "./phones/PhonesShow";
import { AccountsBooksList } from "./accountsBooks/AccountsBooksList";
import { AccountsBooksCreate } from "./accountsBooks/AccountsBooksCreate";
import { AccountsBooksEdit } from "./accountsBooks/AccountsBooksEdit";
import { AccountsBooksShow } from "./accountsBooks/AccountsBooksShow";
import { SoundsList } from "./sounds/SoundsList";
import { SoundsCreate } from "./sounds/SoundsCreate";
import { SoundsEdit } from "./sounds/SoundsEdit";
import { SoundsShow } from "./sounds/SoundsShow";
import { ClientsBooksList } from "./clientsBooks/ClientsBooksList";
import { ClientsBooksCreate } from "./clientsBooks/ClientsBooksCreate";
import { ClientsBooksEdit } from "./clientsBooks/ClientsBooksEdit";
import { ClientsBooksShow } from "./clientsBooks/ClientsBooksShow";
import { TextsHashtagsList } from "./textsHashtags/TextsHashtagsList";
import { TextsHashtagsCreate } from "./textsHashtags/TextsHashtagsCreate";
import { TextsHashtagsEdit } from "./textsHashtags/TextsHashtagsEdit";
import { TextsHashtagsShow } from "./textsHashtags/TextsHashtagsShow";
import { HashtagsList } from "./hashtags/HashtagsList";
import { HashtagsCreate } from "./hashtags/HashtagsCreate";
import { HashtagsEdit } from "./hashtags/HashtagsEdit";
import { HashtagsShow } from "./hashtags/HashtagsShow";
import { VideoMetricsList } from "./videoMetrics/VideoMetricsList";
import { VideoMetricsCreate } from "./videoMetrics/VideoMetricsCreate";
import { VideoMetricsEdit } from "./videoMetrics/VideoMetricsEdit";
import { VideoMetricsShow } from "./videoMetrics/VideoMetricsShow";
import { LabelsList } from "./labels/LabelsList";
import { LabelsCreate } from "./labels/LabelsCreate";
import { LabelsEdit } from "./labels/LabelsEdit";
import { LabelsShow } from "./labels/LabelsShow";
import { TextsLabelsList } from "./textsLabels/TextsLabelsList";
import { TextsLabelsCreate } from "./textsLabels/TextsLabelsCreate";
import { TextsLabelsEdit } from "./textsLabels/TextsLabelsEdit";
import { TextsLabelsShow } from "./textsLabels/TextsLabelsShow";
import { CrewList } from "./crew/CrewList";
import { CrewCreate } from "./crew/CrewCreate";
import { CrewEdit } from "./crew/CrewEdit";
import { CrewShow } from "./crew/CrewShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Media Management Service"}
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
          name="Books"
          list={BooksList}
          edit={BooksEdit}
          create={BooksCreate}
          show={BooksShow}
        />
        <Resource
          name="Texts"
          list={TextsList}
          edit={TextsEdit}
          create={TextsCreate}
          show={TextsShow}
        />
        <Resource
          name="Captions"
          list={CaptionsList}
          edit={CaptionsEdit}
          create={CaptionsCreate}
          show={CaptionsShow}
        />
        <Resource
          name="Orders"
          list={OrdersList}
          edit={OrdersEdit}
          create={OrdersCreate}
          show={OrdersShow}
        />
        <Resource
          name="Clients"
          list={ClientsList}
          edit={ClientsEdit}
          create={ClientsCreate}
          show={ClientsShow}
        />
        <Resource
          name="SoundsLabels"
          list={SoundsLabelsList}
          edit={SoundsLabelsEdit}
          create={SoundsLabelsCreate}
          show={SoundsLabelsShow}
        />
        <Resource
          name="Accounts"
          list={AccountsList}
          edit={AccountsEdit}
          create={AccountsCreate}
          show={AccountsShow}
        />
        <Resource
          name="Phones"
          list={PhonesList}
          edit={PhonesEdit}
          create={PhonesCreate}
          show={PhonesShow}
        />
        <Resource
          name="AccountsBooks"
          list={AccountsBooksList}
          edit={AccountsBooksEdit}
          create={AccountsBooksCreate}
          show={AccountsBooksShow}
        />
        <Resource
          name="Sounds"
          list={SoundsList}
          edit={SoundsEdit}
          create={SoundsCreate}
          show={SoundsShow}
        />
        <Resource
          name="ClientsBooks"
          list={ClientsBooksList}
          edit={ClientsBooksEdit}
          create={ClientsBooksCreate}
          show={ClientsBooksShow}
        />
        <Resource
          name="TextsHashtags"
          list={TextsHashtagsList}
          edit={TextsHashtagsEdit}
          create={TextsHashtagsCreate}
          show={TextsHashtagsShow}
        />
        <Resource
          name="Hashtags"
          list={HashtagsList}
          edit={HashtagsEdit}
          create={HashtagsCreate}
          show={HashtagsShow}
        />
        <Resource
          name="VideoMetrics"
          list={VideoMetricsList}
          edit={VideoMetricsEdit}
          create={VideoMetricsCreate}
          show={VideoMetricsShow}
        />
        <Resource
          name="Labels"
          list={LabelsList}
          edit={LabelsEdit}
          create={LabelsCreate}
          show={LabelsShow}
        />
        <Resource
          name="TextsLabels"
          list={TextsLabelsList}
          edit={TextsLabelsEdit}
          create={TextsLabelsCreate}
          show={TextsLabelsShow}
        />
        <Resource
          name="Crew"
          list={CrewList}
          edit={CrewEdit}
          create={CrewCreate}
          show={CrewShow}
        />
      </Admin>
    </div>
  );
};

export default App;
