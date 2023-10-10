import { type } from 'os'

type props = {
    size : string;
    isActive?:boolean;
    onClick?:() => void
}


function Size({size,isActive,onClick}:props) {
  return (
    <div onClick={onClick} className='h-[100%] w-[25%] flex items-center  justify-between'>
        <div className={`h-[35px] w-[35px] rounded-full border-[1px] ${isActive?'border-[2px] border-[#0d0f8b] text-[#0d0f8b] font-extrabold':'border-[1px] border-[#D9D9D9] text-black font-normal'} border-[#D9D9D9] flex items-center justify-center text-[10px]`}>
            {size}

        </div>
    </div>
  )
}

export default Size