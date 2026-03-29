import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      className="fixed top-6 right-6 z-[1001] bg-transparent border-none cursor-pointer p-0 transition-all duration-normal focus-visible:outline-2 focus-visible:outline-accent-color focus-visible:outline-offset-4 focus-visible:rounded-full"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <div className="w-16 h-8 bg-card-bg border-2 border-border-color rounded-full relative transition-all duration-normal backdrop-blur-sm shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:border-accent-color hover:shadow-[0_4px_20px_rgba(0,212,255,0.2)] before:content-[''] before:absolute before:-top-0.5 before:-left-0.5 before:-right-0.5 before:-bottom-0.5 before:bg-gradient-accent before:rounded-full before:opacity-0 before:transition-opacity before:duration-normal before:-z-10 hover:before:opacity-10">
        <div
          className={`w-6 h-6 rounded-full absolute top-0.5 left-0.5 transition-all duration-normal flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.2)] ${isDark ? 'bg-gradient-to-br from-indigo-500 to-indigo-600 translate-x-7' : 'bg-gradient-to-br from-amber-500 to-amber-600 translate-x-0'}`}
        >
          <div className="w-3.5 h-3.5 flex items-center justify-center">
            {isDark ? (
              <svg
                className="w-full h-full text-white stroke-[2.5] transition-all duration-fast hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg
                className="w-full h-full text-white stroke-[2.5] transition-all duration-fast hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
