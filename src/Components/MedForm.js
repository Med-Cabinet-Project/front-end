import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import * as yup from 'yup';

const MedForm = ({ credentials, handleChange }) => {


  const schema = yup.object().shape({
    depression: yup.boolean(),
    insomnia: yup.boolean(),
    eye: yup.boolean(),
    fatigue: yup.boolean(),
    headaches: yup.boolean(),
    inflammation: yup.boolean(),
    eating: yup.boolean(),
    spasms: yup.boolean(),
    pain: yup.boolean(),
    seizures: yup.boolean(), 
    spasticity: yup.boolean(),
    stress: yup.boolean(),
    nausea: yup.boolean(),
    creative: yup.boolean(),
    energetic: yup.boolean(),
    euphoric: yup.boolean(),
    focused: yup.boolean(),
    giggly: yup.boolean(),
    happy: yup.boolean(),
    hungry: yup.boolean(),
    relaxed: yup.boolean(),
    sleepy: yup.boolean(),
    talkative: yup.boolean(),
    tingly: yup.boolean(),
    uplifted: yup.boolean(),
    other: yup.string(),
  })
  
  
  return (
    
    // <Form onSubmit={(e) => {
    //     e.preventDefault()
    //     submit()
    // }}>
    <>
    <FormGroup tag='fieldset'>
      <legend>Medicinal Symptons</legend>
      <legend>Must Select 2</legend>
      
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='insomnia' checked={credentials.insomnia} onChange={handleChange} />
          Insomnia
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='depression' checked={credentials.depression} onChange={handleChange} />
          Depression
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='eye' checked={credentials.eye} onChange={handleChange} />
          Eye Pressure
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='fatigue' checked={credentials.fatigue} onChange={handleChange} />
          Fatigue
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='headaches' checked={credentials.headaches} onChange={handleChange} />
          Headaches
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='inflammation' checked={credentials.inflammation} onChange={handleChange} />
          Inflammation
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='eating' checked={credentials.eating} onChange={handleChange} />
          Lack of Appetite
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='spasms' checked={credentials.spasms} onChange={handleChange} />
          Muscle Spasms
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
          <Input type='checkbox' name='pain' checked={credentials.pain} onChange={handleChange} />
          Pain
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='seizures' checked={credentials.seizures} onChange={handleChange} />
          Seizures
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='spasticity' checked={credentials.spasticity} onChange={handleChange} />
          Spasticity
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='stress' checked={credentials.stress} onChange={handleChange} />
          Stress
        </Label>
      </FormGroup>
    </FormGroup>
    
    <FormGroup tag='fieldset'>
      <legend>Positive Effects</legend>
      <legend>Must Select 2</legend>
      
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='creative' checked={credentials.creative} onChange={handleChange} />
          Creative
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='energetic' checked={credentials.energetic} onChange={handleChange} />
          Energetic
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='euphoric' checked={credentials.euphoric} onChange={handleChange} />
          Euphoric
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='focused' checked={credentials.focused} onChange={handleChange} />
          Focused
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='giggly' checked={credentials.giggly} onChange={handleChange} />
          Giggly
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='happy' checked={credentials.happy} onChange={handleChange} />
          Happy
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='hungry' checked={credentials.hungry} onChange={handleChange} />
          Hungry
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='relaxed' checked={credentials.relaxed} onChange={handleChange} />
          Relaxed
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='sleepy' checked={credentials.sleepy} onChange={handleChange} />
          Sleepy
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='talkative' checked={credentials.talkative} onChange={handleChange} />
          Talkative
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='tingly' checked={credentials.tingly} onChange={handleChange} />
          Tingly
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='uplifted' checked={credentials.uplifted} onChange={handleChange} />
          Uplifted
        </Label>
      </FormGroup>
    </FormGroup>
    <FormGroup>
      <legend>Any Other Details</legend>
        <Input type='textarea' name='other' value={credentials.other} onChange={handleChange} />
    </FormGroup>
    </>
  )
}

export default MedForm;