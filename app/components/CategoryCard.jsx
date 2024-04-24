import Image from "next/image";
import {  useState } from "react";
import guruttoImage from "@/app/svgs/duar_gurutto.svg";
import duaarrowSVG from "@/app/svgs/duaarrow.svg";
import {
  useGetDuasByCatIdAndSubCatIdQuery,
  useGetSubCategoriesByIdQuery,
} from "../redux/api/baseApi";

const CategoryCard = ({ category }) => {
  // State for subcategories and duas
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedDua, setSelectedDua] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [subCategoryId, setSubCategoryId] = useState(null);
  const [catIdOfSubCat, setcatIdOfSubCat] = useState(null);

  const { data: subCategories } = useGetSubCategoriesByIdQuery(categoryId);



  const { data: duas } = useGetDuasByCatIdAndSubCatIdQuery({
    cat_id: catIdOfSubCat,
    subcat_id: subCategoryId,
  });

  // Destructuring category object
  const { cat_name_en, no_of_subcat, no_of_dua } = category;

  const handleSubcategories = (cat_id, subcat_id) => {
    setSelectedSubcategory(subcat_id)
    setcatIdOfSubCat(cat_id);
    setSubCategoryId(subcat_id);
  };


  return (
    <div
      className="collapse bg-base-200"
      onClick={() => setCategoryId(category?.cat_id)}
    >
      <input type="radio" name="my-accordion-1" />
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
        {subCategories?.map((subCategory, idx) => (
          <div
            key={idx}
            className="collapse"
            onClick={() =>
              handleSubcategories(subCategory.cat_id, subCategory.subcat_id)
            }
          >
            <input type="radio" name="my-accordion-2" />
            {/* Subcategory title */}
            <div className="collapse-title px-3">
              <div className="flex items-center space-x-2">
                {/* Subcategory icon */}
                <Image src={duaarrowSVG} alt="icon" />
                <p
                  className={`text-[15px] font-medium ${selectedSubcategory === subCategory.subcat_id && "text-[#1FA45B]"} `}
                >
                  {subCategory?.subcat_name_en}
                </p>
              </div>
            </div>

            {/* Duas under subcategory */}
            <div className="collapse-content">
              {duas?.map((dua, idx) => (
                <div key={idx} className="flex items-center gap-3 mb-5 ml-2 cursor-pointer" onClick={()=> setSelectedDua(dua.dua_id)}>
                  {/* Dua icon */}
                  <Image src={duaarrowSVG} alt="icon" width={10} />
                  {/* Dua name */}
                  <p className={`text-sm ${selectedDua === dua.dua_id && "text-[#1FA45B]"}`} >{dua?.dua_name_en}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
