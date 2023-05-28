import axios from "axios";
import { server } from "../store";

//Login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      config
    );

    dispatch({
      type: "loginSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "loginFail",
      payload: error.response.data.message,
    });
  }
};

//Register
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "registerUserRequest" });

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    };

    const { data } = await axios.post(`${server}/register`, userData, config);

    dispatch({
      type: "registerUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "registerUserFail",
      payload: error.response.data.message,
    });
  }
};

//Load User
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });

    const { data } = await axios.get(
      `${server}/me`,

      {
        withCredentials: true,
      }
    );

    dispatch({ type: "loadUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "loadUserFail", payload: error.response.data.message });
  }
};

//Logout User
export const logout = () => async (dispatch) => {
  try {
    await axios.get(
      `${server}/logout`,

      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "logoutSuccess",
    });
  } catch (error) {
    dispatch({
      type: "logoutfail",
      payload: error.response.data.message,
    });
  }
};

//Update Profile
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "updateProfileRequest" });

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    };

    const { data } = await axios.put(`${server}/me/update`, userData, config);

    dispatch({
      type: "updateProfileSuccess",
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: "updateProfileFail",
      payload: error.response.data.message,
    });
  }
};

//Update Password
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: "updatePasswordRequest" });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `${server}/password/update`,
      passwords,
      config
    );

    dispatch({
      type: "updatePasswordSuccess",
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: "updatePasswordFail",
      payload: error.response.data.message,
    });
  }
};

//Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: "forgotPasswordRequest" });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `${server}/password/forgot`,
      email,
      config
    );

    dispatch({
      type: "forgotPasswordSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "forgotPasswordFail",
      payload: error.response.data.message,
    });
  }
};

//Reset Password
export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({ type: "resetPasswordRequest" });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `${server}/password/reset/${token}`,
      passwords,
      config
    );

    dispatch({
      type: "resetPasswordSuccess",
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: "resetPasswordFail",
      payload: error.response.data.message,
    });
  }
};

//Get All Users
export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: "allUsersRequest",
    });
    const { data } = await axios.get(
      `${server}/admin/users`,

      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "allUsersSuccess",
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: "allUsersFail",
      payload: error.response.data.message,
    });
  }
};

//Get User Details
export const getUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "userDetailsRequest",
    });
    const { data } = await axios.get(
      `${server}/admin/user/${id}`,

      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "userDetailsSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "userDetailsFail",
      payload: error.response.data.message,
    });
  }
};

//Update User
export const updateUser = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: "updateUserRequest" });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `${server}/admin/user/${id}`,
      userData,
      config
    );

    dispatch({
      type: "updateUserSuccess",
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: "updateUserFail",
      payload: error.response.data.message,
    });
  }
};

//Delete User
export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteUserRequest" });

    const { data } = await axios.delete(
      `${server}/admin/user/${id}`,

      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteUserSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "deleteUserFail",
      payload: error.response.data.message,
    });
  }
};

//Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: "clearErrors" });
};
