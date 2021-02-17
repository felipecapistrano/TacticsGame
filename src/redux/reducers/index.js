import { combineReducers } from "redux";

import { default as combat } from "./combat";
import { default as characters } from "./characters";
import { default as ui } from "./ui";

const allReducers = combineReducers({ combat, characters, ui });

export default allReducers;
