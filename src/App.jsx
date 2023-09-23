import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bookmarks from './componenents/Bookmarks/Bookmarks'
import Blogs from './componenents/Blogs/Blogs'
import Header from './componenents/Header/Header'

function App() {

  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadinTime] = useState(0)


  const handleAddToBookmark = blog =>{
   const newBookmarks = [...bookmarks,blog];
   setBookmarks(newBookmarks)
  }

  const handleMarkAsRead =(id,time) =>{
   setReadinTime(readingTime+time);
   const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
   setBookmarks(remainingBookmarks)
  }
 

  return (
    <>
     
    <Header></Header>

    <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark = {handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>
  
      
    </>
  )
}

export default App
