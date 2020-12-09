
import { Button, Row, Col, Image, Card } from 'react-bootstrap'

export default function Wiresandcables()
{
    return (
        <div id="wiresandcables_margin">
            

            <div className="headerbottom">
                
            </div>
            <Row><Button id="pdt_main_hdg" variant="primary" size="lg" block>WIRES & CABLES - MARINE,OFFSHORE,INDUSTRIAL & RESIDENCE APPLICATIONS.</Button></Row>
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
        url: 'Wires_and_ Cables/1.jpeg'
    },
    {
        url: 'Wires_and_ Cables/2.jpg'
    },
    {
        url: 'Wires_and_ Cables/3.jpeg'
    },
    {
        url: 'Wires_and_ Cables/4.jpeg'
    },
    {
        url: 'Wires_and_ Cables/5.jpeg'
    },
    {
        url: 'Wires_and_ Cables/6.jpg'
    },
    {
        url: 'Wires_and_ Cables/7.jpg'
    },
    {
        url: 'Wires_and_ Cables/8.jpg'
    },
    {
        url: 'Wires_and_ Cables/9.jpg'
    },
    {
        url: 'Wires_and_ Cables/10.jpg'
    },
    {
        url: 'Wires_and_ Cables/11.jpeg'
    },
    {
        url: 'Wires_and_ Cables/12.jpg'
    },
    {
        url: 'Wires_and_ Cables/13.jpg'
    },
    {
        url: 'Wires_and_ Cables/14.jpg'
    },
    {
        url: 'Wires_and_ Cables/15.jpg'
    }
]



export function WiresandcablesPic()
{
    return (
        <div wiresandcables_margin>
        <Row>
            {
                Wirespics.map(pic =>
                (
                    <Card>
                            <Card.Img id="wiresandcables_img" src={pic.url} />
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