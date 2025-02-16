import { Button, IconButton, Card } from "@radix-ui/themes";


export default function Sidebar({ isOpen, onClose, children }) {
  return (
    <div
      className={`fixed top-16 md:my-2 rounded-lg right-0 w-full md:w-1/3 h-screen p-4 bg-[var(--gray-7)]  shadow-lg transition-transform duration-700 overflow-y-scroll ${
        isOpen ? "translate-x-0 " : "translate-x-full "
      }`}
    >
      
      <IconButton radius="full" onClick={onClose}>
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
      </IconButton>
         

      <div className="mt-4">{children}</div>
      <div className="m-20"></div>
    </div>
  );
}
