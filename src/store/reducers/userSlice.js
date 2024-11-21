import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '../reducers/services/authService';

export const getUserProfile = createAsyncThunk(
  'user/profile',
  async (_, { rejectWithValue }) => {
    try {
      const data = await authService.getUserProfile();
      return data.body;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserName = createAsyncThunk(
  'user/updateUserName',
  async (newUserName, { rejectWithValue, dispatch }) => {
    try {
      const response = await authService.updateUserName(newUserName);
      dispatch(getUserProfile());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: '',
    lastName: '',
    userName: '',
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.userName = action.payload.userName;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUserName.fulfilled, (state, action) => {
        if (action.payload && action.payload.userName) {
          state.userName = action.payload.userName;
        }
     });
  }
});

export default userSlice.reducer;