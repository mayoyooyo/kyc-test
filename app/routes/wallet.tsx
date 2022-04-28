import { Layout } from 'antd'
import { Outlet } from 'remix'
import WalletNavBar from '~/components/shared/WalletNavBar'

export default function Wallet() {
  const { Content } = Layout
  return (
    <Layout>
      <WalletNavBar />
      <Outlet />
    </Layout>
  )
}
