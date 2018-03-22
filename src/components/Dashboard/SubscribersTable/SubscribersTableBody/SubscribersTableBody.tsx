import * as React from 'react';

import { ISubscriber } from 'types';
import { tableTypes } from 'enums';
import TableRow from 'components/shared/TableRow/TableRow';
import ContextMenu from 'components/shared/ContextMenu/ContextMenu';

import { ISubscribersTableBodyProps } from './ISubscribersTableBodyProps';
import { ISubscribersTableBodyState } from './ISubscribersTableBodyState';
import { SubscriberCells } from './SubscriberCells/SubscriberCells';

export default class SubscribersTableBody extends React.Component<ISubscribersTableBodyProps, ISubscribersTableBodyState> {
    constructor(props: ISubscribersTableBodyProps) {
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

    constructTableRows(object: ISubscriber) {
        let tableCells;
        tableCells = (
            <SubscriberCells
                columnKeyNames={this.props.columnKeyNames}
                subscriber={object}
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
        if (this.props.subscribers.length <= 0) {
            let message;
            if (this.props.subscribersHasErrored) {
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
            (this.props.subscribers).map((object, index) => { tableRows.push(this.constructTableRows(object)); });
            tableBody = (
                <React.Fragment>
                    <ContextMenu
                        dataType={tableTypes.Subscribers}
                        renderTag={'tr'}
                        isVisible={this.state.isContextMenuVisible}
                        filter={this.props.subscribersFilter}
                        hide={this.hideContextMenu}
                        target={this.state.contextMenuTarget}
                        pos={this.state.contextMenuPos}
                    />
                    {tableRows}
                </React.Fragment>
            );
        }
        return (
            <tbody>
                {tableBody}
            </tbody>
        );
    }
}
