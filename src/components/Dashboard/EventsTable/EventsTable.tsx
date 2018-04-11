import * as React from 'react';
import { connect } from 'react-redux';

import { IRootState } from 'redux_';
import { getAllEventNames } from 'services';
import TableHead from 'components/shared/TableHead/TableHead';
import TableSearchForm from 'components/shared/TableSearchForm/TableSearchForm';
import LoadingSpinner from 'components/shared/LoadingSpinner/LoadingSpinner';
import TableHeader from 'components/shared/TableHeader/TableHeader';

import { IEventsTableProps } from './IEventsTableProps';
import EventsTableBody from './EventsTableBody/EventsTableBody';

export class EventsTable extends React.Component<IEventsTableProps, IRootState> {

  componentDidMount() {
    getAllEventNames('default');
  }

  render() {
    return (
      <React.Fragment>
        <TableSearchForm
          tableName={this.props.tableName}
          filter={this.props.eventsFilter}
          eventNames={this.props.allEventNames}
          eventNamesIsLoading={this.props.allEventNamesIsLoading}
        />
        <LoadingSpinner isLoading={this.props.eventsIsLoading} />
        <TableHeader resultsLength={this.props.events.length} resultsName={this.props.tableName} />
        <table className="dashboardTable">
          <TableHead columnHeadings={this.props.columnHeadings} />
          <EventsTableBody
            {...this.props}
          />
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
