import Image from "next/image";
import Link from "next/link";
// import Header from "./components/header";
import chocolateCake from "./public/chocolate-cake.jpeg";
import oreoCake from "./public/0reo-cake.jpeg";
import iceCreamCake from "./public/IceCream-cake.jpeg";
import blackForest from "./public/Blackforest.jpeg";
import poundCake from "./public/pound-cake.jpeg";
import blueberryCake from "./public/blueberry-cake.jpeg";

export default function Home() {
  return (
    <div className="parent">
      <div className="child bounce-in-right">
        <div className="image">
          {" "}
          <Image src={chocolateCake} alt="This is a chocolate cake" />
        </div>
        <h1 className="title">Chocolate Cake</h1>
        <p className="description">Click on read more for the Recipe of our delicious and scrumptious Chocolate Cake.</p>
        <Link href="/chocolate-cake">
          <button className="readMore">Read More</button>
        </Link>
      </div>

      <div className="child bounce-in-right">
        <div className="image">
          <Image src={oreoCake} alt="This is oreo cake" />
        </div>
        <h1 className="title">Oreo Cake</h1>
        <p className="description"> Click on read more for the Recipe of our delicious and scrumptious Oreo Cake.</p>
        <Link href="/oreo-cake">
          <button className="readMore">Read More</button>
        </Link>
      </div>

      <div className="child bounce-in-right">
        <div className="image">
          <Image src={iceCreamCake} alt="This is an icecream cake" />
        </div>
        <h1 className="title">IceCream Cake</h1>
        <p className="description"> Click on read more for the Recipe of our delicious and scrumptious IceCream Cake.</p>
        <Link href="/Icecream-cake">
          <button className="readMore">Read More</button>
        </Link>
      </div>

      <div className="child bounce-in-right">
        <div className="image">
          <Image src={blackForest} alt="This is Black forest cake" />
        </div>
        <h1 className="title">Black Forest Cake</h1>
        <p className="description">Click on read more for the Recipe of our delicious and scrumptious BlackForest Cake.</p>
        <Link href="/Blackforest">
          <button className="readMore">Read More</button>
        </Link>
      </div>

      <div className="child bounce-in-right">
        <div className="image">
          <Image src={poundCake} alt="This is a pound cake" />
        </div>
        <h1 className="title">Pound Cake</h1>
        <p className="description">Click on read more for the Recipe of our delicious and scrumptious Pound Cake.</p>
        <Link href="/pound-cake">
          <button className="readMore">Read More</button>
        </Link>
      </div>

      <div className="child bounce-in-right">
        <div className="image">
          <Image src={blueberryCake} alt="This is a blueberry cake" />
        </div>
        <h1 className="title">Blueberry Cake</h1>
        <p className="description"> Click on read more for the Recipe of our delicious and scrumptious BlueBerry Cake.</p>
        <Link href="/Blueberry">
          <button className="readMore">Read More</button>
        </Link>
      </div>
    </div>
  );
}
