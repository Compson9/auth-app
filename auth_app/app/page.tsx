import Image from "next/image";
import Link from "next/link";
import illustration from "@/app/assets/colleagues discussing team project.jpg"

export default function Home() {
  return (
   <div className="flex sm:flex-row justify-between flex-col p-10 m-10">
    <div className="m-10 w-[50%]">
      <h1 className="font-bold mt-2 text-[30px]">Design Confidently</h1>
      <p>Usability is a remote user research platform that that takes the guess work out of design by validating them with real users.</p>
      <button className="bg-blue-700 w-[150px] hover:bg-blue-600 h-[50px] mt-6 text-white rounded-sm p-2">
        <Link href="/Home">Ge Started</Link>
      </button>
    </div>
    <div>
      <Image src={illustration} width={600} alt="illustration"/>
    </div>
   </div>
  )
}

