import Categories from "@/components/Categories";
import Header from "@/components/Header";
import MostVisitedPosts from "@/components/MostVisitedPosts";
import News from "@/components/News";
import Posts from "@/components/Posts";
import CustomCursor from "@/components/cursor";

const Home = () => {
  return (
    <>
      <CustomCursor />
      <Header />
      <Posts />
      <Categories/>
      <MostVisitedPosts/>
      <News/>
    </>
  );
};
export default Home;
