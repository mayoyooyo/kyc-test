// @ts-ignore
import Form from '@rjsf/antd'
import { useEffect, useState } from 'react'
import type { JSONSchema7 } from 'json-schema'

const schema: JSONSchema7 = {
  title: 'Signup - Fan Wallet',
  type: 'object',
  required: ['mobile', 'email', 'cardId'],
  properties: {
    mobile: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    cardId: {
      type: 'string',
    },
    isAcceptTerms: {
      title:
        'ฉันได้อ่านและยอมรับ เงื่อนไขการใช้บริการ และ นโยบายความเป็นส่วนตัว',
      type: 'boolean',
      default: false,
    },
    isAcceptUs: {
      title: 'ฉันยืนยันว่าไม่มีสัญชาติอเมริกา',
      type: 'boolean',
      default: false,
    },
  },
}

const uiSchema: any = {
  'ui:title': 'สมัครสามาชิก Fan Wallet',
  mobile: {
    'ui:title': 'หมายเลขโทรศัพท์มือถือ',
    'ui:options': {
      inputType: 'tel',
    },
  },
  email: {
    'ui:title': 'อีเมลล์',
    'ui:options': {
      inputType: 'email',
    },
  },
  cardId: {
    'ui:title': 'หมายเลขบัตรประจำตัวประชาชน',
  },
}

export default function SignUpFanWallet() {
  const [formData, setFormData] = useState<any>(null)

  useEffect(() => {
    console.log(formData)
  }, [formData])

  const handleSubmit = (e: any) => {
    setFormData(e.formData)
  }
  return (
    <div>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        showErrorList={false}
        onSubmit={(e: any) => handleSubmit(e)}
      />
    </div>
  )
}
