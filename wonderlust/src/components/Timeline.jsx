import * as Accordion from "@radix-ui/react-accordion";

export default function Timeline({ events }) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 top-0 h-full w-2 bg-blue-500"></div>

      {/* Timeline Events */}
      <div className="space-y-8 pl-12">
        {events.map((event, index) => (
          <div key={index} className="relative flex items-start">
            {/* Timeline Dot */}
            <div className="absolute -left-11 w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>

           
            <div className="w-full">
              <Accordion.Root type="single" collapsible>
                <Accordion.Item value={`item-${index}`} className="border rounded-lg overflow-hidden">
                  <Accordion.Trigger className="w-full   p-4 text-left font-bold  hover:bg-[var(--blue  -7)] transition">
                    {event.title}
                  </Accordion.Trigger>
                  <Accordion.Content className="p-4  bg-[var(--blue-7)] text-[var(--gray-3)]">
                    <p className="text-sm">{event.date}</p>
                    <p className="mt-2">{event.description}</p>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
