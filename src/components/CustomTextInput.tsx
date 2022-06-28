import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  [key: string]: any;
}

export const CustomTextInput = ({
  errorClassName,
  inputClassName,
  label,
  labelClassName,
  type = "text",
  ...props
}: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label
        htmlFor={props.id || props.name}
        className={`block text-sm font-bold mb-2 ${labelClassName}`}
      >
        {label}
      </label>
      <input
        type={type}
        {...field}
        {...props}
        className={` shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${inputClassName}`}
      />
      <ErrorMessage
        name={props.name}
        component="span"
        className={`text-red-500 text-sm ${errorClassName}`}
      />
    </>
  );
};
