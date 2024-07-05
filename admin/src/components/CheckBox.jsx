import React from 'react'

function CheckBox({id,label}) {
  return (
    <div className="flex gap-10">
        <input type='checkbox' id={id} />
        <label className='text-sm text-black-water' htmlFor={id}>{label}</label>
    </div>
  )
}

export default CheckBox