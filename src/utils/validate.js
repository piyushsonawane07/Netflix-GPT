export const checkValidData = (email, password) => {
  const isEmailValid = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

  if (!isEmailValid) return "Enter valid email id.";
  if (!isPasswordValid) return "Enter valid password.";

  return null;
};
