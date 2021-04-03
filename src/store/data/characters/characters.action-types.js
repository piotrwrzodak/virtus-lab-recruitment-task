import { FEATURE_CHARACTERS_NAME } from '../../constants';

const decorateAT = (text) => `[${FEATURE_CHARACTERS_NAME}] ${text}`;

export const FETCH_CHARACTERS = decorateAT('Fetch characters');
export const SET_CHARACTERS = decorateAT('Set characters');
