import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Rahul Pal',
  title: "Hi all, I'm Rahul",
  description: `
    I am a dedicated Dotnet Developer with extensive experience in full-stack development, boasting proficiency in AWS, Azure, Python, C++, and the MEAN/MERN stacks. My expertise lies in crafting robust and scalable solutions, both on the server and client side, leveraging the power of Dotnet frameworks and cloud platforms like AWS and Azure.
    
    With a keen eye for detail and a passion for efficient programming, I bring a dynamic skill set to the table. My commitment to delivering high-quality code, coupled with a strong foundation in Python and C++, makes me well-equipped to tackle diverse challenges across the software development landscape. Whether it's building intricate backend logic or deploying applications on leading cloud platforms, I excel in creating innovative and efficient solutions for a variety of projects.
  `,
  resumeLink: 'https://github.com/Samratrpal01/Resume/blob/main/1900330100176_Rahul_Pal_Resume%20(4).pdf',
};


export const openSource = {
  githubUserName: 'Samratrpal01',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://samratrpal01.netlify.app',
  linkedin: 'https://www.linkedin.com/in/Samratrpal01',
  github: 'https://github.com/Samratrpal01',
  instagram: 'https://www.instagram.com/Samratrpal01',
  facebook: 'https://www.facebook.com/rahulp.71',
  twitter: 'https://twitter.com/Samratrahulpal1',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '🔰 Building responsive Single-Page-Apps (SPA) & PWA in Angular, React.js, and Vue.js'
        ),
        emoji('🔰 Building responsive static websites using Next.js and Gatsby'),
        emoji(
          '🔰 Building RESTful APIs in ASP.Net Framework, Node.js, Django & Django REST Framework'
        ),
        emoji(
          '🔰 Building end-to-end applications with expertise in MEAN Stack (MongoDB, Express.js, Angular, Node.js)'
        ),
        emoji(
          '🔰 Building dynamic applications with proficiency in MERN Stack (MongoDB, Express.js, React.js, Node.js)'
        ),
        emoji(
          '🔰 Comprehensive experience in Dotnet Full Stack development, including ASP.Net, C#, and Dotnet frameworks'
        ),
        emoji('🔰 Collaborating on full-stack projects, ensuring seamless integration across all components')
        
      ],
      softwareSkills: [
        {
          skillName: 'Angular',
          iconifyTag: 'vscode-icons:file-type-angular',
        },
        {
          skillName: 'C Sharp',
          iconifyTag: 'vscode-icons:file-type-csharp',
        },
        {
          skillName: 'Node',
          iconifyTag: 'vscode-icons:file-type-node',
        },
        {
          skillName: 'TypeScript',
          iconifyTag: 'vscode-icons:file-type-typescript',
        },
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },

        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('🔰 Extensive experience working on multiple cloud platforms, with a focus on Azure'),
emoji(
  '🔰 Hosting and maintaining websites on virtual machine instances, ensuring seamless integration of databases'
),
emoji(
  '🔰 Proficient in building robust CI/CD pipelines for automated testing & deployment using GitHub Actions'
),
emoji(
  '🔰 Applied knowledge in Angular and Azure, including tasks like uploading files, configuring clusters, and integrating databases'
),
emoji('🔰 Acquired expertise at the associate level through hands-on training and practical experience')

      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          iconifyTag: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          iconifyTag: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'Programming Skills',
      lottieAnimationFile: '/lottie/skills/programming.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('🔰 Proficient in developing Smart Contracts using Solidity & Ethereum'),
