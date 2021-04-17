import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import Product from '../../components/Product/product.component'
import "./home.styles.scss"



const Home = () => {
    
    const [products,setProducts] = useState([]);
    
    const fetchProducts = async () => {
        const {data} = await axios.get('/api/products')
        setProducts(data)
    }
    useEffect(()=>{
        fetchProducts()
    },[products])

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
