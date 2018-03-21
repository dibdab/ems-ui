import * as React from 'react';
import { MouseEvent } from 'react';

import { ITableRowProps } from './ITableRowProps';
import { ITableRowState } from './ITableRowState';

import { AccordionTableRow } from 'components/shared/AccordionTableRow/AccordionTableRow';

export default class TableRow extends React.Component<
    ITableRowProps,
    ITableRowState
    > {
    constructor(props: ITableRowProps) {
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

    handleOnContextMenu = (e: MouseEvent<HTMLElement>) => {
        const mousePos = {
            x: e.clientX,
            y: e.clientY,
        };
        if ((e.target as HTMLElement).hasAttribute('data-filter')) {
            e.stopPropagation();
            e.preventDefault();
            this.props.showContextMenu(e.target as HTMLElement, mousePos);
        }

    }

    inputStopPropagation(e: MouseEvent<HTMLElement>) {
        e.stopPropagation();
    }

    render() {
        const objectWithoutId = Object.assign({}, this.props.tableData);
        delete objectWithoutId._id;
        return (
            <React.Fragment>
                <tr
                    className="dashboard-tr"
                    onContextMenu={this.handleOnContextMenu}
                    onClick={this.toggleAccordion}
                    id={`${this.props.tableData._id.counter}`}
                >
                    <td className="dashboardTable-checkbox-td" >
                        <input type="checkbox" onClick={this.inputStopPropagation} />
                    </td>
                    {this.props.children}
                </tr>
                <AccordionTableRow
                    accordionId={`${this.props.tableData._id.counter}`}
                    jsonData={objectWithoutId}
                    isAccordionVisible={this.state.visibleAccordion[`${this.props.tableData._id.counter}`]}
                />
            </React.Fragment>
        );
    }
}
