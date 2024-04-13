"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { FigmaLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Autoplay from "embla-carousel-autoplay";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ExternalLinkIcon,
  ProjectorIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
const projects = [
  {
    title: "Promofinder",
    description: "Página inicial de vendas para um protótipo de um aplicativo.",
    image: "./projects/promofinder.png",
    link: {
      site: "https://promofinder.me/",
      github: "https://github.com/Panemiko/PromoFinder",
    },
  },
  {
    title: "CRM",
    description: "CRM simples para gerenciamento de pacientes.",
    image: "./projects/crm.png",
    link: {
      github: "https://github.com/Panemiko/CRM",
    },
  },
  {
    title: "Chimera",
    description: "Ficha para jogos de RPG de mesa digital.",
    image: "./projects/chimera.png",
    link: {
      github: "https://github.com/panemiko/chimera",
      figma:
        "https://www.figma.com/file/qRqbgXgbQkMKQcU0HLxXoN/WebStats?type=design&node-id=0%3A1",
    },
  },
  {
    title: "Satisfinder",
    description:
      "Página para apresentar a ideia de um serviço em desenvolvimento.",
    image: "./projects/satisfinder.png",
    link: {
      site: "https://satisfinder.vercel.app/",
    },
  },
  {
    title: "Site Chopperia",
    description: "Design de um site para uma chopperia. Não utilizado em nenhum lugar.",
    image: "./projects/chopperia.png",
    link: {
      figma:
        "https://www.figma.com/file/adXR5TQT4dqpBMbrPKmvhk/Chopperia?type=design&node-id=0%3A1&mode=design&t=v7MJlCMszuOKnGuQ-1",
    },
  },
  {
    title: "Flash Cards",
    description: "Pequeno protótipo de uma plataforma para flash cards utilizando paletas semi-aleatórias.",
    image: "./projects/cards.png",
    link: {
      figma: "https://www.figma.com/file/M18psK2L6IHkFfL2455SzE/Learning-platform?type=design&node-id=0%3A1&mode=design&t=U8RjkMdMmaQXvKsi-1",
    },
  },
];

export function Project({ project }: { project: (typeof projects)[0] }) {
  return (
    <Card className="grid h-full grid-rows-[5rem_auto] gap-6">
      <div
        className="h-full w-full rounded-t-md bg-cover bg-center"
        style={{ backgroundImage: `url("${project.image}")` }}
      ></div>
      <CardContent className="flex flex-col justify-between">
        <div className="mb-4">
          <CardTitle className="mb-1 text-lg">{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </div>
        <div className="flex gap-3">
          {project.link.site && (
            <Button asChild variant="outline" className="w-full">
              <Link target="_blank" href={project.link.site}>
                <ExternalLinkIcon />
              </Link>
            </Button>
          )}
          {project.link.github && (
            <Button asChild variant="outline" className="w-full">
              <Link
                target="_blank"
                className="fill-foreground"
                href={project.link.github}
              >
                <GitHubLogoIcon className="size-7" />
              </Link>
            </Button>
          )}
          {project.link.figma && (
            <Button asChild variant="outline" className="w-full">
              <Link
                target="_blank"
                className="fill-foreground"
                href={project.link.figma}
              >
                <FigmaLogoIcon className="size-7" />
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function Projects() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger asChild>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="flex items-center font-mono text-xl font-medium">
              <ProjectorIcon className="mr-3 gap-3 text-primary/70" /> Alguns
              dos meus projetos
            </h2>
            <Button variant="ghost">
              {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </Button>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </CollapsibleContent>
      </Collapsible>
      {!open && (
        <Carousel
          className="mb-3"
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              loop: true,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="sm:basis-1/2">
                <Project project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </div>
  );
}
