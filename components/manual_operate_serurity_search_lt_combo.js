
import {Card,Table,Row,Button} from 'react-bootstrap'
import Link from 'next/link'
export const Manual_operate_serurity_search_lt_Tbl1 =[
    {
        id:'1',
        url:'/MARINE MANUAL OPERATED SECURITY SEARCH LIGHT/1.png',
        cat:'Manual Search Light'
    },
    {
        id: '2',
        url: '/MARINE MANUAL OPERATED SECURITY SEARCH LIGHT/2.png',
        cat: 'Manual Search Light'
    },
    
]



export default function Manual_operate_serurity_search_lt() {
    return (
        <div>
            <Row><Button size="lg" block>MARINE MANUEL OPERATED SECURITY SEARCH LIGHT</Button></Row>
            <Row><Link href="/productEnquiryPage"><Button className="mt-2 btn-success ml-auto mr-4" size="sm">MAKE ENQUIRY
            </Button></Link></Row>
            <Row>
            {
                Manual_operate_serurity_search_lt_Tbl1 .map(manual=>(
                    <Card>
                    <Card.Img src={manual.url}/>
                        <Card.Text>{manual.cat}</Card.Text>
                    </Card>
                ))
            }
            </Row>
            <Row>
                <Card>
                    <Card.Img src="/MARINE MANUAL OPERATED SECURITY SEARCH LIGHT/3.jpg" />
                    <Card.Text>Manual Search Light Drawing</Card.Text>
                </Card>
            </Row>
        </div>
    )
}

export const Manual_operate_serurity_search_lt_Tbl2=[
    {
        id :'1',
        cat:'2571',
        spec:'Security Search Light suitable upto 1000W Halogen lamp, Brass body with hot air escape provision and MS wheel house assembly for Horizontal & Vertical movements. Powder coated finishing, mirror polshed glass reflector with front Aluminium ring and toughened glass fitting with exhaust fan'
    },
    {
        id: '2',
        cat: '2572',
        spec: '----do---- sutable up to 300 W. Halogen Lamp'
    },
    {
        id: '3',
        cat: '2573',
        spec: '----do---- sutable up to 200 W. Halogen Lamp'
    },
    {
        id: '4',
        cat: '1571',
        spec: 'Security Search Light suitable upto 1000 W Halogen lamp. Aluminium body with MS wheel house assembly for Horizontal & Vertical movements. Powder coated finishing, mirror glass reflector with front Aluminium ring and toughened glass fitting'
    },
    {
        id: '5',
        cat: '1572',
        spec: '---do--- suitable up to 300 W, Halogen Lamp'
    },
    {
        id: '6',
        cat: '1573',
        spec: '---do--- suitable up to 2000 W, Halogen Lamp'
    },
]



export  function Manual_operate_serurity_search_lt_Table1() {
    return (
        <div>
            <Row><Button className="mt-3" size="lg" block>Product Details</Button></Row>
            <Table striped bordered hover variant="info">
                <thead>
                    <tr>
                        <th>Catalog Number</th>

                        <th>Specification</th>
                    </tr>
                </thead>

                {
                    Manual_operate_serurity_search_lt_Tbl2.map(manuel => (
                        <tbody>
                            <tr>
                                <td>{manuel.cat}</td>

                                <td>{manuel.spec}</td>


                            </tr>

                        </tbody>
                    ))
                }
            </Table>
            
        </div>
    )
}

export const Manual_operate_serurity_search_lt_Tbl3=[
    
    {
        id: '1',
        cat: 'Sourcing Lamp',
        cat1: 'Halogen',
        cat2: 'Halogen',
        cat3: 'Halogen'
    },
    {
        id: '2',
        cat: 'Lamp Watt',
        cat1: '1000 W',
        cat2: '150 W - 300 W',
        cat3: '2000 W'
    },
    {
        id: '3',
        cat: 'Lamp Voltage',
        cat1: '240 V',
        cat2: '24 V',
        cat3: '240 V'
    },
    {
        id: '4',
        cat: 'Housing Material',
        cat1: 'Brass / Aluminium',
        cat2: 'Brass / Aluminium',
        cat3: 'Brass / Aluminium'
    },
    {
        id: '5',
        cat: 'Reflector',
        cat1: 'Mirror Polish Glass Reflector & SS Reflector on Fornt Ring',
        cat2: 'Mirror Polish Glass Reflector & SS Reflector on Fornt Ring',
        cat3: 'Mirror Polish Glass Reflector & SS Reflector on Fornt Ring'
    },
    {
        id: '6',
        cat: 'Colour',
        cat1: 'Black or White',
        cat2: 'Black or White',
        cat3: 'Black or White'
    },
    {
        id: '7',
        cat: 'Range (Approx)',
        cat1: '600 to 800 mtrs',
        cat2: '150 to 300 mtrs',
        cat3: '800 to 1200 mtrs'
    },
    {
        id: '8',
        cat: 'Craddle',
        cat1: 'MS',
        cat2: 'MS',
        cat3: 'MS'
    },
    {
        id: '9',
        cat: 'Clamp',
        cat1: 'MS',
        cat2: 'MS',
        cat3: 'MS'
    },
    {
        id: '10',
        cat: 'Under Platform arrangement',
        cat1: 'MS',
        cat2: 'MS',
        cat3: 'MS'
    },
    {
        id: '11',
        cat: 'A (Approx)',
        cat1: '450 mm or On Request',
        cat2: '370 mm or On Request',
        cat3: '450 mm or On Request'
    },
    {
        id: '12',
        cat: 'B (Approx)',
        cat1: '375 mm',
        cat2: '310 mm',
        cat3: '425 mm'
    },
    {
        id: '13',
        cat: 'C (Approx)',
        cat1: '350 mm',
        cat2: '230 mm',
        cat3: '290 mm'
    },
    {
        id: '14',
        cat: 'D (Approx)',
        cat1: '280',
        cat2: '115',
        cat3: '310'
    }, {
        id: '15',
        cat: 'D (Approx)',
        cat1: '385 mm',
        cat2: '255 mm',
        cat3: '410 mm'
    },
    {
        id: '16',
        cat: 'Hinged Front Ring',
        cat1: 'Aluminium',
        cat2: 'Aluminium',
        cat3: 'Aluminium'
    },
    {
        id: '17',
        cat: 'Round Disc',
        cat1: 'MS',
        cat2: 'MS',
        cat3: 'MS'
    }, {
        id: '18',
        cat: 'Vertical Movement',
        cat1: 'Manual',
        cat2: 'Manual',
        cat3: 'Manual'
    },
    
    {
        id: '19',
        cat: 'Weight (Approx)',
        cat1: '19 kg (Brass) / 15.5 kg (Aluminium)',
        cat2: '13.5 kg (Brass) / 11.5 kg (Aluminium)',
        cat3: '22 kg (Brass) / 20 kg (Aluminium)'
    }    

]

