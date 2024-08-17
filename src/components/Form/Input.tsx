import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ label, className, ...props }) => {
  return (
    <>
      <label className='text-xl font-semibold'>{label}</label>
      <input
        className={twMerge(
          `py-3 mt-1 px-2 w-full rounded-md border-2 border-gray-700`,
          className
        )}
        {...props}
      />
    </>
  );
};

export default Input;
