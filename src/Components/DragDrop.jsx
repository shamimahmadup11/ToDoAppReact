import  { useState } from 'react';

function DragDrop() {
  const [dragOver, setDragOver] = useState(false);

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const draggableElement = document.getElementById(id);
    e.target.appendChild(draggableElement);
    setDragOver(false);
  };

  return (
    <div className="flex space-x-4">
      <div id="box1" className="w-64 h-64 bg-white rounded shadow p-4 gap-4">
        <div
          id="dragItem"
          className="drag-item w-full h-12 bg-blue-500 text-white flex items-center justify-center rounded shadow m-3"
          draggable="true"
          onDragStart={handleDragStart}
        >
          Drag me
        </div>

        <div
          id="dragItem"
          className="drag-item w-full h-12 bg-blue-500 text-white flex items-center justify-center rounded shadow m-3"
          draggable="true"
          onDragStart={handleDragStart}
        >
          Drag me
        </div>
        <div
          id="dragItem"
          className="drag-item w-full h-12 bg-blue-500 text-white flex items-center justify-center rounded shadow m-3"
          draggable="true"
          onDragStart={handleDragStart}
        >
          Drag me
        </div>
      </div>
      <div
        id="box2"
        className={`w-64 h-64 bg-white rounded shadow p-4 ${dragOver ? 'border-2 border-dashed border-blue-500' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      ></div>
    </div>
  );
}

export default DragDrop;
