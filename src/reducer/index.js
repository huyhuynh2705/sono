import { combineReducers } from 'redux';

import depts from './depts';
import deptors from './deptors';
import settings from './settings';

export const reducers = combineReducers({ depts, deptors, settings });
