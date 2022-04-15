import { useFormik, FormikHelpers } from "formik";
import styled from "styled-components";
import Input from "../core/Input";
import { PrimaryButton } from "../core/Button";
import { H1 } from "../core/Typography";
import {
  LoginInitialValues,
  LogInValidationSchema
} from "../../schemas/default";
import { onFormikChange, isDisabledSubmitButton } from "../../utils/form";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 16px 20px;
  gap: 32px 0px;
  background-color: white;
  @media (min-width: 768px) {
    max-width: 450px;
    min-width: 450px;
    padding: 32px 40px;
  }
`;

const LoginSubmit = (props: { onSuccess: () => void }) => (
  values: typeof LoginInitialValues,
  formikHelpers: FormikHelpers<typeof LoginInitialValues>
) => {
  if (values.email === "admin@admin.com" && values.pw === "Adminadmin.2021") {
    formikHelpers.resetForm();
    props.onSuccess();
  } else {
    formikHelpers.setFieldError("pw", "Wrong Credentials");
    formikHelpers.setSubmitting(false);
  }
};

const LoginForm = (props: { onSuccess: () => void }) => {
  const formik = useFormik({
    initialValues: LoginInitialValues,
    validationSchema: LogInValidationSchema,
    onSubmit: LoginSubmit({ onSuccess: props.onSuccess })
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <H1>Log In</H1>
      <Input
        type="text"
        label="E-mail"
        name="email"
        onChange={onFormikChange(formik, "email")}
        value={formik.values.email}
        error={formik.errors.email || ""}
        touch={formik.touched.email || false}
      />
      <Input
        type="password"
        label="Password"
        name="pw"
        onChange={onFormikChange(formik, "pw")}
        value={formik.values.pw}
        error={formik.errors.pw || ""}
        touch={formik.touched.pw || false}
      />
      <PrimaryButton
        label="SEND"
        type="submit"
        disabled={isDisabledSubmitButton(formik)}
      />
    </StyledForm>
  );
};

export default LoginForm;
