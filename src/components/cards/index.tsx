import { useTranslations } from "next-intl";
import type { FC } from "react";

import Card from "./card";

const Cards: FC = () => {
  const t = useTranslations();

  const cardData = [
    {
      title: t("cardsData.title1"),
      description: t("cardsData.description1"),
      backgroundColor: "bg-cardsBgPrimary",
    },
    {
      title: t("cardsData.title2"),
      description: t("cardsData.description2"),
      backgroundColor: "bg-cardsBgSuccess",
    },
    {
      title: t("cardsData.title3"),
      description: t("cardsData.description3"),
      backgroundColor: "bg-cardsBgBlue",
    },
    {
      title: t("cardsData.title4"),
      description: t("cardsData.description4"),
      backgroundColor: "bg-cardsBgPrimary",
    },
    {
      title: t("cardsData.title5"),
      description: t("cardsData.description5"),
      backgroundColor: "bg-cardsBgSuccess",
    },
    {
      title: t("cardsData.title6"),
      description: t("cardsData.description6"),
      backgroundColor: "bg-cardsBgBlue",
    },

    {
      title: t("cardsData.title7"),
      description: t("cardsData.description7"),
      backgroundColor: "bg-cardsBgPrimary",
    },
    {
      title: t("cardsData.title8"),
      description: t("cardsData.description8"),
      backgroundColor: "bg-cardsBgSuccess",
    },
    {
      title: t("cardsData.title9"),
      description: t("cardsData.description9"),
      backgroundColor: "bg-cardsBgBlue",
    },

    {
      title: t("cardsData.title10"),
      description: t("cardsData.description10"),
      backgroundColor: "bg-cardsBgPrimary",
    },
    {
      title: t("cardsData.title11"),
      description: t("cardsData.description11"),
      backgroundColor: "bg-cardsBgSuccess",
    },
    {
      title: t("cardsData.title12"),
      description: t("cardsData.description12"),
      backgroundColor: "bg-cardsBgBlue",
    },
  ];

  return (
    <div className="bg-cardsMainBg">
      <div className="w-[90%] m-auto py-24">
        <div className="bg-cardBg  p-10 rounded-[32px] mb-8">
          <div>
            <h2 className="text-[42px] leading-[44px] mb-4 font-bold">
              {t("cardsTitles.titleFirst")}
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-10">
            {cardData.slice(0, 3).map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </div>
        </div>
        <div className="bg-cardBg  p-10 rounded-[32px] mb-8">
          <div>
            <h2 className="text-[42px] leading-[44px] mb-4 font-bold">
              {t("cardsTitles.titleSecond")}
            </h2>
            <p className="text-mainP leading-[28px] text-[20px] font-medium ">
              {t("cardsTitles.description1")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-10">
            {cardData.slice(3, 6).map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </div>
        </div>
        <div className="bg-cardBg  p-10 rounded-[32px] mb-8">
          <div>
            <h2 className="text-[42px] leading-[44px] mb-4 font-bold">
              {t("cardsTitles.titleThird")}
            </h2>
            <p className="text-mainP leading-[28px] text-[20px] font-medium ">
              {t("cardsTitles.description2")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-10">
            {cardData.slice(6, 9).map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </div>
        </div>
        <div className="bg-cardBg  p-10 rounded-[32px] mb-8">
          <div>
            <h2 className="text-[42px] leading-[44px] mb-4 font-bold">
              {t("cardsTitles.titleFourth")}
            </h2>
            <p className="text-mainP leading-[28px] text-[20px] font-medium ">
              {t("cardsTitles.description3")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-10">
            {cardData.slice(9, 12).map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
