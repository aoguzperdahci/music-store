import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/ProductDetailPage.css";
import Products from '../Resources/Products';
import { Breadcrumb, BreadcrumbItem, Col, Container, Image, Row } from 'react-bootstrap';

const ProductDetailPage = () => {

    const { id } = useParams();
    const [product, setProduct] = useState();
    const [selectedImage, setSelectedImage] = useState(0)

    useEffect(() => {
        let p = Products.find(p => p.id == id);
        //NotFound check
        setProduct(p);

    }, [id]);

    const imageOnClick = index => {
        setSelectedImage(index);
    }

    return (
        <div>
            <Container className='blue'>
                <Row>

                    <Col md={12} lg={8}>
                        <Row className='justify-content-center'>
                            <Image className='img margin-top' style={{ backgroundColor: "yellow" }} src={product?.images[selectedImage]}></Image>
                        </Row>

                        <Row className='align-items-center'>
                            {product?.images.map((image, index) =>
                                <Image className="small img margin-top" key={index} src={image} onClick={() => imageOnClick(index)} />)}
                        </Row>

                    </Col>

                    <Col md={12} lg={4} style={{ backgroundColor: "red" }}>

                        <Breadcrumb className='margin-top'>
                            <BreadcrumbItem> 
                                <Link to="/" className='link'><span style={{fontSize: 25}} class="material-icons">home</span></Link>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                            <Link to={"/" + product?.mainCategory.replace(" ", "-")} className='link text-capitalize'>{product?.mainCategory}</Link>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                            <Link to={"/" + product?.mainCategory.replace(" ", "-") + "/" + product?.subCategory.replace(" ", "-")} className='link text-capitalize'>{product?.subCategory}</Link>
                            </BreadcrumbItem>
                        </Breadcrumb>

                        <p className='fs-2'>{product?.name}</p>
                        <p className='fs-3'>{product?.price}$</p>
                    </Col>

                </Row>

                <Row style={{marginTop: 30}}>

                    <p className='fs-2'>Specifications:</p>
                    {product?.description.map((d, i) => 
                    <p key={i} className='fs-4'>{d}</p>)}
                </Row>

            </Container>
        </div>
    )
}

export default ProductDetailPage
