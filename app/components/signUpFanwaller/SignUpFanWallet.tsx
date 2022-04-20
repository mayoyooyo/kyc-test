// @ts-ignore
import Form from '@rjsf/antd'
import { useEffect, useState } from 'react'
import uiSchema from './uiSchema.json'
import schema from './schema.json'

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
