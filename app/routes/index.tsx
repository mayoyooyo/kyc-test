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
      <Button type='primary' danger href='/v2/mobile-verify'>
        mobile verrify
      </Button>

      <Divider />
      <Button type='primary' href='/v2/register-profile'>
        address form
      </Button>
      <Button type='primary' href='/v2/upgrade-level-1'>
        upgrade Level 1
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
    </div>
  )
}
