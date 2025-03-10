export const StoreReducer = (state, action) => {
  switch (action.type) {
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "INFO":
      return {
        ...state,
        info: action.payload,
      };

    case "MESSAGE":
      return {
        ...state,
        message: action.payload,
      };

    case "SUCCESS":
      return {
        ...state,
        success: action.payload,
      };

    case "VALIDATE":
      return {
        ...state,
        validate: action.payload,
      };

    case "SAVE":
      return {
        ...state,
        isSave: action.payload,
      };

    case "CONFIRM":
      return {
        ...state,
        isConfirm: action.payload,
      };

    case "RESTORE":
      return {
        ...state,
        isRestore: action.payload,
      };
    case "IS_ARCHIVE":
      return {
        ...state,
        isArchive: action.payload,
      };

    case "IS_ADD":
      return {
        ...state,
        isAdd: action.payload,
      };

    case "IS_DELETE":
      return {
        ...state,
        isDelete: action.payload,
      };

    case "IS_VIEW":
      return {
        ...state,
        isView: action.payload,
      };

    case "IS_SEARCH":
      return {
        ...state,
        isSearch: action.payload,
      };

    case "IS_CREATE_PASS_SUCCESS":
      return {
        ...state,
        isCreatePassSuccess: action.payload,
      };

    case "IS_ACCOUNT_UPDATED":
      return {
        ...state,
        isAccountUpdated: action.payload,
      };

    case "IS_LOGIN":
      return {
        ...state,
        isLogin: action.payload,
      };

    case "IS_LOGOUT":
      return {
        ...state,
        isLogout: action.payload,
      };

    case "CREDENTIALS":
      return {
        ...state,
        credentials: action.payload,
      };

    case "IS_ANIMATING":
      return {
        ...state,
        isAnimating: action.payload,
      };

    default:
      return state;
  }
};
