export interface UserSliceType {
  user: UserType | null;
}

export interface UserType {
  id: string;
  name: string;
  email: string;
  phone: string;
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
