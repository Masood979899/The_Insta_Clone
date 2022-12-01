import React from 'react'
import Navigation from './src'
import { Amplify } from 'aws-amplify'
import config from './src/aws-exports'
import AuthProvider from './src/context/AuthContext'


const updatedconfig={ ...config, oauth:{...config.oauth,
   redirectSignIn:"instaclone://", 
   redirectSignOut:"instaclone://",
  }}


Amplify.configure(updatedconfig)



const App = () => {

  return (
  <AuthProvider>
  <Navigation/>
  </AuthProvider>
    )
}



export default App