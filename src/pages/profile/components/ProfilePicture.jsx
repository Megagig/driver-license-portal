import React from 'react'

const ProfilePicture = () => {
    return (
        <div className='flex items-end mt-16 gap-10'>
            <div className=" flex shrink-0">
    <img className="h-56 w-56 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
  </div>
  <label className="block">
    <span className="sr-only">Choose profile photo</span>
    <input type="file" accept='image/' className="block w-full text-sm text-slate-500
      file:mr-4 file:py-4 file:px-6
      file:rounded-full file:border-0
      file:text-base file:font-semibold
      file:bg-violet-50 file:text-[#22C55E]
      hover:file:bg-[#22C55EFF] hover:file:text-white
    "/>
  </label> 
        </div>
    )
}

export default ProfilePicture
