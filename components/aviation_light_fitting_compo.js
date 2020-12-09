
import { Row,Card,Table,Button} from 'react-bootstrap'
import Link from 'next/link'
export const Pdt =[
    {
        id:'1',
        url:'/AVIATION LIGHT FITTING/1.png'
    }
]

export const Avi_lt_fitting_Tbl1 =[
    {
        id:'1',
        cat:'1015/AL',
        spec:'Weather proof and water tight die cast aluminium body led aviation light fitting with red Polycarbonate shade. 15W.240W.LED PCB with suitable Heavy duty electronic driver.duly powder coated finish.'
    },
    {
        id: '2',
        cat: '1015',
        spec: 'Same as above but in cast brass body.'
    }
]
export const Avi_lt_fitting_Tbl2 = [
    {
        id: '1',
        cat: '1115 / AL',
        wat: '15W',
        power:'45KW',
        lumes:'1500 lm'
    },
    {
        id: '2',
        cat: '1115/BR',
        wat: '15W',
        power: '45KW',
        lumes: '1500 lm'
    }
]



import React from 'react'

export default function Aviation_light_fitting_compo() {
    return (
        <div>
            <Row><Button size="lg" block>MARINE AVIATION LIGHT FITTINGS</Button></Row>
            <Row><Link href="/productEnquiryPage"><Button className="mt-2 btn-success ml-auto mr-4" size="sm">MAKE ENQUIRY</Button></Link></Row>
            {
                Pdt.map(avi=>(
                    <Card>
                    <Card.Img src={avi.url}/>
                    <Card.Text>{avi.cat}</Card.Text>
                    </Card>
                ))
            }
        </div>
    )
}




export  function Aviation_light_fitting1() {
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
                    Avi_lt_fitting_Tbl1.map(avi => (
                        <tbody>
                            <tr>
                                <td>{avi.cat}</td>
                                <td>{avi.spec}</td>

                            </tr>

                        </tbody>
                    ))
                }




            </Table>
        </div>
    )
}



export  function Aviation_light_fitting2() {
    return (
        
            <div>
                <Row><Button size="lg" block>Product Details</Button></Row>
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
                    Avi_lt_fitting_Tbl2.map(avi => (
                            <tbody>
                                <tr>
                                    <td>{avi.cat}</td>
                                    <td>{avi.wat}</td>
                                    <td>{avi.power}</td>
                                    <td>{avi.lumes}</td>



                                </tr>

                            </tbody>
                        ))
                    }
                </Table>
        </div>
    )
}
