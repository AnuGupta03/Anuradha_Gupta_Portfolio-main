import { Projectcards } from "./Cards/Projectscards"
import wetherappimg from '../assets/weather.png'
export function Projects(){
    return <div id="projectdiv" className="max-w-[1200px] mx-auto mt-48 px-6">
                <div className="text-4xl font-bold text-white flex justify-center sm:justify-start">Projects</div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Projectcards images="https://pixabay.com/illustrations/skills-at-the-beginning-business-7137254/" alt = "FoodOrdering Website to order food from anywhere and anytime." names="STeaDoFooDS" description="SteadoFoods revolutionizes your dining experience with a user-friendly food ordering website" desc="Technology: ReactJs, Javascript, CSS, HTML, JWT Tokens" github="https://github.com/AnuGupta03/STeaDoFooDS" golive="https://s-tea-do-foo-ds.vercel.app/"/>
                    <Projectcards images="https://anugupta03.github.io/AnuradhaPortfolio/assets/img/e-booking.png" alt = "E-Booking Application Order Hotel from Anywhere, Anytime." names="E-Booking Application" description="E-Booking Application is a fully responsive home booking platform using new Technology." desc="Technology: ReactJs, Javascript, Tailwind CSS, HTML, Next JS, TypeScrit, Prisma, MongoDB" github="https://github.com/AnuGupta03/Property-Booking-App" golive="https://renting-app-one.vercel.app/"/>
                    <Projectcards images="https://cdn.pixabay.com/photo/2022/04/04/12/58/customer-support-7111206_640.png" alt="ANUTECHICAL Provide Any type of technical Services."names="ANUTECHNICAL" description="ANUTECHNICAL is a Technical Service Provide Platform in which anyone can take Technical Services" desc="Technology: ReactJs, Javascript, CSS, HTML, MongoDB" github="https://github.com/AnuGupta03/ANUTECHNICAL" golive="https://anugupta03.github.io/ANUTECHNICAL/"/>
                    <Projectcards images={wetherappimg} names="Weather App" description="A responsive Next.js weather app that fetches real-time weather data based on user input and displays rounded-off temperature values." desc="Technology: NextJs, Javascript, Tailwindcss, HTML"/>
                </div>

    </div>
}