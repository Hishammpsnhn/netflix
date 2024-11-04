import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6 md:px-20">
      <span className="block text-center md:text-left">
        Questions? Call <a className="underline cursor-pointer">000-800-919-1694</a>
      </span>

      <div className="footer mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div className="footer-item flex flex-col space-y-2">
          <a className="hover:underline">FAQ1</a>
          <a className="hover:underline">Investor Relations</a>
          <a className="hover:underline">Privacy</a>
          <a className="hover:underline">Speed Test</a>
        </div>
        <div className="footer-item flex flex-col space-y-2">
          <a className="hover:underline">Help Centre</a>
          <a className="hover:underline">Jobs</a>
          <a className="hover:underline">Cookie Preferences</a>
          <a className="hover:underline">Legal Notices</a>
        </div>
        <div className="footer-item flex flex-col space-y-2">
          <a className="hover:underline">Account</a>
          <a className="hover:underline">Ways to Watch</a>
          <a className="hover:underline">Corporate Information</a>
          <a className="hover:underline">Only on Netflix</a>
        </div>
        <div className="footer-item flex flex-col space-y-2">
          <a className="hover:underline">Media Centre</a>
          <a className="hover:underline">Terms of Use</a>
          <a className="hover:underline">Contact Us</a>
        </div>
      </div>

      <div className="mt-8 flex justify-center md:justify-start">
        <button className="btn_eng flex items-center text-gray-400">
          <svg className="lang_icon mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" width="16" height="16" viewBox="0 0 16 16" role="img" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path>
          </svg>
          <select className="bg-transparent border-none outline-none text-gray-400">
            <option className="text-black">English</option>
            <option className="text-black">हिन्दी</option>
          </select>
        </button>
      </div>

      <div className="mt-8 text-center text-gray-400">
        Netflix India
      </div>
    </footer>
  );
};

export default Footer;
