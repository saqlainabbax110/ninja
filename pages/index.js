import Head from 'next/head'
import Footer from '@/comps/Footer'
import Navbar from '@/comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Image from 'next/image'

export default function Home() {
  return (
    <>
 
    <Head>
      <title>Ninja List | Home</title>
    </Head>
    
    <h1 className={styles.title}>Home Page</h1>
    <Image src="/n.jpg" width={1000} height={400} />
    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate quidem sint quis tenetur, ullam, perferendis inventore, voluptatibus enim quasi voluptas! Similique accusantium vel assumenda exercitationem fugit dolorum nihil veniam.</p>
    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium illum maiores laboriosam, molestias magni excepturi! Architecto adipisci laudantium libero dignissimos sequi, reiciendis ad deleniti nulla, suscipit, aperiam temporibus ea! Minus?</p>

    <Link href="/ninjas"  className={styles.btn}>
      See Ninjas Listing
    </Link>
 
    </>
  )
}
