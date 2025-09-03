import React, { Suspense } from 'react';

const PostDetailsLazy = React.lazy(() =>
  import('@/components/PostDetails').then((module) => ({
    default: module.PostDetails,
  })),
);
export default async function PostDetailsPage({
  params,
}: {
  params: { id: string };
}) {
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
