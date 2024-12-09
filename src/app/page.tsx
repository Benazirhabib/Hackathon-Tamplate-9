import Image from "next/image";

export default function Home() {
  return (
    <div>
    <div className="bg-black text-white">
    <div className="content flex ">
    <div className="frontpage1 mt-10">
      <div className="border-l-2 pl-16">
    <p className="text-orange-300 text-2xl">Its Quick & Amusing!</p>
    <h1 className="text-5xl mt-3"><span className="text-[#FF9F0D]">Th</span>e Art of speed
    food Quality</h1>
    </div>
    <p className="mt-7 mb-7 pl-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Varius sed pharetra dictum neque massa congue</p>
    <div className="border-l-2 h-36"> <button className="front-btn ml-14">See Manu</button></div>
    
    </div>
    <div className="frontpage">
        <Image src="/image.png" alt="img" width={800} height={500}/>
    </div>
  </div>
  </div>

</div>
  );
}
