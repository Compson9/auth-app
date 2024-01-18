import Image from "next/image"
import woman from "@/app/assets/Female hr specialist in an office.jpg"

const Hero = () => {
  return (
    <div className="m-[50px] flex justify-between">
      <div className="w-[500px]">
      <h1 className="font-bold pt-[20px] text-[30px]">Increase <br /> Your Income</h1>
      <p className="text-medium text-[16px] mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod consequatur, labore quo nisi tempora dignissimos impedit fuga aspernatur ex reiciendis harum? Et, nisi porro.</p>
    <button className="bg-blue-600 w-[150px] mt-3 rounded-sm text-white p-2">Learn More</button>
      </div>
      <div className="w-[500px]">
      <Image src={woman} alt="woman"/>
      </div>
    </div>
  )
}

export default Hero
