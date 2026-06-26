import Countdown, { zeroPad } from "react-countdown";

const CountdownRenderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}) => {
  if (completed) {
    return <span className="text-destructive font-bold">Deal Expired!</span>;
  }

  return (
    <div className="flex gap-2 sm:gap-5 justify-between text-xl sm:text-8xl font-sans">
      <div className="flex flex-col items-center p-2 bg-gray-100 rounded sm:w-40">
        <span className="text-primary font-bold">{zeroPad(days)}</span>
        <span className="text-sm sm:text-2xl text-primary ">Days</span>
      </div>
      <div className="flex flex-col items-center p-2 bg-gray-100 rounded sm:w-40">
        <span className="text-primary font-bold">{zeroPad(hours)}</span>
        <span className="text-lg sm:text-2xl text-primary ">Hours</span>
      </div>
      <div className="flex flex-col items-center p-2 rounded sm:w-40">
        <span className="text-primary font-bold bg-gray-100 ">
          {zeroPad(minutes)}
        </span>
        <span className="text-lg sm:text-2xl text-primary ">Minutes</span>
      </div>
      <div className="flex flex-col items-center p-2 bg-gray-100 rounded sm:w-40">
        <span className="text-primary font-bold">{zeroPad(seconds)}</span>
        <span className="text-lg sm:text-2xl text-primary ">Seconds</span>
      </div>
    </div>
  );
};

export default function MyCountdown({ date }: { date: Date }) {
  return <Countdown date={date} renderer={CountdownRenderer} />;
}
