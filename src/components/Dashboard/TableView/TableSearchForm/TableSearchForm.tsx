import * as React from 'react';
import { ChangeEvent, FormEvent } from 'react';

import ITableSearchFormProps from './ITableSearchFormProps';
import ITableSearchFormState from './ITableSearchFormState';
import './TableSearchForm.css';

import store from 'store';
import { SubscriberActionCreators } from 'redux_';
import { getTableData } from 'services';

import { tableDataTypes } from 'enums';
import Config from 'config';

export default class TableSearchForm extends React.Component<ITableSearchFormProps, ITableSearchFormState> {
    private textArea: HTMLTextAreaElement;
    constructor(props: ITableSearchFormProps) {
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

    componentWillReceiveProps(nextProps: ITableSearchFormProps) {
        if (this.state.filter !== JSON.stringify(nextProps.filter)) {
            this.setState({ filter: JSON.stringify(nextProps.filter, null, 2) });
        }
    }

    componentDidUpdate(prevProps: ITableSearchFormProps, prevState: ITableSearchFormState) {
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
            store.dispatch(SubscriberActionCreators.subscribersFilterChange(filter));
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
            store.dispatch(SubscriberActionCreators.subscribersFilterChange(JSON.parse(this.state.filter)));
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
            <div className="tableView-searchbar-container" >
                <form action="submit" onSubmit={this.handleSubmit}>
                    <textarea
                        ref={textArea => { this.textArea = textArea as HTMLTextAreaElement; }}
                        className={`tableView-searchbar-searchInput ${isAccordionVisibleClass}`}
                        value={this.state.filter}
                        onChange={this.handleSearchChange}
                        onBlur={this.handleSearchBlur}
                        placeholder="keyName: value, event: image_event..."
                        title="Json String to Filter on"
                    />
                    <input
                        className="tableView-searchbar-limitInput"
                        type="number"
                        value={this.state.limit}
                        onChange={this.handleLimitChange}
                        placeholder="1-100"
                        maxLength={3}
                        min={1}
                        max={100}
                        title="No. of Results to Return"
                    />
                    <button title="Submit" className="tableView-searchbar-button button" type="submit">
                        <i title="Submit" className="fas fa-search tableView-searchbar-searchIcon button" />
                    </button>
                    <button
                        title="Reset"
                        className="tableView-searchbar-button button"
                        type="button"
                        onClick={this.handleReset}
                    >
                        <i className="fas fa-eraser tableView-searchbar-searchIcon button" />
                    </button>
                </form>
                <div className="tableView-searchbar-results-count">
                    {this.props.resultsCount} results found.
                </div>
            </div>
        );
    }
}
