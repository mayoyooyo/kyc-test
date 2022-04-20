//@ts-ignore
import Form from '@rjsf/antd'
import type { JSONSchema7 } from 'json-schema'

const schema: JSONSchema7 = {
  type: 'object',
  required: ['password', 'confirmPassword'],
  properties: {
    password: {
      type: 'string',
    },
    confirmPassword: {
      type: 'string',
    },
  },
}

const uiSchema: any = {
  password: {
    'ui:widget': 'password',
  },
  confirmPassword: {
    'ui:widget': 'password',
  },
}

export default function SignUpPassword() {
  const mobile = '0859977636'
  return (
    <div>
      <div>
        <p>Sign up - Fan wallet</p>
        <p>your password for</p>
        <p>mobile {mobile}</p>
      </div>
      <Form schema={schema} uiSchema={uiSchema} />
      <div>
        <header>ตั้งรหัสผ่านอย่างปลอดภัย:</header>
        <ul>
          <li>มีความยาวอย่างน้อย 8 ตัวอักษร</li>
          <li>มีทั้งตัวเลขและตัวอักษรภาษาอังกฤษ</li>
          <li>มีตัวอักษรเล็กและใหญ่</li>
          <li>มีอักขระพิเศษ (!@#$%^*-_+=)</li>
        </ul>
      </div>
    </div>
  )
}
