import { Container, Row, Col, Card, Table,Button } from "react-bootstrap"

const led_well_glass_deck_light_fitting = [
    {
        id: '1',
        CatalogNumber: '1112/AL',
        url: '/led_well_glass-deck_light_fitting/1.jpg',
        Specification: 'Die cast Aluminium body with die cast protective wire guard with U shape polycarbonate milky shade with rubber gasket, 2 way connector with 2 nos. cable entries with PG cable glands. S.S. hardware. Fitting for 12W. 240V. LED with Suitable Electronic LED Driver. Fitting in the line of IP 65 protection.'
    },
    {
        id: '2',
        CatalogNumber: '1112/AL',
        url: '/led_well_glass-deck_light_fitting/2.jpg',
        Specification: 'Same as per 1112 - suitable for side wall mounting arrangement with 2 nos. cable entries with PG. glands opposite side.'
    },
    {
        id: '3',
        CatalogNumber: '1107/AL',
        url: '/led_well_glass-deck_light_fitting/3.png',
        Specification: 'Similar to 1112. Fitting for 6W 24V Alluminium Body.'
    },
   

]

const led_well_glass_deck_light_fitting_Details_Specs_Tbl = [
    {
        id: '1',
        CatalogNumber: '1112/AL',
        Watt:'12W',
        AnnualPowerConsumption:'36KW',
        MaxLumes:'1200lm',
        Specification: 'Die cast Aluminium body with die cast protective wire guard with U shape polycarbonate milky shade with rubber gasket, 2 way connector with 2 nos. cable entries with PG cable glands. S.S. hardware. Fitting for 12W. 240V. LED with Suitable Electronic LED Driver. Fitting in the line of IP 65 protection.'
    },
    {
        id: '2',
        CatalogNumber: '1112/BR',
        Watt: '12W',
        AnnualPowerConsumption: '36KW',
        MaxLumes: '1200lm',
        Specification: 'Same as per above... But with cast Brass body and Brass / SS wire guard.'
    },
    {
        id: '3',
        CatalogNumber: '1212/AL',
        Watt: '12W',
        AnnualPowerConsumption: '36KW',
        MaxLumes: '1200lm',
        Specification: 'Same as per 1112 - suitable for side wall mounting arrangement with 2 nos. cable entries with PG. glands opposite side.'
    },
    {
        id: '4',
        CatalogNumber: '1212/BR',
        Watt: '12W',
        AnnualPowerConsumption: '36KW',
        MaxLumes: '1200lm',
        Specification: '.. Do... But cast Brass body with Brass / SS protective wire guard.'
    },
    {
        id: '5',
        CatalogNumber: '1315/AL',
        Watt: '15W',
        AnnualPowerConsumption: '45KW',
        MaxLumes: '1500lm',
        Specification: 'Similar to 1112 / Al but suitable for 15W. 240V. LED.'
    },
    {
        id: '6',
        CatalogNumber: '1315/BR',
        Watt: '15W',
        AnnualPowerConsumption: '45KW',
        MaxLumes: '1500lm',
        Specification: 'Similar to 1315 / Al but in brass body.'
    },
    {
        id: '7',
        CatalogNumber: '1107/AL',
        Watt: '6W',
        AnnualPowerConsumption: '18KW',
        MaxLumes: '600lm',
        Specification: 'Similar to 1112. Fitting for 6W 24V Alluminium Body.'
    },
    {
        id: '8',
        CatalogNumber: '1107/BR',
        Watt: '6W',
        AnnualPowerConsumption: '18KW',
        MaxLumes: '600lm',
        Specification: 'Similar to 1112. Fitting for 6W 24V Brass Body.'
    }
       

]



export default function Led_well_glass_deck_light_fitting_Pdts()
{
    return (
        <div>
            <Container>
                <Row><Button size="lg" block>LED WELL GLASS/DECK LIGHT FITTINGS</Button></Row>
                
                <Row>
                    {
                        led_well_glass_deck_light_fitting.map(mwt => (
                            <Card style={{ width: '23rem' }}>
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

            </Container>

        </div>
    )
}

export function Led_well_glass_deck_light_fitting_Table()
{
    return (
        <div>
           
            <Row><Button size="lg" block>Products Specifications</Button></Row>
            <Table striped bordered hover variant="info">
                <thead>
                    <tr>
                        <th>Catalog Number</th>
                        <th>Specification</th>
                    </tr>
                </thead>

                {
                    led_well_glass_deck_light_fitting_Details_Specs_Tbl.map(mwt => (
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
import React from 'react'

export  function Led_well_glass_deck_light_fitting_spec_Table() {
    return (
        <div>
            <Row><Button size="lg" block>Products Specifications</Button></Row>
            <Table striped bordered hover variant="info">
                <thead>
                    <tr>
                        <th>Catalog Number</th>
                        <th>Watt</th>
                        <th>Annual Power Consumption</th>
                        <th>Max. Lumens</th>
                    </tr>
                </thead>

                {
                    led_well_glass_deck_light_fitting_Details_Specs_Tbl.map(mwt => (
                        <tbody>
                            <tr>
                                <td>{mwt.CatalogNumber}</td>
                                <td>{mwt.Watt}</td>
                                <td>{mwt.AnnualPowerConsumption}</td>
                                <td>{mwt.MaxLumes}</td>

                            </tr>

                        </tbody>
                    ))
                }




            </Table>
            
        </div>
    )
}
