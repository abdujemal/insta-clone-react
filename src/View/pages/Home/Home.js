import React from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../controller/MyContext'

function Home() {

  const {user} = useGlobalContext()

  const navigate = useNavigate()

  return (
    <div>
      Home
    </div>
  )
}

export default Home
