import Layout from "@/components/Layout";
import { GET_ALL_POSTS } from "@/graphql/queries";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Link from "next/link";
import React from "react";

const Blog = ({ posts }) => {
  return (
    <Layout text="/blog">
      <div className="text-start lg:w-7/12 w-full mt-10">
        <h1 className="text-3xl font-bold text-red-600">All Posts</h1>
        <div className="flex flex-col mb-20">
          {posts?.map((val, i) => (
            <div key={i} className="p-5 rounded-lg mt-5 shadow-xl">
              <Link
                href={val.attributes.urlSlug}
                className="text-xl text-green-600 pb-2 hover:underline cursor-pointer"
              >
                {val.attributes.Title}
              </Link>
              <p className="text-sm">{val.attributes.Description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const url = process.env.STRAPI_BACKEND_URL;
  const client = new ApolloClient({
    uri: `${url}/graphql`,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_ALL_POSTS,
  });

  return {
    props: {
      posts: data.blogPosts.data,
    },
  };
}

export default Blog;
