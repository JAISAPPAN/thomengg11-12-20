import {Form,Button,Container,Row,Col,Carousel,Alert} from 'react-bootstrap';
import Header from './Header';
import {JumboAbout} from '../components/Jumbo'
import Footer from './Footer'
import ThomEnggOneMap, { ThomEnggMapComponent} from '../components/ThomEnggMap';
import style from '../styles/Home.module.css'

// function handleClick(){
//     [
//         'primary'
        
//     ].map((variant, idx) => (
//         <Alert key={idx} variant={variant}>
//             This is a {variant} alert—check it out!
//         </Alert>
//     ));
// }


export default function Contact() {
    return (
        <div>
        <Header/>
        
            <JumboAbout className={style.jumboAbout} />   
            <div >
                <Button id="contact_h1" size="lg" block>Contact US</Button>
           
            
            <Container>
                <Row>
                    <Col sm={7}>
                        <ThomEnggOneMap/>
                        
                    </Col>
                    <Col sm={5}>
                            <Form >
                                <Form.Group  controlId="formBasicFname">
                                    <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name" />
                            </Form.Group>

                                <Form.Group  controlId="formBasicLname">
                                    <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPhNumber">
                                    <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="Phone Number" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                            </Form.Text>
                            </Form.Group>
                                <Form.Group>
                                    <Form.Label>Prefered Way To Contact You</Form.Label>
                                    <Form.Control as="select">
                                       
                                        <option>Tele Phone</option>
                                        <option>Email</option>
                                    </Form.Control>
                                    
                                </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Details About Your Enquiry</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                        </Button>
                        </Form>
                    
                    </Col>
                   
                </Row>
                
            </Container>
            </div>
            
            <Footer/>
                
        </div>
    )
}


