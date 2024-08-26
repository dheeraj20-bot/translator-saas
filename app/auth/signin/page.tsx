'use client'
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default async function SignIn() {
  const router = useRouter();
  const providers = await getProviders();

  const handleSignIn = async (providerId: string) => {
    await signIn(providerId);
    router.push("/"); // Navigate to the home screen after successful sign-in
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        {providers &&
          Object.values(providers).map((provider) => (
            <div key={provider.name} className="mb-4">
              <button
                onClick={() => handleSignIn(provider.id)} // Call handleSignIn function
                className="flex items-center justify-center w-full px-4 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-100"
              >
                <Image
                  src="/googlr.png"
                  alt={provider.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 mr-2"
                />
                <span className="text-sm  font-semibold"> Sign in with {provider.name}</span>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
