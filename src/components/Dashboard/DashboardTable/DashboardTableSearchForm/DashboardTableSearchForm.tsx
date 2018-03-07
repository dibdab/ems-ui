import * as React from 'react';
import { ChangeEvent, FormEvent } from 'react';

import IDashboardTableSearchFormProps from './IDashboardTableSearchFormProps';
import IDashboardTableSearchFormState from './IDashboardTableSearchFormState';
import './DashboardTableSearchForm.css';

import store from 'store';
import { TableDataActionCreators } from 'redux_';
import { getTableData } from 'services';

import { tableDataTypes } from 'enums';
import { IEventFilter } from 'types';

export default class DashboardTableSearchForm extends React.Component<
    IDashboardTableSearchFormProps,
    IDashboardTableSearchFormState
    > {
    private textArea: HTMLTextAreaElement;
    constructor(props: IDashboardTableSearchFormProps) {
        super(props);
        const filter = JSON.stringify(this.props.filter, null, 2);
        const selectedEventName = typeof this.props.filter.event === 'string' ?
            this.props.filter.event :
            '';
        const selectedReceivedDate = typeof this.props.filter.receivedDate === 'string' ?
            this.props.filter.receivedDate as string :
            '';
        this.state = {
            filter,
            limit: '10',
            isFilterInvalid: false,
            selectedEventName,
            selectedReceivedDate,
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleLimitChange = this.handleLimitChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps: IDashboardTableSearchFormProps) {
        const filter = JSON.stringify(nextProps.filter, null, 2);
        if (
            this.state.filter !== filter ||
            this.state.selectedEventName !== nextProps.filter.event ||
            this.state.selectedReceivedDate !== nextProps.filter.receivedDate
        ) {
            this.setState({
                filter,
                selectedEventName: typeof nextProps.filter.event === 'string' ?
                    nextProps.filter.event :
                    '',
                selectedReceivedDate: typeof nextProps.filter.receivedDate === 'string' ?
                    nextProps.filter.receivedDate as string :
                    '',
            });
        }
    }

    componentDidUpdate(prevProps: IDashboardTableSearchFormProps, prevState: IDashboardTableSearchFormState) {
        if (this.state.filter !== prevState.filter) {
            this.resizeTextArea(this.textArea);
        }
    }

    handleSearchChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({ filter: event.target.value ? event.target.value : '{}' });
        this.resizeTextArea(event.target);
    }

    resizeTextArea(element: HTMLTextAreaElement) {
        element.style.height = '1px';
        element.style.height = (element.scrollHeight - 22) + 'px';
    }

    handleSearchBlur = () => {
        try {
            const filter = JSON.parse(this.state.filter);
            this.setState({ isFilterInvalid: false });
            store.dispatch(TableDataActionCreators.tableDataFilterChange(filter));
        } catch (error) {
            this.setState({ isFilterInvalid: true });
        }
    }

    handleLimitChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ limit: event.target.value });
    }

    handleSelectEventName = (event: ChangeEvent<HTMLSelectElement>) => {
        const filter = this.props.filter;
        if (event.target.value && event.target.value) {
            filter.event = event.target.value;
            this.setState({
                filter: JSON.stringify(filter, null, 2),
                selectedEventName: event.target.value,
            });
        } else {
            filter.event = undefined;
            this.setState({
                filter: JSON.stringify(filter, null, 2),
                selectedEventName: '',
            });
        }
    }

    handleChangeReceivedDate = (event: ChangeEvent<HTMLInputElement>) => {
        const filter = this.props.filter;
        if (event.target.value && event.target.value) {
            (filter as IEventFilter).receivedDate = event.target.value;
            this.setState({
                filter: JSON.stringify(filter, null, 2),
                selectedReceivedDate: event.target.value,
            });
        } else {
            (filter as IEventFilter).receivedDate = undefined;
            this.setState({
                filter: JSON.stringify(filter, null, 2),
                selectedReceivedDate: '',
            });
        }
    }

    handleReset = () => {
        this.setState({ filter: '{}', selectedEventName: '', selectedReceivedDate: '' });
    }

    handleSubmit(event: FormEvent<HTMLFormElement>) {
        try {
            store.dispatch(TableDataActionCreators.tableDataFilterChange(JSON.parse(this.state.filter)));
            this.setState({ isFilterInvalid: false });
            getTableData(
                this.props.tableName,
                this.state.filter,
                parseInt(this.state.limit, 10),
            );
        } catch (error) {
            this.setState({ isFilterInvalid: true });
        }

        event.preventDefault();
    }

    render() {
        let datePicker;
        const isFilterInvalidClass = this.state.isFilterInvalid
            ? 'error'
            : '';
        const eventNamesInputLoadingClass = this.props.eventNamesIsLoading
            ? 'loading'
            : '';

        if (this.props.tableName === tableDataTypes.Events) {
            datePicker = (
                <div className="dashboardTable-searchForm-inputContainer">
                    <label>Received Date*</label>
                    <input
                        onChange={this.handleChangeReceivedDate}
                        value={this.state.selectedReceivedDate}
                        className="dashboardTable-searchForm-dataPicker"
                        type="date"
                        required={true}
                    />
                </div>
            );
        }
        let eventNamesList;
        if (this.props.eventNames.events.length <= 0 && !this.props.eventNamesIsLoading) {
            eventNamesList = (
                <option value="">Could not retrieve event names.</option>
            );
        } else if (!this.props.eventNamesIsLoading) {
            const eventNamesOptions = this.props.eventNames.events.map((eventName: string) => (
                <option key={eventName} value={eventName}>{eventName}</option>
            ));
            eventNamesList = (
                <React.Fragment>
                    <option value="" />
                    {eventNamesOptions}
                </React.Fragment>
            );
        }
        return (
            <div className="dashboardTable-searchForm-container" >
                <form action="submit" onSubmit={this.handleSubmit}>
                    <div className="dashboardTable-searchForm-inputContainer">
                        <label>
                            {this.props.tableName === tableDataTypes.Events ? 'Event name*' : 'Event name (optional)'}
                        </label>
                        <select
                            onChange={this.handleSelectEventName}
                            className={`dashboardTable-searchForm-eventNameInput ${eventNamesInputLoadingClass}`}
                            title="Event name"
                            required={this.props.tableName === tableDataTypes.Events ? true : false}
                            value={this.state.selectedEventName}
                        >
                            {eventNamesList}
                        </select>
                    </div>
                    {datePicker}
                    <div className="dashboardTable-searchForm-inputContainer">
                        <label>Json filter</label>
                        <textarea
                            ref={textArea => { this.textArea = textArea as HTMLTextAreaElement; }}
                            className={`dashboardTable-searchForm-searchInput ${isFilterInvalidClass}`}
                            value={this.state.filter}
                            onChange={this.handleSearchChange}
                            onBlur={this.handleSearchBlur}
                            placeholder="keyName: value, event: image_event..."
                            title="Json string to filter on."
                        />
                    </div>
                    <div className="dashboardTable-searchForm-inputContainer">
                        <label>Result limit*</label>
                        <input
                            className="dashboardTable-searchForm-limitInput"
                            type="number"
                            value={this.state.limit}
                            onChange={this.handleLimitChange}
                            placeholder="1-100*"
                            maxLength={3}
                            min={1}
                            max={100}
                            required={true}
                            title="No. of Results to Return."
                        />
                    </div>
                    <button title="Submit" className="dashboardTable-searchForm-button button" type="submit">
                        <i title="Submit" className="fas fa-search dashboardTable-searchForm-searchIcon button" />
                    </button>
                    <button
                        title="Reset"
                        className="dashboardTable-searchForm-button button"
                        type="button"
                        onClick={this.handleReset}
                    >
                        <i className="fas fa-eraser dashboardTable-searchForm-searchIcon button" />
                    </button>
                    <span className="dashboardTable-requiredKey">* Required</span>
                </form>

            </div>
        );
    }
}
