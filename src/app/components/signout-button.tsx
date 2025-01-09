import { signOut } from "@/lib/auth"
 
export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit" className="py-2 px-4 rounded bg-blue-500 text-white m-3">Sign Out</button>
    </form>
  )
}