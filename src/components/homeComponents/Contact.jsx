import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import Footer from "../Footer";

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters"),
      number: Yup.string()
        .matches(/^[0-9]+$/, "Phone Number must be numeric")
        .required("Phone Number is required")
        .min(10, "Phone Number Must be 10 Digits")
        .max(10, "Phone Number Must be 10 Digits"),
      message: Yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const formDataSend = new FormData();

      formDataSend.append("name", values.name);
      formDataSend.append("number", values.number);
      formDataSend.append("message", values.message);

      try {
        Swal.fire({
          title: "Loading...",
          text: "Please wait while we fetch the data.",
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbyRtalwDkFUXHycXDF5VrMVxuc95T6ahWwwutlW5qKvOxC2ObT2lZifTbPLw_nPCnGm/exec",
          {
            method: "POST",
            body: formDataSend,
          }
        );

        if (response.ok) {
          Swal.fire({
            title: "Success!",
            text: "Form submitted successfully",
            icon: "success",
            confirmButtonText: "OK",
            timer: 2000,
          });
        } else {
          throw new Error("Failed to submit form");
        }
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong while submitting the form. Please try again later.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    },
  });

  return (
    <div
      id="contact"
      className="bg-blue-100  flex flex-col items-center py-10"
    >
      <div className="w-full max-w-4xl flex flex-col items-center">
        <h1 className="text-4xl text-gray-600 font-bold mb-4">
          Get in touch with us
        </h1>
        <p className="text-gray-400 text-center mb-8">
          We invite you to contact us for further assistance.
        </p>
      </div>

      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-white p-6 rounded-2xl shadow-md max-w-4xl md:w-full flex flex-col md:flex-row justify-end"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            formik.handleSubmit();
          }}
          className="w-full md:w-1/2 flex flex-col space-y-4 md:p-4 ml-auto"  // Adjusted to align the form to the right
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name here"
              className="p-3 rounded-lg border-0 bg-gray-2/50 placeholder-gray-600  focus:ring-none focus:outline-none md:w-[95%] w-fit"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-xs font-semibold">
                {formik.errors.name}
              </div>
            ) : null}
          </div>

          <div>
            <input
              type="text"
              name="number"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Your Phone Number here"
              className="p-3 rounded-lg border-0 focus:ring-none bg-gray-2/50 placeholder-gray-600  focus:outline-none  md:w-[95%] w-fit"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.number}
            />
            {formik.touched.number && formik.errors.number ? (
              <div className="text-red-400 text-xs font-semibold">
                {formik.errors.number}
              </div>
            ) : null}
          </div>

          <div>
            <input
              name="message"
              placeholder="Your message here"
              className="p-3 rounded-lg border-0 focus:ring-none bg-gray-2/50 placeholder-gray-600 focus:outline-none w-fit md:w-[95%] h-32"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></input>
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500 text-xs font-semibold">
                {formik.errors.message}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className={`py-2 px-4 md:w-full rounded-lg focus:outline-none  md:w-[10%] transition 
              ${formik.isValid && formik.dirty ? 
                "bg-blue-500 text-gray-300 hover:bg-blue-600" : 
                "bg-blue-200 text-gray-500 cursor-not-allowed"}`}
            disabled={!(formik.isValid && formik.dirty)} // Disable the button if form is invalid or unchanged
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
