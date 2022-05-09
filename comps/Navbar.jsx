// import

import { Goto } from "../pages";
import Link from 'next/link';
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img
                    src="/new.jpg"
                    alt="Picture of the author"
                    width={100}
                    height={100}
                />
            </div>
            {Goto('/about', 'About')}
            {Goto('/users',  'User')}
            {Goto('/logout', 'SignOut')}
        </nav>
    );
}

export default Navbar

