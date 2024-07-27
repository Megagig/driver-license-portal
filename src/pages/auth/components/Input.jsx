import { FaInfoCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const fixedInputClass =
    "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none sm:text-sm";

export default function Input({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired = false,
    placeholder,
    customClass,
    isPasswordValid,
    isPasswordMatch,
}) {
    const { pathname } = useLocation();

    return (
        <div className="my-5">
            <label htmlFor={labelFor} className="sr-only">
                {labelText}
            </label>
            <input
                onChange={handleChange}
                value={value}
                id={id}
                name={name}
                type={type}
                required={isRequired}
                className={fixedInputClass + customClass}
                placeholder={placeholder}
                aria-invalid={
                    name === "password" && isPasswordValid ? "false" : "true"
                }
                aria-describedby={name === "password" ? "password-note" : ""}
            />
            {pathname === "/signup" && name === "password" && !isPasswordValid && (
                <div
                    id="password-note"
                    className={
                        !isPasswordValid
                            ? "flex gap-2 text-xs bg-grey text-white p-1 rounded-md mt-1"
                            : "sr-only"
                    }
                >
                    <FaInfoCircle size={18} />
                    <div>
                        <span className="">Password must contain:</span>
                        <ul className="list-disc list-inside text-xs">
                            <li>8-24 characters</li>
                            <li>At least 1 capital letter</li>
                            <li>At least 1 digit</li>
                            <li>At least 1 special characrter</li>
                            <li>
                                Allowed special characters:{" "}
                                <span aria-label="exclamation mark">!</span>{" "}
                                <span aria-label="hashtag">#</span>{" "}
                                <span aria-label="at symbol">@</span>{" "}
                                <span aria-label="dollar sign">$</span>{" "}
                                <span aria-label="underscore">_</span>{" "}
                                <span aria-label="hyphen">-</span>{" "}
                                <span aria-label="asterik">*</span>{" "}
                                <span aria-label="ampersand">&</span>{" "}
                                <span aria-label="percent">%</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            {name === "confirm_password" && !isPasswordMatch && (
                <span className="text-sm text-red-600 font-medium">
                    Passwords do not match!
                </span>
            )}
        </div>
    );
}
