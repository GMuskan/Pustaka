import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689067458/ecommerce-images/59795331_ngmem9.jpg",
    name: "Do Epic Shit",
    author: "Ankur Warikoo",
    price: 219,
    originalPrice: 399,
    isBestSeller: true,
    category: "Horror",
    rating: 5,
    description: "Ankur Warikoo is an entrepreneur and content creator whose deep, witty and brutally honest thoughts on success and failure, money and investing, self-awareness and personal relationships have made him one of India’s top personal brands. In his first book, Ankur puts together the key ideas that have fuelled his journey – one that began with him wanting to be a space engineer and ended with him creating content that has been seen and read by millions. His thoughts range from the importance of creating habits for long-term success to the foundations of money management, from embracing and accepting failure to the real truth about learning empathy. This is a book to be read, and reread, a book whose lines you will underline and think about again and again, a book you will give your family and friends and strangers."
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689068871/ecommerce-images/Believe-in-Yourself_te5ank.png",
    name: "Believe In Yourself",
    author: "Joseph",
    price: 250,
    originalPrice: 1200,
    isBestSeller: false,
    category: "Horror",
    rating: 4,
    description: "Dr Joseph Murphy was the author of The Power of your Subconscious Mind. In Believe in Yourself Dr. Murphy shows you how the power of believing in yourself will help you achieve your dreams. He illustrates his points with wonderful stories about how inventors, writers, artists, and entrepreneurs have used this power to reach the highest of heights. By the end of the book you will have the tools for success. There are many men who quietly use the abstract term success, over and over many times a day until they reach a conviction that success is theirs. As a man repeats the word success to himself with faith and conviction, his subconscious mind will accept it as true of himself, and he will be under subjective compulsion to succeed. - Joseph Murphy"
  },

  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689068917/ecommerce-images/51JkDEpHUQL_odmczn.jpg",
    name: "Zero To One",
    author: "Peter Thiel",
    price: 50,
    originalPrice: 500,
    isBestSeller: false,
    category: "Fiction",
    rating: 2,
    description: "The great secret of our time is that there are still uncharted frontiers to explore and new inventions to create. In Zero to One, legendary entrepreneur and investor Peter Thiel shows how we can find singular ways to create those new things. Thiel begins with the contrarian premise that we live in an age of technological stagnation, even if we’re too distracted by shiny mobile devices to notice.Information technology has improved rapidly, but there is no reason why progress should be limited to computers or Silicon Valley.Progress can be achieved in any industry or area of business.It comes from the most important skill that every leader must master: learning to think for yourself."
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689068955/ecommerce-images/81bGKUa1e0L._AC_UF1000_1000_QL80__fxrrjp.jpg",
    name: "Atomic Habits",
    author: "James Clear",
    price: 390,
    originalPrice: 790,
    isBestSeller: true,
    category: "Horror",
    rating: 5,
    description: "No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. If you're having trouble changing your habits, the problem isn't you.The problem is your system.Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, you'll get a proven system that can take you to new heights."
  },

  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689068988/ecommerce-images/41SG4SO4T9L_lbu462.jpg",
    name: "IKIGAI",
    author: "Hector Garcia",
    price: 600,
    originalPrice: 1500,
    isBestSeller: false,
    category: "Non Fiction",
    rating: 4,
    description: "The people of Japan believe that everyone has an ikigai – a reason to jump out of bed each morning. And according to the residents of the Japanese island of Okinawa – the world’s longest-living people – finding it is the key to a longer and more fulfilled life. Inspiring and comforting, this book will give you the life-changing tools to uncover your personal ikigai. It will show you how to leave urgency behind, find your purpose, nurture friendships and throw yourself into your passions."
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689069019/ecommerce-images/81bsw6fnUiL._AC_UF1000_1000_QL80__sjffmg.jpg",
    name: "Rich Dad Poor Dad",
    author: "Robert Kiyoski",
    price: 350,
    originalPrice: 500,
    isBestSeller: false,
    category: "Non Fiction",
    rating: 2,
    description: "A mini abridgement of the #1 Personal Finance book of all time, Wisdom from Rich Dad Poor Dad tells the story of Robert Kiyosaki and his two dads -- his real father and the father of his best friend, his rich dad -- and the ways in which both men shaped his thoughts about investing. You don't need to earn a high income to be rich -- find out the difference between working for money and having your money work for you."
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689069041/ecommerce-images/book_the-monk_robinsharma_kshgwj.jpg",
    name: "Monk Who Sold His Ferrari",
    author: "Robin Sharma",
    price: 119,
    originalPrice: 249,
    isBestSeller: false,
    category: "Non Fiction",
    rating: 3,
    description: "This inspiring tale provides a step-by-step approach to living with greater courage, balance, abundance, and joy. A wonderfully crafted fable, The Monk Who Sold His Ferrari tells the extraordinary story of Julian Mantle, a lawyer forced to confront the spiritual crisis of his out-of-balance life. On a life-changing odyssey to an ancient culture, he discovers powerful, wise, and practical lessons that teach us to: Develop Joyful Thoughts, Follow Our Life's Mission and Calling, Cultivate Self-Discipline and Act Courageously, Value Time as Our Most Important Commodity, Nourish Our Relationships, and Live Fully, One Day at a Time."
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689069091/ecommerce-images/41xM13E3JwL_fkrkdz.jpg",
    name: "One Indian Girl",
    author: "Chetan Bhagat",
    price: 157,
    originalPrice: 195,
    isBestSeller: false,
    category: "Fiction",
    rating: 3,
    description: "Hi, I'm Radhika Mehta and I'm getting married this week. I work at Goldman Sachs, an investment bank. Thank you for reading my story. However, let me warn you. You may not like me too much.One, I make a lot of money.Two, I have an opinion on everything.Three, I have had a boyfriend before.OK, maybe two. Now if all this was the case with a guy, one might be cool with it.But since I am a girl these three things I mentioned don’t really make me too likeable, do they ? "
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689069103/ecommerce-images/61xPDmYV7SL._AC_UF1000_1000_QL80__kdg7tg.jpg",
    name: "Learning How To Fly",
    author: "A.P.J Abdul Kalam",
    price: 163,
    originalPrice: 205,
    isBestSeller: false,
    category: "Fiction",
    rating: 3,
    description: "Dr A.P.J. Abdul Kalam had a great belief in the power of the youth. He met over 21 million children and young people in India and outside and spoke to them about the power of knowledge, ambition, moral behaviour and the need to bring about change in society. He travelled to almost every corner of the country meeting the youth in schools, universities and institutions and interacted with them like a committed teacher."
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689069141/ecommerce-images/61wipuAV0uL._AC_UF1000_1000_QL80__ts69ql.jpg",
    name: "400 Days",
    author: "Chetan Bhagat",
    price: 699,
    originalPrice: 999,
    isBestSeller: false,
    category: "Horror",
    rating: 4,
    description: "Twelve-year-old Siya has been missing for nine months. It's a cold case, but Keshav wants to help his mother, Alia, who refuses to give up. 'My daughter Siya was kidnapped. Nine months ago,' Alia said.The police had given up.They called it a cold case.Even the rest of her family had stopped searching.Alia wouldn't stop looking, though. She wanted to know if I could help her. Hi, I am Keshav Rajpurohit and I am a disappointment to everyone around me. I live with my parents, who keep telling me how I a) get married, b) focus on my IPS exams, c) meet more people and d) close my detective agency. But Alia Arora, neighbour and ex-model, wanted my help. And I couldn't take my eyes off her face ...I mean ...her case.Welcome to 400 Days.A mystery and romance story like no other.An unputdownable tale of suspense, human relationships, love, friendship, the crazy world we live in and, above all, a mother's determination to never give up. From India's highest- selling author comes a page - turner that will not only keep you glued to the story but also touch you deeply."
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689069159/ecommerce-images/710jnzKlDTL._AC_UF894_1000_QL80__b2sexv.jpg",
    name: "Attitude Is Everything",
    author: "Keller Jeff",
    price: 399,
    originalPrice: 699,
    isBestSeller: false,
    category: "Horror",
    rating: 4,
    description: "This is a success manual that gives readers a step by step plan for taking control of their lives and unleashing their incredible potential. The book consists of 12 Your Attitude is Your Window to the World; You're A Human Magnet; Picture Your Way to Success; Make a Commitment and You'll Move Mountains; Turn Your Problems into Opportunities; Your Words Blaze A Trail; How Are You?; Stop Complaining; Associate with Positive People; Confront Your Fears and Grow; Get Out There and Fail; Networking That Gets Results. The book shows how author Jeff Keller used these principles to make a career transition from lawyer to motivational speaker -- and shows readers how they, too, can make positive changes in every area of their lives. This is a book that is easy to read and fun to read. It's a timeless classic in the self-help field."
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689069218/ecommerce-images/71OLtGMB0PL._AC_UF1000_1000_QL80__xfmvex.jpg",
    name: "Man's Search For Meaning",
    author: "Franky Viktor",
    price: 243,
    originalPrice: 349,
    isBestSeller: false,
    category: "Non Fiction",
    rating: 1,
    description: "Psychiatrist Viktor Frankl's memoir has riveted generations of readers with its descriptions of life in Nazi death camps and its lessons for spiritual survival. Based on his own experience and the stories of his patients, Frankl argues that we cannot avoid suffering but we can choose how to cope with it, find meaning in it, and move forward with renewed purpose. At the heart of his theory, known as logotherapy, is a conviction that the primary human drive is not pleasure but the pursuit of what we find meaningful. Man's Search for Meaning has become one of the most influential books in America; it continues to inspire us all to find significance in the very act of living."
  },

  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689067228/ecommerce-images/9781526604743_qcj5i0.jpg",
    name: "Kite Runner",
    author: "Khaled Hosseini",
    price: 109,
    originalPrice: 399,
    isBestSeller: true,
    category: "Horror",
    rating: 5,
    description: "1970s Afghanistan: Twelve-year-old Amir is desperate to win the local kite-fighting tournament and his loyal friend Hassan promises to help him. But neither of the boys can foresee what would happen to Hassan that afternoon, an event that is to shatter their lives. After the Russians invade and the family is forced to flee to America, Amir realises that one day he must return to an Afghanistan under Taliban rule to find the one thing that his new world cannot grant him: redemption."
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689067332/ecommerce-images/71OcyQo_XPL._AC_UF1000_1000_QL80__qwqncy.jpg",
    name: "The Five-Star Weekend",
    author: "Elin Hilderbrand",
    price: 285,
    originalPrice: 1200,
    isBestSeller: false,
    category: "Horror",
    rating: 4,
    description: "After tragedy strikes, Hollis Shaw gathers four friends from different stages in her life to spend an unforgettable weekend on Nantucket. Hollis Shaw’s life seems picture- perfect.She’s the creator of the popular food blog Hungry with Hollis and is married to Matthew, a dreamy heart surgeon.But after she and Matthew get into a heated argument one snowy morning, he leaves for the airport and is killed in a car accident.The cracks in Hollis’s perfect life—her strained marriage and her complicated relationship with her daughter, Caroline—grow deeper. So when Hollis hears about something called a “Five - Star Weekend”—one woman organizes a trip for her best friend from each phase of her life: her teenage years, her twenties, her thirties, and midlife—she decides to host her own Five - Star Weekend on Nantucket.But the weekend doesn’t turn out to be a joyful Hallmark movie."
  },

  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689067569/ecommerce-images/61897971_fuzbs7.jpg",
    name: "The Quiet Tenant",
    author: "Clémence Michallon",
    price: 590,
    originalPrice: 500,
    isBestSeller: false,
    category: "Fiction",
    rating: 2,
    description: "Aidan Thomas is a hard-working family man and a somewhat beloved figure in the small upstate New York town where he lives. He’s the kind of man who always lends a hand and has a good word for everyone. But Aidan has a dark secret he’s been keeping from everyone in town and those closest to him. He’s a kidnapper and serial killer. Aidan has murdered eight women and there’s a ninth he has earmarked for death: Rachel, imprisoned in a backyard shed, fearing for her life."
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689067778/ecommerce-images/81KXPEJhDML._AC_UF1000_1000_QL80__mathso.jpg",
    name: "Maeve Fly",
    author: "C.J. Leede",
    price: 567,
    originalPrice: 790,
    isBestSeller: true,
    category: "Horror",
    rating: 5,
    description: "By day, Maeve Fly works at the happiest place in the world as every child’s favorite ice princess. By the neon night glow of the Sunset Strip, Maeve haunts the dive bars with a drink in one hand and a book in the other, imitating her misanthropic literary heroes. But when Gideon Green - her best friend’s brother - moves to town, he awakens something dangerous within her, and the world she knows suddenly shifts beneath her feet. Untethered, Maeve ditches her discontented act and tries on a new persona.A bolder, bloodier one, inspired by the pages of American Psycho.Step aside Patrick Bateman, it’s Maeve’s turn with the knife."
  },

  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689067901/ecommerce-images/41N4b-ptMnL._AC_UF1000_1000_QL80__vgafo9.jpg",
    name: "Fat Witch Summer",
    author: "Lizzy Ives",
    price: 489,
    originalPrice: 1500,
    isBestSeller: false,
    category: "Non Fiction",
    rating: 4,
    description: "Dumplin’ meets The Craft in this body-positive fantasy novel for fans of summer road trips, female friendship, and magic. Sixteen- year - old Thrash doesn’t enchant eyeliner over her lids or clear her acne with magic.She is plus - size, but she doesn’t hate what she sees in the mirror—that’s the realm of her mother, Osmarra, a slim and elegant Glamour witch.When Thrash unexpectedly breaks a mirror with her mind, she discovers she has a knack for magic and will receive one of the three sanctioned Gifts: Glamour, Growth, or Sight.The only problem is that mothers choose the Gifts, and Osmarra is convinced that the Gift of Glamour will fix her daughter’s looks."
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689068007/ecommerce-images/9780593471920_ncpykb.jpg",
    name: "Dead Eleven",
    author: "Jimmy Juliano",
    price: 235,
    originalPrice: 500,
    isBestSeller: false,
    category: "Non Fiction",
    rating: 2,
    description: "On a creepy island where everyone has a strange obsession with the year 1994, a newcomer arrives, hoping to learn the truth about her son's death--but finds herself pulled deeper and deeper into the bizarrely insular community and their complicated rules... Clifford Island.When Willow Stone finds these words written on the floor of her deceased son's bedroom, she's perplexed.She's never heard of it before, but soon learns it's a tiny island off of Wisconsin's Door County peninsula, 200 miles from Willows home.Why would her son write this on his floor? Determined to find answers, Willow sets out for the island."
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689068079/ecommerce-images/91h2180IvoL._AC_UF1000_1000_QL80__taknrm.jpg",
    name: "Where Echoes Die",
    author: "Courtney Gould",
    price: 789,
    originalPrice: 249,
    isBestSeller: false,
    category: "Non Fiction",
    rating: 3,
    description: "Beck Birsching has been adrift since the death of her mother, a brilliant but troubled investigative reporter. She finds herself unable to stop herself from slipping into memories of happier days, clamoring for a time when things were normal. So when a mysterious letter in her mother’s handwriting arrives in the mail with the words Come and find me, pointing to a town called Backravel, Beck hopes that it may hold the answers."
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689068152/ecommerce-images/81TaF2bL9IL._AC_UF1000_1000_QL80__ry3zrn.jpg",
    name: "The Beach at Summerly",
    author: "Beatriz Williams",
    price: 900,
    originalPrice: 195,
    isBestSeller: false,
    category: "Fiction",
    rating: 3,
    description: "New York Times bestseller Beatriz Williams returns with a ravishing summer read, taking readers back to a mid-century New England rich with secrets and Cold War intrigue. June 1946. As the residents of Winthrop Island prepare for the first summer season after the sacrifice of war, a glamorous new figure moves into the guest cottage at Summerly, the idyllic seaside estate of the wealthy Peabody family.To Emilia Winthrop, daughter of Summerly’s year- round caretaker and a descendant of the island’s settlers, Olive Rainsford opens a window into a world of shining possibility.While Emilia spent the war years caring for her incapacitated mother, Olive traveled the world, married fascinating men, and involved herself in political causes.She’s also the beloved aunt of the two surviving Peabody sons, Amory and Shep, with whom Emilia has a tangled romantic history."
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689068259/ecommerce-images/63222106_s53pyk.jpg",
    name: "The Spare Room",
    author: "Andrea Bartz",
    price: 876,
    originalPrice: 205,
    isBestSeller: false,
    category: "Fiction",
    rating: 3,
    description: "Staying with a friend and her husband is sexier—and deadlier—than anyone could have imagined, in this provocative domestic suspense novel from the New York Times bestselling author of the Reese’s Book Club pick We Were Never Here. Kelly’s new life in Philadelphia has turned into a nightmare: She’s friendless and jobless, and the lockdown has her trapped in a tiny apartment with the man she gave up everything for, who’s just called off their wedding.The only bright spot is her newly rekindled friendship with her childhood friend Sabrina—now a glamorous bestselling author with a handsome, high- powered husband."
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689068725/ecommerce-images/81fN7vlmT5L._AC_UF1000_1000_QL80__iv8rb4.jpg",
    name: "Save What's Left",
    author: "Elizabeth Castellano",
    price: 1000,
    originalPrice: 999,
    isBestSeller: false,
    category: "Horror",
    rating: 4,
    description: "When Kathleen Deane's husband, Tom, tells her he's no longer happy with his life and their marriage, Kathleen is confused. They live in Kansas. They've been married thirty years. Who said anything about being happy? But with Tom off finding himself, Kathleen starts to think about what she wants. And her thoughts lead her to a small beach community on the east coast, a town called Whitbey that has always looked lovely in the Christmas letters her childhood friend Josie sends every year."
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689068532/ecommerce-images/81_tLsaPhEL._AC_UF1000_1000_QL80__z7jnyu.jpg",
    name: "House Woman",
    author: "Adorah Nworah",
    price: 698,
    originalPrice: 699,
    isBestSeller: false,
    category: "Horror",
    rating: 4,
    description: "When Ikemefuna is put on a plane from Lagos to Texas, she anticipates her newly arranged All-American life: a handsome husband, a beautiful red-brick mansion in Sugar Land, pizza parlors, and dance classes. Desperate to please, she'll happily cater to her family's needs.But Ikemefuna soon discovers what it actually means to live with her in -laws.Demands for a grandson grow urgent as her every move comes under scrutiny.As Ikemefuna finds there’s no way out, her new husband grapples with the influence of his parents against his own increasing affection for her."
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dgiibcwd7/image/upload/v1689068625/ecommerce-images/62562854_snctlb.jpg",
    name: "Will They or Won't They",
    author: "Ava Wilder",
    price: 40,
    originalPrice: 349,
    isBestSeller: false,
    category: "Non Fiction",
    rating: 1,
    description: "On screen, they're in love. Off screen, they can't stand each other. Two co-stars with a complex history reunite to film the final season of a beloved paranormal drama in this tension-filled will they won't they romance from the author of How to Fake It in Hollywood. Lilah Hunter and Shane McCarthy are madly in love— at least, their characters are.As the stars of the hit paranormal TV show Intangible, they spent years pining for each other on- screen… until Lilah ditched the show at the end of season five in hopes of becoming a film star.With no such luck, she’s back to film the much - hyped ninth and final season, in which their characters will get together at last."
  },
];