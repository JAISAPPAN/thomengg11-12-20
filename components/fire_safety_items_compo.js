
import {Row,Image,Card,Button} from 'react-bootstrap'
import Link from 'next/link'
export const Fire_safety_items=[
    {
        id:'1',
        name:'no name',
        url:'/FIRE_SAFETY_ITEMS/1.jpg'
    },
    {
        id: '2',
        name: 'no name',
        url: '/FIRE_SAFETY_ITEMS/2.jpg'
    },
    {
        id: '3',
        name: 'no name',
        url: '/FIRE_SAFETY_ITEMS/3.jpg'
    },
    {
        id: '4',
        name: 'no name',
        url: '/FIRE_SAFETY_ITEMS/4.jpg'
    },
    {
        id: '5',
        name: '75KG DCP',
        url: '/FIRE_SAFETY_ITEMS/5.jpg' 
    },
    {
        id: '6',
        name: 'DCP-50KG',
        url: '/FIRE_SAFETY_ITEMS/6.jpg'
    },
    {
        id: '7',
        name: 'CO2 FLOODING SYSTEM',
        url: '/FIRE_SAFETY_ITEMS/7.jpg'
    },
    {
        id: '8',
        name: 'FM-200 -FIRE SUPPRESSION SYSTEM',

        url: '/FIRE_SAFETY_ITEMS/8.jpg'
    },
    {
        id: '9',
        name: 'FM-200 -FIRE SUPPRESSION SYSTEM',
        url: '/FIRE_SAFETY_ITEMS/9.jpg'
    },
    {
        id: '10',
        name: 'FM-200 -FIRE SUPPRESSION SYSTEM',
        url: '/FIRE_SAFETY_ITEMS/10.jpg'
    },
    {
        id: '11',
        name: 'FM-200 -FIRE SUPPRESSION SYSTEM', 
        url: '/FIRE_SAFETY_ITEMS/11.jpg'
    },
    {
        id: '12',
        name:'FM-200 -FIRE SUPPRESSION SYSTEM',
        url: '/FIRE_SAFETY_ITEMS/12.jpg'
    },
    {
        id: '13',
        name: '8. FM-200 -FIRE SUPPRESSION SYSTEM',
        url: '/FIRE_SAFETY_ITEMS/13.jpg'
    },
    {
        id: '14',
        name: 'FM-200 -FIRE SUPPRESSION SYSTEM',
        url: '/FIRE_SAFETY_ITEMS/14.jpg' 
    },
    {
        id: '15',
        name: 'no name',
        url: '/FIRE_SAFETY_ITEMS/15.jpg' 
    },
    {
        id: '16', 
        name: 'HOSE REEL DRUM', 
        url: '/FIRE_SAFETY_ITEMS/16.jpg' 
    },
    {
        id: '17',
        name: 'HOSE REEL DRUM',
        url: '/FIRE_SAFETY_ITEMS/17.jpg' 
    },
    {
        id: '18',
        name: 'SCBA',
        url: '/FIRE_SAFETY_ITEMS/18.jpg'
    },
    {
        id: '19',
        name: 'FIRE BLANKETS',
        url: '/FIRE_SAFETY_ITEMS/19.jpg' 
    },
    {
        id: '20',
        name: 'HOSE REEL DRUM',
        url: '/FIRE_SAFETY_ITEMS/20.jpg' 
    }, 
    {
        id: '21',
        name: 'FIRE DETECTION DEVICE', 
        url: '/FIRE_SAFETY_ITEMS/21.jpg'
    },
    {
        id: '22',
        name: 'FIRE DETECTION SYSTEM',
        url: '/FIRE_SAFETY_ITEMS/22.jpg' 
    },
    {
        id: '23',
        name: 'MANUAL CALL POINT',
        url: '/FIRE_SAFETY_ITEMS/23.jpg'
    },
    {
        id: '24',
        name: 'RESPONSE INDICATOR',
        url: '/FIRE_SAFETY_ITEMS/24.jpg'
    },
    {
        id: '25',
        name: 'JOCKEY PUMP',        

        url: '/FIRE_SAFETY_ITEMS/25.jpg'
    },
    {
        id: '26',
        name: 'FIRE FIGHTING FOAMS',
        url: '/FIRE_SAFETY_ITEMS/26.jpg' 
    },
    {
        id: '27',
        name: 'REMOTE CONTROLLED FIRE WATER',
        
        
        url: '/FIRE_SAFETY_ITEMS/27.jpg' 
    },
    {
        id: '28',
        name: 'FIRE NOZZLE',
        url: '/FIRE_SAFETY_ITEMS/28.jpg'
    },
    {
        id: '29',
        name: 'no name',
        url: '/FIRE_SAFETY_ITEMS/29.jpg'
    },
    {
        id: '30',
        name: 'no name',
        url: '/FIRE_SAFETY_ITEMS/30.jpg' 
    },
]

import React from 'react'

export default function Fire_safety_items_compo() {
    return (
        <div>
            <Row><Button size="lg" block>FIRE SAFETY ITEMS</Button></Row>
            <Row>
                {
                    Fire_safety_items.map(fire => (

                        <Card style={{ width: '21rem' }}>
                            <Image className="mctimg" src={fire.url} rounded />
                           <Row>
                            <Card.Text><Button size="sm" className="btn-dark ml-5 mt-2">{fire.name}</Button></Card.Text>
                                <Card.Text><Link href="/productEnquiryPage"><Button size="sm" className="btn-success ml-5 mt-2">ENQUIRE</Button></Link></Card.Text>
                            </Row>
                            </Card>

                    ))
                }
            </Row>
        </div>
    )
}

//<Card.Link href="/productEnquiryPage">Enquire</Card.Link>