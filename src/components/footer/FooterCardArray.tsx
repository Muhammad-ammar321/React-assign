import { DribbbleIcon, FacebookIcon, GithubIcon, TwitterIcon } from "lucide-react"
import type { FC } from "react"

export const DiscordIcon:FC<{className?:string}> =({className})=>(
    <svg
        className={className} //not show the icon when I use it
        // className="h-4 w-4" //show icon iine in this way
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 21 17"
        >
        <path d="M17.942 1.557a17.3 17.3 0 0 0-4.127-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 17.274 17.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.973 2.521c.41-.574.773-1.17 1.084-1.785a10.73 10.73 0 0 1-1.707-.83c.143-.107.283-.217.418-.33a11.774 11.774 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.117.707-1.71.832a12.52 12.52 0 0 0 1.084 1.785 17.47 17.47 0 0 0 5.074-2.595 17.287 17.287 0 0 0-2.973-11.59ZM7.778 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm7.744 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
    </svg>
)


export const ArrayofLinks=[
    

    //Resourse
    {
        title:'Resources',
        link:<>
            <li className="mb-4">
                <a href="https://flowbite.com/" className="hover:underline">
                Flowbite
                </a>
            </li>
            <li>
                <a href="https://tailwindcss.com/" className="hover:underline">
                Tailwind CSS
                </a>
            </li>
        </>
    },
    //Follow Us
    {
        title:'Follow us ',
        link:<>
            <li className="mb-4">
                <a
                href="https://github.com/themesberg/flowbite"
                className="hover:underline"
                >
                Github
                </a>
            </li>
            <li>
                <a
                href="https://discord.gg/4eeurUVvTy"
                className="hover:underline"
                >
                Discord
                </a>
            </li>
        </>
    },
    //Legal
    {
        title:'Legal',
        link:<>
            <li className="mb-4">
                <a href="#" className="hover:underline">
                Privacy Policy
                </a>
            </li>
            <li>
                <a href="#" className="hover:underline">
                Terms &amp; Conditions
                </a>
            </li>
        </>
    },

]

export const LastLineLink =[
    //facebook
    {
        id:1,
        link:'https://www.facebook.com/getflowbite/',
        icon: <FacebookIcon className="w-5 h-5" />,
        srWord:'Facebook page'
    },
    //Twitter
    {
        id:2,
        link:'',
        icon:<TwitterIcon className="w-5 h-5" />,
        srWord:'Twitter page'
    },
    //github
    {
        id:3,
        link:'https://github.com/themesberg/flowbite',
        icon:<GithubIcon className="w-5 h-5" />,
        srWord:'Github account '
    },
    //Dribble
    {
        id:4,
        link:'',
        icon:<DribbbleIcon className="w-5 h-5" />,
        srWord:'Dribble account'
    },
    //discord
    {
        id:5,
        link:'https://discord.gg/4eeurUVvTy',
        icon:<DiscordIcon  className="w-5 h-5"/>,
        srWord:'Discord community'
    },
    
]

