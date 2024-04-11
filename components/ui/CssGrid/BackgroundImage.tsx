import 'react';
import { twMerge } from 'tailwind-merge';

type BackgroundImageProps = {
    url?: string | undefined;
    onClick?: () => void;
}

const BackgroundImage = ({url, onClick}:BackgroundImageProps) => {
    return (
        <>
        <div className={twMerge('min-h-full rounded-[inherit] box-border')} onClick={onClick}>

            {(url !== undefined) ?
                <img src={url} className='w-full h-full object-cover rounded-[inherit] opacity-50 hover:opacity-25 transition-opacity hover:cursor-pointer'/>
                :
                ''
            }
        </div>
        </>
    )
}

export default BackgroundImage;
