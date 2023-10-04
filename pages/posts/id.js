import Layout from '../../components/layout';
import { getAllPostsIds, getPostData } from  '../../lib/posts';


export default function Post() {
    return <Layout>...</Layout>;
}

export async function getStaticPaths() {
    const paths = getAllPostsIds();
    return {
        paths,
        fallback: false,
    };

}

export async function getStaticProps({params}) {
    const postData = getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}
