import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';
import { useState } from 'react';

function MenuLink({ href, children }) {
    const { route } = useRouter();

    const classNames = cx(
        'px-3 py-2 rounded-md text-sm font-medium ',
        route === href
            ? 'text-white bg-gray-900 '
            : 'text-gray-300 hover:text-white hover:bg-gray-700',
        'focus:outline-none focus:text-white focus:bg-gray-700'
    );

    return (
        <Link href={href}>
            <a className={classNames}>{children}</a>
        </Link>
    );
}

function Hamburger({ open, setOpen }) {
    return (
        <div className="-mr-2 flex md:hidden">
            <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
                <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    {open ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>
        </div>
    );
}

function MenuLinks() {
    return (
        <>
            <div className="flex items-center">
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                        <MenuLink href="/">Home</MenuLink>
                        <MenuLink href="/skills">About me</MenuLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function Layout({ children }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="bg-cool-gray-50 min-h-screen">
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <h1 className="font-light text-4xl text-white uppercase">
                            undo<b className="text-red-500">76</b>
                        </h1>
                        <MenuLinks />
                        <Hamburger open={open} setOpen={setOpen}/>
                    </div>
                </div>

                {open && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                            >
                                Dashboard
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                            >
                                Team
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                            >
                                Projects
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                            >
                                Calendar
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                            >
                                Reports
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            {/* <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold leading-tight text-gray-900">
                        Dashboard
                    </h1>
                </div>
            </header> */}
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 sm:px-0">{children}</div>
                </div>
            </main>
        </div>
    );
}
