import { LivhtecIcon } from "@/components/icons";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <div className="flex gap-2 items-center">
          <LivhtecIcon className="h-12 w-12" />
          <span className="sr-only md:not-sr-only font-bold">
            Livhtec Solutions
          </span>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center mt-4">
            Site Under Construction
          </h1>
          <p className="mt-2 text-center">
            We are currently working on our website. Please check back later.
          </p>
        </div>

        {/* Link para o linkedin */}
        <div className="mt-4">
          <a
            href="https://www.linkedin.com/company/livhtec/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            Follow us on LinkedIn
          </a>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Livhtec Solutions. All rights
            reserved.
          </p>
        </div>
      </main>
    </>
  );
}
