"use client";

import "react-datepicker/dist/react-datepicker.css";

import Image from "next/image";
import { useTranslations } from "next-intl";
import type { FC } from "react";
import DatePicker from "react-datepicker";

import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Logo from "../../../../../public/svgs/logo.svg";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { setSignUp } from "../../../../redux/slices/auth";

const SignUp: FC = () => {
  const dispatch = useReduxDispatch();
  const { sign_up } = useReduxSelector(({ auth }) => auth);
  const birthDate = sign_up.birth_date ? new Date(sign_up.birth_date) : null;
  const t = useTranslations();

  return (
    <div>
      <DialogHeader>
        <DialogTitle>
          <Image src={Logo} alt="logo" />
        </DialogTitle>
        <DialogDescription className="mt-4 mb-5 text-[#101828] text-[24px] font-[700] leading-[28px]">
          {t("register.title")}
        </DialogDescription>
        <p className="text-[#475467] font-[400] text-[14px] leading-5">
          {t("register.description")}
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

      <div className="grid gap-4 py-4">
        <div className="flex flex-col gap-2 items-start">
          <Label
            htmlFor="name"
            className="text-right text-[#344054] font-[500] text-[14px] leading-5"
          >
            {t("register.name")}
          </Label>
          <Input
            value={sign_up.first_name}
            onChange={(e) =>
              dispatch(setSignUp({ first_name: e.target.value }))
            }
            id="name"
            placeholder={t("register.name")}
            className="col-span-3 bg-[#F7F8F9] border-none"
          />
        </div>
        <div className="flex flex-col gap-2 items-start">
          <Label
            htmlFor="surname"
            className="text-right text-[#344054] font-[500] text-[14px] leading-5"
          >
            {t("register.surname")}
          </Label>
          <Input
            value={sign_up.last_name}
            onChange={(e) => dispatch(setSignUp({ last_name: e.target.value }))}
            id="surname"
            placeholder={t("register.surname")}
            className="col-span-3 bg-[#F7F8F9] border-none"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Label
            htmlFor="birth_date"
            className="text-left text-[#344054] font-[500] text-[14px] leading-5"
          >
            {t("register.birthdate")}
          </Label>
          <DatePicker
            id="birth_date"
            selected={birthDate}
            onChange={(date) =>
              dispatch(
                setSignUp({
                  birth_date: date ? date.toISOString().split("T")[0] : "",
                })
              )
            }
            dateFormat="yyyy-MM-dd"
            placeholderText={t("register.birthdate")}
            className="col-span-3 bg-[#F7F8F9] border-none w-full py-2 px-3 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
