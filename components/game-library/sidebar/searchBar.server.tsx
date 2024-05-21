// TODO: Use React Hook Form
'use client';

import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function SearchBar() {
  // <div className="flex w-[227px] rounded-md border border-[#26333F] bg-[#030E1A] p-2">
  //   <input className=' bg-inherit'/>
  //   <Image
  //     src="/icons/search.svg"
  //     alt="search for game"
  //     width={24}
  //     height={24}
  //   />
  // </div>

  const { register } = useForm();

  return (
    <form
      onSubmit={() => {}}
      className="flex w-[227px] gap-2 rounded-md border border-[#26333F] bg-[#030E1A] p-2"
    >
      <input {...register('gameName')} className='bg-inherit outline-none'/>
      <button type="submit">
        <Image
          src="/icons/search.svg"
          alt="search for game"
          width={24}
          height={24}
        />
      </button>
    </form>
  );
}
