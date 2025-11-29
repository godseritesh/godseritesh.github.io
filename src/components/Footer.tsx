import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const SocialIcon = ({ icon: Icon, href, label }: any) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ scale: 1.2, y: -5 }}
    whileTap={{ scale: 0.95 }}
    className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-colors"
  >
    <Icon size={20} />
  </motion.a>
);



export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              Ritesh Godse
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Graduate Trainee Engineer & AI Enthusiast building scalable systems and exploring AI possibilities.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#/" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#/projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Follow</h4>
            <div className="flex space-x-4">
              <SocialIcon icon={Github} href={personalInfo.socials.github} label="GitHub" />
              <SocialIcon icon={Linkedin} href={personalInfo.socials.linkedin} label="LinkedIn" />
              <SocialIcon icon={Mail} href={personalInfo.socials.email} label="Email" />
            </div>

            {/* Second row - additional coding profiles */}
            <div className="flex space-x-4 mt-3">
              <motion.a
                href={personalInfo.socials.gfg}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GeeksforGeeks"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors"
              >
                {/* GeeksforGeeks official-like SVG (provided) */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20" aria-hidden="true">
                  <path fill="#43a047" d="M29.035,24C29.014,23.671,29,23.339,29,23c0-6.08,2.86-10,7-10c3.411,0,6.33,2.662,7,7l2,0l0.001-9	L43,11c0,0-0.533,1.506-1,1.16c-1.899-1.066-3.723-1.132-6.024-1.132C30.176,11.028,25,16.26,25,22.92	c0,0.364,0.021,0.723,0.049,1.08h-2.099C22.979,23.643,23,23.284,23,22.92c0-6.66-5.176-11.892-10.976-11.892	c-2.301,0-4.125,0.065-6.024,1.132C5.533,12.506,5,11,5,11l-2.001,0L3,20l2,0c0.67-4.338,3.589-7,7-7c4.14,0,7,3.92,7,10	c0,0.339-0.014,0.671-0.035,1H0v2h1.009c1.083,0,1.977,0.861,1.999,1.943C3.046,29.789,3.224,32.006,4,33c1.269,1.625,3,3,8,3	c5.022,0,9.92-4.527,11-10h2c1.08,5.473,5.978,10,11,10c5,0,6.731-1.375,8-3c0.776-0.994,0.954-3.211,0.992-5.057	C45.014,26.861,45.909,26,46.991,26H48v-2H29.035z M11.477,33.73C9.872,33.73,7.322,33.724,7,32c-0.109-0.583-0.091-2.527-0.057-4.046C6.968,26.867,7.855,26,8.943,26H19C18.206,30.781,15.015,33.73,11.477,33.73z M41,32	c-0.322,1.724-2.872,1.73-4.477,1.73c-3.537,0-6.729-2.949-7.523-7.73h10.057c1.088,0,1.975,0.867,2,1.954	C41.091,29.473,41.109,31.417,41,32z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://leetcode.com/u/riteshgodse/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors flex items-center justify-center"
              >
                {/* Simple LeetCode-style SVG fallback */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect width="24" height="24" rx="4" fill="#f7931e" />
                  <text x="50%" y="55%" textAnchor="middle" fontFamily="Inter, system-ui" fontWeight="700" fontSize="9" fill="white">LC</text>
                </svg>
              </motion.a>

              <motion.a
                href="https://www.hackerearth.com/@work.riteshgodse"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HackerEarth"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors flex items-center justify-center"
              >
                {/* HackerEarth SVG excerpt */}
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" aria-hidden="true">
                  <g>
                    <path d="M447.6,0H202.8v138.5h2.3c17.9-23,47.2-34,75.9-28.4l-0.5-0.1c41.9,3.1,83.4,28.5,85.8,110v161.2c-0.2,3.3-2.8,6-6.1,6.2 h-45.1c-3.3,0-6.1-2.7-6.1-6.2V225c0-37.9-12.5-66.4-49.9-66.4h-0.8c-32.1,0-57.6,27.1-55.5,59.2v-0.2v163.5c0,3.4-2.7,6.2-6.1,6.2 H152c-3.4,0-6.2-2.7-6.2-6.2V0H66.6C49.2,0,34.8,13.9,34.2,31.3V479c0.7,18.3,15.6,32.9,33.9,33h379.6 c17.6-0.5,31.2-15.5,30.2-33.1v0.1V31.3C478.9,14.4,465.4,0,448.4,0H447.6L447.6,0z M393.4,447.6H118.5v-28.2h274.9V447.6z"/>
                  </g>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
            <p>&copy; {currentYear} Ritesh Godse. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
