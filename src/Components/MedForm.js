import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import * as yup from 'yup';

const MedForm = ({ credentials, handleChange }) => {
  // const [register, setRegister] = useState({
  //   sleep: false,
  //   pain: false,
  //   eating: false,
  //   cancer: false,
  //   glaucoma: false,
  //   nausea: false,
  //   mental: false,
  // });

  // const schema = yup.object().shape({
  //   sleep: yup.boolean(),
  //   pain: yup.boolean(),
  //   eating: yup.boolean(),
  //   cancer: yup.boolean(),
  //   glaucoma: yup.boolean(),
  //   nausea: yup.boolean(),
  //   mental: yup.boolean(),
  // })
  
  
  return(

    // <Form onSubmit={(e) => {
    //     e.preventDefault()
    //     submit()
    // }}>
        <FormGroup tag='fieldset'>
          <legend>Medicinal Needs</legend>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='sleep' checked={credentials.sleep} onChange={handleChange} />
              Sleep Aid
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='pain' checked={credentials.pain} onChange={handleChange} />
              Pain
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='eating' checked={credentials.eating} onChange={handleChange} />
              Eating Disorder
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='cancer' checked={credentials.cancer} onChange={handleChange} />
              Cancer
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='glaucoma' checked={credentials.glaucoma} onChange={handleChange} />
              Glaucoma
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='nausea' checked={credentials.nausea} onChange={handleChange} />
              Nausea
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='mental' checked={credentials.mental} onChange={handleChange} />
              Mental Health
            </Label>
          </FormGroup>
        </FormGroup>
    // </Form>
  )
}

export default MedForm;