export interface signUpApi {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface dataUserFromServer {
  id: number;
  email: string;
  name: string;
  token: string;
}

export interface signInApi {
  email: string;
  password: string;
}

export interface serverTokenType {
  token: string;
}
