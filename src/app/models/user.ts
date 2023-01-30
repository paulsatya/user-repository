export interface IUser{
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  company: string;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: ILocation;
}

export interface ILocation {
  latitude: string;
  longitude: string;
}
