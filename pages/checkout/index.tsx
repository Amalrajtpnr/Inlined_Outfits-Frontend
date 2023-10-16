import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdHome } from "react-icons/md";
import { BsBuildingsFill } from "react-icons/bs";
import { LuPlus } from "react-icons/lu";
import { AiOutlineMinus } from "react-icons/ai";
import { useAppContext } from "../../contexts/AppContexts";
import { IoCallOutline, IoCloseCircleOutline } from "react-icons/io5";
import { BsCheck2Circle } from "react-icons/bs";

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

function Checkout() {
  const [isActive, setIsActive] = useState(false);
  const [address, setAddress] = useState<Address>({} as Address);
  const { user, setUser } = useAppContext();
  const [addressId, setAddressId] = useState("");
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [cartItems, setCartItems] = useState<any>({});
  const [checkOut, setCheckOut] = useState(false);

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

  const getCart = async () => {
    const user = JSON.parse(localStorage.getItem("user")!);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart/${user.email}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (!data.error) {
        console.log(data);
        setCartItems(data);
        // Calculate the total amount by iterating through cart items
        let calculatedTotalAmount = 0;
        let initialDiscount = 0;

        for (let i = 0; i < data.products.length; i++) {
          // Get the original price of the item at index i and add it to the overall total
          const originalPrice = parseFloat(
            data.products[i]?.product?.price?.original
          );
          const offer = parseFloat(data.products[i]?.product?.price?.offer);

          initialDiscount += offer;
          calculatedTotalAmount += originalPrice;
        }

        setDiscount(initialDiscount);
        // Update the totalAmount state using setTotalAmount
        setTotalAmount(calculatedTotalAmount);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const placeOrder = async () => {
    const user = JSON.parse(localStorage.getItem("user")!);
    console.log("first");
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/order/placeOrder/${user.email}`,
        {
          method: "POST",
          body: JSON.stringify({
            address: { address },
            products: cartItems,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (!data.error) {
        console.log("data");
        setCheckOut(true);
      } else {
        console.log(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="h-screen bg-white flex flex-col items-center justify-start overflow-y-scroll overflow-hidden scrollbar-hide">
      <Navbar />
      <div className="w-full min-h-[85%] flex flex-row items-center justify-center overflow-y-scroll scrollbar-hide">
        <div className="w-[60%] h-full flex flex-col items-start justify-start  overflow-y-scroll scrollbar-hide ">
          <h1 className="text-[22px] text-black font-semibold ">
            Delivery Address
          </h1>
          <div className="w-full min-h-[40%] flex flex-col items-start justify-around ">
            {user?.addresses?.map((address: any) => (
              <div className="w-[30%] h-[90%] rounded-[20px] border border-gray-400  flex flex-col items-center justify-around  ">
                <MdHome size={40} color="grey" />
                <h1 className="text-[15px] text-black font-normal">
                  {address.name}
                </h1>{" "}
                <h1 className="text-[15px] text-black font-normal">
                  {address.address}
                </h1>{" "}
                <h1 className="text-[15px] text-black font-normal">
                  {" "}
                  {address.pinCode}
                </h1>{" "}
                <h1 className="text-[15px] text-black font-normal">
                  {address.phone}
                </h1>{" "}
              </div>
            ))}

            {/* <div className="w-[30%] h-[90%] rounded-[20px] border border-gray-400   flex flex-col items-center justify-center ml-8">
              <BsBuildingsFill size={40} color="grey" />
              <h1 className="text-[15px] text-black font-normal">
                Athul vishnu
              </h1>{" "}
              <h1 className="text-[15px] text-black font-normal">
                Karamel Vellur (PO) Payyanur
              </h1>{" "}
              <h1 className="text-[15px] text-black font-normal">670307</h1>{" "}
              <h1 className="text-[15px] text-black font-normal">9876543210</h1>{" "}
            </div> */}
          </div>
          <div className="w-[65%] min-h-[10%]  flex flex-col items-start justify-start border border-gray-400 rounded-[20px] p-[20px] overflow-y-scroll scrollbar-hide">
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
                    value={address.name}
                    onChange={(e) =>
                      setAddress({ ...address, name: e.target.value })
                    }
                    type="text"
                    placeholder="First Name"
                    className="w-[48%] h-full border border-gray-400 text-xs outline-none mt-6 p-3 box-border rounded-[15px]"
                  />

                  <input
                    value={address.phone}
                    onChange={(e) =>
                      setAddress({ ...address, phone: e.target.value })
                    }
                    type="text"
                    placeholder="Mobile Number"
                    className="w-[48%] h-full border border-gray-400 text-xs mt-6 p-3 outline-none box-border rounded-[15px] "
                  />
                </div>
                <div className="w-full h-[10%] flex flex-row items-center justify-between ">
                  <input
                    value={address.locality}
                    onChange={(e) =>
                      setAddress({ ...address, locality: e.target.value })
                    }
                    type="text"
                    placeholder=" Locality"
                    className="w-[48%] h-full border border-gray-400 text-xs outline-none mt-6 p-3 box-border rounded-[15px]"
                  />

                  <input
                    value={address.pinCode}
                    onChange={(e) =>
                      setAddress({ ...address, pinCode: e.target.value })
                    }
                    type="text"
                    placeholder="Pincode"
                    className="w-[48%] h-full border border-gray-400 text-xs mt-6 p-3 outline-none box-border rounded-[15px] "
                  />
                </div>
                <div className="w-full h-[18%] flex flex-row items-center justify-between ">
                  <input
                    value={address.address}
                    onChange={(e) =>
                      setAddress({ ...address, address: e.target.value })
                    }
                    type="text"
                    placeholder=" Address"
                    className="w-[100%] h-full border border-gray-400 text-xs outline-none mt-6 p-3 box-border rounded-[15px]"
                  />
                </div>
                <div className="w-full h-[10%] flex flex-row items-center justify-between ">
                  <input
                    value={address.city}
                    onChange={(e) =>
                      setAddress({ ...address, city: e.target.value })
                    }
                    type="text"
                    placeholder=" District/Town/City"
                    className="w-[48%] h-full border border-gray-400 text-xs outline-none mt-6 p-3 box-border rounded-[15px]"
                  />

                  <input
                    value={address.state}
                    onChange={(e) =>
                      setAddress({ ...address, state: e.target.value })
                    }
                    type="text"
                    placeholder="Select State"
                    className="w-[48%] h-full border border-gray-400 text-xs mt-6 p-3 outline-none box-border rounded-[15px] "
                  />
                </div>{" "}
                <div className="w-full h-[10%] flex flex-row items-center justify-between ">
                  <input
                    value={address.landMark}
                    onChange={(e) =>
                      setAddress({ ...address, landMark: e.target.value })
                    }
                    type="text"
                    placeholder=" Landmark(Optional)"
                    className="w-[48%] h-full border border-gray-400 text-xs outline-none mt-6 p-3 box-border rounded-[15px]"
                  />

                  <input
                    value={address.alternateNumber}
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        alternateNumber: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Alternate Phone (Optional)"
                    className="w-[48%] h-full border border-gray-400 text-xs mt-6 p-3 outline-none box-border rounded-[15px] "
                  />
                </div>
                <div className="w-[50%] h-[10%] flex flex-row items-center justify-between ">
                  <h1 className="text-[12px] font-medium">Address Type</h1>
                  <div className="w-[30%] h-[50%] flex flex-row items-center justify-around ">
                    <input
                      type="radio"
                      placeholder=" Landmark(Optional)"
                      className="w-[48%] h-full border border-gray-400 text-xs outline-none  rounded-[15px]"
                    />
                    <h1 className="text-[12px] font-medium">Home</h1>
                  </div>
                  <div className="w-[25%] h-[50%] flex flex-row items-center justify-around ">
                    <input
                      type="radio"
                      placeholder=" Landmark(Optional)"
                      className="w-[48%] h-full border border-gray-400 text-xs outline-none  rounded-[15px]"
                    />
                    <h1 className="text-[12px] font-medium">Work</h1>
                  </div>
                </div>
                <div className="w-full h-[9%] flex flex-row items-center justify-end ">
                  <button
                    onClick={() => {
                      if (user && user.addresses.length > 0) {
                        updateAddress();
                      } else {
                        addAddress();
                      }
                    }}
                    className="w-[25%] h-full text-[12px] font-medium bg-black text-white rounded-lg  flex flex-row items-center justify-center"
                  >
                    Save and Continue
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-[26%] h-full flex flex-col items-start justify-start  border ">
          <div className="w-[100%] h-[80%] rounded-[15px] border border-gray-400  flex flex-col items-start justify-around pl-[70px] p-[30px] ">
            <h1 className="text-[22px] text-black font-semibold">
              Price Details
            </h1>

            <div className="w-[80%] h-[1px] border-dashed border border-black mt-2"></div>

            <div className="w-[80%] h-[7%] flex flex-row items-center justify-between  mt-2">
              <h1 className="text-[15px] text-black font-normal ">
                Net Amount
              </h1>
              <h1 className="text-[15px] text-black font-normal ">
                {" "}
                ${totalAmount}
              </h1>
            </div>

            <div className="w-[80%] h-[7%] flex flex-row items-center justify-between  mt-2">
              <h1 className="text-[15px] text-black font-normal ">Discount</h1>
              <h1 className="text-[15px] text-black font-normal ">
                {" "}
                {discount}%
              </h1>
            </div>
            <div className="w-[80%] h-[7%] flex flex-row items-center justify-between  mt-2">
              <h1 className="text-[15px] text-black font-normal ">Delivery</h1>
              <h1 className="text-[15px] text-black font-normal ">$2</h1>
            </div>
            <div className="w-[80%] h-[1px] border-dashed border border-black mt-2"></div>

            <div className="w-[80%] h-[7%] flex flex-row items-center justify-between  mt-2">
              <h1 className="text-[15px] text-black font-normal ">Total</h1>
              <h1 className="text-[15px] text-black font-normal ">
                {" "}
                ${totalAmount ? totalAmount + 2 : "0"}
              </h1>
            </div>
            <div className="w-[80%] h-[1px] border-dashed border border-black mt-2"></div>
            {/* <h1 className="text-[15px] text-black font-normal ">
              You saved 500 on this order
            </h1> */}
            <div
              onClick={placeOrder}
              className="w-[60%] h-[10%] bg-black rounded-[10px] flex flex-row items-center justify-center mt-8 ml-8"
            >
              <AiOutlineShoppingCart size={20} color="white" />

              <h1 className="text-white font-semibold text-[14px] ml-3">
                Proceed to Checkout
              </h1>
            </div>
          </div>
        </div>
      </div>
      {checkOut && (
        <div className="h-screen bg-black z-[100] fixed top-0 left-0 right-0 bg-transparent  flex flex-col items-center justify-center ">
          <div className="w-[30%] h-[50%] border-dashed border-2 border-green-400 bg-gray-100 rounded-[30px] flex flex-col items-center justify-start p-[40px] box-border ">
            <div className="w-full h-[10%] flex flex-col items-end justify-center  ">
              <IoCloseCircleOutline
                onClick={() => setCheckOut(false)}
                size={32}
              />
            </div>
            <div className="w-[90%] h-[70%] flex flex-col items-center  justify-center ">
              <BsCheck2Circle color="green" size={80} />
              <h1 className="font-medium text-[20px]">
                Your order has placed sucessfully
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
