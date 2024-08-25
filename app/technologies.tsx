/*

# Hosting
Firebase
Vercel
Heroku
Self Hosted(Linux)
Cloudflare
*/
'use client';

type Technology = {
  type:
    | 'language'
    | 'framework'
    | 'database'
    | 'hosting'
    | 'tool'
    | 'devops'
    | 'misc';
  name: string;
  tags: string[];
  logo: string;
  link: string;
  dependencies?: string[];
  dates: { start: Date; end: Date }[];
};

const technologies: Technology[] = [
  //#region Languages
  {
    name: 'JavaScript',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    dates: [{ start: new Date('2018-06-01'), end: new Date() }],
    type: 'language',
  },
  {
    name: 'TypeScript',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    link: 'https://www.typescriptlang.org/',
    dates: [{ start: new Date('2020-08-01'), end: new Date() }],
    type: 'language',
    dependencies: ['JavaScript'],
  },
  {
    name: 'PHP',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
    link: 'https://www.php.net/',
    dates: [{ start: new Date('2018-06-01'), end: new Date('2023-01-01') }],
    type: 'language',
  },
  {
    name: 'Java',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
    link: 'https://www.java.com/',
    dates: [
      { start: new Date('2021-06-01'), end: new Date('2022-10-01') },
      {
        start: new Date('2023-09-01'),
        end: new Date('2024-04-01'),
      },
    ],
    type: 'language',
  },
  {
    name: 'C#',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg',
    link: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    dates: [{ start: new Date('2017-06-01'), end: new Date('2022-05-01') }],
    type: 'language',
  },
  //#endregion
  //#region Frameworks
  {
    name: 'React',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    link: 'https://reactjs.org/',
    dates: [
      { start: new Date('2020-02-01'), end: new Date('2020-08-01') },
      { start: new Date('2022-11-01'), end: new Date('2023-10-01') },
      { start: new Date('2024-01-05'), end: new Date() },
    ],
    type: 'framework',
    dependencies: ['JavaScript'],
  },
  {
    name: 'Next.js',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
    link: 'https://nextjs.org/',
    dates: [{ start: new Date('2024-01-05'), end: new Date() }],
    type: 'framework',
    dependencies: ['React', 'TypeScript'],
  },
  {
    name: 'Node.js',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    link: 'https://nodejs.org/',
    dates: [{ start: new Date('2020-07-01'), end: new Date() }],
    type: 'framework',
    dependencies: ['JavaScript'],
  },
  {
    name: 'Electron.js',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_Software_Framework_Logo.svg',
    link: 'https://www.electronjs.org/',
    dates: [{ start: new Date('2020-04-15'), end: new Date() }],
    type: 'tool',
  },
  {
    name: 'Express.js',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
    link: 'https://expressjs.com/',
    dates: [{ start: new Date('2022-06-01'), end: new Date('2023-06-01') }],
    type: 'framework',
  },
  {
    name: 'Nest.js',
    tags: [],
    logo: 'https://nestjs.com/logo-small-gradient.76616405.svg',
    link: 'https://nestjs.com/',
    dates: [{ start: new Date('2021-01-01'), end: new Date('2024-01-05') }],
    type: 'framework',
    dependencies: ['Node.js', 'TypeScript'],
  },
  {
    name: 'Hono',
    tags: [],
    logo: 'https://hono.dev/images/logo-small.png',
    link: 'https://hono.dev',
    dates: [{ start: new Date('2024-04-25'), end: new Date() }],
    type: 'framework',
    dependencies: ['JavaScript'],
  },
  {
    name: 'Angular',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
    link: 'https://angular.io/',
    dates: [{ start: new Date('2020-09-12'), end: new Date('2022-10-21') }],
    type: 'framework',
    dependencies: ['TypeScript'],
  },
  {
    name: 'NX Workspace',
    tags: [],
    logo: 'https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F2995%2F95998d2a-00f2-4e8e-9ebc-0b06de97c37f.png',
    link: 'https://nx.dev/',
    dates: [{ start: new Date('2021-12-01'), end: new Date() }],
    type: 'tool',
  },
  {
    name: 'Prisma',
    tags: [],
    logo: 'https://github.com/prisma/presskit/raw/main/Assets/Prisma-IndigoLogo.png',
    link: 'https://www.prisma.io/',
    dates: [{ start: new Date('2022-01-01'), end: new Date() }],
    type: 'tool',
  },
  {
    name: 'TypeORM',
    tags: [],
    logo: 'https://github.com/typeorm/typeorm/raw/master/resources/logo_big.png',
    link: 'https://typeorm.io/',
    dates: [{ start: new Date('2021-05-01'), end: new Date('2023-01-01') }],
    type: 'tool',
  },
  {
    name: 'Drizzle',
    tags: [],
    logo: 'https://github.com/drizzle-team/drizzle-orm/raw/main/misc/readme/logo-github-sq-dark.svg#gh-dark-mode-only',
    link: 'https://orm.drizzle.team/',
    dates: [{ start: new Date('2024-03-21'), end: new Date() }],
    type: 'tool',
  },
  {
    name: 'Laravel',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg',
    link: 'https://laravel.com/',
    dates: [{ start: new Date('2020-01-01'), end: new Date('2022-10-01') }],
    type: 'framework',
    dependencies: ['PHP'],
  },
  {
    name: 'Unity',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Unity_2021.svg/1199px-Unity_2021.svg.png',
    link: 'https://unity.com/',
    dates: [
      { start: new Date('2019-08-05'), end: new Date('2020-05-01') },
      {
        start: new Date('2021-03-05'),
        end: new Date('2022-05-01'),
      },
      {
        start: new Date('2023-03-05'),
        end: new Date('2023-10-01'),
      },
    ],
    type: 'framework',
    dependencies: ['C#'],
  },
  {
    name: 'Gradle',
    tags: [],
    logo: 'https://avatars.githubusercontent.com/u/124156?s=200&v=4',
    link: 'https://gradle.org/',
    dates: [{ start: new Date('2024-01-15'), end: new Date('2024-07-01') }],
    type: 'tool',
  },
  {
    name: 'Maven',
    tags: [],
    logo: 'https://maven.apache.org/images/maven-logo-black-on-white.png',
    link: 'https://maven.apache.org/',
    dates: [{ start: new Date('2023-09-01'), end: new Date('2024-07-01') }],
    type: 'tool',
  },
  {
    name: 'Minecraft Development',
    tags: [],
    logo: 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/logos/Global-Header_MCCB-Logo_300x51.svg',
    link: 'https://www.minecraft.net/',
    dates: [
      { start: new Date('2020-06-01'), end: new Date('2022-09-01') },
      {
        start: new Date('2023-09-01'),
        end: new Date('2024-04-01'),
      },
    ],
    type: 'misc',
  },
  {
    name: 'Bootstrap',
    tags: [],
    logo: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
    link: 'https://getbootstrap.com/',
    dates: [{ start: new Date('2019-06-01'), end: new Date('2022-08-01') }],
    type: 'misc',
  },
  {
    name: 'Tailwind CSS',
    tags: [],
    logo: 'https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-light.svg',
    link: 'https://tailwindcss.com/',
    dates: [{ start: new Date('2023-02-01'), end: new Date() }],
    type: 'misc',
  },
  {
    name: 'CSS',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    dates: [{ start: new Date('2018-06-01'), end: new Date() }],
    type: 'misc',
  },
  {
    name: 'HTML',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    dates: [{ start: new Date('2018-06-01'), end: new Date() }],
    type: 'misc',
  },
  //#endregion
  //#region Databases
  {
    name: 'MongoDB',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg',
    link: 'https://www.mongodb.com/',
    dates: [{ start: new Date('2022-06-01'), end: new Date('2023-09-01') }],
    type: 'database',
  },
  {
    name: 'PostgreSQL',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
    link: 'https://www.postgresql.org/',
    dates: [{ start: new Date('2024-01-01'), end: new Date() }],
    type: 'database',
  },
  {
    name: 'MySQL/MariaDB',
    tags: [],
    logo: 'https://mariadb.org/wp-content/themes/twentynineteen-child/icons/logo_seal.svg',
    link: 'https://www.mysql.com/',
    dates: [{ start: new Date('2017-06-01'), end: new Date() }],
    type: 'database',
  },
  {
    name: 'Redis',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg',
    link: 'https://redis.io/',
    dates: [{ start: new Date('2020-06-01'), end: new Date('2024-03-25') }],
    type: 'database',
  },
  //#endregion
  //#region misc
  {
    name: 'Linux',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg',
    link: 'https://www.linux.org/',
    dates: [{ start: new Date('2021-02-01'), end: new Date() }],
    type: 'misc',
  },
  {
    name: 'Git',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
    link: 'https://git-scm.com/',
    dates: [{ start: new Date('2018-06-01'), end: new Date() }],
    type: 'tool',
  },
  {
    name: 'GitHub',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    link: 'https://github.com',
    dates: [{ start: new Date('2018-06-01'), end: new Date() }],
    type: 'tool',
  },
  {
    name: 'Jira',
    tags: [],
    logo: 'https://support.totaladmin.hu/images/atlassian-jira-logo-large.png',
    link: 'https://www.atlassian.com/software/jira',
    dates: [{ start: new Date('2023-03-01'), end: new Date('2024-03-25') }],
    type: 'tool',
  },
  {
    name: 'Trello',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Trello_logo.svg',
    link: 'https://trello.com/',
    dates: [{ start: new Date('2021-03-25'), end: new Date() }],
    type: 'tool',
  },
  {
    name: 'Cloudflare',
    tags: [],
    logo: 'https://www.logo.wine/a/logo/Cloudflare/Cloudflare-Logo.wine.svg',
    link: 'https://www.cloudflare.com/',
    dates: [{ start: new Date('2018-06-12'), end: new Date() }],
    type: 'hosting',
  },
  //#endregion
  //#region DevOps
  {
    name: 'Docker',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png',
    link: 'https://www.docker.com/',
    dates: [{ start: new Date('2022-11-01'), end: new Date() }],
    type: 'devops',
  },
  {
    name: 'Kubernetes',
    tags: [],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg',
    link: 'https://kubernetes.io/',
    dates: [{ start: new Date('2023-10-01'), end: new Date('2024-05-01') }],
    type: 'devops',
  },
  {
    name: 'Teleport',
    tags: [],
    logo: 'https://avatars.githubusercontent.com/u/10781132?s=48&v=4',
    link: 'https://goteleport.com/',
    dates: [{ start: new Date('2023-11-01'), end: new Date() }],
    type: 'devops',
  },
  {
    name: 'Authentik',
    tags: [],
    logo: 'https://camo.githubusercontent.com/f068956b02827bfce3b652ac3cbbe563ca05294aa149f73d1049059624445b37/68747470733a2f2f676f61757468656e74696b2e696f2f696d672f69636f6e5f746f705f6272616e645f636f6c6f75722e737667',
    link: 'https://authentik.com/',
    dates: [{ start: new Date('2023-11-01'), end: new Date() }],
    type: 'devops',
  },
  {
    name: 'Helm',
    tags: [],
    logo: 'https://helm.sh/img/helm.svg',
    link: 'https://helm.sh/',
    dates: [{ start: new Date('2023-10-01'), end: new Date('2024-03-01') }],
    type: 'devops',
  },
  {
    name: 'Prometheus',
    tags: [],
    logo: 'https://github.com/prometheus/prometheus/raw/main/documentation/images/prometheus-logo.svg',
    link: 'https://prometheus.io/',
    dates: [{ start: new Date('2023-01-01'), end: new Date('2024-05-01') }],
    type: 'devops',
  },
  {
    name: 'Grafana',
    tags: [],
    logo: 'https://github.com/grafana/grafana/raw/main/docs/logo-horizontal-dark.png#gh-dark-mode-only',
    link: 'https://grafana.com/',
    dates: [{ start: new Date('2023-01-01'), end: new Date('2024-05-01') }],
    type: 'devops',
  },
  //#endregion
];

