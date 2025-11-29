import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Loader } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
  projectUrl: string;
  fallbackUrl?: string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  projectName,
  projectUrl,
  fallbackUrl,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const timerRef = useRef<number | null>(null);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setFailed(false);
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleClose = () => {
    setIsLoading(true);
    setFailed(false);
    onClose();
  };

  // If iframe doesn't load within timeout, mark it as failed so we show fallback
  useEffect(() => {
    if (!isOpen) return;
    setIsLoading(true);
    setFailed(false);
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => {
      if (isLoading) setFailed(true);
    }, 4000);

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="w-full max-w-4xl h-[80vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <h2
                  id="modal-title"
                  className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white truncate"
                >
                  {projectName}
                </h2>
                <button
                  onClick={handleClose}
                  aria-label="Close modal"
                  className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X size={24} className="text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                {isLoading && !failed && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                    <Loader size={48} className="text-blue-500 animate-spin" />
                  </div>
                )}

                {!failed ? (
                  <iframe
                    src={projectUrl}
                    title={projectName}
                    className="w-full h-full border-0"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    onLoad={handleIframeLoad}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-gray-700 dark:text-gray-300 mb-4">Preview cannot be embedded (blocked by site). You can open the project in a new tab.</p>
                      <a
                        href={fallbackUrl || projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
                      >
                        Open in New Tab
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-4 sm:px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex justify-between items-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Preview of {projectName}
                </p>
                {fallbackUrl && (
                  <a
                    href={fallbackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Open in New Tab
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
