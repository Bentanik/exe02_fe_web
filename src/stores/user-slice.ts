import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
  accountInfo?: API.TAuthUserDTO | null;
}

const initialState: InitialState = { accountInfo: null };

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<API.TAuthUserDTO>) => {
      state.accountInfo = action.payload;
    },
    reset: (state) => {
      state.accountInfo = null;
    },
  },
});

export const { loginSuccess, reset } = userSlice.actions;

export default userSlice.reducer;
