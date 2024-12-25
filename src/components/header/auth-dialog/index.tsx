"use client";

import { useTranslations } from "next-intl";
import type { FC } from "react";
import { Toaster } from "sonner";

import { DialogContent, DialogFooter } from "@/components/ui/dialog";
import { setAuthState } from "@/redux/slices/auth";

import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import { Button } from "../../ui/button";
import { useAuthDialogFeatures } from "./features";
import OtpSignIN from "./otpSignIn";
import OtpSignUp from "./otpSignUp";
import SignIn from "./sign-in";
import SignUp from "./sign-up";

const AuthDialog: FC = () => {
  const dispatch = useReduxDispatch();
  const t = useTranslations();

  const { onSignIn, onOtpSignInVerify, onOtpSignUpVerify } =
    useAuthDialogFeatures();
  const { sign_in, otp_sign_up, sign_up, otp_sign_in, state } =
    useReduxSelector(({ auth }) => auth);

  const onSignInHandle = async () => {
    await onSignIn();
  };
  const onSignUpHandle = async () => {
    dispatch(setAuthState("otp-sign-up"));
  };
  const onOtpSignInVerifyHandle = async () => {
    await onOtpSignInVerify();
  };
  const onOtpSignUpVerifyHandle = async () => {
    await onOtpSignUpVerify();
  };
  return (
    <div>
      <Toaster position="top-right" richColors closeButton />
      <DialogContent className="sm:max-w-[425px]">
        <div>
          {state === "sign-in" && <SignIn />}
          {state === "sign-up" && <SignUp />}
          {state === "otp-sign-in" && <OtpSignIN />}
          {state === "otp-sign-up" && <OtpSignUp />}
        </div>

        <DialogFooter>
          {state === "sign-in" && (
            <Button
              disabled={!sign_in.number}
              onClick={onSignInHandle}
              className="bg-nav_button mx-auto w-[100%] hover:bg-nav_button"
            >
              {t("loginBtn")}
            </Button>
          )}
          {state === "sign-up" && (
            <Button
              disabled={
                !sign_up.first_name || !sign_up.last_name || !sign_up.birth_date
              }
              onClick={onSignUpHandle}
              className="bg-nav_button mx-auto w-[100%] hover:bg-nav_button"
            >
              {t("loginBtn")}
            </Button>
          )}
          {state === "otp-sign-in" && (
            <Button
              disabled={otp_sign_in.verification.length !== 6}
              onClick={onOtpSignInVerifyHandle}
              className="bg-nav_button mx-auto w-[100%] hover:bg-nav_button"
            >
              {t("confirmLoginBtn")}
            </Button>
          )}
          {state === "otp-sign-up" && (
            <Button
              disabled={
                otp_sign_up.verification.length !== 6 ||
                otp_sign_up.state === "loading" ||
                !otp_sign_up.verification
              }
              onClick={onOtpSignUpVerifyHandle}
              className="bg-nav_button mx-auto w-[100%] hover:bg-nav_button"
            >
              {t("confirmLoginBtn")}
            </Button>
          )}
        </DialogFooter>

        {/* <div>
        {state === "sign-in" && (
          <div className="flex items-center">
            <h3 className="text-sm">Akkauntingiz yo'qmi</h3>
            <Button
              variant={"link"}
              onClick={() => dispatch(setAuthState("sign-up"))}
            >
              Ro'xatdan o'tish
            </Button>
          </div>
        )}
        {state === "sign-up" && (
          <div className="flex items-center">
            <h3 className="text-sm">Ro'yhatdan o'tganmisiz</h3>
            <Button
              variant={"link"}
              onClick={() => dispatch(setAuthState("sign-in"))}
            >
              Kirish
            </Button>
          </div>
        )}
      </div> */}
      </DialogContent>
    </div>
  );
};

export default AuthDialog;
