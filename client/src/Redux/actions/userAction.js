export const USER = "USER";
export const user = (data) => {
  return {
    type: USER,
    payload: data,
  };
};
