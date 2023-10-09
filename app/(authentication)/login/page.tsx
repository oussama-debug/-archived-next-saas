import Container from "@/components/core/container";
import Heading3 from "@/components/core/headings/3";
import Paragraph from "@/components/core/paragraph";
import logoPrimary from "@/library/assets/logo-1.svg";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <Container>
      <section className="w-full min-h-screen flex flex-col justify-center items-center">
        <div className="flex max-w-[320px] flex-col justify-start items-start">
          <Link href="/" className="flex flex-row justify-start items-start">
            <Image
              src={logoPrimary}
              width={100}
              height={20}
              alt={"Zenlanes social media management software"}
            />
          </Link>
          <Heading3 className="mt-5 text-accentPrimary">
            Sign in to your account
          </Heading3>
          <Paragraph className="text-gray-600 leading-[1.3rem]">
            Never share your <strong>Zenlanes</strong> credentials. If multiple
            people need access to your account, invite them as team members in
            settings.
          </Paragraph>
        </div>
      </section>
    </Container>
  );
}
