import React from 'react'
import { BiCommentX } from 'react-icons/bi';
import { MdOutlineVideocamOff } from 'react-icons/md';

interface IProps{
  text: string;
}


const NoResults = ({ text }: IProps) => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
      { text == 'No comments yet.' ? <BiCommentX className='text-8xl'/> : <MdOutlineVideocamOff className='text-8xl'/> }
      <p className='text-2xl text-center'>{text}</p>
    </div>
  )
}

export default NoResults
