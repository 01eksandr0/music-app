import { useDispatch, useSelector } from "react-redux";
import css from "./FormReg.module.css";
import { Field, Form, Formik } from "formik";
import { getUsers } from "../../redux/selectors";
import toast, { Toaster } from "react-hot-toast";
import { login } from "../../redux/usersSlice";

export const FormReg = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();
  const handleSubmit = ({ email, password }) => {
    const index = users.list.findIndex((i) => i.email === email);
    if (index === -1) {
      const notify = () => toast.error("Invalid email");
      notify();
      return;
    }
    if (users.list[index].password !== password) {
      const notify = () => toast.error("Invalid password");
      notify();
      return;
    }
    dispatch(login(users.list[index].id));
  };
  return (
    <>
      <div>
        <Toaster />
      </div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ email: "", password: "" }}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Your email
            <Field className={css.input} name="email" placeholder="Email" />
          </label>
          <label className={css.label}>
            Your password
            <Field
              className={css.input}
              name="password"
              placeholder="Password"
            />
          </label>
          <button className={css.btn} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </>
  );
};
