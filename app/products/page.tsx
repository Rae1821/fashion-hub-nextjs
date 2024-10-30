// import AllProducts from "@/components/AllProducts";
import ClothingCard from "@/components/ClothingCard";
import ProductSearch from "@/components/ProductSearch";
import { fetchClothing } from "@/utils/helper";

// export async function getServerSideProps(context: any) {
//   const { searchParams } = context.query;
//   const data = await fetchClothing(searchParams);

//   return {
//     props: {
//       data,
//       searchParams,
//     },
//   };
// }

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] }>;
}) => {
  const query = await searchParams;
  const items = await fetchClothing(query);

  return (
    <div className="container">
      {/* <AllProducts searchParams={searchParams} />{" "}
      Pass the searchParams property to the AllProducts component */}
      <div>
        <ProductSearch />
      </div>

      <div>
        {items.map((item: any) => (
          <ClothingCard key={item.id} clothing={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
