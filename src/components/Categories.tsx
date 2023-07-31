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
import { useEffect, useState } from "react";

const Categories = () => {
  const [slideToShows, setSlideToShow] = useState<number>(2);
  const updateSlideToShow = () => {
    if (window.innerWidth >= 900) {
      setSlideToShow(6);
    } else if (window.innerWidth >= 768) {
      setSlideToShow(5);
    } else if (window.innerWidth >= 640) {
      setSlideToShow(4);
    } else if (window.innerWidth >= 500) {
      setSlideToShow(3);
    } else {
      setSlideToShow(2);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateSlideToShow);
    updateSlideToShow();
    return () => {
      window.removeEventListener("resize", updateSlideToShow);
    };
  }, []);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: slideToShows,
    slidesToScroll: slideToShows,
  };
  return (
    <div className="w-full  h-[357px] bg-[#f0f2f5]">
      <div className="Container w-full h-[358px]  py-[30px]">
        <div className="Slider w-full h-[73px]  mb-[30px]">
          <div className="Title md:flex items-baseline md:w-[720px] md:mx-auto md:mb-4">
            <div className="Section w-[290px]  mx-auto">
              <h3 className="font-[VasirBold] md:text-[28px]">دسته بندی ها</h3>
            </div>
            <div className="w-[290px] h-[32px] mt-[20px]  mx-auto md:text-left">
              <Link href={""} className="font-[IranSans] text-[#3858F6]">
                مشاهده همه
              </Link>
            </div>
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
