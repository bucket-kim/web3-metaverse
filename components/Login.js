import Image from "next/image";

function Login() {
  return (
    <div className="bg-black relative ">
      <h1>Login</h1>
      <div className="flex flex-col absolute z-50 h-5/6 items-center justify-center w-full space-y-4">
        {/* logo */}
        <Image
          className="object-cover rounded-full"
          src="https://bucketkim.netlify.app/img/profile.jpeg"
          height={200}
          width={200}
        />

        {/* login button */}
        <button className="bg-yellow-400 rounded-lg p-3 font-bold animate-pulse">
          Login to Metaverse
        </button>
      </div>

      <div className="w-full h-screen">
        {/* image */}
        <Image
          src="https://wallpaperaccess.com/full/1224079.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
