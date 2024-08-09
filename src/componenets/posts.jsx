import React from 'react'


function Posts(props) {
    return (
        <div className=' hover:scale-110   hover:transition-transform'> 
            <div className='container bg-white w-[46vh] h-auto rounded-md mx-4 my-4 shadow-2xl'>
                <img src={props.src} alt="" className='rounded-t-lg' />
                <div className='mx-3 my-3'>
                    <h1 className='text-2xl font-bold '>{props.title}</h1>
                    <div className='flex gap-2 my-4 items-center '>
                        <img src="/src/assets/avatar.png" alt="" className='h-8' />
                        <h1 className=' text-xl font-semibold'>{props.name}</h1>
                        <h1 className=' text-xl '>11-07-2024</h1>
                    </div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse sed repellendus numquam illo sunt odio sequi fugit expedita? Quod sequi expedita perspiciatis quibusdam maxime ab consectetur tempore omnis temporibus.
                    </p>
                    <div className='p-3 w-auto my-3  rounded-md bg-zinc-300'>
                        <p className=''>#Network #effect</p>
                    </div>
                    <div>
                        <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-3 dark:focus:ring-yellow-900">Read More</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Posts