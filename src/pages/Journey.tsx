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
      years: '2009 – 2012',
      heading: 'The First Steps Into School Life',
      paragraphs: [
        'Primary school was a burst of discovery. Days filled with school activities, laughter, friends, and harmless mischiefs.',
        'Learned swimming, picked up new hobbies, and found the early spark of leadership as the Head Boy in 4th Standard. Small steps, big hints of the determination that would follow.',
      ],
    },
    {
      id: 3,
      emoji: '🎒',
      years: '2013 – 2019',
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
        'Jun 2025 – Present: Graduate Trainee Engineer, PayU Payments — working on high-performance, real-world FinTech systems. Building scalable services, settlement pipelines, automation, and AI integrations.',
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

      {/* Journey narrative sections (user-provided structured timeline) */}
      <div className="relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">🎬 THE JOURNEY — RITESH GODSE</h2>
          </motion.div>

          <section>
            <motion.h3 initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} className="text-xl font-semibold text-gray-800 dark:text-gray-200">🌅 2003 — A Beginning</motion.h3>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              A quiet morning in 2003. A boy is born in Satara — curious, observant, and already trying to pull the world closer with tiny hands that would one day build systems used by thousands.
            </motion.p>
          </section>

          <section>
            <motion.h3 initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} className="text-xl font-semibold text-gray-800 dark:text-gray-200">🏫 2009 – 2012 — The First Steps Into School Life</motion.h3>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-3 space-y-3 text-gray-700 dark:text-gray-300">
              <p>Primary school was a burst of discovery. Days filled with school activities, laughter, friends, and harmless mischiefs. Learned swimming, picked up new hobbies, and found the early spark of leadership as the Head Boy in 4th Standard. Small steps, big hints of the determination that would follow.</p>
            </motion.div>
          </section>

          <section>
            <motion.h3 initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} className="text-xl font-semibold text-gray-800 dark:text-gray-200">🎒 2013 – 2019 — Secondary School: The First Leadership Arc</motion.h3>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-3 space-y-3 text-gray-700 dark:text-gray-300">
              <p>Secondary school became a stage for growth. From gathering performances to organizing Sun Fair, from Scout & Guide’s Khari Kamai to camping at Kaas Plateau, every experience added grit. Led with confidence as Red House Captain (2016–17), tried horse riding, and learned structure, discipline & teamwork. Closed this chapter with excellence — SSC Board: 94.40%.</p>
            </motion.div>
          </section>

          <section>
            <motion.h3 initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} className="text-xl font-semibold text-gray-800 dark:text-gray-200">📘 2019 – 2021 — Junior College: A World Paused, A Mind Unpaused</motion.h3>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-3 space-y-3 text-gray-700 dark:text-gray-300">
              <p>The world shut down, but curiosity didn’t. During lockdown, explored AI courses, learned Python, and took first steps toward the world of machine intelligence. Balanced preparation for competitive exams, tried freelancing, and finished with HSC Board: 89.67%. Then came the breakthrough: MHT-CET 96 percentile. A gateway opened.</p>
            </motion.div>
          </section>

          <section>
            <motion.h3 initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} className="text-xl font-semibold text-gray-800 dark:text-gray-200">🎖️ 2021 — The Cadet’s Test: SSB TES-46</motion.h3>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-3 text-gray-700 dark:text-gray-300">
              <p>One of the toughest selections: SSB TES-46, Bangalore. Among top 10 out of 400 cadets — a moment of discipline, resilience, and exposure to India's finest selection standards. A “conference out”, but a life lesson in character and grit.</p>
            </motion.div>
          </section>

          <section>
            <motion.h3 initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} className="text-xl font-semibold text-gray-800 dark:text-gray-200">🏫 2021 – 2025 — Engineering at VIIT: Discovery, Leadership & Innovation</motion.h3>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-4 space-y-4 text-gray-700 dark:text-gray-300">
              <p className="font-semibold">1st Year — Exploration</p>
              <p>Explored campus clubs, NSS activities, and early internships. Qualified for Google Hash Code 2022, engaging in team-based algorithmic challenges.</p>

              <p className="font-semibold">2nd Year — First Industry Breakthrough</p>
              <p>Joined HCL Technologies (Aug–Nov 2022) as an R&D Intern — worked in NLP, Computer Vision, and Data Analytics. Participated in techno-social initiatives and 7-day residential camp at Jamgaon Village. Contributed to Gandharva 2023 decorations.</p>

              <p className="font-semibold">3rd Year — Leadership & Impact</p>
              <p>Became Vice President, NSS VIIT (2023–24). Built and deployed a polling/awareness web app in 48 hours, reaching 3500+ users and increasing blood donation participation by 25%. Organized an intensive leadership camp, handled committees, resolved conflicts, and coordinated events. Participated in Smart India Hackathon (SIH). Published an IEEE research paper at NIT Rourkela on Next Word Prediction using NLP.</p>

              <p className="font-semibold">4th Year — Engineering with Purpose</p>
              <p>Final year — built OptiHeart, a retinal-based heart attack prediction system. Graduated with CGPA 8.98.</p>
            </motion.div>
          </section>

          <section>
            <motion.h3 initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} className="text-xl font-semibold text-gray-800 dark:text-gray-200">💼 2025 — Entering the Industry</motion.h3>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-3 space-y-3 text-gray-700 dark:text-gray-300">
              <p className="font-semibold">Jan – Jun 2025</p>
              <p>Software Developer (Contract) at JPMorgan Chase & Co. Contributed to cloud migration pipelines, API integrations, and scalable data architecture.</p>

              <p className="font-semibold">Jun 2025 – Present</p>
              <p>Graduate Trainee Engineer, PayU Payments — working on high-performance, real-world FinTech systems. Building scalable services, settlement pipelines, automation, and AI integrations.</p>
            </motion.div>
          </section>

          <section>
            <motion.h3 initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} className="text-xl font-semibold text-gray-800 dark:text-gray-200">🌄 Where the Journey Stands Today</motion.h3>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              From a curious boy in 2003 to a FinTech engineer building systems for thousands — this journey is a continuous evolution of learning, leadership, and impact. And it’s only the beginning.
            </motion.p>
          </section>

          {/* Ending CTA preserved */}
          <div className="pt-6 text-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-md shadow-md"
              >
                Let's Connect
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
