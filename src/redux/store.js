import { configureStore } from "@reduxjs/toolkit";
import { playerReduser } from "./playerSlice";

export const store = configureStore({ reducer: playerReduser });
