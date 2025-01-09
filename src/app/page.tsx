"use client";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();
  return (
    <div>
      <h1>Page</h1>
      <p>This is a page.</p>
      {session ? (
        <div>
          <p>Signed in as {session?.user?.email}</p>
        </div>
      ) : (
        <div>
          <p>Not signed in</p>
        </div>
      )}
    </div>
  )
}