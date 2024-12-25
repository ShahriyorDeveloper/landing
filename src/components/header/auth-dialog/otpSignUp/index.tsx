"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import type { FC } from "react";

import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import Logo from "../../../../../public/svgs/logo.svg";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { setSignUpOtp } from "../../../../redux/slices/auth";

const OtpSignUp: FC = () => {
  const dispatch = useReduxDispatch();
  const { sign_in } = useReduxSelector(({ auth }) => auth);
  const t = useTranslations();

  return (
    <div>
      <DialogHeader>
        <DialogTitle>
          <Image src={Logo} alt="logo" />
        </DialogTitle>
        <DialogDescription className="mt-4 mb-5 text-[#101828] text-[24px] font-[700] leading-[28px]">
          {t("otp.title")}
        </DialogDescription>
        <p>
          {t("otp.title")} {sign_in.number} {/*  Изменить номер */}
        </p>
        <DialogClose asChild>
          <Button
            variant="ghost"
            className="absolute top-2 right-2 text-[18px] text-[#667085] hover:bg-none"
          >
            X
          </Button>
        </DialogClose>
      </DialogHeader>
      <div className="w-full flex gap-2 items-start justify-center my-4">
        <InputOTP
          onChange={(e) => dispatch(setSignUpOtp({ verification: e }))}
          maxLength={6}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  );
};

export default OtpSignUp;
