import * as React from 'react';
import { MouseEvent } from 'react';

import './ContextMenu.css';
import { IContextMenuState } from './IContextMenuState';
import { IContextMenuProps } from './IContextMenuProps';

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
            menuContents: ''
        };

        this.showContextMenu = this.showContextMenu.bind(this);
    }

    unBindWindowEvent = () => {
        window.removeEventListener('resize', this.hideContextMenu);
        window.removeEventListener('contextmenu', this.hideContextMenu);
        window.removeEventListener('mousedown', this.hideContextMenu);
        window.removeEventListener('click', this.hideContextMenu);
        window.removeEventListener('wheel', this.hideContextMenu);
    };

    bindWindowEvent = () => {
        window.addEventListener('resize', this.hideContextMenu);
        window.addEventListener('contextmenu', this.hideContextMenu);
        window.addEventListener('mousedown', this.hideContextMenu);
        window.addEventListener('click', this.hideContextMenu);
        window.addEventListener('wheel', this.hideContextMenu);
    };

    getMousePosition = (e: any) => {
        const pos = {
            x: e.clientX,
            y: e.clientY
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

    showContextMenu = (e: MouseEvent<HTMLElement>, menuContents: any) => {
        console.log(e.target);
        console.log(e.currentTarget)
        e.stopPropagation();
        e.preventDefault();
        this.bindWindowEvent();
        const { x, y } = this.getMousePosition(e);
        this.setState({
            isVisible: true,
            x,
            y,
            menuContents
        })
    }

    hideContextMenu = (e: any) => {
        if (typeof e !== 'undefined' && e.button === 2 && e.type !== 'contextmenu') {
            return;
        }
        this.unBindWindowEvent();
        this.setState({ isVisible: false })
    }

    render() {
        if (!this.state.isVisible) {
            return null;
        }
        const RenderTag = this.props.renderTag;
        return (
            <RenderTag className="contextMenu" style={this.getMenuStyle()}>{this.state.menuContents}</RenderTag>
        )
    }
}

