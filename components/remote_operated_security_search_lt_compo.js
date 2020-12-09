import { Card, Table, Row, Button } from 'react-bootstrap'
import Link from 'next/link'
export const Remote_operate_serurity_search_lt_Tbl1 = [
    {
        id: '1',
        url: '/MARINE REMOTE OPERATED SECURITY SEARCH LIGHT/1.png',
        cat: 'Remote Search Light'
    },
    {
        id: '2',
        url: '/MARINE REMOTE OPERATED SECURITY SEARCH LIGHT/2.png',
        cat: 'Remote Search Light'
    },

]



export default function Remote_operate_serurity_search_lt()
{
    return (
        <div>
            <Row><Button size="lg" block>MARINE REMOTE OPERATED SECURITY SEARCH LIGHT</Button></Row>
            <Row><Link href="/productEnquiryPage"><Button className="mt-2 btn-success ml-auto mr-4" size="sm">MAKE ENQUIRY
            </Button></Link></Row>
            <Row>
                {
                    Remote_operate_serurity_search_lt_Tbl1.map(manual => (
                        <Card>
                            <Card.Img src={manual.url} />
                            <Card.Text>{manual.cat}</Card.Text>
                        </Card>
                    ))
                }
            </Row>
            <Row>
                <Card>
                    <Card.Img src="/MARINE REMOTE OPERATED SECURITY SEARCH LIGHT/3.jpg" />
                    <Card.Text>Manual Search Light Drawing</Card.Text>
                </Card>
            </Row>
        </div>
    )
}

export const Remote_operate_serurity_search_lt_Tb2 = [
    {
        id: '1',
        
        spec: 'Remote operated security search light suitable for LED and Halogen lamp'
    },
    {
        id: '2',
        
        spec:'Aluminum body light Fitting for betterment of heat circulation' 
    },
    {
        id: '3',
        spec:'Mirror polished heavy duty long range glass reflector with front openable aluminum ring and clear heat resistance toughened glass for halogen lamp fitting'
    },
    {
        id: '4',
        
        spec: 'Fitting suitable for Horizontal and Vertical movement with the help of wired remote control.'
    },
    {
        id: '5',
        spec:'Heavy duty high power LED with long range lenses with front openable aluminum ring and clear heat resitance toughened glass for LED fitting'
    }
]



export function Remote_operate_serurity_search_Tbl2()
{
    return (
        <div>
            <Row><Button size="lg" block>Product Details</Button></Row>
            <Table striped bordered hover variant="info">
                

                {
                    Remote_operate_serurity_search_lt_Tb2 .map(manuel => (
                        <tbody>
                            <tr>
                               

                                <td>{manuel.spec}</td>


                            </tr>

                        </tbody>
                    ))
                }
            </Table>

        </div>
    )
}

