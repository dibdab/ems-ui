import * as React from 'react';

import IDateRangeInputProps from './IDateRangeInputProps';
import IDateRangeInputState from './IDateRangeInputState';
import './DateRangeInput.css';

export default class DateRangeInput extends React.Component<
    IDateRangeInputProps,
    IDateRangeInputState
    > {
    constructor(props: IDateRangeInputProps) {
        super(props);

        this.state = {
            selectedFromDate: this.props.selectedFromDate,
            selectedToDate: this.props.selectedToDate,
        };

        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
    }

    componentWillReceiveProps(nextProps: IDateRangeInputProps) {
        if (this.props.selectedFromDate !== nextProps.selectedFromDate ||
            this.state.selectedFromDate !== nextProps.selectedFromDate ||
            this.props.selectedToDate !== nextProps.selectedToDate ||
            this.state.selectedToDate !== nextProps.selectedToDate
        ) {
            this.setState({
                selectedFromDate: nextProps.selectedFromDate,
                selectedToDate: nextProps.selectedToDate,
            });
        }
    }

    shouldComponentUpdate(nextProps: IDateRangeInputProps, nextState: IDateRangeInputState) {
        if (
            this.state.selectedFromDate === nextState.selectedFromDate &&
            this.props.selectedFromDate === nextProps.selectedFromDate &&
            this.state.selectedToDate === nextState.selectedToDate &&
            this.props.selectedToDate === nextProps.selectedToDate
        ) {
            if (this.state.selectedFromDate !== nextProps.selectedFromDate &&
                this.state.selectedToDate !== nextProps.selectedToDate
            ) {
                return false;
            }
        }
        return true;
    }

    handleFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ selectedFromDate: event.target.value });
        this.onDateSelect(event.target.value, this.state.selectedFromDate);
    }

    handleToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ selectedToDate: event.target.value });
        this.onDateSelect(this.state.selectedFromDate, event.target.value);
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
                    value={this.state.selectedFromDate}
                    className="dashboardTable-searchForm-dataPicker"
                    type="date"
                    required={true}
                    title="Filter from this date."
                />
                <span className="dashboardTable-searchForm-dataPicker-separator">to</span>
                <input
                    onChange={this.handleToChange}
                    value={this.state.selectedToDate}
                    className="dashboardTable-searchForm-dataPicker"
                    type="date"
                    required={true}
                    title="Filter to this date."
                />
            </React.Fragment>
        );
    }
}
