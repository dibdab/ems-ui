export interface ITableFilter {
    [key: string]: string | number
    rowId: number,
    key: string,
    value: string
}