import { BsChevronUp as SignTop } from "react-icons/bs";

const TopSign = () => {
  const handleClick = () => {
    // تابع زیر صفحه را به بالای صفحه اسکرول می‌کند.
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="w-[50px] h-[50px] bg-[#3858F6] rounded-[50%] flex justify-center items-center sticky bottom-[30px] right-[16px]"
      onClick={handleClick}
    >
      <SignTop className="w-[16.25px] h-[26px] text-white" />
    </div>
  );
};

export default TopSign;
