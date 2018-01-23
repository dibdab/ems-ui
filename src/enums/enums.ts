export enum tableDataTypes {
  Subscribers = 'subscribers',
  Test = 'test',
} // Used by sidebar to determine path names and should be imported anywhere that needs to use those names in logic

export enum tableBodyRowKeyName {
  ViewRow = 'ViewRow',
  AccordionRow = 'AccordionRow',
} // Used by any TableBody element that implements accordionTableRows
