import * as React from 'react';

import { IEventsTableBodyProps } from './IEventsTableBodyProps';
import { IEventsTableBodyState } from './IEventsTableBodyState';

import { EventCells } from './EventCells/EventCells';
import TableRow from 'components/shared/TableRow/TableRow';
import ContextMenu from 'components/shared/ContextMenu/ContextMenu';

import { IEvent } from 'types';
import { tableTypes } from 'enums';

export default class EventsTableBody extends React.Component<IEventsTableBodyProps, IEventsTableBodyState> {
    constructor(props: IEventsTableBodyProps) {
        super(props);
        this.state = {
            isContextMenuVisible: false,
        };
    }

    showContextMenu = (target: HTMLElement, mousePos: { x: number, y: number }) => {
        this.setState({
            isContextMenuVisible: true,
            contextMenuTarget: target,
            contextMenuPos: mousePos,
        });
    }

    hideContextMenu = () => {
        this.setState({ isContextMenuVisible: false });
    }

    constructTableRows(object: IEvent) {
        let tableCells;
        tableCells = (
            <EventCells
                columnKeyNames={this.props.columnKeyNames}
                event={object}
            />
        );
        return (
            <React.Fragment key={object._id.counter}>
                <TableRow
                    tableData={object}
                    showContextMenu={this.showContextMenu}
                >
                    {tableCells}
                </TableRow>
            </React.Fragment>
        );
    }

    render() {
        let tableBody;
        if (this.props.events.length <= 0) {
            let message;
            if (!this.props.eventsHasErrored &&
                !this.props.eventsFilter.event &&
                !this.props.eventsFilter.receivedDate
            ) {
                message = 'Submit event name and date range filters to view events.';
            } else if (this.props.eventsHasErrored) {
                message = 'Error unable to retrieve data.';
            } else {
                message = 'No results found.';
            }
            tableBody = (
                <tr className="dashboardTable-no-interact-tr">
                    <td colSpan={8}>{message}</td>
                </tr>
            );
        } else {
            const tableRows: JSX.Element[] = [];
            (this.props.events).map((object, index) => { tableRows.push(this.constructTableRows(object)); });
            tableBody = (
                <React.Fragment>
                    <ContextMenu
                        dataType={tableTypes.Events}
                        renderTag={'tr'}
                        isVisible={this.state.isContextMenuVisible}
                        filter={this.props.eventsFilter}
                        hide={this.hideContextMenu}
                        target={this.state.contextMenuTarget}
                        pos={this.state.contextMenuPos}
                    />
                    {tableRows}
                </React.Fragment>
            );
        }
        return (
            tableBody
        );
    }
}
