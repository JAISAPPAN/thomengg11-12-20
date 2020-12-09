import {Container,Row,Col,Card,Table,Button} from 'react-bootstrap'
import Link from 'next/link'

export const Marine_buklhead_light_fittings_Tbl_one =[
   
    {
        id: '1',
        CatalogNumber: '1142',
        url: '/Marine_buklhead_light_fittings/1.png',
        Specification: 'Same as per 1141 - not hinged type. Aluminium cover fix up with 4 nos. of screws. 2 nos. Cable entries opposite side with brass cable glands. Suitable up to 100W lamp.'
    },
    
    {
        id: '2',
        CatalogNumber: '1144',
        url: '/Marine_buklhead_light_fittings/2.png',
        Specification: 'Cast Aluminium body emergency use bulkhead light fitting with clear glass and Aluminium body frame. Brass SBC lamp holder for 25W. 24V. lamp. 2 nos. Cable entries with plastic cable glands.'
    },
    
    {
        id: '3',
        CatalogNumber: '1146',
        url: '/Marine_buklhead_light_fittings/3.png',
        Specification: 'Cast Aluminium body with Aluminium frame with opal acrylic shade. Decorative type. fitting with Brass SBC lamp holder for up to 25W lamp. Mainly in emergency use. 2 nos. Cable entries with 2 nos. Brass cable glands.'
    }
    
]

export default function Mblf_Pdts1()
{
    return (
        <div>
            <Row><Button size="lg" block>MARINE BULKHEAD FITTING</Button>
            
            </Row>
            <Row><Link href="/productEnquiryPage"><Button 
            className="mt-2 btn-success ml-auto mr-4"size="sm">MAKE ENQUIRY
            </Button></Link></Row>
           <Row>
                        {
                            Marine_buklhead_light_fittings_Tbl_one.map(mwt => (
                                <Card style={{ width: '20rem',height:'58rem' }} >
                                    <Card.Img src={mwt.url} />
                                    <Card.Body>
                                        <Card.Title>CATALOG NUMBER -{mwt.CatalogNumber}</Card.Title>
                                        <Card.Text>
                                            {mwt.Specification}
                                        </Card.Text>
                                    </Card.Body>

                                </Card>
                            ))
                        }
               
            </Row>

        </div>
    )
}

export const Marine_buklhead_light_fittings_Tbl_two = [
    {
        id: '1',
        CatalogNumber: '1141',
        url: '',
        Specification: 'Oblong bulkhead fitting, cast Aluminium body with Aluminium hinged cover and locking arrangement oblong glass cover with protective SS wire guard, porcelain BC / ES lamp holder with 2 way connector. 2 nos. of conduit entries at top and bottom'
    },
    {
        id: '2',
        CatalogNumber: '1142',
        url: '/Marine_buklhead_light_fittings/1.png',
        Specification: 'Same as per 1141 - not hinged type. Aluminium cover fix up with 4 nos. of screws. 2 nos. Cable entries opposite side with brass cable glands. Suitable up to 100W lamp.'
    },
    {
        id: '3',
        CatalogNumber: '1342',
        url: '',
        Specification: '--do-- cast Brass body.'
    },
    {
        id: '4',
        CatalogNumber: '1144',
        url: '/Marine_buklhead_light_fittings/2.png',
        Specification: 'Cast Aluminium body emergency use bulkhead light fitting with clear glass and Aluminium body frame. Brass SBC lamp holder for 25W. 24V. lamp. 2 nos. Cable entries with plastic cable glands.'
    },
    {
        id: '5',
        CatalogNumber: '1344',
        url: '',
        Specification: '-do-- cast Brass body.'
    },
    {
        id: '6',
        CatalogNumber: '1146',
        url: '/Marine_buklhead_light_fittings/3.png',
        Specification: 'Cast Aluminium body with Aluminium frame with opal acrylic shade. Decorative type. fitting with Brass SBC lamp holder for up to 25W lamp. Mainly in emergency use. 2 nos. Cable entries with 2 nos. Brass cable glands.'
    },
    {
        id: '7',
        CatalogNumber: '1346',
        url: '',
        Specification: '-do-- cast Brass body.'
    },
]



