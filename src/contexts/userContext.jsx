import { createContext, useEffect, useReducer } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "set_current_user",
};

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      throw new Error(`Unhandled type: ${action.type} in userReducer`);
  }
};

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});


export const UserProvider = ({ children }) => {
  const [state, distpatch] = useReducer(userReducer, INITIAL_STATE);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      distpatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
    });
    return unsubscribe;
  }, []);

  const value = { currentUser: state.currentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
