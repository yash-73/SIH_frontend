import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import Mainpage from './Pages/Mainpage.jsx'
// import Registration from './Pages/Registration.jsx'
// import AccountSignIn from './Pages/AccountSignIn.jsx'
// import NoMatch from './Pages/NoMatch.jsx'



// const newRouter = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App/>}>
//       <Route path='/' element={<Mainpage/>}/>
//       <Route path='/register' element={<Registration/>}/>
//       <Route path='/login' element={<AccountSignIn/>}/>
//       <Route path='*' element={<NoMatch/>}/>
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </StrictMode>
)
