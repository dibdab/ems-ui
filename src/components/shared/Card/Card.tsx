import * as React from 'react';

import { ICardProps } from './ICardProps';
import './Card.css';

export { ICardProps } from './ICardProps';

export default function CardComponent (props: {children?: {}}): JSX.Element  {
    return(
        <div className="card-component elevation-2">
            {props.children}
        </div>
    );
}

export function CardComponentHeader (props: {children?: {}}): JSX.Element  {
    return(
        <div className="card-component-header">
            {props.children}
        </div>
    );
}

export function CardComponentTitle (props: ICardProps): JSX.Element  {
    return(
        <div className="card-component-title">
            {props.title}
        </div>
    );
}

export function CardComponentSubtitle (props: ICardProps): JSX.Element  {
    return(
        <div className="card-component-subtitle">
            {props.subtitle}
        </div>
    );
}