import { useState } from "react";

const CustomerInfoForm = ({ onCustomerInfo, customerInfo }) => {

    const [formInputs, setFormInputs] = useState(customerInfo || {
        customerNumber: "",
        customerName: "",
        customerAddress: "",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormInputs(prevState => ({...prevState, [name]: value}));
    }

    const handleCustomerData = (e) => {
        e.preventDefault();
        const { customerNumber, customerName, customerAddress } = e.target.elements;
        const customerInfo = {
            customerNumber: customerNumber.value,
            customerName: customerName.value,
            customerAddress: customerAddress.value,
        }
        onCustomerInfo(customerInfo);
    }

    return (
        <section className="p-4 min-h-screen">
            <section className="mt-6">
                <h2 className="text-lg font-medium text-gray-600">
                    Step 1 of 3: Customer Information
                </h2>
            </section>

            <form className="mt-4 space-y-4" onSubmit={handleCustomerData}>
                {/* Customer Number */}
                <div>
                    <label htmlFor="customerNumber" className="block text-sm pb-2">
                        Customer Number
                    </label>
                    <input
                        id="customerNumber"
                        name="customerNumber"
                        value={formInputs.customerNumber}
                        onChange={handleInputChange}
                        type="tel"
                        maxlength="10"
                        pattern="\d{10}"
                        placeholder="Enter customer phone number"
                        required
                        className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Removes non-numeric characters
                        }}
                    />
                </div>

                {/* Customer Name */}
                <div>
                    <label htmlFor="customerName" className="block text-sm pb-2">
                        Customer Name
                    </label>
                    <input
                        id="customerName"
                        name="customerName"
                        value={formInputs.customerName}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Enter customer name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                    />
                </div>

                {/* Customer Address */}
                <div className="pb-2">
                    <label htmlFor="customerAddress" className="block text-sm pb-2">
                        Customer Address
                    </label>
                    <input
                        id="customerAddress"
                        name="customerAddress"
                        placeholder="Enter customer address"
                        value={formInputs.customerAddress}
                        onChange={handleInputChange}
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                    />
                </div>
                <button type="submit" className="fixed bottom-0 left-0 text-white py-4 mt-4 bg-green-600 hover:bg-green-700 transition-all w-full">
                    Next
                </button>
            </form>
        </section>
    )
}

export default CustomerInfoForm;