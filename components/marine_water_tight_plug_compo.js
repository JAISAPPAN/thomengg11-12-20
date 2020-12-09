import { Container, Row, Col, Card,Table,Button} from "react-bootstrap"
import Link from 'next/link'

const Mwtp = [
    {
        id: '201',
        CatalogNumber: '2601 N/P',
        url: '/mwtp/mwtp201.png',
        Specification: '10A/250V, 3 pin Nylon body plug with procelain insertion with Brass pins.'
    },
    {
        id: '202',
        CatalogNumber: '2601/P',
        url: '/mwtp/mwtp202.png',
        Specification: '10A/250V, 3 pin Nylon body plug with procelain insertion with cast Aluminium body.'
    },
    {
        id: '203',
        CatalogNumber: '2531/P',
        url: '/mwtp/mwtp203.png',
        Specification: '10A/250V, 3 pin Nylon body plug with procelain insertion with Brass body.' 

    },
    {
        id: '204',
        CatalogNumber: '2612/P',
        url: '/mwtp/mwtp204.png',
        Specification: '15A/250V 3 pin cast Aluminium body with bekelite insertion with Brass pins'
    },
]

const MwtpTbl = [
    {
        id: '201',
        CatalogNumber: '2601 N/P',
        url: '/mwtp/mwtp201.png',
        Specification: '10A/250V, 3 pin Nylon body plug with procelain insertion with Brass pins.'
    },
    {
        id: '202',
        CatalogNumber: '2601/P',
        url: '/mwtp/mwtp202.png',
        Specification: '10A/250V, 3 pin Nylon body plug with procelain insertion with cast Aluminium body.'
    },
    {
        id: '203',
        CatalogNumber: '2531/P',
        url: '/mwtp/mwtp203.png',
        Specification: '10A/250V, 3 pin Nylon body plug with procelain insertion with Brass body.'

    },
    {
        id: '204',
        CatalogNumber: '2612/P',
        url: '/mwtp/mwtp204.png',
        Specification: '15A/250V 3 pin cast Aluminium body with bekelite insertion with Brass pins'
    },
    {
        id: '205',
        CatalogNumber: '2534/P',
        
        Specification: '15A/250V 3 pin cast Aluminium body with bekelite insertion with Brass body'
    },
    {
        id: '206',
        CatalogNumber: '2620 N/P',
        
        Specification: '10 A, 230 V, 3 pin Elbow type Side entry Nylon body plug top with bakelite insertion with brass contact pipe. Plug with locking nut.'
    },
    {
        id: '207',
        CatalogNumber: '2621 N/P',
        
        Specification: '10 A, 230 V, 3 pin Top entry Nylon body plug top with bakelite insertion with brass contact pipe. Plug with locking nut.'
    },
]

export default function Marine_water_tight_plug_compo()
{
    return (
        <div>
            
  
            <Row><Button size="lg" block >MARINE WATER TIGHT PLUG</Button></Row>
            <Row><Link href="/productEnquiryPage"><Button className="mt-2 btn-success ml-auto 
            mr-4" size="sm">MAKE ENQUIRY</Button></Link></Row>
            
            <Row>  
                    {
                        Mwtp.map(mwt => (
                            <Card style={{ width: '15rem',height:'56rem' }}>
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

         

        </div>
    )}

export function Marine_water_tight_plug_Tbl()
{
    return (
        <div>
            <Button size="lg" block >Product Details</Button>
            <Table striped bordered hover variant="info">
                <thead>
                    <tr>                        
                        <th>Catalog Number</th>
                        <th>Specification</th>
                    </tr>
                </thead>
                
                {
                    MwtpTbl.map(mwt=>(
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
                    
                
            