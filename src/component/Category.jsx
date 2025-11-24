import category1 from "../assets/category1.jpg";
import category2 from "../assets/product1.jpg";
import category3 from "../assets/product2.jpg";
import category4 from "../assets/product3.jpg";
import category5 from "../assets/product5.jpg";
import Categorycom from "./Categorycom";
const Category = () => {
  const item1 = {
    name: "Cheesecake",
    count: "03",
    image: category1,
  };
  const item2 = {
    name: "Cup cake",
    count: "12",
    image: category2,
  };
  const item3 = {
    name: "ice cake",
    count: "80",
    image: category3,
  };
  const item4 = {
    name: "Donuts",
    count: "09",
    image: category4,
  };
  const item5 = {
    name: "Macaron",
    count: "22",
    image: category5,
  };
  return (
    <section
      className=" py-20 bg-[rgb(255,255,255)] overflow-hidden scroll-m-14 "
      id="category"
    >
      <div
        className="flex justify-between items-center mb-10"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-easing="ease-out-cubic"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Popular{" "}
          <span className="text-[#ea934c] ">Catagories</span>
        </h2>
      </div>
      {/* product */}

      <div className="md:h-[500px] w-full flex items-center flex-col md:flex-row justify-center gap-5 h-fit">
        <div
          data-aos="slide-right"
          data-aos-duration="1000"
          data-aos-easing="linear"
          className="md:h-[500px] md:w-[33%] w-[96%] flex flex-row md:flex-col items-center justify-center gap-3 "
        >
          <Categorycom data={item1} />
          <Categorycom data={item2} />
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          data-aos-easing="linear"
          className="md:h-[400px] md:w-[400px] h-[250px] w-[500px] rounded-4xl shadow-2xl flex md:flex-col flex-row  md:justify-center justify-around items-center"
        >
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className="h-[400px] w-[200px] flex  flex-col items-center justify-center"
          >
            <div className="h-[50px] w-[50px] bg-amber-300 rounded-full flex items-center justify-center font-bold">
              {item3.count}
            </div>
            <p>{item3.name}</p>
            <h1 className="font-bold text-3xl">{item3.name}</h1>
          </div>
          <div
            data-aos="slide-left"
            data-aos-duratio="1000"
            data-aso-easing="linear"
          >
            <img
              src={item3.image}
              alt="cake iamage"
              className="rounded-2xl h-[200px] w-[180px]"
            />
          </div>
        </div>
        <div
          data-aos="slide-left"
          data-aos-duration="1000"
          data-aos-easing="linear"
          className="md:h-[500px]  md:w-[33%] w-[95%] flex flex-row md:flex-col items-center justify-center gap-3"
        >
          <Categorycom data={item4} />
          <Categorycom data={item5} />
        </div>
      </div>
    </section>
  );
};

export default Category;
