import Image from "next/image";
import RightPost from "../../public/images/rightPost.jpg";
import Post1 from "../../public/images/1.jpg";
import Post2 from "../../public/images/post2.jpg";
import Post3 from "../../public/images/post3.jpg";
import Post4 from "../../public/images/post4.jpg";
const Posts = () => {
  return (
    <div className="Posts w-full  h-[1500px] bg-[#f0f2f5]  pt-[30px] flex justify-center">
      <div className="Container w-[290px]   px-[15px] flex-col ">
        <div className="RightPost group w-[260px] relative overflow-hidden rounded-lg ">
          <Image
            src={RightPost}
            alt={"تولید محتوا"}
            className=" group-hover:scale-110 transition duration-300 "
          />
          <div className="PostContent  w-[260px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[10%] px-[20px] pb-[20px] text-white">
            <h2 className="text-[15px]">تولید محتوا</h2>
            <p className="text-[20px] leading-10 hover:underline delay-1000">
              یک چارچوب پنج مرحله‌ای برای هدف‌گیری موثر کلمات کلیدی
            </p>
          </div>
        </div>

        <div className="CenterPost mt-[30px]">
          <div className="group w-[260px] relative overflow-hidden rounded-lg ">
            <Image
              src={Post1}
              alt={""}
              className=" group-hover:scale-110 transition duration-300 "
            />
            <div className="PostContent pt-[20px]">
              <h2 className="text-[15px] mb-[10px] text-[#D93E40]">فضانوردی</h2>
              <p className="text-[16px] leading-10 hover:underline delay-1000">
                ماموریتRocketLab
              </p>
            </div>
          </div>
          <div className="group w-[260px] relative overflow-hidden rounded-lg mt-[30px] ">
            <Image
              src={Post2}
              alt={""}
              className=" group-hover:scale-110 transition duration-300 "
            />
            <div className="PostContent pt-[20px]">
              <h2 className="text-[15px] mb-[10px] text-[#D93E40]">تکنولوژی</h2>
              <p className="text-[16px] leading-10 hover:underline delay-1000 ">
                واقعیت مجازی یا فناوری هوش مصنوعی
              </p>
            </div>
          </div>
          <div className="group w-[260px] relative overflow-hidden rounded-lg mt-[30px] ">
            <Image
              src={Post3}
              alt={""}
              className=" group-hover:scale-110 transition duration-300 "
            />
            <div className="PostContent pt-[20px]">
              <h2 className="text-[15px] mb-[10px] text-[#D93E40]">
                نرم افزارهای کاربردی
              </h2>
              <p className="text-[16px] leading-10 hover:underline delay-1000 ">
                فیس بوک برای تجارت برای بازاریابی
              </p>
            </div>
          </div>
          <div className="group w-[260px] relative overflow-hidden rounded-lg mt-[30px] ">
            <Image
              src={Post4}
              alt={""}
              className="  group-hover:scale-110 transition duration-300 "
            />
            <div className="PostContent pt-[20px]">
              <h2 className="text-[15px] mb-[10px] text-[#D93E40]">
                برنامه نویسی
              </h2>
              <p className="text-[16px] leading-10 hover:underline  delay-1000 ">
                کاربرد هوش مصنوعی در برنامه نویسی
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
