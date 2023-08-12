import Image from "next/image";
import Banner from "../../public/images/PostList/banner-01.png";
import Post1 from "../../public/images/PostList/post1.jpg";
import Post2 from "../../public/images/PostList/post2.jpg";
import Post3 from "../../public/images/PostList/post3.jpg";
import Post4 from "../../public/images/PostList/post4.jpg";
import Post5 from "../../public/images/PostList/post5.jpg";
import Image1 from "../../public/images/PostList/Widget/image1.jpg";
import Image2 from "../../public/images/PostList/Widget/image2.jpg";
import Image3 from "../../public/images/PostList/Widget/image3.jpg";
import Image4 from "../../public/images/PostList/Widget/image4.jpg";
import Best1 from "../../public/images/PostList/Widget/BestInWeek/Best1.jpg";
import Best2 from "../../public/images/PostList/Widget/BestInWeek/Best2.jpg";
import Best3 from "../../public/images/PostList/Widget/BestInWeek/Best3.jpg";
import Instagram1 from "../../public/images/PostList/Widget/Instagram/instagram-01.jpg";
import Instagram2 from "../../public/images/PostList/Widget/Instagram/instagram-02.jpg";
import Instagram3 from "../../public/images/PostList/Widget/Instagram/instagram-03.jpg";
import Instagram4 from "../../public/images/PostList/Widget/Instagram/instagram-04.jpg";
import Instagram5 from "../../public/images/PostList/Widget/Instagram/instagram-05.jpg";
import Instagram6 from "../../public/images/PostList/Widget/Instagram/instagram-06.jpg";

//logos
import {
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
  FaTwitter as Twitter,
  FaLink as Link,
  FaSearch as Search,
  FaSlack as Slack,
  FaLinkedinIn as Linkedin,
} from "react-icons/fa";

