interface filter {
    name: string,
    value: string | boolean | filterArray
}

interface filterArray {
    [key: string]: string[]
}

interface REST {
    host: string,
    port: string,
    path: string,
    method: string
}

interface JMS{
    host: string,
    port: string,
    queue: string
}

export interface Subscriber {
    _id: {
        timestamp: number,
        machineIdentifier: number,
        processIdentifier: number,
        counter: number,
        time: number,
        date: number,
        timeSecond: number
    },
    event: string,
    listenerSystem: string,
    options: {
        payloadcontent: string[]
    },
    filter: filter[],
    connector: REST | JMS
}