import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  emblaRef: any;
  children: React.ReactNode;
}

export default function ViewPort({ className, emblaRef, children }: Props) {
  return (
    <div className={cn('overflow-hidden', className)} ref={emblaRef}>
      {children}
    </div>
  );
}