const PostList = () => {
  return (
    <div className="PostList  w-full h-[100%] ml:w-[540px] ml:mx-auto md:w-[720px] lg:w-[960px] xl:w-full  max-w-[1260px]">
      <div className="Container  w-full px-[15px] py-[60px] lg:flex flex-wrap xl:w-full">
        <div className="posts lg:w-2/3 lg:pl-[35px]">
          <div className="Baner bg-slate-400 ml:w-[510px] md:w-[690px] lg:w-[609px] lg:mx-auto xl:w-[770px] ">
            <Image src={Banner} alt="Banner" />
          </div>
          <div className="post1 ml:flex ml:items-center md:items-end lg:items-center lg:mt-[30px]">
            <div
              className="Image1 group mt-[30px] rounded-lg relative overflow-hidden ml:w-[153px] ml:h-[252px] md:w-[295px] md:h-[284px]
            lg:h-[236px] lg:mt-0 "
            >
              <Image
                src={Post1}
                alt="Post1"
                className="group rounded-t-lg group-hover:scale-110 transition duration-300 w-full ml:w-[133px] ml:mr-[20px] ml:h-[222px] ml:rounded-lg
                 md:w-[295px]  md:h-[284px] lg:w-[223px] lg:h-[236px] xl:mr-auto xl:w-[295px]"
              />
            </div>
            <div
              className=" group   PostContent1 px-[20px] border-b border-r border-l border-[#837f7f] rounded-b-lg py-[32px] w-full ml:mr-[20px] ml:w-[337px] ml:border-t ml:rounded-lg
            md:w-[375px] lg:h-[236px] xl:mr-[25px] shadow-lg border-none hover:shadow-xl"
            >
              <span className="font-[IranSans] text-[15px] text-[#D93E40] hover:text-[#3858f6] group">
                گجت
              </span>
              <a href="#" className=" group-hover: underlinTitr">
                <h4 className="font-[VasirBold] text-[15px] md:text-[24px] lg:text-[18px]  ">
                  ۱۳ زبان به آپدیت جدید کلاب‌هاوس اضافه شد
                </h4>
              </a>
              <span className="font-[VasirBold] text-[15px]">رهبی خان</span>
              <div className="xl:flex">
                <div  className="pl-[5px]">17 مرداد, 1400</div> <div>3 دقیقه زمان برای مطالعه</div>
              </div>
              <div className="Logos mt-[12px] flex text-[#606770]">
                <Facebook className="w-[30px] hover:text-[#3858f6]" />
                <Instagram className="w-[30px] hover:text-[#3858f6]" />
                <Twitter className="w-[30px] hover:text-[#3858f6]" />
                <Link className="w-[30px] hover:text-[#3858f6]" />
              </div>
            </div>
          </div>

          <div className="post2 ml:flex ml:items-center md:items-end lg:items-center lg:mt-[30px]">
            <div
              className="Image2 group mt-[30px] rounded-lg relative overflow-hidden ml:w-[153px] ml:h-[252px] md:w-[295px] md:h-[284px]
            lg:h-[236px] lg:mt-0"
            >
              <Image
                src={Post2}
                alt="Post2"
                className="group rounded-t-lg group-hover:scale-110 transition duration-300  w-full  ml:w-[133px] ml:mr-[20px] ml:h-[222px] ml:rounded-lg 
                 md:w-[295px]  md:h-[284px] lg:w-[223px] lg:h-[236px] xl:mr-auto xl:w-[295px]"
              />
            </div>
            <div
              className="PostContent2 px-[20px] border-b border-r border-l border-[#837f7f] rounded-b-lg py-[32px]  w-full ml:mr-[20px] ml:w-[337px] ml:border-t
             ml:rounded-lg md:w-[375px] lg:h-[236px] xl:mr-[25px] shadow-lg border-none hover:shadow-xl"
            >
              <span className="font-[IranSans] text-[15px] text-[#D93E40] hover:text-[#3858f6]">
                برنامه نویسی
              </span>
              <a href="#" className=" group-hover: underlinTitr">
                <h4 className="font-[VasirBold] text-[15px] md:text-[24px] lg:text-[18px] ">
                  هوش مصنوعی به کمک برنامه‌نویسان می‌آید
                </h4>
              </a>
              <span className="font-[VasirBold] text-[15px]">فاطمه اسرافی</span>
              <div className="xl:flex">
                <div className="pl-[5px]">20 اردیبهشت, 1400</div> <div>3 دقیقه زمان برای مطالعه</div>
              </div>
              <div className="Logos mt-[12px] flex text-[#606770]">
                <Facebook className="w-[30px] hover:text-[#3858f6]" />
                <Instagram className="w-[30px] hover:text-[#3858f6]" />
                <Twitter className="w-[30px] hover:text-[#3858f6]" />
                <Link className="w-[30px] hover:text-[#3858f6]" />
              </div>
            </div>
          </div>

          <div className="post3  ml:flex ml:items-center md:items-end lg:items-center lg:mt-[30px]">
            <div
              className="Image3 group mt-[30px] rounded-lg relative overflow-hidden ml:w-[153px] ml:h-[252px] md:w-[295px] md:h-[284px]
            lg:h-[236px] lg:mt-0"
            >
              <Image
                src={Post3}
                alt="Post3"
                className="group rounded-t-lg group-hover:scale-110 transition duration-300  w-full ml:w-[133px] ml:mr-[20px] ml:h-[222px] ml:rounded-lg
                md:w-[295px]  md:h-[284px] lg:w-[223px] lg:h-[236px] xl:mr-auto xl:w-[295px]"
              />
            </div>
            <div
              className="PostContent3 px-[20px] border-b border-r border-l border-[#837f7f] rounded-b-lg py-[32px] w-full ml:mr-[20px] ml:w-[337px] ml:border-t
             ml:rounded-lg md:w-[375px] lg:h-[236px] xl:mr-[25px] shadow-lg border-none hover:shadow-xl"
            >
              <span className="font-[IranSans] text-[15px] text-[#D93E40] hover:text-[#3858f6]">
                طراحی اپلیکیشن
              </span>
              <a href="#" className=" group-hover: underlinTitr">
                <h4 className="font-[VasirBold] text-[15px] w-[248px] md:text-[24px] lg:text-[18px] ">
                  نخستین ویدئو کامل از مک بوک پرو
                </h4>
              </a>
              <span className="font-[VasirBold] text-[15px]">رافائل</span>
              <div className="xl:flex">
                <div className="pl-[5px]">2 تیر, 1400</div> <div>3 دقیقه زمان برای مطالعه</div>
              </div>
              <div className="Logos mt-[12px] flex text-[#606770]">
                <Facebook className="w-[30px] hover:text-[#3858f6]" />
                <Instagram className="w-[30px] hover:text-[#3858f6]" />
                <Twitter className="w-[30px] hover:text-[#3858f6]" />
                <Link className="w-[30px] hover:text-[#3858f6]" />
              </div>
            </div>
          </div>

          <div className="post4 ml:flex ml:items-center md:items-end lg:items-center lg:mt-[30px]">
            <div
              className="Image4 group mt-[30px] rounded-lg relative overflow-hidden ml:w-[153px] ml:h-[252px] md:w-[295px] md:h-[284px]
            lg:h-[236px] lg:mt-0"
            >
              <Image
                src={Post4}
                alt="Post4"
                className="group rounded-t-lg group-hover:scale-110 transition duration-300 w-full ml:w-[133px] ml:mr-[20px] ml:h-[222px] ml:rounded-lg
                md:w-[295px]  md:h-[284px] lg:w-[223px] lg:h-[236px] xl:mr-auto xl:w-[295px]"
              />
            </div>
            <div
              className="PostContent4 px-[20px] border-b border-r border-l border-[#837f7f] rounded-b-lg py-[32px] w-full ml:mr-[20px] ml:w-[337px] ml:border-t 
            ml:rounded-lg md:w-[375px] lg:h-[236px] xl:mr-[25px] shadow-lg border-none hover:shadow-xl"
            >
              <span className="font-[IranSans] text-[15px] text-[#D93E40] hover:text-[#3858f6]">
                نرم افزار
              </span>
              <a href="#" className=" group-hover: underlinTitr">
                <h4 className="font-[VasirBold] text-[15px] md:text-[24px] lg:text-[18px] ">
                  محبوب‌ترین زبان برنامه‌نویسی کدام است؟
                </h4>
              </a>
              <span className="font-[VasirBold] text-[15px]">جان دو</span>
              <div className="xl:flex">
                <div className="pl-[5px]">1 فروردین, 1400</div> <div>3 دقیقه زمان برای مطالعه</div>
              </div>
              <div className="Logos mt-[12px] flex text-[#606770]">
                <Facebook className="w-[30px] hover:text-[#3858f6]" />
                <Instagram className="w-[30px] hover:text-[#3858f6]" />
                <Twitter className="w-[30px] hover:text-[#3858f6]" />
                <Link className="w-[30px] hover:text-[#3858f6]" />
              </div>
            </div>
          </div>

          <div className="post5 ml:flex ml:items-center md:items-end lg:items-center lg:mt-[30px]">
            <div
              className="Image5 group mt-[30px] rounded-lg relative overflow-hidden ml:w-[153px] ml:h-[252px] md:w-[295px] md:h-[284px]
            lg:h-[236px] lg:mt-0"
            >
              <Image
                src={Post5}
                alt="Post5"
                className="group rounded-t-lg group-hover:scale-110 transition duration-300 w-full ml:w-[133px] ml:mr-[20px] ml:h-[222px] ml:rounded-lg
                md:w-[295px]  md:h-[284px] lg:w-[223px] lg:h-[236px] xl:mr-auto xl:w-[295px]"
              />
            </div>
            <div
              className="PostContent5 px-[20px] border-b border-r border-l border-[#837f7f] rounded-b-lg py-[32px]  w-full ml:mr-[20px] ml:w-[337px] ml:border-t 
            ml:rounded-lg md:w-[375px] lg:h-[236px] lg:py-0 xl:mr-[25px] shadow-lg border-none hover:shadow-xl"
            >
              <span className="font-[IranSans] text-[15px] text-[#D93E40] hover:text-[#3858f6]">
                شبکه
              </span>
              <a href="#" className=" group-hover: underlinTitr">
                <h4 className="font-[VasirBold] text-[15px] md:text-[24px] lg:text-[18px] ">
                  هدف از راه‌اندازی شبکه ملی اطلاعات چیست؟
                </h4>
              </a>
              <span className="font-[VasirBold] text-[15px]">جین آرا</span>
              <div className="xl:flex">
                <div className="pl-[5px]">22 اسفند, 1399</div> <div>3 دقیقه زمان برای مطالعه</div>
              </div>
              <div className="Logos mt-[12px] flex text-[#606770]">
                <Facebook className="w-[30px] hover:text-[#3858f6]" />
                <Instagram className="w-[30px] hover:text-[#3858f6]" />
                <Twitter className="w-[30px] hover:text-[#3858f6]" />
                <Link className="w-[30px] hover:text-[#3858f6]" />
              </div>
            </div>
          </div>
        </div>
        <div className="Sidebar mt-[40px] lg:w-1/3 lg:mt-0">
          <div className="Widget mb-[30px]  flex flex-wrap h-[140px]">
            <div className="item1 w-[50%] flex items-center ">
              <div className="image1">
                <Image src={Image1} alt={""} className="rounded-[50%]" />
              </div>
              <div className="Content pr-[7px] hover:text-[#3858f6]">
                فناوری
              </div>
            </div>
            <div className="item2 w-[50%] flex items-center">
              <div className="image1">
                <Image src={Image2} alt={""} className="rounded-[50%]" />
              </div>
              <div className="Content pr-[7px] hover:text-[#3858f6]">
                نرم افزار
              </div>
            </div>
            <div className="item3 w-[50%] flex items-center">
              <div className="image1">
                <Image src={Image3} alt={""} className="rounded-[50%]" />
              </div>
              <div className="Content pr-[7px] hover:text-[#3858f6]">
                گردشگری
              </div>
            </div>
            <div className="item4 w-[50%] flex items-center ">
              <div className="image1">
                <Image src={Image4} alt={""} className="rounded-[50%]" />
              </div>
              <div className="Content pr-[7px] hover:text-[#3858f6]">
                برنامه نویسی
              </div>
            </div>
          </div>

          <div className="SearchWidget ">
            <h3 className=" text-center mb-[20px] text-[16px] font-[VasirBold] border-b pb-[5px] border-[#606770]">
              جستجو
            </h3>

            <div className=" md:block group w-[290px] bg-[#ffffff] mx-auto text-center  mb-[30px]  ">
              <div className="outline outline-[#f0f2f5] w-fit rounded-md  ">
                <button className="rounded-r-md px-[8px]  ">
                  <Search className="   w-[14px] h-[14px] " />
                </button>
                <input
                  type="text"
                  placeholder="..جستجو"
                  className=" outline-none rounded-l-md w-[260px] h-[35px] rounded-md "
                />
              </div>
            </div>

            <div className="BestInWeek mb-[30px]">
              <h3 className="text-center text-[16px] font-[VasirBold]  border-b  pb-[5px] border-[#606770]">
                بهترین های هفته
              </h3>
              <div className="Container mt-[20px]">
                <div className="BestPost1 flex mb-[20px]">
                  <div className="Image1 group overflow-hidden">
                    <Image
                      src={Best1}
                      alt={"Best1"}
                      className="rounded-lg ml-[20px] lg:w-[71px] lg:mr-[10px] group-hover:scale-110 transition duration-300"
                    />
                  </div>
                  <div className="Content1  w-[40%]">
                    <h6 className="font-[IranSans] text-[14px]">
                      تغییر ناگهانی در هیات مدیره استقلال
                    </h6>
                    <div className="flex-col">
                      <div className=""> 14 مهر, 1400</div>
                      <div className=""> 300 نفر بازدید</div>
                    </div>
                  </div>
                </div>

                <div className="BestPost2 flex mb-[20px]">
                  <div className="Image2 group overflow-hidden">
                    <Image
                      src={Best2}
                      alt={"Best2"}
                      className="rounded-lg ml-[20px] lg:w-[71px] lg:mr-[10px]  group-hover:scale-110 transition duration-300"
                    />
                  </div>
                  <div className="Content2 w-[40%]">
                    <h6 className="font-[IranSans] text-[14px]">
                      نخستین ویدئو کامل از مک بوک پرو
                    </h6>
                    <div className="flex-col">
                      <div className=""> 14 مهر, 1400</div>
                      <div className=""> 300 نفر بازدید</div>
                    </div>
                  </div>
                </div>

                <div className="BestPost3 flex mb-[20px]">
                  <div className="Image3 group overflow-hidden ">
                    <Image
                      src={Best3}
                      alt={"Best3"}
                      className="rounded-lg ml-[20px] lg:w-[71px] lg:mr-[10px]  group-hover:scale-110 transition duration-300 "
                    />
                  </div>
                  <div className="Content3 w-[40%] ">
                    <h6 className="font-[IranSans] text-[14px]  ">
                      محبوب‌ترین زبان برنامه‌نویسی کدام است؟
                    </h6>
                    <div className="flex-col">
                      <div className=""> 14 مهر, 1400</div>
                      <div className=""> 300 نفر بازدید</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ConcatUs">
              <h5 className="border-b  pb-[5px] border-[#606770] text-center text-[16px] font-[VasirBold]">
                شبکه های اجتماعی ما
              </h5>
              <div className="Logos mt-[12px] flex text-[#606770] justify-evenly mb-[30px]">
                <Facebook className="w-[40px] h-[40px] hover:bg-[#3858f6] hover:text-[#f0f2f5] bg-[#f0f2f5] rounded-[50%]" />
                <Instagram className="w-[40px] h-[40px] hover:bg-[#3858f6] hover:text-[#f0f2f5] bg-[#f0f2f5] rounded-[50%]" />
                <Twitter className="w-[40px] h-[40px] hover:bg-[#3858f6]  hover:text-[#f0f2f5] bg-[#f0f2f5] rounded-[50%]" />
                <Slack className="w-[40px] h-[40px] hover:bg-[#3858f6]  hover:text-[#f0f2f5] bg-[#f0f2f5] rounded-[50%]" />
                <Linkedin className="w-[40px] h-[40px] hover:bg-[#3858f6] hover:text-[#f0f2f5] bg-[#f0f2f5] rounded-[50%]" />
              </div>
            </div>
            <div className="Instagram">
              <h5 className="text-center border-b  pb-[5px] border-[#606770] text-[16px] font-[VasirBold] ">
                اینستاگرام
              </h5>
              <div className="ImagesInstagram flex flex-wrap mt-[20px] ">
                <div className="w-1/3 md:w-[115px] lg:w-1/3 group overflow-hidden">
                  <Image
                    src={Instagram1}
                    alt={"Instagram1"}
                    className="w-full p-[4px] rounded-xl md:w-[115px] lg:w-full  group-hover:scale-110 transition duration-300 "
                  />
                </div>
                <div className="w-1/3 md:w-[115px] lg:w-1/3 group overflow-hidden">
                  <Image
                    src={Instagram2}
                    alt={"Instagram2"}
                    className="w-full p-[4px] rounded-xl md:w-[115px] lg:w-full  group-hover:scale-110 transition duration-300 "
                  />
                </div>
                <div className="w-1/3 md:w-[115px] lg:w-1/3 group overflow-hidden">
                  <Image
                    src={Instagram3}
                    alt={"Instagram3"}
                    className="w-full p-[4px] rounded-xl md:w-[115px] lg:w-full  group-hover:scale-110 transition duration-300 "
                  />
                </div>
                <div className="w-1/3 md:w-[115px] lg:w-1/3 group overflow-hidden">
                  <Image
                    src={Instagram4}
                    alt={"Instagram4"}
                    className="w-full p-[4px] rounded-xl md:w-[115px] lg:w-full  group-hover:scale-110 transition duration-300 "
                  />
                </div>
                <div className="w-1/3 md:w-[115px] lg:w-1/3 group overflow-hidden">
                  <Image
                    src={Instagram5}
                    alt={"Instagram5"}
                    className="w-full p-[4px] rounded-xl md:w-[115px] lg:w-full  group-hover:scale-110 transition duration-300 "
                  />
                </div>
                <div className="w-1/3 md:w-[115px] lg:w-1/3 group overflow-hidden">
                  <Image
                    src={Instagram6}
                    alt={"Instagram6"}
                    className="w-full p-[4px] rounded-xl md:w-[115px] lg:w-full  group-hover:scale-110 transition duration-300 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
