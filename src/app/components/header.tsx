import { SignIn } from "./signin-button";
import { SignOut } from "./signout-button";

export default function Header() {
  return (
    <header>
      <h1>Header</h1>
      <p>This is a header.</p>
      <div className="flex items-center">
      <SignIn />
      <SignOut />
      </div>
    </header>
  )
}