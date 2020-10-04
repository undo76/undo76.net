export default function Workplace({ title, location, period, children }) {
    return (
        <section className="md:flex mt-10 border-t items-baseline border-cool-gray-300">
            <div className="mt-4 md:pl-0 md:w-1/3">
                <h3 className="mt-1 text-lg font-bold text-cool-gray-700">
                    {title}
                </h3>
                <div className="mt-1 md text-sm text-cool-gray-500">
                    {period}
                </div>
                <div className="mb-6 text-sm text-cool-gray-500">
                    {location}
                </div>
            </div>
            <div className="mt-4 md:ml-4 md:w-2/3 prose prose-sm md:prose">
                {children}
            </div>
        </section>
    );
}
