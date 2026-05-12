import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PremiumPaywall } from "@/components/premium-paywall";

export default async function PremiumPage({
  searchParams,
}: {
  searchParams: Promise<{ checkout?: string }>;
}) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in?redirect_url=/premium");

  const params = await searchParams;

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <PremiumPaywall checkoutResult={params.checkout} />
      </main>
      <Footer />
    </div>
  );
}
