import Image from "next/image";
import RightPost from "../../public/images/rightPost.jpg";
import Post1 from "../../public/images/1.jpg"
const Posts = () => {
  return (
    <div className="Posts w-full h-[630px] bg-slate-600 pt-[30px] flex justify-center">
      <div className="Container w-[1260px] px-[15px] flex ">
        <div className="RightPost ">
          <Image src={RightPost} alt={"تولید محتوا"} className="rounded-lg relative" />
          <div className="PostContent absolute  bottom-[28px] right-12 text-white "><h2 className="text-lg ">تولید محتوا</h2>
          <p className="text-[22px] leading-10 hover:underline delay-1000">یک چارچوب پنج مرحله‌ای برای هدف‌گیری موثر کلمات کلیدی</p></div>
        </div>
        <div className="CenterPost">
          <Image src={Post1} alt={""} className="w-[315px] h-[250px]" />
          <Image src={""} alt={""} />
        </div>
        <div className="LeftPost">
          <Image src={""} alt={""} />
          <Image src={""} alt={""} />
        </div>
      </div>
    </div>
  );
};

export default Posts;
