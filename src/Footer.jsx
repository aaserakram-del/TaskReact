

import profileOne from './assets/profile-1.jpg';
import profileTwo from './assets/profile-2.jpg';
import profileThree from './assets/profile-3.jpg';


export default function Footer() {
    return (
        <>
            <footer className=" bg-[url(./assets/Wrapper.svg)] bg-[#062630] pt-20 pb-[] pr-85.75 pl-85.75 text-center rounded-t-[20px] ">
                <div>
                    <h1 className="font-semibold text-[50px] font-[Martian_Mono] leading-[130%] tracking-[-2px] text-[#FAF5F3] mb-10">Ready to debug your reading list?</h1>
                    <button className='w-95 rounded-lg border-2 tracking-[-1px] leading-[130%] font-semibold text-[18px] cursor-pointer font-[Martian_Mono] mb-6 text-[#FFFFFF] pt-5 pb-5 pl-6 pr-6'>
                        REVIEW MEMBERSHIP OP IONS
                        <i className="ml-4 w-[14.52px] h-[16.82px] text-[#FFFFFF] fa-solid fa-arrow-up-long" style={{ color: "hsv(197, 54%, 56%)" }}></i>
                    </button>
                    <div className="flex items-center justify-center">
                        <img className='w-10 h-10 rounded-[40px] border-solid border-[1.5px] border-[#FFFFFF] -ml-2' src={profileOne} alt="profile-1" />
                        <img className='w-10 h-10 rounded-[40px] border-solid border-[1.5px] border-[#FFFFFF] -ml-2' src={profileTwo} alt="profile-2" />
                        <img className='w-10 h-10 rounded-[40px] border-solid border-[1.5px] border-[#FFFFFF] -ml-2' src={profileThree} alt="profile-3" />
                        <div className='ml-3'>
                            <div className='text-start'>
                                <i className="fa-solid fa-star m-1" style={{ color: "hsla(22, 100%, 69%, 1)" }}></i>
                                <i className="fa-solid fa-star m-1" style={{ color: "hsla(22, 100%, 69%, 1)" }}></i>
                                <i className="fa-solid fa-star m-1" style={{ color: "hsla(22, 100%, 69%, 1)" }}></i>
                                <i className="fa-solid fa-star m-1" style={{ color: "hsla(22, 100%, 69%, 1)" }}></i>
                                <i className="fa-solid fa-star m-1" style={{ color: "hsla(22, 100%, 69%, 1)" }}></i>
                            </div>
                            <p className='font-normal font-[Martian_Mono] text-[14px] tracking-[-1px] leading-[120%] text-[#FFFFFF] pt-1'>200+ developers joined already</p>
                        </div>
                    </div>
                    <div className='mt-16 flex justify-between border-t border-[#385159] ml-20px'>
                        <p className='font-normal pt-5 text-[#FFFFFF] font-[Martian_Mono] text-[14px]'>© 2024 – Tech Book Club</p>
                        <div className='pt-5'>
                            <i className=" text-[#FFFFFF] text-[25px] mr-5 fa-brands fa-linkedin"></i>
                            <i className="text-[#FFFFFF] text-[25px] fa-brands fa-facebook"></i>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}