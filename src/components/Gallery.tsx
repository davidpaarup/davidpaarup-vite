import React from 'react';

const Gallery: React.FC = () => {
  // Placeholder images using Unsplash for the drawings
  const drawings = [
    { id: 1, title: 'Iglesia de madera de Gol',
        url: 'https://cdn.sanity.io/images/ghrdvna9/production/056764f1c71399d233bca1a3630b799adfeb5e8e-1280x1145.jpg',
        description: 'Lápiz, acuarela y rotulador calibrado' },

    { id: 2, title: 'Ópera de Oslo',
        url: 'https://cdn.sanity.io/images/ghrdvna9/production/98dbc2867b5e4fbce018aff1ecdf1742c116258a-1280x945.jpg',
        description: 'Lápiz, acuarela y rotulador calibrado' },

    { id: 3, title: 'Mujer pensativa',
        url: 'https://cdn.sanity.io/images/ghrdvna9/production/0c04951488d974251dc01f513ddf04dcb0cbac8a-960x1280.jpg',
        description: 'Lápiz, acuarela y rotulador calibrado' },

    { id: 4, title: 'Dragón',
        url: 'https://cdn.sanity.io/images/ghrdvna9/production/69d950c4c6c3e2b7bea8925227ebefd240b62774-960x1280.jpg',
        description: 'Lápiz, acuarela y rotulador calibrado' },

    { id: 5, title: 'Puerto de Valencia',
        url: 'https://cdn.sanity.io/images/ghrdvna9/production/9e76cf0e148fba37df2583ff3ea58af64f74a122-1280x893.jpg',
        description: 'Rotulador calibrado y acuarela' },

    { id: 6, title: 'Calavera',
        url: 'https://cdn.sanity.io/images/ghrdvna9/production/d3aa4a049c3afada09b0c505259591618b88a579-960x1280.jpg',
        description: 'Lápiz, acuarela y rotulador calibrado' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
      <section className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Galería de Dibujos</h1>
        <p className="text-gray-500 max-w-xl">
          Una selección de mis trabajos artísticos. La mayoría son estudios de forma, luz y anatomía realizados de forma tradicional y digital.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {drawings.map((drawing) => (
          <div key={drawing.id} className="group cursor-pointer">
            <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg mb-4">
              <img 
                src={drawing.url} 
                alt={drawing.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-medium">{drawing.title}</h3>
            <p className="text-sm text-gray-400">{drawing.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
