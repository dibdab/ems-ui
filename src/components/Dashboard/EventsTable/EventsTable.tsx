import * as React from 'react';
import { connect } from 'react-redux';

import { IEventsTableProps } from './IEventsTableProps';

import EventsTableBody from './EventsTableBody/EventsTableBody';
import { TableHead } from 'components/shared/TableHead/TableHead';
import TableSearchForm from 'components/shared/TableSearchForm/TableSearchForm';

import { IRootState } from 'redux_';
import { getTableData, getAllEventNames, getSubscribedEventNames } from 'services';
import { tableTypes } from 'enums';

export class EventsTable extends React.Component<IEventsTableProps, IRootState> {

  componentDidMount() {

    if (this.props.tableName === tableTypes.Events) {
      getAllEventNames('default');
    } else if (this.props.tableName === tableTypes.Subscribers) {
      getSubscribedEventNames('default');
      getTableData(this.props.tableName, '', 10);
    }
  }

  render() {
    const eventNames = this.props.allEventNames;
    const eventNamesIsLoading = this.props.allEventNamesIsLoading;
    let loadingSpinner;
    if (this.props.eventsIsLoading) {
      loadingSpinner = <div className="loader">Loading...</div>;
    } else {
      loadingSpinner = null;
    }
    return (
      <React.Fragment>
        <TableSearchForm
          tableName={this.props.tableName}
          filter={this.props.eventsFilter}
          eventNames={eventNames}
          eventNamesIsLoading={eventNamesIsLoading}
        />
        {loadingSpinner}
        <div className="dashboardTable-results-count">
          {this.props.events.length} {this.props.tableName} found.
        </div>
        <table className="dashboardTable">
          <TableHead columnHeadings={this.props.columnHeadings} />
          <tbody>
            <EventsTableBody
              {...this.props}
            />
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    events: state.events.events,
    eventsHasErrored: state.events.eventsHasErrored,
    eventsIsLoading: state.events.eventsIsLoading,
    eventsFilter: state.events.eventsFilter,
    allEventNames: state.eventNames.allEventNames,
    allEventNamesIsLoading: state.eventNames.allEventNamesIsLoading,
    allEventNamesHasErrored: state.eventNames.allEventNamesHasErrored,
  };
};

export default connect(mapStateToProps, {})(EventsTable);
