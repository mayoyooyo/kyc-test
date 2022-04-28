import { Menu } from 'antd'
const SubMenu = Menu.SubMenu

export default function WalletNavBar() {
  return (
    <Menu mode='horizontal'>
      <Menu.Item key='mail'>
        <a href='/'>Home</a>
      </Menu.Item>
      <SubMenu key='KYC' title={<span>Wallet-KYC</span>}>
        <Menu.Item key='setting:1'>
          <a href='/wallet/signup'>sign up</a>
        </Menu.Item>
        <Menu.Item key='setting:2'>
          <a href='/wallet/verify'>phone verify</a>
        </Menu.Item>
        <Menu.Item key='setting:3'>
          <a href='/wallet/password'>sign up password</a>
        </Menu.Item>
        <Menu.Item key='setting:4'>
          <a href='/wallet/upgradeLv1'>upgrade lv 1</a>
        </Menu.Item>
        <Menu.Item key='setting:5'>
          <a href='/wallet/profile'>profile form</a>
        </Menu.Item>
        <Menu.Item key='setting:6'>
          <a href='/wallet/pin'>pin</a>
        </Menu.Item>
      </SubMenu>
    </Menu>
  )
}
