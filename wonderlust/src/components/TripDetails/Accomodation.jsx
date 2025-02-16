import React, { useState } from 'react';

import * as Accordion from '@radix-ui/react-accordion';
import { Button } from '@radix-ui/themes';
import Timeline from '@/src/components/Timeline';

function Accomodation({ setSidebarOpen }) {
  const [isAccommodation, setIsAccommodation] = useState(false);
  const desc = isAccommodation ? (
    'Location Name '
  ) : (
    <Button
      className="p-2 bg-blue-600 text-blue rounded-md"
      onClick={() => setSidebarOpen(true)}
    >
      Search
    </Button>
  );
  const data = {
    title: 'Accommodation',
    date: 'Jan 12, 2024',
    description: desc,
  };
  return (
    <Timeline.Item>
      <Accordion.Item
        value="item-1"
        className="border rounded-lg overflow-hidden"
      >
        <Timeline.Title>Accommodation</Timeline.Title>
        <Accordion.Content className="p-4 bg-blue-100 text-gray-800">
          <Timeline.Date>12 Jan 2025</Timeline.Date>
          <Timeline.Event>{desc}</Timeline.Event>
        </Accordion.Content>
      </Accordion.Item>
    </Timeline.Item>
  );
}

export default Accomodation;
