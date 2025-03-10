import { Github, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
    return (
        <footer className="h-60  w-full text-white bg-black flex flex-col items-center justify-start">
            <div className="pt-2 mt-3 text-center text-xl font-bold">Anuradha Gupta</div>
            <div className='flex space-x-4 pt-4 pb-4'>
                <a href="https://www.linkedin.com/in/anuradha-gupta-/">
                    <Linkedin />
                </a>
                <a href="https://github.com/AnuGupta03">
                    <Github />
                </a>
                <a href="https://x.com/anuradhagu1754">
                    <Twitter />
                </a>
            </div>

            <div className="text-center text-sm font-bold">Email: anuradhagwl98@gmail.com</div>
            <div className="text-center text-sm font-bold">Mobile No: +91 7049332451</div>
            <div className="text-center text-sm font-bold">&#169; Anuradha Gupta Responsive Portfolio 2024</div>
        </footer>
    )
}
