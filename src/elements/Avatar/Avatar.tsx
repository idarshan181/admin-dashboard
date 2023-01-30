/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';
import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  useEffect,
  useState
} from 'react';
import { twMerge } from 'tailwind-merge';

const Variant = {
  DEFAULT: 'rounded-full',
  SQUARED: 'rounded',
  BORDERED: 'p-1 rounded-full ring-2'
} as const;

const Color = {
  DEFAULT: ''
} as const;

const Indicator = {
  ACTIVE: '',
  INACTIVE: ''
} as const;
const SizePX = {
  DEFAULT: 40,
  XS: 24,
  SM: 32,
  LG: 80,
  XL: 144
};
const Size = {
  DEFAULT: 'w-10 h-10 font-medium text-sm text-center',
  XS: 'w-6 h-6 text-xs font-medium text-center',
  SM: 'w-8 h-8 text-sm font-medium text-center',
  LG: 'w-20 h-20 text-base font-medium text-center',
  XL: 'w-36 h-36 font-medium text-base text-center '
} as const;

const PersonSize = {
  DEFAULT: 'w-12 h-12 font-medium text-sm text-center',
  XS: 'w-8 h-8 text-xs font-medium text-center',
  SM: 'w-10 h-10 text-sm font-medium text-center',
  LG: 'w-24 pr-2 h-24 text-base font-medium text-center',
  XL: 'w-40 h-40 font-medium text-base text-center '
} as const;

interface AvatarProps
  extends PropsWithChildren,
    ComponentPropsWithoutRef<'img'> {
  initials?: string;
  tooltip?: string;
  indicator?: keyof typeof Indicator;
  variant?: keyof typeof Variant;
  size?: keyof typeof Size;
  color?: keyof typeof Color;
  url?: string;
}

type TAvatar = {
  initials?: string;
  tooltip?: string;
  indicator?: keyof typeof Indicator;
  variant?: keyof typeof Variant;
  size?: keyof typeof Size;
  color?: keyof typeof Color;
  url?: string;
} & PropsWithChildren &
  ComponentPropsWithoutRef<'img'>;

const Avatar = ({
  children,
  variant = 'DEFAULT',
  size = 'DEFAULT',
  color = 'DEFAULT',
  url = '',
  className = '',
  initials = '',
  alt
}: AvatarProps) => {
  // const [error, setError] = useState(false);
  const [imageStatus, setImageStatus] = useState('loading');
  const checkImage = async (url: string) => {
    try {
      if (!url) {
        setImageStatus('error');
      }
      const image = document.createElement('img');
      image.onload = () => setImageStatus('loaded');
      image.onerror = () => setImageStatus('error');
      image.src = url;
    } catch (err) {
      setImageStatus('error');
    }
  };

  useEffect(() => {
    checkImage(url);
  }, [url]);
  return (
    <>
      {imageStatus === 'loaded' && (
        <Image
          alt="USER"
          src={url}
          width={SizePX[size]}
          height={SizePX[size]}
          className={twMerge(
            Variant[variant],
            Size[size],
            Color[color],
            className
          )}
        />
      )}
      {imageStatus === 'error' && !children && (
        <div
          className={twMerge(
            'relative overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600 ',
            Size[size]
          )}
        >
          <svg
            className={twMerge(
              'absolute -left-1  text-gray-400',
              PersonSize[size]
            )}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      )}
      {imageStatus === 'error' && children && (
        <span
          className={twMerge(
            'flex items-center justify-center bg-gray-300 text-gray-600 dark:text-gray-300',
            Variant[variant],
            Size[size]
          )}
        >
          {children}
        </span>
      )}
    </>
  );

  /* if (error && children) {
    return (
      <div className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {children}
        </span>
      </div>
    );
  } else if (error && !children) {
    return (
      <svg
        className="absolute -left-1 h-12 w-12 text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  } else {
    return (
      <img
        alt="USER"
        src={url}
        className={twMerge(
          Variant[variant],
          Size[size],
          Color[color],
          className
        )}
        onError={() => setError(true)}
      />
    );
  } */
  /* return (
    <>
      {error && children ? (
        <div className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            {children}
          </span>
        </div>
      ) : (
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
          <svg
            className="absolute -left-1 h-12 w-12 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      )}
      {!error && (
        <img
          alt="USER"
          src={url}
          className={twMerge(
            Variant[variant],
            Size[size],
            Color[color],
            className
          )}
          onError={() => setError(true)}
        />
      )}
      
    </>
  ); */
};

export default Avatar;

/* interface Props {
  crossOrigin?: string;
  referrerPolicy?: string;
  src: string;
  srcSet?: string;
}
const useLoaded = ({
  crossOrigin,
  referrerPolicy,
  src,
  srcSet
}: Props): 'loaded' | 'error' | boolean => {
  const [loaded, setLoaded] = useState<'loaded' | 'error' | boolean>(false);

  useEffect(() => {
    if (!src && !srcSet) {
      return undefined;
    }

    setLoaded(false);

    let active = true;
    const image = new (Image as any)();
    image.onload = () => {
      if (!active) {
        return;
      }
      setLoaded('loaded');
    };
    image.onerror = () => {
      if (!active) {
        return;
      }
      setLoaded('error');
    };
    image.crossOrigin = crossOrigin;
    image.referrerPolicy = referrerPolicy;
    image.src = src;
    if (srcSet) {
      image.srcset = srcSet;
    }

    return () => {
      active = false;
    };
  }, [crossOrigin, referrerPolicy, src, srcSet]);

  return loaded;
};
 */
