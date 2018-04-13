import * as router from 'react-router-dom';
import { IMuleAppStatus } from 'types';

export interface IMuleAppStatusProps {
  hasErrored: boolean;
  isLoading: boolean;
  muleAppStatus: IMuleAppStatus;
}
