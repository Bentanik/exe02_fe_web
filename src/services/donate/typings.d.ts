declare namespace REQUEST {
}

declare namespace API {
  type TDonate = {
    id: string;
    createdDate: string;
    orderId: string;
    amount: number;
    user?: API.TUser | null;
  }

  type TGetDonates = {
    donates: TDataWithPagin<TDonate>;
  }
}
