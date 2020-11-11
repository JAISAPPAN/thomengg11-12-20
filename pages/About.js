
import Header from './Header'
import {Container,Row,Col,Badge,Button, Jumbotron} from 'react-bootstrap'

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
            
            <Container className={style.container}>
                    <Row id="abtfstrow">
                        <Col sm={6}><h1 id="abtheading">Corporate Leadership</h1> </Col>
                        <Col sm={6}> <h1 id="abtheading" >Our Major Clients</h1> </Col>
                        
                    </Row>
            
                <Row>
                  <Col sm={6}>
                            

                            <div id="corleadership">
                            <h4>Siby Thomas, <strong>CEO.</strong></h4> 
                            <h4>XXXX Thomas, <strong>Finance Director.</strong></h4> 
                            <h4>YYYY Thomas, <strong>Sales Director.</strong></h4> 
                            <h4>ZZZZ Thomas, <strong>General Manager.</strong></h4><br></br> 
                            </div>
                            <div>
                            {
                                JobsDone.map(job=>(
                                    <ol><Button id="abt" variant="primary"><Badge variant="light" >{job.name}</Badge></Button></ol> 
                                ))
                            }
                            </div> 
                        </Col>
                <Col sm={6}>
                           
                            
                    <ul>
                       
                       {
                           MajorClients.map(client=>(
                               <ol><Button id="abt" variant="primary"><Badge variant="light" >{client.name}</Badge></Button></ol>
                           ))
                       } 
                               
                        
                        
                        
                        
                    </ul>
                    </Col>
                    
                </Row>
               
            </Container>
            </div>
            
            <Footer/>
            
        </div>
    )
}


