export interface UserCredential {
  phoneNumber: string;
  email: string;
  password: string;
  name: string;
  lastName: string;
  addresses : Address[],
  cards: Card[]
}
export interface Address {
  address: string;
  province: string;
  city: string;
  tag: boolean;
  isDefault: string;
  zipCode: string;
}
export interface Card {
  number: string;
  CVV2: string;
  isDefault: string;
  exp: boolean;
  bank: string;
}

