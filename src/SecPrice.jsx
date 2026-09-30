import checkicon from './assets/check.svg'

export default function SecPrice() {
    return (
        <>
            <section className='mt-30 mb-30 ml-58.75 mr-58.75 flex flex-col items-center  '>
                <h2 className='pb-16 leading-[130%] tracking-[-2px] font-semibold text-[50px] font-[Martian_Mono] text-[#062630]'>Membership options</h2>
                <div className="flex gap-6">
                    <div className="w-71.5 rounded-lg border-2 border-[#E6E1DF] p-6  hover:bg-[#FAF5F3]">
                        <div>
                            <div className="Price">
                                <h3 className='font-semibold pb-6 text-[24px] font-[Martian_Mono] tracking-[-1px] '>Starter</h3>
                                <span className='font-semibold font-[Martian_Mono] tracking-[-1px] text-[34px] pr-2'>$19</span>
                                <span className='font-normal text-[20px] text-[#385159] tracking-[-0.5px] '>/month</span>
                            </div>
                            <hr className='w-59.5 border border-[#E6E1DF] mt-6 mb-6' />
                            <div className="Time pb-8">
                                <div className='flex pb-4'>
                                    <img src={checkicon} alt="checkicon" />
                                    <p className='pl-3 font-normal text-[20px] text-[#385159] tracking-[-0.5px] '>1 book/month</p>
                                </div>
                                <div className='flex'>
                                    <img src={checkicon} alt="checkicon" />
                                    <p className='pl-3 font-normal text-[20px] text-[#385159] tracking-[-0.5px]'>Online forums</p>
                                </div>
                            </div>
                        </div>
                        <button className='w-59.5 h-15.75 rounded-lg border-2 border-[#062630] font-[Martian_Mono] font-semibold text-[#062630] text-[18px] tracking-[-1px] bg-[#FFF5EF] '>SUBSCRIBE NOW</button>
                    </div>
                    <div className=" w-71.5 rounded-lg border-2 border-[#E6E1DF] p-6  hover:bg-[#FAF5F3]">
                        <div className="">
                            <div className="Price">
                                <h3 className='font-semibold pb-6 text-[24px] font-[Martian_Mono] tracking-[-1px] '>Pro</h3>
                                <span className='font-semibold font-[Martian_Mono] tracking-[-1px] text-[34px] pr-2'>$29</span>
                                <span className='font-normal text-[20px] text-[#385159] tracking-[-0.5px] '>/month</span>
                            </div>
                            <hr className='w-59.5 border border-[#E6E1DF] mt-6 mb-6' />
                            <div className="Time pb-8">
                                <div className='flex pb-4'>
                                    <img src={checkicon} alt="checkicon" />
                                    <p className='pl-3 font-normal text-[20px] text-[#385159] tracking-[-0.5px] '>2 book/month</p>
                                </div>
                                <div className='flex'>
                                    <img src={checkicon} alt="checkicon" />
                                    <p className='pl-3 font-normal text-[20px] text-[#385159] tracking-[-0.5px]'>Online forums</p>
                                </div>
                            </div>
                        </div>
                        <button className='w-59.5 h-15.75 rounded-lg border-2 border-[#062630] font-[Martian_Mono] font-semibold text-[#062630] text-[18px] tracking-[-1px] bg-[#FFF5EF] '>SUBSCRIBE NOW</button>
                    </div>
                    <div className=" w-71.5 rounded-lg border-2 border-[#E6E1DF] p-6  hover:bg-[#FAF5F3]">
                        <div className="">
                            <div className="Price">
                                <h3 className='font-semibold pb-6 text-[24px] font-[Martian_Mono] tracking-[-1px] '>Enterprise</h3>
                                <span className='font-semibold font-[Martian_Mono] tracking-[-1px] text-[34px] pr-2'>Custom</span>
                            </div>
                            <hr className='w-59.5 border border-[#E6E1DF] mt-6 mb-6' />
                            <div className="Time pb-8">
                                <div className='flex pb-4'>
                                    <img src={checkicon} alt="checkicon" />
                                    <p className='pl-3 font-normal text-[20px] text-[#385159] tracking-[-0.5px] '>Team access</p>
                                </div>
                                <div className='flex'>
                                    <img src={checkicon} alt="checkicon" />
                                    <p className='pl-3 font-normal text-[20px] text-[#385159] tracking-[-0.5px]'>Private sessions</p>
                                </div>
                            </div>
                        </div>
                        <button className='w-59.5 h-15.75 rounded-lg border-2 border-[#062630] font-[Martian_Mono] font-semibold text-[#062630] text-[18px] tracking-[-1px] bg-[#FFF5EF] '>TALK TO US</button>
                    </div>
                </div>
            </section>
        </>
    )
}