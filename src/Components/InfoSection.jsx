import React from "react";
import { FaShippingFast, FaHeadset, FaMoneyBillWave, FaLock ,FaTag} from "react-icons/fa";

const InfoSection = () => {

  const infoItems = [
    {
      icon: <FaShippingFast />,
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description: "We are here to help you anytime",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "100% Money Back",
      description: "Full refund if you are not satisfied",
    },
    {
      icon: <FaLock />,
      title: "Payment Secure ",
      description: "Your payment information is safe with us",
    },
    {
      icon: <FaTag
       />,
      title: "Discount",
      description: "Enjoy the best prices on our products",
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 px-4">

        {infoItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg text-center border hover:shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="text-4xl text-orange-500 mb-3 flex justify-center">
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold mb-1">
              {item.title}
            </h3>

            <p className="text-gray-500 text-sm">
              {item.description}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default InfoSection;