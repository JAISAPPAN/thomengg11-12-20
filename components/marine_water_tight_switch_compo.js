import { Container,Row,Col,Card, Button,Table} from "react-bootstrap"

const MwtsOne =[
    {
        id:'101',
        CatalogNumber:'1702/03',
        url:'/mwts/mwts101.png',
        Specification:'10/15 A 230 V, On/Off double pole rotary switch in cast Aluminium enclosure with 2 Nos. cable entries with Plastic cable glands, Nylon knob for operating on/off, SS hardware'
    },
    {
        id: '102',
        CatalogNumber:'1702 N',
        url: '/mwts/mwts102.png',
        Specification:'10/15A 230V On/Off Double Pole Rotary switch in Nylon Body with 2 Nos. cable entries with Cable Glands,Nylon knob for Oprating.'
    },
    {
        id: '3',
        CatalogNumber:'2522/23',
        url: '/mwts/mwts103.png',
        Specification:'Same as 1702/03 with cast Brass body.'
        
    },
    {
        id: '4',
        CatalogNumber:'2626',       
        url: '/mwts/mwts101.png',
        Specification: '10A. 230V Double Pole Rotary Switch With Cast Aluminium body Nylon knob for On/Off. cable Entries With Plastic cable Glands.'
    },
]

export default function Marine_water_tight_switch() {
    return (
        <div>
        <Container>
                <Row><Button size="lg" block >MARINE WATER TIGHT SWITCH </Button></Row>
            <Row>
            {
                MwtsOne.map(mwt=>(
                    <Card style={{ width: '13rem',height:'45.4rem' }}>
                        <Card.Img  variant="top" src={mwt.url} />
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


export function Marine_water_tight_switch_Tbl() {
    return (
        <div>
            <Table striped bordered hover variant="primary" >
                <thead>
                    <tr>
                        <th>Catalog Number</th>
                        <th>Specification</th>
                    </tr>
                </thead>

                {
                    MwtsOne.map(mwt => (
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
