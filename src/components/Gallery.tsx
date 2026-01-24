import React, { useState, useEffect } from 'react';

import {useLanguage} from "../context/UseLanguage.tsx";

interface Drawing {
  _id: string;
  title: string;
  imageUrl: string;
  description: string;
}

const Gallery: React.FC = () => {
  const { t, showGallery } = useLanguage();
  const [drawings, setDrawings] = useState<Drawing[]>([]);
  const [selectedDrawing, setSelectedDrawing] = useState<Drawing | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDrawings = async () => {
      try {
        const query = `*[_type == "drawing"] | order(_createdAt desc) {
            _id,
            title,
            description,
            "imageUrl": image.asset->url
        }`;

        const encodedQuery = encodeURIComponent(query);
        const url = `https://ghrdvna9.apicdn.sanity.io/v2026-01-14/data/query/production?query=${encodedQuery}`;
        
        const response = await fetch(url);
        const data = await response.json();
        setDrawings(data.result || []);
      } catch (error) {
        console.error("Error fetching drawings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDrawings();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedDrawing(null);
      }
    };

    if (selectedDrawing) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedDrawing]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-6 pt-24 md:pt-32 pb-20 flex justify-center items-center min-h-[50vh]">
        <p className="text-gray-500">{t('gallery.loading')}</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 pt-24 md:pt-32 pb-20">
      {showGallery && (
        <section className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">{t('gallery.title')}</h1>
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {drawings.map((drawing) => (
          <div 
            key={drawing._id} 
            className="group cursor-pointer"
            onClick={() => setSelectedDrawing(drawing)}
          >
            <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg mb-4">
              <img 
                src={drawing.imageUrl} 
                alt={drawing.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-medium">{drawing.title}</h3>
            <p className="text-sm text-gray-400">{drawing.description}</p>
          </div>
        ))}
      </div>

      {/* Modal / Popup */}
      {selectedDrawing && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedDrawing(null)}
        >
          <div className="flex flex-col items-center max-h-full">
            <div 
              className="relative flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedDrawing.imageUrl} 
                alt={selectedDrawing.title}
                className="max-w-full max-h-[80vh] object-contain shadow-2xl rounded-sm"
              />
            </div>
            
            <div className="mt-6 text-center text-white" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-2xl font-semibold mb-1">{selectedDrawing.title}</h3>
              <p className="text-gray-400">{selectedDrawing.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
