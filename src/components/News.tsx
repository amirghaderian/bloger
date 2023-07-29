import Image from "next/image";
//Images
import post1 from "../../public/images/News/post1.jpg";
import post2 from "../../public/images/News/post2.jpg";
import post3 from "../../public/images/News/post3.jpg";
import post4 from "../../public/images/News/post2.jpg";
import post5 from "../../public/images/News/post5.jpg";
//logos
import {
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
  FaTwitter as Twitter,
  FaLink as Link,
  FaPlay as Play,
} from "react-icons/fa";
const News = () => {
  return (
    <div className="w-full h-[1935px] py-[60px] bg-[#1a1a1a] flex justify-center">
      <div className="Container1 ">
        <h3 className="text-[18px] px-[15px] text-white font-[VasirBold]">
          اخبار حوزه فناوری
        </h3>
        <div className="Container w-full">
          <div className="Post1 w-full h-[490px] bg-gray-900 px-[15px] rounded-lg mt-[30px]">
            <Image
              src={post1}
              alt=""
              className="w-[290px] h-[241px] rounded-lg"
            />
            <div className="Content mt-[30px]">
              <h2 className="text-[#D93E40] text-[15px]">حوزهIT</h2>
              <h3 className="text-white text-[20px] font-[VasirBold]">
                بررسی لپ تاپ هواوی میت بوک D 14 [با بررسی ویدئویی]
              </h3>
            </div>
            <div className="Author mt-[30px]">
              <span className="text-white text-[15px] font-[VasirBold]">
                عصمت جهان
              </span>
              <div className="flex">
                <p className="text-[#878787] font-[IranSans]">20 بهمن, 1399</p>
                <p className="text-[#878787] font-[IranSans] text-[15px] pr-2">
                  3 دقیقه زمان مطالعه
                </p>
              </div>
              <p className="Logos mt-[12px] flex text-[#878787]">
                <Facebook className="w-[30px] hover:text-[#3858f6]" />
                <Instagram className="w-[30px] hover:text-[#3858f6]" />
                <Twitter className="w-[30px] hover:text-[#3858f6]" />
                <Link className="w-[30px] hover:text-[#3858f6]" />
              </p>
            </div>
          </div>

          <div className="Post2 w-full h-[335px] bg-gray-900 px-[15px] rounded-lg mt-[30px] relative">
            <Image
              src={post2}
              alt=""
              className="w-[290px] h-[192px] rounded-lg"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Play />
            </div>
            <div className="Content mt-[30px]">
              <h2 className="text-[#D93E40] text-[15px]">برنامه نویسی</h2>
              <h3 className="text-white text-[20px] font-[VasirBold]">
                بررسی کامپیوتر بدون کیس ام اس آی Pro 22X 10M [با بررسی ویدیویی]
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
