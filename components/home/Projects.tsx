import Link from "next/link";
import React from "react";
import SectionTitle from "../global/SectionTitle";
import projects from "@/data/content/projects";
import Image from 'next/image';
import { Label } from '@/components/Label';

import ProjectCard from "../projects/ProjectCard";

function Projects() {
  return (
    <div className="relative flex flex-col justify-between pt-8 text-left">
      <div id="learnmore">
        <SectionTitle title="Подарите ребенку мечту" />
      </div>
      <div className="flex flex-col-reverse mx-auto px-container md:gap-16 lg:flex-row">
        <div>
          <h3 className="text-3xl font-medium font-accent md:text-4xl">
            Команда ВелоЛидер <br /> Воронеж
          </h3>
          <img
            className="sqD left-[-45px] bottom-[-85px] sm:bottom-[19px] sm:left-14 w-[550px]"
            style={{ animationDelay: "0.9s" }}
            src="/static/doodles/hero/ar.png"
          />
          <p className="my-5 text-xl md:text-2xl">
            Спортивная школа Олимпийского резерва №8 <br />
            Вступай в команду
          </p>
          <p className="my-5 opacity-90">
            Мы ждём именно тебя
          </p>
          <span className="hidden mt-2 text-md md:block">
            Для детей 7-12 лет
          </span>
          <div className="pt-10">
          <a href="https://cal.com/suyxhs/консультация">
          <div className="px-10 py-4 text-xl font-bold text-center transition-colors border-2 rounded-full cursor-pointer whitespace-nowrap text-fun-white border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink">
            Записаться
          </div>
          </a>
          </div>
             <img
            className="sqD left-[-45px] bottom-[-85px] sm:bottom-[2px] sm:left-14 w-[200px]"
            style={{ animationDelay: "0.9s" }}
            src="/static/doodles/hero/arrow.png"
          />
          <span className="hidden mt-2 lg:mt-[270px] text-lg md:block">
            Занятия на бесплатной основе
          </span>
        </div>
        <div className="max-w-[580px] flex-shrink-0 rounded-md">
          <Image
            src="/static/doodles/hero/child.jpg"
            alt="Team VeloLider"
            width={480}
            height={524}
            // sizes="(max-width: 768px) 100vw, 760px"
            className="object-cover w-full h-full rounded-md" />
          
          <div className="flex flex-col gap-4 mt-10 mb-10 sm:flex-row">
            <Label color="gray">Победа будет за нами</Label>
            <Label color="gray">Быстрее. Выносливее. Сильнее</Label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
