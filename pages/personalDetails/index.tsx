import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { MdHome } from "react-icons/md";
import { BsBuildingsFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { LuPlus } from "react-icons/lu";
import { AiOutlineMinus } from "react-icons/ai";
import { useAppContext } from "../../contexts/AppContexts";

type Address = {
  name: string;
  phone: string;
  locality: string;
  pinCode: string;
  address: string;
  city: string;
  state: string;
  landMark: string;
  alternateNumber: string;
};

function PersonalDetails() {
  const [isActive, setIsActive] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState<Address>({} as Address);
  const [checkAddress, setcheckAddress] = useState<any>([]);
  const [addressId, setAddressId] = useState("");


  const { user, setUser } = useAppContext();


  function handleUpdate() {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: username, email, phone }),
    })
      .then((response) => response.json())

      .then((data) => {
        if (!data.error) {
          console.log(data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const updateAddress = async () => {
    try {
      if (user) {
        const addressIds = user.addresses.map(
          (address: any) => address.addressId
        );
        setAddressId(addressIds);
        console.log("Address IDs:", addressIds);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/update/${user?.email}/${addressIds}`,
          {
            method: "PUT",
            body: JSON.stringify({
              address: { ...address },
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        if (!data.error) {
          console.log(data);
          setIsActive(false);
        }
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addAddress = async () => {
    try {
      if (
        address.address.trim().length > 0 &&
        address.city.trim().length > 0 &&
        address.name.trim().length > 0 &&
        address.pinCode.trim().length > 0 &&
        address.state.trim().length > 0 &&
        address.locality.trim().length > 0
      ) {
        const user = JSON.parse(localStorage.getItem("user")!);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/add/${user?.email}`,
          {
            method: "POST",
            body: JSON.stringify({
              address: { ...address },
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        if (!data.error) {
          console.log(data);
          setIsActive(false);
        }
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAddress = async () => {
    const user = JSON.parse(localStorage.getItem("user")!);

    try {
      if (user.addresses) {
        console.log(user.addresses);
        setcheckAddress(user.addresses);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <div className="h-screen bg-white flex flex-col items-center justify-start overflow-y-scroll overflow-hidden scrollbar-hide ">
      <Navbar />
      <div className="w-full h-full flex lg:flex-row sm300:flex-col items-center lg:justify-center sm300:justify-between sm300:p-4 box-border lg:p-0">
        <div className="lg:w-[40%] sm300:w-full  sm300:min-h-[80%] lg:h-full  flex flex-col lg:items-start  justify-start ">
          <h1 className="text-lg text-black font-semibold">
            Personal Information
          </h1>
          <div className="w-full lg:h-[8%]  flex flex-row items-center justify-between ">
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => setUsername(e.target.value)}
              className="lg:w-[48%] sm300:w-[100%] h-full border border-gray-400 text-xs outline-none mt-6 p-3 box-border rounded-[15px]"
            />
            {/* 
            <input
              type="text"
              placeholder="Last Name"
              className="w-[48%] h-full border border-gray-400 text-xs mt-6 p-3 outline-none box-border rounded-[15px] "
            /> */}
          </div>
          <h1 className="text-lg text-black font-semibold mt-8">
            Email Address
          </h1>
          <div className="w-full lg:h-[8%] flex flex-row items-center justify-between ">
            <input
              type="text"
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              className="lg:w-[48%] sm300:w-[100%]  h-full border border-gray-400 text-xs outline-none mt-6 p-3 box-border rounded-[15px]"
            />
          </div>
          <h1 className="text-lg text-black font-semibold mt-8">
            Phone Number
          </h1>
          <div className="w-full lg:h-[8%] flex flex-row items-center justify-between ">
            <input
              type="text"
              placeholder=" Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              className="lg:w-[48%] sm300:w-[100%]  h-full border border-gray-400 text-xs outline-none mt-6 p-3 box-border rounded-[15px]"
            />
          </div>
          <div
            onClick={handleUpdate}
            className="lg:w-[20%] sm300:w-[25%] h-[8%] rounded-[10px]  bg-black flex  flex-col items-center justify-center mt-16 "
          >
            <h1 className="text-[15px] text-white font-semibold ">Update</h1>
          </div>
        </div>
        <div className="lg:w-[50%] sm300:w-full lg:h-full sm300:min-h-[50%]   flex flex-col items-center lg:justify-start sm300:justify-around overflow-y-scroll scrollbar-hide lg:ml-5 ">
          {checkAddress.length !== 0
            ? checkAddress.map((address: any, index: any) => (
                <div
                  key={index}
                  className="w-full sm300:min-h-[45%] lg:min-h-[45%] flex flex-row items-start justify-start  "
                >
                  <div className="lg:w-[35%] lg:h-[90%] rounded-[20px] border border-gray-400 flex flex-col items-center justify-center">
                    <div className="w-[95%] h-[10%] flex flex-col items-end justify-center sm300:mb-0 sm300:-mt-0 lg:-mt-10 lg:mb-7">
                      <MdDelete size={30} />
                    </div>
                    <MdHome size={40} color="grey" />
                    <h1 className="text-[15px] text-black font-normal mt-2">
                      {address.name}
                    </h1>
                    <h1 className="text-[15px] text-black font-normal">
                      {address.address}
                    </h1>
                    <h1 className="text-[15px] text-black font-normal">
                      {address.pinCode}
                    </h1>
                    <h1 className="text-[15px] text-black font-normal">
                      {address.phone}
                    </h1>
                  </div>
                </div>
              ))
            : null}

          {/* <div className="w-[35%] h-[90%] rounded-[20px] border border-gray-400   flex flex-col items-center justify-center ml-8">
              <div className="w-[95%] h-[10%] flex flex-col items-end justify-center  -mt-10 mb-7">
                <MdDelete size={30} />
              </div>
              <BsBuildingsFill size={40} color="grey" />
              <h1 className="text-[15px] text-black font-normal mt-2">
                Athul vishnu
              </h1>{" "}
              <h1 className="text-[15px] text-black font-normal">
                Karamel Vellur (PO) Payyanur
              </h1>{" "}
              <h1 className="text-[15px] text-black font-normal">670307</h1>{" "}
              <h1 className="text-[15px] text-black font-normal">9876543210</h1>{" "}
            </div> */}
          <div className="lg:w-full sm300:w-full lg:h-[90%] sm300:h-[170%]  flex flex-col items-start lg:justify-start  lg:mt-0 sm300:mt-7">
            <div className="lg:w-[75%] sm300:w-full lg:min-h-[10%] sm300:min-h-[10%]  flex flex-col items-start justify-start border border-gray-400 rounded-[20px] p-[20px] ">
              <div className="w-[100%] h-[100%]   flex flex-row items-center justify-between">
                <h1 className="text-[18px] text-black font-medium">
                  Add a new address
                </h1>{" "}
                {isActive ? (
                  <AiOutlineMinus
                    onClick={() => {
                      setIsActive(false);
                    }}
                    size={30}
                  />
                ) : (
                  <LuPlus
                    onClick={() => {
                      setIsActive(!isActive);
                    }}
                    size={30}
                  />
                )}
              </div>

              {isActive && (
                <div className="min-h-[500px] w-[100%]  flex flex-col items-start justify-between mt-3 ">
                  <div className="w-full h-[10%] flex flex-row items-center justify-between ">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-[48%] h-full border border-gray-400 text-xs outline-none mt-6 p-3 box-border rounded-[15px]"
                    />

                    <input
                      type="text"
                      placeholder="Mobile Number"
                      className="w-[48%] h-full border border-gray-400 text-xs mt-6 p-3 outline-none box-border rounded-[15px] "
                    />
                  </div>
                  <div className="w-full h-[10%] flex flex-row items-center justify-between ">
                    <input
                      type="text"
                      placeholder=" Locality"
                      className="w-[48%] h-full border border-gray-400 text-xs outline-none mt-6 p-3 box-border rounded-[15px]"
                    />

                    <input
                      type="text"
                      placeholder="Pincode"
                      className="w-[48%] h-full border border-gray-400 text-xs mt-6 p-3 outline-none box-border rounded-[15px] "
                    />
                  </div>
                  <div className="w-full h-[18%] flex flex-row items-center justify-between ">
                    <input
                      type="text"
                      placeholder=" Address"
                      className="w-[100%] h-full border border-gray-400 text-xs outline-none mt-6 p-3 box-border rounded-[15px]"
                    />
                  </div>
                  <div className="w-full h-[10%] flex flex-row items-center justify-between ">
                    <input
                      type="text"
                      placeholder=" District/Town/City"
                      className="w-[48%] h-full border border-gray-400 text-xs outline-none mt-6 p-3 box-border rounded-[15px]"
                    />

                    <input
                      type="text"
                      placeholder="Select State"
                      className="w-[48%] h-full border border-gray-400 text-xs mt-6 p-3 outline-none box-border rounded-[15px] "
                    />
                  </div>{" "}
                  <div className="w-full h-[10%] flex flex-row items-center justify-between ">
                    <input
                      type="text"
                      placeholder=" Landmark(Optional)"
                      className="w-[48%] h-full border border-gray-400 text-xs outline-none mt-6 p-3 box-border rounded-[15px]"
                    />

                    <input
                      type="text"
                      placeholder="Alternate Phone (Optional)"
                      className="w-[48%] h-full border border-gray-400 text-xs mt-6 p-3 outline-none box-border rounded-[15px] "
                    />
                  </div>
                  {/* <div className="w-[50%] h-[10%] flex flex-row items-center justify-between ">
                    <h1 className="text-[12px] font-medium">Address Type</h1>
                    <div className="w-[30%] h-[50%] flex flex-row items-center justify-around ">
                      <input
                        type="radio"
                        // placeholder=" Landmark(Optional)"
                        className="w-[48%] h-full border border-gray-400 text-xs outline-none  rounded-[15px]"
                      />
                      <h1 className="text-[12px] font-medium">Home</h1>
                    </div>
                    <div className="w-[25%] h-[50%] flex flex-row items-center justify-around ">
                      <input
                        type="radio"
                        className="w-[48%] h-full border border-gray-400 text-xs outline-none  rounded-[15px]"
                      />
                      <h1 className="text-[12px] font-medium">Work</h1>
                    </div>
                  </div> */}
                  <div className="w-full h-[9%] flex flex-row items-center justify-end ">
                    <button
                      onClick={() => {
                        if (user && user.addresses.length > 0) {
                          updateAddress();
                        } else {
                          addAddress();
                        }
                      }}
                      className="lg:w-[25%] sm300:w-[45%] h-full text-[12px] font-medium bg-black text-white lg:rounded-lg sm300:rounded-2xl  flex flex-row items-center justify-center"
                    >
                      Save and Continue
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
