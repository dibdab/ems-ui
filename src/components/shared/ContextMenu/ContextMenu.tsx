import * as React from 'react';
import { MouseEvent } from 'react';

import './ContextMenu.css';
import { IContextMenuState } from './IContextMenuState';
import { IContextMenuProps } from './IContextMenuProps';

import { ISubscriberFilter } from 'types';
import store from 'store';
import { TableDataActionCreators } from 'redux_';

export default class ContextMenu extends React.Component<
    IContextMenuProps,
    IContextMenuState
    > {
    constructor(props: IContextMenuProps) {
        super(props);
        this.state = {
            isVisible: false,
            style: {},
            x: 0,
            y: 0,
            content: <div />,
            menuTarget: undefined,
        };

        this.handleContextMenuClick = this.handleContextMenuClick.bind(this);
    }

    unBindWindowEvent = () => {
        window.removeEventListener('resize', this.hideContextMenu);
        window.removeEventListener('contextmenu', this.hideContextMenu);
        window.removeEventListener('mousedown', this.hideContextMenu);
        window.removeEventListener('click', this.hideContextMenu);
        window.removeEventListener('wheel', this.hideContextMenu);
    }

    bindWindowEvent = () => {
        window.addEventListener('resize', this.hideContextMenu);
        window.addEventListener('contextmenu', this.hideContextMenu);
        window.addEventListener('mousedown', this.hideContextMenu);
        window.addEventListener('click', this.hideContextMenu);
        window.addEventListener('wheel', this.hideContextMenu);
    }

    onMouseEnter = () => window.removeEventListener('mousedown', this.hideContextMenu);

    onMouseLeave = () => window.addEventListener('mousedown', this.hideContextMenu);

    getMousePosition = (e: any) => {
        const pos = {
            x: e.clientX,
            y: e.clientY,
        };

        if (e.type === 'touchend' && (pos.x === null || pos.y === null)) {
            const touches = e.changedTouches;

            if (touches !== null && touches.length > 0) {
                pos.x = touches[0].clientX;
                pos.y = touches[0].clientY;
            }
        }

        if (pos.x === null || pos.x < 0) {
            pos.x = 0;
        }

        if (pos.y === null || pos.y < 0) {
            pos.y = 0;
        }
        return pos;
    }

    getMenuStyle = () => {
        return {
            left: this.state.x,
            top: this.state.y + 1,
        };
    }

    handleContextMenuClick = (e: MouseEvent<HTMLTableCellElement>) => {
        const newFilter: ISubscriberFilter = Object.assign({}, this.props.filter);
        const contextMenuTarget = this.state.menuTarget as HTMLElement;
        if (contextMenuTarget.hasAttribute('data-filter')) {
            if (contextMenuTarget.hasAttribute('data-filterjsonlocation')) {
                const targetFilterJsonLocation =
                    contextMenuTarget.getAttribute('data-filterjsonlocation') as string;
                if (targetFilterJsonLocation === 'filter') {
                    const targetFilter = JSON.parse((contextMenuTarget.getAttribute('data-filter')) as string);
                    if ((e.target as HTMLElement).getAttribute('data-filterispositive') === 'true') {
                        newFilter[targetFilterJsonLocation] = targetFilter;
                    } else {
                        newFilter[targetFilterJsonLocation] = { $ne: targetFilter };
                    }
                } else if (targetFilterJsonLocation === 'connectorJMS') {
                    const targetFilter = contextMenuTarget.getAttribute('data-filter') as string;
                    if ((e.target as HTMLElement).getAttribute('data-filterispositive') === 'true') {
                        newFilter.connector = { JMS: JSON.parse(targetFilter) };
                    } else {
                        newFilter.connector = { $ne: { JMS: JSON.parse(targetFilter) } };
                    }
                } else if (targetFilterJsonLocation === 'connectorREST') {
                    const targetFilter = contextMenuTarget.getAttribute('data-filter') as string;
                    if ((e.target as HTMLElement).getAttribute('data-filterispositive') === 'true') {
                        newFilter.connector = { REST: JSON.parse(targetFilter) };
                    } else {
                        newFilter.connector = { $ne: { REST: JSON.parse(targetFilter) } };
                    }
                } else {
                    const targetFilter = contextMenuTarget.getAttribute('data-filter') as string;
                    if ((e.target as HTMLElement).getAttribute('data-filterispositive') === 'true') {
                        newFilter[targetFilterJsonLocation] = targetFilter;
                    } else {
                        newFilter[targetFilterJsonLocation] = { $ne: targetFilter };
                    }
                }
            }
        }
        store.dispatch(TableDataActionCreators.tableDataFilterChange(newFilter));
    }

    createContent(e: MouseEvent<HTMLElement>) {
        const filterString = `Filter on ${(e.target as HTMLElement).innerText}`;
        return (
            <React.Fragment>
                <td
                    className="contextMenu-td"
                    data-filterispositive={true}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    onClick={this.handleContextMenuClick}
                >
                    <i className="fas fa-plus" /> {filterString}
                </td>
                <td
                    className="contextMenu-td"
                    data-filterispositive={false}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    onClick={this.handleContextMenuClick}
                >
                    <i className="fas fa-minus" /> {filterString}
                </td>
            </React.Fragment>
        );
    }

    showContextMenu = (e: MouseEvent<HTMLElement>) => {
        if ((e.target as HTMLElement).hasAttribute('data-filter')) {
            e.stopPropagation();
            e.preventDefault();
            this.bindWindowEvent();
            const { x, y } = this.getMousePosition(e);
            this.setState({
                isVisible: true,
                x,
                y,
                content: this.createContent(e),
                menuTarget: e.target as HTMLElement,
            });
        }
    }

    hideContextMenu = (e: any) => {
        if (typeof e !== 'undefined' && e.button === 2 && e.type !== 'contextmenu') {
            return;
        }
        this.unBindWindowEvent();
        this.setState({ isVisible: false });
    }

    render() {
        if (!this.state.isVisible) {
            return null;
        }
        const RenderTag = this.props.renderTag;
        return (
            <RenderTag className="contextMenu" style={this.getMenuStyle()}>
                {this.state.content}
            </RenderTag>
        );
    }
}
