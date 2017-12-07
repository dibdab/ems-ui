export interface IFormProps {
    formAction?: string,
    formTitle?: string,
    children?: {}
}

export interface IFormInput {
    inputId: string,
    inputType: string,
    inputPlaceHolder?: string
}

export interface IFormButton {
    buttonType: string,
    buttonValue: string
}