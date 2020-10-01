import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';

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
            <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                    {/* Menu open: "hidden", Menu closed: "block" */}
                    <svg
                        className="block h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    {/* Menu open: "block", Menu closed: "hidden" */}
                    <svg
                        className="hidden h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </>
    );
}

export default function Layout({ children }) {
    return (
        <div className="bg-cool-gray-50">
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <h1 className="font-light text-4xl text-red-500 uppercase">
                            undo 76
                        </h1>

                        <MenuLinks />
                    </div>
                </div>
                {/*
Mobile menu, toggle classes based on menu state.

Open: "block", closed: "hidden"
    */}
                <div className="hidden md:hidden">
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
                    <div className="pt-4 pb-3 border-t border-gray-700">
                        <div className="flex items-center px-5 space-x-3">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="avatar"
                                />
                            </div>
                            <div className="space-y-1">
                                <div className="text-base font-medium leading-none text-white">
                                    Tom Cook
                                </div>
                                <div className="text-sm font-medium leading-none text-gray-400">
                                    tom@example.com
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 px-2 space-y-1">
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                            >
                                Your Profile
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                            >
                                Settings
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                            >
                                Sign out
                            </a>
                        </div>
                    </div>
                </div>
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
