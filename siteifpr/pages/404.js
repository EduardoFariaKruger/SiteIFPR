import Link from "next/link";
import Head from "next/head";

const Notfound = () => {
    return (
        <>
        <Head>
            <title>Not Found</title>
        </Head>
        <div>
            <h1>Ooooops........</h1>
            <h2>The page was not found, you can go back to the <Link href="/"><a>main page</a></Link></h2>
        </div>
        </>
    );
}
 
export default Notfound;