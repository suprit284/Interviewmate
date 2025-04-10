// app/logout/route.ts
import { signout } from "@/lib/actions/auth.actions";
import { redirect } from "next/navigation";

export async function GET() {
  await signout();
  redirect("/sign-in");
}
