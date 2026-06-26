import { MainLayout } from "@/layout";
import { LinkButton } from "@/components/linkButton";
import Countdown from "@/components/countdown";
import { HeroBackground } from "@/components/heroBackground";
import { Background } from "@/components/background";
import { FileInput, FileSearchCorner, Megaphone, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icon } from "@/components/icon";
import EventsLogo from "@/assets/events-logo.png";
import Rabbit from "@/assets/rabbit.svg";
import WhiteCloud from "@/assets/background/white-cloud.svg";
import { Link } from "react-router-dom";

const joinList = [
  {
    icon: "lamp",
    content: "Mengembangkan Kreativitas dan Inovasi",
  },
  {
    icon: "global",
    content: "Membangun Networking yang Luas",
  },
  {
    icon: "trophy",
    content: "Prestasi dan Pengalaman yang Menarik",
  },
  {
    icon: "handshake",
    content: "Belajar Kolaborasi dan Kerja Sama Tim",
  },
  {
    icon: "money-off",
    content: "Gratis Pendaftaran dengan Hadiah yang Menarik",
  },
];

const whoCanJoin = [
  "Siswa SMP/MTs sederajat DIY dan Jawa Tengah",
  "Kelas X SMAN 1 Bantul",
  "Individual/Tim",
];

const stageData = [
  {
    icon: "paper",
    position: "left",
    title: "Essay Competition",
    content:
      "Kompetisi menulis gagasan visioner dan solusi inovatif berbasis teknologi untuk menyelesaikan masalah nyata di sekitar kita yang berfokus pada pengembangan kemampuan riset kritis dan problem solving.",
  },
  {
    icon: "chart",
    position: "right",
    title: "Infographic Competition",
    content:
      "Kompetisi desain visual untuk mengubah data tentang isu lingkungan menjadi konten yang inovatif, menarik, dan mudah dipahami masyarakat. ",
  },
  {
    icon: "debate",
    position: "left",
    title: "Cerdas Cermat Ilmiah",
    content:
      "Cerdas Cermat Ilmiah (CCI) berfokus pada kemampuan berpikir analitis  secara cepat dan tepat dalam bidang Biologi, Kimia, Fisika, literasi  penelitian sekaligus melatih kerja sama tim.",
  },
];

