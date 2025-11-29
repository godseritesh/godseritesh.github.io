import React, { Suspense, useState } from 'react';
import { PageTransition } from '../components/Animations';
import { motion } from 'framer-motion';

// List of Google Drive share links provided by user
const DRIVE_LINKS: string[] = [
  'https://drive.google.com/file/d/1-kxWfRQAhnd0jmMYebQvkGSDGOHqyT7t/view?usp=sharing',
  'https://drive.google.com/file/d/1-loHdJTF6Czj2hXePQ4a9gbqFAONGqwH/view?usp=sharing',
  'https://drive.google.com/file/d/10Z0h6vU2etPKOytLF4DsQTnKinX3MJQh/view?usp=sharing',
  'https://drive.google.com/file/d/12WSwkK_-y5pQT9mgo1eJARcUzoCy6GbQ/view?usp=sharing',
  'https://drive.google.com/file/d/12zU56wKOtVqqu3Xwicc4kcXiMlSIxQWJ/view?usp=sharing',
  'https://drive.google.com/file/d/13lAp1WLOW14bfOksZ2yXUBHwtnv4yzis/view?usp=sharing',
  'https://drive.google.com/file/d/151hyai2EBbqBrj57Dh3bjJo-iA-QscNP/view?usp=sharing',
  'https://drive.google.com/file/d/17K59VuMGUA2Bfsy-TsSc3AHKDMm4YxJ8/view?usp=sharing',
  'https://drive.google.com/file/d/1BaFmOk8xVnIWUsk1m3vIQ-yrBOgDOOk7/view?usp=sharing',
  'https://drive.google.com/file/d/1BoUlkWIpCqx2ZfMNI4RSaa6a7L7lO7OI/view?usp=sharing',
  'https://drive.google.com/file/d/1CE95UCGU-h-nkQKAcE0BrreykNjqFXZc/view?usp=sharing',
  'https://drive.google.com/file/d/1CHA9l6pUOaER_oIK9UP2hP2X1HTh1qT1/view?usp=sharing',
  'https://drive.google.com/file/d/1Cdo-K8qOrq5dt2IAvaszuhnL9UocNjU0/view?usp=sharing',
  'https://drive.google.com/file/d/1E0bi1u4JGHTBvLVL9Gpunjh-WLw8JUjH/view?usp=sharing',
  'https://drive.google.com/file/d/1EA-ZNmNrR-tYX9Pci0e6jbeM_n7BRYjq/view?usp=sharing',
  'https://drive.google.com/file/d/1EKXE8i0WMtQg9qkuS51K-T9nn1s6fshK/view?usp=sharing',
  'https://drive.google.com/file/d/1EiLC7cUXpm2eO1ZWpRZ2PQ780jUy-xh4/view?usp=sharing',
  'https://drive.google.com/file/d/1FFmzIFCGTLsc2_7pP9aadbJZR8RWc9xp/view?usp=sharing',
  'https://drive.google.com/file/d/1Fx3LXKmj6XEDfy8JhSElA6RI7C5XCo9G/view?usp=sharing',
  'https://drive.google.com/file/d/1GuBgVjrlCuF8V0PJSAza_RO5mH_janb3/view?usp=sharing',
  'https://drive.google.com/file/d/1HaquUj14kD8pzCk3RPomtSru21tYj68B/view?usp=sharing',
  'https://drive.google.com/file/d/1Jlwyz9JuRLmvnozawFoZ8cC92lLI7kkQ/view?usp=sharing',
  'https://drive.google.com/file/d/1NB3uyQnjgs5HFxoTYHc4Hil0h4KAxdcK/view?usp=sharing',
  'https://drive.google.com/file/d/1NCLedEF4sTMnK-obikIjF8HqKi68Dvba/view?usp=sharing',
  'https://drive.google.com/file/d/1O-HVMnwcQcYpDm0SCwtkRNKe-QDcKXSy/view?usp=sharing',
  'https://drive.google.com/file/d/1QOnvelgLRbFlPRf3YC8I0YLY0UIlY25f/view?usp=sharing',
  'https://drive.google.com/file/d/1TZmEJGuFzILJGAsoo9v60VoqwPd7W_22/view?usp=sharing',
  'https://drive.google.com/file/d/1WBUvNQtSN0HTQdPK7RwpENkmNYA2OAGt/view?usp=sharing',
  'https://drive.google.com/file/d/1_BqGr18eo4OyTcwfbrbtItY92DQ7aTq2/view?usp=sharing',
  'https://drive.google.com/file/d/1c7Pd5u14kjn9yjCyh7eNnBoKVbsAnQl0/view?usp=sharing',
  'https://drive.google.com/file/d/1f-YjOZ_x5WhYiydKi1S6EHeAI2OjdAOt/view?usp=sharing',
  'https://drive.google.com/file/d/1fGIg2L1Uj1kam133fcLYET0kEQBmkMJV/view?usp=sharing',
  'https://drive.google.com/file/d/1g146756YpeC5LttRu1v0oUTXKtcOFW14/view?usp=sharing',
  'https://drive.google.com/file/d/1hfAHJ_kMW8_W8xJjiS7AZdYxPSoJfkcR/view?usp=sharing',
  'https://drive.google.com/file/d/1i5bErMk1MIWjPwnkWS_fsKeXeZWdhO0J/view?usp=sharing',
  'https://drive.google.com/file/d/1in-F90X_TEy8UF5eWyZzpj81eRgNPSZO/view?usp=sharing',
  'https://drive.google.com/file/d/1jkV-ZPSm-99osk3y73v01axwJioQECtz/view?usp=sharing',
  'https://drive.google.com/file/d/1nf-Dsbj77wf7iSr7f3jwmSlmC53l7Ix_/view?usp=sharing',
  'https://drive.google.com/file/d/1rBksIyCaamFDwVXKd1CtqiNZBmNq2g9R/view?usp=sharing',
  'https://drive.google.com/file/d/1sLEBZR7ajfhnvCQn2C52my6hz-Bs937J/view?usp=sharing',
  'https://drive.google.com/file/d/1t5QEvYs8Uo3AKwhlAMYPUJNURznvuINX/view?usp=sharing',
  'https://drive.google.com/file/d/1tviujIPdYkeVNCu30HvCRePSkWVckMlV/view?usp=sharing',
  'https://drive.google.com/file/d/1tze9i9cpj8UUVRoz0UPWi3E-EMP3Evmf/view?usp=sharing',
  'https://drive.google.com/file/d/1uEbkk6cd_0dO5vrM-CIVFqu6Zmp280Zz/view?usp=sharing',
  'https://drive.google.com/file/d/1xfY3WvjW1fuTCXoe6g0GNNnOfLKgxXaT/view?usp=sharing',
  'https://drive.google.com/file/d/1xyNs6Fs6cdtsEvmDO1djgYSAZqXdkwR4/view?usp=sharing',
  'https://drive.google.com/file/d/1y-BL42C3-EVJLcsL5Iuv9oYWhhqshvI7/view?usp=sharing',
];

