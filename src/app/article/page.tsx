import { getArticles } from '@/utils/getArticle';
import { Article } from '@/types/Article';
import LinkButton from '@/components/Button/LinkButton';

export default async function ArticlePage() {
  const articles = await getArticles();
  if (!articles) return <div>記事がありません</div>;
  return (
    <div>
      <h1 className='text-2xl font-semibold'>記事一覧</h1>
      <div className='space-y-4 mt-8'>
        {articles.map((article: Article) => (
          <div
            key={article.id}
            className='md:flex items-center justify-between'
          >
            <h2 className='text-xl font-semibold'>{article.title}</h2>
            <div className='flex space-x-4 mt-2 md:mt-0'>
              <LinkButton
                href={`/article/${article.id}`}
                className='bg-blue-400 hover:bg-blue-300'
              >
                詳細
              </LinkButton>
              <LinkButton
                href={`/article/edit/${article.id}`}
                className='bg-green-400 hover:bg-green-300'
              >
                編集
              </LinkButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
