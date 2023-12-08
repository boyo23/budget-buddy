import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import ImageAnimation from "@/components/image-animation";

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [errorState, setErrorState] = useState<string>("");
  const navigate = useNavigate()

  const isRegisterButtonDisabled =
    username === "" || email === "" || password === "";

  const handleInputChange = <T extends string | number>(
    event: React.ChangeEvent<HTMLInputElement>,
    setStateFunction: React.Dispatch<React.SetStateAction<T>>,
  ) => {
    setStateFunction(event.target.value as T);
  };

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username !== "" && email !== "" && password !== "") {
      setIsRegistered(true);
      console.log("Registration successful");
    } else {
      console.log("Registration failed. Please check the input values.");
    }
  };

  const { register, watch, handleSubmit } = useForm();
  console.log(watch())
  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("http://localhost:3000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const json = await response.json()
        console.log(json.message)
      } else {
        const responseData = await response.json();
        console.log("Registration successful", responseData);
        setIsRegistered(true);
        navigate("/")
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  // console.log(watch());
  return (
    <form onSubmit={handleSubmit(data => onSubmit(data))}>
      <div className=" bg-gradient-to-r from-pink-500 to-pink-400">
        <div className="opacity-75 inset-0 z-0"></div>
        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
          <div className="flex-col flex self-center p-10 sm:max-w-3xl xl:max-w-1xl z-10 mr-40">
            <div className='relative top-28'>
              <ImageAnimation
                src_1="https://i.ibb.co/dKSyW6n/bb-2.png"
                src_2="https://i.ibb.co/DbbfMNn/bb-1.png" />
            </div>
            <div className="hidden flex-col self-start text-white lg:flex relative right-28 bottom-72">
              <h1 className="mb-3 text-7xl font-bold z-15
whitespace-nowrap">Welcome to BudgetBuddy </h1>
              <p className="pr-3 text-3xl text-white opacity-[0.7] z-15 text-[#4b011b]
">your ultimate sidekick for crushing expenses</p>
            </div>
          </div>
          <div className="flex justify-center self-center z-10">
            <div className="p-12 bg-white  rounded-2xl w-100 ">
              <div className="mb-4">
                <h3 className="font-bold text-4xl text-gray-800 text-center">Register</h3>
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Username
                  </label>
                  <input
                    className="bg-slate-100 text-black w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-400"
                    type="text"
                    // value={username}
                    {...register("username")}
                  // onChange={(e) => handleInputChange(e, setUsername)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Email
                  </label>
                  <input
                    className="bg-slate-100 text-black w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-400"
                    type="email"
                    // value={email}
                    {...register("email", { required: true })}
                  // onChange={(e) => handleInputChange(e, setEmail)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    className="bg-slate-100 text-black w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-400"
                    type="password"
                    // value={password}
                    // onChange={(e) => handleInputChange(e, setPassword)}
                    {...register("password", { required: true })}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className={`flex w-full justify-center cursor-pointer rounded-lg p-3 font-semibold tracking-wide text-white bg-pink-600 hover:bg-pink-700 transition duration-100 ease-in`}
                  >
                    Register
                  </button>
                </div>
                <div className="text-gray-500 mt-2 flex justify-center">
                  <p>
                    Return to{" "}
                    <a href="/login" className="underline">
                      Log In
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
