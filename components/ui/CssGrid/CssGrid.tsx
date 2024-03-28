import { twMerge } from "tailwind-merge";

const CssGrid = () => {
    const data = [{title: "Aircon", value: "Fancy animation using electron"}, {title: "Mursvet", value: "You already see it :)"},{title: "SvetUI", value: "React Components Library"}, {title: "Car Design", value: "Car constructor made with Next.js"},  {title: "Revenue", value: "10.000$"}, {title: "Name", value: "Murzin Sviatoslav"}]

    const boxStyle = 'bg-neutral-700 border-2 border-neutral-500 rounded-xl p-2 flex flex-col items-center justify-center';

    return (
    <div className="grid md:grid-cols-3 auto-rows-[300px] gap-2">
        {data.map((item, i) => (
            <div key={i} className={twMerge(boxStyle, `${i === 3 || i === 5 ? 'md:col-span-2' : ''} ${i === 2 ? 'md:row-span-2' : ''} hover:bg-neutral-600 hover:cursor-pointer transition-[background-color]`)}>
                <h2 className="text-xl text-gray-300">{item.title}</h2>
                <p className="font-bold text-2xl">{item.value}</p>
            </div>
        ))}

    </div>
    );
}

export default CssGrid;