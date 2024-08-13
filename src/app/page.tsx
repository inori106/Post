import Link from 'next/link';

const Paths = [
  { name: '記事一覧', link: '/article' },
  { name: '記事追加', link: '/article/add' },
  { name: 'カテゴリ一覧', link: '/category' },
  { name: 'カテゴリ追加', link: '/category/add' },
];

export default function Home() {
  return (
    <div>
      <ul className='space-y-6'>
        {Paths.map((path) => (
          <li key={path.name}>
            <Link
              href={path.link}
              className='text-xl text-green-400 font-semibold'
            >
              {path.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
