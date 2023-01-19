import Image from 'next/image';
import { PropsWithChildren } from 'react';

const Avatar = (
  props: PropsWithChildren & {
    className?: string;
  }
) => {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full p-1 ring-2 ring-gray-300 dark:bg-gray-600">
      <Image
        alt="USER"
        src={`https://lh3.googleusercontent.com/a/AEdFTp7hUWPOOm8p0ucClEFlHMxg0CZd5V7zjCrPRUZWTA=s256-c`}
        width={36}
        height={36}
        className="rounded-full text-sm font-medium text-gray-600 dark:text-gray-300"
      />
    </div>
  );
};

export default Avatar;
