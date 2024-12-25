"use client";
import { createSlice } from "@reduxjs/toolkit"

type State = "loading" | "error" | null;

type InitialState = {
    sign_in: {
        number: string;
        state: State;
    };
    sign_up: {
        birth_date: string;
        first_name: string;
        last_name: string;
        state: State;
    };
    otp_sign_up: {
        verification: string;
        state: State;
    },
    otp_sign_in: {
        verification: string;
        state: State;
    },
    state: "otp-sign-up" | "otp-sign-in" | "sign-in" | "sign-up";
}
const initialState: InitialState = {
    sign_in: {
        number: "",
        state: null,
    },
    sign_up: {
        birth_date: "",
        first_name: "",
        last_name: "",
        state: null,
    },
    otp_sign_up: {
        verification: "",
        state: null,
    },
    otp_sign_in: {
        verification: "",
        state: null,
    },
    state: "sign-in",
}

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setSignIn(
            state,
            { payload }: { payload: Partial<InitialState["sign_in"]> },
        ) {
            state.sign_in = { ...state.sign_in, ...payload };
        },
        setSignUp(state, { payload }: { payload: Partial<InitialState["sign_up"]> }) {
            state.sign_up = { ...state.sign_up, ...payload };
        },
        setSignUpOtp(state, { payload }: { payload: Partial<InitialState["otp_sign_up"]> }) {
            state.otp_sign_up = { ...state.otp_sign_up, ...payload };
        },
        setSignInOtp(state, { payload }: { payload: Partial<InitialState["otp_sign_in"]> }) {
            state.otp_sign_in = { ...state.otp_sign_in, ...payload };
        },
        setAuthState(state, { payload }: { payload: InitialState["state"] }) {
            state.state = payload;
        },
    },
});

export default auth.reducer;
export const { setSignIn, setSignUp, setSignUpOtp, setSignInOtp, setAuthState } = auth.actions;