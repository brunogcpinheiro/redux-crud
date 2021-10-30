import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3000/api";

type User = {
  name: string;
  email: string;
  createdAt: string;
};

type UserState = {
  status: string;
  users: User[];
};

const initialState: UserState = {
  status: "",
  users: [],
};

export const fetchAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  // throw new Error();
  return axios.get("/users").then(({ data }) => data);
});

export const createUser = createAsyncThunk(
  "users/createUser",
  async (payload: User) => {
    // throw new Error();
    return axios.post("/users", payload).then(({ data }) => data);
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.status = "success";
      state.users = action.payload.users;
    });
    builder.addCase(fetchAllUsers.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(
      createUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.status = "success";
        state.users.push(action.payload);
      }
    );
  },
});

export default usersSlice.reducer;
