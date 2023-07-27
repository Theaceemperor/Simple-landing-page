import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>
        <div className="border-b-4 border-b-black">
          <h2 className="text-center text-3xl bg-rose-900/20 py-4 ">LANDING PAGE</h2>
        </div>
        <div className= "w-full">
          <div className="grid gap-3 grid-rows lg:grid-cols-2 text-center text-2xl m-10">
            <div className="w-100">
                <Image width={400} height= {400} className='md:w-full md:rounded-xl' src="/img/SPADES3.png" alt="logo"/>
            </div>

            <div className="flex flex-col justify-center items-center bg-rose-900/10 rounded-lg">
                <h2 className="underline">About Us</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Omnis officiis aperiam libero ratione blanditiis delectus. Nemo possimus voluptatem minus aliquam.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Omnis officiis aperiam libero ratione blanditiis delectus. Nemo possimus voluptatem minus aliquam.</p>
            </div>
          </div>

          <h3 className="text-center text-3xl">Subscribe to our news letter!</h3>
          <div className="gap-3 lg:gap-5 md:gap-5 w-full lg:w-full md-w-full flex flex-row justify-center my-10">
            <input className="py-3 md:p-5 lg:p-5 border-b-4 border-b-rose-900 border-t-4 border-t-rose-900" type="email" placeholder="Enter Email"/>
            <button className="bg-rose-900/10 px-6 lg:px-10 md:px-10 rounded-lg">Subscribe</button>
          </div>

          <div className="w-full flex flex-row justify-center">
            <div className=" rounded-lg bg-rose-900/10 text-center text-2xl py-5 px-10 border-4 border-black">
                <h2 className="p-5">OUR CORE VALUES</h2>
                <p>POSITIVITY <span className="px-3">CREATIVITY</span> ELIGIBILITY</p>
                <button className="p-2 border-y-4 border-black my-7">Contact Us</button>
            </div>
          </div>
        </div>
        <div className="my-2 mx-1 lg:mx-10 right-0 left-0 bg-black text-lg text-white py-3 lg:p-6 rounded-lg border-4 border-rose-900">
            <ul className="flex flex-cols gap-3 justify-center">
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Terms & Conditions</Link></li>
                <li><Link href="#">Share</Link></li>
            </ul>
        </div>
      </div>
    </>
  )
}
