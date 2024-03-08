import { NavLink } from "react-router-dom";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  CursorArrowRaysIcon,
  FingerPrintIcon,
  IdentificationIcon
} from '@heroicons/react/24/outline'


const rutas = [
  { name: 'Katherine', description: '', to: 'katherine', icon: IdentificationIcon },
  { name: 'Robert', description: '', to: 'robert', icon: CursorArrowRaysIcon },
  { name: 'Allruta', description: "", to: 'todalaruta', icon: FingerPrintIcon },
]

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">RM</p>
      </NavLink>
      <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <span>Rutas</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute right-1/2 z-10 mt-5 flex w-screen max-w-max px-4">
          <div className="w-screen max-w-[16rem] flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {rutas.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div className="flex items-center justify-center ">
                    <NavLink to={item.to} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </NavLink>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
    </header>
  );
};

export default Navbar;
