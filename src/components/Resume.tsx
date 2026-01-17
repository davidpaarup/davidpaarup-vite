import React from 'react';

import {useLanguage} from "../context/UseLanguage.tsx";

const Resume: React.FC = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: 'AI prompt (2025)',
      description: t('resume.ai_prompt_desc'),
      tags: ['Next.js',
        'Better Auth',
        'Semantic Kernel',
        'Microsoft Graph',
        'Terraform',
        'GitHub Actions',
        'Azure'],
      url: 'http://ai-prompt-mice.vercel.app/'
    },
    {
      title: 'Fabricante de muebles (2025)',
      description: t('resume.furniture_desc'),
      tags: ['Builder.io', 'Vercel', 'Vite', 'React', 'Tailwind'],
      url: 'https://furniture-maker.vercel.app/'
    },
    {
      title: 'Portafolio de fotografía (2025)',
      description: t('resume.photography_desc'),
      tags: ['Builder.io', 'Vercel', 'Strapi', 'React', 'Tailwind'],
      url: 'https://photography-portfolio-nine-nu.vercel.app/'
    },
    {
      title: 'Urban Sketchers (2025)',
      description: t('resume.urban_desc'),
      tags: ['Builder.io', 'Sanity', 'Vite', 'React', 'Vercel', 'Tailwind'],
      url: 'https://urban-sketchers.vercel.app/'
    },
    {
      title: t('resume.this_web'),
      description: t('resume.this_web_desc'),
      tags: ['Vite', 'React', 'Vercel', 'Tailwind', 'Sanity'],
      url: '#'
    },
    {
      title: 'Alex Lomart (2019)',
      description: t('resume.alex_desc'),
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
        <h1 className="text-5xl font-bold tracking-tight mb-4">{t('resume.title')}</h1>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-400 mb-6">
          <div className="flex items-center gap-2">
            <span>1992</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{t('resume.location')}</span>
          </div>
        </div>
        <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
          {t('resume.hero_desc')}
        </p>
      </section>

      {/* Experience */}
      <section className="mb-20">
        <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-8">{t('resume.experience')}</h2>
        <div className="space-y-12">
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-semibold">{t('resume.exp1_title')}</h3>
              <span className="text-sm text-gray-400">2025 — {t('resume.present')}</span>
            </div>
            <p className="text-gray-600 mb-4">{t('resume.exp1_company')}</p>
            <p className="text-gray-500 leading-relaxed">
              {t('resume.exp1_desc')}
            </p>
          </div>
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-semibold">{t('resume.exp2_title')}</h3>
              <span className="text-sm text-gray-400">2022 — 2025</span>
            </div>
            <p className="text-gray-600 mb-4"><a target={"_blank"} href={"https://letsreg.com"} className="underline">LetsReg</a> - Oslo</p>
            <p className="text-gray-500 leading-relaxed mb-4">
              {t('resume.exp2_desc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="text-xs font-medium text-gray-400">Angular</span>
              <span className="text-xs font-medium text-gray-400">.NET</span>
              <span className="text-xs font-medium text-gray-400">MSSQL</span>
              <span className="text-xs font-medium text-gray-400">Kubernetes</span>
              <span className="text-xs font-medium text-gray-400">Azure</span>
              <span className="text-xs font-medium text-gray-400">Stripe</span>
              <span className="text-xs font-medium text-gray-400">IIS</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-semibold">{t('resume.exp3_title')}</h3>
              <span className="text-sm text-gray-400">2019 — 2022</span>
            </div>
            <p className="text-gray-600 mb-4"><a target={"_blank"} href={"https://danskebank.com"} className="underline">Danske Bank</a> - {t('resume.exp3_company').split(' - ')[1]}</p>
            <p className="text-gray-500 leading-relaxed mb-4">
              {t('resume.exp3_desc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="text-xs font-medium text-gray-400">Angular</span>
              <span className="text-xs font-medium text-gray-400">.NET</span>
              <span className="text-xs font-medium text-gray-400">MSSQL</span>
              <span className="text-xs font-medium text-gray-400">Octopus Deploy</span>
              <span className="text-xs font-medium text-gray-400">Azure DevOps</span>
              <span className="text-xs font-medium text-gray-400">ServiceNow</span>
              <span className="text-xs font-medium text-gray-400">IIS</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-semibold">{t('resume.exp4_title')}</h3>
              <span className="text-sm text-gray-400">2018 — 2019</span>
            </div>
            <p className="text-gray-600 mb-4"><a target={"_blank"} href={"https://www.iic.uam.es"} className="underline">IIC</a> {t('resume.exp4_company').includes('part-time') ? '(part-time)' : '(tiempo parcial)'} - Madrid</p>
            <p className="text-gray-500 leading-relaxed mb-4">
              {t('resume.exp4_desc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="text-xs font-medium text-gray-400">Python</span>
              <span className="text-xs font-medium text-gray-400">Kubernetes</span>
              <span className="text-xs font-medium text-gray-400">Bash</span>
              <span className="text-xs font-medium text-gray-400">Apache Kafka</span>
              <span className="text-xs font-medium text-gray-400">OpenShift</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-semibold">{t('resume.exp5_title')}</h3>
              <span className="text-sm text-gray-400">2018</span>
            </div>
            <p className="text-gray-600 mb-4"><a target={"_blank"} href={"https://www.flexxible.com"} className="underline">Flexxible</a> {t('resume.exp5_company').includes('internship') ? '(internship)' : '(prácticas)'} - Madrid</p>
            <p className="text-gray-500 leading-relaxed mb-4">
              {t('resume.exp5_desc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="text-xs font-medium text-gray-400">Chef</span>
              <span className="text-xs font-medium text-gray-400">VMware</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-20">
        <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-8">{t('resume.education')}</h2>
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-lg font-semibold">{t('resume.edu1_title')}</h3>
              <span className="text-sm text-gray-400">2015 — 2029</span>
            </div>
            <p className="text-gray-500">
              <a target={"_blank"} href={"https://www.uam.es"} className="underline">UAM</a> - Madrid
            </p>
          </div>
        </div>
      </section>

      {/* Skills & Languages */}
      <div className="grid md:grid-cols-2 gap-20 mb-20">
        <section>
          <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-8">{t('resume.skills')}</h2>
          <div className="flex flex-wrap gap-2">
            {['Angular', '.NET', 'SQL', 'Kubernetes', 'Azure'].map(skill => (
              <span key={skill} className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm border border-gray-100">
                {skill}
              </span>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-8">{t('resume.languages')}</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">{t('resume.lang_es')}</span>
              <span className="text-gray-400 text-sm">{t('resume.lang_es_level')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{t('resume.lang_en')}</span>
              <span className="text-gray-400 text-sm">{t('resume.lang_en_level')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{t('resume.lang_da')}</span>
              <span className="text-gray-400 text-sm">{t('resume.lang_da_level')}</span>
            </div>
          </div>
        </section>
      </div>

      {/* Projects */}
      <section className="mb-20">
        <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-8">{t('resume.projects')}</h2>
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
