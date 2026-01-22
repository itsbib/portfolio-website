"use client";

interface IWorkCard {
  title: string;
  work: string;
  timeline?: string;
  href?: string;
}

const workCards: IWorkCard[] = [
  {
    title: "Woovie",
    work: "Design & Dev",
    timeline: "October 2025",
    href: "",
  },
  {
    title: "Mohoda Ecommerce",
    work: "Design & Dev",
    timeline: "August 2025",
    href: "https://www.mohoda.com",
  },
  {
    title: "en-ne bidirectional",
    work: "ASR & Speech Translation",
    timeline: "March 2025",
    href: "https://huggingface.co/itsbib/nepali-english-bidirectional",
  },
  {
    title: "Legalize Nepal",
    work: "Design & Dev",
    timeline: "October 2024",
    href: "https://www.legalizenepalofficial.com",
  },
  {
    title: "Find My Item",
    work: "Backend Dev",
    timeline: "Jan 2024",
    href: "https://findmyitem.samirk.com.np",
  },
  {
    title: "Nebula Care",
    work: "Backend Dev",
    timeline: "Jan 2023",
    href: "https://code-storm.vercel.app/",
  },
];

const Work = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full">
        <h2 className="font-semibold">My Works</h2>
        <div className="flex flex-col my-20 gap-15">
          {workCards.map((workCard) => (
            <div
              key={workCard.title}
              className="flex flex-col justify-end items-end"
            >
              <a
                key={workCard.title}
                href={workCard.href}
                target="_blank"
                rel="noreferrer"
              >
                <h1 className="uppercase font-thin">{workCard.title}</h1>
              </a>
              <p className="opacity-70">
                {workCard.timeline} . {workCard.work}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
