import { FEATURE_LOADING_NAME } from '../../constants';

const decorateAT = (text) => `[${FEATURE_LOADING_NAME}] ${text}`;

export const LOADING_START = decorateAT('Start loading');
export const LOADING_END = decorateAT('End loading');
