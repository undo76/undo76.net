export default function PageHeader({ children }) {
    return (
        <h2 className="text-3xl mt-4 font-light italic text-red-900 uppercase">
            {children}
        </h2>
    );
}
