import * as React from 'react';
import { connect } from 'react-redux';

import { ITableBodyProps } from './ITableBodyProps';
import { IRootState } from 'redux_';

import { SubscriberService } from 'services';
import { SubscriberActionCreators } from 'redux_';

import TableRows from './TableRows/TableRows';

import { sidebarPaths } from 'enums';

export class TableBody extends React.Component<ITableBodyProps, IRootState> {
  componentDidMount() {
    // TODO: Force reload of data to skip cache button - uneeded as post requests don't cache
    // TODO: Implment isLoading and hasErroed bools
    switch (this.props.tableName) {
      case (sidebarPaths.Subscribers):
        SubscriberService.getAll();
        break;
      default:
        break;
    }

  }

  render() {
    return (
      <tbody className="subscriberTableBody">
        <TableRows subscribers={this.props.subscribers} columnKeyNames={this.props.columnKeyNames} />
      </tbody>
    )
  }
};

const mapStateToProps = (state: IRootState) => {
  return {
    subscribers: state.subscribers.subscribers,
    hasErrored: state.subscribers.subscribersHasErrored,
    isLoading: state.subscribers.subscribersIsLoading,
  };
};

export default connect(mapStateToProps, {
  getAllSubscribers: SubscriberActionCreators.subscribersFetchSuccess,
})(TableBody);
