import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './components/Home'
import HereSection from './components/HereSection';
import Signup from './auth/Signup';
import Demostores from './components/Demostores';

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
        {
          path: '/demo',
          element: <Demostores />,
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
