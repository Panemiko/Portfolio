import { WhatsappIcon } from "@/components/icons/whatsapp";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRightIcon, ContactIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ColorStrip } from "./_components/color-strip";
import { Copy } from "./_components/copy";
import { Name } from "./_components/name";
import { Projects } from "./_components/projects";
import { Shadows } from "./_components/shadows";
import { SocialsSide } from "./_components/socials-side";
import { ThemeSwitch } from "./_components/theme-switch";

export default async function Page() {
  return (
    <div
      style={{
        backgroundImage: 'url("./noise.svg")',
      }}
    >
      <ColorStrip />
      <SocialsSide />
      <Shadows />
      <div className="min-h-screen max-w-screen-md px-6 py-28 md:ml-48 lg:ml-96">
        <header className="mb-10 flex items-center justify-between">
          <div className="mb-4 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
            <div>
              <Image
                className="size-20 rounded-full border border-secondary/30 shadow-2xl shadow-secondary/40"
                alt="foto de perfil"
                src="/profile@128.jpg"
                width={128}
                height={128}
                loading="lazy"
              />
            </div>
            <div>
              <h1 className="mb-2 text-4xl font-black sm:text-5xl md:text-7xl">
                <Name /> Oliveira
              </h1>
              <p className="font-mono text-xl text-foreground/70 md:text-2xl">
                Desenvolvedor Full-Stack
              </p>
            </div>
          </div>
          <div>
            <ThemeSwitch />
          </div>
        </header>
        <div className="mb-7">
          <p className="mb-4 text-lg text-foreground/70">
            Olá! Sou Tito Lucca Oliveira, um desenvolvedor de Santa Cruz do Sul
            - RS, apaixonado por criar experiências digitais excepcionais.
            Trabalho com tecnologia para tornar o design bonito e a experiência
            do usuário fantástica.
          </p>
          <p className="mb-10 text-lg text-foreground/70">
            Se você busca um site ou aplicativo que se destaque, estou aqui para
            ajudar. Vamos construir algo incrível juntos!
          </p>

          <div className="flex justify-end mb-10">
            <Button asChild>
              <Link
                className=""
                target="_blank"
                href="https://wa.me/5551992301819"
              >
                <ChevronRightIcon className="mr-2" />
                Vamos conversar!
              </Link>
            </Button>
          </div>
        </div>
        <div className="mb-20">
          <Separator />
        </div>
        <div className="mb-7">
          <Projects />
        </div>
        <div className="mb-20">
          <Separator />
        </div>
        <div>
          <h2 className="mb-4 flex items-center font-mono text-xl font-medium">
            <ContactIcon className="mr-3 gap-3 text-primary/70" /> Contato
          </h2>
          <div className="flex flex-col gap-8 sm:ml-10 sm:flex-row sm:items-center sm:gap-16">
            <div>
              <div className="flex items-center gap-2">
                <Copy value="titoluccao@gmail.com">titoluccao@gmail.com</Copy>
              </div>
              <div className="flex items-center gap-2">
                <Copy value="51992301819">+55 (51) 99230-1819</Copy>
              </div>
            </div>
            <div>
              <span className="text-lg font-bold text-foreground/70">OU</span>
            </div>
            <div>
              <Button asChild variant="outline">
                <Link
                  className=""
                  target="_blank"
                  href="https://wa.me/5551992301819"
                >
                  <WhatsappIcon className="mr-2 size-7 fill-foreground" />
                  Me chame no WhatsApp!
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
