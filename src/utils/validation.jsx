export const validateEmail = (email) => {
  let errors = null;
  if (!email.trim()) {
    errors = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors = "Email address is invalid.";
  }

  return errors;
};
export const validatePassword = ( password) => {
  let errors = null;

  if (!password.trim()) {
    errors = "Password is required.";
  } else if (password.length < 6) {
    errors = "Password must be at least 6 characters.";
  }

  return errors;
};
