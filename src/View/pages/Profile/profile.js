import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {

  var {profileName} = useParams()

  return (
    <div>
      Profile of {profileName}
    </div>
  )
}

export default Profile
