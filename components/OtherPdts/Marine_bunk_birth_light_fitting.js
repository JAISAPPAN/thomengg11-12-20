import { Container, Row, Col, Card, Table,Button } from "react-bootstrap"



const mbblf_Tbl1 = [
    {
        id: '1',
        CatalogNumber: 'Berth Light with Dimmer',
        url: '/marine-bunk-berth-light-fitting/1.png',
        Specification: 'Brass / SS body decorative type light fitting with Dimmer. Adjustable top lid to control flow of light. Powder coated finish. Brass lamp holder suitable for 25W lamp.'
    },
    {
        id: '2',
        CatalogNumber: '5152 SS/MS',
        url: '/marine-bunk-berth-light-fitting/2.png',
        Specification: 'SS/MS body decorative type light fitting with On/Of Piano Switch. Adjustable top lid to control flow of light. Powder coated finish. Brass lamp holder suitable for 8W CFL lamp.'
    }
    

]

const mbblf_Tbl2 = [
    {
        id: '1',
        CatalogNumber: '5106',
        url: '/marine-bunk-berth-light-fitting/3.png',
        Watt: '6W',
        AnnualPowerConsumption: '18KW',
        MaxLumes: '600lm',
        
    },
    {
        id: '2',
        CatalogNumber: '5106',
        url: '/marine-bunk-berth-light-fitting/4.png',
        Watt: '6W',
        AnnualPowerConsumption: '18KW',
        MaxLumes: '1200lm',
       
    }


]



export default function Mbblf_Pdts1()
{
    return (
        <div>
            <Row><Button size="lg" block>MARINE BUNK/BERTH LIGHT FITTING</Button></Row>
            <Container>
               
                <Row>
                    {
                        mbblf_Tbl1.map(mwt => (
                            <Card style={{ width: '30rem' }}>
                                <Card.Img variant="top" src={mwt.url} />
                                <Card.Body>
                                    <Card.Title>CATALOG NUMBER -{mwt.CatalogNumber}</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>

                                
                            </Card>
                        ))
                    }
                </Row>

            </Container>

        </div>
    )
}
export  function Mbblf_Pdts2()
{
    return (
        <div>
            <Row><Button size="lg" block>Marine Bunk/Berth LED Light Fitting</Button></Row>
            <Container>
                
                
                <Row>
                    {
                        mbblf_Tbl2.map(mwt => (
                            <Card style={{width:'34rem',height:'40rem'}}>
                                <Card.Img variant="top" src={mwt.url} />
                                <Card.Body>
                                    <Card.Title>CATALOG NUMBER -{mwt.CatalogNumber}</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>


                            </Card>
                        ))
                    }
                </Row>

            </Container>

        </div>
    )
}

export function Mbblf_Table1()
{
    return (
        <div>
            
            <Table striped bordered hover variant="info">
                <thead>
                    <tr>
                        <th>Catalog Number</th>
                        <th>Specification</th>
                    </tr>
                </thead>

                {
                    mbblf_Tbl1.map(mwt => (
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


export function Mbblf_Tbl2()
{
    return (
        <div>
            <Row><Button size="lg" block>Product Specifications</Button></Row>
            
        
        
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
                                mbblf_Tbl2.map(mwt => (
                                    <tbody>
                                        <tr>
                                            <td>{mwt.CatalogNumber}</td>
                                            <td>{mwt.Watt}</td>
                                            <td>{mwt.AnnualPowerConsumption}</td>
                                            <td>{mwt.MaxLumes}</td>

                                        </tr>

                                    </tbody>
                                ))
                            }
                        </Table>
        
        
   
        
            
            
        
            
            

        </div>
    )
}

export function MarineBunk_Para(){
    return(
    <div>
        <p>5106 -- Aluminium body decorative type. 6W. 240V. LED light fitting with on / off piano switch. Adjustable top lid to control flow of light duly powder coated with opal shade finish. 6W LED PCB with suitable LED driver.</p>

        <p>5107 -- CRCA duly Powder coated body rectengular type with S.S cover 6W. 240V. LED light fitting with pin socket and on/of Switch.Fitting With Suitable LED Driver.</p>
    </div>
    )
}

