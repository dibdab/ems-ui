import Dashboard from '../assets/components/Dashboard/Dashboard';
import * as actions from '../actions/';
import { StoreState } from '../types/';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ databaseArray, currentDatabase }: StoreState) {
    return {
        databaseArray,
        currentDatabase,
    };
  }

export function mapDispatchToProps(dispatch: Dispatch<actions.SetCurrentDatabase>, databaseName: string ) {
    return {
        SetCurrentDatabase: () => dispatch(actions.setCurrentDatabase(databaseName))
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);