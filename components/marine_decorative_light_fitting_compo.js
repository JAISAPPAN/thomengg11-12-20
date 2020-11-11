
import {Card,Table,Button,Row,Image} from 'react-bootstrap'
export const DecorativeFloodLtPdt1=[
    {
        id:'1',
        name:'/DECORATIVE LIGHT FITTING/1.png',
        catalog:'CAT. NO. 8220 MS'
    },
    {
        id: '2',
        name: '/DECORATIVE LIGHT FITTING/2.png',
        catalog: 'CAT. NO. 7220 MS'
    },
    {
        id: '3',
        name: '/DECORATIVE LIGHT FITTING/3.png',
        catalog: 'CAT. NO. 6110 MS'
    },
   
]
export const DecorativeFloodLtPdt2 = [
    {
        id: '4',
        name: '/DECORATIVE LIGHT FITTING/4.png',
        catalog: 'CAT. NO. 3004'
    },
    {
        id: '5',
        name: '/DECORATIVE LIGHT FITTING/5.png',
        catalog: 'CAT.NO. 7218'
    },
    {
        id: '6',
        name: '/DECORATIVE LIGHT FITTING/6.png',
        catalog: 'CAT. NO. 6109'
    },
    
]


export default function Marine_decorative_light_fitting_Pdt1() {
    return (
        <div>
        <Row>
        {
                DecorativeFloodLtPdt1.map(light=>(

                    <Card>
                        
                        <Card.Img style={{ width: '21rem' }} src={light.name}></Card.Img>
                        <Card.Text>{light.catalog}</Card.Text>
                    </Card>
                ))
        }
       
            </Row>   
        </div>
    )
}


export function Marine_decorative_light_fitting_Pdt2()
{
    return (
        <div>
        <Row>
            {
                DecorativeFloodLtPdt2.map(light => (

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




export const DecorativeFloodLtTbl1=[
    {
        id: '1',
        cat:'8220',
        Spec:'nos cable entries with rubber grommets etc., duly wired up to a suitable connector with provision for earthing.'
    },
    {
        id: '2',
        cat: '8240',
        Spec: '-do-- suitable for 2 nos. of 40W. Tubes.'
    },
    {
        id: '3',
        cat: '7120',
        Spec: 'Cornic well decorative fitting suitable for 1 x 20W. 230V. 50 hz fluorescent tube, made from CRCA MS sheet, duly powder coated with opal/clear acrylic diffuser. Fitting provided with 2 nos cable entries, duly wired with 20W. polyester filled copper heavy duty choke, spring loaded bi-pin rotary holder, starter suitable condenser for PF. improvement.'
    },
    {
        id: '4',
        cat: '7220',
        Spec: '--do-- suitable for 2 nos. of 20W. tubes.'
    },
    {
        id: '5',
        cat: '6120',
        Spec: 'Mirror light fitting suitable for 1 x 20W. tubes. MS body finished with powder coated duly wire with 1 number heavy duty copper choke, bi-pin rotary holder, starter with seat, condenser for power factor improvement, suitable for 230V. 1PH. AC with built in piano type switch & 2 pin socket.'
    },
    {
        id: '6',
        cat: '6110',
        Spec: '--do-- suitable for 10W/9W tube.'
    },
   
]

export function Marine_ecorative_light_fitting_Tbl1()
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
                    DecorativeFloodLtTbl1.map(light => (
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
export const DecorativeFloodLtTbl2=[
    {
        id:'',
        cat:'3001',
        wat:'18W',
        power:'52KW',
        lumes:'1760 lm',
        seec:'Recess type Decorative LED Light fitting. 18W. 240v CRCA body with Clear polycarbonate shade. Fitting with 2 nos. 9W. LED retrofit tubes.'
    },
    {
        id: '',
        cat: '3005',
        wat: '36W',
        power: '104KW',
        lumes: '3500 lm',
        seec: 'Recess type Decorative LED Light fitting. 36W. 240v CRCA body with Clear polycarbonate shade. Fitting with 2 nos. 18W. LED retrofit tubes.'
    },
    {
        id: '',
        cat: '7218',
        wat: '18W',
        power: '58KW',
        lumes: '1760 lm',
        seec: 'Cronic well decorative fitting suitable for LED 18W 240V, 50hz, made from CRCA MS sheet, duly powder coated with opal/Clear polycarbonate diffuser. Fitting provided with 2 nos cable entries, Fitting With 2 nos. 9W. LED tubes.'
    },
    {
        id: '',
        cat: '6109',
        wat: '09W',
        power: '27KW',
        lumes: '900 lm',
        seec: 'Mirror light fitting suitable for 9W 2 LED retrofit tubes.CRCA body finished, duly powder coated wired up with 1 number 2 pin socket and switch.Clear / Opal Polycarbonate shade.'
    },

]

export function Marine_ecorative_light_fitting_Tbl2()
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
                    DecorativeFloodLtTbl2.map(light => (
                        <tbody>
                            <tr>
                                <td>{light.cat}</td>
                                
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
        <div>
            <Image id="decorative_lt_fill" src="./insviraat.jpg" rounded/>
    
    </div>
)}

export function Marine_ecorative_light_fitting_Tbl3()
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
                        
                    </tr>
                </thead>

                {
                    DecorativeFloodLtTbl2.map(light => (
                        <tbody>
                            <tr>
                                <td>{light.cat}</td>
                                <td>{light.wat}</td>
                                <td>{light.power}</td>
                                <td>{light.lumes}</td>
                               


                            </tr>

                        </tbody>
                    ))
                }
            </Table>
        </div>
    )
}

