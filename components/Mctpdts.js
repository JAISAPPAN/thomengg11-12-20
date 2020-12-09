
import {Image,Button,Card,Row} from 'react-bootstrap'
import  Paginationone from '../components/Paginationone'
import Link from 'next/link'
const Mctpdts1 =[
    {
        id:'1',       
        imgurl:'/Mct/1.jpg',
        name:'NAME?'
    },
    {
        id: '2',
        imgurl: '/Mct/2.png',
        name: 'NAME?'
    },
    {
        id: '3',
        imgurl: '/Mct/3.png',
        name: 'NAME?'
    },
    {
        id: '4',
        imgurl: '/Mct/4.jpg',
        name: 'NAME?'
    },
    {
        id: '5',
        imgurl: '/Mct/5.png',
        name: 'NAME?'
    },
    {
        id: '6',
        imgurl: '/Mct/6.jpg',
        name: 'NAME?'
    },
    {
        id: '7',
        imgurl: '/Mct/7.png',
        name: 'NAME?'
    },
    {
        id: '8',
        imgurl: '/Mct/8.jpg',
        name: 'NAME?'
    },
    {
        id: '9',
        imgurl: '/Mct/9.png',
        name: 'NAME?'
    },
    {
        id: '10',
        imgurl: '/Mct/10.jpg',
        name: 'NAME?'
    },
    {
        id: '11',
        imgurl: '/Mct/11.png',
        name: 'NAME?'
    },
    {
        id: '12',
        imgurl: '/Mct/12.png',
        name: 'NAME?'
    },
    {
        id: '13',
        imgurl: '/Mct/13.jpg',
        name: 'NAME?'
    },
    {
        id: '14',
        imgurl: '/Mct/14.png',
        name: 'NAME?'
    },
    {
        id: '15',
        imgurl: '/Mct/15.jpg',
        name: 'NAME?'
    },
    {
        id: '16',
        imgurl: '/Mct/16.png',
        name: 'NAME?'
    },
    {
        id: '17',
        imgurl: '/Mct/17.jpg',
        name: 'NAME?'
    },
    {
        id: '18',
        imgurl: '/Mct/18.png',
        name: 'NAME?'
    }
    
   
]



export default function Mctpdts() {
    return (
        <div>
            <Row><Button size="lg" block >MULTI CABLE TRANSIT</Button></Row>
            <Row>
                {
                    Mctpdts1.map(mct => (

                        <Card style={{ width: '21rem' }}>
                            <Image className="mctimg" src={mct.imgurl} rounded />
                            <Row>
                                <Card.Text><Button size="sm" className="btn-dark ml-5 mt-2">{mct.name}</Button></Card.Text>
                                <Card.Text><Link href="/productEnquiryPage"><Button size="sm" className="btn-success ml-5 mt-2">ENQUIRE</Button></Link></Card.Text>
                            </Row>
                        </Card>

                    ))
                }
            </Row>
        </div>
    )
}
