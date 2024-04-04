import Categories from "./components/Categories";
import DuaCard from "./components/DuaCard";
import Settings from "./components/Settings";
import getCategories from "./lib/getCategories";
import getDuas from "./lib/getDuas";
import getSubCategories from "./lib/getSubCategories";

const Home = async () => {
  const categories = await getCategories();
  const subCategories = await getSubCategories();
  const duas = await getDuas();

  return (
    <div className="flex h-full">
      <div>
        <Categories categories={categories} />
      </div>
      <div className="flex-1">
        <DuaCard subCategories={subCategories} duas={duas} />
      </div>
      <div>
        <Settings />
      </div>
    </div>
  );
};


export default Home;
