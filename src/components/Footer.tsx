import Image from "next/image";
//logos
import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaLinkedinIn as Linkedin,
  FaInstagram as Instagram,
} from "react-icons/fa";
import Logo from "../../public/images/Logo.png";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="Container">
        <div className="FooterTop">
          <h5 className="font-[VasirBold] text-[16px] w-fit pr-[15px] mb-[10px]">
            ما را دنبال کنید
          </h5>
          <div className="Icons w-full flex justify-center md:items-end xl:justify-end xl:pl-[15px] pb-[20px] mb-[20px] border-b">
            <div className=" flex  lg:justify-end w-[300px] text-end">
              <div className="flex justify-center  h-[24px]">
                <Github className="hover:text-[#3858f6] mx-[10px] w-[30px] h-[30px] rounded-[50%] bg-red-200" />
              </div>
              <div className="flex justify-center  h-[24px]">
                <Instagram className="hover:text-[#3858f6] mx-[10px]  w-[30px] h-[30px] rounded-[50%] bg-red-200" />
              </div>
              <div className=" ">
                <Twitter className="hover:text-[#3858f6] mx-[10px]  w-[30px] h-[30px] rounded-[50%] bg-red-200" />
              </div>
              <div className="flex justify-center  h-[24px]">
                <Linkedin className="hover:text-[#3858f6] mx-[10px]  w-[30px] h-[30px] rounded-[50%] bg-red-200" />
              </div>
            </div>
          </div>
          <div className="logo">
            <Image src={Logo} alt={""} className="w-[140px] mb-[20px]" />
          </div>
        </div>
        <div className="FoterBottom">
          <div className="Container">
            <span className="pl-[10px] text-[16px] font-[IranSans]">تماس باما</span>
            <span className="pl-[10px] text-[16px] font-[IranSans]">شرایط و قوانین</span>{" "}
            <span className="pl-[10px] text-[16px] font-[IranSans]">درباره ما</span>
            <span className="pl-[10px] text-[16px] font-[IranSans]">تبلیغات با ما</span>
            <span className="pl-[10px] text-[16px] font-[IranSans]">لیست مقالات</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
