// import humanImg from './Human.png'
// import './Ork.png' from './Ork.png'
// import './Skaven.png' from './Skaven.png'
// import './Dwarf.png' from './Dwarf.png'


const BB_TEAM_DATA = [
    {
        name:"Humans",
        img:"https://www.bloodbowl.com/wp-content/uploads/2016/09/Human.png",
        players : [
            {
                name:"Human Lineman",
                cost:50,
                max:16
            },
            {
                name:"Throwers",
                cost:80,
                max:2
            },
            ,
            {
                name:"Catchers",
                cost:65,
                max:4
            },
            {
                name:"Bitzers",
                cost:85,
                max:4
            },
            {
                name:"Halfling Hopeful",
                cost:30,
                max:3
            },
            {
                name:"Ogre",
                cost:140,
                max:1
            },
        ]

    },
    {
        name:"Orcs",
        img:'https://www.bloodbowl.com/wp-content/uploads/2016/09/Ork.png',
        players : [
            {
                name:"Orc Lineman",
                cost:50,
                max:16
            },
            {
                name:"Throwers",
                cost:65,
                max:2
            },
            {
                name:"Bitzers",
                cost:80,
                max:4
            },
            {
                name:"Big Un Blockers",
                cost:90,
                max:4
            },
            {
                name:"Goblins",
                cost:40,
                max:4
            },
            {
                name:"Untrained Troll",
                cost:115,
                max:1
            }
        ]

    },
    {
        name:"Dwarf",
        img:'https://www.bloodbowl.com/wp-content/uploads/2016/09/Dwarf.png',
        players : [
            {
                name:"Dwarf Blocker Lineman",
                cost:70,
                max:16
            },
            {
                name:"Runner",
                cost:85,
                max:2
            },
            {
                name:"Blitzer",
                cost:80,
                max:2
            },
            {
                name:"Troll Slayers",
                cost:95,
                max:2
            },
            {
                name:"Deathroller",
                cost:170,
                max:1
            }
        ]
    },
    {
        name:"Skaven",
        img:'https://www.bloodbowl.com/wp-content/uploads/2016/09/Skaven.png',
        players : [
            {
                name:"Skaven Clanrat Linemen",
                cost:50,
                max:16
            },
            {
                name:"Throwers",
                cost:85,
                max:2
            },
            {
                name:"Gutter Runners",
                cost:85,
                max:4
            },
            {
                name:"Blitzers",
                cost:90,
                max:2
            },
            {
                name:"Rat Ogre",
                cost:170,
                max:1
            }
        ]
    },
]

export default BB_TEAM_DATA ;