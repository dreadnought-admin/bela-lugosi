require 'faker'
require 'byebug'

puts "Seeding users..."

u1 = User.create(username: "Peter Steele", email: Faker::Internet.email, password_digest: "password", avatar: nil)
u2 = User.create(username: "Robert Smith", email: Faker::Internet.email, password_digest: "itsfridayiminlove", avatar: nil)
u3 = User.create(username: "Siouxsie Sioux", email: Faker::Internet.email, password_digest: "arabiannights3", avatar: nil)
u4 = User.create(username: "Bela Lugosi", email: Faker::Internet.email, password_digest: "imdeadimdeadimdead", avatar: nil)

puts "Seeding poems..."

p1 = Poem.create(user_id: u1.id, title: "Alone", author: "Edgar Allan Poe", poem_type: "AABB", genre: "Gothic", year_published: 1829, poem_txt: "From childhood’s hour I have not been
    As others were—I have not seen\n
    As others saw—I could not bring\n
    My passions from a common spring—\n
    From the same source I have not taken\n
    My sorrow—I could not awaken\n
    My heart to joy at the same tone—\n
    And all I lov’d—I lov’d alone—\n
    Then—in my childhood—in the dawn\n
    Of a most stormy life—was drawn\n
    From ev’ry depth of good and ill\n
    The mystery which binds me still—\n
    From the torrent, or the fountain—\n
    From the red cliff of the mountain—\n
    From the sun that ’round me roll’d\n
    In its autumn tint of gold—\n
    From the lightning in the sky\n
    As it pass’d me flying by—\n
    From the thunder, and the storm—\n
    And the cloud that took the form\n
    (When the rest of Heaven was blue)\n
    Of a demon in my view—\n")

p2 = Poem.create(user_id: u2.id, title: "The Haunted Palace", author: "Edgar Allan Poe", poem_type: "ABABCDCD", genre: "Gothic", year_published: 1839, poem_txt: "In the greenest of our valleys
    By good angels tenanted,
    Once a fair and stately palace—
    Radiant palace—reared its head.
    In the monarch Thought’s dominion,
    It stood there!
    Never seraph spread a pinion
    Over fabric half so fair!
    
    Banners yellow, glorious, golden,
    On its roof did float and flow
    (This—all this—was in the olden
    Time long ago)
    And every gentle air that dallied,
    In that sweet day,
    Along the ramparts plumed and pallid,
    A wingèd odor went away.
    
    Wanderers in that happy valley,
    Through two luminous windows, saw
    Spirits moving musically
    To a lute’s well-tunèd law,
    Round about a throne where, sitting,
    Porphyrogene!
    In state his glory well befitting,
    The ruler of the realm was seen.
    
    And all with pearl and ruby glowing
    Was the fair palace door,
    Through which came flowing, flowing, flowing
    And sparkling evermore,
    A troop of Echoes, whose sweet duty
    Was but to sing,
    In voices of surpassing beauty,
    The wit and wisdom of their king.
    
    But evil things, in robes of sorrow,
    Assailed the monarch’s high estate;
    (Ah, let us mourn!—for never morrow
    Shall dawn upon him, desolate!)
    And round about his home the glory
    That blushed and bloomed
    Is but a dim-remembered story
    Of the old time entombed.
    
    And travellers, now, within that valley,
    Through the red-litten windows see
    Vast forms that move fantastically
    To a discordant melody;
    While, like a ghastly rapid river,
    Through the pale door
    A hideous throng rush out forever,
    And laugh—but smile no more."
    )

p3 = Poem.create(user_id: u1.id, title: "Lady Lazarus", author: "Sylvia Plath", poem_type: "Free Verse", genre: "Gothic", year_published: 1965, poem_txt: "I have done it again.   
    One year in every ten   
    I manage it——

    A sort of walking miracle, my skin   
    Bright as a Nazi lampshade,   
    My right foot

    A paperweight,
    My face a featureless, fine   
    Jew linen.

    Peel off the napkin   
    O my enemy.   
    Do I terrify?——

    The nose, the eye pits, the full set of teeth?   
    The sour breath
    Will vanish in a day.

    Soon, soon the flesh
    The grave cave ate will be   
    At home on me

    And I a smiling woman.   
    I am only thirty.
    And like the cat I have nine times to die.

    This is Number Three.   
    What a trash
    To annihilate each decade.

    What a million filaments.   
    The peanut-crunching crowd   
    Shoves in to see

    Them unwrap me hand and foot——
    The big strip tease.   
    Gentlemen, ladies

    These are my hands   
    My knees.
    I may be skin and bone,

    Nevertheless, I am the same, identical woman.   
    The first time it happened I was ten.   
    It was an accident.

    The second time I meant
    To last it out and not come back at all.   
    I rocked shut

    As a seashell.
    They had to call and call
    And pick the worms off me like sticky pearls.

    Dying
    Is an art, like everything else.   
    I do it exceptionally well.

    I do it so it feels like hell.   
    I do it so it feels real.
    I guess you could say I’ve a call.

    It’s easy enough to do it in a cell.
    It’s easy enough to do it and stay put.   
    It’s the theatrical

    Comeback in broad day
    To the same place, the same face, the same brute   
    Amused shout:

    ‘A miracle!’
    That knocks me out.   
    There is a charge

    For the eyeing of my scars, there is a charge   
    For the hearing of my heart——
    It really goes.

    And there is a charge, a very large charge   
    For a word or a touch   
    Or a bit of blood

    Or a piece of my hair or my clothes.   
    So, so, Herr Doktor.   
    So, Herr Enemy.

    I am your opus,
    I am your valuable,   
    The pure gold baby

    That melts to a shriek.   
    I turn and burn.
    Do not think I underestimate your great concern.

    Ash, ash—
    You poke and stir.
    Flesh, bone, there is nothing there——

    A cake of soap,   
    A wedding ring,   
    A gold filling.

    Herr God, Herr Lucifer   
    Beware
    Beware.

    Out of the ash
    I rise with my red hair   
    And I eat men like air."
    )

p4 = Poem.create(user_id: u4.id, title: "Ariel", author: "Sylvia Plath", poem_type: "Free Verse", genre: "Gothic", year_published: 1965, poem_txt: "Stasis in darkness.
    Then the substanceless blue   
    Pour of tor and distances.

    God’s lioness,   
    How one we grow,
    Pivot of heels and knees!—The furrow

    Splits and passes, sister to   
    The brown arc
    Of the neck I cannot catch,

    Nigger-eye   
    Berries cast dark   
    Hooks—

    Black sweet blood mouthfuls,   
    Shadows.
    Something else

    Hauls me through air—
    Thighs, hair;
    Flakes from my heels.

    White
    Godiva, I unpeel—
    Dead hands, dead stringencies.

    And now I
    Foam to wheat, a glitter of seas.   
    The child’s cry

    Melts in the wall.   
    And I
    Am the arrow,

    The dew that flies
    Suicidal, at one with the drive   
    Into the red

    Eye, the cauldron of morning."
    )

p5 = Poem.create(user_id: u1.id, title: "Daddy", author: "Sylvia Plath", poem_type: "Free Verse", genre: "Gothic/Romantic", year_published: 1960, poem_txt: "
    You do not do, you do not do   
        Any more, black shoe
        In which I have lived like a foot   
        For thirty years, poor and white,   
        Barely daring to breathe or Achoo.
        
        Daddy, I have had to kill you.   
        You died before I had time——
        Marble-heavy, a bag full of God,   
        Ghastly statue with one gray toe   
        Big as a Frisco seal
        
        And a head in the freakish Atlantic   
        Where it pours bean green over blue   
        In the waters off beautiful Nauset.   
        I used to pray to recover you.
        Ach, du.
        
        In the German tongue, in the Polish town   
        Scraped flat by the roller
        Of wars, wars, wars.
        But the name of the town is common.   
        My Polack friend
        
        Says there are a dozen or two.   
        So I never could tell where you   
        Put your foot, your root,
        I never could talk to you.
        The tongue stuck in my jaw.
        
        It stuck in a barb wire snare.   
        Ich, ich, ich, ich,
        I could hardly speak.
        I thought every German was you.   
        And the language obscene
        
        An engine, an engine
        Chuffing me off like a Jew.
        A Jew to Dachau, Auschwitz, Belsen.   
        I began to talk like a Jew.
        I think I may well be a Jew.
        
        The snows of the Tyrol, the clear beer of Vienna   
        Are not very pure or true.
        With my gipsy ancestress and my weird luck   
        And my Taroc pack and my Taroc pack
        I may be a bit of a Jew.
        
        I have always been scared of you,
        With your Luftwaffe, your gobbledygoo.   
        And your neat mustache
        And your Aryan eye, bright blue.
        Panzer-man, panzer-man, O You——
        
        Not God but a swastika
        So black no sky could squeak through.   
        Every woman adores a Fascist,   
        The boot in the face, the brute   
        Brute heart of a brute like you.
        
        You stand at the blackboard, daddy,   
        In the picture I have of you,
        A cleft in your chin instead of your foot   
        But no less a devil for that, no not   
        Any less the black man who
        
        Bit my pretty red heart in two.
        I was ten when they buried you.   
        At twenty I tried to die
        And get back, back, back to you.
        I thought even the bones would do.
        
        But they pulled me out of the sack,   
        And they stuck me together with glue.   
        And then I knew what to do.
        I made a model of you,
        A man in black with a Meinkampf look
        
        And a love of the rack and the screw.   
        And I said I do, I do.
        So daddy, I’m finally through.
        The black telephone’s off at the root,   
        The voices just can’t worm through.
        
        If I’ve killed one man, I’ve killed two——
        The vampire who said he was you   
        And drank my blood for a year,
        Seven years, if you want to know.
        Daddy, you can lie back now.
        
        There’s a stake in your fat black heart   
        And the villagers never liked you.
        They are dancing and stamping on you.   
        They always knew it was you.
        Daddy, daddy, you bastard, I’m through."
    )

    puts "Seeding book..."

b1 = Book.create!(user_id: u4.id, title: "Dracula", author: "Bram Stoker", year_published: 1897, genre: "Gothic", cover_img: "https://wendyvancamp.files.wordpress.com/2014/10/dracula-book-cover.jpg", 
    summary: "Dracula is a novel by Bram Stoker, published in 1897. 
    An epistolary novel, the narrative is related through letters, diary entries, and newspaper articles. 
    It has no single protagonist, but opens with solicitor Jonathan Harker taking a 
    business trip to stay at the castle of a Transylvanian nobleman, Count Dracula."
)

b2 = Book.create!(user_id: u1.id, title: "Strange Case of Dr. Jekyll and Mr. Hyde", author: "Robert Louis Stevenson", year_published: 1886, genre: "Gothic", cover_img: "https://www.gutenberg.org/files/43/43-h/images/cover.jpg", 
    summary: "Strange Case of Dr Jekyll and Mr Hyde is a 1886 Gothic novella by Scottish author Robert Louis Stevenson. 
    It follows Gabriel John Utterson, a London-based legal practitioner who investigates a series of strange occurrences
    between his old friend Dr. Henry Jekyll and a murderous criminal named Edward Hyde.

    Strange Case of Dr Jekyll and Mr Hyde is one of the most famous pieces of English literature, 
    and is considered to be a defining book of the gothic horror genre. 
    The novella has also had a sizable impact on popular culture, with the phrase 
    'Jekyll and Hyde' being used in vernacular to refer to people with an outwardly good but 
    sometimes shockingly evil nature.

    The tale—told largely from the perspective of Mr. Gabriel John Utterson, a London lawyer 
    and friend of Dr. Henry Jekyll—begins quietly, with an urbane conversation between Utterson 
    and his friend Mr. Richard Enfield. 
    The latter tells how, returning home in the early hours of the morning, 
    he witnessed a “horrible” incident: a small girl, running across the street, was 
    trampled by a man named Mr. Edward Hyde, who left her screaming on the ground. 
    After being caught, Hyde, who has a face that inspires loathing, agreed to pay the
     child’s family, and he retrieved from a dilapidated building a check from the account 
     of a respected man. Enfield assumes that Hyde is blackmailing that man, whom Utterson 
     knows to be his client Jekyll."
)

b3 = Book.create!(user_id: u3.id, title: "The Castle of Otranto", author: "Horace Walpol", year_published: 1764, genre: "Gothic", cover_img: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781625580023/the-castle-of-otranto-9781625580023_hr.jpg", 
    summary: "Walpole presents The Castle of Otranto as the English translation of a recently discovered manuscript. 
    The preface to the first edition suggests that the manuscript was written sometime between 1095 and 1243 
    (during the Crusades), “or not long afterwards,” and subsequently printed in Naples in 1529. The manuscript 
    tells the story of Manfred, a prince of Otranto. At the beginning of the story, Manfred impatiently awaits 
    the marriage of his sickly son, Conrad, to the princess Isabella. Manfred’s subjects note his impatience. 
    They suspect that Manfred has arranged the marriage in the hope of avoiding an ancient prophecy that predicted his
    castle and his rulership of Otranto “should pass from the present family, whenever the real owner should be grown 
    too large to inhabit it.”"
)

b4 = Book.create!(user_id: u2.id, title: "Northanger Abbey", author: "Jane Austen", year_published: 1817, genre: "Gothic", cover_img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1602624378-412KU2svW7L.jpg?crop=1xw:0.999xh;center,top&resize=768:*", 
    summary: "On the surface, Northanger Abbey appears to be a Gothic novel—but it's actually an affectionate and deliberate parody of the novels that were extremely popular at the time of publication. 
    Catherine, Northanger Abbey's protagonist, can't get enough of books like Ann Radcliffe's 
    The Mysteries of Udolpho. Austen, ever attuned to social comedy, is also parodying the reader."
)

b5 = Book.create!(user_id: u4.id, title: "The Turn of the Screw", author: "Henry James", year_published: 1898, genre: "Gothic", cover_img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1602775316-61cSMNVpkUL.jpg?crop=1xw:0.999xh;center,top&resize=768:*", 
    summary: "Henry James's classic work of psychological horror has inspired many adaptations, including, most recently, Netflix's The Haunting of Bly Manor. The novella follows a governess who accepts a position in a crumbling old house, where she hears ghosts. Reading 
    The Turn of the Screw is a deliberately destabilizing experience—you never quite know who is 
    telling the truth, because the characters don't, either."
)

b6 = Book.create!(user_id: u1.id, title: "The Fall of the House of Usher and Other Tales", author: "Edgar Allan Poe", year_published: 1960, genre: "Gothic Fiction", cover_img: "https://m.media-amazon.com/images/I/51xkACIBfRL._AC_SY780_.jpg",
    summary: "Classic tales of mystery, terror, imagination, and suspense from the celebrated master of the macabre.

    This volume gathers together fourteen of Edgar Allan Poe's richest and most influential tales, including: 
    “The Pit and the Pendulum,” his reimagining of Inquisition tortures; “The Tell-Tale Heart,” an exploration of a murderer’s 
    madness, which Stephen King called “the best tale of inside evil ever written”; “The Fall of the House of Usher,” Poe’s tour de 
    force about a family doomed by a grim bloodline curse; and his pioneering detective stories, “The Purloined Letter” and “The Murders
     in the Rue Morgue,” featuring a rational investigator with a poetic soul. Also included is Poe’s only full-length novel, Narrative of A. Gordon Pym."
)

b7 = Book.create!(user_id: u1.id, title: "Wuthering Heights", author: "Emily Brontë", year_published: 1847, genre: "Gothic Fiction", cover_img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1602777549-41dAOQBWAUL.jpg?crop=1xw:0.981xh;center,top&resize=768:*",
    summary: "Wuthering Heights is an 1847 novel by Emily Brontë, initially published under her pen name Ellis Bell. It concerns two families of the landed gentry living on the West Yorkshire moors, the Earnshaws and the Lintons, and their turbulent relationships with the Earnshaws' foster son, Heathcliff. The novel was influenced by Romanticism and Gothic fiction.

    Wuthering Heights is now widely considered to be one of the greatest novels ever written in English, but contemporaneous reviews were polarised. It was controversial for its depictions of mental and physical cruelty, including domestic abuse, and for its challenges to Victorian morality and religious and societal values."
)

b8 = Book.create!(user_id: u2.id, title: "Frankenstein", author: "Mary Shelley", year_published: 1818, genre: "Gothic Fiction", cover_img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1602623954-416QjTxduzL.jpg?crop=1xw:0.939xh;center,top&resize=768:*",
    summary: "Frankenstein; or, The Modern Prometheus is an 1818 novel written by English author Mary Shelley. Frankenstein tells the story of Victor Frankenstein, a young scientist who creates a sapient creature in an unorthodox scientific experiment. Shelley started writing the story when she was 18, and the first edition was published anonymously in London on 1 January 1818, when she was 20. Her name first appeared in the second edition, which was published in Paris in 1821.

    Shelley travelled through Europe in 1815, moving along the river Rhine in Germany, and stopping in Gernsheim, 17 kilometres (11 mi) away from Frankenstein Castle, where, two centuries before, an alchemist had engaged in experiments.She then journeyed to the region of Geneva, Switzerland, where much of the story takes place. Galvanism and occult ideas were topics of conversation for her companions, particularly for her lover and future husband Percy B. Shelley. In 1816 Mary, Percy and Lord Byron had a competition to see who could write the best horror story. After thinking for days, Shelley was inspired to write Frankenstein after imagining a scientist who created life and was horrified by what he had made."
)



puts "Seeding favorites..."

# Favorite.create!([
#     { user_id: u1.id, book_id: b2.id }, 
#     { user_id: u4.id, book_id: b1.id }, 
#     { user_id: u3.id, book_id: b2.id },
#     { user_id: u2.id, book_id: b3.id },
#     { user_id: u3.id, book_id: b1.id },
#     { user_id: u1.id, book_id: b3.id } ]
# )

f1 = Favorite.create!(user_id: u1.id, book_id: b2.id)
f2 = Favorite.create!(user_id: u2.id, book_id: b1.id)
f3 = Favorite.create!(user_id: u4.id, book_id: b3.id)
f4 = Favorite.create!(user_id: u3.id, book_id: b1.id)


puts 'Seeding favorite poems...'




puts "✅ Done seeding!"