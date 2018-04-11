import * as React from 'react';

import ITableHeaderProps from './ITableHeaderProps';
import './TableHeader.css';

export default function TableHeader(props: ITableHeaderProps) {
    return (
        <React.Fragment>
            <div className="dashboardTable-header">
                <div className="dashboardTable-help">
                    Right click table rows for filter options.
                </div>
                <div className="dashboardTable-results-count">
                    {props.resultsLength} {props.resultsName} found.
                </div>
            </div>
        </React.Fragment>
    );
}
