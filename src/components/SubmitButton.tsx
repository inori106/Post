'use client';
import { useFormStatus } from 'react-dom';
import Loading from './Loading';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}
const SubmitButton: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}: ButtonProps) => {
  const { pending } = useFormStatus();
  const [isprocessing, setProcessing] = useState(false);
  return (
    <button
      className={twMerge(
        `flex px-4 py-2 w-16 h-10 rounded-md text-white font-semibold justify-center items-center 
        ${pending && 'cursor-not-allowed'}`,
        className
      )}
      {...props}
      disabled={pending}
      onClick={() => setProcessing(true)}
    >
      {pending && isprocessing ? <Loading /> : children}
    </button>
  );
};

export default SubmitButton;
