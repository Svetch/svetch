'use client';

import { Experience, experience, Technology } from './experience';
export function Technologies() {
  return (
    <>
      <Calendar experience={experience} />
    </>
  );
}

function Calendar({ experience }: { experience: Experience }) {
  const { technologies } = experience;
  const extremes = technologies.reduce(
    (acc, cur) => {
      const tMax = cur.dates.reduce(
        (acc, cur) => (cur.end > acc ? cur.end : acc),
        cur.dates[0].end
      );

      const tMin = cur.dates.reduce(
        (acc, cur) => (cur.start < acc ? cur.start : acc),
        cur.dates[0].start
      );

      return {
        end: tMax > acc.end ? tMax : acc.end,
        start: tMin < acc.start ? tMin : acc.start,
      };
    },
    {
      start: technologies[0].dates[0].start,
      end: technologies[0].dates[0].end,
    }
  );
  const maxDate = new Date(extremes.end.getFullYear(), 11, 31);
  const minDate = new Date(extremes.start.getFullYear(), 0, 1);

  const fullTimeRange = maxDate.getTime() - minDate.getTime();
  return (
    <div className="mx-5 flex flex-col gap-2">
      <div className="flex flex-row w-full justify-center">
        {Array.from({
          length: maxDate.getFullYear() - minDate.getFullYear() + 1,
        }).map((_, i) => {
          const year = minDate.getFullYear() + i;
          return (
            <div key={year} className="grow text-center border-2 border-red-50">
              {year}
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-col gap-2 relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-row w-full justify-between z-30">
          {Array.from({
            length: maxDate.getFullYear() - minDate.getFullYear() + 2,
          }).map((_, i) => {
            const year = minDate.getFullYear() + i;
            return (
              <div
                key={year}
                className="bg-white/10 w-1 first:bg-transparent last:bg-transparent z-30"
              ></div>
            );
          })}
        </div>
        {technologies.map((technology, tId) => (
          <TechnologyEntry
            key={technology.name}
            fullTimeRange={fullTimeRange}
            maxDate={maxDate}
            minDate={minDate}
            technology={technology}
          />
        ))}
      </div>
    </div>
  );
}

function TechnologyEntry({
  fullTimeRange,
  maxDate,
  minDate,
  technology,
}: {
  technology: Technology;
  minDate: Date;
  maxDate: Date;
  fullTimeRange: number;
}) {
  return (
    <div className="relative z-10">
      <div className="bg-white/10 py-1 px-2 rounded-md">
        {technology.name}{' '}
        {(technology.summary || technology.summary === undefined) &&
          `(${getStringRange(technology.dates)})`}
      </div>
      {technology.dates.map(({ start, end }, i) => {
        const startDifference = Math.abs(start.getTime() - minDate.getTime());
        const startPercentage = (startDifference / fullTimeRange) * 100;

        const endDifference = Math.abs(maxDate.getTime() - end.getTime());
        const endPercentage = (endDifference / fullTimeRange) * 100;
        return (
          <span
            key={i}
            style={{
              left: `${startPercentage}%`,
              right: `${endPercentage}%`,
            }}
            className="absolute top-0 bg-blue-500/40 h-full rounded-md group z-50"
          >
            <span className="w-full h-full hidden md:block text-center overflow-hidden whitespace-nowrap text-ellipsis py-1">
              {technology.name}
            </span>
            <span className="hidden group-hover:absolute z-50 -right-20 top-0 w-20 pl-1 ">
              ({getStringRange([{ start, end }])})
            </span>
          </span>
        );
      })}
    </div>
  );
}

function getStringRange(dates: { start: Date; end: Date }[]) {
  const { months, years } = getDatesRange(dates);
  const m = months > 0 ? `${months}m` : '';
  const y = years > 0 ? `${years}yr${m.length > 0 ? ' ' : ''}` : '';
  return `${y}${m}`;
}
function getDateRange(start: Date, end: Date) {
  const range = end.getTime() - start.getTime();
  const years = Math.floor(range / YEAR);
  const months = Math.floor((range % YEAR) / MONTH);
  const days = Math.floor(((range % YEAR) % MONTH) / DAY);
  return { years, months, days };
}
function getDatesRange(dates: { start: Date; end: Date }[]) {
  const range = dates.reduce(
    (acc, cur) => {
      const { days, months, years } = getDateRange(cur.start, cur.end);
      return {
        years: acc.years + years,
        months: acc.months + months,
        days: acc.days + days,
      };
    },
    { years: 0, months: 0, days: 0 }
  );
  return range;
}

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const MONTH = 30 * DAY;
const YEAR = 365 * DAY;
