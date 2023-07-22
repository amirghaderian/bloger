import Link from "next/link";
import Image from "next/image";
import Banner from "../../public/images/Banner.png";
import Logo from "../../public/images/Logo.png";
import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaLinkedinIn as Linkedin,
  FaInstagram as Instagram,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="MainHeader">
      <div className="HeaderTop flex  w-full">
        <div className="Container flex  w-full justify-center bg-red-400 pt-[12px]">
          <div className="bg-red-500  basis-[630px] h-[27px]  ">
            <Link href={""} className="px-[20px]">
              مقالات برتر
            </Link>
            <Link href={""} className="px-[20px]">
              کالاها
            </Link>
            <Link href={""} className="px-[20px]">
              درباره ما
            </Link>
            <Link href={""} className="px-[20px]">
              تماس با ما
            </Link>
          </div>
          <div className="flex justify-end bg-red-600  basis-[630px] text-end">
            <div className="flex justify-center bg-blue-400 px-3">
              <Twitter className="hover:text-[#3858f6]" />
            </div>
            <div className="flex justify-center bg-blue-400 px-3">
              <Github className="hover:text-[#3858f6]" />
            </div>
            <div className="flex justify-center bg-blue-400 px-3">
              <Linkedin className="hover:text-[#3858f6]" />
            </div>
            <div className="flex justify-center bg-blue-400 px-3">
              <Instagram className="hover:text-[#3858f6]" />
            </div>
          </div>
        </div>
      </div>

      <div className="HeaderMiddle flex w-full justify-center">
        <div className=" flex w-[1260px] bg-orange-300">
          <div className="Logo w-[285px] flex items-center ">
            <Image src={Logo} alt="Logo" className="w-[147px] h-[37px]" />
          </div>
          <div className="Banner w-[915px] bg-amber-200 flex justify-end">
            <Image src={Banner} alt={"Banner"} className="" />
          </div>
        </div>
      </div>
      <div className="HeaderBottom "></div>
    </header>
  );
};

export default Header;
