import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bookmarks from './componenents/Bookmarks/Bookmarks'
import Blogs from './componenents/Blogs/Blogs'
import Header from './componenents/Header/Header'

function App() {

  const [bookmarks,setBookmarks] = useState([]);
  const handleAddToBookmark = blog =>{
   const newBookmarks = [...bookmarks,blog];
   setBookmarks(newBookmarks)
  }
 

  return (
    <>
     
    <Header></Header>

    <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark = {handleAddToBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
    </div>
  
      
    </>
  )
}

export default App
