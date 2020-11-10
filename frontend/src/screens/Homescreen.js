import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Product from '../components/Product'
import products from '../product'
const Homescreen = () => {
    return (
        <>
        <h1>Latest Cars</h1>
        <Row>
            {products.map(product =>(
                <Col key={product._id }sm={12} md={6} lg={4}xd={3}>  
                {/* <h4>{product.name}</h4>
                 */}
             <Product product={product}/>
                </Col>
            ))}
        </Row>
        </>
    )
}

export default Homescreen
