import Icon from './assets/Icon.svg';
import profileOne from './assets/profile-1.jpg';
import profileTwo from './assets/profile-2.jpg';
import profileThree from './assets/profile-3.jpg';
import HeroImg from './assets/Hero Image.png'

const color = '#062630';

export default function Header() {
    return (
        <header className='bg-[url(assets/bg-pattern.svg)] bg-[#FAF5F3] pl-33.75 pb-20 pr-32.75'>
            <div className='flex items-center pb-20 pt-8'>
                <img src={Icon} alt="Logo" />
                <p className='font-[Fira_Code] tracking-[-1px] ml-3.5 font-semibold text-[20px]' style={{ color }}>Tech book club</p>
            </div>
            <div className="flex items-center gap-16 mr-16">
                {/* Div Left */}
                <div className='Div-Box'>
                    <div className='w-142.5'>
                        <h1 className='font-[Martian_Mono] tracking-[-2px] leading-[120%] font-bold text-[62px] bg-linear-to-r from-[#FEA36F] to-[#062630] bg-clip-text text-transparent'>Join the <br /> ultimate tech <br /> book club</h1>
                        <p className='pt-6 text-[20px] font-[Inter] font-normal text-[#385159] leading-[140%] tracking-[-0.5px] pb-8'>
                            Turn your reading time into learning time with fellow tech
                            enthusiasts. Get curated recommendations, join vibrant
                            discussions, and level up your skills one chapter at a time.
                        </p>
                        <button className='w-95 rounded-lg border-2 tracking-[-1px] leading-[130%] mb-5 font-semibold text-[18px] cursor-pointer font-[Martian_Mono] bg-[#FFF5EF] pt-5 pb-5 pl-6 pr-6'>
                            REVIEW MEMBERSHIP OP IONS
                            <i className="ml-4 w-[14.52px] h-[16.82px] text-[#062630] fa-solid fa-arrow-down-long" style={{ color: "hsv(197, 54%, 56%)" }}></i>
                        </button>
                    </div>
                    <div className="flex">
                        <img className='w-10 h-10 rounded-[40px] border-solid border-[1.5px] border-[#FFFFFF] -ml-2' src={profileOne} alt="profile-1" />
                        <img className='w-10 h-10 rounded-[40px] border-solid border-[1.5px] border-[#FFFFFF] -ml-2' src={profileTwo} alt="profile-2" />
                        <img className='w-10 h-10 rounded-[40px] border-solid border-[1.5px] border-[#FFFFFF] -ml-2' src={profileThree} alt="profile-3" />
                        <div className='ml-3'>
                            <div className=''>
                                <i className="fa-solid fa-star m-1" style={{ color: "hsla(22, 100%, 69%, 1)" }}></i>
                                <i className="fa-solid fa-star m-1" style={{ color: "hsla(22, 100%, 69%, 1)" }}></i>
                                <i className="fa-solid fa-star m-1" style={{ color: "hsla(22, 100%, 69%, 1)" }}></i>
                                <i className="fa-solid fa-star m-1" style={{ color: "hsla(22, 100%, 69%, 1)" }}></i>
                                <i className="fa-solid fa-star m-1" style={{ color: "hsla(22, 100%, 69%, 1)" }}></i>
                            </div>
                            <p className='font-normal font-[Martian_Mono] text-[14px] tracking-[-1px] leading-[120%] text-[#385159] pt-1'>200+ developers joined already</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={HeroImg} alt="Hero-img" />
                </div>
            </div>
        </header >
    )
}