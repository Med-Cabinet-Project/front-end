import React, { useState } from 'react';
import { Card, Form, FormGroup, Label, Button, Input } from 'reactstrap';
import * as yup from 'yup';
import axios from 'axios';

const MedForm = ({ register, handleChange }) => {
  // const [register, setRegister] = useState({
  //   sleep: false,
  //   pain: false,
  //   eating: false,
  //   cancer: false,
  //   glaucoma: false,
  //   nausea: false,
  //   mental: false,
  // });

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
    <FormGroup tag='fieldset'>
      <legend>Medicinal Symptons</legend>
      <legend>Must Select 2</legend>
      
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='insomnia' checked={register.insomnia} onChange={handleChange} />
          Insomnia
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='depression' checked={register.depression} onChange={handleChange} />
          Depression
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='eye' checked={register.eye} onChange={handleChange} />
          Eye Pressure
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='fatigue' checked={register.fatigue} onChange={handleChange} />
          Fatigue
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='headaches' checked={register.headaches} onChange={handleChange} />
          Headaches
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='inflammation' checked={register.inflammation} onChange={handleChange} />
          Inflammation
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='eating' checked={register.eating} onChange={handleChange} />
          Lack of Appetite
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='spasms' checked={register.spasms} onChange={handleChange} />
          Muscle Spasms
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='nausea' checked={register.nausea} onChange={handleChange} />
          Nausea
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='pain' checked={register.pain} onChange={handleChange} />
          Pain
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='seizures' checked={register.seizures} onChange={handleChange} />
          Seizures
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='spasticity' checked={register.spasticity} onChange={handleChange} />
          Spasticity
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='stress' checked={register.stress} onChange={handleChange} />
          Stress
        </Label>
      </FormGroup>
    </FormGroup>

    <FormGroup tag='fieldset'>
      <legend>Positive Effects</legend>
      <legend>Must Select 2</legend>
      
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='creative' checked={register.creative} onChange={handleChange} />
          Creative
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='energetic' checked={register.energetic} onChange={handleChange} />
          Energetic
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='euphoric' checked={register.euphoric} onChange={handleChange} />
          Euphoric
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='focused' checked={register.focused} onChange={handleChange} />
          Focused
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='giggly' checked={register.giggly} onChange={handleChange} />
          Giggly
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='happy' checked={register.happy} onChange={handleChange} />
          Happy
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='hungry' checked={register.hungry} onChange={handleChange} />
          Hungry
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='relaxed' checked={register.relaxed} onChange={handleChange} />
          Relaxed
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='sleepy' checked={register.sleepy} onChange={handleChange} />
          Sleepy
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='talkative' checked={register.talkative} onChange={handleChange} />
          Talkative
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='tingly' checked={register.tingly} onChange={handleChange} />
          Tingly
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type='checkbox' name='uplifted' checked={register.uplifted} onChange={handleChange} />
          Uplifted
        </Label>
      </FormGroup>
    </FormGroup>
    <FormGroup>
      <legend>Any Other Details</legend>
        <Input type='textarea' name='other' value={register.other} onChange={handleChange} />
    </FormGroup>
  )
}

export default MedForm;