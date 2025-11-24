

const Categorycom = (props) => {

    console.log(props);
    
  return (
    <div className="h-[200px] w-[90%] rounded-3xl shadow-2xl flex flex-row items-center justify-around">
        <div className="h-[200px] w-[50%] flex items-center justify-center flex-col gap-0.5">
            <div className="h-[50px] w-[50px] bg-amber-300 rounded-full flex items-center justify-center font-bold">
                {props.data.count}
            </div>
            <p>{props.data.name}</p>
            <h1 className="font-medium text-[20px] md:text-2xl">{props.data.name}</h1>
        </div>
        <div className="h-[full] w-[50%] flex items-center justify-center">
            <img src={props.data.image} alt="" className=" h-[100px] md:h-[150px] w-[100px] md:w-[150px] rounded-3xl"/>
        </div>
    </div>
  )
}

export default Categorycom