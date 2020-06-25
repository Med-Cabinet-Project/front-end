import React, { useState } from 'react';
import { Card, Form, FormGroup, Label, Button, Input } from 'reactstrap';
import * as yup from 'yup';
import axios from 'axios';

const MedForm = ({register}) => {
  const [formData, setFormData] = useState({
    sleep: false,
    pain: false,
    eating: false,
    cancer: false,
    glaucoma: false,
    nausea: false,
    mental: false,
  });

  const schema = yup.object().shape({
    sleep: yup.boolean(),
    pain: yup.boolean(),
    eating: yup.boolean(),
    cancer: yup.boolean(),
    glaucoma: yup.boolean(),
    nausea: yup.boolean(),
    mental: yup.boolean(),
  })
  const submit = () => {
      schema.validate(formData).then(() => {
          axios.post('', formData).then( (res) => {
              console.log(res.data, 'Selected Reasons')
          })
      })
  }
  const handleChange = e => {
      setFormData({...formData, [e.target.name]: e.target.checked})
  }
  
  return(

    <Form onSubmit={(e) => {
        e.preventDefault()
        submit()
    }}>
        <FormGroup tag='fieldset'>
          <legend>Medicinal Needs</legend>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='sleep' checked={formData.sleep} onChange={handleChange} />
              Sleep Aid
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='pain' checked={formData.pain} onChange={handleChange} />
              Pain
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='eating' checked={formData.eating} onChange={handleChange} />
              Eating Disorder
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='cancer' checked={formData.cancer} onChange={handleChange} />
              Cancer
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='glaucoma' checked={formData.glaucoma} onChange={handleChange} />
              Glaucoma
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='nausea' checked={formData.nausea} onChange={handleChange} />
              Nausea
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='mental' checked={formData.mental} onChange={handleChange} />
              Mental Health
            </Label>
          </FormGroup>
          <Button>Submit</Button>
        </FormGroup>
    </Form>
  )
}

export default MedForm;