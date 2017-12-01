import * as constants from '../constants';

export interface SetCurrentDatabase {
    type: constants.SET_CURRENT_DATABASE,
    value: string;
}

export type SetCurrentDatabaseAction = SetCurrentDatabase;

export function setCurrentDatabase(databaseName:string):SetCurrentDatabase {
    return {
        type: constants.SET_CURRENT_DATABASE,
        value: databaseName
    }
}