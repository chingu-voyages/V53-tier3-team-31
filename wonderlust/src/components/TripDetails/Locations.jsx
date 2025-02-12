import React, {useState} from 'react';

import * as Accordion from "@radix-ui/react-accordion";
import { Button } from "@radix-ui/themes";
import Timeline from "@/src/components/Timeline"


function Locations({setSidebarOpen}) {
    const [isLocation, setIsLocation] = useState(false);
    const desc = isLocation ? "Location Name " : <Button className="p-2 bg-blue-600 text-white rounded-md" onClick={() => setSidebarOpen(true)}>
        Open Sidebar
      </Button>
    return (
        <Timeline.Item>
                <Accordion.Item value="item-1" className="border rounded-lg overflow-hidden">
                  <Timeline.Title>Transportation Medium</Timeline.Title>
                  <Accordion.Content className="p-4 bg-blue-100 text-gray-800">
                    <Timeline.Date>12 Jan 2025</Timeline.Date>
                    <Timeline.Event>{desc}</Timeline.Event>
                  </Accordion.Content>
                </Accordion.Item>
            </Timeline.Item>
    );
}

export default Locations;