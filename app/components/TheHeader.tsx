import Link from "next/link"
import module from '../ui/home.module.css'

const TheHeader = () => {
    return (
        <header className={module.header}>
            <Link href="/">Home</Link>
            <Link href="/service">Service</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>  
        </header>
    )
}
 
export {TheHeader}