import product1 from '../assets/product1.jpg'
import product2 from '../assets/product2.jpg'
import product3 from '../assets/product3.jpg'
import product4 from '../assets/product4.webp'
import product5 from '../assets/product5.jpg'
import product6 from '../assets/product6.jpg'
import product7 from '../assets/product7.jpg'
import product8 from '../assets/product8.jpg'
const Product = () => {
    const desserts=[
        {id:1,title:'Chocolate Cake',price:'$9.99',tag:'New',image:product1},
        {id:2,title:'Strawberry Delight',price:'$8.50',tag:'Best',image:product2},
        {id:3,title:'vanila Cupcake',price:'$8.50',tag:'New',image:product3},
        {id:4,title:'Cheesecake',price:'$11.99',tag:'Hot',image:product4},
        {id:5,title:'Caramel Muffin',price:'$10.99',tag:'Best',image:product5},
        {id:6,title:'Barry Tart',price:'$7.20',tag:'Hot',image:product6},
        {id:7,title:'Chocolate Donut',price:'$8.40',tag:'New',image:product7},
        {id:8,title:'Macaron Mix',price:'$8.99',tag:'Best',image:product8}
    ]

  return (
    <section className='py-20 bg-[#2d2d2d] overflow-hidden'
    id="products">
        <div className='container mx-auto px-6 md:px-10'>
            <div className='flex flex-col md:flex-row justify-between items-center mb-10'
            data-aos='fade-down'
            data-aos-duration='1000'>
               <h2 className='text-3xl md:text-4xl font-bold text-white'>Our <span className='bg-[#e3985a]'>Desserts</span></h2>  
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-4 gap-8'>
                {desserts.map((item,index)=>(
                    <div
                    key={item.id}
                    data-aos='fade-up'
                    data-aos-delay={index * 100}
                    data-aos-duration='800'
                    data-aos-easing='ease-out-cubic'
                    className='relative bg-[#fffaf5] rounded-2xl shadow-lg hover:shadow-2xl transition p-5 text-center hover:scale-105 transform duration-300'>
                        <span className='absolute top-4 left-4 bg-[#b6723c] text-white text-xs px-3 py-1 rounded-full'>
                            {item.tag}
                        </span>
                        {/* iamge */}
                        <img src={item.image} alt={item.title} 
                        className='h-40 w-40 mx-auto object-contain ' />

                        <h3 className='text-lg font-semibold text-gray-800 mt-4'>{item.title}</h3>
                        <p className='text-[#b6723c] font-bold text-lg mt-2'>
                            {item.price}
                        </p>
                        <button
                        data-aos='zoom-in'
                        data-aos-delay={index * 100 + 300}
                        data-aos-duration='300'
                        className='bg-black text-white rounded-full px-6 py-2 my-3 hover:scale-105 hover:bg-[#444]'>
                            Order Now
                        </button>
                    </div>
             ))}

            </div>
        </div>
    </section>
  )
}

export default Product