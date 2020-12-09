import {Card,Table,Row,Button,Col} from 'react-bootstrap'
import Link from 'next/link'
export const Marine_ind_hand_lamp_tbl1=[
    {
        id:'1',
        url:'/MARINE_INDUSTRIAL HAND LAMPS/1.png',
        cat:'CAT. NO. 1412 BC/ES'    
    },
    {
        id: '2',
        url: '/MARINE_INDUSTRIAL HAND LAMPS/2.png',
        cat: 'CAT. NO. 1414 BC/ES'
    },
    {
        id: '3',
        url: '/MARINE_INDUSTRIAL HAND LAMPS/3.png',
        cat: 'CAT. NO. 1414 N/(BC/ES)'
    },
]



export default function Marine_industrial_hand_lamp_Pdt1() {
    return (
        <div>
            <Row><Button size="lg" block >MARINE INDUSTRIL HAND LAMP</Button></Row>
            <Row><Link href="/productEnquiryPage"><Button className="mt-2 btn-success ml-auto mr-4" size="sm">MAKE ENQUIRY
            </Button></Link></Row>
            <Row>{
            Marine_ind_hand_lamp_tbl1.map(pdt=>(
                
                <Card>
                   
                <Card.Img style={{width:'26rem'}} src={pdt.url}/>
                <Card.Title>{pdt.cat}</Card.Title>
                   
                </Card>
                
            ))
            } </Row>
            
        </div>
    )
}

export const Marine_ind_hand_lamp_tbl3=[
    {
        id:'1',
        cat:'1412 BC/ES',
        spec:'Rubber handle with glass and MS galvanized wire guard with bakelite BC/ES lamp holder suitable up to 60W. lamp.'
    },
    {
        id: '2',
        cat: '1414 BC/ES',
        spec: 'Rubber handle with die cast Aluminium protective wire guard with U shape clear glass and Aluminium body for fixing porcelain BC / ES lamp holder and connector. Rubber gasket for glass. Water tight and weather proof, suitable up to 100W. lamp, and also available with reflector as per requirement.'
    },
    {
        id: '3',
        cat: '1414 N/(BC/ES)',
        spec: '60W Water Tight Hand Lamp Nylon body with BC/ES type holder.'
    },

]
export function Marine_industrial_hand_lamp_Tbl1()
{
    return (
        <div>
        <Row><Button size="lg" block>Product Details</Button></Row>
            <Table striped bordered hover variant="primary" >
                <thead>
                    <tr>
                        <th>Catalog Number</th>
                        <th>Specification</th>
                    </tr>
                </thead>

                {
                    Marine_ind_hand_lamp_tbl3.map(pdt => (
                        <tbody>
                            <tr>
                                <td>{pdt.cat}</td>
                                <td>{pdt.spec}</td>
                            </tr>
                        </tbody>
                    ))
                }
            </Table>
        </div>
    )
}


export const Marine_ind_hand_lamp_tbl2 = [
    {
        id: '1',
        url: '/MARINE_INDUSTRIAL HAND LAMPS/4.png',
        cat: 'CAT. NO. 1109 A/L'
    }
]
export function Marine_industrial_hand_lamp_Pdt2()
{
    return (
        
        <div>
            <Row><Button size="lg" block>Marine LED Hand Lamps</Button></Row>
            <Row>
            <Col sm={{span:4,offset:4}}>{
            Marine_ind_hand_lamp_tbl2.map(pdt => (
                <Card>
                
                    <Card.Img src={pdt.url} />
                    <Card.Title>{pdt.cat}</Card.Title>
                    
                </Card>
            ))
        }
                </Col>
            </Row>

        </div>
    )
}
export const Marine_ind_hand_lamp_tbl4 = [
    {
        id: '1',
        cat: '1109/AL',
        spec: 'Die cast Aluminium body with die cast protective wire guard with U shape polycarbonate milky shade with rubber gasket, Rubber handle. S.S. hardware. Hand lamp for 12W. 240V. LED with Suitable Electronic LED Driver in the line of IP 65 protection.'
    }

]
export function Marine_industrial_hand_lamp_Tbl2()
{
    return (
        <div>
            <Row><Button size="lg" block>Product Details</Button></Row>
            <Table striped bordered hover variant="primary" >
                <thead>
                    <tr>
                        <th>Catalog Number</th>
                        <th>Specification</th>
                    </tr>
                </thead>

                {
                    Marine_ind_hand_lamp_tbl4.map(pdt => (
                        <tbody>
                            <tr>
                                <td>{pdt.cat}</td>
                                <td>{pdt.spec}</td>
                            </tr>
                        </tbody>
                    ))
                }
            </Table>
        </div>
    )
}
export const Marine_ind_hand_lamp_tbl5 = [
    {
        id: '1',
        cat: '1109 / AL',
        wat:'12W',
        power:'36KW',
        lumes:'1200 lm'
    }

]
export function Marine_industrial_hand_lamp_Tbl3()
{
    return (
        <div>
            <Row><Button size="lg" block>Product Details</Button></Row>
            <Table striped bordered hover variant="primary" >
                <thead>
                    <tr>
                        <th>Catalog Number</th>
                        <th>Watt</th>
                        <th>Annual Power Consumption</th>
                        <th>Max.Lumes</th>
                    </tr>
                </thead>

                {
                    Marine_ind_hand_lamp_tbl5.map(pdt => (
                        <tbody>
                            <tr>
                                <td>{pdt.cat}</td>
                                <td>{pdt.wat}</td>
                                <td>{pdt.power}</td>
                                <td>{pdt.lumes}</td>
                            </tr>
                        </tbody>
                    ))
                }
            </Table>
        </div>
    )
}