export function Technologies() {
  return (
    <>
      <Calendar technologies={technologies} />
      <div>
        {technologies.map((technology) => {
          return (
            <div key={technology.name}>
              <h1>{technology.name}</h1>
              <ul>
                {technology.tags.map((tag, i) => {
                  return <li key={i}>{tag}</li>;
                })}
              </ul>
              <img
                src={technology.logo}
                alt={technology.name}
                className="h-10"
              />

              <a href={technology.link}>Learn more</a>
            </div>
          );
        })}
      </div>
    </>
  );
}

function Calendar({ technologies }: { technologies: Technology[] }) {
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
  const maxDate = new Date(extremes.end);
  const minDate = new Date(extremes.start);
  minDate.setFullYear(minDate.getFullYear() - 1);
  maxDate.setFullYear(maxDate.getFullYear() + 1);
  const fullTimeRange = maxDate.getTime() - minDate.getTime();
  return (
    <div>
      {technologies
        /*         .filter((v, i) => i <= 10) */
        .map((technology, tId) => {
          return (
            <div key={technology.name} className="w-full">
              <div className="flex flex-row w-full justify-center px-10">
                {Array.from({
                  length: maxDate.getFullYear() - minDate.getFullYear() + 1,
                }).map((_, i) => {
                  const year = minDate.getFullYear() + i;
                  return (
                    <div key={year} className="grow text-center">
                      {tId == 0 && year}
                    </div>
                  );
                })}
              </div>
              <div className="px-10 relative mb-10">
                {technology.dates.map(({ start, end }, i) => {
                  const startPercentage =
                    ((start.getTime() - minDate.getTime()) / fullTimeRange) *
                    100;
                  const endPercentage =
                    ((maxDate.getTime() - end.getTime()) / fullTimeRange) * 100;
                  return (
                    <span
                      key={i}
                      style={{
                        left: `${startPercentage}%`,
                        right: `${endPercentage}%`,
                      }}
                      className="absolute bg-blue-500 px-1 h-6 rounded-md text-center overflow-hidden whitespace-nowrap text-ellipsis"
                    >
                      {technology.name}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
}
