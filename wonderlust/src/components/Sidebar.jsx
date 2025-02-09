

export default function Sidebar({ isOpen, onClose, children }) {
  return (
    <div
      className={`fixed top-16 md:my-2 right-0 w-full md:w-1/3 h-screen bg-gray-900 text-white p-4 shadow-lg transition-transform duration-700  ${
        isOpen ? "translate-x-0 " : "translate-x-full "
      }`}
    >
      <button className="mb-4 p-2 bg-gray-700 rounded-md hover:bg-gray-600" onClick={onClose}>
        ✖ Close
      </button>
      <div className="mt-4">{children}</div>
    </div>
  );
}
