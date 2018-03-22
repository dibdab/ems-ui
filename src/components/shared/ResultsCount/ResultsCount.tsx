import * as React from 'react';

import IResultsCountProps from './IResultsCountProps';
import './ResultsCount.css';

export default function ResultsCount(props: IResultsCountProps) {
    return (
        <div className="dashboardTable-results-count">
            {props.resultsLength} {props.resultsName} found.
        </div>
    );
}
