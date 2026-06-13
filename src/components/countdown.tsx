import Countdown, { zeroPad } from "react-countdown";

// Custom design for the clock look
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
    return <span className="text-red-500 font-bold">Deal Expired!</span>;
  }

  return (
    <div className="flex gap-4 font-mono text-2xl">
      <div className="flex flex-col items-center p-2 bg-gray-800 text-white rounded">
        <span>{zeroPad(days)}</span>
        <span className="text-xs text-gray-400">Days</span>
      </div>
      <div className="flex flex-col items-center p-2 bg-gray-800 text-white rounded">
        <span>{zeroPad(hours)}</span>
        <span className="text-xs text-gray-400">Hours</span>
      </div>
      <div className="flex flex-col items-center p-2 bg-gray-800 text-white rounded">
        <span>{zeroPad(minutes)}</span>
        <span className="text-xs text-gray-400">Mins</span>
      </div>
      <div className="flex flex-col items-center p-2 bg-gray-500 text-white rounded">
        <span>{zeroPad(seconds)}</span>
        <span className="text-xs text-white">Secs</span>
      </div>
    </div>
  );
};

export default function MyCountdown({ date }: { date: Date }) {
  // Set target date for 5 days from now

  return <Countdown date={date} renderer={CountdownRenderer} />;
}
