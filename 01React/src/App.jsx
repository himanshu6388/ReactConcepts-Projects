import { useState } from 'react'

import './App.css'
import Profile from './components/Profile'

function App() {

  const data = fetch('https://fakestoreapi.com/users/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
 
   
  return (
  <>
      <Profile data={data}/>
  </>
  )
}

export default App
