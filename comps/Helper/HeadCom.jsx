import Head from 'next/head';
import { useRouter } from 'next/router';

const HeadCom = () => {
    let router = useRouter();
    const path = router.asPath
    return (
        <Head>
            <title>{path} Page</title>
        </Head>
    );
}

export { HeadCom };



