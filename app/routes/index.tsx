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

      <Button type='primary' href='/wallet'>
        wallet kyc
      </Button>

      <Divider />

      <div>modal</div>
      <SignupSuccess />
      <UpgradLv1Complete />
      <WrongInfomation />
    </div>
  )
}
