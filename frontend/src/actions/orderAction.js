import axios from "axios";
import { server } from "../store";

//Create Order
export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: "createOrderRequest" });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.post(`${server}/order/new`, order, config);

    dispatch({
      type: "createOrderSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "createOrderFail",
      payload: error.response.data.message,
    });
  }
};

//My Orders
export const myOrders = () => async (dispatch) => {
  try {
    dispatch({ type: "myOrdersRequest" });

    const { data } = await axios.get(
      `${server}/orders/me`,

      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "myOrdersSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "myOrdersFail",
      payload: error.response.data.message,
    });
  }
};

//get order details
export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "orderDetailsRequest" });

    const { data } = await axios.get(
      `${server}/order/${id}`,

      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "orderDetailsSuccess",
      payload: data.order,
    });
  } catch (error) {
    dispatch({
      type: "orderDetailsFail",
      payload: error.response.data.message,
    });
  }
};

//Get All Orders --Admin
export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch({ type: "allOrdersRequest" });

    const { data } = await axios.get(
      `${server}/admin/orders`,

      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "allOrdersSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "allOrdersFail",
      payload: error.response.data.message,
    });
  }
};

//Update Order
export const updateOrder = (id, order) => async (dispatch) => {
  try {
    dispatch({ type: "updateOrderRequest" });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `${server}/admin/order/${id}`,
      order,
      config
    );

    dispatch({
      type: "updateOrderSuccess",
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: "updateOrderFail",
      payload: error.response.data.message,
    });
  }
};

//Delete Order
export const deleteOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteOrderRequest" });

    const { data } = await axios.delete(
      `${server}/admin/order/${id}`,

      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteOrderSuccess",
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: "deleteOrderFail",
      payload: error.response.data.message,
    });
  }
};

//Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: "clearErrors" });
};
