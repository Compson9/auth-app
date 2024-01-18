
import Image from 'next/image'
import logo from "@/app/assets/usabilityhub.jpg"
import Link from 'next/link'
import { UserButton } from "@clerk/nextjs";
import Hero from "@/app/components/Hero"

const page = () => {
  return (
    <>
    <div className='m-2 flex justify-between'>
        <div>
            <Link href="/Home">
        <Image src={logo} width={100} height={100} alt='logo'/>

            </Link>
        </div>
<div className='m-2 flex gap-[30px]'>
    <div><Link href="#">Company</Link></div>
    <div><Link href="#">Pricing</Link></div>
    <div><Link href="#">Careers</Link></div>
    <div><Link href="#">Contact</Link></div>
    <div><Link href="#">Products</Link></div>

</div>

<div>
      <UserButton afterSignOutUrl="/"/>
    </div>
  

    </div>
    <Hero />
      </>
  )
}

export default page