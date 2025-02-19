import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Badge } from "@/components";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 my-44">
      <div className="flex flex-col items-center justify-center mb-14">
        <Badge text="Contact" />
        <h2 className="font-montserrat text-2xl font-bold text-secondary md:text-3xl lg:text-2xl xl:text-5xl mb-4">
          Reach Us Out
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center p-10 bg-gray-50 rounded-lg shadow-sm">
          <FaEnvelope className="w-8 h-8 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-600">info@drillcon.com</p>
        </div>
        <div className="flex flex-col items-center text-center p-10 bg-gray-50 rounded-lg shadow-sm">
          <FaPhoneAlt className="w-8 h-8 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-gray-600">+92 333 1777213</p>
        </div>
        <div className="flex flex-col items-center text-center p-10 bg-gray-50 rounded-lg shadow-sm">
          <FaMapMarkerAlt className="w-8 h-8 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <p className="text-gray-600">
            D-201 saima avenue apartment, sector 14-B North Nazimabad, Karachi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
