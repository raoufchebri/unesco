import React from 'react';
import Image from 'next/image';

const DEFAULT_IMAGE = '/unesco-logo.jpg';

export default function Site({ id_no, name_en, category, distance }) {
  const image_src = `https://whc.unesco.org/uploads/sites/gallery/google/site_${id_no}.jpg`;

  const [src, setSrc] = React.useState(image_src);

  return (
    <div className='relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
      {name_en ? (
        <Image
          className='w-full h-60'
          alt={name_en}
          width={200}
          height={200}
          onError={(e) => {
            setSrc(DEFAULT_IMAGE);
          }}
          src={src}
        />
      ) : (
        <div
          role='status'
          class='space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center'
        >
          <div class='flex justify-center items-center w-full h-60 bg-gray-300 rounded sm:w-96 dark:bg-gray-700'>
            <svg
              className='w-12 h-16 text-gray-200'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 640 512'
            >
              <path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
            </svg>
          </div>
        </div>
      )}
      <div className='px-6 py-4'>
        <div className='mb-3 font-normal text-gray-700 dark:text-gray-400 mb-14'>
          {name_en ?? (
            <div
              role='status'
              class='space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center'
            >
              <div class='w-full'>
                <div class='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
                <div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5'></div>
                <div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
                <div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5'></div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='px-6 pt-4 pb-2 absolute inset-x-0 bottom-0 '>
        <span
          className={`${
            !name_en && 'animate-pulse'
          } inline-block bg-green-400/10 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mr-2 mb-2`}
        >
          {category ?? 'category'}
        </span>
        <span
          className={`${
            !name_en && 'animate-pulse'
          } inline-block bg-green-100 dark:bg-blue-100/10 rounded-full px-3 py-1 text-sm font-semibold text-green-700 dark:text-blue-400 mr-2 mb-2`}
        >
          {distance ? Math.floor(distance / 1000) : '-'} km
        </span>
      </div>
    </div>
  );
}
