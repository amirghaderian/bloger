import Categories from "@/components/Categories";
import DarkMode from "@/components/DarkMode";
import DarkModeButton from "@/components/DarkModeBotton";
import Header from "@/components/Header";
import MostVisitedPosts from "@/components/MostVisitedPosts";
import News from "@/components/News";
import Posts from "@/components/Posts";
import TopSign from "@/components/TopSign";
import CustomCursor from "@/components/cursor";
import Example3 from "@/components/Example3"
import PostList from "@/components/PostList";
import BuyGuide from "@/components/BuyGuide";
import Instagram from "@/components/Instagram";
import Footer from "@/components/Footer";
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
      <PostList/>
      <BuyGuide/>
      <Instagram/>
      <Footer/>
      {/* <TopSign/>
      <Example3/> */}
    </>
  );
};
export default Home;
