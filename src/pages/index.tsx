import Categories from "@/components/Categories";
import DarkMode from "@/components/DarkMode";
import DarkModeButton from "@/components/DarkModeBotton";
import Header from "@/components/Header";
import MostVisitedPosts from "@/components/MostVisitedPosts";
import News from "@/components/News";
import Posts from "@/components/Posts";
import TopSign from "@/components/TopSign";
import CustomCursor from "@/components/cursor";
import Example from "@/components/example";
const Home = () => {
  return (
    <>
      <CustomCursor />
      <Header />
      <Posts />
      <Categories />
      <MostVisitedPosts />
      <News />
      {/* <DarkModeButton /> */}
      <TopSign/>
    </>
  );
};
export default Home;
