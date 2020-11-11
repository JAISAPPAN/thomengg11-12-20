
import {Image} from 'react-bootstrap'
import  Paginationone from '../components/Paginationone'
const Mctpdts1 =[
    {
        id:'1',       
        imgurl:'/Mct/1.jpg'
    },
    {
        id: '2',
        imgurl: '/Mct/2.png'
    },
    {
        id: '3',
        imgurl: '/Mct/3.png'
    },
    {
        id: '4',
        imgurl: '/Mct/4.jpg'
    },
    {
        id: '5',
        imgurl: '/Mct/5.png'
    },
    {
        id: '6',
        imgurl: '/Mct/6.jpg'
    },
    {
        id: '7',
        imgurl: '/Mct/7.png'
    },
    {
        id: '8',
        imgurl: '/Mct/8.jpg'
    },
    {
        id: '9',
        imgurl: '/Mct/9.png'
    },
    {
        id: '10',
        imgurl: '/Mct/10.jpg'
    },
    {
        id: '11',
        imgurl: '/Mct/11.png'
    },
    {
        id: '12',
        imgurl: '/Mct/12.png'
    },
    {
        id: '13',
        imgurl: '/Mct/13.jpg'
    },
    {
        id: '14',
        imgurl: '/Mct/14.png'
    },
    {
        id: '15',
        imgurl: '/Mct/15.jpg'
    },
    {
        id: '16',
        imgurl: '/Mct/16.png'
    },
    {
        id: '17',
        imgurl: '/Mct/17.jpg'
    },
    {
        id: '18',
        imgurl: '/Mct/18.png'
    }
    
   
]

import React from 'react'

export default function Mctpdts() {
    return (
        <div>
            {
                Mctpdts1.map(pdt=>(
                    <Image className="mctimg" src={pdt.imgurl} rounded />
                   
                ))
            }
            
        </div>
    )
}
