import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/index'
import { Header } from '../Header/index'
import styles from './index.module.scss'

interface IProps {
  header?: boolean
}

const MainLayout = ({ header }: IProps) => {
  return (
    <Layout>
      {<Header />}
      <div>
        <div>
          <Outlet />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </Layout>
  )
}

export default MainLayout

