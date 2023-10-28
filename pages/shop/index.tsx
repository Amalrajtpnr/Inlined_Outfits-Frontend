import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import { useRouter } from "next/router";
import { ImSpinner4 } from "react-icons/im";
import { useAppContext } from "../../contexts/AppContexts";

function Shop() {
  const [products, setProducts] = useState<any>([]);
const {loading,setLoading}=useAppContext()

  const router = useRouter();

  const getProducts = async () => {
    try {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/products`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setLoading(false); // Set loading to false when data is loaded
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="h-screen bg-white flex flex-col items-center justify-start overflow-y-scroll overflow-hidden scrollbar-hide">
      <Navbar />
      {loading ? ( // Show a loading spinner if loading is true
        <div className="w-full h-full flex items-center justify-center">
          <ImSpinner4 color="black" size={54} className="animate-spin" />
        </div>
      ) : (
        <div className="w-full grid lg:grid-cols-4 place-content-start place-items-center overflow-y-scroll scrollbar-hide p-9 box-border gap-x-6 gap-y-6">
          {products.slice(0, 4).map((product: any, i: number) => (
            <Card
              onClick={() => router.push(`/shop/${product.productId}`)}
              key={i}
              image={product.images[0]}
              nameofT={product.name}
              details={product.description}
              offprice={product.price.original}
              realprice={Math.round(
                product.price.original *
                  (100 / (100 - parseFloat(product.price.offer)))
              )}
              off={product.price.offer}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Shop;
