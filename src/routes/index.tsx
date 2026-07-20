import { createFileRoute } from '@tanstack/react-router';

import { Technologies } from '../components/technologies';

const profileImageUrl = `${import.meta.env.BASE_URL}android-chrome-512x512.png`;

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center gap-4 md:flex-row">
        <img
          width={512}
          height={512}
          src={profileImageUrl}
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
        <div className="flex flex-col justify-center gap-4 md:flex-row">
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
