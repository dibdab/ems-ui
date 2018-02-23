import * as React from 'react';
import { ChangeEvent, FormEvent } from 'react';

import IDashboardTableSearchFormProps from './IDashboardTableSearchFormProps';
import IDashboardTableSearchFormState from './IDashboardTableSearchFormState';
import './DashboardTableSearchForm.css';

import store from 'store';
import { TableDataActionCreators } from 'redux_';
import { getTableData } from 'services';

import { tableDataTypes } from 'enums';
import Config from 'config';

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
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleLimitChange = this.handleLimitChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps: IDashboardTableSearchFormProps) {
        if (this.state.filter !== JSON.stringify(nextProps.filter)) {
            this.setState({ filter: JSON.stringify(nextProps.filter, null, 2) });
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

    handleReset = () => {
        this.setState({ filter: '{}' });
    }

    handleSubmit(event: FormEvent<HTMLFormElement>) {
        try {
            store.dispatch(TableDataActionCreators.tableDataFilterChange(JSON.parse(this.state.filter)));
            this.setState({ isFilterInvalid: false });
            getTableData(
                this.props.tableName,
                tableDataTypes.Subscribers,
                Config.SUBSCRIBER_API_URL,
                this.state.filter,
                parseInt(this.state.limit, 10),
            );
        } catch (error) {
            this.setState({ isFilterInvalid: true });
        }

        event.preventDefault();
    }

    render() {
        const isAccordionVisibleClass = this.state.isFilterInvalid
            ? 'error'
            : '';
        return (
            <div className="dashboardTable-searchbar-container" >
                <form action="submit" onSubmit={this.handleSubmit}>
                    <textarea
                        ref={textArea => { this.textArea = textArea as HTMLTextAreaElement; }}
                        className={`dashboardTable-searchbar-searchInput ${isAccordionVisibleClass}`}
                        value={this.state.filter}
                        onChange={this.handleSearchChange}
                        onBlur={this.handleSearchBlur}
                        placeholder="keyName: value, event: image_event..."
                        title="Json String to Filter on"
                    />
                    <input
                        className="dashboardTable-searchbar-limitInput"
                        type="number"
                        value={this.state.limit}
                        onChange={this.handleLimitChange}
                        placeholder="1-100"
                        maxLength={3}
                        min={1}
                        max={100}
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
                </form>
                <div className="dashboardTable-searchbar-results-count">
                    {this.props.resultsCount} results found.
                </div>
            </div>
        );
    }
}
