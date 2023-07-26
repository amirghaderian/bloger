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
    <div className="w-full bg-blue-200 h-[357px]">
      <div className="Container w-full h-[237px] bg-slate-300">
        <div className="Title w-full h-[73px] bg-pink-300 mb-[30px]">
          <div className="Section w-[290px] bg-green-400 mx-auto">
            <h3 className="font-[VasirBold]">دسته بندی ها</h3>
          </div>
          <div className="w-[290px] h-[32px] mt-[20px] bg-amber-400 mx-auto">
            <Link href={""} className="font-[IranSans]">مشاهده همه</Link>
          </div>

          <Slider {...settings}>
            <div className="w-[155px] h-[155px]    ">
              <Image
                src={animals}
                alt={""}
                className="w-[135px] h-[135px]  mx-auto rounded-xl  mt-[10px]"
              />
            </div>
            <div className="w-[155px] h-[155px] ">
              <Image
                src={information}
                alt={""}
                className="w-[135px] h-[135px] mx-auto   mt-[10px] rounded-xl"
              />
            </div>
            <div className="w-[155px] h-[155px]">
              <Image
                src={restaurant}
                alt={""}
                className="w-[135px] h-[135px] mx-auto   mt-[10px] rounded-xl"
              />
            </div>
            <div className="w-[155px] h-[155px]">
              <Image
                src={software}
                alt={"نرم افزار"}
                className="w-[135px] h-[135px] mx-auto   mt-[10px] rounded-xl"
              />
            </div>
            <div className="w-[155px] h-[155px]">
              <Image
                src={sport}
                alt={""}
                className="w-[135px] h-[135px] mx-auto   mt-[10px] rounded-xl "
              />
            </div>
            <div>
              <Image
                src={restaurant}
                alt={""}
                className="w-[135px] h-[135px] mx-auto   mt-[10px] rounded-xl"
              />
            </div>
            <div>
              <Image
                src={tourism}
                alt={""}
                className="w-[135px] h-[135px] mx-auto   mt-[10px] rounded-xl"
              />
            </div>
            <div>
              <Image
                src={life}
                alt={""}
                className="w-[135px] h-[135px] mx-auto   mt-[10px] rounded-xl"
              />
            </div>
            <div>
              <Image
                src={doctor}
                alt={""}
                className="w-[135px] h-[135px] mx-auto   mt-[10px] rounded-xl"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Categories;
