import * as React from 'react';

import ITableSearchFormProps from './ITableSearchFormProps';
import ITableSearchFormState from './ITableSearchFormState';
import './TableSearchForm.css';

import { tableDataService } from 'services';
import { tableDataTypes } from 'enums';
import Config from 'config';
import { ChangeEvent, FormEvent } from 'react';

export default class TableSearchForm extends React.Component<ITableSearchFormProps, ITableSearchFormState> {
    constructor(props: ITableSearchFormProps) {
        super(props);
        this.state = {
            searchValue: '',
            searchLimit: '',
        };

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleLimitChange = this.handleLimitChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // TODO: Force reload of data to skip cache button - uneeded as post requests don't cache
        // TODO: Implment isLoading and hasErroed bools
        this.getTableData(tableDataTypes.Subscribers, Config.SUBSCRIBER_API_URL, '', 10);
    }

    getTableData(dataType: string, endpoint: string, messageBody: string, responseLimit?: number) {
        switch (this.props.tableName) {
            case (tableDataTypes.Subscribers):
                tableDataService.getAll(dataType, endpoint, messageBody, !responseLimit ? 10 : responseLimit);
                break;
            default:
                break;
        }
    }

    handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ searchValue: event.target.value });
    }

    handleLimitChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ searchLimit: event.target.value });
    }

    handleSubmit(event: FormEvent<HTMLFormElement>) {
        this.getTableData(
            tableDataTypes.Subscribers,
            Config.SUBSCRIBER_API_URL,
            this.state.searchValue,
            parseInt(this.state.searchLimit, 10),
        );
        event.preventDefault();
    }

    render() {
        return (
            <div className="tableView-searchbar-container" >
                <form action="submit" onSubmit={this.handleSubmit}>
                    <div className="tableView-searchbar-searchIcon" />
                    <input
                        className="tableView-searchbar-searchInput"
                        type="text"
                        value={this.state.searchValue}
                        onChange={this.handleSearchChange}
                        placeholder="keyName: value, event: image_event..."
                    />
                    <div className="tableView-searchbar-limitIcon" />
                    <input
                        className="tableView-searchbar-limitInput"
                        type="text"
                        value={this.state.searchLimit}
                        onChange={this.handleLimitChange}
                        placeholder="25-100"
                    />
                    <button className="tableView-searchbar-button" type="submit" />
                </form>
            </div>
        );
    }
}
