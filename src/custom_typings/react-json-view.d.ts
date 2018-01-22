// https://github.com/mac-s-g/react-json-view Docs for this module

declare module "react-json-view" {
    import * as React from "react"

    export interface ReactJsonProps {
        src: JSON | object;
        name?: string | false;
        theme?: string;
        style?: object;
        iconStyle?: string;
        indentWidth?: number;
        collapsed?: boolean | number;
        collapseStringsAfterLength?: number;
        shouldCollapse?: Function;
        groupArraysAfterLength?: number;
        enableClipboard?: boolean | Function;
        displayObjectSize?: boolean;
        displayDataTypes?: boolean;
        onEdit?: Function;
        onAdd?: Function;
        onDelete?: Function;
        onSelect?: Function;
        validationMessage?: string;
    }
    export default class ReactJsonComponent extends React.Component<ReactJsonProps, {}> { }
}