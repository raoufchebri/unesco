import React from 'react';
import Image from 'next/image';

const DEFAULT_IMAGE = '/unesco-logo.jpg';

export default function Site({ id_no, name_en, category, distance }) {
  const image_src = `https://whc.unesco.org/uploads/sites/gallery/google/site_${id_no}.jpg`;

  const [src, setSrc] = React.useState(image_src);

  return (
    <div className='relative max-w-sm rounded overflow-hidden border'>
      <Image
        className='w-full'
        alt={name_en}
        width={200}
        height={200}
        onError={(e) => {
          setSrc(DEFAULT_IMAGE);
        }}
        src={src}
      />
      <div className='px-6 py-4'>
        <div className='text-sm mb-10'>{name_en}</div>
      </div>
      <div className='px-6 pt-4 pb-2 absolute inset-x-0 bottom-0 '>
        <span className='inline-block bg-green-100 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2'>
          {category}
        </span>
        <span className='inline-block bg-sky-400/10 rounded-full px-3 py-1 text-sm font-semibold text-sky-600 mr-2 mb-2'>
          {Math.floor(distance / 1000)} km
        </span>
      </div>
    </div>
  );
}
