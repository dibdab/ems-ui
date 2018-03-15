import * as React from 'react';

import IDateRangeInputProps from './IDateRangeInputProps';

export default class DateRangeInput extends React.Component<
    IDateRangeInputProps
    > {
    constructor(props: IDateRangeInputProps) {
        super(props);

        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
    }

    handleFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.onDateSelect(event.target.value, this.props.selectedToDate);
    }

    handleToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.onDateSelect(this.props.selectedFromDate, event.target.value);
    }

    onDateSelect = (fromDate: string, toDate: string) => {
        if (fromDate) {
            fromDate = this.ToISOString(fromDate);
        }
        if (toDate) {
            toDate = this.ToISOString(toDate);
        }
        this.props.onSelectDateRange(fromDate, toDate);
    }

    ToISOString(value: string): string {
        return new Date(Date.parse(value)).toISOString();
    }

    render() {
        return (
            <React.Fragment>
                <label>Events from*</label>
                <input
                    onChange={this.handleFromChange}
                    value={this.props.selectedFromDate}
                    className="dashboardTable-searchForm-dataPicker"
                    type="date"
                    required={true}
                    title="Filter from this date."
                />
                <span className="dashboardTable-searchForm-dataPicker-separator">to</span>
                <input
                    onChange={this.handleToChange}
                    value={this.props.selectedToDate}
                    className="dashboardTable-searchForm-dataPicker"
                    type="date"
                    required={true}
                    title="Filter to this date."
                />
            </React.Fragment>
        );
    }
}
