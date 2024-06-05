'use client'

import Image from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';

type Props = {
  imgUrl?: string;
  label: string;
  className?: string;
  imgW?: number;
  imgH?: number;
  [key: string]: any;
};

export default function Button({
  imgUrl,
  label,
  className,
  imgW = 20,
  imgH = 20,
  ...props
}: Props) : React.ReactNode {
  return (
    <button
      className={cn(
        `flex-center box-border h-11 w-[162px] self-start rounded-md px-6 py-3 bg-primary-blue-100 ${className}`
      )}
      {...props}
    >
      <div className="flex items-center gap-2 text-base">
        <span className="text-lg">{label}</span>
        {imgUrl && (
          <Image alt="view stats" src={imgUrl} width={imgW} height={imgH} />
        )}
      </div>
    </button>
  );
}
