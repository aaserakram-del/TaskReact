import ImgRead from './assets/Image-1.png'
import checkicon from './assets/check.svg'

export default function SecRead() {
    return (
        <>
            <section className="flex items-center justify-center mt-40 pb-30">
                <div className="pr-40">
                    <img className='w-140 h-140 rounded-[20px]' src={ImgRead} alt="Img-Read" />
                </div>
                <div className='flex-column w-132.5'>
                    <h2 className='pb-8.5 leading-[130%] tracking-[-2px] font-semibold text-[50px] font-[Martian_Mono]'>Read together,<br /> grow together</h2>
                    <div className='w-107.75 pt-11'>
                        <div className='flex item-center mb-6'>
                            <img src={checkicon} alt="check-icon" />
                            <p className='pl-3.5 font-[Inter] text-[#385159] font-normal text-[20px] tracking-[-0.5px] leading-[140%]'>Monthly curated tech reads selected by industry experts</p>
                        </div>
                        <div className='flex item-center mb-6'>
                            <img src={checkicon} alt="check-icon" />
                            <p className='pl-3.5 font-[Inter] text-[#385159] font-normal text-[20px] tracking-[-0.5px] leading-[140%]'>Virtual and in-person meetups for deep-dive discussions</p>
                        </div>
                        <div className='flex item-center mb-6'>
                            <img src={checkicon} alt="check-icon" />
                            <p className='pl-3.5 font-[Inter] text-[#385159] font-normal text-[20px] tracking-[-0.5px] leading-[140%]'>Early access to new tech book releases</p>
                        </div>
                        <div className='flex item-center'>
                            <img src={checkicon} alt="check-icon" />
                            <p className='pl-3.5 font-[Inter] text-[#385159] font-normal text-[20px] tracking-[-0.5px] leading-[140%]'>Author Q&A sessions with tech thought leaders</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}