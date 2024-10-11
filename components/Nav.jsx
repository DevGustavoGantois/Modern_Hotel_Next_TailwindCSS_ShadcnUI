import Link from "next/link"

const links = [
    {
        href: '#Home',
        pathname: 'Home'
    },
    {
        href: '#FindHotel',
        pathname: 'Encontrar Hotel'
    },
    {
        href: '#AboutUs',
        pathname: 'Sobre'
    },
    {
        href: '#ContactUs',
        pathname: 'Contato'
    }
]

export function Nav({containerStyles, listStyles}) {
    return (
        <nav className={`${containerStyles}`}>
            <ul className={`${listStyles}`}>
                {links.map((link, index) => {
                    return (
                        <li key={index}>
                            <Link href={link.href}>{link.pathname}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}