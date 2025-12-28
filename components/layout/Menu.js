import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>
            <ul className="main-menu__list">
                <li className="dropdown megamenu">
                    <Link href="/">Home </Link>
                    <ul>
                        <li>
                            <section className="home-showcase">
                                <div className="container">
                                    
                                    
                                    {/* /.home-showcase__inner */} 

                                </div>    {/* /.container */} 
                            </section>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="about">About</Link>
                </li>

                <li className="dropdown">
                    <Link href="#">Services</Link>
                    <ul className="shadow-box">
                        <li><Link href="services">Services</Link></li>
                        <li><Link href="structural-mastery">Balcony Safety Nets</Link></li>
                        <li><Link href="foundation-forte">Invisible Grills</Link></li>
                        <li><Link href="smart-solutions">Cloth Hangers</Link></li>
                        <li><Link href="precision-builds">Monkey Nets</Link></li>
                        <li><Link href="apex-remodeling">Cricket Nets</Link></li>
                    </ul>
                </li>

                {/* <li className="dropdown">
                    <Link href="#">Pages</Link>
                    <ul className="shadow-box">
                        <li><Link href="team">Team</Link></li>
                        <li><Link href="team-details">Team Details</Link></li>
                        <li><Link href="portfolio">Portfolio</Link></li>
                        <li><Link href="portfolio-details">Portfolio Details</Link></li>
                        <li><Link href="testimonial">Testimonials</Link></li>
                        <li><Link href="pricing">Pricing</Link></li>
                        <li><Link href="faq">Faq</Link></li>
                        <li><Link href="404">404 Error</Link></li>
                    </ul>
                </li> */}

                {/* <li className="dropdown">
                    <Link href="#">Shop</Link>
                    <ul className="shadow-box">
                        <li><Link href="products">Products</Link></li>
                        <li><Link href="product-details">Product Details</Link></li>
                        <li><Link href="cart">Cart</Link></li>
                        <li><Link href="checkout">Checkout</Link></li>
                        <li><Link href="wishlist">Wishlist</Link></li>
                        <li><Link href="account">My Account</Link></li>
                    </ul>
                </li> */}

                {/* <li className="dropdown">
                    <Link href="#">Blog</Link>
                    <ul className="shadow-box">
                        <li><Link href="blog">Blog</Link></li>
                        <li><Link href="blog-standard">Blog Standard</Link></li>
                        <li><Link href="blog-details">Blog Details</Link></li>
                    </ul>
                </li> */}
                <li>
                    <Link href="contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
