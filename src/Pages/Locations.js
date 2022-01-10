import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LTab from '../Components/LTab';
import Image from 'react-bootstrap/Image'
import logo from "../Resources/images/logo.png"

const Locations = () => {
    return (
        <div>
            <h2 className='container text-md-right mt-5'><Image className='logo' src={logo}></Image>BRANCHES</h2>

            <LTab />

        </div>
    )
}

export default Locations
