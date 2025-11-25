

export const Contactcom = (props) => {
  return (
    <div className="md:h-[200px] md:w-[250px] h-[180px] w-[250px] rounded-xl bg-amber-300 flex items-center justify-center flex-col">
        <div className="h-[50px] w-[50px] rounded-full bg-white flex items-center justify-center ">
            {props.icon}
        </div>
        <h2>{props.title}</h2>
        <p className="text-center">{props.description}</p>
    </div>
  )
}
