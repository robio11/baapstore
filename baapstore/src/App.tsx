import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './components/Home'
import HereSection from './components/HereSection';
import Signup from './auth/Signup';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: '/',
          element: <HereSection />,
        },
      ],
    },
    {
      path:"/signup",
      element:<Signup/>
    },
  ])
  return (
    <>
      <main>
        <RouterProvider router={appRouter} />
      </main>
    </>
  )
}

export default App
