import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Products from '../Resources/Products';


const SubCategoryPage = () => {

    const { mainCategory, subCategory } = useParams();
    const [product, setProduct] = useState();
    console.log("main: ", mainCategory);
    console.log("sub: ", subCategory);

    useEffect(() => {
        let main = mainCategory.replace("-", " ");
        let sub = subCategory.replace("-", " ");
        let p = Products.filter(p => p.mainCategory === main && p.subCategory === sub);
        //NotFound check
        setProduct(p);
    }, [mainCategory, subCategory]);

    return (
        <div>
            {product?.map(p => p.name)}
        </div>
    )
}

export default SubCategoryPage
