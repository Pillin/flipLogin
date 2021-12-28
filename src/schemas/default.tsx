import * as Yup from 'yup';

const EmailField = Yup.string()
  .email('Invalid email')
  .required('Required');

const PWField = Yup
  .string()
  .required("Please enter your password")
  .matches(
    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    "Password must contain at least 8 characters, one uppercase, one number and one special case character"
  );


export const LogInValidationSchema = Yup.object().shape({
  email: EmailField,
  pw: PWField
});

export const LoginInitialValues = {
  email: "",
  pw: ""
}