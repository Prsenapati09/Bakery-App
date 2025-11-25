import { Premiumcom } from "./Premiumcom";
import Bigcake from "../assets/bigcake.jpg"
import {ShieldCheck,Rocket,Users,Star} from 'lucide-react'
const Premium = () => {
  return (
    <section className="md:h-screen h-fit w-full flex flex-col justify-center items-center gap-10">
      <div className="h-[100px] w-full text-center p-5 flex items-center justify-center flex-col my-10 md:my-5">
        <h1 
        data-aos='fade-down'
        data-aos-duration='800'
        data-aos-easing='linear'
        className="font-extrabold text-4xl md:text-5xl ">
          Our <span className="text-orange-400 h-fit">Premium</span> Services
        </h1>
        <p 
        data-aos='zoom-in'
        data-aos-duration='1000'
        data-aos-easing='linear'>
          Experience more with our Premium Service faster 
        </p>
        <p
        data-aos='zoom-in'
        data-aos-duration='1000'
        data-aos-easing='easi-out-cubic'>support, exclusive features, and tools designed to help you shine.</p>
      </div>
      <div  
      className="md:h-[425px] h-max-fit w-full flex items-start justify-center md:flex-row flex-col gap-3 ">
        <div 
          data-aos='fade-down'
          data-aos-duration='1000'
          data-aos-easing='easi-out-cubic'
          className="md:w-[35%] w-[95%] flex md:flex-col flex-col gap-3.5 items-center  justify-center ">
          <Premiumcom  image={<ShieldCheck size={20} color='black'/>}
          h='Secure & Reliable'
          description='Your data and privacy and protected with top grade security '/>
          <Premiumcom image={<Rocket size={20} color='black'/>}
          h='Fast & Performace'
        description='Experience lightning-fast load time and optimized performance'/>
        </div>
        <div 
          data-aos='fade-down'
          data-aos-duration='1000'
          data-aos-easing='easi-out-cubic'
          className="md:h-[350px] md:w-[350px] h-[280px] w-[280px] rounded-full flex items-center  justify-center shadow-xl">
          <img src={Bigcake} alt="Cake image" className="rounded-full" />
        </div>
        <div 
          data-aos='fade-down'
          data-aos-duration='1000'
          data-aos-easing='easi-out-cubic'
          className="md:w-[35%] w-[95%] flex md:flex-col flex-col gap-3.5 items-center justify-center my-3">
          <Premiumcom image={<Users size={20} color='black'/>}
          h='24/7 Support'description='Get round the clock customer support form out export team'/>
          <Premiumcom image={<Star size={20} color='black'/>}
          h='Premium Quality' description='Enjoy top quality design and functionality across all devices .'/>
        </div>
      </div>
    </section>
  );
};

export default Premium;
