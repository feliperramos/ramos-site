'use client'
import { Fragment, useState } from "react";
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-dark">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <span>Felipe Ramos</span>
        </div>

        <div className='flex lg:hidden'>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open Mobile Menu</span>
            <MenuOutlinedIcon className='h-6 w-6' aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
}
