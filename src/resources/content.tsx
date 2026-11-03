import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
    firstName: "Oscar",
    lastName: "Gardea",
    name: `Kings Construction`,
    role: "Residential & Commercial Contractor",
    avatar: "/images/avatar.webp",
    email: "oscar@kingsconstructionkc.com",
    location: "America/Chicago", // Kansas City, MO — IANA time zone identifier
    locationLabel: "Kansas City, MO",
    languages: ["English"], // optional: Leave the array empty if you don't want to display languages
    locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
    display: true,
    title: <>The Kings Construction Newsletter</>,
    description: (
        <>Project reveals, before-and-afters, and new work coming to the Kansas City area</>
    ),
};

const social: Social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    // Set essentials: true for links you want to show on the about page
    // Add Instagram / Facebook / Google Business profiles here once they exist:
    // { name: "Instagram", icon: "instagram", link: "https://www.instagram.com/<handle>", essential: true },
    {
        name: "Email",
        icon: "email",
        link: `mailto:${person.email}`,
        essential: true,
    },
    {
        name: "Website",
        icon: "globe",
        link: "https://kingsconstructionkc.com",
        essential: true,
    },
    {
        name: "Facebook",
        icon: "facebook",
        link: "https://www.facebook.com/kingsconstructionkc",
        essential: true,
    },
];

const home: Home = {
    path: "/",
    image: "/images/og/home.webp",
    label: "Home",
    title: `Kings Construction | Kansas City Remodeling & Contracting`,
    description: `Remodel, reimagine, really love it. Kings Construction delivers whole-home
      remodels, kitchens & bathrooms, basements & additions, and custom design across the
      Kansas City area.`,
    headline: (
        <>
            Remodel.{" "}
            <Text as="span" onBackground="accent-strong">
                Reimagine.
            </Text>{" "}
            Really love it.
        </>
    ),
    featured: {
        display: true,
        title: (
            <Row gap="12" vertical="center">
                <strong className="ml-4">Kings Construction</strong>{" "}
                <Line background="accent-alpha-strong" vert height="20" />
                <Text marginRight="4" onBackground="accent-medium">
                    Featured project
                </Text>
            </Row>
        ),
        href: "/work/whole-home-kitchen-remodel",
    },
    subline: (
        <>
            We're a{" "}
            <Text as="span" size="xl" weight="strong">
                Kansas City crew
            </Text>{" "}
            that builds and delivers — whole-home remodels, kitchens & baths, basements &
            additions. <br />
            Local. Reliable. Remarkable. Call{" "}
            <Text as="span" weight="strong" onBackground="accent-strong">
                (913) 636-5261
            </Text>{" "}
            for a free consultation.
        </>
    ),
};

const about: About = {
    path: "/about",
    label: "About",
    title: `About – ${person.name}`,
    description: `Kings Construction is a residential and commercial remodeling contractor
      proudly serving Kansas City, MO and the surrounding metro.`,
    tableOfContent: {
        display: true,
        subItems: false,
    },
    avatar: {
        display: true,
    },
    calendar: {
        display: false, // set display to true and add a real booking link when ready
        link: "",
    },
    intro: {
        display: true,
        title: "Introduction",
        description: (
            <>
              Kings Construction is a Kansas City–based {person.role.toLowerCase()} built on
              trust and modern design. Owner and operator {person.firstName}{" "}
              {person.lastName} leads every project personally — whole-home remodels, kitchens
              & bathrooms, basements & additions, and custom design. Your vision, our
              expertise: we show up on time, on budget, and deliver work we're proud to put
              our name on.
            </>
        ),
    },
    work: {
        display: false, // set to false to hide this section
        title: "Work Experience",
        experiences: [],
    },
    studies: {
        display: false, // set to false to hide this section
        title: "Studies",
        institutions: [],
    },
    technical: {
        display: false, // set to false to hide this section
        title: "Services",
        skills: [],
    },
};

const blog: Blog = {
    path: "/blog",
    label: "Blog",
    title: "Notes from the jobsite...",
    description: `Project updates, reveals, and remodeling insights from ${person.name}`,
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
};

const work: Work = {
    path: "/work",
    label: "Projects",
    title: `Recent Work – ${person.name}`,
    description: `Residential and commercial remodeling projects delivered by ${person.name} in the Kansas City area`,
    // Create new project pages by adding a new .mdx file to app/work/projects
    // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
    path: "/gallery",
    label: "Gallery",
    title: `Project Gallery – ${person.name}`,
    description: `A collection of finished work by ${person.name}`,
    // Replace these with your own project photos as they become available.
    // Keep the orientation flag matching the photo (horizontal / vertical).
    images: [
        {
            src: "/images/gallery/horizontal-1.webp",
            alt: "Custom black feature wall with gold diagonal inlay and crystal chandelier — finished by Kings Construction",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/vertical-4.webp",
            alt: "Premium bathroom remodel with gold fixtures and marble-look tile by Kings Construction",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/horizontal-3.webp",
            alt: "Kitchen remodel before-and-after: oak cabinets to a bright white kitchen with island",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/vertical-1.webp",
            alt: "Kings Construction — residential & commercial remodeling in Kansas City",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/vertical-2.webp",
            alt: "Beautiful bathrooms built to last — marble shower installs by Kings Construction",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/horizontal-2.webp",
            alt: "Navy kitchen with brass fixtures, brick accent wall, and quartz counters",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-01.webp",
            alt: "Kings Construction KC quality badge on a blueprint",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/horizontal-4.webp",
            alt: "Finished home office with gold-framed accent chairs and Kansas City views",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/vertical-3.webp",
            alt: "Remodel. Reimagine. Really love it. — premium remodeling for Kansas City",
            orientation: "horizontal",
        },
    ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
