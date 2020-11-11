import {Card, Container, Table,Row, Button} from 'react-bootstrap'

export const Marine_vibration_proof_fitting_Tbl_one = [

    {
        id: '1',
        CatalogNumber: '9220 F',
        url: '/marine_vibration_proof_fitting/1.png',

    },

    {
        id: '2',
        CatalogNumber: '9220 MS',
        url: '/marine_vibration_proof_fitting/2.png',
        Specification: 'Cast Aluminium body emergency use bulkhead light fitting with clear glass and Aluminium body frame. Brass SBC lamp holder for 25W. 24V. lamp. 2 nos. Cable entries with plastic cable glands.'
    }


]

export default function Mvpf_Pdts1()
{
    return (
        
        
        <div>
            
            <Row><Button size="lg" block>MARINE VIBRATION PROOF FITTING</Button></Row>
            <Row >

                    {
                        Marine_vibration_proof_fitting_Tbl_one.map(mwt => (
                            <Card id="pdt_img_first">
                                <Card.Img  src={mwt.url} />
                                
                                <Card.Footer>CATALOG NUMBER -{mwt.CatalogNumber}</Card.Footer>

                            </Card>
                        ))
                    }
           </Row>                
            
                    
                

            

        </div>
        
    )
}

export const Marine_vibration_proof_fitting_Tbl_two = [
    {
        id: '1',
        CatalogNumber: '9220/F',
        url: '',
        Specification: 'Vibration resistance and drip proof engine room light fitting suitable for 2 x 20W. 230V. 50hz fluorescent tubes arranged side by side. The fitting made from Fibre body & provided with clear one piece acrylic cover is firmly secured to the housing with stainless steel toggles and fitted with rubber gasket to make totally insect free. The fitting provided with 2 nos. 20W copper polyester filled ballasts, power factor improvement capacitor, starter, lamp holder, 2 nos. cable entries, Brass glands etc. Duly wired up to a suitable connector with provision for earthing. 2 nos. MS brackets provided with lining for vibration mounting.'
    },
    {
        id: '2',
        CatalogNumber: '9220/MS',
        url: '',
        Specification: '--do-- MS powder coated body'
    },
    {
        id: '3',
        CatalogNumber: '9240/F',
        url: '',
        Specification: 'Same as per 9220/F - suitable for 2 nos. of 40W tubes'
    },
    {
        id: '4',
        CatalogNumber: '9240/MS',
        url: '',
        Specification: '--do-- MS powder coated body.'
    }

]



export function Mvpf_Table1()
{
    return (
        <div>
            <Button size="lg" block>Product Details</Button>
            
            <Table id="marine_tbl_1"striped bordered hover variant="info">
                <thead>
                    <tr>
                        <th>Catalog Number</th>
                        <th>Specification</th>
                    </tr>
                </thead>

                {
                    Marine_vibration_proof_fitting_Tbl_two.map(mwt => (
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

export const Marine_vibration_proof_fitting_Tbl_three = [

    {
        id: '1',
        CatalogNumber: '9212/F',
        url: '/marine_vibration_proof_fitting/3.png',

    },

    {
        id: '2',
        CatalogNumber: '9209 F/MS',
        url: '/marine_vibration_proof_fitting/4.png',

    }

]
export function Mvpf_Pdts2()
{
    return (
        <div>
            <Row><Button size="lg" block>MARINE LED VIBRATION PROOF LIGHR FITTING</Button></Row>   
                
                <Row>
                    {
                        Marine_vibration_proof_fitting_Tbl_three.map(mwt => (
                            <Card style={{width:'42rem'}}>
                                <Card.Img src={mwt.url} />
                                <Card.Footer>CATALOG NUMBER - {mwt.CatalogNumber}</Card.Footer>

                            </Card>
                        ))
                    }
                
            </Row>
        

        </div>
    )
}

export const Marine_vibration_proof_fitting_Tbl_four = [
    {
        id: '1',
        CatalogNumber: '9212/F',

        Watt: '24W',
        AnnualPowerConsumption: '72KW',
        MaxLumes: '2400lm',
        Specification: 'Vibration resistance and drip proof Engine room light fitting suitable for LED 24W. 240V. 50 hz The fitting made from Fiber body & provided with one piece hinged Polycarbonate milky cover is firmly secured to the housing with stainless steel toggles and fitted with rubber gasket to make totally insect free. The fitting with 24W. LED PCB with aluminium sheet for proper heat dissipation. The fitting provided with 2 nos. 12W LED Heavy Duty Electronic Driver with power factor imp., 2 nos. cable entries PG. cable glands etc. Duly wired up to a suitable connector with provision for earthing 2 nos. MS brackets for vibration mounting.'

    },
    {
        id: '2',
        CatalogNumber: '9212/AL',
        Watt: '24W',
        AnnualPowerConsumption: '72KW',
        MaxLumes: '2400lm',
        Specification: '... do ... but fitting made from Aluminium sheet body duly powder coated.'

    },
    {
        id: '3',
        CatalogNumber: '9212/MS',

        Watt: '12W',
        AnnualPowerConsumption: '72KW',
        MaxLumes: '2400lm',
        Specification: '... do ... but fitting made from CRCA body duly powder coated.'

    },
    {
        id: '4',
        CatalogNumber: '9209/F/AL/MS',

        Watt: '18W',
        AnnualPowerConsumption: '52KW',
        MaxLumes: '1760lm',
        Specification: 'Same as per 9212 but fitting with 2 nos. 9W. LED retrofit 2s tubes'

    },
    {
        id: '5',
        CatalogNumber: '9218/F/AL/MS',

        Watt: '36W',
        AnnualPowerConsumption: '104KW',
        MaxLumes: '3500lm',
        Specification: 'Same as per 9209 but fitting with 2 nos. 18W. LED retrofit 4s tubes.'

    },
]

export function Mvpf_Table2()
{
    return (
        <div>
            <Row> <Button size="md" block >Product Details</Button></Row>   
            <Table striped bordered hover variant="info">
                <thead>
                    <tr>
                        <th>Catalog Number</th>
                        <th>Specification</th>
                    </tr>
                </thead>

                {
                    Marine_vibration_proof_fitting_Tbl_four.map(mwt => (
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

export function Mvpf_Table3()
{
    return (
        <div>
            <Row> <Button size="md" block >Product Specification</Button></Row>         
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
                    Marine_vibration_proof_fitting_Tbl_four.map(mwt => (
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