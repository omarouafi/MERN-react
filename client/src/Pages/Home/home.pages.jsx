import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Product from '../../components/Product/product.component'
import products from '../../products'
import "./home.styles.scss"



const Home = () => {
    return (

        
        <main>
        <Container>

            <h1>Latest Products</h1>
            <Row>
                {
                    
                    products.map((el) =>(
                        <Col sm={12} md={6} lg={4} xl={3} >
                            <Product product={el} />
                        </Col>
                        
                        
                        ) )
                    }
            </Row>
            </Container>
        </main>

    )
}

export default Home
