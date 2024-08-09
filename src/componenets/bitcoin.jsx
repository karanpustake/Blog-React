import React from 'react'
import btc from '/btc.svg'
function Bitcoin() {
  return (
    <div className=''>
        <div className="flex flex-col md:flex-row gap-16  items-center">
  <div className="flex-1 items-center ">
    <h1 className="font-bold mb-4 text-[46px]">Get Crypto Related Knowledge</h1>
    <p className="text-xl w-[45rem]">
      Bitcoin is an innovative payment network and a new kind of money. 
      Find all you need to know and get started with Bitcoin on bitcoin.org.
    </p>
    <div className='mt-10'>

    <a className='bg-orange-200 p-3 rounded-md hover:bg-orange-400 transition' href="">Check Posts</a>
    </div>
  </div>
  <div className="flex-shrink-0">
    <img src={btc} alt="Bitcoin" className="h-[20rem] w-auto object-contain" />
  </div>
</div>


    </div>
  )
}

export default Bitcoin