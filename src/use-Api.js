import { useEffect, useState} from "react";

export const useApi = () => {
    const [products, setProducts] = useState(null);
    const getProductdata = async () => {
        const apiD = await fetch ("https://www.increasingly.co/Clients/Interview/products.json")
        if(apiD.ok){
            const response = await apiD.json();
            setProducts(response)
        }
    };
    useEffect (() => {
        getProductdata()
    },[]);
    return {products};
};
