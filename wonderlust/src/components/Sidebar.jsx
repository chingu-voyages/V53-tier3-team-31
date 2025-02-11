import { Button } from "@radix-ui/themes";


export default function Sidebar({ isOpen, onClose, children }) {
  return (
    <div
      className={`fixed top-16 md:my-2 right-0 w-full md:w-1/3 h-screen p-4 bg-[var(--gray-7)] border-black border-4 shadow-lg transition-transform duration-700  ${
        isOpen ? "translate-x-0 " : "translate-x-full "
      }`}
    >
      <Button className="mb-4 p-2 bg-[var(--gray-7)] rounded-md hover:bg-gray-600" onClick={onClose}>
        ✖ Close
      </Button>
      <div className="mt-4">{children}</div>
    </div>
  );
}
