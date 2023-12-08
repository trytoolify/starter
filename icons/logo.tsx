import { cn } from '@trycreo/ui/lib';

const Logo = ({ className, backgroundColor = 'transparent' }: { className?: string; backgroundColor?: string }) => {
  return (
    <svg className={cn('w-5 h-5', className)} viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="126" height="126" fill={backgroundColor} />
      <path
        d="M63 96C58.6664 96 54.3752 95.1464 50.3714 93.488C46.3677 91.8296 42.7298 89.3989 39.6655 86.3345C36.6011 83.2702 34.1704 79.6323 32.512 75.6285C30.8536 71.6248 30 67.3336 30 63C30 58.6664 30.8536 54.3752 32.512 50.3714C34.1704 46.3677 36.6011 42.7298 39.6655 39.6655C42.7298 36.6011 46.3677 34.1704 50.3714 32.512C54.3752 30.8536 58.6664 30 63 30L63 63L63 96Z"
        fill="#F0F0F0"
      />
    </svg>
  );
};

export default Logo;
