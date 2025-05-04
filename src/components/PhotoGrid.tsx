
import React, { useEffect, useState } from 'react';

const PhotoGrid = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    fetch('/data/photos.json')
      .then(res => res.json())
      .then(setPhotos);
  }, []);

  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold mb-4">Photo Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((src, idx) => (
          <img key={idx} src={src} alt={`photo-${idx}`} className="w-full h-auto rounded" width="300" height="300"/>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
