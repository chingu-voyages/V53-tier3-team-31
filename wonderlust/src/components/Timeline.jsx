import * as Accordion from "@radix-ui/react-accordion";

const Timeline = ({ children }) => {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 top-0 h-full w-2 bg-blue-500"></div>

      {/* Timeline Items */}
      <div className="space-y-8 pl-12">{children}</div>
    </div>
  );
};

// Timeline Item Component
Timeline.Item = ({ children }) => {
  return (
    <div className="relative flex items-start">
      {/* Timeline Dot */}
      <div className="absolute -left-11 w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>

      <div className="w-full">
        <Accordion.Root type="single" collapsible>{children}</Accordion.Root>
      </div>
    </div>
  );
};

// Title Component
Timeline.Title = ({ children }) => {
  return (
    <Accordion.Trigger className="w-full p-4 text-left font-bold hover:bg-blue-100 transition">
      {children}
    </Accordion.Trigger>
  );
};

// Date Component
Timeline.Date = ({ children }) => {
  return <p className="text-sm text-gray-500">{children}</p>;
};

// Event Description Component
Timeline.Event = ({ children }) => {
  return <p className="mt-2">{children}</p>;
};

// Exporting the Composable Timeline
export default Timeline;
