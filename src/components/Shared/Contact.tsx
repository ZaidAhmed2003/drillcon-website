import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Badge } from "@/components";

const Contact = () => {
  return (
    <div className="container mx-auto my-44 px-4" id="contact">
      <div className="mb-14 flex flex-col items-center justify-center">
        <Badge text="Contact" />
        <h2 className="font-montserrat text-secondary mb-4 text-4xl font-bold md:text-5xl">
          Reach Us Out
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center rounded-lg bg-gray-50 p-10 text-center shadow-sm">
          <FaEnvelope className="text-primary mb-4 h-8 w-8" />
          <h3 className="mb-2 text-xl font-semibold">Email</h3>
          <p className="text-gray-600">drillcon20@gmail.com</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-gray-50 p-10 text-center shadow-sm">
          <FaPhoneAlt className="text-primary mb-4 h-8 w-8" />
          <h3 className="mb-2 text-xl font-semibold">Phone</h3>
          <p className="text-gray-600">+92 333 1777213</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-gray-50 p-10 text-center shadow-sm">
          <FaMapMarkerAlt className="text-primary mb-4 h-8 w-8" />
          <h3 className="mb-2 text-xl font-semibold">Location</h3>
          <p className="text-gray-600">
            D-201 saima avenue apartment, sector 14-B North Nazimabad, Karachi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
