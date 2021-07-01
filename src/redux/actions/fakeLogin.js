const fakeLogin = (payload) => {
  return {
    type: 'FAKE_LOGIN_SUCCESS',
    payload,
  };
};

export default fakeLogin;
