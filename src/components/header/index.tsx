"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { GiCancel } from "react-icons/gi";
import { HiMenuAlt2 } from "react-icons/hi";
import { toast, Toaster } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import bino from "../../../public/images/bino.png";
import headerHome from "../../../public/images/chamadon.png";
import moshina from "../../../public/images/moshina.png";
import savat from "../../../public/images/savat.png";
import uy from "../../../public/images/uy.png";
import down from "../../../public/svgs/down.svg";
import Logo from "../../../public/svgs/logo.svg";
import LocalSwitcher from "../local-switcher";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import AuthDialog from "./auth-dialog";

const Header = () => {
  const t = useTranslations();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser<string>();
  const signOut = useSignOut();

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <Toaster position="top-right" richColors closeButton />
      <nav className={`w-full ${isMenuOpen ? "bg-white" : null}`}>
        <div className="max-sm:hidden w-[90%] m-auto flex items-center h-[73px] justify-between gap-4">
          <div className="flex items-center">
            <Link href="/">
              <Image src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="flex items-center flex-wrap">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="px-5 py-3 hover:bg-transparent bg-transparent border-none text-nav_link font-semibold text-[20px] leading-6"
                >
                  {t("nav_titles.title1")}{" "}
                  <Image src={down} alt="down" className="" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[55%] ml-16 rounded-[24px] p-8 mt-5">
                <div>
                  <div>
                    <h2 className="text-nav_link font-normal text-[32px] leading-10 mb-8">
                      {t("popover_headings.title1")}
                    </h2>
                    <div className="grid grid-cols-4 gap-x-[24px]">
                      <div className="flex items-center">
                        <Image
                          src={moshina}
                          alt="moshina"
                          className="mr-[20px] w-[56px] h-[56px] rounded-[14px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            {t("popover_block1.title1")}
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            {t("popover_block1.description1")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={savat}
                          alt="moshina"
                          className="mr-[20px] w-[56px] h-[56px] rounded-[14px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            {t("popover_block1.title2")}
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            {t("popover_block1.description2")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={uy}
                          alt="moshina"
                          className="mr-[20px] w-[56px] h-[56px] rounded-[14px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            {t("popover_block1.title3")}
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            {t("popover_block1.description3")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-nav_link font-normal text-[32px] leading-10 mb-8 mt-[48px]">
                      {t("popover_headings.title2")}
                    </h2>
                    <div className="grid grid-cols-4 gap-x-[24px] gap-y-[32px]">
                      <div className="flex items-center">
                        <Image
                          src={moshina}
                          alt="moshina"
                          className="mr-[20px] w-[56px] h-[56px] rounded-[14px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            {t("popover_block2.title1")}
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            {t("popover_block2.description1")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={uy}
                          alt="moshina"
                          className="mr-[20px] w-[56px] h-[56px] rounded-[14px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            {t("popover_block2.title2")}
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            {t("popover_block2.description2")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={savat}
                          alt="moshina"
                          className="mr-[20px] w-[56px] h-[56px] rounded-[14px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            {t("popover_block2.title3")}
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            {t("popover_block2.description3")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={savat}
                          alt="moshina"
                          className="mr-[20px] w-[56px] h-[56px] rounded-[14px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            {t("popover_block2.title4")}
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            {t("popover_block2.description4")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={moshina}
                          alt="moshina"
                          className="mr-[20px] w-[56px] h-[56px] rounded-[14px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            {t("popover_block2.title5")}
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            {t("popover_block2.description5")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={uy}
                          alt="moshina"
                          className="mr-[20px] w-[56px] h-[56px] rounded-[14px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            {t("popover_block2.title6")}
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            {t("popover_block2.description6")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={savat}
                          alt="moshina"
                          className="mr-[20px] w-[56px] h-[56px] rounded-[14px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            {t("popover_block2.title7")}
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            {t("popover_block2.description7")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-nav_link font-normal text-[32px] leading-10 mb-8 mt-[48px]">
                      {t("popover_headings.title3")}
                    </h2>
                    <div className="grid grid-cols-4 gap-x-[24px] gap-y-[32px]">
                      <div className="flex items-center">
                        <Image
                          src={moshina}
                          alt="moshina"
                          className="mr-[20px] w-[56px] h-[56px] rounded-[14px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            Information Portal
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            Stay updated on events in culture, <br />{" "}
                            entertainment, and leisure.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={savat}
                          alt="moshina"
                          className="mr-[20px] w-[56px] h-[56px] rounded-[14px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            Information Portal
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            Stay updated on events in culture, <br />{" "}
                            entertainment, and leisure.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={uy}
                          alt="moshina"
                          className="mr-[20px] w-[56px] h-[56px] rounded-[14px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            Information Portal
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            Stay updated on events in culture, <br />{" "}
                            entertainment, and leisure.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={moshina}
                          alt="moshina"
                          className="mr-[20px] w-[56px] h-[56px] rounded-[14px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            Information Portal
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            Stay updated on events in culture, <br />{" "}
                            entertainment, and leisure.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={savat}
                          alt="moshina"
                          className="mr-[20px] w-[56px] h-[56px] rounded-[14px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            Information Portal
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            Stay updated on events in culture, <br />{" "}
                            entertainment, and leisure.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={uy}
                          alt="moshina"
                          className="mr-[20px] w-[56px] h-[56px] rounded-[14px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            Information Portal
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            Stay updated on events in culture, <br />{" "}
                            entertainment, and leisure.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={uy}
                          alt="moshina"
                          className="mr-[20px] w-[56px] h-[56px] rounded-[14px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            Information Portal
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            Stay updated on events in culture, <br />{" "}
                            entertainment, and leisure.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Link
              href="/"
              className="px-5 py-3 text-nav_link font-semibold text-[20px] leading-6"
            >
              {t("nav_titles.title2")}
            </Link>
            <Link
              href="/"
              className="pl-5 pr-10 py-3 text-nav_link font-semibold text-[20px] leading-6"
            >
              {t("nav_titles.title3")}
            </Link>
            <LocalSwitcher />
            {isAuthenticated ? (
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="flex gap-2 ml-6 text-white font-medium text-[20px] leading-6 h-[48px] rounded-[12px] bg-nav_button hover:bg-nav_button hover:text-white"
                    variant={"outline"}
                  >
                    {auth}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <Image src={Logo} alt="logo" />
                    <DialogTitle className="mt-4 mb-5 text-[#101828] text-[24px] font-[700] leading-[28px]">
                      {t("logOut.title")}
                    </DialogTitle>
                    <DialogDescription>
                      {t("logOut.description")}
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        {t("logOut.cancelBtn")}
                      </Button>
                    </DialogClose>
                    <Button
                      type="submit"
                      variant="destructive"
                      onClick={() => {
                        signOut();
                        toast.success(t("logOut.logOutMessage"));
                        window.location.reload();
                      }}
                    >
                      {t("logOut.logOutBtn")}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="flex gap-2 ml-6 text-white font-medium w-[108px] text-[20px] leading-6 h-[48px] rounded-[12px] bg-nav_button hover:bg-nav_button hover:text-white"
                    variant={"outline"}
                  >
                    {t("registrationBtn.title")}
                  </Button>
                </DialogTrigger>
                <AuthDialog />
              </Dialog>
            )}
          </div>
        </div>

        {/* mobile */}
        <div className="hidden w-[90%] m-auto max-sm:flex items-center h-[73px] justify-between">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            {isMenuOpen ? (
              <GiCancel className="w-7 h-7" />
            ) : (
              <HiMenuAlt2 className="w-7 h-7" />
            )}
          </button>

          <Link href="/">
            <Image src={Logo} alt="logo" className="w-[73] h-[22]" />
          </Link>
          {isAuthenticated ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="text-white px-2 py-0 min-w-[74px] min-h-[32px] font-medium  leading-6 h-[32px] rounded-[10px] bg-nav_button hover:bg-nav_button">
                  {auth}
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <Image src={Logo} alt="logo" className="w-[100px]" />
                  <DialogTitle className="mt-4 mb-5 text-[#101828] text-[24px] font-[700] leading-[28px] max-sm:text-[18px]">
                    {t("logOut.title")}
                  </DialogTitle>
                  <DialogDescription className="max-sm:text-[14px]">
                    {t("logOut.description")}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      {t("logOut.cancelBtn")}
                    </Button>
                  </DialogClose>
                  <Button
                    type="submit"
                    variant="destructive"
                    onClick={() => {
                      signOut();
                      toast.success(t("logOut.logOutMessage"));
                      window.location.reload();
                    }}
                  >
                    {t("logOut.logOutBtn")}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ) : (
            <Dialog>
              <AuthDialog />
              <DialogTrigger asChild>
                <Button className="text-white px-2 py-0 min-w-[74px] min-h-[32px] font-medium  leading-6 h-[32px] rounded-[10px] bg-nav_button hover:bg-nav_button">
                  {t("registrationBtn.title")}
                </Button>
              </DialogTrigger>
            </Dialog>
          )}
        </div>
        {isMenuOpen ? (
          <div className="flex flex-col absolute top-[70px] left-[18px] lg:hidden mt-3 p-4 rounded-[20px] mx-auto w-[92%] bg-white overflow-visible">
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex justify-between hover:bg-transparent bg-transparent border-none text-nav_link font-semibold text-[14px] leading-4">
                  {t("nav_titles.title1")} <Image src={down} alt="down" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[370px] mx-auto rounded-[24px] p-3 mt-3">
                <div>
                  <div className="h-[260px]">
                    <h2 className="text-nav_link font-normal text-[18px] leading-7">
                      {t("popover_headings.title1")}
                    </h2>
                    <div className="flex flex-col">
                      <div className="flex items-center mt-3">
                        <Image
                          src={moshina}
                          alt="moshina"
                          className="mr-[12px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block1.title1")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block1.description1")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image
                          src={savat}
                          alt="moshina"
                          className="mr-[12px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block1.title2")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block1.description2")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image src={uy} alt="moshina" className="mr-[12px]" />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block1.title3")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block1.description3")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-nav_link font-normal text-[18px] leading-7 mt-[48px]">
                      {t("popover_headings.title2")}
                    </h2>
                    <div className="flex flex-col">
                      <div className="flex items-center mt-3">
                        <Image
                          src={moshina}
                          alt="moshina"
                          className="mr-[12px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block2.title1")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block2.description1")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image src={uy} alt="moshina" className="mr-[12px]" />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block2.title2")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block2.description2")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image
                          src={savat}
                          alt="moshina"
                          className="mr-[12px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block2.title3")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block2.description3")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image
                          src={savat}
                          alt="moshina"
                          className="mr-[12px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block2.title4")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block2.description4")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image
                          src={moshina}
                          alt="moshina"
                          className="mr-[12px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block2.title5")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block2.description5")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image src={uy} alt="moshina" className="mr-[12px]" />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block2.title6")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block2.description6")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image
                          src={savat}
                          alt="moshina"
                          className="mr-[12px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block2.title7")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block2.description7")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-nav_link font-normal text-[18px] leading-7 mt-[48px]">
                      {t("popover_headings.title3")}
                    </h2>
                    <div className="flex flex-col">
                      <div className="flex items-center mt-3">
                        <Image src={uy} alt="uy" className="mr-[12px]" />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block3.title1")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block3.description1")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image src={uy} alt="uy" className="mr-[12px]" />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block3.title2")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block3.description2")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image src={uy} alt="uy" className="mr-[12px]" />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block3.title3")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block3.description3")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image src={uy} alt="uy" className="mr-[12px]" />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block3.title4")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block3.description4")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image src={uy} alt="uy" className="mr-[12px]" />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block3.title5")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block3.description5")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image src={uy} alt="uy" className="mr-[12px]" />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block3.title6")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block3.description6")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image src={uy} alt="uy" className="mr-[12px]" />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block3.title7")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block3.description7")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image src={uy} alt="uy" className="mr-[12px]" />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block3.title8")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block3.description8")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Link
              href="/"
              className="mt-6 text-nav_link font-semibold text-[14px] leading-4"
            >
              {t("nav_titles.title2")}
            </Link>
            <Link
              href="/"
              className="mt-6 mb-10 text-nav_link font-semibold text-[14px] leading-4"
            >
              {t("nav_titles.title3")}
            </Link>
            <LocalSwitcher />
          </div>
        ) : null}
      </nav>

      <div className="lg:grid grid-cols-2 w-[90%] m-auto mt-3.5 gap-x-[32px] max-sm:gap-x-[16px]">
        <div className="bg-gradient-to-bl flex flex-col justify-between from-headerBlock to-headerBlock1 rounded-[32px] max-sm:min-h-[400px]">
          <div className="p-8">
            <h1 className="leading-[48.25px] text-[40px] text-header_h1_color font-normal max-sm:text-[24px] max-sm:leading-[24px]">
              {t("headerBlock1.title")}
            </h1>
            <p className="leading-[32px] text-[24px] text-white font-medium mt-1 max-sm:text-[16px] max-sm:leading-[16px]">
              {t("headerBlock1.description")}
            </p>
          </div>
          <Image
            priority
            src={headerHome}
            alt="home img"
            className="max-sm:w-[300px] max-sm:h-[300px]"
          />
        </div>
        <div className="">
          <div className="bg-headerBlock2 rounded-[32px] max-sm:mt-[12px]">
            <div className="pt-6 pl-6 pr-6">
              <h2 className="leading-40 text-header_h1_color text-[32px] font-normal max-sm:text-[24px] max-sm:leading-[24px]">
                {t("headerBlock2.title")}
              </h2>
              <p className="leading-[32px] text-white font-medium text-[20px] mt-[3px] max-sm:text-[16px] max-sm:leading-[16px]">
                {t("headerBlock2.description")}
              </p>
            </div>
            <Image
              src={bino}
              alt="travel_img"
              className="rounded-b-[32px] w-full"
            />
          </div>
          <div className="bg-headerBlock3 max-sm:mt-[12px] mt-[32px] rounded-[32px] p-4 h-[404px] max-sm:h-[250px]">
            <h2 className="leading-40 text-header_h1_color text-[32px] font-normal max-sm:text-[24px] max-sm:leading-[24px]">
              {t("headerBlock3.title")}
            </h2>
            <p className="leading-[32px] text-white font-medium text-[20px] mt-[3px] max-sm:text-[16px] max-sm:leading-[16px]">
              {t("headerBlock3.description")}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
