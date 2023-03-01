import React from 'react'
import img from '../assets/1.png'
export const Card = () => {
  return (
    <div >
        <div class="h-[440px] w-[330px] ml-[30px] mt-[60px] rounded-[30px]">
        <img src={img} class="h-[147px] w-[330px] ml-[30px] mt-[60px] rounded-t-lg" />
        </div>
    </div>
  )
}
export default Card