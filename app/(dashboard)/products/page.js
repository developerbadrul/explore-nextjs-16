import { getAllProduct } from "@/util/productsData";
import Link from "next/link";

const SearchProductPage = async ({ searchParams }) => {
    const { searchTerm } = await searchParams

    const products = getAllProduct();

    const filteredProducts = (searchTerm && searchTerm.trim() !== "")
        ? products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())) : products

    // console.log("filteredProducts", filteredProducts);


    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">
                {searchTerm
                    ? `Search Result for: ${searchTerm}`
                    : "All Products"}
            </h1>

            {filteredProducts.length === 0 ? (
                <p>No products found.</p>
            ) : (

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    // Solution: Use the Link as the container and ensure it behaves like a block
                    {filteredProducts.map((p) => (
                        <Link
                            key={p.id}
                            href={`/products/product/${p.id}`}
                            className="block w-full" // Make the link fill the grid cell
                        >
                            <div className="card bg-base-100 shadow-sm hover:shadow-lg transition-shadow">
                                <div className="card-body">
                                    <h2 className="card-title">{p.name}</h2>
                                    <p>Price: ${p.price}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
};

export default SearchProductPage;