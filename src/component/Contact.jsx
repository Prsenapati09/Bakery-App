import { Contactcom } from "./Contactcom";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center gap-12 bg-[#2d2d2d] ">
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="md:h-[500px] md:w-[80%] w-[80%] max-h-fit bg-amber-200 flex-col flex justify-center items-center rounded-xl my-32 text-center"
      >
        <h1 
        data-aos='fade-down'
        data-aos-duration='1000'
        data-aos-easing='ease-in-cubic'
        className="font-extrabold text-5xl ">
          Visit <span className="text-orange-400">our shop</span>
        </h1>
        <p 
        data-aos='zoom-in'
        data-aos-duration='1200'
        data-aos-easing='ease-in-cubic'
        className="m-1.5 text-gray-600">
          Step into a world of curated finds. Visit our shop and discover what
          inspires you.
        </p>
        <p
        data-aos='zoom-in'
        data-aos-duration='1200'
        data-aos-easing='ease-in-cubic' 
        className="text-gray-600">
          Browse, discover, and enjoy unique finds crafted just for you.
        </p>
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className="h-[300px]  w-full flex justify-center items-center md:gap-30 flex-col md:flex-row my-10 gap-5 "
        >
          <Contactcom
            icon={<Phone size={20} color="black" />}
            title="Call Us"
            description="Contact this number"
          />
          <Contactcom
            icon={<Mail size={20} color="black" />}
            title="Email Us"
            description="Email this mail"
          />
          <Contactcom
            icon={<MapPin size={20} color="black" />}
            title=" Visit Us"
            description="Visit Our location"
          />
        </div>
        <button
          data-aos="fade-in"
          data-aos-duration="1000"
          className="bg-black text-white p-3 my-3 w-40 rounded-3xl hover:bg-[#2d2d2df4] transition"
        >
          Thank You
        </button>
      </div>
    </section>
  );
};

export default Contact;
