import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';
import { useReducer } from 'react';

function MenuLink({ href, block = false, children }) {
    const { route } = useRouter();

    const classNames = cx(
        'px-3 py-2 rounded-md font-medium ',
        block ? 'block text-base' : 'inline text-sm',
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

function Hamburger({ open, onToggle }) {
    return (
        <div className="-mr-2 flex md:hidden">
            <button
                onClick={onToggle}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                aria-label="main menu"
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

function MenuLinks({ links, block = false }) {
    return links.map(({ href, label }) => (
        <MenuLink href={href} block={block}>
            {label}
        </MenuLink>
    ));
}

function MainNav({ links }) {
    const [open, toggle] = useReducer((state) => !state, false);

    return (
        <div className="bg-cool-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <header className="flex items-baseline">
                        {/* <div className="text-yellow-200 fill-current self-center h-8 w-8 mr-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div> */}
                        <h1 className="font-extrabold text-3xl md:text-4xl text-cool-gray-50 uppercase italic">
                            undo
                            <b className="text-red-500 font-extrabold">76</b>
                        </h1>

                        <h2 className="text-cool-gray-50 ml-1 italic">
                            <i className="opacity-50">by</i>{' '}
                            <span>Manolo Santos</span>
                        </h2>
                    </header>

                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <MenuLinks links={links} />
                            </div>
                        </div>
                    </div>

                    <Hamburger open={open} onToggle={toggle} />
                </div>
            </div>

            {open && (
                <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <MenuLinks links={links} block />
                </nav>
            )}
        </div>
    );
}

export default function Layout({ children }) {
    const links = [
        {
            href: '/',
            label: 'Home',
        },
        {
            href: '/professional-experience',
            label: 'Experience',
        },
        {
            href: '/skills',
            label: 'Skills',
        },
    ];

    return (
        <div className="bg-cool-gray-50 min-h-screen">
            <MainNav links={links} />

            {/* <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold leading-tight text-gray-900">
                        Dashboard
                    </h1>
                </div>
            </header> */}
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 sm:px-0">{children}</div>
            </main>
        </div>
    );
}