emoji(
  '🔰 Building automated testing & deployment scripts for Smart Contracts using Brownie & Infura'
),
emoji(
  '🔰 Expertise in utilizing Openzeppelin Smart Contract Standards & integrating Chainlink Oracles'
),
emoji('🔰 Specialized in developing NFT Smart Contracts using ERC-721 Token Standard'),
emoji(
  '🔰 Creating decentralized applications (Dapps) with React.js & Solidity, employing Web3.js, Moralis & IPFS'
),
emoji(
  '🔰 Exceptional programming skills, with mastery in C++ including advanced knowledge of STL and strong competitive programming skills'
),
emoji(
  '🔰 Proficient in Java with expertise in collections, and familiar with all intermediate-level setups in JavaScript'
),
emoji(
  '🔰 Knowledgeable in TypeScript and highly skilled in programming logic implementation, with a great command of Python and C#'
)

      ],
      softwareSkills: [
        {
          skillName: 'C',
          iconifyTag: 'vscode-icons:file-type-c',
        },
        {
          skillName: 'Cpp',
          iconifyTag: 'vscode-icons:file-type-cpp',
        },
        
        {
          skillName: 'Java',
          iconifyTag: 'logos:java',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'C Sharp',
          iconifyTag: 'logos:c-sharp',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'TypeScript',
          iconifyTag: 'logos:typescript-icon',
        },
        
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Front-End / UI', //Insert stack or technology you have experience in
    progressPercentage: '95', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '100',
  },
  {
    Stack: 'Programming',
    progressPercentage: '100',
  },
  {
    Stack: 'System Design',
    progressPercentage: '90',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Raj Kumar Goel Institute Of Technology (RKGIT)',
    subHeader: 'Bachelor Of Technology in Computer Science',
    duration: 'Time Period:- August 2019 - May 2023',
    desc: 'Enthusiastic and dedicated Computer Science student with a strong academic background pursuing B.Tech from Raj Kumar Goel Institute Of Technology. Proficient in the MERN (MongoDB, Express.js, React, Node.js) stack and skilled in various programming languages, including SQL. Demonstrated excellence in both theoretical understanding and practical application of computer science concepts.',
    grade: 'Result:- 77.5 %',
    descBullets: [
      'Participated in the research of Crop and Fertilizer recommendation using ML, Published 1 Year',
      'Participated in the research of Sentiment Analysis, incorporating both text and voice for comprehensive understanding',
      'Won numerous Intra College Competitive Coding Competitions showcasing strong programming skills',
      'Led Competitive Programming initiatives in Binary Club',
      'Achieved AIR 21 Rank From GeeksforGeeks (GFG)',
      'Solved 2000+ Data Structure and Algorithm Questions on various online platforms'
    ],
  },
  {
    schoolName: 'Varanasi Public School (V.P.S)',
    subHeader: '12th (CBSE)',
    duration: 'Time Period:- April 2018 - April 2019',
    desc: 'Diligent and passionate student specializing in mathematics and computer science during the 12th grade at Varanasi Public School. Opted for computer science as an optional subject, demonstrating proficiency in Python, C++, and SQL databases. Dedicated to academic excellence and showcased practical application of programming skills to real-world scenarios.',
    grade: 'Result:- 77.2 %',
    descBullets: [
      'Developed a project utilizing C++ to hide private data and encrypt using a binary pattern',
      'Implemented a Python program to print "RAHUL Pal" using nested loop concepts',
      'Designed a console application with complete features for a banking app, storing all transactions and writing to a .txt file',
      'Served as a mentor and team leader for the 12th-grade final project'
    ],
  }
  
];

