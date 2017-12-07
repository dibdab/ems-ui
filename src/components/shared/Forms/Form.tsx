import * as React from 'react';

import { IFormProps, IFormInput, IFormButton } from './IFormProps';
import './Form.css';

export { IFormProps, IFormInput, IFormButton } from './IFormProps';

export default function FormComponent(props: IFormProps): JSX.Element {
  return (
    <form className="form" action={props.formAction}>
      {props.children}
    </form>
  );
}

export function FormRow(props: IFormProps): JSX.Element {
  return <div className="form-row">{props.children}</div>;
}

export function FormInputContainer(props: IFormProps): JSX.Element {
  return <div className="form-input-container">{props.children}</div>;
}

export function FormTitle(props: IFormProps): JSX.Element {
  return <h1 className="form-title">{props.formTitle}</h1>;
}

export function FormInput(props: IFormInput): JSX.Element {
  return (
    <input
      id={props.inputId}
      placeholder={props.inputPlaceHolder}
      type={props.inputType}
    />
  );
}

export function FormButton(props: IFormButton): JSX.Element {
  return <input value={props.buttonValue} type={props.buttonType} />;
}
