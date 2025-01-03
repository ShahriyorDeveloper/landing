import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import type { FC } from "react";

import facebook from "../../../public/svgs/Facebook.svg";
import linkedin from "../../../public/svgs/Linkedin.svg";
import Logo from "../../../public/svgs/logo.svg";
import twitter from "../../../public/svgs/Twitter.svg";

const Footer: FC = () => {
  const t = useTranslations();
  return (
    <div className="">
      <div className="w-[90%] m-auto ">
        <div className="flex justify-between items-center max-sm:justify-center max-md:flex-col">
          <div className="mt-6 mb-[64px] max-sm:mb-[24px] max-sm:text-center">
            <Image src={Logo} alt="logo" className="max-sm:mx-auto" />
            <ul className="mt-8 max-sm:flex max-sm:flex-col text-footer_text_color text-[16px] font-bold">
              <li className="inline-block mr-8 leading-6 ">
                <Link href="/">{t("footer.titleLi1")}</Link>
              </li>
              <li className="inline-block mr-8 leading-6 max-sm:mt-3">
                <Link href="/">{t("footer.titleLi2")}</Link>
              </li>
              <li className="inline-block mr-8 leading-6 max-sm:mt-3">
                <Link href="/">{t("footer.titleLi3")}</Link>
              </li>
              <li className="inline-block mr-8 leading-6 max-sm:mt-3">
                <Link href="/">{t("footer.titleLi4")}</Link>
              </li>
              <li className="inline-block mr-8 leading-6 max-sm:mt-3">
                <Link href="/">{t("footer.titleLi5")}</Link>
              </li>
            </ul>
          </div>
          <div className="max-md:mb-6 flex items-end">
            <Image
              src={linkedin}
              alt="linkedin"
              className="mr-[15px] max-sm:mr-[32px]"
            />
            <Image
              src={facebook}
              alt="facebook"
              className="mr-[15px] max-sm:mr-[32px]"
            />
            <Image src={twitter} alt="twitter" />
          </div>
        </div>

        <div className="flex justify-between border-t-[1px] border-footerBorder pb-12 max-sm:flex-wrap max-sm:justify-center">
          <p className="mt-8 text-mainP leading-[24px] text-[16px] font-medium max-sm:text-center max-sm:text-[12px] max-sm:leading-[24px]">
            © 2077 {t("footer.copyryting")}
          </p>

          <div className="mt-8">
            <ul className="text-mainP leading-[24px] text-[16px] font-medium max-sm:text-[12px] max-sm:leading-5">
              <li className="inline-block mr-8 ">
                <Link href="/">{t("footer.title7")}</Link>
              </li>
              <li className="inline-block mr-8 ">
                <Link href="/">{t("footer.title8")}</Link>
              </li>
              <li className="inline-block ">
                <Link href="/">{t("footer.title9")}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
