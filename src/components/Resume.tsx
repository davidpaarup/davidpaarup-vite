import React from 'react';

const Resume: React.FC = () => {
  const projects = [
    {
      title: 'AI prompt (2025)',
      description: 'Plataforma que permite al usuario chatear con una interfaz que tiene acceso a parte del ecosistema Microsoft del usuario.',
      tags: ['Next.js',
        'Better Auth',
        'Semantic Kernel',
        'Microsoft Graph',
        'Terraform',
        'GitHub Actions',
        'Microsoft Azure'],
      url: 'http://ai-prompt-mice.vercel.app/'
    },
    {
      title: 'Fabricante de muebles (2025)',
      description: 'Sitio web que podría ser utilizado por un fabricante de muebles.',
      tags: ['Builder.io', 'Vercel', 'Vite', 'React', 'Tailwind'],
      url: 'https://furniture-maker.vercel.app/'
    },
    {
      title: 'Portafolio de fotografía (2025)',
      description: 'Sitio web que podría ser usado por un fotógrafo.',
      tags: ['Builder.io', 'Vercel', 'Strapi', 'React', 'Tailwind'],
      url: 'https://photography-portfolio-nine-nu.vercel.app/'
    },
    {
      title: 'Urban Sketchers (2025)',
      description: 'Sitio web que podría ser usado por un grupo de Urban Sketchers.',
      tags: ['Builder.io', 'Sanity', 'Vite', 'React', 'Vercel', 'Tailwind'],
      url: 'https://urban-sketchers.vercel.app/'
    },
    {
      title: 'Esta web (2025)',
      description: 'Sitio web en el que me expongo al público.',
      tags: ['Vite', 'React', 'Vercel'],
      url: 'https://davidpaarup.com/'
    },
    {
      title: 'Alex Lomart (2019)',
      description: 'Portafolio de un fotógrafo profesional.',
      tags: ['Wordpress', 'Google Cloud'],
      url: 'https://alexlomart.com/'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="mb-8">
          <img 
            src="https://omjnwfhxgcqx4oig.public.blob.vercel-storage.com/perfil.jpeg"
            alt="David Paarup" 
            className="w-48 h-48 rounded-full object-cover transition-all duration-500 border border-gray-100 shadow-sm"
          />
        </div>
        <h1 className="text-5xl font-bold tracking-tight mb-4">Desarrollador web full stack freelance</h1>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-400 mb-6">
          <div className="flex items-center gap-2">
            <span>1992</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Valencia, España</span>
          </div>
        </div>
        <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
          Atención al detalle y entrego calidad. Siempre en proceso de aprendizaje.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-20">
        <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-8">Experiencia</h2>
        <div className="space-y-12">
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-semibold">Desarrollador full stack</h3>
              <span className="text-sm text-gray-400">2025 — Presente</span>
            </div>
            <p className="text-gray-600 mb-4">Autónomo (Valencia, España)</p>
            <p className="text-gray-500 leading-relaxed">
              Proyectos en modalidad freelance.
            </p>
          </div>
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-semibold">Desarrollador full stack</h3>
              <span className="text-sm text-gray-400">2022 — 2025</span>
            </div>
            <p className="text-gray-600 mb-4"><a target={"_blank"} href={"https://letsreg.com"} className="underline">LetsReg</a> (Oslo, Noruega)</p>
            <p className="text-gray-500 leading-relaxed">
              Diseño y desarrollo de la aplicación web y servicios usando Angular, .NET, MSSQL, Kubernetes y Azure.
            </p>
          </div>
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-semibold">Ingeniero de software</h3>
              <span className="text-sm text-gray-400">2019 — 2022</span>
            </div>
            <p className="text-gray-600 mb-4"><a target={"_blank"} href={"https://danskebank.com"} className="underline">Danske Bank</a> (Copenhague, Dinamarca)</p>
            <p className="text-gray-500 leading-relaxed">
              Diseño y desarrollo de una aplicación web y servicios relacionados con la sostenibilidad usando Angular,
              .NET y MSSQL.
            </p>
          </div>
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-semibold">Ingeniero de software</h3>
              <span className="text-sm text-gray-400">2018 — 2019</span>
            </div>
            <p className="text-gray-600 mb-4"><a target={"_blank"} href={"https://www.iic.uam.es"} className="underline">IIC</a> (tiempo parcial) (Madrid, España)</p>
            <p className="text-gray-500 leading-relaxed">
              Creación de módulos a partir de scripts de Bash extensos utilizando Python, convirtiéndolos en
              microservicios orquestados por Kubernetes.
            </p>
          </div>
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-semibold">Desarrollador de software</h3>
              <span className="text-sm text-gray-400">2018</span>
            </div>
            <p className="text-gray-600 mb-4"><a target={"_blank"} href={"https://www.flexxible.com"} className="underline">Flexxible</a> (prácticas) (Madrid, España)</p>
            <p className="text-gray-500 leading-relaxed">
              Automatización de la configuración y despliegue de máquinas virtuales usando Chef y VMware.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-20">
        <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-8">Educación</h2>
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-lg font-semibold">Grado en Ingeniería Informática</h3>
              <span className="text-sm text-gray-400">2015 — 2029</span>
            </div>
            <p className="text-gray-500">
              <a target={"_blank"} href={"https://www.uam.es"} className="underline">UAM</a> (Madrid, España)
            </p>
          </div>
        </div>
      </section>

      {/* Skills & Languages */}
      <div className="grid md:grid-cols-2 gap-20 mb-20">
        <section>
          <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-8">Habilidades</h2>
          <div className="flex flex-wrap gap-2">
            {['Angular', '.NET', 'SQL', 'Kubernetes', 'Azure'].map(skill => (
              <span key={skill} className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm border border-gray-100">
                {skill}
              </span>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-8">Lenguas</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Español</span>
              <span className="text-gray-400 text-sm">Nativo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Inglés</span>
              <span className="text-gray-400 text-sm">Avanzado</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Danés</span>
              <span className="text-gray-400 text-sm">Avanzado</span>
            </div>
          </div>
        </section>
      </div>

      {/* Projects */}
      <section className="mb-20">
        <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-8">Proyectos Destacados</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-gray-100 p-8 rounded-2xl hover:bg-gray-50 transition-colors block cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium text-gray-400">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;
