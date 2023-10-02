import Image from "next/image";
import Profile from "../../public/profile.jpeg";

import * as Icon from "react-feather";
import Script from "next/script";

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault();
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: "smooth",
  });
};

{
  /* TODO: ganti script yang tadinya memakai hidden menjadi @framer/motion */
}

const navbar = (
  <div>
    <Script id="navbar-script">{`
      // open
      const burger = document.querySelectorAll('.navbar-burger');
      const menu = document.querySelectorAll('.navbar-menu');
    
      if (burger.length && menu.length) {
          for (var i = 0; i < burger.length; i++) {
              burger[i].addEventListener('click', function() {
                  for (var j = 0; j < menu.length; j++) {
                      menu[j].classList.toggle('hidden');
                  }
              });
          }
      }
    
      // close
      const close = document.querySelectorAll('.navbar-close');
      const backdrop = document.querySelectorAll('.navbar-backdrop');
    
      if (close.length) {
          for (var i = 0; i < close.length; i++) {
              close[i].addEventListener('click', function() {
                  for (var j = 0; j < menu.length; j++) {
                      menu[j].classList.toggle('hidden');
                  }
              });
          }
      }
    
      if (backdrop.length) {
          for (var i = 0; i < backdrop.length; i++) {
              backdrop[i].addEventListener('click', function() {
                  for (var j = 0; j < menu.length; j++) {
                      menu[j].classList.toggle('hidden');
                  }
              });
          }
      }
    `}</Script>

    <nav className="relative px-4 py-1 lg:py-6 flex justify-between items-center bg-gray-300 dark:bg-gray-800 bg-gradient-to-br ease-in-out duration-100">
      <div className="lg:hidden">
        <button className="navbar-burger flex items-center text-black dark:text-white p-3">
          <Icon.Menu size={28} />
        </button>
      </div>
      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
        <li>
          <a
            className="text-sm text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-50"
            href="#home"
            onClick={handleScroll}
          >
            <div className="flex items-center">
              <Icon.Home className="mr-2" size={16} />
              <span>Home</span>
            </div>
          </a>
        </li>
        <li className="text-slate-600 dark:text-gray-300">
          <Icon.MoreVertical size={16} />
        </li>
        <li>
          <a
            className="text-sm text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-50"
            href="#aboutme"
            onClick={handleScroll}
          >
            <div className="flex items-center">
              <Icon.User className="mr-2" size={16} />
              <span>About Me</span>
            </div>
          </a>
        </li>
        <li className="text-slate-600 dark:text-gray-300">
          <Icon.MoreVertical size={16} />
        </li>
        <li>
          <a
            className="text-sm text-slate-600 hover:text-slate-800 cursor-not-allowed dark:text-slate-300 dark:hover:text-slate-50"
            href="#contact"
          >
            <div className="flex items-center">
              <Icon.Phone className="mr-2" size={16} />
              <span>Contact</span>
            </div>
          </a>
        </li>
      </ul>
    </nav>
    <div className="navbar-menu relative z-[99] hidden">
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-4 px-6 bg-gradient-to-br from-emerald-500 to-gray-400 dark:to-gray-900 border-r overflow-y-auto">
        <div className="flex items-center mb-8">
          <button className="navbar-close absolute right-6 top-6">
            <Icon.X className="text-white" />
          </button>
        </div>
        <div>
          <ul>
            <li className="mb-1">
              <a
                className="navbar-close block p-4 text-sm font-semibold text-stone-200 hover:bg-blue-50 hover:text-blue-600 rounded navbar-close shadow transition duration-150"
                href="#home"
                onClick={handleScroll}
              >
                <div className="flex items-center">
                  <Icon.Home className="mr-2" size={16} />
                  <span>Home</span>
                </div>
              </a>
            </li>
            <li className="mb-1">
              <a
                className="navbar-close block p-4 text-sm font-semibold text-stone-200 hover:bg-blue-50 hover:text-blue-600 rounded navbar-close shadow transition duration-150"
                href="#aboutme"
                onClick={handleScroll}
              >
                <div className="flex items-center">
                  <Icon.User className="mr-2" size={16} />
                  <span>About Me</span>
                </div>
              </a>
            </li>
            <li className="mb-1">
              <a
                className="navbar-close block p-4 text-sm font-semibold text-stone-200 cursor-not-allowed hover:bg-blue-50 hover:text-blue-600 rounded navbar-close shadow transition duration-150"
                href="#contact"
                onClick={handleScroll}
              >
                <div className="flex items-center">
                  <Icon.Phone className="mr-2" size={16} />
                  <span>Contact</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-auto">
          <p className="my-4 text-xs text-center text-gray-400">
            <span>This navbar is designed by Zeeslag.</span>
          </p>
        </div>
      </nav>
    </div>
  </div>
);

export default navbar;
