import section3 from '../assets/section3.webp'
import section3grid1 from '../assets/section3grid1.webp'
import section3grid2 from '../assets/section3grid2.webp'
import section3grid3 from '../assets/section3grid3.png'
import lowerSection3img1 from '../assets/lowerSection3img1.webp';
import lowerSection3img2 from '../assets/lowerSection3img2.webp';
import { div } from 'framer-motion/client';
import { subclip } from 'three/src/animation/AnimationUtils.js';



export function SectionThree(){

    

    return<>
        <div className="py-24 px-24 h-[330vh] bg-black relative">
            <span className="text-cyan-400 text-xl">Online and in person</span>
            <h1 className="text-white py-4 text-6xl font-light ">Sell here, there, and everywhere</h1>
            <div className="py-10 rounded-md">
                <img src={section3} className='rounded-2xl' alt="" />
            </div>
            <div className="grid grid-cols-3 gap-4">
                        {[section3grid1, section3grid2, section3grid3].map((img, index) => (
                            <div key={index}
                                 className="relative  overflow-hidden h-[40em] bg-gradient-to-br from-[#0b1f1d] via-[#0f2b2a] to-black rounded-2xl row-span-1  group hover:bg-teal-900 transition-all delay-300">
                                <img src={img} alt="" className="w-full  object-cover" />
                                <div className='flex flex-col px-8'>
                                    <h1 className='text-white text-xl'>
                                    In-person point of sale
                                </h1>
                                <span className='text-neutral-500 text-xl'>
                                    Sell face to face and keep offline and online sales in sync with Shopify POS.
                                </span>
                                </div>
                            </div>
                            ))}
            </div>
           <div className='py-32 '>
            <span className="text-cyan-400 text-xl">Direct and wholesale</span>
            <h1 className="text-white py-4 text-6xl font-light">Find your forever customers</h1>
            <div className='flex w-full justify-between gap-10 '>
                {[
                {
                    img: lowerSection3img1,
                    subHeading: "Reach the right customers for less",
                    para: "Acquire new customers and keep them coming back for more with integrated marketing tools and insightful analytics."
                },
                {
                    img: lowerSection3img2,
                    subHeading: "Unlock new growth with B2B",
                    para: "Create custom experiences for wholesale buyers with flexible pricing, discounts, and payment terms."
                }
                ].map((item, index) => (
                <div key={index} className='h-[40rem] flex bg-gradient-to-br from-[#0b1f1d] via-[#0f2b2a] to-black p-10 rounded-2xl flex-col justify-between'>
                    <img src={item.img} className='h-[35rem] object-contain' alt="" />
                    <div className='flex flex-col gap-2'>
                    <h1 className='text-xl text-white font-light'>{item.subHeading}</h1>
                    <p className='text-xl text-slate-300'>{item.para}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>

        </div>
    </>
}