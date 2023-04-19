import Link from "next/link";
import Head from 'next/head'
import { useEffect } from "react";
import { useRouter } from "next/router";


const NotFound = () => {

const router = useRouter();

    useEffect(() => {
       setTimeout(() => {
        router.push("/")
       }, 3000);
    }, [])


    return ( 
        <>

        <Head>
        <title>Ninja List | 404</title>
      </Head>

        <div className="not-found">
            <h1>Oooops.......</h1>
            <h2>The page cannot be found</h2>
            <p>G back to the <Link href="/"><span style={{color:"blue"}}>Homepage</span></Link></p>
        </div>

        </>
     );
}
 
export default NotFound;