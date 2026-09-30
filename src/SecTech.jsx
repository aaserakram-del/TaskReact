import ArrowImg from './assets/Arrow.svg'


export default function SecTech() {
    return (
        <section>
            <div className="w-[1,170] bg-[url(assets/bg-pattern.svg)] bg-[#FAF5F3] pt-20 pl-15 pr-15 pb-17.5 mr-33.75 ml-33.75 mt-30 rounded-[15px] text-center">
                <h2 className="w-lg flex items-center font-semibold text-[50px] tracking-[-2px] leading-[130%] font-[Martian_Mono] text-[#062630] m-auto">Your tech reading journey</h2>
                <div className="flex gap-15 mt-17.5">
                    <div className="month w-[226.5px] h-27 flex items-start flex-col">
                        <div className='flex items-center pb-6'>
                            <p className='flex items-center w-10 h-10 rounded-xs border-3 border-[#062630] font-semibold font-[Martian_Mono] text-[18px] p-3'>1</p>
                            <img className='pl-30' src={ArrowImg} alt="ArrowImg" />
                        </div>
                        <div className='text-start '>
                            <p className='font-semibold font-[Martian_mono] text-[18px] text-[#062630]'>Choose your  membership tier</p>
                        </div>
                    </div>
                    <div className="month w-[226.5px] h-27 flex items-start flex-col">
                        <div className='flex items-center pb-6'>
                            <p className='flex items-center w-10 h-10 rounded-xs border-3 border-[#062630] font-semibold font-[Martian_Mono] text-[18px] p-3'>2</p>
                            <img className='pl-30' src={ArrowImg} alt="ArrowImg" />
                        </div>
                        <div className='text-start '>
                            <p className='font-semibold font-[Martian_mono] text-[18px] text-[#062630]'>Get your monthly book selection</p>
                        </div>
                    </div>
                    <div className="month w-[226.5px] h-27 flex items-start flex-col">
                        <div className='flex items-center pb-6'>
                            <p className='flex items-center w-10 h-10 rounded-xs border-3 border-[#062630] font-semibold font-[Martian_Mono] text-[18px] p-3'>3</p>
                            <img className='pl-30' src={ArrowImg} alt="ArrowImg" />
                        </div>
                        <div className='text-start '>
                            <p className='font-semibold font-[Martian_mono] text-[18px] text-[#062630]'>Join our discussion forums</p>
                        </div>
                    </div>
                    <div className="month w-[226.5px] h-27 flex items-start flex-col">
                        <div className='flex items-center pb-6'>
                            <p className='flex items-center w-10 h-10 rounded-xs border-3 border-[#062630] font-semibold font-[Martian_Mono] text-[18px] p-3'>4</p>
                        </div>
                        <div className='text-start '>
                            <p className='font-semibold font-[Martian_mono] text-[18px] text-[#062630]'>Attend exclusive meetups</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}