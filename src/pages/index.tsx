import Categories from "@/components/Categories";
import Header from "@/components/Header";
import Posts from "@/components/Posts";
import CustomCursor from "@/components/cursor";

const Home = () => {
  return (
    <>
      <CustomCursor />
      <Header />
      <Posts />
      <Categories/>
    </>
  );
};
export default Home;
