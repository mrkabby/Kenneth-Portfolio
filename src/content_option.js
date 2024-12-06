const logotext = "KEN";
const meta = {
    title: "Kenneth Boateng Antwi",
    description: "I’m Kenneth Boateng Antwi MERN STACK",
};

const introdata = {
    title: "I’m Kenneth Boateng Antwi",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "It is a long established fact that a reader will be distracted by the readerble content of a page when looking at it's layout",
    your_img_url: "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "I am currently studying Computer Science at the University of the People and a trainee at Mest Africa as a full stack developer",
};
const worktimeline = [{
        jobtitle: "Sociologist",
        where: "Ghana Irrigation Development Authority.Accra, Ministries",
        date: "2017-2018",
    },
    {
        jobtitle: "Paxex Admin",
        where: "CoFred Capital",
        date: "2018-2018",
    },
    {
        jobtitle: "Social Media Manager",
        where: "Freelance",
        date: "2018-present",
    },
    {
        jobtitle: "CEO",
        where: "Forty7 Digital Agency",
        date: "2018-present",
    },
    {
        jobtitle: "Sales and Marketing Manager",
        where: "Premium Star Quality Group",
        date: "2021-present",
    },
    {
        jobtitle: "Sales and Marketing Manager",
        where: "BoatMech",
        date: "2023-present",
    },
    {
        jobtitle: "App Developer (Padi-user-app)",
        where: "Corextreme Technologies",
        date: "2024-present",
    },
];


const skills = [{
        name: "Python",
        value: 60,
    },
    {
        name: "java",
        value: 70,
    },
    {
        name: "Javascript",
        value: 75,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "SQL",
        value: 60,
    },
    { 
        name: "PHP",
        value: 60,

    },
];

const services = [{
        title: "IT Consultation",
        description: "providing expert advice and guidance to businesses or individuals regarding their information technology (IT) needs and challenges..",
    },
    {
        title: "Mobile Apps Developer",
        description: " creating applications (apps) for mobile devices such as smartphones and tablets..",
    },
    {
        title: "Web Developer",
        description: "creating dynamic applications that run on web browsers, accessible through the internet.",
    },
];

const dataportfolio = [{
        img: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWUlMjB0aGVhdGVyfGVufDB8fDB8fHww",
        description: "created a movie website.",
        link: "https://cine-mate-eta.vercel.app/",
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1673830185086-8d54f4c0f3a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVjaXBlc3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Tried my hands on a recipe app.",
        link: "https://recipe-app-one-smoky.vercel.app/",
    },
    {
        img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWdybyUyMG1hcmtldHxlbnwwfHwwfHx8MA%3D%3D",
        description: "Created an ecommerce site.",
        link: "https://660fade53aa29764451e1302--thriving-buttercream-0f4a05.netlify.app/",
    },
    {
        img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D",
        description: "Created another ecommerce site.",
        link: "https://slay-shoper-app.vercel.app/",
    },
    {
        img: "https://images.unsplash.com/photo-1730957296682-78ec10a09ce2?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Created a PokeBook App.",
        link: "https://pokebook-coral.vercel.app/",
    },
    
];

const contactConfig = {
    YOUR_EMAIL: "antwikenneth14@gmail.com",
    YOUR_FONE: "(233)05013-76212",
    description: "Let's Get Interactive. ",
   
    YOUR_SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
    YOUR_USER_ID: process.env.REACT_APP_USER_ID,
};

const socialprofils = {
    github: "https://github.com/mrkabby",
    facebook: "https://www.facebook.com/kenneth.antwi/",
    linkedin: "https://www.linkedin.com/in/kenneth-antwi-b0096616a",
    twitter: "https://twitter.com/kabbyfbaby",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};