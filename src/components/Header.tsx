'use client'
import { useState } from "react";
import { MenuOutlined, CloseOutlined } from '@material-ui/icons';
import { getRouteName } from "@/utils/getRouteName";
import { Dialog } from "@headlessui/react";

export default function HeaderSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-sky-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span>Felipe Ramos</span>
          </a>
        </div>

        <div className='flex lg:hidden'>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open Mobile Menu</span>
            <MenuOutlined className='h-6 w-6' aria-hidden="true" />
          </button>
        </div>

        <div className='hidden lg:flex lg:gap-x-12'>
          {getRouteName.map((item, index) => (
            <a
              className="text-base font-semibold leading-6 text-white hover:text-cyan-400"
              href={item.link}
              key={index}
            >
              {item.value}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel
          className=
          'fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span>Felipe Ramos</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <CloseOutlined className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {getRouteName.map((item, index) => (
                  <a
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-cyan-400"
                    href={item.link}
                    key={index}
                  >
                    {item.value}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
