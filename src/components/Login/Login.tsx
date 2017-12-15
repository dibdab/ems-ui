import * as React from 'react';

import './Login.css';

import CardComponent from '../shared/Card/Card';
import Form, {
  FormButton,
  FormInput,
  FormInputContainer,
  FormRow,
  FormTitle,
  IFormProps,
} from '../shared/Forms/Form';

export default class Login extends React.Component {
  constructor(props: { form: IFormProps }) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="card-container elevation-2">
        <CardComponent>
          <Form formAction={'submit'}>
            <FormRow>
              <FormTitle formTitle={'Login'} />
            </FormRow>
            <FormRow>
              <FormInputContainer>
                <FormInput
                  inputId={'input-username'}
                  inputType={'text'}
                  inputPlaceHolder={'Username'}
                />
              </FormInputContainer>
            </FormRow>
            <FormRow>
              <FormInputContainer>
                <FormInput
                  inputId={'input-password'}
                  inputType={'password'}
                  inputPlaceHolder={'Password'}
                />
              </FormInputContainer>
            </FormRow>
            <FormRow>
              <FormButton buttonValue={'Go'} buttonType={'submit'} />
            </FormRow>
          </Form>
        </CardComponent>
      </div>
    );
  }
}
