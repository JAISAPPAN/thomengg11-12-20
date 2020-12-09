
import {Card,Image,Row,Button,Col} from 'react-bootstrap'
import Link from 'next/link'

export const RubberMat =[
{
    id: '1',
        imgurl: '/Insulating_rubber_mat/1.jpeg',
        name:'NAME?'
},
    {
        id: '2',
        imgurl: '/Insulating_rubber_mat/2.jpg',
        name: 'NAME?'
    },
    {
        id: '3',
        imgurl: '/Insulating_rubber_mat/3.jpg',
        name: 'NAME?'
    },
    {
        id: '4',
        imgurl: '/Insulating_rubber_mat/4.jpg',
        name: 'NAME?'
    },
    {
        id: '5',
        imgurl: '/Insulating_rubber_mat/5.jpg',
        name: 'NAME?'
    },
    {
        id: '6',
        imgurl: '/Insulating_rubber_mat/6.jpg',
        name: 'NAME?'
    },
    {
        id: '7',
        imgurl: '/Insulating_rubber_mat/7.jpg',
        name: 'NAME?'
    },
    {
        id: '8',
        imgurl: '/Insulating_rubber_mat/8.jpg',
        name: 'NAME?'
    },
    
]



export default function Rubbermat_component() {
    return (
        <div>
            <Row><Button size="lg" block >INSULATING RUBBER MATS</Button></Row>
            <Row>
            {
                RubberMat.map(rmat=>(
                   
                    <Card style={{ width: '21rem' }}>
                        <Image className="mctimg" src={rmat.imgurl} rounded/>
                        <Row>
                            <Card.Text><Button size="sm" className="btn-dark ml-5 mt-2">{rmat.name}</Button></Card.Text>
                            <Card.Text><Link href="/productEnquiryPage"><Button size="sm" className="btn-success ml-5 mt-2">ENQUIRE</Button></Link></Card.Text>
                        </Row>
                    </Card>
                    
                ))
            }
                    </Row>
        </div>
    )
}
<h1>Standard- IEC 61111:2009/ BS EN 61111:2009</h1>

export function Rubbermat_compo() {
    return (
        <div>
        
            <Row id="flameproofmargin">

                <Col sm={{ span: 5, offset: 1 }} >
                   
                    <h3>ELECTRICAL INSULATING MATTING / ELECTRICAL SWITCHBOARD MATTING</h3>
                    <p>Electrical insulating matting of rubber covered under IEC 61111 is made of rubber compound suitable for providing the electrical safety to the workmen working around the possible areas of electrical shock. It is specially designed for use in front and rear side of electrical switchboards, High voltage equipments and act as a safeguard equipment from electrical shock due to leakage of current, shot circuit or any other.</p>
                    <p>Application- In power generation plants, sub-stations, commercial buildings, industrial sheds, marine applications and any other area of electrical shock prone.</p>



                </Col>
                <Col sm={{ span: 5}}>
                    <div>
                        <h3>Features</h3>
                        <ul>
                            <li>ISI Marked, IS: 5424/1969 ERDA& CPRI Type Tested insulating mats.</li>
                            <li>Tests and specifications also meet BS 921, IEC 61111, ASTM.</li>
                            <li>For both A.C. and D.C. applications.</li>
                            <li>Di-electric Strength 65KV (650000volts)</li>
                            <li>AC proof Voltage up to 36KV.</li>
                            <li>Low Temperature resistant.</li>
                            <li>Acid, Alkali,Diesel& Transformer oil resistant.</li>
                            <li>Flame Retardant.</li>
                            <li>Good Aging properties.</li>
                            <li>High Insulation resistance exceeding 1100000</li>
                            <li>High tensile strength and elongation properties.</li>
                            <li>Leakage Current less than 1mA.</li>
                        </ul>
                    </div>


                </Col>
            </Row>
        </div>
    )
}
