import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/router";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineKey } from "react-icons/hi";
import { passwordRegex } from "../constants/constants";
import { useAppContext } from "../contexts/AppContexts";



function Navbar() {
  const router = useRouter();
  const [isadmin, setIsAdmin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [register, setRegister] = useState(false);
  // const [user, setUser] = useState({});
  const {user,setUser}=useAppContext()

  type state = {
    email: string;
    password: string;
    name: string;
  };

  type Error = {
    email: string;
    password: string;
    name: string;
  };

  const [state, setState] = useState<state>({
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState<Error>({
    password: "",
    email: "",
    name: "",
  });

  const handleLogin = async (e?: any) => {
    e?.preventDefault();
    if (state.email.trim().length !== 0 && state.password.trim().length !== 0) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
          {
            method: "post",
            body: JSON.stringify({
              email: state.email,
              password: state.password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        console.log(data);
        if (!data.error) {
          setUser(data);
          // onSignup()
          router.push("/");
          localStorage.setItem("user", JSON.stringify(data));
          setSignUp(false);
        } else {
          setUser({});
          setError({
            email: "",
            name: "",
            password: data.error,
          });
        }
      } catch (error: any) {
        console.log(error);
      }
    } else {
      if (
        state.email.trim().length === 0 &&
        state.password.trim().length === 0
      ) {
        setError({
          email: "email is required",
          password: "password is required",
          name: "",
        });
      } else if (state.email.trim().length === 0) {
        setError({
          email: "email is required",
          password: "",
          name: "",
        });
      } else if (state.password.trim().length === 0) {
        setError({
          email: "",
          password: "password is required",
          name: "",
        });
      } else if (!passwordRegex.test(state.password)) {
        setError({
          email: "",
          password: "password is weak",
          name: "",
        });
      }
    }
    // fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // })
    //   .then((response) => response.json())

    //   .then((data) => {
    //     console.log(data);
    //     if (!data.error) {
    //       setUser(data);
    // localStorage.setItem("user", JSON.stringify(data));
    // setSignUp(false);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  function handleRegister() {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: state.email,
        password: state.password,
        name: state.name,
      }),
    })
      .then((response) => response.json())

      .then((data) => {
        if (!data.error) {
          setRegister(false);
          localStorage.setItem("user", JSON.stringify(data));
          setUser(data)

          console.log(data);
        }else{
          setError(data.error)
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const handleLogOut = () => {
    if (user && Object.keys(user).length > 0) {
      // User is logged in, so log them out
      setUser({});
      localStorage.removeItem("user"); // Remove user from local storage
      setIsAdmin(false);
    } else {
      // User is not logged in, toggle the sign-up state
      setSignUp(!signUp);
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")!);
    if (user && Object.keys(user).length > 0) {
      setUser(user);
    } else {
      setUser({});
    }
  }, []);

  return (
    <div className="w-screen min-h-[15%]  flex flex-row items-center justify-between">
      <div className="w-[20%] h-full   flex flex-row items-center justify-center">
        <img src="/In&O.svg" className="w-[50%] h-[50%]" alt="" />
      </div>
      <div className="w-[50%] h-full px-[20px]  flex flex-row items-center justify-around">
        <h1
          style={{
            borderBottom: router.pathname === "/" ? "solid 2px black" : "white",
          }}
          onClick={() => router.push("/")}
          className="text-black text-[16px] h-[25%] font-semibold  cursor-pointer"
        >
          Home
        </h1>
        <h1
          style={{
            borderBottom:
              router.pathname === "/shop" ? "solid 2px black" : "white",
          }}
          onClick={() => router.push("/shop")}
          className="text-black text-[16px] font-semibold cursor-pointer"
        >
          Shop
        </h1>
        <h1 className="text-black text-[16px] font-semibold">Contact Us</h1>
        <div className="w-[10%] min-h-[20%] flex flex-col items-center justify-center relative  cursor-pointer">
          <div className="w-full h-full">
            <BsPerson
              onClick={() => {
                setIsAdmin(!isadmin);
              }}
              size={20}
            />
            {isadmin && (
              <div className="w-[200px] h-[200px] absolute top-[30px] right-[45px] p-[20px] drop-shadow-lg border-gray-400 flex flex-col items-start justify-around rounded-[20px] bg-white border z-[100]">
                <h1
                  onClick={() => {
                    router.push("/personalDetails");
                    setIsAdmin(false);
                  }}
                  className="text-black text-[16px] font-semibold"
                >
                  Profile
                </h1>
                <div className="w-full h-[1px] bg-gray-400"></div>
                <h1 className="text-black text-[16px] font-semibold">
                  My Orders
                </h1>
                <div className="w-full h-[1px] bg-gray-400"></div>
                <h1
                  onClick={handleLogOut}
                  className="text-[#FF0000] text-[16px] font-semibold"
                >
                  {user && Object.keys(user).length > 0 ? "Log Out" : "Log In"}
                </h1>
              </div>
            )}
          </div>
        </div>
        <div
          onClick={() => router.push("/cart")}
          className="w-[20%] h-[45%] rounded-[15px] bg-black flex flex-row items-center justify-center  cursor-pointer"
        >
          <AiOutlineShoppingCart size={20} color="white" />

          <h1 className="text-white text-sm font-medium ml-3">Cart</h1>
        </div>
      </div>
      {signUp && (
        <div className="h-screen bg-black z-[100] fixed top-0 left-0 right-0 bg-transparent  flex flex-col items-center justify-center ">
          <div className="w-[50%] h-[60%] bg-white rounded-[30px] flex flex-row items-center justify-center p-[40px] box-border ">
            <div className="w-[50%] h-full flex flex-col items-center justify-start ">
              <img src="/In&O.svg" className="w-[40%] h-[20%]" alt="" />
              <div className="w-[90%] h-[20%] flex flex-row items-center justify-start  border-b border-black">
                <IoCallOutline size={25} color="grey" />
                <input
                  onChange={(e) => {
                    setState({ ...state, email: e.target.value });
                    if (e.target.value.trim().length == 0) {
                      setError({ ...error, email: "" });
                    } else if (e.target.value.length <= 3) {
                      setError({ ...error, email: "Invalid Name" });
                    } else {
                      setError({ ...error, email: "" });
                    }
                  }}
                  type="text"
                  name=""
                  placeholder="email"
                  id=""
                  className="ml-6 h-[80%] w-[90%] outline-none"
                />
              </div>
              <div className="w-[90%] h-[20%] flex flex-row items-center justify-start border-b border-black">
                <HiOutlineKey size={25} color="grey" />
                <input
                  onChange={(e) => {
                    setState({ ...state, password: e.target.value });
                    if (e.target.value.trim().length === 0) {
                      setError({ ...error, password: "" });
                    } else if (!passwordRegex.test(e.target.value)) {
                      setError({ ...error, password: "Weak Password" });
                    } else {
                      setError({ ...error, password: "" });
                    }
                  }}
                  type="text"
                  name=""
                  placeholder="password"
                  id=""
                  className="ml-6 h-[80%] w-[90%] outline-none"
                />
              </div>
              <div className="w-full h-[25%] flex flex-col items-center justify-around  mt-4">
                <button
                  onClick={handleLogin}
                  className="w-[38%] h-[50%] rounded-[10px] bg-black text-white font-semibold text-[15px]"
                >
                  Login
                </button>
                {/* {error >0 && (
            <span className="text-[11px] font-medium text-red-500">
              colours and size are required
            </span>
          )} */}
                <h1 className="text-black text-[12px] font-normal">
                  New to In&O ?
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      setRegister(true);
                      setSignUp(false);
                    }}
                  >
                    {" "}
                    Create Account
                  </span>
                </h1>
              </div>
            </div>
            <div className="w-[50%] h-full flex flex-col items-center justify-center ">
              <div className="w-full h-[10%] flex flex-col items-end justify-center ">
                <IoCloseCircleOutline
                  onClick={() => {
                    setSignUp(false);
                  }}
                  size={32}
                />
              </div>
              <img src="/Rectangle 14.svg" className="w-full h-[100%]" alt="" />
            </div>
          </div>
        </div>
      )}
      {!signUp && register && (
        <div className="h-screen bg-black z-[100] fixed top-0 left-0 right-0 bg-transparent  flex flex-col items-center justify-center ">
          <div className="w-[50%] h-[60%] bg-white rounded-[30px] flex flex-row items-center justify-center p-[40px] box-border ">
            <div className="w-[50%] h-full flex flex-col items-center justify-start ">
              <img src="/In&O.svg" className="w-[40%] h-[20%]" alt="" />
              <div className="w-[90%] h-[20%] flex flex-row items-center justify-start  border-b border-black">
                <BsPerson size={25} color="grey" />

                <input
                  onChange={(e) => {
                    setState({ ...state, name: e.target.value });
                    if (e.target.value.trim().length == 0) {
                      setError({ ...error, name: "" });
                    } else if (e.target.value.length <= 3) {
                      setError({ ...error, name: "Invalid Name" });
                    } else {
                      setError({ ...error, name: "" });
                    }
                  }}
                  type="text"
                  name=""
                  placeholder="name"
                  id=""
                  className="ml-6 h-[80%] w-[90%] outline-none"
                />
              </div>
              <div className="w-[90%] h-[20%] flex flex-row items-center justify-start  border-b border-black">
                <IoCallOutline size={25} color="grey" />

                <input
                  onChange={(e) => {
                    setState({ ...state, email: e.target.value });
                    if (e.target.value.trim().length == 0) {
                      setError({ ...error, email: "" });
                    } else if (e.target.value.length <= 3) {
                      setError({ ...error, email: "Invalid Name" });
                    } else {
                      setError({ ...error, email: "" });
                    }
                  }}
                  type="text"
                  name=""
                  placeholder="email"
                  id=""
                  className="ml-6 h-[80%] w-[90%] outline-none"
                />
              </div>
              <div className="w-[90%] h-[20%] flex flex-row items-center justify-start border-b border-black">
                <HiOutlineKey size={25} color="grey" />
                <input
                  onChange={(e) => {
                    setState({ ...state, password: e.target.value });
                    if (e.target.value.trim().length === 0) {
                      setError({ ...error, password: "" });
                    } else if (!passwordRegex.test(e.target.value)) {
                      setError({ ...error, password: "Weak Password" });
                    } else {
                      setError({ ...error, password: "" });
                    }
                  }}
                  type="text"
                  name=""
                  placeholder="password"
                  id=""
                  className="ml-6 h-[80%] w-[90%] outline-none"
                />
              </div>
              <div className="w-full h-[25%] flex flex-col items-center justify-around  mt-4">
                <button
                  onClick={handleRegister}
                  className="w-[38%] h-[50%] rounded-[10px] bg-black text-white font-semibold text-[15px]"
                >
                  Register
                </button>
              </div>
            </div>
            <div className="w-[50%] h-full flex flex-col items-center justify-center ">
              <div className="w-full h-[10%] flex flex-col items-end justify-center ">
                <IoCloseCircleOutline
                  onClick={() => {
                    setSignUp(false);
                  }}
                  size={32}
                />
              </div>
              <img src="/Rectangle 14.svg" className="w-full h-[100%]" alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
