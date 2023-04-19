import Link from "next/link"
import Image from "next/image"
 
 const Navbar = () => {
   return (
     <>
        <nav>
            <div className="logo">
             <Image  src="/9.png" width={150} height={40} />
            </div>
           
            <Link href="/">Home</Link>
            <Link href="/About"> About </Link>
            <Link href="/ninjas"> Ninja listing </Link>
        </nav>
     </>
   )
 }
 
 export default Navbar