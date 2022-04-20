import { Button } from 'antd'

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
      <Button type='primary' href='/v0v1-register'>
        v0v1Register
      </Button>
      <Button type='primary' href='/signup/'>
        signup-fanwallet
      </Button>
      <Button type='primary' href='/signup/mobile-verify'>
        mobile verrify
      </Button>
      <Button type='primary' href='/signup/password'>
        signup-password
      </Button>
      <Button type='primary' href='/signup/upgrade-v1'>
        upgrade-v1
      </Button>
    </div>
  )
}
