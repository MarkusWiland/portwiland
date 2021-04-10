import Post from '@/components/Posts/Post';

export default function index({ posts }) {
  return (
    <div>
      {posts &&
        posts
          .slice(0, 3)
          .map((post) => (
            <Post key={post.sys.id} fields={post.fields} sys={post.sys} />
          ))}
    </div>
  );
}
