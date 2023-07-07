import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '../components/Layout';
import PostGrid from '../components/PostGrid';
import SEO from '../components/SEO';
import { getPosts } from '../lib/contentful';
import { Post } from '../types';

interface Props {
  posts: Post[];
}

const Index: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <SEO
        title="Mike Francis"
        description="Software Engineer & UI Designer based in London, UK."
      />
      <Layout>
        <div className="max-w-5xl">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl md:leading-normal mb-16 md:mb-32">
              Technical Leader, Software Engineer & UI Designer based in London,
              UK.
              <br />
              Currently building something completely new in the green tech
              space.
            </h1>
          </div>

          <h2 className="mb-8 uppercase text-sm tracking-widest">
            Latest Posts
          </h2>
          <PostGrid posts={posts} />
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            <Link href="/blog" prefetch={false}>
              More from the archive →
            </Link>
          </p>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const posts = await getPosts({
    limit: 3,
  });

  return {
    props: {
      posts,
    },
  };
}

export default Index;
