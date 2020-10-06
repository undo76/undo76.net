import Link from 'next/link';

export default function Tabs() {
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
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex">
                        <Link href="/resume/professional-experience">
                            <a className="whitespace-no-wrap py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
                                Experience
                            </a>
                        </Link>

                        <Link href="/resume/skills">
                            <a className="whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
                                Skills
                            </a>
                        </Link>

                        
                        <a
                            href="#"
                            className="whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700"
                            aria-current="page"
                        >
                            Team Members
                        </a>
                        <a
                            href="#"
                            className="whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                        >
                            Billing
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
}
