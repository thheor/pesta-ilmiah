import { Navbar } from "@/components/navbar";
import { MainLayout } from "@/layout";
import { LinkButton } from "@/components/linkButton";
import Countdown from "@/components/countdown";
// import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const list = [
  "Memperluas Wawasan dan Kompetensi Diri",
  "Pengalaman Kompetisi Nasional",
  "Menambah Portofolio dan Relasi",
];

const targetDate = {
  year: 2026,
  month: 8,
  day: 28,
  hours: 10,
  minutes: 30,
};

const date = new Date(
  targetDate.year,
  targetDate.month,
  targetDate.day,
  targetDate.hours,
  targetDate.minutes,
);

export function Home() {
  return (
    <>
      <Navbar></Navbar>
      <MainLayout>
        <section
          id="hero"
          className="flex flex-col pt-30 items-center  h-screen w-full"
        >
          <h1 className="text-6xl font-extrabold text-center">Pesta Ilmiah</h1>
          <h3 className="text-3xl font-bold">
            Lomba Pesta Ilmiah SMA Negeri 1 Bantul
          </h3>
          <LinkButton href="/form" title="Register Now" />
        </section>
        <section id="join" className="pt-30 w-full h-screen">
          <ul className="flex justify-center gap-10">
            <li>
              <JoinCard title="Why Should You Join?" data={list} />
            </li>
            <li>
              <JoinCard title="Why Can Join?" data={list} />
            </li>
          </ul>
        </section>
        <section id="path" className="w-full h-screen pt-10">
          <h2 className="text-center ">Choose Your Path</h2>
          <ul className="flex justify-center gap-5 pt-10">
            <PathCard
              image="https://www.nesco.id/assets/path/Ilustrasi%20Paper%20Competition.svg"
              title="Paper Competition"
            />
            <PathCard
              image="https://www.nesco.id/assets/path/Ilustrasi%20Paper%20Competition.svg"
              title="Innovation Competition"
            />
            <PathCard
              image="https://www.nesco.id/assets/path/Ilustrasi%20Paper%20Competition.svg"
              title="Poster Competition"
            />
            <PathCard
              image="https://www.nesco.id/assets/path/Ilustrasi%20Paper%20Competition.svg"
              title="Debate Competition"
            />
          </ul>
          <Card className=" mt-10">
            <CardContent className="inline-flex">
              <img src="https://www.nesco.id/assets/path/Ilustrasi%20Paper%20Competition.svg" />
              <div className="">
                <h1>Title for the card</h1>
                <p>
                  Seminar nasional adalah seminar yang diadakan oleh unesco tiap
                  tahun. dengan tema ketenagalistrikan untuk menjadi ruang
                  Seminar nasional adalah seminar yang diadakan oleh unesco tiap
                  tahun. dengan tema ketenagalistrikan untuk menjadi ruang
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
        <section id="timeline" className="w-full h-screen pt-10">
          <h2 className="text-center">Timeline</h2>
          <ul className="flex justify-start gap-100 pt-10 mx-20">
            <TimelineCard title="timeline-1" date="24 mei 2025" icon="" />
            <TimelineCard title="timeline-2" date="24 mei 2025" icon="" />
          </ul>
          <ul className="flex justify-end gap-100 pt-10 mx-20">
            <TimelineCard title="timeline-3" date="24 mei 2025" icon="" />
            <TimelineCard title="timeline-4" date="24 mei 2025" icon="" />
          </ul>
        </section>
        <section id="countdown" className="w-full h-screen pt-10">
          <h2 className="text-center">Events start in</h2>
          <div className="flex justify-center">
            <Countdown date={date} />
          </div>
        </section>
        <section id="faq" className="w-full min-h-screen pt-10">
          <h2 className="text-center">Frequently Asked Question</h2>
          <ul></ul>
        </section>
      </MainLayout>
    </>
  );
}

function JoinCard({ title, data }: { title: string; data: string[] }) {
  return (
    <div className="w-120">
      <h1 className="text-center">{title}</h1>
      <ul className="mt-10 flex flex-col gap-2">
        {data.map((el: string, index: number) => (
          <li key={index} className="py-2 px-10 bg-gray-200 rounded-xl">
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PathCard({ image, title }: { image: string; title: string }) {
  return (
    <li>
      <Card size="sm">
        <CardContent>
          <img src={image} />
          <h3>{title}</h3>
        </CardContent>
      </Card>
    </li>
  );
}

function TimelineCard({
  title,
  date,
  icon,
}: {
  title: string;
  date: string;
  icon: string;
}) {
  return (
    <li>
      <Card size="sm" className="w-50">
        <CardHeader>
          <CardTitle className="text-center">{title}</CardTitle>
          <CardDescription className="text-center">{date}</CardDescription>
        </CardHeader>
        <CardContent>{icon}</CardContent>
      </Card>
    </li>
  );
}
