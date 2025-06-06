import section4 from "../assets/section4.webp";
import section4side from "../assets/section4side.png";
import section4img1 from "../assets/section4img1.webp";
import section4img2 from "../assets/section4img2.webp";



export function SectionFour() {
  return (
    <div className="h-[210vh] bg-emerald-950 rounded-t-[4em] ">
      <div className="px-24 ">
        <div className="text-white py-24 text-center text-6xl">
        <h1>There is no better place for</h1>
        <h1>You to Build</h1>
      </div>

      <div className="flex justify-between items-start h-[36rem]">
     
        <div className="flex flex-col gap-10">
          <div className="text-white text-5xl  border-b-2 pb-4">
            <h1>The world's best-</h1>
            <h1>converting checkout</h1>
          </div>
          <div className="text-white text-4xl flex gap-16">
            <span>150M+</span>
            <span>15%</span>
          </div>
          <p className="w-[30em] text-emerald-200 text-xl leading-relaxed border-l-2 px-4">
            Shopify Checkout converts 15% higher on average than other commerce platforms and exposes your brand to 150 million buy-ready shoppers.
          </p>
        </div>

        
        <div className="relative h-96 w-[30rem] group">
          <img src={section4} alt="Main" className="h-full w-full object-cover rounded-lg" />

          <div className="absolute bottom-0 right-0 h-80 w-[20rem] z-10">
            <img src={section4side} alt="Overlay" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-neutral-900 opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
              <h1 className="text-2xl font-serif text-white">Buy Now</h1>
            </div>
          </div>
        </div>
      </div>

      </div>   
     <div className="px-24 h-screen rounded-t-[5em] bg-[radial-gradient(ellipse_at_center,_#1a1a1a_0%,_#000000_80%)]">
       <h1 className="text-center text-6xl text-white py-24">It's easy to start selling</h1>

      <div className="flex gap-32">
      <div className="flex h-[30rem] gap-6">
        <img src={section4img1} alt="Step 1" className="rounded-xl w-[18rem]  object-cover self-start" />
        <img src={section4img2} alt="Step 2" className="rounded-xl  w-[18rem] object-cover self-end" />
      </div>

      <div className="flex flex-col self-center">
        <div className="flex items-center gap-4 py-4">
          <span className="text-emerald-600 text-2xl font-semibold">01</span>
          <h1 className="text-white  text-5xl ">Add your first product</h1>
        </div>
        <div className="flex items-center gap-4 py-4">
          <span className="text-emerald-600 text-2xl font-semibold">02</span>
          <h1 className="text-white  text-5xl ">Customize your store</h1>
        </div>
        <div className="flex items-center gap-4 py-4">
          <span className="text-emerald-600 text-2xl font-semibold">03</span>
          <h1 className="text-white  text-5xl ">Set up payments</h1>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}
