import SignUpWalletPassword from '~/components/v2/signUpPassword/SignUpPassword'

export default function FormAddress() {
  return (
    <div
      style={{
        margin: 'auto',
        maxWidth: '500px',
        background: 'rgba(0, 0, 0, .30)',
      }}
    >
      <SignUpWalletPassword />
    </div>
  )
}
