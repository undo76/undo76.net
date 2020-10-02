import cx from 'classnames';
import Button from '../components/button';
import Layout from "../components/layout";

export default function Home() {
    return (
        <Layout>
            <main className="pt-10 flex-col space-y-5">
                <Content />
                <Content />
                <Content />
                <Content />
            </main>
        </Layout>
    );
}

function Content() {
    return (
        <section className="flex flex-col md:flex-row overflow-hidden bg-red-300 shadow-lg flex-1 rounded-lg">
            <div className="overflow-hidden relative bg-red-900 p-4 md:w-1/4 h-60 md:h-auto">
                <img
                    className="absolute top-0 left-0 object-cover object-center w-full h-full"
                    src={`http://unsplash.it/800/600?${Math.random()}`}
                    alt="asdf"
                />
            </div>

            <div className="bg-white p-4 flex-1">
                <div className="px-2 inline-block bg-teal-200 text-teal-600 rounded-full text-sm">
                    NEW
                </div>
                <h2 className="mt-2 text-lg text-red-900 uppercase">
                    Main features
                </h2>
                <p>
                    For more information about Tailwind's responsive design
                    features, check out the Responsive Design documentation.
                </p>
                <Buttons>
                    <Button>Join now</Button>
                    <Button.Primary>More information</Button.Primary>
                    <Button.Danger>Delete</Button.Danger>
                </Buttons>
            </div>
        </section>
    );
}

function Buttons({ children }) {
    return <div className="mt-4 flex justify-end space-x-2">{children}</div>;
}

function Navigation() {
    return (
        <header className="flex justify-between bg-indigo-900 px-4 text-indigo-400 h-20">
            <div className="flex items-center">
                <svg
                    className="fill-current text-red-400 h-10 w-10"
                    xmlns="http://www.w4.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M17.16 6.42a8.03 8.03 0 0 0-3.58-3.58l-1.34 2.69a5.02 5.02 0 0 1 2.23 2.23l2.69-1.34zm0 7.16l-2.69-1.34a5.02 5.02 0 0 1-2.23 2.23l1.34 2.69a8.03 8.03 0 0 0 3.58-3.58zM6.42 2.84a8.03 8.03 0 0 0-3.58 3.58l2.69 1.34a5.02 5.02 0 0 1 2.23-2.23L6.42 2.84zM2.84 13.58a8.03 8.03 0 0 0 3.58 3.58l1.34-2.69a5.02 5.02 0 0 1-2.23-2.23l-2.69 1.34zM10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                <h1 className="ml-4 text-4xl font-extrabold">undo76</h1>
            </div>
            <MenuItems />
        </header>
    );
}

function MenuItems({
    items = ['Dashboard', 'Teams', 'About me'],
    selected = 'Teams',
}) {
    return (
        <ul className="hidden md:flex items-center font-bold uppercase tracking-wider space-x-6 text-indigo-400 ">
            {items.map((item) => {
                const isSelected = selected === item;
                return (
                    <li
                        className={cx(
                            'h-full inline-flex items-center border-b-8 pt-2 border-transparent',
                            {
                                'text-yellow-300': isSelected,
                                'border-yellow-300': isSelected,
                                'focus:border-indigo-400 hover:border-indigo-400': !isSelected,
                            }
                        )}
                    >
                        {item}
                    </li>
                );
            })}
        </ul>
    );
}