const pathCard = [
  {
    image:
      "https://www.nesco.id/assets/path/Ilustrasi%20Paper%20Competition.svg",
    title: "Paper Competition",
    link: "competition/paper",
  },
  {
    image:
      "https://www.nesco.id/assets/path/Ilustrasi%20Paper%20Competition.svg",
    title: "Esai Competition",
    link: "competition/esai",
  },
  {
    image:
      "https://www.nesco.id/assets/path/Ilustrasi%20Paper%20Competition.svg",
    title: "CCI Competition",
    link: "competition/cci",
  },
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

const FaQ = [
  {
    question: "apaya ",
    answer: "jawaban",
  },
  {
    question: "apaya ",
    answer: "jawaban",
  },
  {
    question: "apaya ",
    answer: "jawaban",
  },
  {
    question: "apaya ",
    answer: "jawaban",
  },
  {
    question: "apaya ",
    answer: "jawaban",
  },
];

export function Home() {
  return (
    <MainLayout className="">
      <section
        id="hero"
        className="relative pt-40 h-screen w-full bg-background-primary overflow-hidden"
      >
        <HeroBackground />
        <div className="container relative justify-between z-10">
          <div className="">
            <h3 className="">Sabayouth Research & Science Club</h3>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-center mt-2">
              Pesta Ilmiah 2026
            </h1>
            <LinkButton
              href="/register"
              title="Join the Stage"
              className="mt-12"
            />
          </div>
          <img src={EventsLogo} className="w-84 h-84" />
        </div>
      </section>
      <section
        id="overview"
        className="sm:pt-10 flex justify-center w-full bg-navy-primary"
      >
        <div className="text-white-primary">
          <h2 className="">What is Pesta Ilmiah 2026?</h2>
          <p className="mt-4">
            Pesta Ilmiah 2026 merupakan ajang kompetisi dan edukasi yang
            diselenggarakan oleh Sabayouth Research & Science Club (SRSC) SMA
            Negeri 1 Bantul dengan tema “Shaping What’s the Next”. Event ini
            menghadirkan tiga kategori lomba, yaitu Esai, Infografis, dan Cerdas
            Cermat Ilmiah (CCI). Melalui ajang ini, generasi muda ditantang
            menyalurkan kreativitas, ketangkasan wawasan, dan solusi cerdas demi
            dunia yang berkelanjutan.
          </p>
        </div>
      </section>
      <section id="why-join" className="bg-navy-primary">
        <div className="flex gap-36">
          <img src={Rabbit} className=" h-200 " />
          <div className="py-16 ">
            <h2 className="text-white-primary">Why You Should Join?</h2>
            <ul className="flex flex-col gap-4 py-6">
              {joinList.map((list) => (
                <li
                  key={list.icon}
                  className="flex gap-4 text-xl text-white-primary"
                >
                  <Icon name={list.icon} />
                  {list.content}
                </li>
              ))}
            </ul>
            <h2 className="text-white-primary mt-8">Who Can Join?</h2>
            <ul className="flex flex-col gap-4 py-6 list-disc list-inside">
              {whoCanJoin.map((el, index) => (
                <li key={index} className="text-xl text-white-primary">
                  {el}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section id="stage" className="relative bg-cloud px-48 pb-48">
        <img src={WhiteCloud} className="absolute w-full -top-72 left-0 z-1" />
        <div className="w-full py-20"></div>
        <Icon
          name="carrot"
          className="absolute -left-40 -bottom-0 w-164 h-164"
        />
        <Background
          name="gradient-cream-cloud"
          className="absolute left-0 bottom-0 w-full z-10"
        />
        <div className="relative mx-auto bg-linear-to-b from-navy-primary to-white-primary/10 shadow-xl p-12 rounded-4xl z-10">
          <h2 className="text-center text-white-primary">Own Your Stage</h2>
          <ul className="flex flex-col gap-4 mt-12">
            {stageData.map((el, index) => (
              <li key={index}>
                <StageCard
                  icon={el.icon}
                  title={el.title}
                  content={el.content}
                  position={el.position}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="" className="w-full min-h-screen pt-20 bg-cloud">
        <div className="container ">
          <h2 className="text-center">Timeline</h2>
          <div className="w-full flex flex-col gap-10 mt-20 px-50">
            <ul className="w-full flex max-sm:flex-col sm:justify-start gap-10 sm:gap-70">
              <TimelineCard title="timeline-1" date="24 mei 2025">
                <FileInput size={50} />
              </TimelineCard>
              <TimelineCard title="timeline-1" date="24 mei 2025">
                <FileSearchCorner size={50} />
              </TimelineCard>
            </ul>
            <hr className="max-sm:hidden bg-primary w-full" />
            <ul className="flex max-sm:flex-col sm:justify-end gap-10 sm:gap-70 ">
              <TimelineCard title="timeline-1" date="24 mei 2025">
                <Megaphone size={50} />
              </TimelineCard>
              <TimelineCard title="timeline-1" date="24 mei 2025">
                <Trophy size={50} />
              </TimelineCard>
            </ul>
          </div>
        </div>
      </section>
      <section id="countdown" className="w-full h-screen pt-10 bg-sage">
        <h2 className="text-center">Events start in</h2>
        <div className="flex justify-center">
          <Countdown date={date} />
        </div>
      </section>
      <section
        id="faq"
        className="w-full min-h-screen flex flex-col items-center pt-10 bg-sage"
      >
        <h2 className="text-center">Frequently Asked Question</h2>
        <Card className="hover:scale-100 w-full sm:w-200">
          <ul className="mx-5">
            {FaQ.map((el, index) => (
              <li className="">
                <FaQCard
                  key={index}
                  question={el.question}
                  answer={el.answer}
                />
              </li>
            ))}
          </ul>
        </Card>
      </section>
      <section
        id="sponsor"
        className="flex flex-col items-center py-30 bg-sage"
      >
        <h2 className="text-center">Sponsored By</h2>
        <Card className="sm:w-200 pointer-events-none">
          <CardContent>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </CardContent>
        </Card>
      </section>
      <section id="secure" className="pt-50 pb-30 bg-sage">
        <h2>Secure your opportunity now</h2>
        <LinkButton href="/register" title="Register Now" />
      </section>
    </MainLayout>
  );
}

function StageCard({
  icon,
  title,
  content,
  position = "left",
}: {
  icon: string;
  title: string;
  content: string;
  position?: string;
}) {
  return (
    <Card className="w-full bg-linear-to-b from-blue-primary from-25% via-blue-primary via-70% to-cloud/60 shadow-md">
      <CardContent className="flex gap-8">
        {position === "left" && (
          <Icon
            name={icon}
            className="w-36 h-36 p-2 bg-white-primary/20 backdrop-blur-sm shadow-[0px_0px_8px_2px_#504e7660] rounded-xl "
          />
        )}
        <div>
          <h3 className="text-navy-primary">{title}</h3>
          <p className="text-navy-primary mt-2">{content}</p>
        </div>
        {position === "right" && (
          <Icon
            name={icon}
            className="w-36 h-36 p-2 bg-white-primary/20 backdrop-blur-sm shadow-[0px_0px_8px_2px_#504e7660] rounded-xl "
          />
        )}
      </CardContent>
    </Card>
  );
}

function PathCard({
  image,
  title,
  link,
}: {
  image: string;
  title: string;
  link: string;
}) {
  return (
    <li>
      <Link to={link}>
        <Card size="sm">
          <CardContent>
            <img src={image} />
            <h3>{title}</h3>
          </CardContent>
        </Card>
      </Link>
    </li>
  );
}

function TimelineCard({
  title,
  date,
  children,
  className,
  ...props
}: {
  title: string;
  date: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <li {...props}>
      <Card size="sm" className="w-50">
        <CardHeader>
          <CardTitle className="text-center">{title}</CardTitle>
          <CardDescription className="text-center">{date}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">{children}</CardContent>
      </Card>
    </li>
  );
}

function FaQCard({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="">
      <Button className="w-full cursor-pointer">{question}</Button>
      <p className="w-full">{answer}</p>
    </div>
  );
}
