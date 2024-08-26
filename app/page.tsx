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
      <section className="flex flex-col md:flex-row items-center justify-center gap-4 min-h-screen">
        <Image
          width={512}
          height={512}
          src={ProfileImage}
          alt="ProfileImage"
          className="h-32 w-32 rounded-full"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">Román Benjámin</h1>
          <h2 className="text-2xl font-bold">alias Svetch</h2>
          <p className="text-lg">Fullstack developer</p>
        </div>
      </section>
      <section className="flex flex-col py-2">
        <Technologies />
      </section>
      <section className="py-2">
        <h2 className="text-center text-2xl">Contact</h2>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="mailto:info@svetch.com" className="text-center">
            Email
          </a>
          <a href="https://discord.com/users/788813950115381249">Discord</a>
          <a href="https://github.com/svetch">Github</a>
        </div>
      </section>
    </>
  );
}
