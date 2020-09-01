import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import sodaReducer from "./soda/sodaReducer";
import juiceReducer from "./juice/juiceReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  soda: sodaReducer,
  juice: juiceReducer,
  user: userReducer,
});

export default rootReducer;
