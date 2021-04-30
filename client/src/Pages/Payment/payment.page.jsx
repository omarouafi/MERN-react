import React,{useState,useEffect} from 'react'
import { Form,Row,Col,Button } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { loginAction, registerAction } from '../../redux/user/user.action'
import Message from '../../components/Message/Message.component'
import Loader from '../../components/Spinner/Spinner.component'
import FormContainer from '../../components/FormContainer/form.container'
import { saveShippingAction,savePaymentAction } from '../../redux/cart/cart.actions'
import CheckoutSteps from '../../components/CheckoutProcess/check.component'

function Payment({history,location}) {



    
    const savedAddress = useSelector(state => state.cart.shippingAddress)

    const [paymentMethod,setPaymentMethod] = useState('Paypal')
    
    const dispatch = useDispatch();

    useEffect(() => {
        
    })


    const toPlaceOrder = (e) => {
       e.preventDefault();
       dispatch(savePaymentAction(paymentMethod))
       history.push('/placeorder')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3 />
            <h1>Payment</h1>
            
            <Form onSubmit={toPlaceOrder}>
                <Form.Group controlId="address">
                    <Form.Label>
                        Select Method
                    </Form.Label>

                    <Col>
                        <Form.Check type="radio" label="Paypal or Credit Card" id="PayPal" name="paymentMethod"
                            value="PayPal" checked onChange={(e) => setPaymentMethod(e.target.value) }
                        />
                            
                        
                    </Col>

                </Form.Group>
              
                <Button type="submit" variant="primary">
                    Continue
                </Button>
           


            </Form>
            

        </FormContainer>
    )
}

export default Payment
