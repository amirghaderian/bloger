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
  FaBell as Bell
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="MainHeader w-full bg-blue-300 ">
      <div className="HeaderTop flex  w-full ">
        <div className="Container flex  w-full justify-center pt-[12px]">
          <div className="bg-red-500  basis-[630px] h-[27px]  ">
            <Link href={""} className="px-[20px] hover:text-[#3858f6]">
              مقالات برتر
            </Link>
            <Link href={""} className="px-[20px] hover:text-[#3858f6]">
              کالاها
            </Link>
            <Link href={""} className="px-[20px] hover:text-[#3858f6]">
              درباره ما
            </Link>
            <Link href={""} className="px-[20px] hover:text-[#3858f6]">
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
      <div className="HeaderBottom h-[80px] flex items-center w-full bg-purple-400 justify-center  ">
        <div className="RightMenu w-[705px] h-[80px] flex items-center pl-[110px] bg-cyan-400 ">
          <Link href={""} className="px-[14px] hover:text-[#3858f6]">
            خانه
          </Link>
          <Link href={""} className="px-[14px] hover:text-[#3858f6]">
            طرح بندی ها
          </Link>
          <Link href={""} className="px-[14px] hover:text-[#3858f6]">
            مگامنو
          </Link>
          <Link href={""} className="px-[14px] hover:text-[#3858f6]">
            صفحات
          </Link>
          <Link href={""} className="px-[14px] hover:text-[#3858f6]">
            نسخه سبک زندگی
          </Link>
          <Link href={""} className="px-[14px] hover:text-[#3858f6]">
            نسخه تکنولوژی
          </Link>
        </div>
        <div className="LeftItems flex items-center bg-teal-400 w-[555px] h-[80px] ">
          <div className="SearchItem rounded-3xl bg-red-300">
            <button className="pl-[6px] pr-[14px]">
              <Seaech />
            </button>
            <input
              type="text"
              placeholder="جستجو.."
              className="rounded-l-3xl outline-none h-[35px] w-[225px] "
            />
          </div>
          <div className="w-[35px] h-[35px] flex justify-center items-center rounded-[50%] bg-gray-400 mx-2 hover:bg-[#3858f6] hover:text-white"><Bookmark/></div>
          <div className="w-[35px] h-[35px] flex justify-center items-center rounded-[50%] bg-gray-400 mx-2 hover:bg-[#3858f6] hover:text-white"><Bell/></div>
          <Image
            src={Avatar}
            alt={"avatar"}
            className="rounded-[50%] w-[60px] h-[60px] mx-2"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
