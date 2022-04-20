export const actions = {
  SET_USER: "SET_USER",
  SET_SHOW_LOADER: "SET_SHOW_LOADER",
  SET_ALERT_SETTINGS: "SET_ALERT_SETTINGS",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_USER:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case actions.SET_SHOW_LOADER:
      return {
        ...state,
        showLoader: action.showLoader,
      };
    case actions.SET_ALERT_SETTINGS:
      return {
        ...state,
        alertSettings: { settings: action.alertSettings, promise: null },
      };
    default:
      return state;
  }
};
