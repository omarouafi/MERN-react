import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux";
import { Col, Row,Image, ListGroup,Card, Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../../components/Rating/rating.component'
import './product.styles.scss'
import { fetchProdDetail } from '../../redux/product_detail/p_detail.actions';
import Loader from '../../components/Spinner/Spinner.component';
import Message from '../../components/Message/Message.component';


const ProductPage = ({match}) =>{
    
    const dispatch = useDispatch();
    const {product,loading,error} = useSelector(state => state.productDetail);

    
    useEffect(() => {
        dispatch(fetchProdDetail(match.params.id));
    }, [dispatch,match.params.id])
    
    
    return (
        <div className="">
            <Link to='/' className="btn btn-light my-3">
                Go back
            </Link>
            {
                loading? <Loader />:error? <Message variant="danger">{error}</Message>:
            
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                   <ListGroup variant='flush'> 
                       <ListGroup.Item>
                           <h3>
                           {product.name}
                           </h3>
                       </ListGroup.Item>
                       <ListGroup.Item>
                           <Rating value={product.rating} text={` ${product.numReviews} reviews`} />
                       </ListGroup.Item>
                       <ListGroup.Item>
                            Price:${product.price}
                       </ListGroup.Item>
                       <ListGroup.Item>
                            Description:\n{product.description}
                       </ListGroup.Item>
                   </ListGroup> 
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                <strong>

                                    ${product.price}
                                </strong>
                                </Col>
                            </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    {product.countInStock > 0? 'In Stock':'out of stock'}
                                </Col>
                            </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                            <Row>
                                <Button disabled={product.countInStock===0} className="btn-block" type="btn" >Add To Cart</Button>
                            </Row>
                            </ListGroup.Item>
                        </ListGroup>                   
                    </Card>                   
                </Col>
            </Row>
            }
        </div>        
    )
}

export default ProductPage
