import { Container, Row, Col, Card, Table, Button } from "react-bootstrap"

const Mwtsocket = [
    {
        id: '301',
        CatalogNumber: '2601 N/S',
        url: '/mwtsocket/mwts301.png',
        Specification: '10A/250V, 3 pin Nylon body socket with procelain insertion & procelain connector with brass terminals  with two cable entries with plastic cable glands. Plastic/ Metallic cap with chain for socket when not in use. SS hardware.'
    },
    {
        id: '302',
        CatalogNumber: '2601/S',
        url: '/mwtsocket/mwts302.png',
        Specification: '10A/250V, 3 pin Cast Aluminium body socket with procelain insertion & procelain connector with brass terminals  with two cable entries with plastic cable glands. Plastic/ Metallic cap with chain for socket when not in use. SS hardware.'
    },
    {
        id: '303',
        CatalogNumber: '2532/S',
        url: '/mwtsocket/mwts303.jpg',
        Specification: '10A/250V, 3 pin Cast Aluminium body socket with procelain insertion & procelain connector with brass terminals  with two cable entries with plastic cable glands. Plastic/ Metallic cap with chain for socket when not in use. Cast Brass Body.'

    },
    {
        id: '304',
        CatalogNumber: '2613/S',
        url: '/mwtsocket/mwts304.png',
        Specification: 'Same as per 2601/S suitable for 15A/250V with bekelite insertion'
    },
]

const MwtsocketTbl = [
    {
        id: '301',
        CatalogNumber: '2601 N/S',
        
        Specification: '10A/250V, 3 pin Nylon body socket with procelain insertion & procelain connector with brass terminals  with two cable entries with plastic cable glands. Plastic/ Metallic cap with chain for socket when not in use. SS hardware.'
    },
    {
        id: '302',
        CatalogNumber: '2601/S',
        
        Specification: '10A/250V, 3 pin Cast Aluminium body socket with procelain insertion & procelain connector with brass terminals  with two cable entries with plastic cable glands. Plastic/ Metallic cap with chain for socket when not in use. SS hardware.'
    },
    {
        id: '303',
        CatalogNumber: '2532/S',
       
        Specification: '10A/250V, 3 pin Cast Aluminium body socket with procelain insertion & procelain connector with brass terminals  with two cable entries with plastic cable glands. Plastic/ Metallic cap with chain for socket when not in use. Cast Brass Body.'

    },
    {
        id: '304',
        CatalogNumber: '2613/S',
        
        Specification: 'Same as per 2601/S suitable for 15A/250V with bekelite insertion'
    },
    
    {
        id: '305',
        CatalogNumber: '2535/S',

        Specification: 'Same as per 2613/S - cast Brass body'
    },
    {
        id: '306',
        CatalogNumber: '2601/SF',

        Specification: '10 A. 250 V. 3 pin female type socket. Cast Aluminium body socket with cap and chain.'
    },
    {
        id: '307',
        CatalogNumber: '2612/SF',

        Specification: '10 A. 250 V. 3 pin female type socket. Cast Aluminium body socket with cap and chain -suitable for 15A. 250V'
    },
    {
        id: '308',
        CatalogNumber: '2622 N/S',

        Specification: '10A. 230V. 3 pin Nylon body receptacles with locking cap with chain. Bakelite insertion with brass pins 2 nos. cable entries with plastic cable glands. SS hardware..'
    },
]

export default function MwtsocketPdts()
{
    return (
        <div>
            <Container>
                
                <Row><Button size="lg" block >MARINE WATER TIGHT SOCKET</Button></Row>
                <Row>
                    {
                        Mwtsocket.map(mwt => (
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

            </Container>

        </div>
    )
}

export function MwtsocketTable()
{
    return (
        <div>
            <Row><Button size="lg" block >Product Details</Button></Row>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Catalog Number</th>
                        <th>Specification</th>
                    </tr>
                </thead>

                {
                    MwtsocketTbl.map(mwt => (
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