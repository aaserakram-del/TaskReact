import Img from './assets/Image 2.png'
import CircleImg from './assets/path158.png'
import GitHubIcon from './assets/GitHub.png'
import TailwindIcon from './assets/Tailwind.png'
import ReactIcon from './assets/React.png'

export default function SecClub() {
    return (
        <>
            <section className="flex items-center pr-33.75 pl-33.75">
                <div className="">
                    <h2 className='pb-6 font-semibold text-[50px] leading-[130%] tracking-[-2px] font-[Martian_Mono] text-[#062630]'>Not your average <br /> book club</h2>
                    <p className='w-132.5 h-28 font-normal text-[20px] leading-[140%] tracking-[-0.5px] text-[#385159]'>Connect with a community that speaks your language - from <span className='font-semibold text-[20px] leading-[140%] tracking-[-0.5px] font-[Inter]'>Python</span> to <span className='font-semibold text-[20px] leading-[140%] tracking-[-0.5px] font-[Inter]'>TypeScript</span> and everything in between. Our discussions blend technical depth with practical applications.</p>
                    <div className='flex gap-3.75'>
                        <img className='w-13.75 h-13.75' src={GitHubIcon} alt="GitHubIcon"/>
                        <img  className='w-13.75 h-13.75'src={TailwindIcon} alt="TailWindIcon" />
                        <img  className='w-13.75 h-13.75'src={ReactIcon} alt="ReactIcon" />
                    </div>
                </div>
                <img className='relative bottom-15.5 right-[31%]' src={CircleImg} alt="Icon" />
                <div>
                    <img src={Img} alt="Img-Books" />
                </div>
            </section>
        </>
    )
}