export default function Workplace({
    title,
    location,
    period,
    summary,
    children,
}) {
    return (
        <section className="md:flex mt-10 mb-14 items-baseline">
            <header className="mt-4 md:pl-4 md:w-1/3 border-t-2 md:border-t-0 md:border-l-4 border-cool-gray-300">
                <h3 className="mt-4 md:mt-1 text-lg font-bold text-cool-gray-700">
                    {title}
                </h3>
                <div className="mt-2 text-cool-gray-500 font-light">
                    {summary}
                </div>
                <div className="mt-2 md text-sm text-cool-gray-500">
                    {period}
                </div>
                <div className="mb-6 md:mb-1 text-sm text-cool-gray-500">
                    {location}
                </div>
            </header>
            <div className="md:ml-8 md:w-2/3 prose prose-sm md:prose">
                {children}
            </div>
        </section>
    );
}
