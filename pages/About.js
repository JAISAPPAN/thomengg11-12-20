
import Header from './Header'
import {Container,Row,Col,Badge,Button, Jumbotron,Card} from 'react-bootstrap'

import { MajorClients } from '../components/MajorClients'

import { JobsDone } from '../components/JobsDone'
import Footer from './Footer'
import { JumboAbout } from '../components/Jumbo'
import style from '../styles/Home.module.css'

export default function About() {
    return (
        <div>
        <Header/>
        <JumboAbout/>
        
            
        <div>          
           
                    <Row className="mb-5">
                       
                        <Button size="lg" block>JOBS DONE</Button>
                        
                    </Row>
            
                <Row>
                  <Col sm={6}>
                            
                    <Row className="mr-2 mb-2 " ><Button size="lg" block>Oil and Gas Sector</Button></Row>
                        <ul> <Card>
                            {
                               
                                JobsDone.map(job=>(
                                    <li><h4>{job.name}</h4></li>
                                ))
                            }
                        </Card>

                        </ul>
                        </Col>
                    <Col sm={6}>
                           
                        <Row className="mr-2 mb-2 "><Button size="lg" block>Marine Sector</Button></Row>      
                   
                      <ul>
                      <Card>
                       {
                           MajorClients.map(client=>(
                               <li><h4>{client.name}</h4></li>
                           ))
                       } 
                            </Card>
                        </ul>
                       
                    </Col>

                </Row>


            </div>

            <Footer />

        </div>                      
                        
                        
                        
                   
    )
}


