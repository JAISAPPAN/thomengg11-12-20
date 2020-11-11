
import {Card,Table,Button,Row,Image} from 'react-bootstrap'
export const FloodLtPdt1=[
    {
        id:'1',
        name:'/MARINE FLOOD LIGHT FITTING/1.png',
        catalog:'CAT. NO. 2690'
    },
    {
        id: '2',
        name: '/MARINE FLOOD LIGHT FITTING/2.png',
        catalog: 'CAT. NO. 2693'
    },
]
export const FloodLtPdt2 = [
    {
        id: '1',
        name: '/MARINE FLOOD LIGHT FITTING/3.png',
        catalog: 'CAT. NO. 4005'
    },
    {
        id: '2',
        name: '/MARINE FLOOD LIGHT FITTING/4.png',
        catalog: 'CAT. NO. 4006'
    },
    {
        id: '3',
        name: '/MARINE FLOOD LIGHT FITTING/5.png',
        catalog: 'CAT. NO. 4010'
    },
]


export default function Marine_flood_light_fitting_Pdt1() {
    return (
        <div>
        <Row>
        {
                FloodLtPdt1.map(light=>(

                    <Card>
                        
                        <Card.Img style={{ width: '30rem' }} src={light.name}></Card.Img>
                        <Card.Text>{light.catalog}</Card.Text>
                    </Card>
                ))
        }
       
            </Row>   
        </div>
    )
}


export function Marine_flood_light_fitting_Pdt2()
{
    return (
        <div>
        <Row>
            {
                FloodLtPdt2.map(light => (

                    <Card>
                        <Card.Img style={{ width: '28rem' }} src={light.name}></Card.Img>
                        <Card.Text>{light.catalog}</Card.Text>
                    </Card>
                ))
            }

            </Row>
        </div>
    )
}




export const FloodLtTbl1=[
    {
        id: '1',
        cat:'CAT. NO. 2690',
        Spec:'Cast Aluminium body light fitting with clear toughened front glass with Aluminium ring with rubber gasket fitting with Aluminum polished reflector and MS bracket for movement and fixing the fitting. Porcelain ES (screw type) lamp holder. Suitable up to 100W. lamp.'
    },
    {
        id: '2',
        cat: 'CAT. NO. 2691',
        Spec: '-do-- Suitable up to 200W. lamp.'
    },
    {
        id: '3',
        cat: 'CAT. NO. 2692',
        Spec: '--do-- Suitable up to 300W. lamp'
    },
    {
        id: '4',
        cat: 'CAT. NO. 2693',
        Spec: '--do-- Suitable up to 500W. lamp'
    },
]

export function Marine_flood_light_fitting_Tbl1()
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
                    FloodLtTbl1.map(light => (
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
export const FloodLtTbl2=[
    {
        id:'1',
        cat:'4001',
        wat:'30W',
        power:'90KW',
        lumes:'2700 lm',
        seec:'Die Cast Aluminium body LED Flood light fitting with clear toughened front glass with Die Cast Aluminium cover ring with rubber gasket. Fitting with Aluminium polished reflector, Fitting with MS bracket for Vertical movement and fixing the fitting. Suitable for 30W. 240V. LED with suitable Electronic Driver. Fitting in the line of IP 65 protection.'
    },
    {
        id :'2',
        cat:'4002',
        wat:'45W',
        power:'135KW',
        lumes:'4430 lm',
        seec:'Same as per above... But suitable for 45W. 240V.'
    },
    {
        id : '3',
        cat:'4003',
        wat:'60W',
        power:'180KW',
        lumes:'5920 Im',
        seec:'Same as per above... But suitable for 60W. 240V.',
    },
    {
        id : '4',
        cat:'4004',
        wat:'80W',
        power:'240KW',
        lumes:'7930 Im',
        seec:'Same as per above... But suitable for 80W. 240V.'
    },
    {
        id :'5',
        cat:'4005',
        wat:'100W',
        power:'305KW',
        lumes:'9780 lm',
        seec:'Same as per above... But suitable for 100W. 240V.'
    },
    {
        id : '6',
        cat:'4001',
        wat:'150W',
        power:'460KW',
        lumes:'14730 lm',
        seec:'Same as per above... But suitable for 150W. 240V.'
    },
    {
        id : '7',
        cat:'4010',
        wat:'200W',
        power:'580KW',
        lumes:'17600 lm',
        seec:'Same as per above... But suitable for 200W. 240V.'
    },
    {
        id :'8',
        cat:'4011',
        wat:'250W',
        power:'750KW',
        lumes:'23050 lm',
        seec:'Same as per above... But suitable for 250W. 240V.'
    },
]

export function Marine_flood_light_fitting_Tbl2()
{
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
                        <th>Specification</th>
                    </tr>
                </thead>

                {
                    FloodLtTbl2.map(light => (
                        <tbody>
                            <tr>
                                <td>{light.cat}</td>
                                <td>{light.wat}</td>
                                <td>{light.power}</td>
                            <td>{light.lumes}</td>
                            <td>{light.seec}</td>


                            </tr>

                        </tbody>
                    ))
                }




            </Table>
        </div>
    )
}

export function INSVIRAT(){
    return(
        <div id="">
            <Image id="flood_lt_fill" src="./insviraat.jpg" rounded/>
    
    </div>
)}