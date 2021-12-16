import Head from "next/head";
import Login from "../components/Login.js";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <Head>
        <title>Brian's Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome~</h1>
      <button
        onClick={logout}
        className="bg-yellow-400 rounded-lg p-3 font-bold"
      >
        Logout
      </button>
    </div>
  );
}
