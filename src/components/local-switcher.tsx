"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import rus from "../../public/images/rus.png";
import usa from "../../public/images/usa.png";
import uzb from "../../public/images/uzb.png";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectValueChange = (value: string) => {
    startTransition(() => {
      router.replace(`/${value}`, { scroll: false });
    });
  };
  return (
    <div className="justify-between">
      <Select
        defaultValue={localActive}
        onValueChange={onSelectValueChange}
        disabled={isPending}
      >
        <SelectTrigger className="select-trigger flex justify-between py-2 px-6 w-[108px] text[20px] sm:text[14px] leading-6 h-[48px] rounded-[12px] border-nav_lang_border p-0 appearance-none border-[1px] text-nav_link font-semibold">
          <SelectValue placeholder="UZB" className="" />
        </SelectTrigger>

        <SelectContent className="flex">
          <div className="flex w-[347px] h-[72px] rounded-[26px] p-3 text[20px] sm:text[14px]">
            <SelectItem value="uz" className="p-3">
              <div className="flex items-center justify-around p-2">
                <span className="leading-6 pl-3 rounded-[12px] border-nav_lang_border text-nav_link font-semibold">
                  UZ
                </span>
                <Image
                  src={uzb}
                  alt="uzb"
                  className="ml-2 w-6 h-6 rounded-full"
                />
              </div>
            </SelectItem>
            <SelectItem value="en" className="p-3 rounded">
              <div className="flex items-center justify-around">
                <span className="leading-6 pl-3 pr-3 rounded-[12px] border-nav_lang_border text-nav_link font-semibold">
                  EN
                </span>
                <Image src={usa} alt="usa" className="w-6 h-6 rounded-full" />
              </div>
            </SelectItem>
            <SelectItem value="ru" className="p-3">
              <div className="flex items-center">
                <span className="leading-6 pl-3 pr-3 rounded-[12px] border-nav_lang_border text-nav_link font-semibold">
                  {" "}
                  RU
                </span>
                <Image src={rus} alt="rus" className="w-6 h-6 rounded-full" />
              </div>
            </SelectItem>
          </div>
        </SelectContent>
      </Select>
    </div>
  );
}
