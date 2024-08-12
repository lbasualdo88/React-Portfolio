import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Editor({ value, onChange }) {
    return (
      <>
        <ReactQuill 
            value={value} 
            onChange={onChange} 
            className='bg-color1 dark:bg-dark-color8 w-auto h-[30rem]'
            />
      </>
    );
  }