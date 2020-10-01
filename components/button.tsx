import cx from 'classnames';

export default function Button({ className = 'bg-gray-300 text-gray-600', children }) {
    return (
        <button
            className={cx(
                'rounded border-green-500 px-4 py-2 uppercase text-sm font-semibold shadow',
                className
            )}
        >
            {children}
        </button>
    );
}

Button.Primary = ({ children }) => (
    <Button className="bg-blue-800 text-blue-300">{children}</Button>
);

Button.Danger = ({ children }) => (
    <Button className="bg-red-800 text-red-300">{children}</Button>
);
