import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../models/user.model";
import { userLogin } from "../mock/user.api";
import { RootState } from "./store";

export interface UserState {
  user: User | null;
}

export type LoginInputType = {
  email: string | null;
  password: string;
};

const name = "user";
const initialState = createInitialState();

function createInitialState(): UserState {
  const localStorageValue = localStorage.getItem(name);
  const user = localStorageValue ? JSON.parse(localStorageValue) : null;
  return {
    user,
  };
}

export const userSlice = createSlice({
  name,
  initialState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const login = createAsyncThunk(
  `${name}/login`,
  async ({ email, password }: LoginInputType, { dispatch }) => {
    try {
      const response = await userLogin({ email, password });
      const user = response.data.user;
      dispatch(setUser(user));
      localStorage.setItem(name, JSON.stringify(user));
    } catch (error) {
      console.log("login >", error);
    }
  }
);
export const logout = createAsyncThunk(`${name}/logout`, (_, { dispatch }) => {
  dispatch(setUser(null));
  localStorage.removeItem(name);
});

export const userSelector = (state: RootState) => state.user;

export default userSlice.reducer;
