import Layout from "@/components/Layout";
import { GET_ALL_SLUGS, GET_INDIVIDUAL_POST } from "@/graphql/queries";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

const url = process.env.STRAPI_BACKEND_URL;
const client = new ApolloClient({
  uri: `${url}/graphql`,
  cache: new InMemoryCache(),
});

const Post = ({ post }) => {
  console.log(post.content);
  return (
    <Layout text={`/${post.title}`}>
      <div className="w-7/12 my-10">
        {" "}
        <div className="text-3xl font-bold text-red-600">{post.title}</div>
        <div className="my-5">
          <MDXRemote {...post.content} />
        </div>
      </div>
    </Layout>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_ALL_SLUGS,
  });

  const paths = data.blogPosts.data.map((post) => {
    return {
      params: {
        slug: post.attributes.urlSlug,
      },
    };
  });

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: GET_INDIVIDUAL_POST,
    variables: { slugUrl: params.slug },
  });

  const attrs = data.blogPosts.data[0].attributes;

  const modifiedHtml = attrs.Content.replace("http://localhost:1337/", url);

  const html = await serialize(modifiedHtml);
  return {
    props: {
      post: {
        title: attrs.Title,
        content: html,
      },
    },
  };
};
