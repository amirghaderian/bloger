import Link from "next/link";
import Image from "next/image";
import Banner from "../../public/images/Banner.png";
import Logo from "../../public/images/Logo.png";
import Avatar from "../../public/images/avatar.jpg";
import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaLinkedinIn as Linkedin,
  FaInstagram as Instagram,
  FaSearch as Seaech,
  FaBookmark as Bookmark,
  FaBell as Bell,
  FaBars as Bars,
} from "react-icons/fa";
import { AiOutlineClose as Close } from "react-icons/ai";
import { useState } from "react";
const Header = () => {
  const [value, setValue] = useState(false);
  const SearchHandler = () => {
    setValue(!value);
  };
  return (
    <header className="MainHeader w-full">
      <div className="HeaderTop flex w-full pb-[20px] bg-[#f0f2f5] xl:justify-center ">
        <div className="Container  w-full justify-center pt-[12px] max-w-[1260px] ">
          <div className=" w-full md:flex  lg:items-baseline">
            <div className="text-center md:mx-[24px]">
              <Link
                href={""}
                className="inline-block text-[14px] w-[140px] h-[27px]  mr-[5px] ml-[20px] text-[#878787] font-[IranSans]"
              >
                هجدهم شهریور، 1400
              </Link>
            </div>
            <div className="w-full flex justify-center lg:justify-start">
              <div className="flex justify-center md:items-end w-[240px] lg:w-[304px] h-[27px] ">
                <Link
                  href={""}
                  className=" hover:text-[#3858f6]  inline-block text-[14px] mx-[5px] text-[#878787] font-[IranSans]"
                >
                  تبلیغات سایت
                </Link>
                <Link
                  href={""}
                  className=" hover:text-[#3858f6]  inline-block text-[14px] mx-[5px] text-[#878787] font-[IranSans] lg:mx-[37px]"
                >
                  درباره ما
                </Link>
                <Link
                  href={""}
                  className=" hover:text-[#3858f6]  inline-block text-[14px] mx-[5px] text-[#878787] font-[IranSans]"
                >
                  تماس با ما
                </Link>
              </div>
            </div>

            <div className="Icons w-full flex justify-center md:items-end xl:justify-end xl:pl-[15px]">
              <div className=" flex justify-center lg:justify-end w-[300px] text-end">
                <div className="flex justify-center  h-[24px]">
                  <Github className="hover:text-[#3858f6] mx-[10px]" />
                </div>
                <div className="flex justify-center  h-[24px]">
                  <Instagram className="hover:text-[#3858f6] mx-[10px]" />
                </div>
                <div className=" ">
                  <Twitter className="hover:text-[#3858f6] mx-[10px]" />
                </div>
                <div className="flex justify-center  h-[24px]">
                  <Linkedin className="hover:text-[#3858f6] mx-[10px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="HeaderMiddle flex w-full justify-center py-[20px] bg-[#ffffff] max-w-[1260px] xl:mx-auto">
        <div className="Container md:flex md:w-[720px] lg:w-[960px] xl:w-[1260px]">
          <div className=" flex w-[290px] mx-auto  justify-center  pb-[20px] lg:pb-0 lg:mx-0 lg:w-[210px]">
            <div className="Logo w-[141px] flex items-center ">
              <Image src={Logo} alt="Logo" className="w-[141px] h-[37px]" />
            </div>
          </div>
          <div className="Banner w-full   flex justify-end lg:w-[720px] lg:px-[15px] lg:mr-[30px] xl:w-[75%] xl:mr-[100px] ">
            <Image
              src={Banner}
              alt={"Banner"}
              className="w-[290px] md:w-full md:h-full lg:w-[690px] h-[37px] xl:w-[728px]"
            />
          </div>
        </div>
      </div>
      <hr className="text-red-600 w-full block" />
      <div className="HeaderBottom h-[80px] flex items-center w-full justify-center max-w-[1260px] mx-auto ">
        <div className="RightMenu  h-[80px] hidden xl:flex items-center ">
          <Link href={""} className="px-[14px] hover:text-[#3858f6] text-[#878787] font-[IranSans] text-[15px] inline-block">
            خانه
          </Link>
          <Link href={""} className="px-[14px] hover:text-[#3858f6] text-[#878787] font-[IranSans] text-[15px] inline-block xl:w-[120px]">
            طرح بندی ها
          </Link>
          <Link href={""} className="px-[14px] hover:text-[#3858f6] text-[#878787] font-[IranSans] text-[15px] inline-block">
            مگامنو
          </Link>
          <Link href={""} className="px-[14px] hover:text-[#3858f6] text-[#878787] font-[IranSans] text-[15px] inline-block">
            صفحات
          </Link>
          <Link href={""} className="px-[14px] hover:text-[#3858f6] text-[#878787] font-[IranSans] text-[15px] inline-block xl:w-[160px]">
            نسخه سبک زندگی
          </Link>
          <Link href={""} className="px-[14px] hover:text-[#3858f6] text-[#878787] font-[IranSans] text-[15px] inline-block xl:w-[170px]">
            نسخه تکنولوژی
          </Link>
        </div>

        <div className="LeftItems flex items-center  w-[290px] md:w-[690px] justify-center md:justify-end h-[80px] lg:w-[960px] lg:px-[15px] ">
          <div className=" Container flex items-center h-[40px] ">
            <div className="  SearchItem rounded-3xl bg-[#f0f2f5] w-[40px] h-[40px] flex justify-center items-center md:hidden">
              <button onClick={SearchHandler}>
                {!value && <Seaech className="  w-[14px] h-[14px]    " />}
                {value && <Close className=" w-[13px] h-[15px] " />}
              </button>
            </div>
            <div className="hidden md:block group w-[290px] bg-[#ffffff] mx-auto text-center  ">
              <div className="outline outline-[#f0f2f5] w-fit rounded-md">
                <button className="rounded-r-md px-[8px] ">
                  <Seaech className="   w-[14px] h-[14px] " />
                </button>
                <input
                  type="text"
                  placeholder="..جستجو"
                  className=" outline-none rounded-l-md w-[260px] h-[50px] rounded-md "
                />
              </div>
            </div>
            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-[#f0f2f5]  hover:bg-[#3858f6] hover:text-white mr-[10px]">
              <Bookmark className="w-[10.5px] h-[14px]" />
            </div>
            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-[#f0f2f5]  hover:bg-[#3858f6] hover:text-white mr-[10px]">
              <Bell className="w-[12.25px] h-[14px] " />
            </div>

            <Image
              src={Avatar}
              alt={"avatar"}
              className="rounded-[50%] w-[40px] h-[40px] mx-2"
            />
            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-[#f0f2f5]  hover:bg-[#3858f6] hover:text-white xl:hidden">
              <Bars className="w-[12.25px] h-[14px] " />
            </div>
          </div>
        </div>
      </div>
      {value && (
        <div className="SearchFiled bg-[#f0f2f5] w-full py-[20px]">
          <div className="group w-[290px] bg-[#ffffff] mx-auto text-center  ">
            <div className="outline outline-[#3858f6] w-fit rounded-md">
              <button className="rounded-r-md px-[8px] ">
                <Seaech className="   w-[14px] h-[14px] " />
              </button>
              <input
                type="text"
                placeholder="..جستجو"
                className=" outline-none rounded-l-md w-[260px] h-[50px] rounded-md "
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
