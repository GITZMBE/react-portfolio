import { getProjects } from "@/actions";
import { PageContainer, Text } from "@/components";
import { IProject } from "@/models";
import React, { ComponentPropsWithoutRef } from "react";

type IProps = ComponentPropsWithoutRef<"div">;

export const ProjectsSection = async ({ ...props }: IProps) => {
  // const data: IProject[] = await getProjects();

  const data: IProject[] = [
    {
        "title": "Uber Eats",
        "slug": "uber-eats",
        "description": "This is my first project in app development with the goal of learning about React Native and Expo while using Android Studio to do so.",
        "githubLink": null,
        "images": [
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a85oer0ack07l510smjez0",
                "width": 340,
                "height": 734
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a85oeg098f07ml6gnykhxu",
                "width": 342,
                "height": 730
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a85oe50acc07l5p0mb2069",
                "width": 342,
                "height": 729
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a85oeo08t507l13ozwd5a5",
                "width": 342,
                "height": 730
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a85oea098907ml9x3sjboq",
                "width": 340,
                "height": 733
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a85oeb08t007l1acinz7sc",
                "width": 342,
                "height": 730
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a85odv0ac007l5cagscyav",
                "width": 339,
                "height": 735
            }
        ],
        "skills": [
            {
                "title": "Android Studio",
                "slug": "android-studio",
                "icon": null,
                "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Android_Studio_icon_%282023%29.svg"
            },
            {
                "title": "React Native",
                "slug": "reactnative",
                "icon": null,
                "iconUrl": "https://cdn.worldvectorlogo.com/logos/react-native-1.svg"
            },
            {
                "title": "Expo",
                "slug": "expo",
                "icon": null,
                "iconUrl": "https://cdn.icon-icons.com/icons2/2389/PNG/512/expo_logo_icon_145293.png"
            },
            {
                "title": "JavaScript",
                "slug": "javascript",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            }
        ],
        "hostingLink": null
    },
    {
        "title": "Uber",
        "slug": "uber",
        "description": "This is my second project in app development with the goal of learning about React Native and Expo while using Android Studio to do so. I had focus on the transportational side of Uber where you can book a driver to drive you from your location to your final destination.",
        "githubLink": null,
        "images": [
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8brlk0bvz07l5phic3ujk",
                "width": 341,
                "height": 731
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8brkx0akh07mlhqp5ukg7",
                "width": 342,
                "height": 730
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8brl00bvu07l52pj1cjii",
                "width": 340,
                "height": 734
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8brkx0akf07mlm0nu3pqn",
                "width": 342,
                "height": 730
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8brko0bvp07l58wby6bs2",
                "width": 341,
                "height": 731
            }
        ],
        "skills": [
            {
                "title": "Android Studio",
                "slug": "android-studio",
                "icon": null,
                "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Android_Studio_icon_%282023%29.svg"
            },
            {
                "title": "React Native",
                "slug": "reactnative",
                "icon": null,
                "iconUrl": "https://cdn.worldvectorlogo.com/logos/react-native-1.svg"
            },
            {
                "title": "Expo",
                "slug": "expo",
                "icon": null,
                "iconUrl": "https://cdn.icon-icons.com/icons2/2389/PNG/512/expo_logo_icon_145293.png"
            },
            {
                "title": "JavaScript",
                "slug": "javascript",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            }
        ],
        "hostingLink": null
    },
    {
        "title": "TMDB",
        "slug": "tmdb",
        "description": "A React project were I am using the tmdb api to fetch data and then display it with good design and the goal of creating a user friendly site to find a new movie to watch.",
        "githubLink": "https://github.com/GITZMBE/tmdb-2.0",
        "images": [
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8ik670ce207l1xmxob6pi",
                "width": 1982,
                "height": 1222
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8ik5y0cra07mlc6rze7x7",
                "width": 1977,
                "height": 1223
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8ik6a0ce407l18txhcp5p",
                "width": 1980,
                "height": 1225
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8ik5n0dov07l5c18n6ksw",
                "width": 1978,
                "height": 1227
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8ik5t0cdx07l1fqghrv7x",
                "width": 1983,
                "height": 1228
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8ik5l0cr507mlm4h968hy",
                "width": 1979,
                "height": 1224
            }
        ],
        "skills": [
            {
                "title": "Tailwind CSS",
                "slug": "tailwindcss",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            },
            {
                "title": "JavaScript",
                "slug": "javascript",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            },
            {
                "title": "React",
                "slug": "react",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            }
        ],
        "hostingLink": null
    },
    {
        "title": "Spotify",
        "slug": "spotify",
        "description": "In this project I am creating a Spotify clone were I am getting more familiar with reading open source documentation of an API.",
        "githubLink": "https://github.com/GITZMBE/Spotify-2.0",
        "images": [
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8qw6r0ern07mlgp5aqzdv",
                "width": 2541,
                "height": 1223
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8qw6x0ffb07l5oi95iouo",
                "width": 2544,
                "height": 1225
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8qw6h0e9807l114px9r22",
                "width": 2543,
                "height": 1227
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8qw6e0erh07mlabtujq37",
                "width": 2542,
                "height": 1224
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8qw6t0ff907l5o7fqx2vm",
                "width": 2542,
                "height": 1224
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8qw610e9207l10stytf92",
                "width": 2541,
                "height": 1222
            }
        ],
        "skills": [
            {
                "title": "React",
                "slug": "react",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            },
            {
                "title": "JavaScript",
                "slug": "javascript",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            },
            {
                "title": "Tailwind CSS",
                "slug": "tailwindcss",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            }
        ],
        "hostingLink": null
    },
    {
        "title": "TripTrek",
        "slug": "triptrek",
        "description": "One of my most series projects were I got introduced to Nextjs, GraphQL and Vercel as well as many other technologies as payment methods like Stripe and multiple open source JavaScript libraries. It is a service where you are both able to rent others listings and rent out your own apartments. The payments are being handled through Stripe and you are also able to chat with your landlord as well as getting a receipt when the payment has gone through.",
        "githubLink": "https://github.com/GITZMBE/TripTrek",
        "images": [
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9gy9g0kr307mltjzd7ekg",
                "width": 2553,
                "height": 1227
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9gy8w0l3w07l1gka5357f",
                "width": 2549,
                "height": 1220
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9gy9e0kr107ml1v39ne8z",
                "width": 2545,
                "height": 1228
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9gy9p0l4107l1b9nwnflx",
                "width": 2550,
                "height": 1228
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9gy890l3r07l121yq3mrt",
                "width": 2548,
                "height": 1221
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9gy7u0mdh07l5x9peun2o",
                "width": 2548,
                "height": 1224
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9gy7p0l3j07l1ejuts2xn",
                "width": 2547,
                "height": 1226
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9gy7k0mdc07l5esk5g4k4",
                "width": 2548,
                "height": 1225
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9gy7p0l3h07l1q4coon3s",
                "width": 2548,
                "height": 1224
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9gy7c0md707l5e4ra67oh",
                "width": 2552,
                "height": 1226
            }
        ],
        "skills": [
            {
                "title": "Nextjs",
                "slug": "nextjs",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
            },
            {
                "title": "TypeScript",
                "slug": "typescript",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            },
            {
                "title": "PostgreSQL",
                "slug": "postgresql",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg"
            },
            {
                "title": "GraphQL",
                "slug": "graphql",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain-wordmark.svg"
            },
            {
                "title": "Prisma",
                "slug": "prisma",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
            },
            {
                "title": "Vercel",
                "slug": "vercel",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg"
            },
            {
                "title": "Stripe",
                "slug": "stripe",
                "icon": null,
                "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
            },
            {
                "title": "Tailwind CSS",
                "slug": "tailwindcss",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            },
            {
                "title": "THREEjs",
                "slug": "threejs",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original-wordmark.svg"
            },
            {
                "title": "Figma",
                "slug": "figma",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
            }
        ],
        "hostingLink": "https://triptrek.vercel.app/"
    },
    {
        "title": "TypeSpeed",
        "slug": "typespeed",
        "description": "A FullStack project with both a frontend and a backend created specifically for this project. The Frontend is made with Nextjs & TypeScript and the Backend uses ExpressJS to manage the api routes to the database which is currently under development and is locally hosting a PostgreSQL database using Docker. It is also featuring a login system using Next Auth. The point of the website is to be able to test your typing speed at the same time as you are leveling up your account and are able to compare your own score with other users on the site.",
        "githubLink": "https://github.com/GITZMBE/TypeSpeed",
        "images": [
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9r23w0okz07l5af0mbxs9",
                "width": 2558,
                "height": 1224
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9r1vb0mwx07l1mpke3oza",
                "width": 2542,
                "height": 1220
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9r1vz0mx207l1rxfkv4aw",
                "width": 2557,
                "height": 1223
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9r1v90mw907mlmy02ityt",
                "width": 2542,
                "height": 1196
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9r1v50mws07l1b7jvuc8x",
                "width": 2558,
                "height": 1223
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9r22v0okt07l5fool0twk",
                "width": 2559,
                "height": 1224
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9r1uv0mwn07l1shp591hr",
                "width": 2556,
                "height": 1224
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9r1up0mwh07l1sqbwqr9p",
                "width": 2557,
                "height": 1227
            }
        ],
        "skills": [
            {
                "title": "ExpressJS",
                "slug": "expressjs",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
            },
            {
                "title": "Nextjs",
                "slug": "nextjs",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
            },
            {
                "title": "PostgreSQL",
                "slug": "postgresql",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg"
            },
            {
                "title": "Docker",
                "slug": "docker",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg"
            },
            {
                "title": "TypeScript",
                "slug": "typescript",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            }
        ],
        "hostingLink": null
    },
    {
        "title": "Dino GUI",
        "slug": "dinogui",
        "description": "I was starting to get interested in learning other programming languages as well as Game Development so I started to create a GUI with Java together with the framework Swing were you are able to play my version of the Chrome Dino Game in a GUI format.",
        "githubLink": "https://github.com/GITZMBE/DinoGUI",
        "images": [
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aa64zp0rf707l1ua1vr1b2",
                "width": 922,
                "height": 619
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aa64za0rf207l1r3tze3sp",
                "width": 924,
                "height": 618
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aa64za0sx107l5jv3lsata",
                "width": 922,
                "height": 618
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aa64yp0r9e07mliluig4l5",
                "width": 922,
                "height": 618
            }
        ],
        "skills": [
            {
                "title": "Java",
                "slug": "java",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
            },
            {
                "title": "Swing",
                "slug": "swing",
                "icon": {
                    "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a6ocyx1qoq07l3nr63nye0",
                    "width": 413,
                    "height": 312
                },
                "iconUrl": null
            }
        ],
        "hostingLink": null
    },
    {
        "title": "Snake Game",
        "slug": "snake-game",
        "description": "further more I was trying to get introduced to other Object Oriented Programming languages, so I started this project with is written in C++ which is my version of the arcade game Snake and is being played in the terminal and controlled with WASD-keys.",
        "githubLink": "https://github.com/GITZMBE/Snake",
        "images": [
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aaj1kf0wga07l1h4dlml8t",
                "width": 673,
                "height": 216
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aaj1jv0yaj07l5cpqg3bcf",
                "width": 686,
                "height": 169
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aaj1jn0yah07l5wgdotbh2",
                "width": 673,
                "height": 218
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aaj1j30w9507mlnd0p43wi",
                "width": 679,
                "height": 224
            }
        ],
        "skills": [
            {
                "title": "C++",
                "slug": "cplusplus",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
            }
        ],
        "hostingLink": null
    },
    {
        "title": "User Generator",
        "slug": "user-generator",
        "description": "This is a project with the purpose of creating user data for newly created website with no current users so it can be populated with dummy users to not look unused and more serious before it has attracted its first batch of users. It is using an open source user generator API to generate the users and then it has the ability to both login and creating an account as well as storing your generated users in a Firebase database for performance friendly realtime updates when editing data on the website.",
        "githubLink": "https://github.com/GITZMBE/UserGenerator",
        "images": [
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aapfri10v207l5dm9nlvsl",
                "width": 1916,
                "height": 906
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aapfpk0zby07l10q5ocnru",
                "width": 1919,
                "height": 912
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aapfr10ytx07mltznuezel",
                "width": 1919,
                "height": 909
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aapfov10ux07l5rc7kjn3d",
                "width": 1918,
                "height": 906
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aapfo20yts07mlse6303t8",
                "width": 1916,
                "height": 907
            },
            {
                "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aapfoi10us07l5ud00731f",
                "width": 1917,
                "height": 907
            }
        ],
        "skills": [
            {
                "title": "Vue",
                "slug": "vue",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg"
            },
            {
                "title": "Firebase",
                "slug": "firebase",
                "icon": null,
                "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg"
            }
        ],
        "hostingLink": null
    }
  ];
  
  return (
    <PageContainer
      { ...props }
      id='projects-container'
      className={`flex !justify-center items-center snap-start ${ props.className }`}
    >
      <div id="link-container" className="flex justify-center items-center flex-wrap max-w-[950px]">
        {data.map(({ title, slug }) => (
          <div key={slug} className="w-36 md:w-52 aspect-square rounded-md overflow-hidden">
            {/* <Image src={image.url} width={500} height={500} alt="" className="absolute w-96 h-56 group-hover:scale-110" /> */}
            <a href={`/projects/${slug}`} className="flex justify-center items-center w-full h-full hover:backdrop-brightness-50">
              <Text as="h2" className="uppercase !text-center !text-2xl sm:!text-2xl md:!text-2xl !text-accent dark:!text-darkAccent !cursor-pointer">{ title }</Text>
            </a>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}

export default ProjectsSection;
