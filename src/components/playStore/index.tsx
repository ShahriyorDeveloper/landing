import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import type { FC } from "react";

import iPhone_1 from "../../../public/images/iPhone_1.png";
import iPhone_2 from "../../../public/images/iPhone_2.png";
import telefon from "../../../public/images/telefon2.png";
import right from "../../../public/svgs/right_icon_dark.svg";

const PlayStore: FC = () => {
  const t = useTranslations();

  return (
    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-8 mb-[120px] max-sm:mb-[44px]">
      <div className="bg-mainBoxRgb px-8 pt-8 rounded-[32px] h-[640px] flex flex-col justify-between max-sm:px-4 max-sm:pt-4 max-sm:h-[360px]">
        <div className="flex justify-between">
          <h2 className="text-nav_link leading-[48px] text-[28px] font-normal max-sm:text-[20px] max-sm:leading-6">
            {t("playStore.title1")}
          </h2>
          <div className="w-[128px] ml-3 flex justify-center items-center h-[48px] text-[16px] leading-[48px] font-semibold rounded-[12px] border-[1px] border-main_button_color p-4 max-sm:w-[96px] max-sm:h-[36px] max-sm:text-[10px] max-sm:leading-5 max-sm:px-4">
            <Link href="/" className="text-nowrap">
              {t("download")}
            </Link>
            <Image
              className="ml-2 max-sm:ml-0 w-auto h-auto"
              src={right}
              alt="right icon"
            />
          </div>
        </div>
        <div className="relative md:max-w-[400px] sm:w-[340px]">
          <Image
            className="relative bottom-0 left-1/4 z-10 max-sm:w-[150px] max-sm:h-[260px] max-sm:left-12"
            src={iPhone_1}
            alt="iPhone_1"
          />
          <Image
            className="absolute bottom-0 left-[300px] z-5 max-sm:w-[200px] max-sm:h-[230px] max-sm:left-[80px]"
            src={iPhone_2}
            alt="iPhone_2"
          />
        </div>
      </div>
      <div className="bg-mainBoxRgb px-8 pt-8 rounded-[32px] min-h-[640px] flex flex-col justify-between max-sm:px-4 max-sm:pt-4 max-sm:min-h-[360px]">
        <div className="flex justify-between">
          <h2 className="text-nav_link leading-[48px] w-[560px] text-[28px] font-normal max-sm:text-[20px] max-sm:leading-6">
            {t("playStore.title2")}
          </h2>
          <div className="w-[128px] ml-3 flex justify-center items-center h-[48px] text-[16px] leading-[48px] font-semibold rounded-[12px] border-[1px] border-main_button_color p-4 max-sm:max-w-[96px] max-sm:h-[36px] max-sm:text-[10px] max-sm:leading-5 max-sm:px-4">
            <Link href="/" className="text-nowrap">
              {t("download")}
            </Link>
            <Image className="ml-2 max-sm:ml-0" src={right} alt="right icon" />
          </div>
        </div>
        <div>
          <Image className="" src={telefon} alt="iPhone_1" />
        </div>
      </div>
    </div>
  );
};

export default PlayStore;
