
import { Button, Row, Col, Image, Card } from 'react-bootstrap'
import Link from 'next/link'

export default function Wiresandcables()
{
    return (
        <div id="wiresandcables_margin">
            

            <div className="headerbottom">
                
            </div>
            
            <Row>
                <Col sm={{ span: 4 }}>
                    <p> We provide all type of Wires &Cables from approved Indianmanufactures for local
                and International customers who are maintain latest standards, Quality and Certification.</p>

                </Col>

                <Col sm={{ span: 8 }}>
                    <ul>
                        <li>INDUSTRIAL AND RESIDENCE WIRES &CABLE:  ISI / IEC / EN Standards.</li>
                        <li>POWER & CONTROL CABLE:ISI / IEC / EN Standards.</li>
                        <li>INSTRUMENT, COMMUNICATION, DATA CABLE:  ISI / IEC / EN Standards.</li>
                        <li>FIBER OPTIC CABLE:ISI / IEC / EN Standards.</li>
                        <li>MARINE &OFFSHORE CABLE: IEC 60092-350,353,354,376 series</li>
                        <li>FLAME RETARDANCE: IEC 60332 series</li>
                        <li>FIRE RESISATNCE: IEC 60331 series</li>
                        <li>HALOGEN FREE: IEC 60754 series</li>
                        <li>LOW SMOKE EMISSION: IEC 61034 series</li>
                        <li>TEST STANDARDS: IEC 60092-353,354,376 Series</li>

                    </ul>

                </Col>


            </Row>
            
        </div>
    )
}

export const Wirespics = [
    {
        url: 'Wires_and_ Cables/1.jpeg',
        name:'NAME?'
    },
    {
        url: 'Wires_and_ Cables/2.jpg',
        name: 'NAME?'
    },
    {
        url: 'Wires_and_ Cables/3.jpeg',
        name: 'NAME?'
    },
    {
        url: 'Wires_and_ Cables/4.jpeg',
        name: 'NAME?'
    },
    {
        url: 'Wires_and_ Cables/5.jpeg',
        name: 'NAME?'
    },
    {
        url: 'Wires_and_ Cables/6.jpg',
        name: 'NAME?'
    },
    {
        url: 'Wires_and_ Cables/7.jpg',
        name: 'NAME?'
    },
    {
        url: 'Wires_and_ Cables/8.jpg',
        name: 'NAME?'
    },
    {
        url: 'Wires_and_ Cables/9.jpg',
        name: 'NAME?'
    },
    {
        url: 'Wires_and_ Cables/10.jpg',
        name: 'NAME?'
    },
    {
        url: 'Wires_and_ Cables/11.jpg',
        name: 'NAME?'
    },
    {
        url: 'Wires_and_ Cables/12.jpg',
        name: 'NAME?'
    },
    {
        url: 'Wires_and_ Cables/13.jpg',
        name: 'NAME?'
    },
    {
        url: 'Wires_and_ Cables/14.jpg',
        name: 'NAME?'
    },
    {
        url: 'Wires_and_ Cables/15.jpg',
        name: 'NAME?'
    }
]



export function WiresandcablesPic()
{
    return (
        <div>
            <Row><Button id="pdt_main_hdg" variant="primary" size="lg" block>WIRES & CABLES - MARINE,OFFSHORE,INDUSTRIAL & RESIDENCE APPLICATIONS.</Button></Row>
            <Row>
                {
                    Wirespics.map(wire => (

                        <Card style={{ width: '21rem' }}>
                            <Image className="mctimg" src={wire.url} rounded />
                            <Row>
                                <Card.Text><Button size="sm" className="btn-dark ml-5 mt-2">{wire.name}</Button></Card.Text>
                                <Card.Text><Link href="/productEnquiryPage"><Button size="sm" className="btn-success ml-5 mt-2">ENQUIRE</Button></Link></Card.Text>
                            </Row>
                        </Card>

                    ))
                }
            </Row>
        </div>
    )
}

// <Row className="wiresandcable_img">
//     <Col xs={6} md={4}>
//         <Image src="/Wires_and_ Cables/1.jpeg" rounded />
//         <Image src="/Wires_and_ Cables/2.jpg" rounded />
//         <Image src="/Wires_and_ Cables/3.jpeg" rounded />
//         <Image src="/Wires_and_ Cables/4.jpeg" rounded />
//         <Image src="/Wires_and_ Cables/5.jpeg" rounded />
//         <Image src="/Wires_and_ Cables/6.jpg" rounded />
//         <Image src="/Wires_and_ Cables/7.jpg" rounded />
//         <Image src="/Wires_and_ Cables/8.jpg" rounded />
//         <Image src="/Wires_and_ Cables/9.jpg" rounded />
//         <Image src="/Wires_and_ Cables/10.jpg" rounded />
//         <Image src="/Wires_and_ Cables/11.jpg" rounded />
//         <Image src="/Wires_and_ Cables/12.jpg" rounded />
//         <Image src="/Wires_and_ Cables/13.jpg" rounded />
//         <Image src="/Wires_and_ Cables/14.jpg" rounded />
//         <Image src="/Wires_and_ Cables/15.jpg" rounded />
//     </Col>

// </Row>