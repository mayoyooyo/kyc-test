import { Button, Divider } from 'antd'

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
      <Button type='primary' href='/signup/v0v1-register'>
        v0v1Register
      </Button>
      <Button type='primary' href='/signup/'>
        signup-fanwallet
      </Button>
      <Button type='primary' danger href='/signup/mobile-verify'>
        mobile verrify
      </Button>
      <Button type='primary' href='/signup/password'>
        signup-password
      </Button>
      <Button type='primary' href='/signup/upgrade-v1'>
        upgrade-v1
      </Button>
      <Divider />
      <Button type='primary' href='/v2/register-profile'>
        address form
      </Button>
      <Button type='primary' href='/v2/upgrade-level-1'>
        upgrade Level 1
      </Button>
      <Button type='primary' href='/v2/sign-up-wallet'>
        sign up wallet
      </Button>
      <Button type='primary' href='/v2/sign-up-password'>
        sign up wallet password
      </Button>
    </div>
  )
}
