import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "../CSS/ProductDetailPage.css";
import Products from '../Resources/Products';
import { Breadcrumb, BreadcrumbItem, Col, Container, Image, Row } from 'react-bootstrap';
import warrantyIcon from "../Resources/images/warranty.png";
import moneyBackIcon from "../Resources/images/money_back.png";
import { FaHome } from "react-icons/fa";

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

        <Container>
            <Row>
                <Col md={12} lg={8} className='border border-top-0 border-secondary'>

                <Breadcrumb className='mt-3 d-lg-none'>
                        <BreadcrumbItem>
                            <Link to="/" className='link'><FaHome size={24}></FaHome></Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <Link to={"/" + product?.mainCategory.replace(" ", "-")} className='link text-capitalize'>{product?.mainCategory}</Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <Link to={"/" + product?.mainCategory.replace(" ", "-") + "/" + product?.subCategory.replace(" ", "-")} className='link text-capitalize'>{product?.subCategory}</Link>
                        </BreadcrumbItem>
                    </Breadcrumb>

                    <Row className='justify-content-center border-bottom border-top border-secondary'>
                        <Image className='img mt-3' src={product?.images[selectedImage]}></Image>
                    </Row>

                    <Row className='align-items-center'>
                        {product?.images.map((image, index) =>
                            <Image className="small img mt-3" key={index} src={image} onClick={() => imageOnClick(index)} />)}
                    </Row>

                </Col>

                <Col md={12} lg={4} className='border border-secondary'>

                    <Breadcrumb className='mt-3 d-none d-lg-block'>
                        <BreadcrumbItem>
                            <Link to="/" className='link'><FaHome size={24}></FaHome></Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <Link to={"/" + product?.mainCategory.replace(" ", "-")} className='link text-capitalize'>{product?.mainCategory}</Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <Link to={"/" + product?.mainCategory.replace(" ", "-") + "/" + product?.subCategory.replace(" ", "-")} className='link text-capitalize'>{product?.subCategory}</Link>
                        </BreadcrumbItem>
                    </Breadcrumb>


                    <p className='fs-2 mb-1 mt-3 mt-lg-0'>{product?.name}</p>
                    <p className='fs-6 item-number'>Product code:{product?.id}</p>
                    <p className='fs-3 text-center'>{product?.price}$</p>

                    <div className='badge-item mt-4'>
                        <Image className='img-badge mx-1' alt='warranty' src={warrantyIcon}></Image>
                        <span>3-year warranty</span>
                    </div>

                    <div className='badge-item mt-3 mb-3'>
                        <Image className='img-badge mx-1' alt='money back guarantee' src={moneyBackIcon}></Image>
                        <span>30-day money back guarantee</span>
                    </div>

                </Col>

            </Row>

            <Row className='pt-4 pb-2 border border-dark'>

                <div>
                <p className='fs-2 mb-1'>Specifications</p>
                <ul className=''>
                    {product?.description.map((d, i) =>
                        <li key={i} className='fs-4'>{d}</li>)}
                </ul>
                    
                </div>

            </Row>

        </Container>
    )
}

export default ProductDetailPage
