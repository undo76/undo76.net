import Link from 'next/link';
import useActiveRoute from '../hooks/useActiveRoute';

export default function Tabs({children}) {
    return (
        <div>
            {/* <div className="sm:hidden">
                <select
                    aria-label="Selected tab"
                    className="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5 transition ease-in-out duration-150"
                >
                    <option>My Account</option>
                    <option>Company</option>
                    <option selected>Team Members</option>
                    <option>Billing</option>
                </select>
            </div> */}
            <div className="block">
                <div className="border-b border-cool-gray-200">
                    <nav className="-mb-px flex">
                        {children}
                    </nav>
                </div>
            </div>
        </div>
    );
}

Tabs.Link = ({ href, children }) => {
    const isActive = useActiveRoute(href);
    const className = isActive
        ? 'whitespace-no-wrap mr-8 py-4 px-1 border-b-2 border-red-500 font-medium text-sm leading-5 text-red-600 focus:outline-none focus:text-red-800 focus:border-red-700'
        : 'whitespace-no-wrap mr-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300';
    return (
        <Link href={href}>
            <a
                className={className}
                aria-current={isActive ? 'page' : undefined}
            >
                {children}
            </a>
        </Link>
    );
};
