import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

import { type RootState, type AppDispatch } from "./store";

type DispatchFunction = () => AppDispatch;

export const useCustomDispatch: DispatchFunction = useDispatch;
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
