"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

// import { FaArrowRight } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";

import cash from "../../../public/images/cash.png";
import right from "../../../public/svgs/right_icon.svg";

const Main: React.FC = () => {
  const t = useTranslations();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <main className="w-[90%] m-auto my-[120px] max-sm:my-[32px]">
      <div className="lg:grid grid-cols-3 max-sm:hidden mb-[120px] gap-x-[32px] max-sm:gap-x-[16px]">
        <div className="bg-white min-h-[580px] rounded-[32px] max-sm:mt-[12px] p-8">
          <h2 className="leading-[48px] text-main_h2_color text-[32px] font-normal">
            {t("mainTitle1")}
          </h2>
        </div>
        <div className="bg-white min-h-[580px] max-sm:mt-[12px] rounded-[32px] p-8">
          <h2 className="leading-[48px] text-main_h2_color text-[32px] font-normal">
            {t("mainTitle2")}
          </h2>
        </div>
        <div className="bg-white p-8 h-[580px] max-sm:h-[280px] rounded-[32px] max-sm:mt-[12px]">
          <h2 className="leading-[48px] text-[32px] text-main_h2_color font-normal">
            {t("mainTitle3")}
          </h2>
        </div>
      </div>
      <div className="lg:hidden max-sm:grid mb-[32px] gap-x-[12px] max-sm:gap-x-[16px]">
        <div className="mx-auto">
          <Carousel setApi={setApi} className="w-full max-w-xs ">
            <CarouselContent>
              <CarouselItem className="min-h-[200px]">
                <Card className="bg-white rounded-[20px] p-4 flex justify-center border-none">
                  <CardContent className="flex aspect-square p-0">
                    <h2 className="leading-[22px] text-main_h2_color text-[20px] font-normal">
                      {t("mainTitle1")}
                    </h2>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="min-h-[200px]">
                <Card className="bg-white rounded-[20px] p-4 flex justify-center border-none">
                  <CardContent className="flex aspect-square p-0">
                    <h2 className="leading-[22px] text-main_h2_color text-[20px] font-normal">
                      {t("mainTitle2")}
                    </h2>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="min-h-[200px]">
                <Card className="bg-white rounded-[20px] p-4 flex justify-center border-none">
                  <CardContent className="flex aspect-square p-0">
                    <h2 className="leading-[22px] text-main_h2_color text-[20px] font-normal">
                      {t("mainTitle3")}
                    </h2>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <div className="py-2 text-sm text-muted-foreground relative">
              {t("slide")} {current} {t("of")} {count}
              {/* <div className="absolute top-6 right-10">
                <CarouselPrevious>
                  <FaArrowRight className="h-6 w-6 text-red-500" />
                </CarouselPrevious>
                <CarouselNext className=" text-black bg-black" />
              </div> */}
            </div>
          </Carousel>
        </div>
      </div>

      <div className="bg-gradient-to-tl h-[740px] from-headerBlock to-headerBlock1 px-8 rounded-[32px] flex max-md:flex-col justify-center items-center max-sm:max-w-[380px] max-sm:p-4 max-sm:justify-between max-sm:h-[520px]">
        <div className="pr-6">
          <h2 className="leading-[48px] w-[600px] text-[32px] font-normal text-header_h1_color max-sm:w-full max-sm:text-[24px] max-sm:leading-[26px]">
            {t("mainFirst.title1")}
          </h2>
          <p className="text-white flex leading-[48px] mt-[24px] text-[20px] font-semibold max-sm:text-[14px] max-sm:leading-5">
            <Link href="/">{t("mainFirst.link")}</Link>
            <Image
              className="ml-2 w-auto h-auto"
              src={right}
              alt="right icon"
            />
          </p>
        </div>

        <Image className="w-full" src={cash} alt="cash" />
      </div>
    </main>
  );
};

export default Main;
