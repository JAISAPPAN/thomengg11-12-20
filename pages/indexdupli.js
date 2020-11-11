import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from './Header'


export default function Home()
{
    const people = [
        { v: "car", name: "Mathew" },
        { v: "activa", name: "Member Mini" },
        { v: "ship", name: "Vijayamma" },

    ]


    return (
        <div>
            <Header />

            {
                people.map(e => (
                    <div>
                        <Link as={`/${e.v}/${e.name}`} href="/[vehicle]/[person]"><a>Navigate to {e.name}'s {e.v}</a></Link>
                    </div>
                ))
            }
        </div>



    )
}
