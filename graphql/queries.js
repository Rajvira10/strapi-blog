import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
    query{
        blogPosts{
            data{
                attributes{
                    Title
                    Description
                    urlSlug
                }
            }
        }
    }
`;

export const GET_ALL_SLUGS = gql`
    query {
        blogPosts {
            data {
                attributes {
                    urlSlug
                }
            }
        }
    }
`;

export const GET_INDIVIDUAL_POST = gql`
    query($slugUrl: String!) {
        blogPosts(filters:{urlSlug: {eq:$slugUrl}}) {
            data {
                attributes {
                    Title
                    Content
                }
            }
        }
    }
`;

