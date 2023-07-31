import Link from "next/link";
import Image from "next/image";
//Images
import post1 from "../../public/images/MostView/post1.jpg";
import post2 from "../../public/images/MostView/post2.jpg";
import post3 from "../../public/images/MostView/post3.jpg";
import post4 from "../../public/images/MostView/post4.jpg";
import lastPost from "../../public/images/MostView/lastPost.jpg";

const MostVisitedPosts = () => {
  return (
    <div className="MostVisitedPosts w-full h-[1200px] flex justify-center bg-white">
      <div className="Container w-[320px] md:w-[720px] px-[15px]  mx-auto">
        <div className="Title  md:flex justify-between items-baseline">
          <div className="Section w-[290px]  mx-auto">
            <h3 className="font-[VasirBold] md:w-[480px] md:text-[28px]"> پربازدید ترین مطالب</h3>
          </div>
          <div className="w-[290px] h-[32px] mt-[20px]  mx-auto text-left">
            <Link href={""} className="font-[IranSans] text-[#3858F6] text-left">
              مشاهده همه
            </Link>
          </div>
        </div>
        <div className=" w-[300px] md:w-full  h-[1101px] flex-col">
          <div className="  w-full h-[110px] my-[20px]  flex flex-wrap  text-center ">
            <button className="font-[IranSans] px-[13px] m-[5px] h-[46px] border border-gray-400 rounded-lg text-[#65676B]">
              وب و اینترنت
            </button>
            <button className="font-[IranSans] px-[13px] m-[5px] h-[46px] border border-gray-400 rounded-lg text-[#65676B]">
              برنامه نویسی
            </button>
            <button className="font-[IranSans] px-[11px] m-[5px] h-[46px] border border-gray-400 rounded-lg text-[#65676B]">
              کسب و کار
            </button>
            <button className="font-[IranSans] px-[13px] m-[5px] h-[46px] border border-gray-400 rounded-lg text-[#65676B]">
              نرم افزار های کاربردی
            </button>
          </div>
          <div className="Posts w-[290px]  h-[650px]    ">
            <div className="Post1 w-[290px] md:w-[690px] h-[151.5px] flex pb-[30px]  border-b border-[#8e9196]">
              <div className="PostImage ml-[20px] group overflow-hidden rounded-lg">
                <Image
                  src={post1}
                  alt={""}
                  className=" rounded-lg group-hover:scale-110 transition duration-300 "
                />
              </div>
              <div className="PostContent">
                <p className="w-[170px]  font-[IranSans] text-[#D93E40]">
                  موبایل
                </p>
                <h2 className="w-[170px] md:w-[570px] text-[18px] font-[VasirBold]">
                  بهترین برنامه های فشرده سازی فایل برای آیفون
                </h2>
              </div>
            </div>
            <div className="Post2 w-[290px] md:w-[690px] h-[161.5px] flex py-[30px]  border-b border-[#8e9196]">
              <div className="PostImage ml-[20px]  group overflow-hidden rounded-lg">
                <Image
                  src={post2}
                  alt={""}
                  className="w-[100px] h-[100px] rounded-lg  group-hover:scale-110 transition duration-300"
                />
              </div>
              <div className="postContent">
                <p className="w-[170px] font-[IranSans] text-[#D93E40]">
                  نرم افزار کاربردی
                </p>
                <h2 className="w-[170px] md:w-[570px]  text-[18px] font-[VasirBold]">
                  بهترین لوازم جانبی برای iPad جدید شما
                </h2>
              </div>
            </div>
            <div className="Post3 w-[290px]  md:w-[690px] h-[161.5px] flex py-[30px]  border-b border-[#8e9196]">
              <div className="PostImage ml-[20px]  group overflow-hidden rounded-lg">
                <Image
                  src={post3}
                  alt={""}
                  className="w-[100px] h-[100px] rounded-lg  group-hover:scale-110 transition duration-300"
                />
              </div>
              <div className="PostContent">
                <p className="w-[170px] font-[IranSans] text-[#D93E40]">
                  کسب و کار
                </p>
                <h2 className="w-[170px] md:w-[570px]  text-[18px] font-[VasirBold]">
                  ۱۳ زبان به آپدیت جدید کلاب‌هاوس اضافه شد
                </h2>
              </div>
            </div>
            <div className="post4 w-[290px] md:w-[690px] h-[161.5px] flex py-[30px] ">
              <div className="postImage ml-[20px]  group overflow-hidden rounded-lg">
                <Image
                  src={post4}
                  alt={""}
                  className="w-[100px] h-[100px] rounded-lg  group-hover:scale-110 transition duration-300"
                />
              </div>
              <div className="postContent">
                <p className="w-[170px] font-[IranSans] text-[#D93E40]">
                  گوگل
                </p>
                <h2 className="w-[170px] md:w-[570px]  text-[18px] font-[VasirBold]">
                چگونه صفحه اصلی گوگل کروم خود را با GIF شخصی سازی کنیم؟
                </h2>
              </div>
            </div>

            <div className="LastPost group w-[290px]  md:w-[690px] md:h-[587px] h-[246px] mt-[40px] relative overflow-hidden rounded-lg ">
              <Image
                src={lastPost}
                alt={" اپل"}
                className=" group-hover:scale-110 transition duration-300 "
              />
              <div className="PostContent  w-[260px] absolute top-1/2 md:top-[80%] md:left-[80%] left-1/2 transform -translate-x-1/2 -translate-y-[10%] px-[20px] pb-[20px] text-white">
                <h2 className="text-[15px]"> برند اپل</h2>
                <p className="text-[20px]  hover:underline delay-1000 w-[240px] md:w-[490px]">
                  آیفون SE متوقف شده است، اما همچنان آن را می فروشند!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostVisitedPosts;
