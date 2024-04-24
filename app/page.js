import Categories from "./components/Categories";
import DuaCard from "./components/DuaCard";
import Settings from "./components/Settings";

const Home = async () => {
  
  return (
    <div className="flex h-full">
      <div>
        <Categories />
      </div>
      <div className="flex-1">
        <DuaCard />
      </div>
      <div>
        <Settings />
      </div>
    </div>
  );
};

export default Home;
