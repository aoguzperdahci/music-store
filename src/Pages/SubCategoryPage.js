import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Products from '../Resources/Products';
import ProductItem from '../Components/ProductItem';

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
        <div className='min-page-height'>
            <p className='fs-2 text-capitalize text-center mt-4 mb-4'>{subCategory.replace("-", " ")}</p>
            <Row className='d-flex justify-content-start mb-4 me-0'>
                {product?.map(p =>
                    <Col xs={6} md={4} lg={3} xxl={2} className='d-flex justify-content-center mb-3'>
                        <ProductItem product={p}></ProductItem>
                    </Col>
                )}
            </Row>
        </div>
    )
}

export default SubCategoryPage