export const Remote_operate_serurity_search_lt_Tbl3 = [

    {
        id: '1',
        cat: 'Search Light',
        cat1: 'Remote Operated',
        cat2: 'Remote Operated',
        cat3: 'Remote Operated',
        cat4:'Remote Operated'
    },
    {
        id:'2',
        cat:'Sourcing lamp',
        cat2:'Halogen',
        cat2: 'LED',
        cat3: 'Halogen',
        cat4: 'LED',
    },
    {
        id: '3',
        cat: 'Lamp Watt',
        cat2: '1000W',
        cat2: '200W',
        cat3: '2000W',
        cat4: '300W',
    },
    
    {
        id: '4',
        cat: 'Lamp Voltage',
        cat2: '240 V',
        cat2: '240 V',
        cat3: '240 V',
        cat4: '240 V',
    },
    {
        id: '5',
        cat: 'Search Light Enclosure',
        cat2: 'Aluminum Sheet',
        cat2: 'Aluminum Sheet',
        cat3: 'Aluminum Sheet',
        cat4: 'Aluminum Sheet',
    },
    {
        id: '6',
        cat: 'Relector',
        cat2: 'Mirror Polished Glass',
        cat2: 'Lenses',
        cat3: 'Mirror Polished Glass',
        cat4: 'Lenses',
    },
    {
        id: '7',
        cat: 'Range (Approx)',
        cat2: '600 - 800 Mts',
        cat2: '600 - 800 Mts',
        cat3: '800 - 1200 Mts',
        cat4: '800 - 1200 Mts',
    },
    {
        id: '8',
        cat: 'Control Box Enclosure',
        cat2: 'ABS',
        cat2: 'ABS',
        cat3: 'ABS',
        cat4: 'ABS',
    },
    {
        id: '9',
        cat: 'Forward/Reverse Movement',
        cat2: 'Yes',
        cat2: 'Yes',
        cat3: 'Yes',
        cat4: 'Yes',
    },
    {
        id: '10',
        cat: 'Vertical Movement',
        cat2: 'Yes',
        cat2: 'Yes',
        cat3: 'Yes',
        cat4: 'Yes',
    },
    {
        id: '11',
        cat: 'Indicator Power',
        cat2: 'Yes',
        cat2: 'Yes',
        cat3: 'Yes',
        cat4: 'Yes',
    },
    {
        id: '12',
        cat: 'Wire from Remote to Search Light',
        cat2: 'Based on user Requirements',
        cat2: 'Based on user Requirements',
        cat3: 'Based on user Requirements',
        cat4: 'Based on user Requirements',
    },
    {
        id: '13',
        cat: 'Connector Type',
        cat2: 'Junction Box',
        cat2: 'Junction Box',
        cat3: 'Junction Box',
        cat4: 'Junction Box',
    },
    {
        id: '14',
        cat: 'Housing Material',
        cat2: 'Aluminium',
        cat2: 'Aluminium',
        cat3: 'Aluminium',
        cat4: 'Aluminium',
    },
    {
        id: '15',
        cat: 'Weight (App)',
        cat2: '23 Kgs.',
        cat2: '23 Kgs.',
        cat3: '23 Kgs.',
        cat4: '23 Kgs.',
    },
    

]

import React from 'react'

export function Remote_operated_serurity_search_lt_Table2()
{
    return (
        <div>
            <Row><Button size="lg" block>Product Details</Button></Row>
            <Table striped bordered hover variant="info">
                <thead>
                    <tr>
                        <th>Catalog Number</th>
                        <th>1103</th>
                        <th>1103/LE</th>
                        <th>1203</th>
                        <th>1203/LE</th>
                    </tr>
                </thead>

                {
                    Remote_operate_serurity_search_lt_Tbl3.map(manuel => (
                        <tbody>
                            <tr>
                                <td>{manuel.cat}</td>

                                <td>{manuel.cat1}</td>
                                <td>{manuel.cat2}</td>
                                <td>{manuel.cat3}</td>
                                <td>{manuel.cat4}</td>


                            </tr>

                        </tbody>
                    ))
                }
            </Table>
        </div>
    )
}
export const Remote_operate_serurity_search_lt_Tbl4 = [

    {
        id: '1',
        cat: '1103 /1000 W',
        cat1: '330',
        cat2: '330',
        cat3: '350',
        cat4: '345',
        cat5:'205',
        weight:'23 Kgs.'

    },
    {
        id: '2',
        cat: '1103 /LE200 W',
        cat1: '330',
        cat2: '330',
        cat3: '350',
        cat4: '345',
        cat5: '205',
        weight: '26Kgs'

    },
    {
        id: '3',
        cat: '1203 /2000 W',
        cat1: '330',
        cat2: '380',
        cat3: '350',
        cat4: '395',
        cat5: '205',
        weight: '28 Kgs'

    },
    {
        id: '4',
        cat: '1203 /LE 300 W',
        cat1: '330',
        cat2: '380',
        cat3: '350',
        cat4: '395',
        cat5: '205',
        weight: '28 Kgs'

    }
    
]


export function Remote_operated_serurity_search_lt_Table3()
{
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
                    Remote_operate_serurity_search_lt_Tbl4.map(manuel => (
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

// <thead>
//     <tr>
//         <th>Catalog Number</th>

//         <th>Specification</th>
//     </tr>
// </thead>