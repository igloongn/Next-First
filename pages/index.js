import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar';
import Layout from '../comps/Layout';
import Home from './Home';

const Goto = (route, linkText) => <Link href={route}>{linkText}</Link>

export { Goto }

const Index = () => {
  return (
    <Home />
  );
}

export default Index;


