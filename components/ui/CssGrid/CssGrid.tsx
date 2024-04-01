import { twMerge } from "tailwind-merge";

const CssGrid = () => {
    const data = [
        {title: "Aircon", value: "Fancy animation using electron", bgImage: 'giphy.gif'}, 
        {title: "Mursvet", value: "You already see it :)", bgImage: 'icon.svg'},
        {title: "SvetUI", value: "React Components Library"}, 
        {title: "Car Design", value: "Car constructor made with Next.js", bgImage: 'avatar.jpg'},
        {title: "Other Projects", value: "Are coming soon..."}, {title: "Name", value: "Murzin Sviatoslav"}]

    const boxStyle = 'border-2 border-neutral-500 rounded-xl p-2 flex flex-col items-center justify-center';

    return (
    <div className="grid md:grid-cols-3 auto-rows-[300px] gap-2">
        {data.map((item, i) => (
            <div key={i} 
            className={twMerge(boxStyle, `${i === 3 || i === 5 ? 'md:col-span-2' : ''} ${i === 2 ? 'md:row-span-2' : ''} relative`)}>
                <div className="absolute z-10">
                <h2 className="text-xl text-gray-300 opacity-100">{item.title}</h2>
                <p className="font-bold text-2xl opacity-100">{item.value}</p>
                </div>
                <div className={twMerge(`${(item.bgImage) ? (`bg-[url(/images/${item.bgImage})] bg-cover`) : 'bg-none'} rounded-[inherit] min-w-full min-h-full absolute hover:cursor-pointer opacity-50 hover:opacity-25 transition-opacity`)}></div>
            </div>
        ))}

    </div>
    );
}

export default CssGrid;