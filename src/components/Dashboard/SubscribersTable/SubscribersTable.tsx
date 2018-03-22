import * as React from 'react';
import { connect } from 'react-redux';

import { ISubscribersTableProps } from './ISubscribersTableProps';

import SubscribersTableBody from './SubscribersTableBody/SubscribersTableBody';
import TableHead from 'components/shared/TableHead/TableHead';
import TableSearchForm from 'components/shared/TableSearchForm/TableSearchForm';
import LoadingSpinner from 'components/shared/LoadingSpinner/LoadingSpinner';
import ResultsCount from 'components/shared/ResultsCount/ResultsCount';

import { IRootState } from 'redux_';
import { getTableData, getSubscribedEventNames } from 'services';

export class SubscribersTable extends React.Component<ISubscribersTableProps, IRootState> {

  componentDidMount() {
    getSubscribedEventNames('default');
    getTableData(this.props.tableName, '', 10);
  }

  render() {
    return (
      <React.Fragment>
        <TableSearchForm
          tableName={this.props.tableName}
          filter={this.props.subscribersFilter}
          eventNames={this.props.subscribedEventNames}
          eventNamesIsLoading={this.props.subscribedEventNamesIsLoading}
        />
        <LoadingSpinner isLoading={this.props.subscribersIsLoading} />
        <ResultsCount resultsLength={this.props.subscribers.length} resultsName={this.props.tableName} />
        <table className="dashboardTable">
          <TableHead columnHeadings={this.props.columnHeadings} />
          <SubscribersTableBody
            {...this.props}
          />
        </table>
      </React.Fragment >
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    subscribers: state.subscribers.subscribers,
    subscribersHasErrored: state.subscribers.subscribersHasErrored,
    subscribersIsLoading: state.subscribers.subscribersIsLoading,
    subscribersFilter: state.subscribers.subscribersFilter,
    subscribedEventNames: state.eventNames.subscribedEventNames,
    subscribedEventNamesIsLoading: state.eventNames.subscribedEventNamesIsLoading,
    subscribedEventNamesHasErrored: state.eventNames.subscribedEventNamesHasErrored,
  };
};

export default connect(mapStateToProps, {})(SubscribersTable);
