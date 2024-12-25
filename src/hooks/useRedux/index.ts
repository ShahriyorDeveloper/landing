"use client";
import {
    type TypedUseSelectorHook,
    useDispatch,
    useSelector
} from "react-redux";

import type { AppDispatch, RootStore } from "../../redux";

export const useReduxDispatch = () => useDispatch<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<RootStore> = useSelector;
