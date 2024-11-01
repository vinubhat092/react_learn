import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import CreatePoster from "./components/CreatePoster.jsx"
import PostList from './components/PostList.jsx'

const router = createBrowserRouter([
  {path:"/",element:<App />,children:[
    {path:"/create-post",element:<CreatePoster />},
    {path:"/",element:<PostList />}
  ]}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
