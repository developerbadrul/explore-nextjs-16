import { findProduct } from "@/util/productsData";

const SingleProductPage = async ({ params }) => {

    const resolvedValue = await params;


    const productId = Number(resolvedValue.productId);

    const singleProduct = findProduct(productId);



    const { name, category, price, stock, createdAt } = singleProduct || {};

    if (!singleProduct) {
        return <div>Product not found!</div>;
    }

    return (
        <div className="p-6 border rounded-lg shadow-md">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-green-600 font-semibold">Price: ${price}</p>
            <p>Category: {category}</p>
            <p>Stock: {stock > 0 ? stock : "Out of stock"}</p>

            <p className="text-gray-500 text-sm mt-4">
                Product Entry Date: {dateFormatter.format(new Date(createdAt))}
            </p>
        </div>
    );
};

export default SingleProductPage;



const dateFormatter = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
});

