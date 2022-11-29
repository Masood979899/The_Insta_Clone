import React from 'react'
import Navigation from './src'
import { Amplify } from 'aws-amplify'
import config from './src/aws-exports'
import AuthProvider from './src/context/AuthContext'

Amplify.configure(config)



const App = () => {

  return (
  <AuthProvider>
  <Navigation/>
  </AuthProvider>
    )
}



export default App