import * as React from 'react';

import ILoadingSpinnerProps from './ILoadingSpinnerProps';
import './LoadingSpinner.css';

export default function LoadingSpinner(props: ILoadingSpinnerProps) {
    if (!props.isLoading) {
        return null;
    } else {
        return <div className="loader">Loading...</div>;
    }
}
