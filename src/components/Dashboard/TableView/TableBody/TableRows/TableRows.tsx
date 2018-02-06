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

    createContextMenu(e: MouseEvent<HTMLTableRowElement>) {
        if ((e.target as HTMLTableCellElement).className !== 'dashboardTable-checkbox-td') {
            const menuContents = (
                <React.Fragment>
                    <td className="contextMenu-td">{`Filter on ${(e.target as HTMLTableCellElement).innerText}`}</td>
                </React.Fragment>
            );
            this.contextMenu.showContextMenu(e, menuContents);
        }
    }

    inputStopPropagation(event: MouseEvent<HTMLElement>) {
        event.stopPropagation();
    }

    render() {
        const subscribers: JSX.Element[] = [];
        this.props.tableData.map((subscriber: ISubscriber, index) => {
            const subscriberWithoutId = Object.assign({}, subscriber);
            delete subscriberWithoutId._id;
            subscribers.push(
                <React.Fragment key={subscriber._id.counter}>
                    <tr
                        className="dashboardTr"
                        onContextMenu={(e: any) => this.createContextMenu(e)}
                        onClick={this.toggleAccordion}
                        id={`${subscriber._id.counter}`}
                    >
                        <td className="dashboardTable-checkbox-td">
                            <input type="checkbox" onClick={this.inputStopPropagation} />
                        </td>
                        <Switch>
                            <Route path="/dashboard/subscribers" render={(routeProps) => (
                                <SubscriberTableDataCells columnKeyNames={this.props.columnKeyNames} subscriber={subscriber} />
                            )} />
                        </Switch>
                        {/* <ConnectorTdComponent connector={subscriber.connector} /> */}
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
                <ContextMenu renderTag={'tr'} ref={contextMenu => { this.contextMenu = contextMenu as ContextMenu; }} />
                {subscribers}
            </React.Fragment>
        );
    }
}

// interface IConnectorTdComponentProps {
//     connector: IRESTConnector | IJMSConnector;
// }

// function isJMS(connector: any): connector is IJMSConnector {
//     return connector.REST === undefined;
// }

// const ConnectorTdComponent = (props: IConnectorTdComponentProps) => {
//     const connector = props.connector;
//     if (isJMS(connector)) {
//         const connectorContents = connector.JMS;
//         const connectorUrl = `${connectorContents.host}:${connectorContents.port}`;
//         return (
//             <React.Fragment>
//                 <td>{Object.keys(connector)}</td>
//                 <td title={connectorUrl}>{connectorUrl}</td>
//                 <td>{connectorContents.queue}</td>
//             </React.Fragment>
//         );
//     } else {
//         const connectorContents = connector.REST;
//         const connectorUrl = `${connectorContents.host}:${connectorContents.port +
//             connectorContents.path}`;
//         return (
//             <React.Fragment>
//                 <td>{Object.keys(connector)}</td>
//                 <td title={connectorUrl}>{connectorUrl} </td>
//                 <td>{connectorContents.method}</td>
//             </React.Fragment>
//         );
//     }
// };
