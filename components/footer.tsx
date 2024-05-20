import React from 'react'
import Image from 'next/image'

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
            <a href='#' className='block underline'>Offers</a>
            <a href='#' className='block underline'>Leader board</a>
            <a href='#' className='block underline'>Linked Platforms</a>
          </div>
        </div>
        <div className='mx-4 space-y-3'>
          <p>Privacy Policy</p>
          <div className='space-y-1'>
            <a href='#' className='block underline'>Privacy Policy</a>
          </div>
        </div>
        <div className='mx-4 space-y-3'>
          <p>Support</p>
          <div className='space-y-1'>
            <a href='#' className='block underline'>Chat</a>
            <a href='#' className='block underline'>Email</a>
            <a href='#' className='block underline'>Raise Ticket</a>
          </div>
        </div>
        <div className='mx-4 space-y-3'>
          <div className='space-y-1'>
            <a href='#' className='block'>Developer API</a>
          </div>
        </div>
        <div className='ml-4 mt-6 space-y-3'>
          <p>Follow us on</p>
          <div className='flex gap-6'>
            <a href='https://instagram.com'><Image src='/images/instagram.png' width={34} height={33} alt='Instagram' /></a>
            <a href='https://twitter.com'><Image src='/images/twiter.png' width={34} height={33} alt='Twitter' /></a>
            <a href='https://discord.com'><Image src='/images/discord.png' width={34} height={33} alt='Discord' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
