import Head from "next/head";
import Login from "../components/Login.js";

export default function Home() {
  const isAuthenticated = false;

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <Head>
        <title>Brian's Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome~</h1>
    </div>
  );
}
