import { FormikProps } from "formik";


export const onFormikChange = (formik: FormikProps<any>, name: string) => (e: React.ChangeEvent<any>) => {
  formik.setFieldTouched(name);
  formik.handleChange(e);
  formik.setFieldTouched(name);
};

export const isDisabledSubmitButton = (formik: FormikProps<any>) => {
  if (!formik.isSubmitting) {
    return (
      (formik.touched && !Object.values(formik.touched).length) ||
      (formik.errors && Object.values(formik.errors).length > 0)
    );
  }
  return formik.isSubmitting;
};