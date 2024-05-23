"use client";
import { useAuth } from "./contexts/AuthContext";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user } = useAuth();

  if (user) {
    redirect("/dashboard");
  }

  const router = useRouter();

  return (
    <main>
      <div>
        <button className="mx-2" onClick={() => router.push("/otp")}>
          Login
        </button>
        <button className="mx-2" onClick={() => router.push("/register")}>
          Register
        </button>

        <h1>Welcome to Get Bus</h1>
      </div>
    </main>
  );
}
