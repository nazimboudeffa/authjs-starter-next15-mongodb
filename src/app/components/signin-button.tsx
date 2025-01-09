import { signIn } from "@/lib/auth"
 
export function SignIn() {
    return (
      <form
        action={async () => {
          "use server"
          await signIn()
        }}
      >
        <button type="submit" className="py-2 px-4 rounded bg-blue-500 text-white">Sign in</button>
      </form>
    )
  }