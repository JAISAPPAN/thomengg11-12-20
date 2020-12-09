import { Card,Row,Button} from 'react-bootstrap'
import Link from 'next/link'

export const Ajmera_marine_nav_light_one =[
    {
        id: '1',
        url: '/MARINE NAVIGATION LIGHTS_AJMERA/1.jpg',
        cat: '811 NL- StarBoard Light'

    },
    {
        id: '2',
        url: '/MARINE NAVIGATION LIGHTS_AJMERA/2.jpg',
        cat: '812 NL- Port Light'

    },
    {
        id: '3',
        url: '/MARINE NAVIGATION LIGHTS_AJMERA/3.jpg',
        cat: '813 NL- Masthead Light'

    },  

]
export default function Ajmera_marine_nav_light_Pdt_one() {
    return (
        <div>
            <Row><Button size="lg" block>Singal Deck Navigation Light</Button></Row>
            
            <Row><Link href="/productEnquiryPage"><Button className="mt-2 btn-success ml-auto mr-4 mb-2" size="sm">MAKE ENQUIRY
            </Button></Link></Row>
            <Row>
            {Ajmera_marine_nav_light_one.map(lt=>(
                
                <Card style={{
                    marginRight: "auto", marginLeft: "auto",marginTop:"auto",marginBottom:"auto",width: "50%"
                }}>
                  
                    <Card.Img  src={lt.url}/>
                <Card.Text>{lt.cat}</Card.Text>
                   
                </Card>
            
            ))
        } 
            </Row>

        </div>
    )
}


export const Ajmera_marine_nav_light_two = [
    
    {
        id: '1',
        url: '/MARINE NAVIGATION LIGHTS_AJMERA/4.jpg',
        cat: '814 NL- Stern Light'

    },
    {
        id: '2',
        url: '/MARINE NAVIGATION LIGHTS_AJMERA/5.jpg',
        cat: '815- All-Round Light'

    },
]
export function Ajmera_marine_nav_light_Pdt_two()
{
    return (
        <div>
            <Row>
                {Ajmera_marine_nav_light_two.map(lt => (

                    <Card style={{
                        marginRight: "auto", marginLeft: "auto", marginTop:"1rem" ,width: "50%"
                    }}>

                        <Card.Img style={{
                            width: '23rem', marginLeft: '40px',
                        }} src={lt.url} />
                        <Card.Text>{lt.cat}</Card.Text>

                    </Card>

                ))
                }
            </Row>

        </div>
    )
}

export const Ajmera_marine_nav_light_three = [
    {
        id: '1',
        url: '/MARINE NAVIGATION LIGHTS_AJMERA/6.jpg',
        cat: '8101 NL-Deck StarBoard Light'

    },
    {
        id: '2',
        url: '/MARINE NAVIGATION LIGHTS_AJMERA/7.jpg',
        cat: '8102 NL-Deck Port Light'

    },
    {
        id: '3',
        url: '/MARINE NAVIGATION LIGHTS_AJMERA/8.jpg',
        cat: '8103 NL-Deck Masthead Light'

    },

]
export function Ajmera_marine_nav_light_Pdt_three()
{
    return (
        <div>
            <Row><Button size="lg" block>Double Deck Navigation signal Light</Button></Row>
            <Row>
                {Ajmera_marine_nav_light_three.map(lt => (

                    <Card>

                        <Card.Img style={{
                            width: '23rem', marginLeft: '40px',
                        }} src={lt.url} />
                        <Card.Text>{lt.cat}</Card.Text>

                    </Card>

                ))
                }
            </Row>

        </div>
    )
}


export const Ajmera_marine_nav_light_four = [

    {
        id: '1',
        url: '/MARINE NAVIGATION LIGHTS_AJMERA/9.jpg',
        cat: '8104-Deck Stern Light'

    },
    {
        id: '2',
        url: '/MARINE NAVIGATION LIGHTS_AJMERA/10.jpg',
        cat: '8105-Deck All-Round Light'

    },
]
export function Ajmera_marine_nav_light_Pdt_four()
{
    return (
        <div>
            <Row>
                {Ajmera_marine_nav_light_four.map(lt => (

                    <Card>

                        <Card.Img style={{
                            width: '23rem', marginLeft: '40px',
                        }} src={lt.url} />
                        <Card.Text>{lt.cat}</Card.Text>

                    </Card>

                ))
                }
            </Row>

        </div>
    )
}

export function Scope() {
    return (
        <div>
            <Button size="lg" block>The scope of application</Button>            
            <h3>Applied to the ships with the length 50m or above 50m as lamp signal liaison when night navigation.</h3>
            <Row><Button size="sm" block >Product characteristics</Button></Row>
            <ul>
            <li>The shell is made of high - strength engineering plastic PA+GF injection, the lampshade adopts injection of PC, lens hood adopts good quality stainless steel</li>
            <li>The signal lights have the whole seal structure, it is waterproof under the bad environment
            </li>
            <li>The connection between the lamp holder and the light base is clamshell type, it is easy to unscrew the top cover and replace the bulb, this structure is more stable than the previous plug - in type</li>
            <li>The signal lights adopt the signal light’s bulb which conform to the ship norm, and the average life is more than 700h</li>
            <li>The signal lights can work normally under the temperature -30°C - 55°C</li>
            <Row><Button size="sm" block >Adopted Standard</Button></Row>
            <li>Conform to [THE INTERNATIONAL REGULATIONS FOR PREVENTINGS COLLISION AT SEA, 1972] and [GRADE ENTRY NORMS FOR STEEL SHIPS]</li>
            <li>Conform to the international standard IEC60598- 1-2008</li>
            <li>Conform to the standard of marine electric signal light’s technical condition GB/T 3028-1995</li>
            </ul>
            </div>
    )
}

export const Ajmera_marine_nav_light_five = [
    {
        id: '1',
        url: '/MARINE NAVIGATION LIGHTS_AJMERA/11.jpg',
        tit: 'Specifications'
    },
    {
        id: '2',
        url: '/MARINE NAVIGATION LIGHTS_AJMERA/12.jpg',
        tit: 'Specifications'
    }    
]


export function SpecTable() {
    return (
        <div>
            
            { Ajmera_marine_nav_light_five.map(tbl=>(
                <Card>
                    <Card.Img src={tbl.url} />
                    
                </Card>
            ))}      
        </div>
    )
}


            
            
      

