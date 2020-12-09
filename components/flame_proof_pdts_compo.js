
import {Row,Card,Image,Button} from 'react-bootstrap'
import Link from 'next/link'

const flameproofpdts = [
    {
        id: '1',
        imgurl: '/flameproof/1.jpg'
    },
    {
        id: '2',
        imgurl: '/flameproof/2.jpg'
    },
    {
        id: '3',
        imgurl: '/flameproof/3.jpg'
    },
    {
        id: '4',
        imgurl: '/flameproof/4.jpeg'
    },
    {
        id: '5',
        imgurl: '/flameproof/5.jpg'
    },
    {
        id: '6',
        imgurl: '/flameproof/6.png'
    },
    {
        id: '7',
        imgurl: '/flameproof/7.jpg'
    },
    {
        id: '8',
        imgurl: '/flameproof/8.jpg'
    },
    {
        id: '9',
        imgurl: '/flameproof/9.jpg'
    },
    {
        id: '10',
        imgurl: '/flameproof/10.jpg'
    },
    {
        id: '11',
        imgurl: '/flameproof/11.jpg'
    },
    {
        id: '12',
        imgurl: '/flameproof/12.jpg'
    },
    {
        id: '13',
        imgurl: '/flameproof/13.jpg'
    },
    {
        id: '14',
        imgurl: '/flameproof/14.jpeg'
    },
    {
        id: '15',
        imgurl: '/flameproof/15.jpg'
    },
    {
        id: '16',
        imgurl: '/flameproof/16.jpg'
    },
    {
        id: '17',
        imgurl: '/flameproof/17.jpg'
    },
    {
        id: '18',
        imgurl: '/flameproof/18.jpg'
    },
    {
        id: '19',
        imgurl: '/flameproof/19.jpeg'
    },
    {
        id: '20',
        imgurl: '/flameproof/20.jpg'
    },
    {
        id: '21',
        imgurl: '/flameproof/21.jpeg'
    },
    {
        id: '22',
        imgurl: '/flameproof/22.jpg'
    },
    {
        id: '23',
        imgurl: '/flameproof/23.jpeg'
    },
    {
        id: '24',
        imgurl: '/flameproof/24.jpg'
    },
    {
        id: '25',
        imgurl: '/flameproof/25.jpeg'
    }
    
]



export default function Flame_proof_pdts_compo() {
    return (
        <div>
            
            <Row>
                {
                    flameproofpdts.map(flame => (

                        <Card style={{ width: '21rem' }}>
                            <Image className="mctimg" src={flame.imgurl} rounded />
                            <Row>
                                <Card.Text><Button size="sm" className="btn-dark ml-5 mt-2">{flame.name}</Button></Card.Text>
                                <Card.Text><Link href="/productEnquiryPage"><Button size="sm" className="btn-success ml-5 mt-2">ENQUIRE</Button></Link></Card.Text>
                            </Row>
                        </Card>

                    ))
                }
            </Row>
            <hr/>
        </div>
    )
}
