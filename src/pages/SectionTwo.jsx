import grid1 from '../assets/grid1.webp'
import grid2 from '../assets/grid2.webp'
import grid3 from '../assets/grid3.webp'

export function SectionTwo(){

    return <>
        <div className="h-screen w-full bg-black rounded-t-[3.5em] z-30 relative py-28 px-24">
            <h1 className="text-white text-7xl  font-extralight font-medium ">The one commerce platform behind it all</h1>
            <p className="text-slate-400 py-12 text-6xl">
                Sell online and in person. Sell locally and globally. Sell direct and wholesale. Sell on desktop and mobile.
            </p>
            <div className="grid grid-cols-3 gap-4">
            {[grid1, grid2, grid3].map((img, index) => (
                <div
                key={index}
                className="relative overflow-hidden h-80 row-span-1 rounded-xl group"
                >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-emerald-950 opacity-0 group-hover:opacity-60 transition-opacity flex items-center justify-center duration-300">
                        <h1 className='text-2xl font-serif text-black'>Glossier</h1>
                    </div>
                    </div>
                ))}
                </div>

        </div>
    </>
}