import React, { Suspense } from 'react';

const PostDetailsLazy = React.lazy(() =>
  import('@/components/PostDetails').then((module) => ({
    default: module.PostDetails,
  })),
);
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PostDetailsPage({ params }: PageProps) {
  const { id } = await params;
  try {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <PostDetailsLazy title={id} />
      </Suspense>
    );
  } catch (e: unknown) {
    return <div>error</div>;
  }
}
