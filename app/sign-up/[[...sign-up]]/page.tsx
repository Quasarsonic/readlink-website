import { SignUp } from "@clerk/nextjs";
import { Header } from "@/components/header";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-16">
        <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />
      </main>
    </div>
  );
}
