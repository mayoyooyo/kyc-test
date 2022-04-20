// @ts-ignore
import Form from '@rjsf/antd'
import { useEffect, useState } from 'react'

import schema from './schema.json'
import uiSchema from './uiSchema.json'

export default function ProfileRegister() {
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
