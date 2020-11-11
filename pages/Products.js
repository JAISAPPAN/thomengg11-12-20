import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Accordion,Card,Button} from 'react-bootstrap'
import { Pdts } from '../components/Products'

export default function Products() {
    return (
        <div>
            <Header/>
            <h1>Pdts Page</h1>
            <div>
            
                <Accordion defaultActiveKey="0">

                    {
                        Pdts.map(product => (

                            <Card>

                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        {product.name}
                        </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>{product.desc}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        ))

                    }

                   
                    
                </Accordion>

            </div>
            <Footer/>
        </div>
    )
}
