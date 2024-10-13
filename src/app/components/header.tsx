import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <ul className="header-buttons">
        <Link href={"/Home"}>
        <li>Home</li>
        </Link>
        <Link href={"/Products"}>
        <li>Products</li>
        </Link>
        <Link href={"/Services"}>
        <li>Services</li>
        </Link>
      </ul>
    </div>
  );
}
