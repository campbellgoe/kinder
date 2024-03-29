import Link from "next/link";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { Octokit } from "@octokit/rest";

export default async function Home() {
  const {
    getUser,
    isAuthenticated
} = getKindeServerSession();
const user = await getUser()
// const octokit = new Octokit({
//   auth: 'YOUR-TOKEN'
// })

// await octokit.request('GET /users/{username}', {
//   username: 'USERNAME',
//   headers: {
//     'X-GitHub-Api-Version': '2022-11-28'
//   }
// })
  return (
    <div className="container">
      <p>{await isAuthenticated() ? 'authenticated' : not}</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <div className="card hero">
        <p className="text-display-1 hero-title">
          Let’s start authenticating <br /> with KindeAuth
        </p>
        <p className="text-body-1 hero-tagline">Configure your app</p>

        <Link
          href="https://kinde.com/docs/sdks/nextjs-sdk"
          target="_blank"
          rel="noreferrer"
          className="btn btn-light btn-big"
        >
          Go to docs
        </Link>
      </div>
    </div>
  );
}
