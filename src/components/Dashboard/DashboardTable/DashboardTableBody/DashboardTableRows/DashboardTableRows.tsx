import * as React from 'react';
import { MouseEvent } from 'react';

import { IDashboardTableRowsProps } from './IDashboardTableRowsProps';
import { IDashboardTableRowsState } from './IDashboardTableRowsState';

import { DashboardTableSubscriberCells } from './DashboardTableSubscriberCells/DashboardTableSubscriberCells';
import { DashboardTableEventCells } from './DashboardTableEventCells/DashboardTableEventCells';
import { ISubscriber, IEvent } from 'types';
import { AccordionTableRow } from 'components/shared/AccordionTableRow/AccordionTableRow';
import ContextMenu from 'components/shared/ContextMenu/ContextMenu';
import { tableDataTypes } from 'enums';

export default class DashboardTableRows extends React.Component<
    IDashboardTableRowsProps,
    IDashboardTableRowsState
    > {
    private contextMenu: ContextMenu;
    constructor(props: IDashboardTableRowsProps) {
        super(props);
        this.state = {
            visibleAccordion: {},
        };

        this.toggleAccordion = this.toggleAccordion.bind(this);
    }

    toggleAccordion = (event: MouseEvent<HTMLTableRowElement>) => {
        event.persist();
        if (event.currentTarget.id in this.state.visibleAccordion) {
            this.setState({
                visibleAccordion: {
                    [event.currentTarget.id]: !this.state.visibleAccordion[
                        event.currentTarget.id
                    ],
                },
            });
        } else {
            this.setState({
                visibleAccordion: {
                    [event.currentTarget.id]: true,
                },
            });
        }
    }

    inputStopPropagation(event: MouseEvent<HTMLElement>) {
        event.stopPropagation();
    }

    constructTableRows(object: ISubscriber | IEvent) {
        const objectWithoutId = Object.assign({}, object);
        delete objectWithoutId._id;
        let tableCells;
        if (this.props.tableName === tableDataTypes.Subscribers) {
            tableCells = (
                <DashboardTableSubscriberCells
                    columnKeyNames={this.props.columnKeyNames}
                    subscriber={object as ISubscriber}
                />
            );
        } else {
            tableCells = (
                <DashboardTableEventCells
                    columnKeyNames={this.props.columnKeyNames}
                    event={object as IEvent}
                />
            );
        }
        return (
            <React.Fragment key={object._id.counter}>
                <tr
                    className="dashboard-tr"
                    // tslint:disable
                    onContextMenu={(e: MouseEvent<HTMLTableRowElement>) => this.contextMenu.showContextMenu(e)}
                    onClick={this.toggleAccordion}
                    id={`${object._id.counter}`}
                >
                    <td className="dashboardTable-checkbox-td" >
                        <input type="checkbox" onClick={this.inputStopPropagation} />
                    </td>
                    {tableCells}
                </tr>
                <AccordionTableRow
                    accordionId={`${object._id.counter}`}
                    jsonData={objectWithoutId}
                    isAccordionVisible={this.state.visibleAccordion[`${object._id.counter}`]}
                />
            </React.Fragment>
        );
    }

    render() {
        if (this.props.tableData.length <= 0) {
            let message;
            if (!this.props.hasErrored && (!this.props.filter.event)) {
                message = 'Submit event name and received date filters to view events.';
            } else if (this.props.hasErrored) {
                message = 'Error unable to retrieve data.';
            } else {
                message = 'No results found.';
            }
            return (
                <tr className="dashboardTable-no-interact-tr">
                    <td colSpan={8}>{message}</td>
                </tr>
            );
        }
        const tableRows: JSX.Element[] = [];
        if (this.props.tableName === tableDataTypes.Subscribers) {
            (this.props.tableData as ISubscriber[]).map((object: ISubscriber, index) => { tableRows.push(this.constructTableRows(object)); });
        }
        else {
            (this.props.tableData as IEvent[]).map((object: IEvent, index) => { tableRows.push(this.constructTableRows(object)); });
        }
        return (
            <React.Fragment>
                <ContextMenu renderTag={'tr'} ref={contextMenu => { this.contextMenu = contextMenu as ContextMenu; }} filter={this.props.filter} />
                {tableRows}
            </React.Fragment>
        );
    }
}
