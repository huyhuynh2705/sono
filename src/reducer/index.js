import { combineReducers } from 'redux';

import depts from './depts';
import deptors from './deptors';
import settings from './settings';
import mydepts from './mydepts';
import history from './history';

export const reducers = combineReducers({ depts, deptors, settings, mydepts, history });
