import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/bildins.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { publicSans, exo } from '@/lib/font'
export const metadata = {
    title: 'NSP Safety Nets',
    description: 'Constuction react next Js template'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${publicSans.variable} ${exo.variable}`}>
            <body>{children}</body>
        </html>
    )
}
