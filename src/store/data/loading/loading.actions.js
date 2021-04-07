import * as loadingAT from './loading.action-types';

export const startLoading = () => ({
  type: loadingAT.LOADING_START,
  payload: true,
});

export const endLoading = () => ({
  type: loadingAT.LOADING_END,
  payload: false,
});
