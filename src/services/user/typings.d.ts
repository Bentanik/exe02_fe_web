declare namespace REQUEST {
  type TGetBillById = {
    billId: string;
  };
}

declare namespace API {
  type TGetBillByIdDTO = {
    fullName: string;
    dateSubcribe: DateTime;
    nameSubscribe: string;
  };

  type TUser = {
    id: string;
    fullName: string;
    email: string;
  }

  type TGetUsers = {
    users: TDataWithPagin<TUser>;
  }
}
