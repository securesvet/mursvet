import 'react';
import { twMerge } from 'tailwind-merge';

type BackgroundImageProps = {
    imageUrl?: string | undefined;
    url?: string | undefined;
}

const BackgroundImage = ({imageUrl, url}:BackgroundImageProps) => {
    return (
        <>
        <div className={twMerge('w-full h-full rounded-[inherit] box-border relative')}>

            {imageUrl ?
                <img src={imageUrl} className='w-full h-full object-cover rounded-[inherit] opacity-50 hover:opacity-25 transition-opacity hover:cursor-pointer'/>
                :
                <div className="w-full h-full bg-neutral-500 hover:bg-neutral-700 hover:cursor-pointer hover:transition-colors rounded-[inherit"/>
            }
        </div>
        </>
    )
}

export default BackgroundImage;
