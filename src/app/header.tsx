import Image from "next/image";
export default function Heads() {
    return (
        <div className="full bg-black text-white">
      <div className="navbar container">
      <h1 className="text-2xl font-bold text-yellow-500 flex justify-center">FoodTuck</h1>
        <ul className="navul flex text-white gap-7">
            <li>Home</li>
            <li>Menu</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>About</li>
            <li>shop</li>
            <li>contact</li>
        </ul>
      </div>
      </div>
    );
  }