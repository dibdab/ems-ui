import * as React from 'react';
import { isNullOrUndefined } from 'util';

export const JsonViewer = (props: JsonViewerProps) => {
    let elements = getJsonElements(props.data);

    return (
        console.log(elements, "render"),
        <span>{elements}</span>
    );
};

function getJsonElements(data: any): any[] {
    let variable, elements: any[] = [];
    console.log(data, 'start')
    if (data !== [] && !isNullOrUndefined(data)) {
        for (let propertyName in data) {
            variable = new JsonVariable(propertyName, data[propertyName])
            console.log(variable, "variable")
            if (!data.hasOwnProperty(propertyName)) {
                console.log(elements, "if")
                continue;
            } else if (variable.type === "object") {
                console.log("object")
                elements.push(<span>{"{"}<br />{getJsonElements(variable.value)}<br />{"}"}<br /></span>);
            } else if (variable.type === "array") {
                console.log("array")
                elements.push(<span>{"["}<br />{getJsonElements(variable.value)}<br />{"]"}<br /></span>);
            }
            else {
                elements.push(
                    <span>{variable.name} - {variable.value}<br /></span >
                )
                console.log(elements, "elements")
            }
        }
    }
    return elements;
}

interface JsonViewerProps {
    data: any
}

class JsonVariable {
    name: string;
    value: any;
    type: string
    constructor(name: string, value: any) {
        this.name = name
        this.value = value
        this.type = typeof value
    }
}