import { useState } from 'react'
import './App.css'
import Layout from './component/Layout'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
    <h1>our page branch</h1>
    <Layout>
      <Outlet/>
    </Layout>
    </>
  )
}

export default App
