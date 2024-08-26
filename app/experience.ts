export type Technology = {
  type:
    | 'language'
    | 'framework'
    | 'database'
    | 'hosting'
    | 'tool'
    | 'devops'
    | 'misc';
  name: string;
  logo: string;
  link: string;
  dates: { start: Date; end: Date }[];
};

export const experience: Technology[] = [
  //#region Languages
  {
    name: 'JavaScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    dates: [{ start: new Date('2018-06-01'), end: new Date() }],
    type: 'language',
  },
  {
    name: 'TypeScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    link: 'https://www.typescriptlang.org/',
    dates: [{ start: new Date('2020-08-01'), end: new Date() }],
    type: 'language',
  },
  {
    name: 'PHP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
    link: 'https://www.php.net/',
    dates: [{ start: new Date('2018-06-01'), end: new Date('2023-01-01') }],
    type: 'language',
  },
  {
    name: 'Java',
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
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg',
    link: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    dates: [{ start: new Date('2017-06-01'), end: new Date('2022-05-01') }],
    type: 'language',
  },
/*   {
    name: 'VisualBasic',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/VB.NET_Logo.svg',
    link: 'https://docs.microsoft.com/en-us/dotnet/visual-basic/',
    dates: [{ start: new Date('2015-03-01'), end: new Date('2017-06-01') }],
    type: 'language',
  }, */
  //#endregion
  //#region Frameworks
  {
    name: 'React',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    link: 'https://reactjs.org/',
    dates: [
      { start: new Date('2020-02-01'), end: new Date('2020-08-01') },
      { start: new Date('2022-11-01'), end: new Date('2023-10-01') },
      { start: new Date('2024-01-05'), end: new Date() },
    ],
    type: 'framework',
  },
  {
    name: 'Next.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
    link: 'https://nextjs.org/',
    dates: [{ start: new Date('2024-01-05'), end: new Date() }],
    type: 'framework',
  },
  {
    name: 'Node.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    link: 'https://nodejs.org/',
    dates: [{ start: new Date('2020-07-01'), end: new Date() }],
    type: 'framework',
  },
  {
    name: 'Express.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
    link: 'https://expressjs.com/',
    dates: [{ start: new Date('2022-06-01'), end: new Date('2023-06-01') }],
    type: 'framework',
  },
  {
    name: 'Nest.js',
    logo: 'https://nestjs.com/logo-small-gradient.76616405.svg',
    link: 'https://nestjs.com/',
    dates: [{ start: new Date('2021-01-01'), end: new Date('2024-01-05') }],
    type: 'framework',
  },
  {
    name: 'Hono',
    logo: 'https://hono.dev/images/logo-small.png',
    link: 'https://hono.dev',
    dates: [{ start: new Date('2024-04-25'), end: new Date() }],
    type: 'framework',
  },
  {
    name: 'Angular',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
    link: 'https://angular.io/',
    dates: [{ start: new Date('2020-09-12'), end: new Date('2022-10-21') }],
    type: 'framework',
  },
  {
    name: 'Laravel',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg',
    link: 'https://laravel.com/',
    dates: [{ start: new Date('2020-01-01'), end: new Date('2022-10-01') }],
    type: 'framework',
  },
  {
    name: 'Unity',
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
  },

  //#endregion
  //#region Databases
  {
    name: 'MongoDB',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg',
    link: 'https://www.mongodb.com/',
    dates: [{ start: new Date('2022-06-01'), end: new Date('2023-09-01') }],
    type: 'database',
  },
  {
    name: 'PostgreSQL',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
    link: 'https://www.postgresql.org/',
    dates: [{ start: new Date('2024-01-01'), end: new Date() }],
    type: 'database',
  },
  {
    name: 'MySQL/MariaDB',
    logo: 'https://mariadb.org/wp-content/themes/twentynineteen-child/icons/logo_seal.svg',
    link: 'https://www.mysql.com/',
    dates: [{ start: new Date('2017-06-01'), end: new Date() }],
    type: 'database',
  },
  {
    name: 'Redis',
    logo: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg',
    link: 'https://redis.io/',
    dates: [{ start: new Date('2020-06-01'), end: new Date('2024-03-25') }],
    type: 'database',
  },
  //#endregion
  //#region Hosting
  //#endregion
  //#region Tools
  {
    name: 'Electron.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_Software_Framework_Logo.svg',
    link: 'https://www.electronjs.org/',
    dates: [{ start: new Date('2020-04-15'), end: new Date() }],
    type: 'tool',
  },
  {
    name: 'NX Workspace',
    logo: 'https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F2995%2F95998d2a-00f2-4e8e-9ebc-0b06de97c37f.png',
    link: 'https://nx.dev/',
    dates: [{ start: new Date('2021-12-01'), end: new Date() }],
    type: 'tool',
  },
  {
    name: 'TypeORM',
    logo: 'https://github.com/typeorm/typeorm/raw/master/resources/logo_big.png',
    link: 'https://typeorm.io/',
    dates: [{ start: new Date('2021-05-01'), end: new Date('2023-01-01') }],
    type: 'tool',
  },
  {
    name: 'Gradle',
    logo: 'https://avatars.githubusercontent.com/u/124156?s=200&v=4',
    link: 'https://gradle.org/',
    dates: [{ start: new Date('2024-01-15'), end: new Date('2024-07-01') }],
    type: 'tool',
  },
  {
    name: 'Maven',
    logo: 'https://maven.apache.org/images/maven-logo-black-on-white.png',
    link: 'https://maven.apache.org/',
    dates: [{ start: new Date('2023-09-01'), end: new Date('2024-07-01') }],
    type: 'tool',
  },
  {
    name: 'Prisma',
    logo: 'https://github.com/prisma/presskit/raw/main/Assets/Prisma-IndigoLogo.png',
    link: 'https://www.prisma.io/',
    dates: [{ start: new Date('2022-01-01'), end: new Date() }],
    type: 'tool',
  },
  {
    name: 'Drizzle',
    logo: 'https://github.com/drizzle-team/drizzle-orm/raw/main/misc/readme/logo-github-sq-dark.svg#gh-dark-mode-only',
    link: 'https://orm.drizzle.team/',
    dates: [{ start: new Date('2024-03-21'), end: new Date() }],
    type: 'tool',
  },
  //#endregion
  //#region misc
  {
    name: 'Linux',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg',
    link: 'https://www.linux.org/',
    dates: [{ start: new Date('2021-02-01'), end: new Date() }],
    type: 'misc',
  },
  {
    name: 'Git',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
    link: 'https://git-scm.com/',
    dates: [{ start: new Date('2018-06-01'), end: new Date() }],
    type: 'tool',
  },
  {
    name: 'GitHub',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    link: 'https://github.com',
    dates: [{ start: new Date('2018-06-01'), end: new Date() }],
    type: 'tool',
  },
  {
    name: 'Jira',
    logo: 'https://support.totaladmin.hu/images/atlassian-jira-logo-large.png',
    link: 'https://www.atlassian.com/software/jira',
    dates: [{ start: new Date('2023-03-01'), end: new Date('2024-03-25') }],
    type: 'tool',
  },
  {
    name: 'Trello',
    logo: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Trello_logo.svg',
    link: 'https://trello.com/',
    dates: [{ start: new Date('2021-03-25'), end: new Date() }],
    type: 'tool',
  },
  {
    name: 'Cloudflare',
    logo: 'https://www.logo.wine/a/logo/Cloudflare/Cloudflare-Logo.wine.svg',
    link: 'https://www.cloudflare.com/',
    dates: [{ start: new Date('2018-06-12'), end: new Date() }],
    type: 'hosting',
  },
  {
    name: 'Bootstrap',
    logo: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
    link: 'https://getbootstrap.com/',
    dates: [{ start: new Date('2019-06-01'), end: new Date('2022-08-01') }],
    type: 'misc',
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-light.svg',
    link: 'https://tailwindcss.com/',
    dates: [{ start: new Date('2023-02-01'), end: new Date() }],
    type: 'misc',
  },
  {
    name: 'CSS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    dates: [{ start: new Date('2018-06-01'), end: new Date() }],
    type: 'misc',
  },
  {
    name: 'HTML',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    dates: [{ start: new Date('2018-06-01'), end: new Date() }],
    type: 'misc',
  },
  {
    name: 'Minecraft Development',
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
  //#endregion
  //#region DevOps
  {
    name: 'Docker',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png',
    link: 'https://www.docker.com/',
    dates: [{ start: new Date('2022-11-01'), end: new Date() }],
    type: 'devops',
  },
  {
    name: 'Kubernetes',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg',
    link: 'https://kubernetes.io/',
    dates: [{ start: new Date('2023-10-01'), end: new Date('2024-05-01') }],
    type: 'devops',
  },
  {
    name: 'Teleport',
    logo: 'https://avatars.githubusercontent.com/u/10781132?s=48&v=4',
    link: 'https://goteleport.com/',
    dates: [{ start: new Date('2023-11-01'), end: new Date() }],
    type: 'devops',
  },
  {
    name: 'Authentik',
    logo: 'https://camo.githubusercontent.com/f068956b02827bfce3b652ac3cbbe563ca05294aa149f73d1049059624445b37/68747470733a2f2f676f61757468656e74696b2e696f2f696d672f69636f6e5f746f705f6272616e645f636f6c6f75722e737667',
    link: 'https://authentik.com/',
    dates: [{ start: new Date('2023-11-01'), end: new Date() }],
    type: 'devops',
  },
  {
    name: 'Helm',
    logo: 'https://helm.sh/img/helm.svg',
    link: 'https://helm.sh/',
    dates: [{ start: new Date('2023-10-01'), end: new Date('2024-03-01') }],
    type: 'devops',
  },
  {
    name: 'Prometheus',
    logo: 'https://github.com/prometheus/prometheus/raw/main/documentation/images/prometheus-logo.svg',
    link: 'https://prometheus.io/',
    dates: [{ start: new Date('2023-01-01'), end: new Date('2024-05-01') }],
    type: 'devops',
  },
  {
    name: 'Grafana',
    logo: 'https://github.com/grafana/grafana/raw/main/docs/logo-horizontal-dark.png#gh-dark-mode-only',
    link: 'https://grafana.com/',
    dates: [{ start: new Date('2023-01-01'), end: new Date('2024-05-01') }],
    type: 'devops',
  },
  //#endregion
];
