import Image from "next/image";

export default function Sec1() {
  return (
    <div className="bg-black text-white mt-20">
    <div className="content flex ">
    <div className="frontpage1 mt-10">
      <div className="pl-16 w-3/5">
    <p className="text-orange-300 text-2xl">About Us</p>
    <h1 className="text-5xl mt-3"><span className="text-[#FF9F0D]">We </span>Create the best
foody product
</h1>
    </div>
    <p className="mt-7 mb-7 pl-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
    <div className=""> 
        <div className="flex pl-16">
        <Image src="/tick.png" alt="img" width={30} height={20}/>
        <p className="ml-4"> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
        </div>
        <div className="flex pl-16">
        <Image src="/tick.png" alt="img" width={30} height={20}/>
        <p className="ml-4"> Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
        </div>
        <div className="flex pl-16">
        <Image src="/tick.png" alt="img" width={30} height={20}/>
        <p className="ml-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <button className="front-btn ml-14 mt-7">Read More</button>
    </div>
    
    </div>
    <div className="frontpage">
        <div className="pb-3 mt-20">
        <Image src="/sec-1-1.png" alt="img" width={1000} height={900}/>
        </div>
        <div className="flex">
        <Image className="pr-3" src="/sec-1-2.png" alt="img" width={200} height={500}/>
        <Image src="/sec-1-3.png" alt="img" width={200} height={500}/>
        </div>
        
    </div>
  </div>
  </div>
  )
}