import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../CSS/productItem.css";

const ProductItem = ({ product }) => {

    const navigate = useNavigate();

    return (
        <Card className='product-card text-center product-link' onClick={() => navigate("/products/" + product.id)}>
            <Card.Img variant="top" className='product-img' src={product.images[0]} />

            <Card.Title className='fs-5 text-start product-title'>{product.name}</Card.Title>
            <div className='product-price-div'>
                <Card.Text className='fs-3 product-price'>

                    {product.price}$
                </Card.Text>
            </div>

        </Card>
    )
}

export default ProductItem
