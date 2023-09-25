"use client";

import { CldUploadWidget } from 'next-cloudinary';
import { useEffect, useState } from 'react';


import Image from 'next/image';
import { ImagePlus, Trash } from 'lucide-react';

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  if (!isMounted) {
    return null;
  }

  return ( 
    <div>
  <div className="mb-4 flex items-center gap-4">
    {value.map((url) => (
      <div key={url} className="relative w-[200px] h-[200px] rounded-md overflow-hidden border border-gray-300 shadow-sm">
        <div className="z-10 absolute top-2 right-2 bg-white p-1 rounded-full">
          <button type="button" onClick={() => onRemove(url)} className="text-red-600">
            <Trash className="h-4 w-4" />
          </button>
        </div>
        <Image
          fill
          className="object-cover w-full h-full"
          alt="Image"
          src={url}
        />
      </div>
    ))}
  </div>
  <CldUploadWidget onUpload={onUpload} uploadPreset="urmmmnzz">
    {({ open }) => {
      const onClick = () => {
        open();
      };

      return (
        <button 
          type="button" 
          disabled={disabled} 
          onClick={onClick}
          className="py-2 px-4 bg-blue-600 text-white rounded shadow-sm hover:bg-blue-700 transition duration-150"
        >
          <ImagePlus className="h-4 w-4 mr-2 inline-block" />
          Carregue uma foto para o projeto
        </button>
      );
    }}
  </CldUploadWidget>
</div>

  );
}
 
export default ImageUpload;