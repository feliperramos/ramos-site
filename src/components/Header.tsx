'use client'
import { useState, Fragment } from "react";
import { MenuOutlined, CloseOutlined } from '@material-ui/icons';
import { getRouteName } from "@/utils/getRouteName";
import { Dialog, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next-intl/link";
import { useRouter } from 'next-intl/client';
import { useLocale, useTranslations } from 'next-intl';

import BrazilIcon from '../../public/images/brazil.png';
import USAIcon from '../../public/images/usa.png';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function HeaderSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const locale = useLocale();
  const [language, setLanguage] = useState(locale);
  const t = useTranslations('header');

  const handleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const router = useRouter();

  const handleLanguage = (lang: string) => {
    setLanguage(lang)
  };

  const commonStrings = getRouteName();

  return (
    <header className="bg-sky-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className='flex lg:hidden'>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={handleMenu}
          >
            <span className="sr-only">Open Mobile Menu</span>
            <MenuOutlined className='h-6 w-6' aria-hidden="true" />
          </button>
        </div>
        <div className="lg:flex lg:flex-1 ">
          <a href="/" className="-m-1.5 p-1">
            <p className="text-3xl font-black">{`FELIPE </> RAMOS`}</p>
          </a>
        </div>

        <div className='hidden lg:flex lg:gap-x-12'>
          {commonStrings.map((item, index) => (
            <a
              className="text-base font-semibold leading-6 text-white hover:text-cyan-400"
              href={item.link}
              key={index}
            >
              {item.value}
            </a>
          ))}
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button
                className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">Open language menu</span>
                <Image
                  className="h-6 w-8 rounded-full"
                  src={language === "pt" ? BrazilIcon : USAIcon}
                  alt="language"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className="absolute right-0 z-10 mt-2 w-60 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <Menu.Item>
                  {({ active }) => (
                    <div className="mx-2 flex flex-row items-center">
                      <Image
                        className="h-6 w-8 rounded-full"
                        src={BrazilIcon}
                        alt="language"
                      />
                      <Link
                        onClick={() => handleLanguage("pt")}
                        href="/"
                        className={classNames(active ? 'block px-4 py-2 text-sm text-cyan-500' : 'block px-4 py-2 text-sm text-gray-700')}
                        locale="pt"
                      >
                        {t('languages.pt-BR')}
                      </Link>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div className="mx-2 flex flex-row items-center">
                      <Image
                        className="h-6 w-8 rounded-full"
                        src={USAIcon}
                        alt="language"
                      />
                      <Link
                        onClick={() => handleLanguage("en")}
                        href="/"
                        className={classNames(active ? 'block px-4 py-2 text-sm text-cyan-500' : 'block px-4 py-2 text-sm text-gray-700')}
                        locale="en"
                      >
                        {t('languages.en-US')}
                      </Link>
                    </div>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={handleMenu}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel
          className=
          'fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'
        >
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="font-black">{`FELIPE </> RAMOS`}</span>
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
                {commonStrings.map((item, index) => (
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
