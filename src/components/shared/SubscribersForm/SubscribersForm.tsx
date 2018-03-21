import * as React from 'react';

import ISubscribersFormProps from './ISubscribersFormProps';
import ISubscribersFormState from './ISubscribersFormState';

export default class TableSearchForm extends React.Component<
    ISubscribersFormProps,
    ISubscribersFormState
    > {
    constructor(props: ISubscribersFormProps) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <form >
                event
                listenerSystem
                options
                filter
                connector
            </form>
        );
    }
}
