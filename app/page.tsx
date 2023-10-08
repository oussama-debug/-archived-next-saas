import Container from "@/components/core/container";
import WelcomeHero from "@/components/welcome/hero";
import Navigation from "@/components/welcome/navigation";

export default function Home() {
  return (
    <Container>
      <section className="min-h-screen flex flex-col justify-start items-start">
        <Navigation />
        <WelcomeHero />
      </section>
    </Container>
  );
}
