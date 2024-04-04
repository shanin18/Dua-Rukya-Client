import Image from "next/image";
import { useState } from "react";
import guruttoImage from "@/app/svgs/duar_gurutto.svg";
import duaarrowSVG from "@/app/svgs/duaarrow.svg";
import NavigateBtn from "./NavigateBtn";

const CategoryCard = ({ category }) => {
  // Destructuring category object
  const { cat_name_en, no_of_subcat, no_of_dua } = category;

  // State for subcategories and duas
  const [subcategories, setSubcategories] = useState([]);
  const [duas, setDuas] = useState([]);

  // Function to handle accordion click event
  const handleAccordionClick = async (cat_id) => {
    try {
      const response = await fetch(
        `http://localhost:8000/sub-categories?cat_id=${cat_id}`
      );
      const result = await response.json();
      setSubcategories(result);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  // Function to handle accordion contents
  const handleAccordionContents = async (cat_id, subcat_id) => {
    try {
      const response = await fetch(
        `http://localhost:8000/duas?cat=${cat_id}&subcat_id=${subcat_id}`
      );
      const result = await response.json();
      setDuas(result);
      dispatch(addIds({ subcat_id }));
    } catch (error) {
      console.error("Error fetching duas:", error);
    }
  };

  return (
    <NavigateBtn id={category.cat_id}>
      <div
      className="collapse bg-base-200"
      onClick={() => handleAccordionClick(category?.cat_id)}
    >
      <input type="radio" name="my-accordion-1" defaultChecked />
      {/* Category card title */}
      <div className="collapse-title bg-[#e8f0f5] flex items-center justify-between px-3">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white rounded-xl">
            {/* Category thumbnail */}
            <Image src={guruttoImage} alt="duas_thumbnail" />
          </div>
          <div>
            {/* Category name and subcategory count */}
            <h3 className="font-medium">{cat_name_en}</h3>
            <h5 className="text-sm text-gray-400">
              Subcategory: {no_of_subcat}
            </h5>
          </div>
        </div>
        {/* Number of duas */}
        <div className="text-center">
          <h3>{no_of_dua}</h3>
          <h5 className="text-sm">Duas</h5>
        </div>
      </div>

      {/* Subcategories */}
      <div className="collapse-content bg-white p-0">
        {subcategories.map((subCategory, idx) => (
          <div
            key={idx}
            className="collapse"
            onClick={() =>
              handleAccordionContents(subCategory.cat_id, subCategory.subcat_id)
            }
          >
            <input type="radio" name="my-accordion-2" />
            {/* Subcategory title */}
            <div className="collapse-title px-3">
              <div className="flex items-center space-x-2">
                {/* Subcategory icon */}
                <Image src={duaarrowSVG} alt="icon" />
                <p className="text-sm font-medium">
                  {subCategory?.subcat_name_en}
                </p>
              </div>
            </div>

            {/* Duas under subcategory */}
            <div className="collapse-content">
              {duas?.map((dua, idx) => (
                <div key={idx} className="flex items-center gap-3 mb-5 ml-2">
                  {/* Dua icon */}
                  <Image src={duaarrowSVG} alt="icon" width={10} />
                  {/* Dua name */}
                  <p className="text-sm">{dua?.dua_name_en}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </NavigateBtn>
  );
};

export default CategoryCard;
