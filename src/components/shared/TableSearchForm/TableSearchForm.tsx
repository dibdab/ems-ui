import * as React from 'react';
import { ChangeEvent, FormEvent } from 'react';

import ITableSearchFormProps from './ITableSearchFormProps';
import ITableSearchFormState from './ITableSearchFormState';
import './TableSearchForm.css';

import MinimizeButton from 'components/shared/MinimizeButton/MinimizeButton';
import DateRangeInput from 'components/shared/DateRangeInput/DateRangeInput';
import store from 'store';
import { EventsActionCreators, SubscribersActionCreators } from 'redux_';
import { getTableData } from 'services';

import { tableTypes } from 'enums';
import { IEventFilter } from 'types';

export default class TableSearchForm extends React.Component<
    ITableSearchFormProps,
    ITableSearchFormState
    > {
    private textArea: HTMLTextAreaElement;
    constructor(props: ITableSearchFormProps) {
        super(props);
        this.state = {
            filter: JSON.stringify(this.props.filter, null, 2),
            limit: '10',
            isFilterInvalid: false,
            selectedEventName: '',
            selectedFromDate: '',
            selectedToDate: '',
            isMinimized: false,
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSelectEventName = this.handleSelectEventName.bind(this);
        this.handleLimitChange = this.handleLimitChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps: ITableSearchFormProps) {
        const nextFilterString = JSON.stringify(nextProps.filter, null, 2);
        const nextFilter = nextProps.filter as IEventFilter;
        if (
            this.state.filter !== nextFilterString
            || this.state.selectedEventName !== nextProps.filter.event
        ) {
            if (this.props.tableName === tableTypes.Events) {
                if (this.state.selectedFromDate !== nextFilter.timeStamp.$gte.$date) {
                    this.setState({
                        selectedFromDate:
                            nextFilter.timeStamp.$gte.$date.substring(0, 10),
                    });
                }
                if (this.state.selectedToDate !== nextFilter.timeStamp.$lte.$date) {
                    this.setState({
                        selectedToDate:
                            nextFilter.timeStamp.$lte.$date.substring(0, 10),
                    });
                }
            }
            this.setState({
                filter: nextFilterString,
                selectedEventName: nextProps.filter.event !== undefined
                    ? nextProps.filter.event as string
                    : '',
            });
        }
    }

    componentDidUpdate(prevProps: ITableSearchFormProps, prevState: ITableSearchFormState) {
        this.resizeTextArea(this.textArea);
    }

    handleSearchChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (this.props.tableName === tableTypes.Subscribers) {
            this.setState({ filter: event.target.value ? event.target.value : '{}' });
        } else {
            const eventsDefaultFilter: IEventFilter = {
                event: '',
                timeStamp: {
                    $gte: { $date: '' },
                    $lte: { $date: '' },
                },
            };
            this.setState({
                filter: event.target.value
                    ? event.target.value
                    : JSON.stringify(eventsDefaultFilter, null, 2),
            });
        }
        this.resizeTextArea(event.target);
    }

    resizeTextArea(element: HTMLTextAreaElement) {
        element.style.height = 'auto';
        element.style.height = (element.scrollHeight - 22) + 'px';
    }

    handleSearchBlur = () => {
        // TODO: Investigate a way to cause filter error if json is incorrect type
        try {
            const filter = JSON.parse(this.state.filter);
            this.setState({ isFilterInvalid: false });
            this.dispatchFilter(filter);
        } catch (error) {
            this.setState({ isFilterInvalid: true });
        }
    }

    handleLimitChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ limit: event.target.value });
    }

    handleSelectEventName = (event: ChangeEvent<HTMLSelectElement>) => {
        const filter = this.props.filter;
        if (event.target.value) {
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

    handleSelectDateRange = (fromDate: string, toDate: string) => {
        const filter = this.props.filter as IEventFilter;
        let selectedFromDate = fromDate;
        let selectedToDate = toDate;
        if (!selectedFromDate) {
            selectedFromDate = this.state.selectedFromDate;
        }
        if (!selectedToDate) {
            selectedToDate = this.state.selectedToDate;
        }
        filter.timeStamp = {
            $gte: { $date: selectedFromDate },
            $lte: { $date: selectedToDate },
        };
        this.setState({
            filter: JSON.stringify(filter, null, 2),
            selectedFromDate: selectedFromDate.substring(0, 10),
            selectedToDate: selectedToDate.substring(0, 10),
        });
    }

    handleSubmit(e: FormEvent<HTMLFormElement>) {
        try {
            this.dispatchFilter(JSON.parse(this.state.filter));
            this.setState({ isFilterInvalid: false });
            getTableData(
                this.props.tableName,
                this.state.filter,
                parseInt(this.state.limit, 10),
            );
        } catch (error) {
            this.setState({ isFilterInvalid: true });
        }

        e.preventDefault();
    }

    handleReset = () => {
        let initFilter;
        if (this.props.tableName === tableTypes.Events) {
            initFilter = {
                event: '',
                timeStamp: {
                    $gte: { $date: '' },
                    $lte: { $date: '' },
                },
            };
        } else {
            initFilter = {};
        }
        this.dispatchFilter(initFilter);
        this.setState({
            filter: JSON.stringify(initFilter, null, 2),
            selectedEventName: '',
            selectedFromDate: '',
            selectedToDate: '',
        });
    }

    handleMinimize = () => {
        this.setState({ isMinimized: !this.state.isMinimized });
    }

    dispatchFilter(filter: any) {
        switch (this.props.tableName) {
            case (tableTypes.Events):
                store.dispatch(EventsActionCreators.eventsFilterChange(filter));
                break;
            case (tableTypes.Subscribers):
                store.dispatch(SubscribersActionCreators.subscribersFilterChange(filter));
                break;
        }
    }

    render() {
        const filterInvalidClass = this.state.isFilterInvalid
            ? 'error'
            : '';
        const eventNamesInputLoadingClass = this.props.eventNamesIsLoading
            ? 'loading'
            : '';
        const isMinimized = this.state.isMinimized
            ? 'dashboardTable-searchForm-container-minimized'
            : '';
        const heightClass = this.props.tableName === tableTypes.Subscribers
            ? 'subscribers-height'
            : 'events-height';
        let eventNamesList;
        let datePicker;
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
        if (this.props.tableName === tableTypes.Events) {
            datePicker = (
                <div className="input-container">
                    <DateRangeInput
                        onSelectDateRange={this.handleSelectDateRange}
                        selectedFromDate={this.state.selectedFromDate}
                        selectedToDate={this.state.selectedToDate}
                    />
                </div>
            );
        }
        return (
            <div className={`dashboardTable-searchForm-container ${isMinimized}`} >
                <form action="submit" onSubmit={this.handleSubmit}>
                    <div className="input-container-group">
                        <div className="input-container">
                            <label>
                                {this.props.tableName === tableTypes.Events ? 'Event name*' : 'Event name'}
                            </label>
                            <select
                                onChange={this.handleSelectEventName}
                                className={`input dashboardTable-searchForm-eventNameInput ${eventNamesInputLoadingClass}`}
                                title="Event name"
                                required={this.props.tableName === tableTypes.Events ? true : false}
                                value={this.state.selectedEventName}
                            >
                                {eventNamesList}
                            </select>
                        </div>
                        {datePicker}
                        <div className="input-container">
                            <label>Result limit*</label>
                            <input
                                className="input dashboardTable-searchForm-limitInput"
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
                    </div>
                    <div className="input-container-group">
                        <div className="input-container">
                            <label>Filter</label>
                            <textarea
                                ref={textArea => { this.textArea = textArea as HTMLTextAreaElement; }}
                                className={`input dashboardTable-searchForm-searchInput ${filterInvalidClass} ${heightClass}`}
                                value={this.state.filter}
                                onChange={this.handleSearchChange}
                                onBlur={this.handleSearchBlur}
                                placeholder="keyName: value, event: image_event..."
                                title="Json string to filter on."
                            />
                        </div>

                        <div className="input-container">
                            <button title="Submit" className="button button-bordered elevation-2" type="submit">
                                <i
                                    title="Submit"
                                    className="fas fa-search button-icon"
                                />
                            </button>
                        </div>
                        <div className="input-container">
                            <button
                                title="Reset"
                                className="button button-bordered elevation-2"
                                type="button"
                                onClick={this.handleReset}
                            >
                                <i className="fas fa-eraser button-icon" />
                            </button>
                        </div>
                    </div>
                    <span className="dashboardTable-requiredKey">* Required</span>
                </form>
                <MinimizeButton isMinimized={this.state.isMinimized} onMinimize={this.handleMinimize} />
            </div>
        );
    }
}
