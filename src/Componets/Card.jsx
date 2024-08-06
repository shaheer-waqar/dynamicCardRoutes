import React from 'react'
import { useNavigate } from 'react-router-dom';

function Card({cardData,id,cartHandler}) {
  const navigate = useNavigate();
  let {title,image,description,price} = cardData 

  return (
    <div onClick={()=>navigate(`/product/${id}`)} className='group relative shadow-lg rounded-[10px] overflow-hidden bg-white cursor-pointer hover:scale-[1.04] transition-all duration-500'>
      <div className='shadow-sm overflow-hidden relative'>
        <img className='w-[100%] h-[300px]  object-cover md:object-fill ' src={image} />
        <div className='bg-transparent group-hover:bg-black/40 duration-700 absolute w-full top-0 z-30 h-full'></div>
      </div>
      <div className='px-3 flex flex-col gap-2 py-2'>
        <h1  className='text-lg font-semibold leading-[1.1] hover:underline'>{`${title.substring(0,30)}...`}</h1>
        <p>{`${description.slice(0,100)}...`}</p>
        <p className='font-bold'>${price}</p>
        <div className='flex justify-between'>
        <button>Open</button>
        <button className='font-semibold' onClick={(event)=>cartHandler(event,cardData)}>Add to cart</button>
        </div>
      </div> 
    </div>
  )
}

export default Card