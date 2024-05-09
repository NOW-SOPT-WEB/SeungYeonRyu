export const verifyPwd = (pwd: string) => {
  const regExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_+={}[\]:'"<>?])[a-zA-Z\d!@#$%^&*()\-_+={}[\]:'"<>?]{8,}$/;
  if (regExp.test(pwd)) return true;
  else {
    return false;
  }
};
