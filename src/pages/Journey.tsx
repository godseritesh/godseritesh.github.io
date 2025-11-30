import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Journey: React.FC = () => {
  interface Scene {
    id: number;
    emoji?: string;
    years: string;
    heading: string;
    paragraphs: string[];
  }

  const scenes: Scene[] = [
    {
      id: 1,
      emoji: '🌅',
      years: '2003',
      heading: 'A Beginning',
      paragraphs: [
        'A quiet morning in 2003. A boy is born in Satara — curious, observant, and already trying to pull the world closer with tiny hands that would one day build systems used by thousands.',
      ],
    },
    {
      id: 2,
      emoji: '🏫',
      years: '2009 - 2012',
      heading: 'The First Steps Into School Life',
      paragraphs: [
        'Primary school was a burst of discovery. Days filled with school activities, laughter, friends, and harmless mischiefs.',
        'Learned swimming, picked up new hobbies, and found the early spark of leadership as the Head Boy in 4th Standard. Small steps, big hints of the determination that would follow.',
      ],
    },
    {
      id: 3,
      emoji: '🎒',
      years: '2013 - 2019',
      heading: 'Secondary School: The First Leadership Arc',
      paragraphs: [
        'Secondary school became a stage for growth. From gathering performances to organizing Sun Fair, from Scout & Guide’s Khari Kamai to camping at Kaas Plateau, every experience added grit.',
        'Led with confidence as Red House Captain (2016–17), tried horse riding, and learned structure, discipline & teamwork. Closed this chapter with excellence — SSC Board: 94.40%.',
      ],
    },
    {
      id: 4,
      emoji: '📘',
      years: '2019 – 2021',
      heading: 'Junior College: A World Paused, A Mind Unpaused',
      paragraphs: [
        'The world shut down, but curiosity didn’t. During lockdown, explored AI courses, learned Python, and took first steps toward the world of machine intelligence.',
        'Balanced preparation for competitive exams, tried freelancing, and finished with HSC Board: 89.67%. Then came the breakthrough: MHT-CET 96 percentile. A gateway opened.',
      ],
    },
    {
      id: 5,
      emoji: '🎖️',
      years: '2021',
      heading: 'The Cadet’s Test: SSB TES-46',
      paragraphs: [
        'One of the toughest selections: SSB TES-46, Bangalore. Among top 10 out of 400 cadets — a moment of discipline, resilience, and exposure to India\'s finest selection standards.',
        'A “conference out”, but a life lesson in character and grit.',
      ],
    },
    {
      id: 6,
      emoji: '🏫',
      years: '2021 – 2025',
      heading: 'Engineering at VIIT: Discovery, Leadership & Innovation',
      paragraphs: [
        '1st Year — Exploration: Explored campus clubs, NSS activities, and early internships. Qualified for Google Hash Code 2022.',
        '2nd Year — First Industry Breakthrough: Joined HCL Technologies (Aug–Nov 2022) as an R&D Intern — worked in NLP, Computer Vision, and Data Analytics.',
        '3rd Year — Leadership & Impact: Became Vice President, NSS VIIT (2023–24). Built and deployed a polling/awareness web app in 48 hours, reaching 3500+ users.',
        '4th Year — Engineering with Purpose: Final year — built OptiHeart, a retinal-based heart attack prediction system. Graduated with CGPA 8.98.',
      ],
    },
    {
      id: 7,
      emoji: '💼',
      years: '2025 – Present',
      heading: 'Entering the Industry',
      paragraphs: [
        'Jan – Jun 2025: Software Developer (Contract) at JPMorgan Chase & Co. Contributed to cloud migration pipelines, API integrations, and scalable data architecture.',
        'Jun 2025 – Present: Software Developer, PayU Payments — working on high-performance, real-world FinTech systems. Building scalable services, settlement pipelines, automation, and AI integrations.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">

      {/* Cinematic Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-black dark:via-blue-950 dark:to-black overflow-hidden flex items-center"
      >
        {/* Cinematic background elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl"
          />
        </div>

        {/* Director's opening scene */}
        <div className="relative max-w-5xl mx-auto w-full">
          {/* Opening credits style */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-8"
          >
            <p className="text-blue-300 text-sm tracking-widest font-light uppercase">A journey of</p>
            <p className="text-blue-200 text-base tracking-wider font-light">Growth • Resilience • Innovation</p>
          </motion.div>

          {/* Main title - cinematic scale */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-4 leading-tight tracking-tight">
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block"
              >
                My
              </motion.span>
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-200 to-cyan-300"
              >
                Journey
              </motion.span>
            </h1>
          </motion.div>

          {/* Storyteller's opening monologue */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed font-light italic">
              "Every engineer's story begins with curiosity. Mine started with questions about how systems work at scale."
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-sm text-blue-200 font-semibold tracking-wider"
            >
              ↓ Scroll to explore the scenes ↓
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [4, 8, 4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-1 h-2 bg-blue-300 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Cinematic alternating timeline */}
      <div className="relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">🎬 THE JOURNEY — RITESH GODSE</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">A cinematic retelling — click or scroll each scene to reveal more.</p>
          </motion.div>

          <div className="relative">
            {/* vertical timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-300 to-transparent opacity-30" />

            <div className="space-y-20">
              {scenes.map((s, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div key={s.id} className="relative">
                    <div className="flex flex-col md:flex-row items-start md:items-center">
                      {/* Left column */}
                      <div className={isLeft ? 'w-full md:w-1/2 pr-4 flex justify-end' : 'w-full md:w-1/2 pr-4 hidden md:flex'}>
                        {isLeft && (
                          <motion.article
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.06 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl max-w-lg hover:scale-[1.02] transform-gpu transition-transform"
                            aria-labelledby={`scene-${s.id}-title`}
                          >
                            <div className="flex items-center gap-3">
                              <div className="text-2xl">{s.emoji}</div>
                              <div>
                                <p className="text-xs text-gray-500">{s.years}</p>
                                <h3 id={`scene-${s.id}-title`} className="text-lg font-bold text-gray-900 dark:text-white">{s.heading}</h3>
                              </div>
                            </div>
                            <div className="mt-3 text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                              {s.paragraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                              ))}
                            </div>
                          </motion.article>
                        )}
                      </div>

                      {/* Center marker */}
                      <div className="w-full md:w-12 flex justify-center">
                        <div className="relative flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-blue-500 ring-8 ring-white dark:ring-gray-900 shadow-md" />
                          <div className="absolute -top-6 text-xs text-gray-500 hidden md:block">{s.years}</div>
                        </div>
                      </div>

                      {/* Right column */}
                      <div className={isLeft ? 'w-full md:w-1/2 pl-4 hidden md:flex' : 'w-full md:w-1/2 pl-4 flex justify-start'}>
                        {!isLeft && (
                          <motion.article
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.06 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl max-w-lg hover:scale-[1.02] transform-gpu transition-transform"
                            aria-labelledby={`scene-${s.id}-title`}
                          >
                            <div className="flex items-center gap-3">
                              <div className="text-2xl">{s.emoji}</div>
                              <div>
                                <p className="text-xs text-gray-500">{s.years}</p>
                                <h3 id={`scene-${s.id}-title`} className="text-lg font-bold text-gray-900 dark:text-white">{s.heading}</h3>
                              </div>
                            </div>
                            <div className="mt-3 text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                              {s.paragraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                              ))}
                            </div>
                          </motion.article>
                        )}
                      </div>

                      {/* Mobile single-column card (moved to a single mobile list below for deterministic rendering) */}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile single-column list (rendered once to avoid duplication) */}
            <div className="md:hidden mt-6 space-y-4">
              {scenes.map((s) => (
                <motion.article
                  key={`mobile-${s.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg"
                  aria-labelledby={`scene-${s.id}-title-mobile`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-xl">{s.emoji}</div>
                    <div>
                      <p className="text-xs text-gray-500">{s.years}</p>
                      <h4 id={`scene-${s.id}-title-mobile`} className="text-base font-bold text-gray-900 dark:text-white">{s.heading}</h4>
                    </div>
                  </div>
                  <div className="mt-3 text-gray-700 dark:text-gray-300 text-sm space-y-2">
                    {s.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>

            {/* CTA preserved below timeline */}
            <div className="mt-16 text-center">
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.03 }} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-md shadow-md">
                  Let's Connect
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
