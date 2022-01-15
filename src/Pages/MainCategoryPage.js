import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import SubCategoryItem from '../Components/SubCategoryItem';
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
        <div className='min-page-height'>
            <p className='fs-2 text-capitalize text-center mt-4 mb-4'>{category?.name}</p>
            <Row className='d-flex justify-content-start mb-4 me-0'>
                {category?.subCategories.map(c =>
                    <Col xs={12} md={12} lg={6} xxl={4} className='d-flex justify-content-center mb-3'>
                        <SubCategoryItem category={c} mainCategory={category.name}></SubCategoryItem>
                    </Col>
                )}</Row>
        </div>
    )
}

export default MainCategoryPage
