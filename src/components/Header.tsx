import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className='flex justify-between text-xl font-bold pb-5'>
      <div className=''>
        <Link href='/'>Home</Link>
      </div>
      <div className='space-x-5'>
        <Link href='/article'>ブログ</Link>
        <Link href='/category'>カテゴリー</Link>
      </div>
    </header>
  );
};

export default Header;
