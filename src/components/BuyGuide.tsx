import Image from "next/image";
//images
import card1 from "../../public/images/BuyGuide/card1.jpg";
import card2 from "../../public/images/BuyGuide/card2.jpg";
import card3 from "../../public/images/BuyGuide/card3.jpg";
import card4 from "../../public/images/BuyGuide/card4.jpg";
import card5 from "../../public/images/BuyGuide/card5.jpg";
import card6 from "../../public/images/BuyGuide/card6.jpg";
import Image1 from "../../public/images/PostList/Widget/image1.jpg";
import Image2 from "../../public/images/PostList/Widget/image2.jpg";
import Image3 from "../../public/images/PostList/Widget/image3.jpg";
import Image4 from "../../public/images/PostList/Widget/image4.jpg";
import widget1 from "../../public/images/BuyGuide/Widget/widget1.jpg";
import widget2 from "../../public/images/BuyGuide/Widget/widget2.jpg";
import widget3 from "../../public/images/BuyGuide/Widget/widget3.jpg";
import Banner from "../../public/images/Banner.png";

//logos
import {
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
  FaTwitter as Twitter,
  FaLink as Link,
  FaPlay as Play,
} from "react-icons/fa";
const BuyGuide = () => {
  return (
    <div className="BuyGuide w-full ml:w-[530px] mx-auto md:w-[720px] lg:w-[960px] xl:w-full bg-[#f0f2f5] ">
      <div className="Container   mx-auto px-[20px] max-w-[1260px]">
        <div className="TitleButton  ">
          <h4 className="font-[VasirBold] text-[18px] px-[15px] md:text-[28px] ">
            راهنمای خرید و بررسی
          </h4>
          <div className="Buttons my-[20px] ">
            <button className="font-[IranSans] text-[15px] text-[#65676B] px-[13px] border rounded-md m-[5px] h-[45px]">
              موبایل
            </button>
            <button className="font-[IranSans] text-[15px] text-[#65676B] px-[13px] border rounded-md m-[5px] h-[45px]">
              لپ تاب
            </button>
            <button className="font-[IranSans] text-[15px] text-[#65676B] px-[13px] border rounded-md m-[5px] h-[45px]">
              هدفون{" "}
            </button>
          </div>
        </div>

        <div className="Cards">
          <div className="card1&2 lg:flex lg:items-baseline justify-between">
            <div className="card1 xl:w-[48%]">
              <div className="cardContent group w-full p-[30px] bg-[#ffffff] mx-auto rounded-t-lg lg:w-[450px] xl:w-full">
                <div className="head text-[#D93E40] text-[15px] font-[IranSans]">
                  خبر جدید
                </div>
                <div className="title hover: underlinTitr">
                  <a className="text-[15px] font-[VasirBold] md:text-[24px]">
                    بررسی Oppo Find X2 Pro: گوشی هوشمند سوپراسپرت
                  </a>
                </div>
              </div>
              <div className="cardImage group overflow-hidden flex justify-center rounded-b-lg relative">
                <Image
                  src={card1}
                  alt={""}
                  className="w-full rounded-b-lg group-hover:scale-110 transition duration-300 lg:w-[450px] xl:w-full"
                />
                <div className="w-[41px] h-[42px] absolute top-[20%] left-[80%] bg-red-500 mb-[10px] flex justify-center items-center rounded-lg transform -translate-x-1/2 -translate-y-[50%]">
                  <span className="w-[25px] h-[25px] text-center text-white font-[VasirBold]">
                    8.1
                  </span>
                </div>
              </div>
            </div>
            <div className="card2 mt-[30px] w-full lg:w-[450px] xl:w-[48%]">
              <div className="cardContent  group p-[30px] bg-[#ffffff] mx-auto rounded-t-lg lg:w-[450px] xl:w-full ">
                <div className="head text-[#D93E40] text-[15px] font-[IranSans]">
                  خبر جدید
                </div>
                <div className="title hover: underlinTitr">
                  <a className="text-[15px] font-[VasirBold] md:text-[24px]">
                    هر آنچه باید درمورد اپلیکیشن Health سامسونگ بدانید
                  </a>
                </div>
              </div>
              <div className="cardImage group overflow-hidden  flex justify-center rounded-b-lg relative">
                <Image
                  src={card2}
                  alt={""}
                  className="w-full rounded-b-lg group-hover:scale-110 transition duration-300 lg:w-[450px] xl:w-full"
                />
                <div className="w-[41px] h-[42px] absolute top-[20%] left-[80%] bg-red-500 mb-[10px] flex justify-center items-center rounded-lg transform -translate-x-1/2 -translate-y-[50%]">
                  <span className="w-[25px] h-[25px] text-center text-white font-[VasirBold]">
                    8
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="Sidebar  lg:flex bg-[#f0f2f5]">
        <div className="card3Til6 lg:w-2/3  lg:flex lg:flex-col">
          <div className="card3 ml:flex ml:items-center md:items-end lg:items-center lg:mt-[30px]">
            <div
              className="Image3 group mt-[30px] rounded-lg relative overflow-hidden ml:w-[153px] ml:h-[252px] md:w-[295px]  md:h-[317px] 
            lg:w-[235px] lg:h-[236px] lg:mt-0 xl:w-[295px] xl:h-[250px]"
            >
              <Image
                src={card3}
                alt="card3"
                className="group rounded-t-lg group-hover:scale-110 transition duration-300 w-full ml:w-[133px] ml:mr-[20px] ml:h-[222px] ml:rounded-lg
                md:w-[295px]   md:h-[317px] lg:w-[223px] lg:h-[236px] xl:mr-auto xl:w-[295px] md:mr-0 xl:h-[250px]"
              />
              <div className="w-[41px] h-[42px] absolute top-[15%] left-[80%] bg-red-500 mb-[10px] flex justify-center items-center rounded-lg transform
               -translate-x-1/2 -translate-y-[50%] ml:left-[70%]">
                <span className="w-[25px] h-[25px] text-center text-white font-[VasirBold]">7.4</span>
              </div>
            </div>
            <div
              className="PostContent3 bg-white px-[20px] border-b border-r border-l border-[#837f7f] rounded-b-lg py-[32px]  w-full ml:mr-[20px] ml:w-[337px] ml:border-t 
            ml:rounded-lg ml:h-[222px] md:w-[375px] lg:h-[236px] lg:py-0  md:h-[317px] md:mt-[30px] lg:mt-0 xl:w-[450px] xl:h-[250px] "
            >
              <span className="font-[IranSans] text-[15px] text-[#D93E40] hover:text-[#3858f6]">
                موبایل
              </span>
              <a href="#" className=" group-hover: underlinTitr">
                <h4 className="font-[VasirBold] text-[15px] md:text-[24px] lg:text-[18px] ">
                  بررسی سریع Motorola Moto E (2020) و Moto G: اصول اولیه گوشی
                  های هوشمند
                </h4>
              </a>
              <span className="font-[VasirBold] text-[15px]">نصرت اسراء </span>
              <div>
                <div>17 بهمن, 1400</div> <div>3 دقیقه زمان برای مطالعه</div>
              </div>
              <div className="Logos mt-[12px] flex text-[#606770]">
                <Facebook className="w-[30px] hover:text-[#3858f6]" />
                <Instagram className="w-[30px] hover:text-[#3858f6]" />
                <Twitter className="w-[30px] hover:text-[#3858f6]" />
                <Link className="w-[30px] hover:text-[#3858f6]" />
              </div>
            </div>
          </div>

          <div className="card4 ml:flex ml:items-center md:items-end lg:items-center lg:mt-[30px]">
            <div
              className="Image4 group mt-[30px] rounded-lg relative overflow-hidden ml:w-[153px] ml:h-[252px] md:w-[295px] md:h-[317px]
              lg:w-[235px] lg:h-[236px] lg:mt-0 xl:w-[295px] xl:h-[250px]"
            >
              <Image
                src={card4}
                alt="card4"
                className="group rounded-t-lg group-hover:scale-110 transition duration-300 w-full ml:w-[133px] ml:mr-[20px] ml:h-[222px] ml:rounded-lg
                md:w-[295px]  md:h-[317px] lg:w-[223px] lg:h-[236px] xl:mr-auto xl:w-[295px]  md:mr-0 xl:h-[250px] "
              />
              <div className="w-[41px] h-[42px] absolute top-[15%] left-[80%] bg-red-500 mb-[10px] flex justify-center items-center rounded-lg transform 
              -translate-x-1/2 -translate-y-[50%] ml:left-[70%]">
                <span className="w-[25px] h-[25px] text-center text-white font-[VasirBold]">5</span>
              </div>
            </div>
            <div
              className="PostContent4 bg-white px-[20px] border-b border-r border-l border-[#837f7f] rounded-b-lg py-[32px]  w-full ml:mr-[20px] ml:w-[337px] ml:border-t 
            ml:rounded-lg ml:h-[222px] md:w-[375px] md:h-[317px] lg:h-[236px] lg:py-0 xl:w-[450px] xl:h-[250px]"
            >
              <span className="font-[IranSans] text-[15px] text-[#D93E40] hover:text-[#3858f6]">
                موبایل
              </span>
              <a href="#" className=" group-hover: underlinTitr">
                <h4 className="font-[VasirBold] text-[15px] md:text-[24px] lg:text-[18px] ">
                  بررسی Dell XPS 15 (2020): طراحی جدید، مشکلات جدید
                </h4>
              </a>
              <span className="font-[VasirBold] text-[15px]">ایرین پروین</span>
              <div>
                <div>22 اسفند, 1399</div> <div>3 دقیقه زمان برای مطالعه</div>
              </div>
              <div className="Logos mt-[12px] flex text-[#606770]">
                <Facebook className="w-[30px] hover:text-[#3858f6]" />
                <Instagram className="w-[30px] hover:text-[#3858f6]" />
                <Twitter className="w-[30px] hover:text-[#3858f6]" />
                <Link className="w-[30px] hover:text-[#3858f6]" />
              </div>
            </div>
          </div>
          <div className="card5 ml:flex ml:items-center md:items-end lg:items-center lg:mt-[30px]">
            <div
              className="Image5 group mt-[30px] rounded-lg relative overflow-hidden ml:w-[153px] ml:h-[252px] md:w-[295px] md:h-[317px]
              lg:w-[235px] lg:h-[236px] lg:mt-0 xl:w-[295px] xl:h-[250px]"
            >
              <Image
                src={card5}
                alt="card5"
                className="group rounded-t-lg group-hover:scale-110 transition duration-300 w-full ml:w-[133px] ml:mr-[20px] ml:h-[222px] ml:rounded-lg
                md:w-[295px] md:h-[317px] lg:w-[223px] lg:h-[236px] xl:mr-auto xl:w-[295px]  md:mr-0 xl:h-[250px]"
              />
              <div className="w-[41px] h-[42px] absolute top-[15%] left-[80%] bg-red-500 mb-[10px] flex justify-center items-center rounded-lg transform 
              -translate-x-1/2 -translate-y-[50%] ml:left-[70%]">
                <span className="w-[25px] h-[25px] text-center text-white font-[VasirBold]">5</span>
              </div>
            </div>
            <div
              className="PostContent5 bg-white px-[20px] border-b border-r border-l border-[#837f7f] rounded-b-lg py-[32px]  w-full ml:mr-[20px] ml:w-[337px] ml:border-t 
            ml:rounded-lg ml:h-[222px] md:w-[375px]  md:h-[317px] lg:h-[236px] lg:py-0 xl:w-[450px] xl:h-[250px] "
            >
              <span className="font-[IranSans] text-[15px] text-[#D93E40] hover:text-[#3858f6]">
                موبایل
              </span>
              <a href="#" className=" group-hover: underlinTitr">
                <h4 className="font-[VasirBold] text-[15px] md:text-[24px] lg:text-[18px] ">
                  هدفون های Wf-sp800n سونی یک جایگزین حذف نویز هستند.
                </h4>
              </a>
              <span className="font-[VasirBold] text-[15px]">رفا اسلام</span>
              <div>
                <div>22 اسفند, 1399</div> <div>3 دقیقه زمان برای مطالعه</div>
              </div>
              <div className="Logos mt-[12px] flex text-[#606770]">
                <Facebook className="w-[30px] hover:text-[#3858f6]" />
                <Instagram className="w-[30px] hover:text-[#3858f6]" />
                <Twitter className="w-[30px] hover:text-[#3858f6]" />
                <Link className="w-[30px] hover:text-[#3858f6]" />
              </div>
            </div>
          </div>
          <div className="card6 ml:flex ml:items-center md:items-end lg:items-center lg:mt-[30px]">
            <div
              className="Image6 group mt-[30px] rounded-lg relative overflow-hidden ml:w-[153px] ml:h-[252px] md:w-[295px] md:h-[317px]
              lg:w-[235px] lg:h-[236px] lg:mt-0 xl:w-[295px] xl:h-[250px]"
            >
              <Image
                src={card6}
                alt="card6"
                className="group rounded-t-lg group-hover:scale-110 transition duration-300 w-full ml:w-[133px] ml:mr-[20px] ml:h-[222px] ml:rounded-lg
                md:w-[295px]  md:h-[317px] lg:w-[223px] lg:h-[236px] xl:mr-auto xl:w-[295px]  md:mr-0 xl:h-[250px]"
              />
              <div className="w-[41px] h-[42px] absolute top-[15%] left-[80%] bg-red-500 mb-[10px] flex justify-center items-center rounded-lg transform
               -translate-x-1/2 -translate-y-[50%] ml:left-[70%]">
                <span className="w-[25px] h-[25px] text-center text-white font-[VasirBold]">5.5</span>
              </div>
            </div>
            <div
              className="PostContent6 bg-white px-[20px] border-b border-r border-l border-[#837f7f] rounded-b-lg py-[32px]  w-full ml:mr-[20px] ml:w-[337px] ml:border-t 
            ml:rounded-lg ml:h-[222px] md:w-[375px]  md:h-[317px] lg:h-[236px] lg:py-0 xl:w-[450px] xl:h-[250px]"
            >
              <span className="font-[IranSans] text-[15px] text-[#D93E40] hover:text-[#3858f6]">
                موبایل
              </span>
              <a href="#" className=" group-hover: underlinTitr">
                <h4 className="font-[VasirBold] text-[15px] md:text-[24px] lg:text-[18px] ">
                  تماس خودکار و تصادفی گوشی‌های پیکسل به مخاطبان کاربران
                </h4>
              </a>
              <span className="font-[VasirBold] text-[15px]">جین آرا</span>
              <div>
                <div>22 اسفند, 1399</div> <div>3 دقیقه زمان برای مطالعه</div>
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


         
          <div className="MostPUpulerVideo lg:w-1/3 lg:pr-[30px] bg-[#f0f2f5] xl:mt-[30px]">
          <div className="Widget mb-[30px]  flex flex-wrap h-[140px]">
            <div className="item1 w-[48%] flex items-center bg-white rounded-lg">
              <div className="image1">
                <Image src={Image1} alt={""} className="rounded-[50%]" />
              </div>
              <div className="Content pr-[7px] hover:text-[#3858f6]">
                فناوری
              </div>
            </div>
            <div className="item2 w-[48%] flex items-center bg-white rounded-lg mr-[4%]">
              <div className="image1">
                <Image src={Image2} alt={""} className="rounded-[50%]" />
              </div>
              <div className="Content pr-[7px] hover:text-[#3858f6]">
                نرم افزار
              </div>
            </div>
            <div className="item3 w-[48%] flex items-center bg-white rounded-lg mt-[10px]">
              <div className="image1">
                <Image src={Image3} alt={""} className="rounded-[50%]" />
              </div>
              <div className="Content pr-[7px] hover:text-[#3858f6]">
                گردشگری
              </div>
            </div>
            <div className="item4 w-[48%] flex items-center bg-white rounded-lg mt-[10px]  mr-[4%]">
              <div className="image1">
                <Image src={Image4} alt={""} className="rounded-[50%]" />
              </div>
              <div className="Content pr-[7px] hover:text-[#3858f6]">
                برنامه نویسی
              </div>
            </div>
          </div>
            <div>
              <h5 className="text-center font-[VasirBold] border-b border-[#000000] w-[250px] mx-auto mb-[20px] pb-[7px]">
                پربازدیدترین ویدئوها
              </h5>
            </div>
            <div className="widget1 w-full md:w-[630px] lg:w-[240px] lg:h-[211px] lg:mt-[30px] xl:w-[300px] mx-auto   ">
              <div className=" Container group w-full md:w-[630px] relative overflow-hidden rounded-lg  mx-auto  lg:w-[240px] xl:w-[270px] ">
                <Image
                  src={widget1}
                  alt={""}
                  className=" group-hover:scale-110 transition duration-300 rounded-lg  md:w-[630px]  lg:w-[210px] xl:w-[270px] w-full "
                />
                <div className="w-[50px] h-[50px] PostContent  absolute top-[50%] left-1/2 bg-red-500 transform -translate-x-1/2 -translate-y-[50%] px-[20px] pb-[20px] mb-[10px] flex justify-center items-center  rounded-[50%]">
                  <Play className="mb-[10px]  absolute top-[15px]  right-[15px]" />
                </div>
              </div>
              <div className="Content mt-[15px] mx-auto">
                <h3 className="mb-[10px] text-[14px] font-[IranSans] px-[15px] md:w-[630px] lg:w-fit underlinTitr after:!bg-white w-[full] mx-auto">
                  بررسی لپ تاپ هواوی میت بوک D 14 [با بررسی ویدئویی]
                </h3>
              </div>
            </div>

            <div className="widget2 w-full md:w-[630px] lg:w-[240px] lg:h-[211px] lg:mt-[30px] xl:w-[300px] mx-auto">
              <div className=" Container group w-full md:w-[630px] relative overflow-hidden rounded-lg  mx-auto  lg:w-[240px] xl:w-[270px] ">
                <Image
                  src={widget2}
                  alt={""}
                  className=" group-hover:scale-110 transition duration-300 rounded-lg  md:w-[630px] w-full  lg:w-[210px] xl:w-[270px]  "
                />
                <div className="w-[50px] h-[50px] PostContent  absolute top-[50%] left-1/2 bg-red-500 transform -translate-x-1/2 -translate-y-[50%] px-[20px] pb-[20px] mb-[10px] flex justify-center items-center  rounded-[50%]">
                  <Play className="mb-[10px]  absolute top-[15px]  right-[15px]" />
                </div>
              </div>
              <div className="Content mt-[15px] mx-auto">
                <h3 className="mb-[10px] text-[14px] font-[IranSans] px-[15px] md:w-[630px] lg:w-fit underlinTitr after:!bg-white w-full mx-auto">
                  بررسی تلویزیون C1 OLED ال جی [با بررسی ویدیویی]
                </h3>
              </div>
            </div>

            <div className="widget3 w-full md:w-[630px] lg:w-[240px] lg:h-[211px] lg:mt-[30px] xl:w-[300px] mx-auto">
              <div className=" Container group w-full md:w-[630px] relative overflow-hidden rounded-lg  mx-auto  lg:w-[240px] xl:w-[270px] ">
                <Image
                  src={widget3}
                  alt={""}
                  className=" group-hover:scale-110 transition duration-300 rounded-lg  md:w-[630px]  lg:w-[210px] xl:w-[270px] w-full  "
                />
                <div className="w-[50px] h-[50px] PostContent  absolute top-[50%] left-1/2 bg-red-500 transform -translate-x-1/2 -translate-y-[50%] px-[20px] pb-[20px] mb-[10px] flex justify-center items-center  rounded-[50%]">
                  <Play className="mb-[10px]  absolute top-[15px]  right-[15px]" />
                </div>
              </div>
              <div className="Content mt-[15px] mx-auto">
                <h3 className="mb-[10px] text-[14px] font-[IranSans] px-[15px] md:w-[630px] lg:w-fit underlinTitr after:!bg-white  mx-auto w-full">
                  بررسی آیپد پرو 2021 اپل [با بررسی ویدئویی]
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="Banner pt-[30px] pb-[40px] bg-[#f0f2f5] ">
          <Image src={Banner} alt={"Banner"} className="lg:w-[930px] lg:h-[150px] xl:w-full" />
        </div>
      </div>
    </div>
  );
};

export default BuyGuide;
