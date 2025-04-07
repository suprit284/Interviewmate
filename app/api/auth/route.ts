import { NextResponse } from "next/server";
import { signUp } from "@/lib/actions/auth.actions"; // Kept signUp logic
import { auth } from "@/firebase/admin"; // Firebase Admin for sign-up
import { getAuth } from "firebase-admin/auth";
import { signInWithEmailAndPassword } from "firebase/auth"; // Client SDK
import { auth as clientAuth } from "@/firebase/client"; // Firebase Client SDK

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, email, password, name } = body;

    if (type === "sign-up") {
      // Create user in Firebase Admin Authentication
      const userRecord = await getAuth().createUser({
        email,
        password,
        displayName: name,
      });

      const uid = userRecord.uid; // Get UID from Firebase Admin

      // Save user in Firestore via `signUp` function
      const result = await signUp({ uid, name, email, password });
      return NextResponse.json(result);
    } 
    
    else if (type === "sign-in") {
        // Use Firebase Client SDK to sign in the user
        const userCredential = await signInWithEmailAndPassword(clientAuth, email, password);
        const idToken = await userCredential.user.getIdToken(); // 🔹 Get ID Token
      
        // 🔹 Create a session cookie (valid for 7 days)
        const expiresIn = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
        const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });
      
        // 🔹 Set the session cookie in the response
        const response = NextResponse.json({
          success: true,
          message: "Signed in successfully",
          uid: userCredential.user.uid
        });
      
        response.headers.set("Set-Cookie", `session=${sessionCookie}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${expiresIn / 1000}`);
      
        return response;
      }
    
    else {
      return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 });
    }
  } catch (error: any) {
    console.error("API Error:", error);

    return NextResponse.json({
      success: false,
      message: error.message || "Something went wrong",
    }, { status: 500 });
  }
}
