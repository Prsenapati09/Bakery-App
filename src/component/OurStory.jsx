import Cake from '../assets/cake2.jpg'

const OurStory = () => {
  return (
    <section 
    className="h-screen w-full bg-[#2d2d2d] flex items-center justify-center">
        <div 
        data-aos='fade-down'
        data-aos-duration='1500'
        data-aos-easing='ease-out-cubic'
        className="md:h-[500px] md:w-[70%] w-[90%] bg-amber-200 rounded-3xl flex items-center justify-around flex-col md:flex-row h-fit">
            <div 
            data-aos='fade-down'
            data-aos-duration='1500'
            className="md:w-[40%] w-[95%] flex flex-col gap-2">
                <p
                data-aos='zoom-in'
                    data-aos-delay='1000'
                    data-aos-easing='easi-out-cubic'>
                Baking Legacy</p>
                <h1 
                    data-aos='fade-down'
                    data-aos-delay='1000'
                    data-aos-easing='easi-out-cubic'
                className="font-extrabold text-5xl ">Our 
                    <span className="text-orange-500"> Delicious</span> Story
                </h1>
                <p 
                data-aos='zoom-in'
                    data-aos-delay='500'
                    data-aos-easing='easi-out-cubic'>
                    It all began with a simple love for baking and a dream to share joy through every bite. From early morning kneads to the sweet aroma of fresh pastries, we’ve grown from a cozy kitchen to a beloved neighborhood bakery. </p>
                <p data-aos='zoom-in'
                    data-aos-delay='500'
                    data-aos-easing='easi-out-cubic'>
                        Every loaf, tart, and cookie is crafted with care, using time-honored recipes and the finest ingredients. At YourBakery, we don’t just bake—we create moments worth savoring..</p>
                <p
                data-aos='zoom-in'
                    data-aos-delay='1000'
                    data-aos-easing='easi-out-cubic'>
                Baking from the heart, sharing joy in every bite.</p>
            </div> 
            <div 
            data-aos='fade-down'
            data-aos-duration='1500'
            className='flex flex-row gap-8 my-3'>
                <img src={Cake} alt="cake image"
                data-aos='slide-left'
                data-aos-duration='1000'
                className='border-[3px] rounded-xl rotate-3 h-[150px] md:h-[250px]'/>
                <img src={Cake} alt="cake image"
                data-aos='slide-left'
                data-aos-duration='1000'
                className='border-[3px] rounded-xl rotate-y-5 h-[150px] md:h-[250px]'/>
            </div>
        </div>
    </section>
  )
}

export default OurStory