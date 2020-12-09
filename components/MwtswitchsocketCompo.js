import {Row, Col, Card, Table,Image, Button } from "react-bootstrap"
import Link from 'next/link'

const Mwtswitchsocket = [
    {
        id: '401',
        CatalogNumber: '2611 N/SS',
        url: '/mwtswitchsocket/401.png',
        Specification: '10A. 230V. 3 pin Nylon body socket with porcelain insertion with Brass terminals and 10A. 230V. double pole rotary switch with nylon knob for On/Off. 2 nos. Cable entries with Plastic cable glands. Plastic/Metallic cap with chain for socket when not in use. SS Hardware.'
    },
    {
        id: '402',
        CatalogNumber: '2611/SS',
        url: '/mwtswitchsocket/402.png',
        Specification: '10A. 230V. 3 pin Aluminium body socket with porcelain insertion with Brass terminals and 10A. 230V. double pole rotary switch with nylon knob for On/Off. 2 nos. Cable entries with Plastic cable glands. Plastic/Metallic cap with chain for socket when not in use. SS Hardware.'
    },
    {
        id: '403',
        CatalogNumber: '2533/SS',
        url: '/mwtswitchsocket/403.png',
        Specification: '10A. 230V. 3 pin Aluminium body socket with porcelain insertion with Brass terminals and 10A. 230V. double pole rotary switch with nylon knob for On/Off. 2 nos. Cable entries with Plastic cable glands. Plastic/Metallic cap with chain for socket when not in use. Brass.'

    },
    {
        id: '404',
        CatalogNumber: '2614/SS',
        url: '/mwtswitchsocket/404.jpg',
        Specification: 'Same as per 2611/SS - suitable for 15A. 230V. with bakelite socket insertion.'
    },
]

const MwtswitchsocketTbl = [
    {
        id: '401',
        CatalogNumber: '2611 N/SS',
       
        Specification: '10A. 230V. 3 pin Nylon body socket with porcelain insertion with Brass terminals and 10A. 230V. double pole rotary switch with nylon knob for On/Off. 2 nos. Cable entries with Plastic cable glands. Plastic/Metallic cap with chain for socket when not in use. SS Hardware.'
    },
    {
        id: '402',
        CatalogNumber: '2611/SS',
       
        Specification: '10A. 230V. 3 pin Aluminium body socket with porcelain insertion with Brass terminals and 10A. 230V. double pole rotary switch with nylon knob for On/Off. 2 nos. Cable entries with Plastic cable glands. Plastic/Metallic cap with chain for socket when not in use. SS Hardware.'
    },
    {
        id: '403',
        CatalogNumber: '2533/SS',
       
        Specification: '10A. 230V. 3 pin Aluminium body socket with porcelain insertion with Brass terminals and 10A. 230V. double pole rotary switch with nylon knob for On/Off. 2 nos. Cable entries with Plastic cable glands. Plastic/Metallic cap with chain for socket when not in use. Brass.'

    },
    {
        id: '404',
        CatalogNumber: '2614/SS',
       
        Specification: 'Same as per 2611/SS - suitable for 15A. 230V. with bakelite socket insertion.'
    },
    
    {
        id: '405',
        CatalogNumber: '2536/SS',

        Specification: 'Same as per 2614/SS - with cast Brass body.'
    },
    {
        id: '406',
        CatalogNumber: '2623 N/SS',

        Specification: '10A. 230V. 3 pin Nylon body socket with porcelain insertion with Brass terminals and 10A. 230V. double pole rotary switch with nylon knob for On/Off. 2 nos. Cable entries with Plastic cable glands. Plastic/Metallic cap with chain for socket when not in use. SS Hardware'
    },
    {
        id: '407',
        CatalogNumber: '2619/SS',

        Specification: '30A, 415V. 4 pin (3pin & E) cast Aluminium body socket with porcelain insertion and suitable T.P. Rotary switch. 2 nos. cable entries with brass cable glands. Aluminium/Plastic cap with chain for socket when not in use. SS hardware. Switch-socket available with cast Aluminium 4 pin suitable plug top.'
    },
    {
        id: '408',
        CatalogNumber: '2519/SS',

        Specification: '30A, 415V. 4 pin (3pin & E) cast Brass body socket with porcelain insertion and suitable T.P. Rotary switch. 2 nos. cable entries with brass cable glands. Aluminium/Plastic cap with chain for socket when not in use. SS hardware. Switch-socket available with cast Brass 4 pin suitable plug top.'
    },
]

export default function MwtswitchsocketPdts()
{
    return (
        <div>
           
                <Row><Button size="lg" block>MARINE WATER TIGHT SWITCH SOCKET</Button></Row>
                <Row><Link href="/productEnquiryPage"><Button className="mt-2 btn-success ml-auto mr-4" size="sm">MAKE ENQUIRY
            </Button></Link></Row>
                <Row>
                    {
                        Mwtswitchsocket.map(mwt => (
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={mwt.url} />
                                <Card.Body>
                                    <Card.Title>CATALOG NUMBER -{mwt.CatalogNumber}</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>

                                <Card.Body>
                                    <Card.Link href="#">{mwt.Specification}</Card.Link>

                                </Card.Body>
                            </Card>
                        ))
                    }
                </Row>

         

        </div>
    )
}

export function MwtswitchsocketTable()
{
    return (
        <div>
            <Table striped bordered hover variant="info">
                <thead>
                    <tr>
                        <th>Catalog Number</th>
                        <th>Specification</th>
                    </tr>
                </thead>

                {
                    MwtswitchsocketTbl.map(mwt => (
                        <tbody>
                            <tr>
                                <td>{mwt.CatalogNumber}</td>
                                <td>{mwt.Specification}</td>

                            </tr>

                        </tbody>
                    ))
                }




            </Table>

        </div>
    )
}


export  function INSDELHI() {
    return (
        <div>
            <Image id="insdelhi" src="/navalyard.jpeg"/>
            <Image id="insdelhi" src="/insdelhi.jpeg" />
        </div>
    )
}
