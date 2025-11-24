
import cake from '../assets/cake.png'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div>
        <section className="min-h-screen flex items-center justify-center bg-[#2d2d2d] pt-20 px-4 md:px-8 overflow-hidden">
            <div data-aos='zoom-in'
            data-aos-duration='1500' className="relative w-full max-w-6xl bg-[#e9c39b] rounded-4xl shadow-2xl flex flex-col md:flex-row items-center justify-between overflow-hidden px-8 md:px-16 md:h-[580px]">
                <div className="max-w-lg text-center md:text-left spce-y-6 z-10">
                    <p date-aso='fade-down'
                    date-aos-delay='300'
                    data-aos-easing='easi-out-cubic' 
                    className="uppercase md:mt-0 mt-4 tracking-widest text-[#8b5e34] font-semibold">
                        Dessert
                    </p>
                    <div
                    data-aos='fade-right'
                    data-aos-delay='500'>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                            Homemade Cake With
                            <span date-aos="fade-right"
                            data-aos-delay="700"
                            className="text-[#b6723c] block md:inline">
                                Delicious Flavor
                            </span>
                        </h1>
                    </div>
                    <p 
                    data-aos="fade-up"
                    data-aos-delay="900"
                    className="text-grey-600">
                        Welcome to OurBakery — where every bite tells a story. Freshly baked breads, delightful pastries, and sweet treats made with love, just for you. Taste the tradition today!  Would you like a version that’s more playful, elegant, or focused on specific products like cakes or cookies?
                    </p>
                    <div
                    data-aos="fill-up"
                    data-aos-delay="1100">
                        <button className="bg-[#2d2d2d] text-white px-8 py-3 rounded-full hover:bg-[#444] transition-all duration-300 hover:scale-105 shadow-lg my-1.5">
                            Order Now
                        </button>
                    </div>
                </div>
                <div className="relative flex justify-center md:justify-end">
                     <div 
                     data-aos='fade-left'
                     data-aos-delay='700'
                     data-aos-duration='1500'
                     data-aos-easing="ease-out-cubic" className='relative'>
                        <img src={cake} alt="cake" className='w-[250px] md:w-[600px] md:h-[440px] onject-contain ' />
                     </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero