'use cleint';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href: string;
}
const LinkButton: React.FC<ButtonProps> = ({
  children,
  className,
  href,
  ...props
}: ButtonProps) => {
  return (
    <Link href={href} prefetch={true}>
      <button
        className={twMerge(
          `flex items-center justify-center px-4 py-2 w-16 h-10 rounded-md text-white font-semibold }`,
          className
        )}
        {...props}
      >
        {children}
      </button>
    </Link>
  );
};

export default LinkButton;
