"use client"

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";


const SearchInput = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const handleChange = (e) => {
        const value = e.target.value;

        const params = new URLSearchParams(searchParams);

        if (value) {
            params.set("searchTerm", value)
        } else {
            params.delete("searchTerm")
        }

        router.replace(`/products?${params.toString()}`)

    }


    return (
        <input
            type="text"
            placeholder="Search Product"
            onChange={handleChange}
            defaultValue={searchParams.get("searchTerm") || ""}
            className="border p-2"
        />
    );
};

export default SearchInput;