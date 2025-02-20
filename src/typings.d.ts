declare type TMeta = {
  detail: string;
  errorCode: string;
  status: number;
  title: string;
};

declare type TResponse = {
  value: {
    code: string;
    message: string;
  };
  isSuccess: boolean;
  isFailure: boolean;
  error: {
    code: string;
    message: string;
  };
};

declare type TResponseData<T = object> = {
  value: {
    code: string;
    message: string;
    data: T;
  };
  isSuccess: boolean;
  isFailure: boolean;
  error: {
    code: string;
    message: string;
  };
};

declare type TResponseDataHub<T = object> = {
  Value: {
    Code: string;
    Message: string;
    Data: T;
  };
  IsSuccess: boolean;
  IsFailure: boolean;
  Error: {
    Code: string;
    Message: string;
  };
};

declare type TDataWithPagin<T = object> = {
  items: T[];
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

declare type TRequestGetAll = {
  searchTerm?: string | null;
  includes?: string[] | null;
  sortColumn?: string | null;
  sortOrder?: string| null;
  pageIndex: number | 1;
  pageSize?: number | 10;
}