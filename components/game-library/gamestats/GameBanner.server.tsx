import React from 'react';
import Image from 'next/image';

export default function GameBanner() {
    return (
        <div className='relative h-[480px] w-full'>
            <Image
                src='/images/gamebanner.png'
                alt='Game Banner'
                layout='fill'
                quality={100}
                priority={true}
            />
            <div className='absolute bottom-4 left-4 space-y-6 p-6'>
                <p className='text-4xl font-bold'>Forza Horizon 5</p>
                <button className='flex w-[162px] rounded bg-[#5653FF] px-7 py-2'>
                    <span className='mr-4'>View Stats</span>
                    <Image src='/icons/righticon.png' alt='icon' width={20} height={20} />
                </button>
            </div>
            <div className='absolute right-4 top-4 p-4'>
                <Image src='/icons/Heart.png' alt='heart icon' width={29.09} height={29.09} />
            </div>
            <div className='absolute bottom-4 right-4 flex space-x-8 px-8'>
                <div className='flex items-center space-x-2'>
                    <Image src='/icons/time.png' width={28} height={32} alt='Time icon' />
                    <div className='flex flex-col items-start'>
                        <p>Total PlayTime</p>
                        <p className='text-sm'>50 hours</p>
                    </div>
                </div>
                <div className='flex items-center space-x-2'>
                    <Image src='/icons/achiviement.png' width={28} height={32} alt='Achievements icon' />
                    <div className='flex flex-col items-start'>
                        <p>Achievements</p>
                        <p className='text-sm'>12/100</p>
                    </div>
                </div>
                <div className='flex items-center space-x-2'>
                    <Image src='/icons/friends.svg' width={28} height={32} alt='Friends icon' />
                    <div className='flex flex-col items-start'>
                        <p>Friends</p>
                        <p className='text-sm'>15 friends</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
