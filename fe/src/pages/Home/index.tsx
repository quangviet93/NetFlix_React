import { Outlet } from 'react-router-dom'

export const Home: React.FC = () => {
  return (
    <div>
      Hello Home
      <Outlet />
    </div>
  )
}

