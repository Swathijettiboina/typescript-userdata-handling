interface FormDataProps {
    data: {
      email: string;
      firstName: string;
      lastName: string;
      phone: string;
    };
    onClose: () => void;
  }
  
  const DisplayData: React.FC<FormDataProps> = ({ data, onClose }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
          <h2 className="text-lg font-bold mb-4">Submitted Data</h2>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>First Name:</strong> {data.firstName}</p>
          <p><strong>Last Name:</strong> {data.lastName}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
          <button
            onClick={onClose}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default DisplayData;
  