import React, { useState } from 'react'
import { assets, dummyCarData, ownerMenuLinks } from '../../assets/assets'
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {

   
  const user =dummyCarData;
  const loaction = useLocation()
  const [image,setImage] = useState('')

  const updateImage =async ()=>{
    user.image = URL.createObjectURL(image)
    setImage('')
  }

  return (
    <div className='relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-borderColor text-sm'>
      <div className='group relative'>
       <label htmlFor="image">
        <img src={image ? URL.createObjectURL(image) : user?.image || "https://unsplash.com/photos/programming-code-abstract-technology-background-of-software-developer-and-computer-script-ltpb_WinC3Y"} alt="" />
       <input type="file" id='image' accept='image/*' hidden onChange={e=> setImage(e.target[0])} />
       <div className='absolute hidden top-0 right-0 left-0 bottom-0 bg-black/10 rounded-full group-hover:flex items-center justify-center cursor-pointer'>
        <img src={assets.edit_icon} alt="" />
       </div>
       </label>
      </div>
      {image && (
        <button className='absolute top-0 right-0 flex p-2 gap-1 bg-primary/10 text-primary cursor-pointer'>Save <img src={assets.check_icon} alt="" width={13} onClick={updateImage}/></button>
      )}
      <p className='mt-2 text-base max-md:hidden'>{user?.name}</p>

      <div className='w-full'>
       {ownerMenuLinks.map((link,index)=>(
        <NavLink key={index} to={link.path} className={`relative flex items-center gap-2 py-3 pl-4 first:mt-6 ${link.path === loaction.pathname ? 'bg-primary/10 text-primary' : 'text-gray-600'}`}>
          <img src={link.path === loaction.pathname ? link.coloredIcon :link.icon} alt="car-icon" />
          <span className='max-md:hidden'>{link.name}</span>
          <div className={`${link.path=== loaction.pathname && 'bg-primary'} w-1.5 rounded-l right-0 absolute`}></div>
        </NavLink>
       ))}
      </div>
    </div>
  )
}

export default Sidebar
