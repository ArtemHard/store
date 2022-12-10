import {
  dataUserFromServer,
  serverTokenType,
} from "../../api/apiTypes/apiTypes";

export interface UserSliceType {
  user: UsersTypes;
}

export type UsersTypes = UserType | dataUserFromServer | null | serverTokenType;

export interface UserType {
  id: number;
  name: string;
  email: string;
  phone: string;
  token?: string;
  additionalPhone?: {
    phone: string;
    describe: string;
  };
  orders?: [orderType] | [];
}

interface orderType {
  orderNumber: number;
  position: [orderPositionType];
  price: number;
}

interface orderPositionType {
  productId: number;
  count: number;
  price: number;
}
