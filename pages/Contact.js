import {Form,Button,Container,Row,Col,Carousel,Alert,Modal} from 'react-bootstrap';
import Layout from '../components/layout'
import { JumboIndex } from '../components/Jumbo'
import ThomEnggOneMap,{ThomEnggMapComponent} from '../components/ThomEnggMap';
import style from '../styles/Home.module.css'
import NewUser from './new'


// function handleSubmit(){

//     alert("Thank you, We will contact you soon")
// }
   
export default function Contact() {
    return (
        <div>
        
          <Layout>
               
           
                <JumboIndex/>
                <Row>
                    <Col sm={7}>
                        <ThomEnggOneMap/>
                        
                    </Col>
                    <Col sm={5}>
                       <NewUser/>     
                    
                    </Col>
                   
                </Row>
                
            </Layout>
           
                
        </div>
    )
}


