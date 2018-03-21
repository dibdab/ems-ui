import * as React from 'react';
import { MouseEvent } from 'react';

import { ITableRowsProps } from './ITableRowsProps';
import { ITableRowsState } from './ITableRowsState';

import ContextMenu from 'components/shared/ContextMenu/ContextMenu';
import { tableTypes } from 'enums';

export default class TableRows extends React.Component<
    ITableRowsProps,
    ITableRowsState
    > {
    constructor(props: ITableRowsProps) {
        super(props);
        this.state = {
            isContextMenuVisible: false,
        };
    }

    showContextMenu = (e: MouseEvent<HTMLElement>) => {
        if ((e.target as HTMLElement).hasAttribute('data-filter')) {
            e.stopPropagation();
            e.preventDefault();
            this.setState({
                isContextMenuVisible: true,
                contextMenuTarget: e,
            });
        }
    }

    hideContextMenu = () => {
        this.setState({ isContextMenuVisible: false });
    }

    render() {
        if (this.props.tableData.length <= 0) {
            let message;
            if (!this.props.hasErrored &&
                !this.props.filter.event &&
                !this.props.filter.receivedDate &&
                this.props.defaultTableText
            ) {
                message = this.props.defaultTableText;
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
        return (
            <React.Fragment>
                <ContextMenu
                    dataType={tableTypes.Subscribers}
                    renderTag={'tr'}
                    isVisible={this.state.isContextMenuVisible}
                    filter={this.props.filter}
                    hide={this.hideContextMenu}
                // target={this.state.contextMenuTarget}
                />
                {this.props.children}
            </React.Fragment>
        );
    }
}
