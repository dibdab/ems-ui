export interface IDivTable {
    tableColumns: IDivTableColumn[],

}

interface IDivTableColumn {
    header: string,
    columnContentsKeyRef: string // Equals the name of the json key that the column should show
}