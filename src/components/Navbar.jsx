import logo from "../assets/logo.svg"
export function Navbar(){
    const links = [
        'Solution',
        'Pricing',
        'Resources',
        'Enterprise'
    ];

    return<>
    <nav className="fixed z-50 h-20 w-full py-4 px-24 flex items-center justify-between">
        <div className="flex items-center gap-10 text-white text-lg">
            <img src={logo} alt="" className="w-32" />

            {links.map((link, index)=><span className="flex items-center cursor-pointer" key={index}>{link} 
                <svg class="w-2.5 h-2.5 ms-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            
            </span> )}
        </div>
        <div className="gap-4 flex items-center font-medium">
            <span className="text-white text-lg cursor-pointer">Log in</span>
            <button className="bg-white py-3 px-4 hover:bg-neutral-400 rounded-3xl">Start For Free</button>
        </div>
    </nav>
    </>
}