const setAuthToken = auth => {
  localStorage.setItem("auth", JSON.stringify(auth));
};

const removeAuthToken = () => {
  localStorage.removeItem("auth");
};

export { setAuthToken, removeAuthToken };
