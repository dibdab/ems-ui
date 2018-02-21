import * as React from 'react';
import { MouseEvent } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ITableRowsProps } from './ITableRowsProps';
import { ITableRowsState } from './ITableRowsState';

// import { ISubscriber, IRESTConnector, IJMSConnector } from 'types';
import { SubscriberTableDataCells } from './SubscriberTableDataCells/SubscriberTableDataCells';
import { ISubscriber } from 'types';
import { AccordionTableRow } from 'components/shared/AccordionTableRow/AccordionTableRow';
import ContextMenu from 'components/shared/ContextMenu/ContextMenu';
// import { TableCellWithContextMenu } from './TableCellWithContextMenu/TableCellWithContextMenu';

// TODO: Create a index of all properties and values to search complex objects
// TODO: Make completely generic so can get array of objects from any endpoint
export default class TableRows extends React.Component<
    ITableRowsProps,
    ITableRowsState
    > {
    private contextMenu: ContextMenu;
    constructor(props: ITableRowsProps) {
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

    render() {
        if (this.props.tableData.length <= 0) {
            return (
                <tr className="tableView-no-interact-tr">
                    <td colSpan={8}>No results found.</td>
                </tr>
            );
        }
        const subscribers: JSX.Element[] = [];
        this.props.tableData.map((subscriber: ISubscriber, index) => {
            const subscriberWithoutId = Object.assign({}, subscriber);
            delete subscriberWithoutId._id;
            subscribers.push(
                <React.Fragment key={subscriber._id.counter}>
                    <tr
                        className="dashboard-tr"
                        // tslint:disable
                        onContextMenu={(e: MouseEvent<HTMLTableRowElement>) => this.contextMenu.showContextMenu(e)}
                        onClick={this.toggleAccordion}
                        id={`${subscriber._id.counter}`}
                    >
                        <td className="tableView-checkbox-td" >
                            <input type="checkbox" onClick={this.inputStopPropagation} />
                        </td>
                        <Switch>
                            <Route
                                path="/dashboard/subscribers"
                                // tslint:disable
                                render={(routeProps) => (
                                    <SubscriberTableDataCells
                                        columnKeyNames={this.props.columnKeyNames}
                                        subscriber={subscriber}
                                    />
                                )}
                            />
                        </Switch>
                    </tr>
                    <AccordionTableRow
                        accordionId={`${subscriber._id.counter}`}
                        jsonData={subscriberWithoutId}
                        isAccordionVisible={this.state.visibleAccordion[`${subscriber._id.counter}`]}
                    />
                </React.Fragment>,
            );
        },
        );
        return (
            <React.Fragment>
                <ContextMenu renderTag={'tr'} ref={contextMenu => { this.contextMenu = contextMenu as ContextMenu; }} filter={this.props.filter} />
                {subscribers}
            </React.Fragment>
        );
    }
}
