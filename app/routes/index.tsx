import { Button, Divider } from 'antd'
import SignupSuccess from '~/components/kycRegister/v1/modal/SignupSuccess'
import UpgradLv1Complete from '~/components/kycRegister/v1/modal/UpgradeLv1Complete'
import WrongInfomation from '~/components/kycRegister/v1/modal/WrongInfomation'

export default function Index() {
  return (
    <div
      style={{
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '200px',
        textAlign: 'left',
      }}
    >
      <Divider />
      <Button type='primary' href='/v2/register-profile'>
        address form
      </Button>

      <Divider />
      <div>v1</div>
      <Button type='primary' href='/v1/sign-up-wallet'>
        sign up wallet
      </Button>
      <Button type='primary' href='/v1/sign-up-password'>
        sign up password
      </Button>
      <Button type='primary' href='/v1/upgrade-level1'>
        upgrade Level 1
      </Button>
      <Button type='primary' danger href='/v1/mobile-verification'>
        mobile verrify
      </Button>
      <Button type='primary' href='/v1/profile-information'>
        profile infomation
      </Button>
      <Button type='primary' href='/v1/setting-pin'>
        setting pin
      </Button>
      <Divider />
      <div>modal</div>
      <SignupSuccess />
      <UpgradLv1Complete />
      <WrongInfomation />
    </div>
  )
}
