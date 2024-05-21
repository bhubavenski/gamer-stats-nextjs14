import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='gradiant-5 box-border flex flex-wrap items-start justify-between px-[35px] py-[90px] font-spartan text-white'>
      <div>
        <Image src='/images/logo.svg' width={65} height={68} alt='Logo' />
        <p>2023 @ GamerStats</p>
      </div>
      <div className='flex grow justify-center gap-[120px]'>
        <div className='mx-4 space-y-3'>
          <p>Most visited</p>
          <div className='space-y-1'>
            <Link href='#' className='block underline'>Offers</Link>
            <Link href='#' className='block underline'>Leader board</Link>
            <Link href='#' className='block underline'>Linked Platforms</Link>
          </div>
        </div>
        <div className='mx-4 space-y-3'>
          <p>Privacy Policy</p>
          <div className='space-y-1'>
            <Link href='#' className='block underline'>Privacy Policy</Link>
          </div>
        </div>
        <div className='mx-4 space-y-3'>
          <p>Support</p>
          <div className='space-y-1'>
            <Link href='#' className='block underline'>Chat</Link>
            <Link href='#' className='block underline'>Email</Link>
            <Link href='#' className='block underline'>Raise Ticket</Link>
          </div>
        </div>
        <div className='mx-4 space-y-3'>
          <div className='space-y-1'>
            <Link href='#' className='block'>Developer API</Link>
          </div>
        </div>
        <div className='ml-4 mt-6 space-y-3'>
          <p>Follow us on</p>
          <div className='flex gap-6'>
            <Link href='#'><Image src='/images/instagram.png' width={34} height={33} alt='Instagram' /></Link>
            <Link href='#'><Image src='/images/twiter.png' width={34} height={33} alt='Twitter' /></Link>
            <Link href='#'><Image src='/images/discord.png' width={34} height={33} alt='Discord' /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
