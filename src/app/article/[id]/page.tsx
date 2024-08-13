import { getArticleDetail } from '@/utils/getArticle';
import dayjs from 'dayjs';
import { markdownToHtml } from '@/utils/markdown';
import styles from '@/styles/content.module.css';
import { notFound } from 'next/navigation';
export default async function ArticleDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await getArticleDetail(params.id);
  if (!post) return notFound();

  const contentn = post.content ? await markdownToHtml(post.content) : '';

  return (
    <div className=''>
      <h1 className='text-2xl font-semibold'>{post.title}</h1>
      <div className='flex flex-col space-y-1 pt-3'>
        <span className='text-sm text-gray-500'>
          投稿日：{dayjs(post.createdAt).format('YYYY/MM/DD')}
        </span>
        {post.updatedAt && (
          <span className='text-sm text-gray-500'>
            更新日：{dayjs(post.updatedAt).format('YYYY/MM/DD')}
          </span>
        )}
      </div>
      {post.categories && (
        <div className='flex gap-3 py-3'>
          {post.categories.map((category) => (
            <span
              key={category.id}
              className='bg-slate-400 p-1 text-sm rounded-md text-white'
            >
              {category.name}
            </span>
          ))}
        </div>
      )}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: contentn }}
      />
    </div>
  );
}
