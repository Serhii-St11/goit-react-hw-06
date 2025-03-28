import { useDispatch } from "react-redux";
import { addContact } from "../../Redux/contactsSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Minimum 3 characters")
        .max(50, "Maximum 50 characters")
        .required("This field is required"),
      number: Yup.string()
        .matches(
          /^\+?[0-9]{1,4}?[-.()\s]?[0-9]{1,4}[-.()\s]?[0-9]{1,4}[-.()\s]?[0-9]{1,9}$/,
          "Invalid number format"
        )
        .required("This field is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(addContact(values));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={clsx(css.form)}>
      <label htmlFor="name" className={clsx(css.label)}>
        Name
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={clsx(css.input, {
            [css.error]: formik.touched.name && formik.errors.name,
          })}
        />
        {formik.touched.name && formik.errors.name && (
          <div className={clsx(css.errorMessage)}>{formik.errors.name}</div>
        )}
      </label>
      <label htmlFor="number" className={clsx(css.label)}>
        Number
        <input
          type="text"
          id="number"
          name="number"
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={clsx(css.input, {
            [css.error]: formik.touched.number && formik.errors.number,
          })}
        />
        {formik.touched.number && formik.errors.number && (
          <div className={clsx(css.errorMessage)}>{formik.errors.number}</div>
        )}
      </label>
      <button className={clsx(css.button)} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
