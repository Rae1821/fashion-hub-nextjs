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
    <div className="container">
      <div className="mt-8 w-full mx-auto">
        <h2 className="text-2xl font-semibold tracking-tight text-center">
          Product Search
        </h2>
        <p className="text-sm text-center">
          Search products based on your body shape and fashion style
        </p>
      </div>
      <div className="mx-auto mt-12 w-full md:w-1/2">
        <ProductSearch />
      </div>
      <div className="mx-auto mt-4 w-full md:w-1/2">
        <p className="font-semibold pb-2">Not sure what to search for?</p>
        <p>
          Try this search formula: Best (Fashion Style) + (Clothing item) for
          (Body shape)
        </p>
        <p className="italic text-sm">i.e Best Edgy Tops for Pear Body Shape</p>
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
