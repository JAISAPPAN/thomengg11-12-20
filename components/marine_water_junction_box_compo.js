
import {Row,Card,Button,Table} from 'react-bootstrap'
import Link from 'next/link'
export const JunctionBox_Tbl=[
    {
        id:'1',
        cat:'CAT. NO. 2664',
        url:'/MARINE WATERTIGHT JUNCTION BOXES/1.png'
    },
    {
        id: '2',
        cat: 'CAT. NO. 2664 N',
        url: '/MARINE WATERTIGHT JUNCTION BOXES/2.png'
    }
]



export default function Marine_water_junction_box() {
    return (
        <div>
            <Row><Button size="lg" block >MARINE WATER TIGHT JUNCTION BOX</Button></Row>
            <Row><Link href="/productEnquiryPage"><Button className="mt-2 btn-success ml-auto mr-4" size="sm">MAKE ENQUIRY
            </Button></Link></Row>
        <Row style={{justifyContent:"center"}}>
               

            {
                JunctionBox_Tbl.map(tbl=>(
                    <Card>
                        
                        <Card.Img src={tbl.url} />
                        <Card.Title>{tbl.cat}</Card.Title>
                       
                    </Card>
                ))
                
            }
              
               
            </Row>
        </div>
    )
}
export const Junctionbox_Tbl2=[
    {
        id:'1',
        cat:'2664',
        spec:'Cast Aluminimum Body 4 way Junction box with Plastic Cable Entries Glands.Box Having porcelain base connector With brass terminals.'
    },
    {
        id: '2',
        cat: '2564',
        spec: '-do-- with cast Brass body.'
    },
    {
        id: '3',
        cat: '2664 N',
        spec: 'Nylon Body 4 way Junction box with Plastic Cable Entries Glands.Box Having porcelain base connector With brass terminals.'
    },
]
import React from 'react'

export  function Marine_water_junction_box_compo1() {
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
                    Junctionbox_Tbl2.map(light => (
                        <tbody>
                            <tr>
                                <td>{light.cat}</td>
                                <td>{light.Spec}</td>

                            </tr>

                        </tbody>
                    ))
                }




            </Table>
        </div>
    )
}

