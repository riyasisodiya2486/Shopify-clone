import shopifyLogo from '../assets/Shopify-png.webp'

export function Footer(){
    return(
        <>
            <footer className="bg-black text-white px-6 md:px-20 py-12 ">
                <div className="flex flex-col md:flex-row justify-between gap-12">
                    <div className=''>
                        <img src={shopifyLogo} alt="" className='h-20'/>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    <div>
                        <h3 className="font-semibold mb-2">Shopify</h3>
                        <ul className="space-y-1 text-sm text-gray-300">
                        <li>About</li>
                        <li>Investors</li>
                        <li>Partners</li>
                        <li>Affiliates</li>
                        <li>Legal</li>
                        <li>Service status</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Support</h3>
                        <ul className="space-y-1 text-sm text-gray-300">
                        <li>Merchant Support</li>
                        <li>Shopify Help Center</li>
                        <li>Hire a Partner</li>
                        <li>Shopify Academy</li>
                        <li>Shopify Community</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Developers</h3>
                        <ul className="space-y-1 text-sm text-gray-300">
                        <li>Shopify.dev</li>
                        <li>API Documentation</li>
                        <li>Dev Degree</li>
                        </ul>
                        <h3 className="font-semibold mt-6 mb-2">Global Impact</h3>
                        <ul className="space-y-1 text-sm text-gray-300">
                        <li>Sustainability</li>
                        <li>Build Black</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Products</h3>
                        <ul className="space-y-1 text-sm text-gray-300">
                        <li>Shopify Plus</li>
                        <li>Shopify for Enterprise</li>
                        </ul>
                        <h3 className="font-semibold mt-6 mb-2">Solutions</h3>
                        <ul className="space-y-1 text-sm text-gray-300">
                        <li>Online Store Builder</li>
                        <li>Website Builder</li>
                        <li>Ecommerce Website</li>
                        </ul>
                    </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-3">
                    <span>🌐 India | English</span>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <span>Terms of service</span>
                    <span>Privacy policy</span>
                    <span>Sitemap</span>
                    <span>Privacy Choices</span>
                    </div>
                    <div className="flex gap-4 text-white text-xl">
                    <i className="cursor-pointer fab fa-facebook"></i>
                    <i className="cursor-pointer fab fa-x-twitter"></i>
                    <i className="cursor-pointer fab fa-youtube"></i>
                    <i className="cursor-pointer fab fa-instagram"></i>
                    <i className="cursor-pointer fab fa-tiktok"></i>
                    <i className="cursor-pointer fab fa-linkedin"></i>
                    <i className="cursor-pointer fab fa-pinterest"></i>
                    </div>
                </div>
                </footer>

        </>
    )
}