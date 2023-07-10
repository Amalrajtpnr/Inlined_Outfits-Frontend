import { type } from 'os'

type props = {
    size : string;
}


function Size({size}:props) {
  return (
    <div className='h-[100%] w-[25%] flex items-center  justify-between'>
        <div className="h-[35px] w-[35px] rounded-full border-[1px] border-[#D9D9D9] flex items-center justify-center text-[10px] ">
            {size}

        </div>
    </div>
  )
}

export default Size