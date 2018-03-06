import * as React from 'react';
import { ChangeEvent, FormEvent } from 'react';

import IDashboardTableSearchFormProps from './IDashboardTableSearchFormProps';
import IDashboardTableSearchFormState from './IDashboardTableSearchFormState';
import './DashboardTableSearchForm.css';

import store from 'store';
import { TableDataActionCreators } from 'redux_';
import { getTableData } from 'services';

import { tableDataTypes } from 'enums';

export default class DashboardTableSearchForm extends React.Component<
    IDashboardTableSearchFormProps,
    IDashboardTableSearchFormState
    > {
    private textArea: HTMLTextAreaElement;
    constructor(props: IDashboardTableSearchFormProps) {
        super(props);
        this.state = {
            filter: JSON.stringify(this.props.filter),
            limit: '10',
            isFilterInvalid: false,
            selectedEventName: typeof this.props.filter.event === 'string' ? this.props.filter.event : '',
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleLimitChange = this.handleLimitChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps: IDashboardTableSearchFormProps) {
        if (this.state.filter !== JSON.stringify(nextProps.filter)) {
            this.setState({
                filter: JSON.stringify(nextProps.filter, null, 2),
                selectedEventName: typeof nextProps.filter.event === 'string' ? nextProps.filter.event : '',
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

    handleOnSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value && event.target.value) {
            const filter = this.props.filter;
            filter.event = event.target.value;
            this.setState({
                filter: JSON.stringify(filter, null, 2),
                selectedEventName: event.target.value,
            });
        } else {
            const filter = this.props.filter;
            filter.event = undefined;
            this.setState({
                filter: JSON.stringify(filter, null, 2),
                selectedEventName: '',
            });
        }
    }

    handleReset = () => {
        this.setState({ filter: '{}', selectedEventName: '' });
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
        const isFilterInvalidClass = this.state.isFilterInvalid
            ? 'error'
            : '';
        const eventNamesInputLoadingClass = this.props.eventNamesIsLoading
            ? 'loading'
            : '';
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
                    <option
                        value=""
                    >
                        {this.props.tableName === tableDataTypes.Events ? 'Event name*' : 'Event name (optional)'}
                    </option>
                    {eventNamesOptions}
                </React.Fragment>
            );
        }
        return (
            <div className="dashboardTable-searchbar-container" >
                <form action="submit" onSubmit={this.handleSubmit}>
                    <select
                        onChange={this.handleOnSelect}
                        className={`dashboardTable-searchbar-eventNameInput ${eventNamesInputLoadingClass}`}
                        title="Event name"
                        required={this.props.tableName === tableDataTypes.Events ? true : false}
                        value={this.state.selectedEventName}
                    >
                        {eventNamesList}
                    </select>
                    <textarea
                        ref={textArea => { this.textArea = textArea as HTMLTextAreaElement; }}
                        className={`dashboardTable-searchbar-searchInput ${isFilterInvalidClass}`}
                        value={this.state.filter}
                        onChange={this.handleSearchChange}
                        onBlur={this.handleSearchBlur}
                        placeholder="keyName: value, event: image_event..."
                        title="Json string to filter on."
                    />
                    <input
                        className="dashboardTable-searchbar-limitInput"
                        type="number"
                        value={this.state.limit}
                        onChange={this.handleLimitChange}
                        placeholder="1-100*"
                        maxLength={3}
                        min={1}
                        max={100}
                        required={true}
                        title="No. of Results to Return"
                    />
                    <button title="Submit" className="dashboardTable-searchbar-button button" type="submit">
                        <i title="Submit" className="fas fa-search dashboardTable-searchbar-searchIcon button" />
                    </button>
                    <button
                        title="Reset"
                        className="dashboardTable-searchbar-button button"
                        type="button"
                        onClick={this.handleReset}
                    >
                        <i className="fas fa-eraser dashboardTable-searchbar-searchIcon button" />
                    </button>
                    <span className="dashboardTable-requiredKey">* Required</span>
                </form>

            </div>
        );
    }
}
