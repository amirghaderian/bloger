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
    <div className="w-full  py-[60px] md:mt-[300px] bg-[#1a1a1a] flex justify-center">
      <div className="Container1 md:w-[720px] ">
        <h3 className="text-[18px] md:text-[28px] px-[15px] text-white font-[VasirBold]">
          اخبار حوزه فناوری
        </h3>
        <div className="Container w-full md:flex flex-wrap ">
          <div className="Post1  group overflow-hidden w-full h-[490px] md:h-auto  px-[15px] rounded-lg mt-[30px] md:mb-[30px] ">
            <Image
              src={post1}
              alt=""
              className=" group-hover:scale-110 transition duration-300 w-[290px] md:w-full md:h-[575px] h-[241px] rounded-lg mx-auto"
            />
            <div className="Content mt-[30px]">
              <h2 className="text-[#D93E40] text-[15px]">حوزهIT</h2>
              <h3 className="text-white text-[16px] font-[VasirBold]">
                بررسی لپ تاپ هواوی میت بوک D 14 [با بررسی ویدئویی]
              </h3>
            </div>
            <div className="Author mt-[30px]">
              <span className="text-white text-[15px] font-[VasirBold]">
                عصمت جهان
              </span>
              <div className="ContentInfo md:flex justify-between items-baseline">
                <div className="flex">
                  <p className="text-[#878787] font-[IranSans]">
                    20 بهمن, 1399
                  </p>
                  <p className="text-[#878787] font-[IranSans] text-[15px] pr-2">
                    3 دقیقه زمان مطالعه
                  </p>
                </div>
                <div className="Logos mt-[12px] flex text-[#878787]">
                  <Facebook className="w-[30px] hover:text-[#3858f6]" />
                  <Instagram className="w-[30px] hover:text-[#3858f6]" />
                  <Twitter className="w-[30px] hover:text-[#3858f6]" />
                  <Link className="w-[30px] hover:text-[#3858f6]" />
                </div>
              </div>
            </div>
          </div>
          <div className="Post2 w-full md:w-[360px] ">
            <div className=" Container group w-[285px] md:w-[330px] relative overflow-hidden rounded-lg  mx-auto">
              <Image
                src={post2}
                alt={""}
                className=" group-hover:scale-110 transition duration-300 rounded-lg  md:w-[330px]  "
              />
              <div className="w-[50px] h-[50px] PostContent  absolute top-[50%] left-1/2 bg-red-500 transform -translate-x-1/2 -translate-y-[50%] px-[20px] pb-[20px] text-white flex justify-center items-center  rounded-[50%]">
                <Play className="text-white  absolute top-[15px]  right-[15px]" />
              </div>
            </div>
            <div className="Content mt-[30px]">
              <h2 className="text-[#D93E40] text-[15px] px-[15px]">
                برنامه نویسی
              </h2>
              <h3 className="text-white text-[16px] font-[VasirBold] px-[15px] md:w-[350px]">
                بررسی کامپیوتر بدون کیس ام اس آی Pro 22X 10M [با بررسی ویدیویی]
              </h3>
            </div>
          </div>

          <div className="Post3  mt-[30px] md:mt-0 md:w-[360px]">
            <div className=" Container group w-[285px]  md:w-[330px] relative overflow-hidden rounded-lg mx-auto ">
              <Image
                src={post3}
                alt={""}
                className=" group-hover:scale-110 transition duration-300 rounded-lg md:w-[330px] "
              />
              <div className="w-[50px] h-[50px] PostContent  absolute top-[50%] left-1/2 bg-red-500 transform -translate-x-1/2 -translate-y-[50%] px-[20px] pb-[20px] text-white flex justify-center items-center  rounded-[50%]">
                <Play className="text-white  absolute top-[15px]  right-[15px]" />
              </div>
            </div>
            <div className="Content mt-[30px]">
              <h2 className="text-[#D93E40] text-[15px] px-[15px]">
                فناوری و اطلاعات
              </h2>
              <h3 className="text-white text-[16px] font-[VasirBold] px-[15px]">
                بررسی تلویزیون C1 OLED ال جی [با بررسی ویدیویی]{" "}
              </h3>
            </div>
          </div>

          <div className="Post4  mt-[30px] md:w-[360px]">
            <div className=" Container group w-[285px] relative overflow-hidden rounded-lg md:w-[330px]  mx-auto ">
              <Image
                src={post4}
                alt={""}
                className=" group-hover:scale-110 transition duration-300 rounded-lg md:w-[330px] "
              />
              <div className="w-[50px] h-[50px] PostContent  absolute top-[50%] left-1/2 bg-red-500 transform -translate-x-1/2 -translate-y-[50%] px-[20px] pb-[20px] text-white flex justify-center items-center  rounded-[50%]">
                <Play className="text-white  absolute top-[15px]  right-[15px]" />
              </div>
            </div>
            <div className="Content mt-[30px]">
              <h2 className="text-[#D93E40] text-[15px] px-[15px]">
                حوزه آی تی
              </h2>
              <h3 className="text-white text-[16px] font-[VasirBold] px-[15px]">
                بررسی تلویزیون C1 OLED ال جی [با بررسی ویدیویی]{" "}
              </h3>
            </div>
          </div>

          <div className="Post5  mt-[30px] md:w-[360px]">
            <div className=" Container group w-[285px] relative overflow-hidden rounded-lg mx-auto md:w-[330px] ">
              <Image
                src={post5}
                alt={""}
                className=" group-hover:scale-110 transition duration-300 rounded-lg md:w-[330px] "
              />
              <div className="w-[50px] h-[50px] PostContent  absolute top-[50%] left-1/2 bg-red-500 transform -translate-x-1/2 -translate-y-[50%] px-[20px] pb-[20px] text-white flex justify-center items-center  rounded-[50%]">
                <Play className="text-white  absolute top-[15px]  right-[15px]" />
              </div>
            </div>
            <div className="Content mt-[30px]">
              <h2 className="text-[#D93E40] text-[15px] px-[15px]">
                نرم افزارهای کاربردی
              </h2>
              <h3 className="text-white  text-[16px] font-[VasirBold] px-[15px]">
                بررسی آیپد پرو 2021 اپل [با بررسی ویدئویی]
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
