
import Image from 'next/image';
import Icon from "../app/icon.png";
import Link from "next/link";
import classes  from "../assets/styles/main-headers.module.css";

function Header() {

  return (
    <header className={classes.header}>
        <Link className={classes.logo} href="/"> 
        <Image src={Icon} alt="NextLevel Food Logo"  />
  NextLevel Food
        </Link>


      <nav className={classes.nav}>
        <ul >
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;