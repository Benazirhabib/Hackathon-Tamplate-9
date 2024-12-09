import Image from "next/image";

export default function Sec2() {
  return (
    <div className="bg-black text-white mt-20">
    <div className="content">
    <div className="frontpage1 mt-10">
      <div className="text-center">
    <p className="text-orange-300 text-2xl"> Food Category</p>
    <h1 className="text-5xl mt-3"><span className="text-[#FF9F0D]">Ch</span>oose Food Iteam
</h1>
<div className="flex gap-6 ml-10 mt-10">
<Image src="/box1.png" alt="img" width={250} height={300}/>
<Image src="/box2.png" alt="img" width={250} height={300}/>
<Image src="/box3.png" alt="img" width={250} height={300}/>
<Image src="/box4.png" alt="img" width={250} height={300}/>
</div>
    </div>
    </div>
    </div>
    </div>
  )
}