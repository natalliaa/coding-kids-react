const books = [

    {
        id: "1",
        category: "websites",
        title: "Get Coding!",
        author: "Young Rewired State",
        image: "https://images-na.ssl-images-amazon.com/images/I/51+6cSmP7bL._SX444_BO1,204,203,200_.jpg",
        description: "Learn how to write HTML, CSS, and JavaScript and build your own website, app, and game! An essential guide to computer programming for kids— by kids.",
        year: "2017",
        publisher: "Candlewick; Illustrated edition",
        pages: 208,
        age: "9 - 12",
        isbn13: "978-0763692766",
        amazon: "https://www.amazon.com/Get-Coding-Learn-JavaScript-Website/dp/076369276X/ref=sr_1_12?crid=3CDAMWHJO4IUH&dchild=1&keywords=kids+coding+book&qid=1614706446&sprefix=kids+coding+b%2Caps%2C197&sr=8-12"
    },

    {
        id: "2",
        category: "games",
        title: "Get Coding 2!",
        author: " David Whitney",
        image: "https://images-na.ssl-images-amazon.com/images/I/51xkIEY4qcL._SX451_BO1,204,203,200_.jpg",
        description: "Learn HTML and JavaScript. Design and build five interactive computer games. Create cool graphics. Code simple artificial intelligence. This appealing guide, covering essential coding concepts, offers an ideal introduction to all these activities and more. By following simple step-by-step instructions and completing five exciting missions, aspiring programmers are invited to code well-known games such as tic-tac-toe and table tennis, then customize their projects to test their skills.",
        date: "2019",
        publisher: "Candlewick; Illustrated edition",
        pages: 224,
        age: "9-12",
        isbn13: "978-1536205411",
        amazon: "https://www.amazon.com/Coding-Build-Computer-Games-JavaScript/dp/1536205419/ref=sr_1_19?crid=R6MP9M80867&dchild=1&keywords=coding+kids&qid=1614727094&refinements=p_n_feature_browse-bin%3A2656022011&rnid=618072011&s=books&sprefix=coding%2Caps%2C237&sr=1-19"
    },

    {
        id: "3",
        category: "programming",
        title: "Kids Get Coding",
        author: "Heather Lyons,  Elizabeth Tweedale",
        image: "https://images-na.ssl-images-amazon.com/images/I/51uEgT+84hL._SX423_BO1,204,203,200_.jpg",
        description: "What do programs tell computers to do? And how are they written? Programs are instructions that computers follow. Learn about different programming languages, coding rules and bugs, and how to solve problems. Once you know the basics about computer programming, use the link in this book to go online and try out your new skills! Self-directed projects and activities help kids learn the basics of coding.",
        date: "2016",
        publisher: "LernerClassroom; Reprint edition",
        pages: 24,
        age: "6-10",
        isbn13: "978-1512416015",
        amazon: "https://www.amazon.com/Learn-Program-Kids-Get-Coding/dp/1512416010/ref=sr_1_31_sspa?crid=3CDAMWHJO4IUH&dchild=1&keywords=kids+coding+book&qid=1614706446&sprefix=kids+coding+b%2Caps%2C197&sr=8-31-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExR000Tks0RDJERExUJmVuY3J5cHRlZElkPUEwOTM0NzI3SEYwOFdBVkU0WE1DJmVuY3J5cHRlZEFkSWQ9QTAzMTUyMzdES1RISDgyMVlBVkcmd2lkZ2V0TmFtZT1zcF9tdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl"
    },

    {
        id: "4",
        category: "websites",
        title: "Code Your Own Website",
        author: " The Coder School",
        image: "https://images-na.ssl-images-amazon.com/images/I/51p9TTgGzcL._SX400_BO1,204,203,200_.jpg",
        description: "Written by the founders of Silicon Valley’s the CoderSchool, Basher’s Code Your Own Website is a really useful guide to basic programming that’s packed with quirky, colorful characters­―from URL and Domain to Browser and Router―who will explain exactly how the Internet works. Young readers will learn all about the three big website coding languages: HTML, CSS, and JavaScript, then follow the simple steps to code their own dynamic website.",
        date: "2019",
        publisher: "Kingfisher; Illustrated edition",
        pages: 96,
        age: "7-11",
        isbn13: "978-0753475126",
        amazon: "https://www.amazon.com/Coding-Basher-Code-Your-Website/dp/075347512X/ref=sr_1_2?dchild=1&keywords=website+kids&qid=1614727132&s=books&sr=1-2"
    },
    {
        id: "5",
        category: "Scratch",
        title: "Scratch Programming",
        author: "Raina Burditt",
        image: "https://images-na.ssl-images-amazon.com/images/I/51PVkVQCLtL._SX403_BO1,204,203,200_.jpg",
        description: "Scratch is a visual computer language designed especially for kids, and Scratch Programming for Beginners is the perfect book to introduce kids to coding! It explains the fundamental concepts of Scratch in a kid-friendly way, and comes jam-packed with fun, creative activities.",
        date: "2020",
        publisher: "Rockridge Press",
        pages: 188,
        age: "8-12",
        isbn13: "978-1647396381",
        amazon: "https://www.amazon.com/Scratch-Programming-Beginners-Coding-Fundamentals/dp/1647396387/ref=sr_1_15?crid=R6MP9M80867&dchild=1&keywords=coding+kids&qid=1614727029&refinements=p_n_feature_browse-bin%3A2656022011&rnid=618072011&s=books&sprefix=coding%2Caps%2C237&sr=1-15"
    },

    {
        id: "6",
        category: "Scratch",
        title: "Coding Projects in Scratch",
        author: "Jon Woodcock",
        image: "https://images-na.ssl-images-amazon.com/images/I/51sYEOJruKL._SX417_BO1,204,203,200_.jpg",
        description: "Suitable for complete beginners, this educational book for kids gives readers a solid understanding of programming. Teach them to create their own projects from scratch, preparing them for more complex programming languages like Python.",
        date: "2019",
        publisher: "DK Children",
        pages: 224,
        age: "9-12",
        isbn13: "978-1465477347",
        amazon: "https://www.amazon.com/Coding-Projects-Scratch-Step-Step/dp/1465477349/ref=sr_1_14?crid=R6MP9M80867&dchild=1&keywords=coding+kids&qid=1614727029&refinements=p_n_feature_browse-bin%3A2656022011&rnid=618072011&s=books&sprefix=coding%2Caps%2C237&sr=1-14"
    },

    {
        id: "7",
        category: "Scratch",
        title: "Coding for Kids: Scratch",
        author: "Matthew Highland",
        image: "https://images-na.ssl-images-amazon.com/images/I/51JMhptfXvL._SX404_BO1,204,203,200_.jpg",
        description: "From sprites and code blocks to scripts and scorekeeping, Coding for Kids: Scratch helps you discover everything you need to know to create 10 amazing games that you and your friends can play. Watch your confidence grow with step-by-step instructions and clear directions that keep things simple―even as the games you’re making get more challenging. Game on!",
        date: "2019",
        publisher: "Rockridge Press",
        pages: 172,
        age: "6-10",
        isbn13: "978-1641522458",
        amazon: "https://www.amazon.com/Coding-Kids-Scratch-Skills-Create/dp/1641522453/ref=sr_1_10?crid=R6MP9M80867&dchild=1&keywords=coding+kids&qid=1614727029&refinements=p_n_feature_browse-bin%3A2656022011&rnid=618072011&s=books&sprefix=coding%2Caps%2C237&sr=1-10"
    },
    {
        id: "8",
        category: "programming",
        title: "Code This!",
        author: "Jennifer Szymanski",
        image: "https://images-na.ssl-images-amazon.com/images/I/51xhK2j3r+L._SX398_BO1,204,203,200_.jpg",
        description: "Programming concepts come to life in this kid-friendly intro to the basics of computer science and coding, with puzzles, games, and quirky characters.",
        date: "2019",
        publisher: "National Geographic Kids",
        pages: 160,
        age: "8-12",
        isbn13: "978-1426334436",
        amazon: "https://www.amazon.com/Code-This-Challenges-Computer-Concepts/dp/1426334435/ref=sr_1_9?crid=R6MP9M80867&dchild=1&keywords=coding+kids&qid=1614727029&refinements=p_n_feature_browse-bin%3A2656022011&rnid=618072011&s=books&sprefix=coding%2Caps%2C237&sr=1-9"
    },

    {
        id: "9",
        category: "games",
        title: "Coding Games in Python",
        author: "DK",
        image: "https://images-na.ssl-images-amazon.com/images/I/51RcGeQfn5L._SX417_BO1,204,203,200_.jpg",
        description: "Whether you're a seasoned programmer or a beginner hoping to learn Python, you'll find Coding Games in Python fun to read and easy to follow. Each chapter shows you how to construct a complete working game in simple numbered steps. Using freely available resources such as Pygame, Pygame Zero, and a downloadable pack of images and sounds, you can add animations, music, scrolling backgrounds, scenery, and other exciting professional touches.",
        date: "2018",
        publisher: "DK Children",
        pages: 224,
        age: "9-12",
        isbn13: "978-1465473615",
        amazon: "https://www.amazon.com/Coding-Games-Python-DK/dp/1465473610/ref=sr_1_8?dchild=1&keywords=coding+games+kids&qid=1614728556&s=books&sr=1-8"
    }
]
// {   id:
//     title: 
//     author: 
//     image:
//     description:
//     date: 
//     publisher:        
//     pages:
//     age:
//     isbn13:
//     amazon:
// }

export default books;