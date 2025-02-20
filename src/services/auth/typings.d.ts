declare namespace REQUEST {
  type TRegister = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    gender: number;
  };

  type TLogin = {
    email: string;
    password: string;
  };

  type TAuthVerifyEmail = {
    email: string;
  };
}

declare namespace API {
  type TAuthTokenDTO = {
    accessToken: string;
    refreshToken: string;
    tokenType: string;
  };

  type TAuthUserDTO = {
    email: string;
    fullName: string;
    avatarUrl: string;
    roleName: string;
  };

  type TLoginResponse = {
    authTokenDTO: TAuthTokenDTO;
    authUserDTO: TAuthUserDTO;
  };
}
