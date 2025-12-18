import React, { useState } from 'react';
import { HeaderItem } from '../../../../types/menu'; // Adjust path as needed

const MobileHeaderLink = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  // Simulate pathname (replace with React Router useLocation if using router)
  const path = typeof window !== 'undefined' ? window.location.pathname : '';

  const handleToggle = (e) => {
    e.preventDefault();
    if (item.submenu) {
      setSubmenuOpen(!submenuOpen);
    } else {
      // Navigate to href if no submenu
      window.location.href = item.href;
    }
  };

  const isActive =
    path === item.href ||
    (path.startsWith('/blog') && item.href === '/blog') ||
    (path.startsWith('/portfolio') && item.href === '/portfolio');

  const handleSubmenuClick = (subItemHref) => {
    window.location.href = subItemHref;
  };

  return (
    <div className="relative block w-full">
      <button
        onClick={handleToggle}
        className={`flex items-center justify-between w-full py-2 px-3 text-black rounded-md dark:text-grey dark:text-opacity-70 focus:outline-none ${
          isActive ? 'bg-primary text-white dark:text-white' : ''
        } hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className={`transition-transform ${submenuOpen ? 'rotate-180' : ''}`}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </button>
      
      {submenuOpen && item.submenu && (
        <div className="bg-white dark:bg-darklight p-2 w-full border-t border-gray-200 dark:border-gray-700 mt-1 rounded-b-md shadow-sm">
          {item.submenu.map((subItem, index) => (
            <button
              key={index}
              onClick={() => handleSubmenuClick(subItem.href)}
              className={`block w-full py-2 px-3 text-left text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white rounded-md text-sm transition-colors ${
                path === subItem.href ? 'bg-primary text-white' : ''
              }`}
            >
              {subItem.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
