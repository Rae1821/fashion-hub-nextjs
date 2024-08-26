import AllProducts from "@/components/AllProducts";

export default async function ProductsPage() {
  const searchParams = {}; // Add the required searchParams property here

  return (
    <div className="container">
      <AllProducts searchParams={searchParams} />{" "}
      {/* Pass the searchParams property to the AllProducts component */}
    </div>
  );
}
