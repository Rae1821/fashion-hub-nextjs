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

// const ProductsPage = async ({
//   searchParams,
// }: {
//   searchParams: Promise<{ [key: string]: string | string[] }>;
// }) => {

const ProductsPage = async ({ searchItem }: { searchItem: string }) => {
  // const query = await searchParams;



  const findProducts = async (searchItem: string) => {
      const items = await fetchClothing({ searchItem });
  }

  if(searchItem) {
    findProducts(searchItem);
  }



    return (
      <div className="container">
        {/* <AllProducts searchParams={searchParams} />{" "}
      Pass the searchParams property to the AllProducts component */}
        <div>
          <ProductSearch />
        </div>

        {/* <div className="flex flex-wrap gap-2">
          {items.map((item: any) => (
            <ClothingCard key={item.id} clothing={item} />
          ))}
        </div> */}
      </div>
    );
  }
};

export default ProductsPage;
