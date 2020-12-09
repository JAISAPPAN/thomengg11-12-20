import { Row, Col, Card, Table, Button } from "react-bootstrap"
import Link from 'next/link'

const marine_deck_light_well_glass_light_fitting = [
    {
        id: '1',
        CatalogNumber: '1112/AL',
        url: '/marine_deck_light-well_glass_light_fitting/1.png',
        Specification: 'Die cast Aluminium body with die cast protective wire guard with U shape polycarbonate milky shade with rubber gasket, 2 way connector with 2 nos. cable entries with PG cable glands. S.S. hardware. Fitting for 12W. 240V. LED with Suitable Electronic LED Driver. Fitting in the line of IP 65 protection.'
    },
    {
        id: '2',
        CatalogNumber: '1112/BR',
        url: '/marine_deck_light-well_glass_light_fitting/2.png',
        Specification: 'Same as per above... But with cast Brass body and Brass / SS wire guard.'
    },
    {
        id: '3',
        CatalogNumber: '1212/AL',
        url: '/marine_deck_light-well_glass_light_fitting/3.png',
        Specification: 'Same as per 1112 - suitable for side wall mounting arrangement with 2 nos. cable entries with PG. glands opposite side.'
    },
    {
        id: '4',
        CatalogNumber: '1171 BC/ES',
        url: '/marine_deck_light-well_glass_light_fitting/4.png',

        Specification: 'Same as per 1151 - suitable for side wall mounting arrangements with 2 nos. cable entries Brass glands opposite side.'
    },
    {
        id: '5',
        CatalogNumber: '1171 N/(BC/ES)',
        url: '/marine_deck_light-well_glass_light_fitting/5.png',
        Specification: '60w BC/ES Holder Nylon Body and Guard With U Shape Clear Glass suitable for side wall mounting. 2 nos cable entries with plastic cable glands.'
    },
    {
        id: '6',
        CatalogNumber: '1371 BC/ES',
        url: '/marine_deck_light-well_glass_light_fitting/6.png',
        Specification: '--- do --- cast Brass body with Brass / SS protective wire Guard.'
    },
    {
        id: '7',
        CatalogNumber: '1181 BC/ES',
        url: '/marine_deck_light-well_glass_light_fitting/7.png',
        Specification: 'Cast Aluminium body with MS/SS protective wire guard with clear U shape threaded glass porcelain BC / ES lamp holder with 2 way connector with 2 nos. suitable upto 100W Lamp'
    }


]

const marine_deck_light_well_glass_light_fitting_Tbl = [
    {
        id: '1',
        CatalogNumber: '1112/AL',

        Specification: 'Die cast Aluminium body with die cast protective wire guard with U shape polycarbonate milky shade with rubber gasket, 2 way connector with 2 nos. cable entries with PG cable glands. S.S. hardware. Fitting for 12W. 240V. LED with Suitable Electronic LED Driver. Fitting in the line of IP 65 protection.'
    },
    {
        id: '2',
        CatalogNumber: '1151 N/(BC/ES)',

        Specification: '60w BC/ES Holder Nylon Body and Guard With U Shape Clear Glass. 2 nos cable entries with plastic cable glands.'
    },
    {
        id: '3',
        CatalogNumber: '2541 BC/ES',

        Specification: 'Same as per 1151 with cast Brass body and Brass / SS wire guard.'
    },
    {
        id: '4',
        CatalogNumber: '1171 BC/ES',


        Specification: 'Same as per 1151 - suitable for side wall mounting arrangements with 2 nos. cable entries Brass glands opposite side.'
    },
    {
        id: '5',
        CatalogNumber: '1171 N/(BC/ES)',

        Specification: '60w BC/ES Holder Nylon Body and Guard With U Shape Clear Glass suitable for side wall mounting. 2 nos cable entries with plastic cable glands.'
    },
    {
        id: '6',
        CatalogNumber: '1371 BC/ES',

        Specification: '--- do --- cast Brass body with Brass / SS protective wire Guard.'
    },
    {
        id: '7',
        CatalogNumber: '1181 BC/ES',

        Specification: 'Cast Aluminium body with MS/SS protective wire guard with clear U shape threaded glass porcelain BC / ES lamp holder with 2 way connector with 2 nos. suitable upto 100W Lamp'
    },
    {
        id: '8',
        CatalogNumber: '1181 N/(BC/ES)',

        Specification: '100w BC/ES holder Nylon body and guard with U shape threaded clear glass. 2 nos cable Entries with plastic cable glands.'
    },
    {
        id: '9',
        CatalogNumber: '1381',

        Specification: 'Same as per 1181 - Cast Brass body with Brass/ SS protective wire guard.'
    },
    {
        id: '10',
        CatalogNumber: '1154',

        Specification: 'Cast Aluminium body with die cast Aluminium protective wire guard with clear U shape glass with rubber gasket. SBC Brass holder for 24V. 25W. pigmy lamp. 2 nos. cable entries with plastic cable glands. Fitting mainly useful for emergency LED Light Fittings.'
    },
    {
        id: '11',
        CatalogNumber: '1354',

        Specification: '---do--- cast Brass body.'
    },

]



export default function Marine_deck_light_well_glass_light_fitting_Pdts()
{
    return (
        <div>
           
                <Row><Button  size="lg" block>MARINE DECK LIGHT/ WELL GLASS LIGHT FITTING</Button></Row>
            <Row><Link href="/productEnquiryPage"><Button className="mt-2 btn-success ml-auto mr-4" size="sm">MAKE ENQUIRY
            </Button></Link></Row>
                    <Row>
                        {
                            marine_deck_light_well_glass_light_fitting.map(mwt => (
                                <Card style={{ width: '15rem', height: '30rem' }}>
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

export function Marine_deck_light_well_glass_light_fitting_Table()
            {
    return (
            <div>
            <Row><Button className="mt-5"size="lg" block>Product Details</Button></Row>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Catalog Number</th>
                            <th>Specification</th>
                        </tr>
                    </thead>

                    {
                        marine_deck_light_well_glass_light_fitting.map(mwt => (
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