export const experience: ExperienceType[] = [
  {
    role: 'Associate Software Engineer (Trainee)',
    company: 'Nagarro Private Ltd',
    companyLogo: 'https://mma.prnewswire.com/media/844192/Nagarro_Logo.jpg?p=twitter',
    date: 'Mar 2023 – Present',
    desc: 'Currently undergoing comprehensive training as a Full Stack Developer, specializing in MERN (MongoDB, Express.js, React, Node.js) and MEAN (MongoDB, Express.js, Angular, Node.js) stacks. Acquired substantial knowledge in Azure and AWS cloud platforms during the training period. Developed expertise in implementing SOLID principles, design patterns, and initializing organized folder structures for projects.',
    descBullets: [
      'Make Project Of BookHub usign Angular Front-End and asp.net for BackEnd  in Which User come and Lend books and borrow book and User Friendly UI and Lovely Experience ',
      'Make Project of The Weekend Ride usign Angualr as fornt and asp.net as backend in which user can rent a car accordig to their need after proper rental aggrement he can rent car and after usign can return back where admin can add car and peroform full CRUD operation.',
      'Make a proejct of Grocery Store usign Agnualr as forntend and asp.net as backend in whcih user can buy househodl thing '
    ],

  },
  
  {
    role: 'Teaching Assistant',
    company: 'Geekster',
    companyLogo: 'https://i.pinimg.com/736x/12/18/f3/1218f3d54e3adad910cdbb8713f5a6a8.jpg',
    date: 'July 2022 – Jan 2023',
    desc: 'Led a CPP DSA batch of 60+ students as a teaching assistant, providing guidance and support in frontend web development, conducting regular doubt sessions, and effectively debugging code. Demonstrated exceptional communication skills by explaining the dry run and intuition behind various approaches to problem-solving.',
    descBullets: [
      'Led a CPP DSA batch of 60+ students as a teaching assistant',
      'Problem solver in Data Structures and Algorithms for the Geekster portal, creating engaging and challenging weekly problem sets on HackerRank',
    ],
  },
  {
    role: 'Problem Setter (Freelance)',
    company: 'TechCurators',
    companyLogo: 'https://yt3.googleusercontent.com/X7Hl5PApdr0sLQsuOtAYF5-iMqorieUFqUhkmQouOyHVqisVxBugJN4ujwuJteRkyvsI7BU52U0=s900-c-k-c0x00ffffff-no-rj',
    date: 'Jun 2022 - Aug 2022',
    desc: 'Engaged as a Problem Setter in Competitive Programming, specializing in Python, Java, and algorithmic challenges. Contributed to the development of challenging problem sets for programming competitions.',
  },
  {
    role: 'DSA Mentor (Part-Time)',
    company: 'Devsnest',
    companyLogo: 'https://www.devsnest.in/banner.svg',
    date: 'Jun 2022 - Aug 2022',
    desc: 'Served as a part-time Data Structures and Algorithms (DSA) Mentor at Devsnest, providing guidance and support to students. Conducted interactive sessions to enhance understanding and proficiency in DSA concepts.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'BookHub',
    desc: 'Explore my Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/Samratrpal01/developer-portfolio',
    link: 'https://bookhub-52194.web.app',
  },
  {
    name: 'The Weekend Ride',
    desc: 'Discover the convenience of The Weekend Ride, making it easy to find products with the best prices and have them shipped straight to your door.',
    github: 'https://www.linkedin.com/in/samratrpal01/overlay/projects/85641271/multiple-media-viewer/?profileId=ACoAAC4EEokB5iqB_6_lkwbWkZKII1g_Nxfylyc&treasuryMediaId=1635547303216',
    link: 'https://theweekendride-abf10.web.app/LoginUser',
  },
  {
    name: 'Grocery Store',
    desc: 'Gain hands-on experience in technical skills with the Grocery Store project by Technota.',
    github: 'https://github.com/Samratrpal01/django-react-forum',
    link: 'https://bookhub-52194.web.app',
  },
  {
    name: 'Result Management System',
    desc: 'Experience seamless access to all your favorite entertainment and luxury items with the Result Management System.',
    github: 'https://github.com/Samratrpal01/Django-ecommerce',
    link: 'https://bookhub-52194.web.app',
  },
  {
    name: 'Student Management System',
    desc: 'Manage all your favorite entertainment and luxury items with just one touch through the Student Management System.',
    github: 'https://github.com/Samratrpal01/StudentMangementSystem',
    link: 'https://bookhub-52194.web.app',
  },
  {
    name: 'Sentiment Analysis',
    desc: 'Explore the Sentiment Analysis project, offering insights into your favorite entertainment and luxury items.',
    github: 'https://github.com/Samratrpal01/SentimentSpeak',
    link: 'https://github.com/Samratrpal01/SentimentSpeak/raw/main/Images/1.png',
  },
  {
    name: 'Join2Code',
    desc: 'Access all your favorite entertainment and luxury items with just one touch through the Join2Code project.',
    github: 'https://github.com/Samratrpal01/Join2Code',
    link: 'https://bookhub-52194.web.app',
  },
  {
    name: 'Student Management System (2nd Entry)',
    desc: 'Manage all your favorite entertainment and luxury items with just one touch through the Student Management System.',
    github: 'https://github.com/Samratrpal01/StudentMangementSystem',
  },
  {
    name: 'To-List',
    desc: 'Dive into my first React project, To-List, which uses components to monitor pending and completed tasks.',
    github: 'https://github.com/Samratrpal01/TodoList_Week-4',
    link: 'https://kjd91h.csb.app/',
  },
  {
    name: 'Jarvis',
    desc: 'Experience Jarvis, an alternative to chatgpt with a C++ structure, providing code queries and file handling capabilities.',
    github: 'https://github.com/Samratrpal01/Jarvis',
    link: 'https://repository-images.githubusercontent.com/367071568/a0833ac3-dfd7-4386-951f-b59e0caa8c96',
  },
  {
    name: 'Ishkon-Guru',
    desc: 'Explore Ishkon-Guru, providing a Chat-Bot for Ishkon using chatgpt-api to handle requests.',
    github: 'https://github.com/Samratrpal01/Django-ecommerce',
  },
  {
    name: 'Number Plate Identification',
    desc: 'Engage with the Number Plate Identification project, utilizing ML and Object Detection with Flask for the backend.',
    github: 'https://github.com/Samratrpal01/Django-ecommerce',
  },
  {
    name: 'GUI Calculator',
    desc: 'Access all your favorite entertainment and luxury items with just one touch through the GUI Calculator project.',
    github: 'https://github.com/Samratrpal01/GUI-Calculator',
    link: 'https://github.com/Samratrpal01/GUI-Calculator/raw/main/Screenshot%202023-02-22%20at%2011.32.14%20PM.png',
  },
  {
    name: 'Emoji Interpreter',
    desc: 'Explore the Emoji Interpreter, your gateway to all your favorite entertainment and luxury items with just one touch.',
    github: 'https://github.com/Samratrpal01/Emoji_Interpreter',
    link: 'https://codesandbox.io/p/sandbox/github/Samratrpal01/Emoji_Interpreter/tree/main/',
  },
];


// export const feedbacks: FeedbackType[] = [
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
// ];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Samratrpal01',
  description:
    'A Passionate Full Stack Developer on Dotnet Technology and Problem Solver',
  author: 'Rahul Pal',
  image: 'https://media.licdn.com/dms/image/D4D03AQFKwV6Cs3SUqA/profile-displayphoto-shrink_800_800/0/1688898065479?e=1707955200&v=beta&t=zI8Gfq2MpbM43e8tTAcZPECu6BMQ4f3BQ4YE7yx2XQw',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Samratrpal01',
    'Rahul Pal',
    '@Samratrpal01',
     'Samrat Rahul Pal',
    'Portfolio',
    'Samrat Portfolio ',
    'Samrat Rahul Pal Portfolio',
  ],
};
