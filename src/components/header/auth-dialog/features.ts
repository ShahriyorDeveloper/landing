"use client";
import axios from "axios";
import { useTranslations } from "next-intl";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { toast } from "sonner";

import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import {
  setAuthState,
  setSignIn,
  setSignInOtp,
  setSignUpOtp,
} from "../../../redux/slices/auth";

type ON_SIGN_IN = () => Promise<void>;
type ON_OTP_SIGN_UP_VERIFY = () => Promise<void>;
type ON_OTP_SIGN_IN_VERIFY = () => Promise<void>;

type AuthDialogFeatures = {
  onSignIn: ON_SIGN_IN;
  onOtpSignUpVerify: ON_OTP_SIGN_UP_VERIFY;
  onOtpSignInVerify: ON_OTP_SIGN_IN_VERIFY;
};

export const useAuthDialogFeatures = (): AuthDialogFeatures => {
  const { sign_in, otp_sign_in, otp_sign_up, sign_up } = useReduxSelector(
    ({ auth }) => auth
  );
  const dispatch = useReduxDispatch();
  const signIn = useSignIn();
  const t = useTranslations();

  const onSignIn: ON_SIGN_IN = async () => {
    dispatch(setSignIn({ state: "loading" }));

    try {
      const data = await axios({
        url: `https://api.visitca.uz/v1/customer/by-phone?phone=%2B${sign_in.number.replace(/\D+/g, "")}`,
      });
      if (data.status === 200) {
        await axios({
          url: "https://api.visitca.uz/v1/auth/customer-login",
          method: "POST",
          data: {
            phone: `+${sign_in.number?.replace("+", "").replace(/\D+/g, "")}`,
          },
        });
        dispatch(setAuthState("otp-sign-in"));
      } else {
        toast.warning(t("phoneOtpActive"));
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response?.status === 404) {
        dispatch(setAuthState("sign-up"));
        await axios({
          url: "https://api.visitca.uz/v1/auth/customer-register",
          method: "POST",
          data: {
            phone: `+${sign_in.number.replace("+", "").replace(/\D+/g, "")}`,
          },
        });
        toast.warning(t("phoneWarning.title"));
      } else if (error.response?.status === 500) {
        toast.warning(t("phoneOtpActive"));
      } else {
        toast.error(t("phoneError.title"), error);
      }
    }
  };

  const onOtpSignUpVerify: ON_OTP_SIGN_UP_VERIFY = async () => {
    dispatch(setSignUpOtp({ state: "loading" }));

    const { data } = await axios({
      url: "https://api.visitca.uz/v1/auth/customer-register-confirm",
      method: "POST",
      data: {
        code: Number(otp_sign_up.verification),
        customer: {
          birth_date: sign_up.birth_date,
          email: "gmail.com",
          fcm_token: "",
          first_name: sign_up.first_name,
          language: "ru",
          last_name: sign_up.last_name,
          phone: `+${sign_in.number.replace("+", "").replace(/\D+/g, "")}`,
          platform_id: "",
          registration_source: "website",
        },
        phone: `+${sign_in.number.replace("+", "").replace(/\D+/g, "")}`,
      },
    });
    toast.success(t("phoneSuccessLogin.title"));
    signIn({
      auth: {
        token: data?.access_token,
        type: "Bearer",
      },
      userState: data?.customer?.first_name,
    });
    dispatch(setSignUpOtp({ state: null }));
    window.location.reload();
  };
  const onOtpSignInVerify: ON_OTP_SIGN_IN_VERIFY = async () => {
    try {
      dispatch(setSignInOtp({ state: "loading" }));
      const { data } = await axios({
        url: "https://api.visitca.uz/v1/auth/customer-login-confirm",
        method: "POST",
        data: {
          code: Number(otp_sign_in.verification),
          fcm_token: "",
          platform_id: "",
          phone: `+${sign_in.number.replace("+", "").replace(/\D+/g, "")}`,
        },
      });
      toast.success(t("phoneSuccessLogin.title"));

      signIn({
        auth: {
          token: data?.access_token,
          type: "Bearer",
        },
        userState: data?.customer?.first_name,
      });

      dispatch(setSignInOtp({ state: null }));
      window.location.reload();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.log(error);
      dispatch(setSignInOtp({ state: "error" }));
    }
  };

  return {
    onSignIn,
    onOtpSignInVerify,
    onOtpSignUpVerify,
  };
};
