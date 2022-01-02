import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Products from '../Resources/Products';


const SubCategoryPage = () => {

    const { mainCategory, subCategory } = useParams();
    const [main, setMain] = useState();
    const [sub, setSub] = useState();
    console.log("main: ", mainCategory);
    console.log("sub: ", subCategory);
    console.log(Products)

    useEffect(() => {
        let mainParams = mainCategory.split("-");
        for (let i = 0; i < mainParams.length; i++) {
            mainParams[i] = mainParams[i].charAt(0).toUpperCase() + mainParams[i].slice(1);
        }
        setMain(mainParams.join(" "));

        let subParams = subCategory.split("-");
        for (let i = 0; i < subParams.length; i++) {
            subParams[i] = subParams[i].charAt(0).toUpperCase() + subParams[i].slice(1);
        }
        setSub(subParams.join(" "));

    }, [mainCategory, subCategory]);

    const filterProducts = () => {
        return Products.filter(p => p.mainCategory === main && p.subCategory === sub);
    }

    return (
        <div>
            {filterProducts().map(p => p.name)}
        </div>
    )
}

export default SubCategoryPage
