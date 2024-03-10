import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import css from "./FormCreateUser.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/selectors";
import { addNewUser } from "../../redux/usersSlice";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
});

export const FormCreateUser = () => {
  const { list } = useSelector(getUsers);
  const dispatch = useDispatch();
  const handleSubmit = ({ name, email, password }) => {
    if (!list.length) dispatch(addNewUser({ name, email, password }));
    if (!list.find((i) => i.email === email)) {
      dispatch(addNewUser({ name, email, password }));
    } else {
      const notify = () => toast.error("This email is already in use");
      notify();
    }
  };
  return (
    <>
      <div style={{ transform: "rotateY(180deg)" }}>
        <Toaster />
      </div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Your name
            <Field className={css.input} placeholder="Name" name="name" />
            <ErrorMessage name="name" as="span" />
          </label>
          <label className={css.label}>
            Your email
            <Field className={css.input} placeholder="Email" name="email" />
            <ErrorMessage name="email" as="span" />
          </label>
          <label className={css.label}>
            Create password
            <Field
              className={css.input}
              placeholder="Password"
              name="password"
            />
            <ErrorMessage name="password" as="span" />
          </label>
          <button className={css.btn} type="submit">
            Зареєструватися
          </button>
        </Form>
      </Formik>
    </>
  );
};