import React from 'react'

export function Manual_operate_serurity_search_lt_Table2() {
    return (
        <div>
            <Row><Button className="mt-3" size="lg" block>Product Details</Button></Row>
            <Table striped bordered hover variant="info">
                <thead>
                    <tr>
                        <th>Catalog Number</th>

                        <th>2571/157</th>
                        <th>2572/1572</th>
                        <th>2573/1573</th>
                    </tr>
                </thead>

                {
                    Manual_operate_serurity_search_lt_Tbl3.map(manuel => (
                        <tbody>
                            <tr>
                                <td>{manuel.cat}</td>

                                <td>{manuel.cat1}</td>
                                <td>{manuel.cat2}</td>
                                <td>{manuel.cat3}</td>


                            </tr>

                        </tbody>
                    ))
                }
            </Table>
        </div>
    )
}
export const Manual_operate_serurity_search_lt_Tbl4 = [

    {
        id: '1',
        cat: 'Sourcing Lamp',
        cat1: 'LED',
        cat2: 'LED'
        
    },
    {
        id: '2',
        cat: 'Lamp Watt',
        cat1: '200 W',
        cat2: '300 W'

    },
    {
        id: '3',
        cat: 'Lamp vOLTAGE',
        cat1: '240 V',
        cat2: '240 V'

    },
    {
        id: '4',
        cat: 'Housing Material',
        cat1: 'Aluminium',
        cat2: 'Aluminium'

    },
    {
        id: '5',
        cat: 'Reflector',
        cat1: 'Lenses',
        cat2: 'Lenses'

    },
    {
        id: '6',
        cat: 'Colour',
        cat1: 'Black or White',
        cat2: 'Black or White'

    },
    {
        id: '7',
        cat: 'Range (Approx)',
        cat1: '600 to 800 mtrs',
        cat2: '800 to 1200 mtrs'

    },
    {
        id: '8',
        cat: 'Cradle',
        cat1: 'MS',
        cat2: 'MS'

    },
    {
        id: '9',
        cat: 'Clamp',
        cat1: 'MS',
        cat2: 'MS'

    },
    {
        id: '10',
        cat: 'Under Platform arrangement',
        cat1: 'MS',
        cat2: 'MS'

    },
    {
        id: '11',
        cat: 'A (Approx)',
        cat1: '450 mm or On Request',
        cat2: '450 mm or On Request'

    },
    {
        id: '12',
        cat: 'B (Approx)',
        cat1: '375 mm',
        cat2: '425 mm'

    },
    {
        id: '13',
        cat: 'C (Approx)',
        cat1: '350 mm',
        cat2: '390 mm'

    },
    {
        id: '14',
        cat: 'D (Approx)',
        cat1: '385 mm',
        cat2: '410 mm'

    },
    {
        id: '15',
        cat: 'Hinged Front Ring',
        cat1: 'Aluminium',
        cat2: 'Aluminium'

    },
    {
        id: '16',
        cat: 'Round Disc',
        cat1: 'MS',
        cat2: 'MS'

    },
    {
        id: '17',
        cat: 'Vertical Movement',
        cat1: 'Manual',
        cat2: 'Manual'

    },
    {
        id: '18',
        cat: 'Weight (Approx)',
        cat1: '18 Kg',
        cat2: '23 Kg'

    },
]


export function Manual_operate_serurity_search_lt_Table3() {
    return (
        <div>
            <Row><Button size="lg" block>Product Details</Button></Row>
            <Table striped bordered hover variant="info">
                <thead>
                    <tr>
                        <th>Catalog Number</th>

                        
                        <th>1571 LE</th>
                        <th>1573 LE</th>
                    </tr>
                </thead>

                {
                    Manual_operate_serurity_search_lt_Tbl4.map(manuel => (
                        <tbody>
                            <tr>
                                <td>{manuel.cat}</td>

                                <td>{manuel.cat1}</td>
                                <td>{manuel.cat2}</td>
                               


                            </tr>

                        </tbody>
                    ))
                }
            </Table>
        </div>
    )
}

