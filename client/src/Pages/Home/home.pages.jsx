import React, { useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { Col, Container, Row } from 'react-bootstrap'

import Product from '../../components/Product/product.component'
import "./home.styles.scss"
import { productsFetchAsync } from '../../redux/products/product.actions';



const Home = () => {
    
    const dispatch = useDispatch();
    const productsList = useSelector(state => state.productRed);
    const {loading,error,products} = productsList
    useEffect(()=>{
        dispatch(productsFetchAsync())
    },[dispatch])

    return (

        
        <main>
        <Container>

            {
                loading ?
                 <h2>Loading</h2>
                 : error ? 
                 <h2>{error}</h2>
                 :
                 <>
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
            </>
            }
            </Container>
        </main>

    )
}

export default Home
