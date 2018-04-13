import * as React from 'react';
import { connect } from 'react-redux';

import { IRootState } from 'redux_';
import { getMuleAppStatus } from 'services';
import LoadingSpinner from 'components/shared/LoadingSpinner/LoadingSpinner';

import { IMuleAppStatusProps } from './IMuleAppStatusProps';
import { MuleAppStatusDisplay } from '../../shared/MuleAppStatusDisplay/MuleAppStatusDisplay';

export class MuleAppStatus extends React.Component<IMuleAppStatusProps, IRootState> {
  componentDidMount() {
    getMuleAppStatus();
  }

  render() {
    return (
      <React.Fragment>
        <LoadingSpinner isLoading={this.props.isLoading} />
        <MuleAppStatusDisplay muleAppStatus={this.props.muleAppStatus} isLoading={this.props.isLoading} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    hasErrored: state.muleAppStatus.muleAppStatusHasErrored,
    isLoading: state.muleAppStatus.muleAppStatusIsLoading,
    muleAppStatus: state.muleAppStatus.muleAppStatus,
  };
};

export default connect(mapStateToProps, {})(MuleAppStatus);
