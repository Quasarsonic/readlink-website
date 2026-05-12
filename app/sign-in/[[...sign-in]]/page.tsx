import { SignIn } from "@clerk/nextjs";
import { Header } from "@/components/header";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-16">
        <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" />
      </main>
    </div>
  );
}
