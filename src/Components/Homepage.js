import * as React from 'react'
import axios from 'axios'

const HomePage = () => {
  const [strains, setStrains] = React.useState([])

  return (
    <div className="home-profile">
      <h1 className="h1-profile">Welcome to Med-Cabinet!</h1>
      <h2>User Profile</h2>
      <h3>Recommended Strains</h3>
      <p>*Strains from register form*</p>
      <p>*Add/remove*</p>
    </div>
  )
}

export default HomePage

