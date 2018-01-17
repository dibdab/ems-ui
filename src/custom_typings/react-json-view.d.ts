declare module "react-json-view" {
    import * as React from "react"

    export interface ReactJsonProps {
        src: any
    }
    export default class ReactJsonComponent extends React.Component<ReactJsonProps, {}> { }
}