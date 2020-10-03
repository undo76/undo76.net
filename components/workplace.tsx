export default function Workplace({title, location, period, children}) {
    return (
        <section className="md:flex mt-12 pt-4 border-t border-cool-gray-300">
            <div className="md:pl-0 md:w-1/3">
                <div className="text-sm text-cool-gray-500">{period}</div>
                <h3 className="mt-2 text-lg font-bold text-cool-gray-700">{title}</h3>
                <div className="mt-2 text-sm text-cool-gray-500">{location}</div>
            </div>
            <div className="mt-2 md:ml-4 md:w-2/3 prose prose-sm md:prose">{children}</div>
        </section>
    );
}
