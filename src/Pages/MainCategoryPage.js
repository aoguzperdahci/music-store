import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../Resources/Categories';


const MainCategoryPage = () => {

    const { mainCategory } = useParams();
    const [main, setMain] = useState();
    console.log("main: ", mainCategory);

    useEffect(() => {
        let params = mainCategory.split("-");
        for (let i = 0; i < params.length; i++) {
            params[i] = params[i].charAt(0).toUpperCase() + params[i].slice(1);
        }
        setMain(params.join(" "));
    }, [mainCategory]);

    const filterCategories = () => {
        return Categories.find(c => c.name === main)
    }

    return (
        <div>
            {filterCategories().subCategories.map(c => c.name)}
        </div>
    )
}

export default MainCategoryPage
