import Image from 'next/image';
import ProfileImage from '@/public/android-chrome-512x512.png';
import { Technologies } from './technologies';
export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <>
      <section className="flex flex-row items-center justify-center gap-4 min-h-screen">
        <Image
          width={512}
          height={512}
          src={ProfileImage}
          alt="ProfileImage"
          className="h-32 w-32"
        />
        <div>
          <h1 className="text-4xl font-bold">Svetch</h1>
          <p className="text-lg">Fullstack developer</p>
        </div>
      </section>
      <section className="flex flex-col">
        <Technologies />
      </section>
    </>
  );
}
