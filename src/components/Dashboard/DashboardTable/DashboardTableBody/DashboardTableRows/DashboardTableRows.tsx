import * as React from 'react';
import { MouseEvent } from 'react';
import { Route, Switch } from 'react-router-dom';

import { IDashboardTableRowsProps } from './IDashboardTableRowsProps';
import { IDashboardTableRowsState } from './IDashboardTableRowsState';

import { DashboardTableSubscriberCells } from './DashboardTableSubscriberCells/DashboardTableSubscriberCells';
import { DashboardTableEventCells } from './DashboardTableEventCells/DashboardTableEventCells';
import { ISubscriber } from 'types';
import { AccordionTableRow } from 'components/shared/AccordionTableRow/AccordionTableRow';
import ContextMenu from 'components/shared/ContextMenu/ContextMenu';

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

    render() {
        if (this.props.tableData.length <= 0) {
            return (
                <tr className="dashboardTable-no-interact-tr">
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
                        <td className="dashboardTable-checkbox-td" >
                            <input type="checkbox" onClick={this.inputStopPropagation} />
                        </td>
                        <Switch>
                            <Route
                                path="/dashboard/subscribers"
                                // tslint:disable
                                render={(routeProps) => (
                                    <DashboardTableSubscriberCells
                                        columnKeyNames={this.props.columnKeyNames}
                                        subscriber={subscriber}
                                    />
                                )}
                            />
                            <Route
                                path="/dashboard/events"
                                // tslint:disable
                                render={(routeProps) => (
                                    <DashboardTableEventCells
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
