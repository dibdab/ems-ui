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
    constructor(props: ITableSearchFormProps) {
        super(props);
        this.state = {
            filter: JSON.stringify(this.props.filter),
            limit: '',
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



    handleSearchChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // console.log(JSON.stringify(this.props.filter), 'searchfil;ter');
        this.setState({ filter: event.target.value ? event.target.value : '{}' });
    }

    handleSearchBlur = () => {
        try {
            let filter = JSON.parse(this.state.filter);
            this.setState({ isFilterInvalid: false });
            console.log(filter, 'search parsed');
            store.dispatch(SubscriberActionCreators.subscribersFilterChange(filter));
            console.log(JSON.stringify(this.props.filter), 'searchfil;ter');
        } catch (error) {
            // TODO: Show on UI
            console.log(error, 'error on searcblur');
            this.setState({ isFilterInvalid: true });
        }
    }

    handleLimitChange(event: ChangeEvent<HTMLInputElement>) {
        store.dispatch(SubscriberActionCreators.subscribersFilterChange(JSON.parse(this.state.filter)));
        this.setState({ limit: event.target.value });
    }

    handleSubmit(event: FormEvent<HTMLFormElement>) {
        console.log('handleSubmit')
        try {
            console.log(this.state.filter, 'search state')
            console.log(this.props.filter, 'search props')
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
            // TODO: Show on UI
            console.log(error, 'error on searchsubmit');
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
                    <button className="tableView-searchbar-button" type="submit">
                        <i className="fas fa-search tableView-searchbar-searchIcon"></i>
                    </button>
                    <textarea
                        className={`tableView-searchbar-searchInput ${isAccordionVisibleClass}`}
                        value={this.state.filter}
                        onChange={this.handleSearchChange}
                        onBlur={this.handleSearchBlur}
                        placeholder="keyName: value, event: image_event..."
                    />
                    <input
                        className="tableView-searchbar-limitInput"
                        type="text"
                        value={this.state.limit}
                        onChange={this.handleLimitChange}
                        placeholder="25-100"
                    />
                </form>
            </div>
        );
    }
}
