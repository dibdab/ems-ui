import * as React from 'react';

import ITextInputProps from './ITextInputProps';

export default class TextInput extends React.Component<
    ITextInputProps
    > {
    constructor(props: ITextInputProps) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <div className="input-container">
                <input
                    type="text"
                    placeholder="messageID"
                    title="Enter Message ID."
                    className="input"
                    value={this.props.value}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}
