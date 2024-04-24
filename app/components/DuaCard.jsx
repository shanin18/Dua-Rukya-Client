"use client";
import Image from "next/image";
import Link from "next/link";
import AudioPlayer from "./AudioPlayer";
import duaCardSVG from "@/app/svgs/duacard.svg";
import copySVG from "@/app/svgs/copy.svg";
import bookmarkSVG from "@/app/svgs/bookmark.svg";
import memorizeSVG from "@/app/svgs/memorize.svg";
import shareSVG from "@/app/svgs/share.svg";
import reportSVG from "@/app/svgs/report.svg";
import CategoriesButton from "./CategoriesButton";
import {
  useGetDuasQuery,
  useGetSubCategoriesQuery,
} from "../redux/api/baseApi";
import Spinner from "./Spinner";

const DuaCard = () => {
  const {
    data: subCategories,
    isLoading: subCategoriesLoading,
    isError,
    error,
  } = useGetSubCategoriesQuery();
  const { data: duas, isLoading: duasLoading } = useGetDuasQuery();
  if (isError) {
    console.log(error);
  }

  return (
    <div className="flex flex-col h-full md:pt-[102px] p-3 xl:pt-0">
      {/* Title and Categories Button */}
      <div className="bg-white p-5 rounded-xl border-2 xl:hidden mb-5 flex items-center gap-4 w-full">
        <CategoriesButton />
        <h2 className="font-medium">Dua's Importance</h2>
      </div>

      {/* Dua Cards */}
      {subCategoriesLoading || duasLoading ? (
        <div className="w-full min-h-full flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="overflow-y-auto space-y-5">
          {subCategories?.map((subCategory, idx) => (
            <div key={idx} className="space-y-5">
              {/* Subcategory Title */}
              <div className="bg-white p-5 rounded-xl">
                <h2 className="font-medium">
                  <span className="text-[#1FA45B]">Section: </span>
                  {subCategory?.subcat_name_en}
                </h2>
              </div>

              {/* Individual Duas */}
              {duas
                ?.filter((dua) => dua.subcat_id === subCategory.subcat_id)
                ?.map((dua, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl">
                    {/* Dua Title */}
                    <div className="flex items-center gap-3 pb-4">
                      <Image src={duaCardSVG} alt="name_of_allah" />
                      <h2 className="text-[#1FA45B] text-lg font-semibold">
                        <span className="mr-1">{dua?.dua_id}.</span>
                        {dua?.dua_name_en}
                      </h2>
                    </div>

                    {/* Dua Content */}
                    {dua?.top_en && (
                      <p className="font-medium md:text-lg pb-6">
                        {dua?.top_en}
                      </p>
                    )}
                    {dua?.dua_arabic && (
                      <p className="font-medium md:text-lg lg:text-2xl xl:text-3xl pb-6 text-right leading-tight">
                        {dua?.dua_arabic}
                      </p>
                    )}
                    {dua?.transliteration_en && (
                      <p className="font-medium md:text-lg pb-6 text-gray-700 italic">
                        Transliteration: {dua?.transliteration_en}
                      </p>
                    )}
                    {dua?.translation_en && (
                      <p className="font-medium md:text-lg pb-6 text-gray-600">
                        Translation: {dua?.translation_en}
                      </p>
                    )}
                    {dua?.bottom_en && (
                      <p className="font-medium md:text-lg pb-6 text-gray-600">
                        {dua?.bottom_en}
                      </p>
                    )}

                    {/* Reference */}
                    <div className="pb-8">
                      <h2 className="font-semibold text-xl text-[#1FA45B]">
                        Reference:
                      </h2>
                      <p className="font-semibold text-xl">
                        {dua?.refference_en}
                      </p>
                    </div>

                    {/* Audio Player */}
                    <div
                      className={`flex items-center flex-wrap space-y-3 ${
                        dua?.audio ? "justify-between" : "justify-end"
                      }`}
                    >
                      {dua?.audio && (
                        <div className="flex items-center">
                          <AudioPlayer src={dua?.audio} />
                        </div>
                      )}

                      {/* Action Icons */}
                      <div className="">
                        <ul className="flex items-center gap-9">
                          <li>
                            <Link href="#">
                              <Image src={copySVG} alt="icon" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <Image src={bookmarkSVG} alt="icon" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <Image src={memorizeSVG} alt="icon" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <Image src={shareSVG} alt="icon" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <Image src={reportSVG} alt="icon" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export async function getStaticProps() {
  const subCategories = await getSubCategories();
  const duas = await getDuas();

  return {
    props: {
      subCategories,
      duas,
    },
  };
}

export default DuaCard;
