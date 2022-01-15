import React from 'react'
import { Col, Row } from 'react-bootstrap';
import BCarousel from '../Components/BCarousel';
import ProductItem from "../Components/ProductItem";
import Products from '../Resources/Products';
import Categories from '../Resources/Categories';
import SubCategoryItem from '../Components/SubCategoryItem';

const MainPage = () => {
    return (
        <div>
            <BCarousel/> 
            <h3 className='text-center'>Product Highlights</h3>
            <Row className='d-flex justify-content-start mb-4 me-0'>
                {Products.map(p =>
                    p.popular &&
                    <Col xs={6} md={4} lg={3} xxl={2} className='d-flex justify-content-center mb-3'>
                        <ProductItem product={p}></ProductItem>
                    </Col>
                )}
            </Row>

            <h2 className='text-center'>Most Popular Categories</h2>
            <Row className='d-flex justify-content-start mb-4 me-0'>
                {Categories.map(c => c.subCategories.map(s =>
                    s.popular &&
                    <Col xs={12} md={12} lg={6} xxl={4} className='d-flex justify-content-center mb-3'>
                        <SubCategoryItem category={s} mainCategory={c.name}></SubCategoryItem>
                    </Col>
                ))}</Row>
        </div>
    )
}

export default MainPage
