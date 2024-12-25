"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import MaskedInput from "react-text-mask";
import * as yup from "yup";

import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import Logo from "../../../../../public/svgs/logo.svg";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { setSignIn } from "../../../../redux/slices/auth";

const phoneNumberMask = [
  "+",
  "9",
  "9",
  "8",
  "-",
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
];

const SignIn: FC = () => {
  const dispatch = useReduxDispatch();
  const {
    sign_in: { number },
  } = useReduxSelector(({ auth }) => auth);
  const t = useTranslations();
  const schema = yup.object().shape({
    phone_number: yup
      .string()
      .required("Phone number is required")
      .matches(
        /^\+998\s?-?(90|91|93|94|95|98|99|33|97|71)\s?-?\d{3}\s?-?\d{2}\s?-?\d{2}$/,
        "Invalid phone number format"
      ),
  });

  const {
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <DialogHeader>
        <DialogTitle>
          <Image src={Logo} alt="logo" />
        </DialogTitle>
        <DialogDescription className="mt-4 mb-5 text-[#101828] text-[24px] font-[700] leading-[28px]">
          {t("login.title")}
        </DialogDescription>
        <DialogClose asChild>
          <Button
            variant="ghost"
            className="absolute top-2 right-2 text-[18px] text-[#667085]"
          >
            X
          </Button>
        </DialogClose>
      </DialogHeader>

      <div className="grid gap-4 py-4 mb-2">
        <div className="flex flex-col gap-2 items-start">
          <Label
            htmlFor="phone"
            className="text-left text-[#344054] font-[500] text-[14px] leading-5"
          >
            {t("login.phone")}
          </Label>

          <MaskedInput
            mask={phoneNumberMask}
            id="phone"
            placeholder="+998-99-999-99-99"
            value={number}
            type="tel"
            onChange={(e) => {
              dispatch(setSignIn({ number: e.target.value }));
            }}
            className="col-span-3 bg-[#F7F8F9] border-none w-full py-2.5 px-3.5 rounded-[8px]"
          />
          {errors.phone_number && (
            <span className="text-red-500">{errors.phone_number.message}</span>
          )}
        </div>
      </div>

      <p>
        {t("login.agree")}
        <Link
          href="https://www.termsfeed.com/live/30ab43ab-2580-4b3f-ae49-6be20be870b3"
          className="text-blue-500 underline ml-1"
          target="_blank"
        >
          {t("login.offerta")}
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
