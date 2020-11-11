import React from 'react'
import {Jumbotron,Row,Col } from 'react-bootstrap'
import Link from 'next/link'

export default function Jumbo_Ajmera() {
    return (
        <div>
        
        
        <Jumbotron>
               
        <Row className="jumbo_ajmera">
                    <Col sm={{ span: 10, offset: 1 }}>
                    
                        <Link href="Contact"><button>Marine Switch Gears</button></Link>
                        <Link href=""><button>Marine Light Fittings</button></Link>
                        <Link href=""><button>Navigation Lights</button></Link>
                        <Link href=""><button>Marine Hand Lamps</button></Link>
                        <Link href=""><button>Marine Junction Box</button></Link>
                        <Link href=""><button>Marine/Security Search Light</button></Link>          
                         
                                      
                       
                     </Col>
                </Row>

            </Jumbotron>

        </div>)}

// <Row><Button size="lg" block ><strong>AJMERA BRANDED</strong> - MARINE NAVIGATION LIGHTS</Button></Row>