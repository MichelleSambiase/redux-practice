export const depositMoney = (amount) => {
  return async (dispatch) => {
    console.log("entro");
    dispatch({
      type: "deposit",
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount) => {
  return async (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};
