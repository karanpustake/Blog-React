import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componenets/navbar'
import Bitcoin from './componenets/bitcoin'
import Posts from './componenets/posts'

function App() {
  const [count, setCount] = useState(0)

  const pictures2 = {
    pic1: '/src/assets/pic1.webp', 
    pic2: '/src/assets/pic2.webp', 
    pic3: '/src/assets/pic3.webp', 

  }

  const pictures = ['/src/assets/pic1.webp', '/src/assets/pic2.webp', '/src/assets/pic3.webp'];

  const titles = ["Bitcoin surroundings","Picsabil investment in bitcoin","nft's relation to crypto"]
  const names = ["john doe","Scire esponita","Namii iglesias"]

  return (
    <>
    <div className='w-[auto] '>

<div className='content-center  items-center justify-center flex'>

     <Navbar />
</div> 

<div className='flex justify-center min-h-screen mt-40'>


     <Bitcoin />

</div>
<div className=''>
  <h1 className='flex items-center justify-center font-bold text-3xl mb-6'>Recent Posts</h1>
<div className='justify-center grid grid-flow-col gap-4 '>
<Posts src ={pictures2.pic1} title = {titles[0]} name = {names[0]} />
<Posts src ={pictures[1]} title = {titles[1]} name = {names[1]}/>
<Posts src ={pictures[2]} title = {titles[2]}name = {names[2]} />


</div>


</div>



    </div>
    </>
  )
}

export default App
