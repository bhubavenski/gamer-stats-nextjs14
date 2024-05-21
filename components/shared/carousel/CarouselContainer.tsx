import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className, children }: Props) {
  return (
    <div className={cn('flex min-w-full gap-5', className)}>{children}</div>
  );
}
