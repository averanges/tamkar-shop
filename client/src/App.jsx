import React from 'react'
import { RouterProvider } from 'react-router-dom'
import useRouter from './globalHooks/useRouterHook'


const App = () => {
  const router = useRouter()
  return (
      <RouterProvider router={router}/>
  )
}

export default App