import React from 'react'

const Button = ({btnText,width,txtSize,px,py,connect}) => {
  return (
    <button onClick={()=>connect()} className={`bg-[#6960EC] text-white ${width} ${txtSize} ${px} ${py} rounded-md`}>{btnText}</button>
  )
}

export default Button