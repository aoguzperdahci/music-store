import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../Resources/Categories';


const MainCategoryPage = () => {

    const { mainCategory } = useParams();
    const [category, setCategory] = useState();
    console.log("main: ", mainCategory);

    useEffect(() => {
        let main = mainCategory.replace("-", " ");
        let c = Categories.find(c => c.name === main);
        //NotFound check
        setCategory(c);
    }, [mainCategory]);


    return (
        <div>
            {category?.subCategories.map(c => c.name)}
        </div>
    )
}

export default MainCategoryPage
