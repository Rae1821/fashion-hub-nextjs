import ClothingCard from "@/components/ClothingCard";
import ProductSearch from "@/components/ProductSearch";
import { fetchClothing } from "@/utils/helper";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: any;
}) {
  const allClothingProducts = await fetchClothing(searchParams);

  console.log(allClothingProducts);

  const isDataEmpty =
    !Array.isArray(allClothingProducts) ||
    allClothingProducts.length < 1 ||
    !allClothingProducts;

  return (
    <div className="px-2">
      <div className="mx-auto mt-12 w-full md:w-1/2">
        <ProductSearch />
      </div>
      <div>
        {!isDataEmpty ? (
          <section>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:flex-row">
              {allClothingProducts?.map((product) => (
                <ClothingCard key={product} clothing={product} />
              ))}
            </div>
          </section>
        ) : (
          <div>
            <h2>Oops, no results</h2>
            <p>{allClothingProducts?.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
