import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import "../CSS/subCategoryItem.css";
import Categories from '../Resources/Categories';
import { Link } from 'react-router-dom';


const SubCategoryItem = ({ category, mainCategory }) => {
    return (

        <Card className='category-card'>
            <Link to={"/" + mainCategory.replace(" ", "-") + "/" + category.name.replace(" ", "-")} className='category-link'>
        <Row>
            <Col className='category-col'>
                <div className='category-div'></div>
                <Card.Img className='category-image text-center' src={category.image} />

            </Col>

            <Col>
                <Card.Body className='text-center'>
                
                    <Card.Title className='fs-4 text-capitalize category-text'>{category.name}</Card.Title>
                </Card.Body>
            </Col>
        </Row>
        </Link>
    </Card>

    )
}

export default SubCategoryItem