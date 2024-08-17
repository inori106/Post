import { twMerge } from 'tailwind-merge';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  label: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, className, ...props }) => {
  return (
    <div>
      <label className='text-xl font-semibold'>{label}</label>
      <textarea
        className={twMerge(
          `py-3 mt-1 px-2 w-full rounded-md border-2 border-gray-700`,
          className
        )}
        {...props}
      />
    </div>
  );
};

export default TextArea;
