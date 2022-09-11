/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ArrowRightOnRectangleIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import IconLogo from '../resources/icon.svg'
import Logo  from '../resources/images/main-logo.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [home, setHome] = useState(true);
    const [about, setAbout] = useState(false);
    const [contact, setContact] = useState(false);
    const [why, setWhy] = useState(false);


    const setCurrent = (id) => {
        switch(id) {
            case 0:
                setHome(false)
                setAbout(true)
                setContact(false)
                setWhy(false)
                break;
            case 1:
                setHome(false)
                setAbout(false)
                setContact(true)
                setWhy(false)
                break;
            case 2:
                setHome(false)
                setAbout(false)
                setContact(false)
                setWhy(true)
                break;
            default:
                setHome(true)
                setAbout(false)
                setContact(false)
                setWhy(false)
        }
    };
    
    useEffect(() => {
        setHome(JSON.parse(window.sessionStorage.getItem("home")));
        setAbout(JSON.parse(window.sessionStorage.getItem("about")));
        setContact(JSON.parse(window.sessionStorage.getItem("contact")));
        setWhy(JSON.parse(window.sessionStorage.getItem("why")));
    }, []);

    useEffect(() => {
        window.sessionStorage.setItem("home", home);
        window.sessionStorage.setItem("about", about);
        window.sessionStorage.setItem("contact", contact);
        window.sessionStorage.setItem("why", why);
      }, [home, about, contact, why]);
    


  return (
    <Disclosure as="nav" className="bg-zinc-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={IconLogo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={Logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                    <Link to="/" 
                    className={classNames( home ? 'bg-zinc-900 text-white' : 'text-zinc-900 hover:bg-zinc-900 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium')}
                    onClick={() => setCurrent()}
                    >Home</Link>
                    <Link to="/about-us" className={classNames( about ? 'bg-zinc-900 text-white' : 'text-zinc-900 hover:bg-zinc-900 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium')} onClick={() => setCurrent(0)}>About Us</Link>
                    <Link to="/contact-us" className={classNames( contact ? 'bg-zinc-900 text-white' : 'text-zinc-900 hover:bg-zinc-900 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium')} onClick={() => setCurrent(1)}>Contact Us</Link>
                    <Link to="/why-strata-intel" className={classNames( why ? 'bg-zinc-900 text-white' : 'text-zinc-900 hover:bg-zinc-900 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium')} onClick={() => setCurrent(2)}>Why Strata</Link>

                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-md border border-transparent bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-50"
                  >
                    <ArrowRightOnRectangleIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                    <span>Login</span>
                  </button>
                </div>
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">

            <Link to="/" 
                    className={classNames( home ? 'bg-zinc-900 text-white' : 'text-gray-300 hover:bg-zinc-900 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium')}
                    onClick={() => setCurrent()}
                    >Home</Link>
                    <Link to="/about-us" className={classNames( about ? 'bg-zinc-900 text-white' : 'text-gray-300 hover:bg-zinc-900 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium')} onClick={() => setCurrent(0)}>About Us</Link>
                    <Link to="/contact-us" className={classNames( contact ? 'bg-zinc-900 text-white' : 'text-gray-300 hover:bg-zinc-900 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium')} onClick={() => setCurrent(1)}>Contact Us</Link>
                    <Link to="/why-strata-intel" className={classNames( why ? 'bg-zinc-900 text-white' : 'text-gray-300 hover:bg-zinc-900 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium')} onClick={() => setCurrent(2)}>Why Strata</Link>
          

            </div>
            
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
