import { FEATURE_FILMS_NAME } from '../../constants';

const decorateAT = (text) => `[${FEATURE_FILMS_NAME}] ${text}`;

export const FETCH_FILMS = decorateAT('Fetch films');
export const SET_FILMS = decorateAT('Set films');
