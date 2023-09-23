import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bookmarks from './componenents/Bookmarks/Bookmarks'
import Blogs from './componenents/Blogs/Blogs'
import Header from './componenents/Header/Header'

function App() {
 

  return (
    <>
     
    <Header></Header>

    <main className='md:flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
    </main>
  
      
    </>
  )
}

export default App
