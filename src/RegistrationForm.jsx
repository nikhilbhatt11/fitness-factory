import { withFormik } from "formik";
import React from "react";
import Input from "./Input";
import * as Yup from "yup";

function callRegisterApi(values) {
  console.log(
    "sended data",
    values.firstname,
    values.lastname,
    values.birthdate,
    values.email,
    values.address,
    values.phoneno,
    values.gender
  );
}

const schema = Yup.object().shape({
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  birthdate: Yup.string().required(),
  email: Yup.string().required().email(),
  address: Yup.string().required(),
  phoneno: Yup.number().min(10).required(),
  gender: Yup.string().required(),
});

const initialValues = {
  firstname: "",
  lastname: "",
  birthdate: "",
  email: "",
  address: "",
  phoneno: "",
  gender: "",
};
export function RegistrationForm({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) {
  return (
    <div className="h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <div className=" p-20 flex flex-col gap-1 border rounded-md bg-white">
          <h1 className="m-2">Registration form</h1>

          <Input
            values={values.firstname}
            error={errors.firstname}
            touched={touched.firstname}
            onChange={handleChange}
            onBlur={handleBlur}
            type="firstname"
            name="firstname"
            className="border rounded-md"
            placeholder="First Name"
            required
          />

          <Input
            values={values.lastname}
            error={errors.lastname}
            touched={touched.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
            type="lastname"
            name="lastname"
            className="border rounded-md"
            placeholder="Last Name"
            required
          />

          <Input
            values={values.birthdate}
            error={errors.birthdate}
            touched={touched.birthdate}
            onChange={handleChange}
            onBlur={handleBlur}
            type="birthdate"
            name="birthdate"
            className="border rounded-md"
            placeholder="DateOfBirth"
            required
          />

          <Input
            values={values.email}
            error={errors.email}
            touched={touched.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            name="email"
            className="border rounded-md"
            placeholder="Email"
            required
            autoComplete="email"
          />

          <Input
            values={values.address}
            error={errors.address}
            touched={touched.address}
            onChange={handleChange}
            onBlur={handleBlur}
            type="address"
            name="address"
            className="border rounded-md"
            placeholder="Address"
            required
          />

          <Input
            values={values.phoneno}
            error={errors.phoneno}
            touched={touched.phoneno}
            onChange={handleChange}
            onBlur={handleBlur}
            type="phoneno"
            name="phoneno"
            className="border rounded-md"
            placeholder="Phone Number"
            required
          />

          <Input
            values={values.gender}
            error={errors.gender}
            touched={touched.gender}
            onChange={handleChange}
            onBlur={handleBlur}
            type="gender"
            name="gender"
            className="border rounded-md"
            placeholder="Gender"
            required
          />

          <button
            type="submit"
            className="bg-red-400 text-white border rounded-md px-2 m-4"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

const myForm = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: callRegisterApi,
});
const Register = myForm(RegistrationForm);

export default Register;