function extractDriveId(link: string) {
  const m = link.match(/\/d\/(.*?)\//);
  return m ? m[1] : null;
}

const categorize = (index: number) => {
  // Low-profile categorization strategy: distribute across a few buckets for clarity.
  if (index < 8) return 'Professional & Cloud';
  if (index < 18) return 'Platform & Tools';
  if (index < 30) return 'Workshops & Bootcamps';
  return 'Other Certificates';
};

const ProjectModal = React.lazy(() => import('../components/ProjectModal').then((m) => ({ default: m.ProjectModal })));

const Certifications: React.FC = () => {
  const items = DRIVE_LINKS.map((link, idx) => {
    const id = extractDriveId(link) || '';
    const preview = id ? `https://drive.google.com/file/d/${id}/preview` : link;
    return {
      id: id || String(idx),
      preview,
      link,
      title: `Certificate ${idx + 1}`,
      category: categorize(idx),
    };
  });

  const byCategory = items.reduce<Record<string, typeof items>>((acc, it) => {
    (acc[it.category] = acc[it.category] || []).push(it);
    return acc;
  }, {} as Record<string, typeof items>);

  const [selected, setSelected] = useState<{ title: string; preview: string } | null>(null);

  return (
    <PageTransition>
      <div className="min-h-screen py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white intense-heading">Certifications</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Click any certificate to preview it. Previews load on demand to keep the page fast.</p>
          </motion.div>

          {Object.keys(byCategory).map((cat) => (
            <section key={cat} className="mb-12">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{cat}</h2>
              <div className="space-y-3">
                {byCategory[cat].map((it) => (
                  <div key={it.id} className="flex items-center justify-between bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-4">
                      {it.id ? (
                        <img src={`https://drive.google.com/thumbnail?id=${it.id}`} alt={it.title} className="w-16 h-12 object-cover rounded-md bg-gray-100" />
                      ) : (
                        <div className="w-16 h-12 bg-gray-100 rounded-md" />
                      )}
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white">{it.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Hosted on Google Drive</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <a href={it.link} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 dark:text-gray-300 hover:underline">Open</a>
                      <button
                        onClick={() => setSelected({ title: it.title, preview: it.preview })}
                        className="px-3 py-2 bg-blue-600 text-white rounded-md text-sm"
                      >
                        Preview
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Lazy modal for preview */}
          <Suspense>
            {selected && (
              <ProjectModal
                isOpen={true}
                onClose={() => setSelected(null)}
                projectName={selected.title}
                projectUrl={selected.preview}
                fallbackUrl={selected.preview}
              />
            )}
          </Suspense>
        </div>
      </div>
    </PageTransition>
  );
};

export default Certifications;
