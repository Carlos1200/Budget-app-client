import { useMutation } from "@apollo/client";
import { Formik, Form } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CustomTextInput } from "../components";
import { LOGIN_MUTATION } from "../graphql";
import { AuthenticateUserInput, UserResponse } from "../interface";
import { LoginSchema } from "../schema";

export const Login = () => {
  const [message, setMessage] = useState<null | string>(null);
  const navigate = useNavigate();
  const [authenticateUser] = useMutation<
    { authenticateUser: UserResponse },
    { user: AuthenticateUserInput }
  >(LOGIN_MUTATION);
  return (
    <div className="bg-secondary h-screen w-full">
      <div className="flex items-center h-full w-full">
        <div>
          <h1 className="text-3xl font-semibold font-serif text-center text-white">
            Login
          </h1>
          {message && (
            <p className="text-center text-white font-semibold">{message}</p>
          )}
          <div className="w-screen">
            <div className="mt-5 bg-primary px-4 py-5 rounded-md w-11/12 sm:w-9/12 md:w-1/2 lg:w-1/3 xl:w-1/4 shadow-md mx-auto">
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={async ({ email, password }) => {
                  const { data } = await authenticateUser({
                    variables: {
                      user: { email, password },
                    },
                  });
                  if (!data?.authenticateUser) {
                    setMessage("Invalid credentials");
                    setTimeout(() => {
                      setMessage(null);
                    }, 1500);
                  } else {
                    localStorage.setItem("token", data.authenticateUser.token);
                    navigate("/");
                  }
                }}
                validationSchema={LoginSchema}
              >
                {() => (
                  <Form className="w-full">
                    <CustomTextInput
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                    <CustomTextInput
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      labelClassName="mt-5"
                    />
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="bg-quaternary hover:bg-tertiary text-white font-bold py-2 px-4 rounded-md mt-4 w-9/12 md:w-1/2 lg:w-1/3 xl:w-1/4"
                      >
                        Login
                      </button>
                    </div>
                    <Link to="/register" about="Go to the register page">
                      <p className="text-right text-white">Register</p>
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
