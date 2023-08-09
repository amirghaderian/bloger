import Image from "next/image";
//images
import Image1 from "../../public/images/Instagram/image1.jpg"
import Image2 from "../../public/images/Instagram/image2.jpg"
import Image3 from "../../public/images/Instagram/image3.jpg"
import Image4 from "../../public/images/Instagram/image4.jpg"
import Image5 from "../../public/images/Instagram/image5.jpg"
import Image6 from "../../public/images/Instagram/image6.jpg"
const Instagram = () => {
  return (
    <div className="bg-[#f0f2f5]">
      <h3 className="text-[18px] font-[VasirBold] pb-[10px] w-[290px] mx-auto">اینستاگرام</h3>
      <div className="Images flex flex-wrap pb-[40px] px-[20px] ml:w-[540px] md:w-[720px] lg:w-[960px] xl:w-full max-w-[1260px] mx-auto">
        <div className="image1 w-1/2 ml:w-1/3 md:w-1/6">
            <Image src={Image1} alt={""} className="w-full p-[9px] rounded-2xl"/>
        </div>
        <div className="image2 w-1/2 ml:w-1/3 md:w-1/6">
            <Image src={Image2} alt={""} className="w-full p-[9px] rounded-2xl"/>
        </div>
        <div className="image3 w-1/2 ml:w-1/3 md:w-1/6 ">
            <Image src={Image3} alt={""} className="w-full p-[9px] rounded-2xl"/>
        </div>
        <div className="image4 w-1/2 ml:w-1/3 md:w-1/6 ">
            <Image src={Image4} alt={""} className="w-full p-[9px] rounded-2xl"/>
        </div>
        <div className="image5 w-1/2 ml:w-1/3 md:w-1/6 ">
            <Image src={Image5} alt={""} className="w-full p-[9px] rounded-2xl"/>
        </div>
        <div className="image6 w-1/2 ml:w-1/3 md:w-1/6 ">
            <Image src={Image6} alt={""} className="w-full p-[9px] rounded-2xl"/>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
