import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AccountsTitle } from "../accounts/AccountsTitle";
import { PhonesTitle } from "../phones/PhonesTitle";
import { TextsTitle } from "../texts/TextsTitle";
import { VideoMetricsTitle } from "../videoMetrics/VideoMetricsTitle";

export const OrdersCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="account.id"
          reference="Accounts"
          label="Account"
        >
          <SelectInput optionText={AccountsTitle} />
        </ReferenceInput>
        <ReferenceInput source="phone.id" reference="Phones" label="Phone">
          <SelectInput optionText={PhonesTitle} />
        </ReferenceInput>
        <ReferenceInput source="text.id" reference="Texts" label="Text">
          <SelectInput optionText={TextsTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="videoMetricsItems"
          reference="VideoMetrics"
        >
          <SelectArrayInput
            optionText={VideoMetricsTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
