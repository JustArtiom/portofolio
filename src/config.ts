import GithubSVG from "assets/svgs/icons/github.svg";
import InstagramSVG from "assets/svgs/icons/instagram.svg";
import DiscordSVG from "assets/svgs/icons/discord.svg";
import LinkedInSVG from "assets/svgs/icons/linkedin.svg";
import EnvelopeSVG from "assets/svgs/icons/envelope.svg";

const config = {
    scroll_smoothness: 10,
    dob: "2005-06-24",
    nav_links: [
        { id: "home", title: "Home" },
        { id: "about", title: "About Me" },
        { id: "projects", title: "Projects" },
        { id: "contact", title: "Contact" },
    ],
    socials: [
        {
            name: "github",
            icon: GithubSVG,
            url: "https://github.com/JustArtiom",
        },
        {
            name: "instagram",
            icon: InstagramSVG,
            url: "https://instagram.com/@im_artiom",
        },
        {
            name: "discord",
            icon: DiscordSVG,
            url: "https://discord.com/users/526191240962768910",
        },
        {
            name: "linkedin",
            icon: LinkedInSVG,
            url: "https://linkedin.com/...",
        },
        {
            name: "email",
            icon: EnvelopeSVG,
            url: "mailto:contact@artiom.me",
        },
    ],
};

export default config;
