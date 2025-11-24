
export const Premiumcom = (props) => {
  
  return (
    <div className="h-[162px] w-[50%] rounded-lg  shadow-xl">
        <div className="h-[81px] w-[full] flex flex-row gap-3 p-2 ">
            <div className="h-[35px] w-[35px] p-2 rounded-full bg-amber-400 flex items-center justify-center text-2xl ">{props.image}</div>
            <div>
                <h2 className="font-semibold text-[18px]">{props.h}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    </div>
  )
}