export function Mbblf_Table1()
{
    return (
        <div>
            <Row><Button size="lg" block>Product Details</Button></Row>
            
            <Table striped bordered hover variant="info">
                <thead>
                    <tr>
                        <th>Catalog Number</th>
                        <th>Specification</th>
                    </tr>
                </thead>

                {
                    Marine_buklhead_light_fittings_Tbl_two .map(mwt => (
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

export const Marine_buklhead_light_fittings_Tbl_three = [

    {
        id: '1',
        CatalogNumber: '1106',
        url: '/Marine_buklhead_light_fittings/4.png',
        
    },

    {
        id: '2',
        CatalogNumber: '1115/AL',
        url: '/Marine_buklhead_light_fittings/5.png',
        
    }

]
export function Mblf_Pdts2()
{
    return (
        <div>
            <Container>
                <Row><Button size="lg" block>LED BULKHEAD LIGHT FITTINGS</Button></Row>
               
                <Row>
                    {
                        Marine_buklhead_light_fittings_Tbl_three.map(mwt => (
                            <Card style={{ width: '35rem' }} >
                                <Card.Img variant="top" src={mwt.url} />
                                <Card.Body>
                                    <Card.Title>CATALOG NUMBER -{mwt.CatalogNumber}</Card.Title>
                                    
                                </Card.Body>


                            </Card>
                        ))
                    }
                </Row>

            </Container>

        </div>
    )
}

export const Marine_buklhead_light_fittings_Tbl_four = [
    {
        id: '1',
        CatalogNumber: '1115/AL',
        
        Watt: '15W',
        AnnualPowerConsumption: '45W',
        MaxLumes: '1500lm',
        Specification:'Die cast Aluminium body with Die cast Aluminium cover fix up with 4 nos. of screws Oblong shape milky polycarbonate shade with rubber gasket and protective S.S. wire guard. 2 way connector, 2 nos. cable entries opposite side with PG cable glands. S.S. hardware. Fitting for 15W. 240V. LED with Suitable Electronic LED Driver Fitting in the line of IP 65 protection.'

    },
    {
        id: '2',
        CatalogNumber: '1115/BR',
       
        Watt: '15W',
        AnnualPowerConsumption: '45W',
        MaxLumes: '1500lm',
        Specification: 'Same as per Above ... But with Cast Brass body'

    },
    {
        id: '3',
        CatalogNumber: '1106/AL',
       
        Watt: '06W',
        AnnualPowerConsumption: '18KW',
        MaxLumes: '600lm',
        Specification: 'Surface / Recess type Die Cast Aluminium body with Die Cast Aluminium frame with Opal Polycarbonate shade. Decorative type LED Fitting with 2nos. cable entries with 2 nos. PG cable glands opposite side. S.S. hardware. Fitting for 6W. 24V. LED with Suitable Electronic Circuit. Fitting in the line of IP 55 protection. Fitting use Mainly in emergency. (Available in 110V / 240V also).'

    },
    {
        id: '4',
        CatalogNumber: '1106/BR',
        
        Watt: '06W',
        AnnualPowerConsumption: '18KW',
        MaxLumes: '600lm',
        Specification: 'Same as per Above ... But with Cast Brass body'

    },
]

export function Mbblf_Table2()
{
    return (
        <div>
            <Row><Button size="lg" block>Product Details</Button></Row>
            <h1></h1>
            <Table striped bordered hover variant="info">
                <thead>
                    <tr>
                        <th>Catalog Number</th>
                        <th>Specification</th>
                    </tr>
                </thead>

                {
                    Marine_buklhead_light_fittings_Tbl_four.map(mwt => (
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

export function Marine_buklhead_light_fittings_Pdt_Sepc() {
    return (
        <div>
                <Row><Button size="lg" block>Product Details</Button></Row>
            <h1></h1>
            <Table striped bordered hover variant="info">
                <thead>
                    <tr>
                        <th>Catalog Number</th>
                        <th>Watt</th>
                        <th>Annual Power Consumption</th>
                        <th>Max. Lumes</th>
                    </tr>
                </thead>

                {
                    Marine_buklhead_light_fittings_Tbl_four.map(mwt => (
                        <tbody>
                            <tr>
                                <td>{mwt.CatalogNumber}</td>
                                <td>{mwt.Watt}</td>
                                <td>{mwt.AnnualPoerConsumption}</td>
                                <td>{mwt.MaxLumes}</td>

                            </tr>

                        </tbody>
                    ))
                }

            </Table>
        </div>
    )
}
