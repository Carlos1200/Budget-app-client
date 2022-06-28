import { useMutation } from "@apollo/client";
import { Formik, Form } from "formik";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CustomTextInput } from "../components";
import { REGISTER_MUTATION } from "../graphql";
import { newUserInput, UserResponse } from "../interface";
import { RegisterSchema } from "../schema";
import { setUser } from "../store/slices/auth";

export const Register = () => {
  const [message, setMessage] = useState<null | string>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registerUser] = useMutation<
    { registerUser: UserResponse },
    { user: newUserInput }
  >(REGISTER_MUTATION);

  return (
    <div className="bg-secondary h-screen w-full">
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Register to the application" />
      </Helmet>
      <div className="flex items-center h-full w-full">
        <div>
          <h1 className="text-3xl font-semibold font-serif text-center text-white">
            Register New User
          </h1>
          {message && (
            <p className="text-center text-white font-semibold">{message}</p>
          )}
          <div className="w-screen">
            <div className="mt-5 bg-primary px-4 py-5 rounded-md w-11/12 sm:w-9/12 md:w-1/2 lg:w-1/3 xl:w-1/4 shadow-md mx-auto">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  name: "",
                  confirmPassword: "",
                }}
                onSubmit={({ email, password, name }) => {
                  registerUser({
                    variables: {
                      user: { email, password, name },
                    },
                    onError: (error) => {
                      setMessage(error.message);
                      setTimeout(() => {
                        setMessage(null);
                      }, 1500);
                    },
                    onCompleted(data) {
                      if (!data.registerUser) {
                        setMessage("Something went wrong");
                        setTimeout(() => {
                          setMessage(null);
                        }, 1500);
                      } else {
                        localStorage.setItem("token", data.registerUser.token);
                        dispatch(setUser(data.registerUser.user));
                        navigate("/");
                      }
                    },
                  });
                }}
                validationSchema={RegisterSchema}
              >
                {() => (
                  <Form className="w-full">
                    <CustomTextInput
                      label="Name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      labelClassName="text-white"
                    />
                    <CustomTextInput
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      labelClassName="text-white"
                    />
                    <CustomTextInput
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      labelClassName="mt-5 text-white"
                    />
                    <CustomTextInput
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                      placeholder="Enter your password"
                      labelClassName="mt-5 text-white"
                    />
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="bg-quaternary hover:bg-tertiary text-white font-bold p-2 rounded-md mt-4 w-9/12 md:w-1/2 lg:w-1/3 xl:w-1/4"
                      >
                        Register
                      </button>
                    </div>
                    <Link to="/login" about="Go to the register page">
                      <p className="text-right text-white">Login</p>
                    </Link>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
