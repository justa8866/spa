import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { Middleware } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    console.warn("error");
    toast.warn(`${action.payload.status} - Error occurs while fetching data`);
  }

  return next(action);
};
