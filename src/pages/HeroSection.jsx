import heroVideo from '../assets/heroVideo.mp4'


export function HeroSection(){

    return <>
        <div className='h-screen w-full font-sans'>
            <video src={heroVideo} className='z-0 relative' autoPlay loop muted ></video>
            <div className='absolute top-64 font-light px-24'>
                <div className='text-white text-8xl py-4'>
                    <h1>Be The Next</h1>
                    <h1>gobal empire</h1>
                </div>
                <div className='py-12 text-white text-xl'>
                    <p>Dream big, build fast, and grow far</p>
                    <p>on Shopify</p>
                </div>
                <button className='py-3 px-5 hover:bg-neutral-400 bg-white text-lg rounded-3xl'>Start for free</button>
            </div>
        </div>
    </>
}