// app/logout/route.ts
import { signOut } from "@/lib/actions/auth.actions";
import { redirect } from "next/navigation";

export async function GET() {
  await signOut();
  redirect("/sign-in");
}
