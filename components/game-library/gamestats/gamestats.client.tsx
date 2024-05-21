import React from 'react';
import Image from 'next/image';
import gameBanner from '../../../public/images/gamebanner.png';
import righticon from '../../../public/icons/righticon.png';
import heart from '../../../public/icons/Heart.png';

export default function GameStats() {
    return (
        <div className='relative h-[480px] w-full'>
            <Image
                src={gameBanner}
                alt='Game Banner'
                layout='fill'
                quality={100}
                priority={true}
            />
            <div className='absolute bottom-4 left-4 space-y-6 p-6'>
                <p className='text-4xl font-bold'>Forza Horizon 5</p>
                <button className='flex w-[162px] items-center rounded bg-[#5653FF] px-4 py-2'>
                    <span className='mr-4'>View Stats</span>
                    <Image src={righticon} alt='icon' width={20} height={20} />
                </button>
            </div>
            <div className='absolute right-4 top-4 p-4'>
                <Image src={heart} alt='heart icon' width={29.09} height={29.09} />
            </div>
        </div>
    );
}
