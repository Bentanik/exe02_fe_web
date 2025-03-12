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
}
