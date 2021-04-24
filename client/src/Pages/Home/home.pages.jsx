import React, { useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { Col, Container, Row, Spinner } from 'react-bootstrap'

import Product from '../../components/Product/product.component'
import "./home.styles.scss"
import { productsFetchAsync } from '../../redux/products/product.actions';
import Loader from '../../components/Spinner/Spinner.component';
import Message from '../../components/Message/Message.component';



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
                <Loader />
                 : error ? 
                 <Message variant='danger'>{error}</Message>
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
