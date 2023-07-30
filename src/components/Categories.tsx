import Link from "next/link";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Images
import animals from "../../public/images/animals.jpg";
import information from "../../public/images/information.jpg";
import restaurant from "../../public/images/restaurant.jpg";
import software from "../../public/images/software.jpg";
import sport from "../../public/images/sport.jpg";
import tourism from "../../public/images/tourism.jpg";
import life from "../../public/images/software.jpg";
import doctor from "../../public/images/restaurant.jpg";

const Categories = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full  h-[357px] bg-[#f0f2f5]">
      <div className="Container w-full h-[358px]  py-[30px]">
        <div className="Title w-full h-[73px]  mb-[30px]">
          <div className="Section w-[290px]  mx-auto">
            <h3 className="font-[VasirBold]">دسته بندی ها</h3>
          </div>
          <div className="w-[290px] h-[32px] mt-[20px]  mx-auto">
            <Link href={""} className="font-[IranSans] text-[#3858F6]">
              مشاهده همه
            </Link>
          </div>

          <Slider {...settings}>
            <div className=" group w-[155px] h-[155px] relative  overflow-hidden rounded-xl  ">
              <Image
                src={animals}
                alt={""}
                className=" w-[135px] h-[135px]  mx-auto  group-hover:scale-110  transition duration-300 rounded-xl mt-[10px] "
              />
              <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[10%]   w-[135px] h-[46.5px] text-center">
                <h2 className="text-white font-[VasirBold]">حیوانات خانگی</h2>
              </div>

            </div>
            <div className="group w-[155px] h-[155px] relative   overflow-hidden rounded-xl ">
              <Image
                src={information}
                alt={""}
                className="w-[135px] h-[135px] mx-auto  group-hover:scale-110  transition duration-300 rounded-xl  mt-[10px] "
              />
              <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[10%]  w-[135px] h-[46.5px]  text-center">
                <h2 className="text-white font-[VasirBold]">فناوری اطلاعات </h2>
              </div>
            </div>
            <div className=" group w-[155px] h-[155px] relative">
              <Image
                src={restaurant}
                alt={""}
                className="w-[135px] h-[135px] mx-auto group-hover:scale-110  transition duration-300 rounded-xl   mt-[10px] "
              />
              <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[10%]   w-[135px] h-[46.5px]  text-center">
                <h2 className="text-white font-[VasirBold]">
                  {" "}
                  رستوران و کافی شاپ
                </h2>
              </div>
            </div>
            <div className=" group w-[155px] h-[155px] relative">
              <Image
                src={software}
                alt={"نرم افزار"}
                className="w-[135px] h-[135px] mx-auto group-hover:scale-110  transition duration-300 rounded-xl  mt-[10px] opacity-80"
              />
              <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[10%]   w-[135px] h-[46.5px]  text-center">
                <h2 className="text-white font-[VasirBold]"> نرم افزار</h2>
              </div>
            </div>
            <div className="group w-[155px] h-[155px] relative">
              <Image
                src={sport}
                alt={""}
                className="w-[135px] h-[135px] mx-auto group-hover:scale-110  transition duration-300 rounded-xl   mt-[10px]   "
              />
              <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[10%]   w-[135px] h-[46.5px] text-center">
                <h2 className="text-white font-[VasirBold]"> ورزش</h2>
              </div>
            </div>
            <div className=" group w-[155px] h-[155px] relative">
              <Image
                src={tourism}
                alt={""}
                className="w-[135px] h-[135px] mx-auto  group-hover:scale-110  transition duration-300 rounded-xl mt-[10px] "
              />
              <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[10%]  w-[135px] h-[46.5px] text-center">
                <h2 className="text-white font-[VasirBold]">گردشگری </h2>
              </div>
            </div>
            <div className="group w-[155px] h-[155px] relative">
              <Image
                src={life}
                alt={""}
                className="w-[135px] h-[135px] mx-auto group-hover:scale-110  transition duration-300 rounded-xl  mt-[10px] "
              />
              <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[10%]  w-[135px] h-[46.5px]  text-center">
                <h2 className="text-white font-[VasirBold]">سبک زندگی </h2>
              </div>
            </div>

            <div className="group w-[155px] h-[155px] relative">
              <Image
                src={doctor}
                alt={""}
                className="w-[135px] h-[135px] mx-auto group-hover:scale-110  transition duration-300 rounded-xl  mt-[10px]"
              />
              <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[10%]  w-[135px] h-[46.5px]  text-center">
                <h2 className="text-white font-[VasirBold]">پزشکی </h2>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Categories;
