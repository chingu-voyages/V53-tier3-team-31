import React, { useState, useEffect } from 'react';

function DraggableTags({ show, id, trip, userId }) {
  const [tags, setTags] = useState([]);
  const [newTagText, setNewTagText] = useState('');

  useEffect(() => {
    if (trip?.destination) {
      setTags(trip.destination);
    }
  }, [trip]);

  const handleInputChange = async (event) => {
    setNewTagText(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/trips/edit`, {
        method: 'PUT',
        body: JSON.stringify({
          tripId: id,
          ...trip,
          destination: tags,
          userId,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData.message);
      } else {
        console.log('Trip updated successfully');
      }
    } catch (error) {
      console.error('Request failed:', error);
    }
  };
  const handleAddTag = () => {
    if (newTagText.trim() !== '' && !tags.includes(newTagText.trim())) {
      setTags([...tags, newTagText.trim()]);
      setNewTagText('');
    }
  };

  const handleDragStart = (event, tag) => {
    event.dataTransfer.setData('text/plain', tag);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, droppedOnTag) => {
    event.preventDefault();
    const draggedTag = event.dataTransfer.getData('text/plain');

    if (draggedTag === droppedOnTag) return;
    const newTags = [...tags];
    const draggedIndex = newTags.indexOf(draggedTag);
    const droppedIndex = newTags.indexOf(droppedOnTag);

    if (draggedIndex > -1 && droppedIndex > -1) {
      newTags.splice(draggedIndex, 1);
      newTags.splice(droppedIndex, 0, draggedTag);
      setTags(newTags);
    }
  };

  return (
    <div>
      {show && (
        <form onSubmit={handleSubmit} className="flex items-start gap-2">
          <input
            type="text"
            value={newTagText}
            className="border-b-2 border-black outline-none"
            onChange={handleInputChange}
          />
          <button
            onClick={handleAddTag}
            className="bg-teal-400 px-6 py-2 rounded-md text-white"
          >
            Add Tag
          </button>
        </form>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {tags.map((tag) => (
          <div
            key={tag}
            draggable
            onDragStart={(event) => handleDragStart(event, tag)}
            onDragOver={(event) => handleDragOver(event)}
            onDrop={(event) => handleDrop(event, tag)}
            style={{
              padding: '5px 10px',
              margin: '5px',
              border: '1px solid gray',
              borderRadius: '5px',
              cursor: 'move',
            }}
            className="text-sm md:text-lg font-normal"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DraggableTags;
