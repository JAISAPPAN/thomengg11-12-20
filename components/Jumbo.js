
import {Image, Jumbotron,Nav,Row,Button} from 'react-bootstrap'
import style from '../styles/Home.module.css'
export function JumboIndex() {
    return (
        <div >
            <Jumbotron className={style.jumboIndex}>
                <h1>THOMSON ENGINEERS & CONTRACTORS</h1>
                <h2 id="iso">ISO 9001:2015 CERTIFIED COMPANY</h2>
                <h3>Work Contracts and Material Supply</h3>
                <p>
                    (Electrical, Instrument, Fire Safety and Mechanical Engineering Jobs)
        </p>
                <p>

                    <Nav.Link href="/About">Learn More</Nav.Link>
                </p>
            </Jumbotron>
        </div>
    )
}

export function JumboAbout()
{
    return (
         <div>
            <Jumbotron className={style.JumboAbout}>
           
                <h1>THOMSON ENGINEERS & CONTRACTORS</h1>
                <h2 >ISO 9001:2015 CERTIFIED COMPANY</h2>
                <h3>Work Contracts and Material Supply</h3>
                <p>
                    (Electrical, Instrument, Fire Safety and Mechanical Engineering Jobs)
        </p>
                <p>

                    <Nav.Link href="/About">Learn More</Nav.Link>
                </p>
        
            </Jumbotron>
             </div >
      
    )
}

export function JumboContact()
{
    return (
        <div id="jumboContact">
            <Jumbotron id="jumboContact">

                <h1>THOMSON ENGINEERS & CONTRACTORS</h1>
                <h2 id="iso">ISO 9001:2015 CERTIFIED COMPANY</h2>
                <h3>Work Contracts and Material Supply</h3>
                <p>
                    (Electrical, Instrument, Fire Safety and Mechanical Engineering Jobs)
        </p>
                <p>

                    <Nav.Link href="/About">Learn More</Nav.Link>
                </p>

            </Jumbotron>
        </div >

    )
}
export function JumboProduct()
{
    return (
        <div >
            <Jumbotron id="jumboProduct">

                <h1 id="jumbo_one">THOMSON ENGINEERS & CONTRACTORS</h1>
                
                <Row id="jumbo_logos">
                    <Image id="certlogo" src="./logos/1.png" ></Image>
                    <Image id="certlogo" src="./logos/2.jpg" ></Image>
                    <Image id="certlogo" src="./logos/3.png" ></Image>
                    <Image id="certlogo" src="./logos/4.png" ></Image>
                    <Image id="certlogo" src="./logos/5.jpg" ></Image>
                    <Image id="certlogo" src="./logos/6.gif" ></Image>
                    <Image id="certlogo" src="./logos/7.gif" ></Image>
                    <Image id="certlogo" src="./logos/8.png" ></Image>
                    <Image id="certlogo" src="./logos/9.png" ></Image>
                </Row>
            
               
            </Jumbotron>
        </div >

    )
}


export function JumboProduct_Ajmera()
{
    return (
        <div >
            <Jumbotron style={{marginTop:'20px'}}>

                <h1 id="jumbo_one">THOMSON ENGINEERS & CONTRACTORS.</h1>
                <Row id="jumbo_logos">
                <Image id="certlogo" src="./logos/1.png" ></Image>
                <Image id="certlogo" src="./logos/2.jpg" ></Image>
                <Image id="certlogo" src="./logos/3.png" ></Image>
                <Image id="certlogo" src="./logos/4.png" ></Image>
                <Image id="certlogo" src="./logos/5.jpg" ></Image>
                <Image id="certlogo" src="./logos/6.gif" ></Image>
                <Image id="certlogo" src="./logos/7.gif" ></Image>
                <Image id="certlogo" src="./logos/8.png" ></Image>
                <Image id="certlogo" src="./logos/9.png" ></Image>
                </Row>
                <Row><Button size="lg" block ><strong>AJMERA BRANDED</strong> - MARINE NAVIGATION LIGHTS</Button></Row>

            </Jumbotron>
        </div >

    )
}

