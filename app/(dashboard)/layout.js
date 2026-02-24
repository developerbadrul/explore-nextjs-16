import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SearchInput from "@/components/SearchInput";
import { getAllProduct } from "@/util/productsData";
import Link from "next/link";

export default function DashboardLayout({ children }) {
    const myProducts = getAllProduct()
    return (
        <>
            <Navbar />
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {children}
                    <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <SearchInput />
                        <p>Products name:-</p>
                        {
                            myProducts.map(p => (<li key={p.id}><Link href={`/products/product/${p.id}`}>{p.name}</Link></li>))
                        }
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}


