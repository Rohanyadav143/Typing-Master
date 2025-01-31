function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        time1: params.get('time1'),
        type1: params.get('type1'),
    };
}
const { time1, type1 } = getQueryParams();
let paraType;
const timeDiv = document.getElementById('time-run');
let stoptime;
switch (parseInt(time1)) {
    case 1: stoptime = 30; break;
    case 2: stoptime = 60; break;
    case 3: stoptime = 120; break;
    case 4: stoptime = 180; break;
    case 5: stoptime = 300; break;
    default: stoptime = 600;
}
let interval;
let timerStarted = false;
function startCountdown() {
    let timeLeft = stoptime;
    clearInterval(interval);
    interval = setInterval(() => {
    if (timeLeft > 0) {
    timeDiv.textContent = `Time Left : ${timeLeft} Seconds.`;
        timeLeft--;
    } else {
        document.getElementById('time-run').textContent = "Time Left : Time Over !";
        feedback();
    }
    }, 1000);
}

const writeBox = document.getElementById("write-box");
writeBox.addEventListener('input', () => {
    if (!timerStarted) {
        timerStarted = true;
        startCountdown();
    }
});
const easyTexts = [
    `Once upon a time, in a small village, there lived a young boy with his parents. He spent most of his time playing outside, particularly near the fields close to their house. One day, while walking home from school, he heard a soft whimpering sound coming from the bushes. Intrigued, he approached the noise and discovered a tiny, frightened puppy curled up, shivering in the cold. The puppy looked weak and lonely, and it was clear it had been abandoned. The boy looked around, but there was no sign of anyone nearby who might be looking for the pup. Feeling sorry for it, he gently picked it up and carried it home. He decided to take the puppy with him, hoping his parents would let him keep it. The boy already felt a special connection to the little creature, even though he didn't know its story. The puppy gazed up at him with trusting eyes as if thanking him for the rescue.When the boy arrived at his house, he showed the puppy to his parents. His mother smiled warmly but reminded him that having a pet required a lot of care and responsibility. His father asked if the puppy belonged to anyone in the village, as it might have just wandered off.`,
    `The boy promised he would ask around to see if anyone had lost a puppy. His parents agreed to let him keep the dog for a little while until they could find its owner. The boy named the puppy 'Bruno' and began looking after him, feeding him meals and giving him a soft bed. Bruno quickly grew fond of his new home and would follow the boy everywhere he went. They soon became inseparable, enjoying their days together in the village. The boy would play with Bruno in the fields, feeling a deep joy in his new companionship. But a part of him always wondered if Bruno had a real home somewhere.The bond between them deepened as they shared their adventures, playing together and becoming best friends. Bruno’s playful nature made everyone in the village smile. But the boy could not shake the feeling that Bruno belonged to someone. He was determined to find out where the puppy came from, and so he kept searching for answers.One evening, while walking near the edge of the fields, the boy noticed an old man sitting on a bench, looking sad and lonely. The boy approached him and asked if something was wrong. The man explained that he had lost his beloved puppy a few weeks ago. His puppy had run away, and despite searching for days, he had never found it.`,
    `When the boy arrived at his house, he showed the puppy to his parents. His mother smiled warmly but reminded him that having a pet required a lot of care and responsibility. His father asked if the puppy belonged to anyone in the village, as it might have just wandered off. The boy promised he would ask around to see if anyone had lost a puppy. His parents agreed to let him keep the dog for a little while until they could find its owner. The boy named the puppy 'Bruno' and began looking after him, feeding him meals and giving him a soft bed. Bruno quickly grew fond of his new home and would follow the boy everywhere he went. They soon became inseparable, enjoying their days together in the village. The boy would play with Bruno in the fields, feeling a deep joy in his new companionship. But a part of him always wondered if Bruno had a real home somewhere.One evening, while walking near the edge of the fields, the boy noticed an old man sitting on a bench, looking sad and lonely. The boy approached him and asked if something was wrong. The man explained that he had lost his beloved puppy a few weeks ago. His puppy had run away, and despite searching for days, he had never found it.`,
    `The boy asked the man to describe his puppy, and as he listened carefully, he realized that the puppy the man had lost matched Bruno perfectly. The boy’s heart skipped a beat. He had found the puppy’s true owner. He immediately took the man to his house to show him Bruno. The man’s face lit up with joy when he saw Bruno. The puppy barked happily and ran straight into the man’s arms, wagging its tail furiously.The bond between them deepened as they shared their adventures, playing together and becoming best friends. Bruno’s playful nature made everyone in the village smile. But the boy could not shake the feeling that Bruno belonged to someone. He was determined to find out where the puppy came from, and so he kept searching for answers.One evening, while walking near the edge of the fields, the boy noticed an old man sitting on a bench, looking sad and lonely. The boy approached him and asked if something was wrong. The man explained that he had lost his beloved puppy a few weeks ago. His puppy had run away, and despite searching for days, he had never found it. The boy asked the man to describe his puppy, and as he listened carefully, he realized that the puppy the man had lost matched Bruno perfectly.`,
    `The next day, the boy went from house to house in the village, asking if anyone had lost a puppy. He described Bruno’s appearance to every villager he met. But no one seemed to recognize the little dog. He also posted a flyer in the village square, hoping someone would come forward and claim the puppy. Despite his efforts, several days went by with no one showing up to take Bruno. The boy continued to care for Bruno, who was growing stronger every day. The bond between them deepened as they shared their adventures, playing together and becoming best friends. Bruno’s playful nature made everyone in the village smile. But the boy could not shake the feeling that Bruno belonged to someone. He was determined to find out where the puppy came from, and so he kept searching for answers.One evening, while walking near the edge of the fields, the boy noticed an old man sitting on a bench, looking sad and lonely. The boy approached him and asked if something was wrong. The man explained that he had lost his beloved puppy a few weeks ago. His puppy had run away, and despite searching for days, he had never found it. The boy asked the man to describe his puppy, and as he listened carefully, he realized that the puppy the man had lost matched Bruno perfectly.`,
    `The boy’s heart skipped a beat. He had found the puppy’s true owner. He immediately took the man to his house to show him Bruno. The man’s face lit up with joy when he saw Bruno. The puppy barked happily and ran straight into the man’s arms, wagging its tail furiously.Despite his efforts, several days went by with no one showing up to take Bruno. The boy continued to care for Bruno, who was growing stronger every day. The bond between them deepened as they shared their adventures, playing together and becoming best friends. Bruno’s playful nature made everyone in the village smile. But the boy could not shake the feeling that Bruno belonged to someone. He was determined to find out where the puppy came from, and so he kept searching for answers.One evening, while walking near the edge of the fields, the boy noticed an old man sitting on a bench, looking sad and lonely. The boy approached him and asked if something was wrong. The man explained that he had lost his beloved puppy a few weeks ago. His puppy had run away, and despite searching for days, he had never found it. The boy asked the man to describe his puppy, and as he listened carefully, he realized that the puppy the man had lost matched Bruno perfectly.`,
    `One evening, while walking near the edge of the fields, the boy noticed an old man sitting on a bench, looking sad and lonely. The boy approached him and asked if something was wrong. The man explained that he had lost his beloved puppy a few weeks ago. His puppy had run away, and despite searching for days, he had never found it. The boy asked the man to describe his puppy, and as he listened carefully, he realized that the puppy the man had lost matched Bruno perfectly. The boy’s heart skipped a beat. He had found the puppy’s true owner. He immediately took the man to his house to show him Bruno. The man’s face lit up with joy when he saw Bruno. The puppy barked happily and ran straight into the man’s arms, wagging its tail furiously.One evening, while walking near the edge of the fields, the boy noticed an old man sitting on a bench, looking sad and lonely. The boy approached him and asked if something was wrong. The man explained that he had lost his beloved puppy a few weeks ago. His puppy had run away, and despite searching for days, he had never found it. The boy asked the man to describe his puppy, and as he listened carefully, he realized that the puppy the man had lost matched Bruno perfectly.`,
    `The boy felt a twinge of sadness but also a sense of satisfaction. He had done the right thing. The old man was incredibly grateful to the boy for taking care of Bruno and keeping him safe all these days. He thanked the boy profusely and promised that Bruno would always be welcome to visit. The boy’s heart ached as he saw Bruno happily reunite with his owner, but he knew it was for the best. Bruno had found his true home, where he was loved and cared for. The boy said goodbye to Bruno with a heavy heart, but also a smile, knowing that the puppy was now happy and in good hands. It was hard to let go, but the boy felt proud of his kindness and selflessness. He walked back home, feeling both sad and content at the same time.When the boy arrived at his house, he showed the puppy to his parents. His mother smiled warmly but reminded him that having a pet required a lot of care and responsibility. His father asked if the puppy belonged to anyone in the village, as it might have just wandered off. The boy promised he would ask around to see if anyone had lost a puppy. His parents agreed to let him keep the dog for a little while until they could find its owner.`,
    `The boy named the puppy 'Bruno' and began looking after him, feeding him meals and giving him a soft bed. Bruno quickly grew fond of his new home and would follow the boy everywhere he went. They soon became inseparable, enjoying their days together in the village. The boy would play with Bruno in the fields, feeling a deep joy in his new companionship. But a part of him always wondered if Bruno had a real home somewhere.The bond between them deepened as they shared their adventures, playing together and becoming best friends. Bruno’s playful nature made everyone in the village smile. But the boy could not shake the feeling that Bruno belonged to someone. He was determined to find out where the puppy came from, and so he kept searching for answers.One evening, while walking near the edge of the fields, the boy noticed an old man sitting on a bench, looking sad and lonely. The boy approached him and asked if something was wrong. The man explained that he had lost his beloved puppy a few weeks ago. His puppy had run away, and despite searching for days, he had never found it. The boy asked the man to describe his puppy, and as he listened carefully, he realized that the puppy the man had lost matched Bruno perfectly.`,
    `The days that followed were quiet for the boy. He missed Bruno’s playful barks and wagging tail, but he knew he had done the right thing. A few weeks later, the old man came to visit the boy. He had a surprise for him. In his arms, he held a small, fluffy puppy that looked up at the boy with bright eyes. The man explained that he wanted to thank the boy for taking care of Bruno, and so he was giving him a new puppy as a token of One evening, while walking near the edge of the fields, the boy noticed an old man sitting on a bench, looking sad and lonely. The boy approached him and asked if something was wrong. The man explained that he had lost his beloved puppy a few weeks ago. His puppy had run away, and despite searching for days, he had never found it. The boy asked the man to describe his puppy, and as he listened carefully, he realized that the puppy the man had lost matched Bruno perfectly. The boy’s heart skipped a beat. He had found the puppy’s true owner. He immediately took the man to his house to show him Bruno. The man’s face lit up with joy when he saw Bruno. The puppy barked happily and ran straight into the man’s arms, wagging its tail furiously.`
];
const mediumTexts = [
    `The boy’s heart skipped a beat. He had found the puppy’s true owner. He immediately took the man to his house to show him Bruno. The man’s face lit up with joy when he saw Bruno. The puppy barked happily and ran straight into the man’s arms, wagging its tail furiously.Despite his efforts, several days went by with no one showing up to take Bruno. The boy continued to care for Bruno, who was growing stronger every day. The bond between them deepened as they shared their adventures, playing together and becoming best friends. Bruno’s playful nature made everyone in the village smile. But the boy could not shake the feeling that Bruno belonged to someone. He was determined to find out where the puppy came from, and so he kept searching for answers.One evening, while walking near the edge of the fields, the boy noticed an old man sitting on a bench, looking sad and lonely. The boy approached him and asked if something was wrong. The man explained that he had lost his beloved puppy a few weeks ago. His puppy had run away, and despite searching for days, he had never found it.`,
    "In an idyllic yet seemingly insular village, nestled amidst sprawling verdant meadows and rugged hills, there resided a young boy who, though ordinary in appearance, possessed an extraordinary sense of compassion. This boy, who found solace in the embrace of nature, often wandered the fields, his curiosity ever-persistent. One fateful afternoon, as he was meandering along a desolate path after school, a faint, almost imperceptible sound caught his ear—an inconspicuous whimper, barely audible amidst the rustling leaves. Intrigued by this enigmatic noise, the boy ventured toward the source, where he stumbled upon an emaciated and forlorn puppy, its coat matted and eyes reflecting an unfathomable sorrow. The creature, appearing utterly forsaken, seemed to embody the essence of desolation, a victim of neglect or abandonment. His heartstrings tugged, he resolved to rescue the fragile being from its evident misery, unaware of the profound bond that would soon transcend the boundaries of mere sympathy and evolve into something far more consequential.",
    "With unwavering resolve, the boy cradled the trembling puppy in his arms, delicately shielding it from the biting winds and biting cold of the late afternoon. Upon returning home, he presented the diminutive creature to his parents, their initial astonishment slowly giving way to concern. His mother, though sympathetic, reminded him of the onerous responsibilities that came with caring for an animal. His father, ever practical, raised the possibility that the puppy might belong to someone in the village, encouraging the boy to ascertain its origins. Reluctantly, the boy acknowledged the prospect that his newfound companion might indeed have a rightful owner, one who was possibly grieving the loss. Yet, an inexplicable attachment had already taken root in his heart, and despite his internal conflict, he promised to search the village for any sign of its true caretaker. He bestowed upon the puppy the name ‘Bruno,’ a name imbued with both warmth and fortitude, an embodiment of the hopes he harbored for the creature’s future.",
    "In the days that followed, the boy, resolute in his mission, traversed the winding lanes of the village, his every step imbued with the sense of purpose. He approached each household, questioning its inhabitants with tact and grace, but to his dismay, none seemed to recognize the puppy or its origins. The villagers, though kind and hospitable, offered no substantial information, their faces betraying only curiosity or indifference. Undeterred, the boy meticulously posted notices on every lamppost, in every shop window, in the hopes that some wayward soul would eventually respond. Yet, as time passed and the days turned into weeks, it became increasingly apparent that the puppy had no apparent home, no familiar face to claim it. Bruno, oblivious to the boy’s inner turmoil, grew stronger and more joyful with each passing day, his playful antics providing a welcome distraction from the boy’s mounting anxiety. Despite the unrelenting search, a gnawing uncertainty began to pervade the boy’s thoughts; was Bruno truly meant to be reunited with someone, or was he destined to remain by his side forever?",
    "One evening, as the boy walked toward the outskirts of the village, seeking respite from the wearying weight of his search, he noticed an elderly man sitting on a wooden bench, his countenance one of profound melancholy. The man appeared lost in his thoughts, his gaze distant and unfocused, as though burdened by an invisible sorrow. Approaching him with tentative steps, the boy inquired after his well-being, sensing that the man’s somber demeanor concealed a deeper grief. The elderly man, after a long pause, confided in the boy that he had recently lost his beloved puppy, a cherished companion of many years. The man described his puppy in vivid detail, each word laden with the pain of his loss. The boy, upon hearing this, felt a shiver of realization course through him, as the description eerily matched Bruno’s appearance. His heart raced as he pieced together the puzzle, his intuition guiding him toward an inevitable conclusion. With a surge of both apprehension and hope, the boy offered to take the man to his home, convinced that Bruno was indeed the lost puppy the man sought.",
    "The reunion was nothing short of emotional. As Bruno, upon hearing the familiar voice of the elderly man, bounded toward him with an exuberant joy that transcended the passage of time, the bond between them became abundantly clear. The old man’s eyes welled with tears, overwhelmed by the unexpected return of his beloved pet, whom he had mourned for so long. The boy, though deeply moved by the scene unfolding before him, couldn’t help but feel a pang of sorrow deep within his chest. He had grown fond of Bruno, the puppy who had brought so much light into his life, and yet, he knew in his heart that this was the right thing to do. The elderly man, overwhelmed by gratitude, profusely thanked the boy for his kindness and dedication. He promised that the boy would always be welcome to visit Bruno, should he ever wish to do so. The boy, though silently mourning the loss of his companion, smiled faintly, reassured by the knowledge that Bruno was finally home.He bestowed upon the puppy the name ‘Bruno,’ a name imbued with both warmth and fortitude, an embodiment of the hopes he harbored for the creature’s future.",
    "As the boy walked back toward his house, a sense of both fulfillment and melancholy settled within him. He had done the right thing, but it did little to ease the quiet ache in his heart. Bruno, after all, had been more than just a puppy to him; he had been a friend, a confidant, a companion during times of solitude. Yet, the boy understood that sometimes, the right thing was the hardest thing. The decision to reunite Bruno with his rightful owner, despite the emotional toll it had taken, was an act of selflessness that transcended personal desire. It was, he realized, a gesture of love, a love that was not bound by ownership but by the simple, unspoken truth that what truly matters is the happiness and well-being of those we care for. The boy returned home, his heart heavy yet at peace, knowing that in his brief time with Bruno, he had learned an invaluable lesson in compassion and sacrifice.He bestowed upon the puppy the name ‘Bruno,’ a name imbued with both warmth and fortitude, an embodiment of the hopes he harbored for the creature’s future.",
    "Weeks passed, and the boy continued his daily routines, though a subtle emptiness lingered in his life. He occasionally visited the elderly man, and each time he saw Bruno, now flourishing in his old home, his heart swelled with a bittersweet joy. Bruno seemed happy, thriving in the care of his true companion, a comfort to the boy. One day, as the boy sat with the elderly man in his garden, the man offered him a small, scruffy puppy, saying it was a gift to thank him for his kindness. The boy’s eyes widened in surprise as he held the tiny creature in his hands. It was a far cry from the majestic Bruno, but the moment he gazed into its innocent eyes, he felt an overwhelming sense of warmth and connection. He named the new puppy ‘Lucky,’ for he believed that in life, sometimes we are given second chances, unexpected blessings that restore our faith in the goodness of the world. Lucky, as it turned out, was the perfect companion, and over time, the boy’s heart healed, his life richer for having experienced the profound connection he had once shared with Bruno.",
    "In retrospect, the boy often thought about the extraordinary sequence of events that had led to the brief but meaningful companionship between him and Bruno. He realized that some moments in life, though fleeting, leave an indelible mark on our souls, shaping us in ways we cannot fully comprehend at the time. His experience with Bruno taught him that true love and friendship are not bound by ownership or possession; they are nurtured through kindness, selflessness, and the willingness to let go when the time is right. As he grew older, the boy carried these lessons with him, using them to guide his interactions with others. He understood that the most profound relationships in life are often those that require us to put aside our own desires for the greater good, and that the act of giving, whether of time, affection, or even a beloved pet, is what truly enriches our lives.He bestowed upon the puppy the name ‘Bruno,’ a name imbued with both warmth and fortitude, an embodiment of the hopes he harbored for the creature’s future.",
    "As the years passed and the boy grew into a young man, his experiences continued to shape his worldview. The memories of his time with Bruno and the lessons learned from that chapter of his life remained with him, a steady reminder of the value of compassion, empathy, and the quiet strength of the human spirit. He had become a person who valued the well-being of others above all else, someone who understood that the heart’s capacity for love is infinite, even if it must sometimes endure the pain of letting go. Eventually, the man found himself in a similar situation with a stray dog, one that had been abandoned and left to wander the streets. And though the circumstances were different, the core values that had guided him years ago remained unchanged. He took the dog in, offering it the same love and care he had once given to Bruno, not expecting anything in return but the quiet satisfaction of knowing that he had made a difference in another life.He bestowed upon the puppy the name ‘Bruno,’ a name imbued with both warmth and fortitude, an embodiment of the hopes he harbored for the creature’s future.",
];
const hardTexts = [
    "In the unfathomable recesses of the multiverse, a clandestine entity known as *Xylerion* resides, its very existence existing in a state of quasi-realization. Bound to the primordial equations of existence and governed by cryptic algorithms, *Xylerion* exists as an enigmatic amalgamation of both the known and the unknown. It thrives in a dimension where time is but an abstract construct, and the laws of physics are mere suggestions—fractured, chaotic, and malleable. The celestial beings within this dimension communicate through encrypted telepathic conduits, their thoughts transposed into complex quantum signatures, manifesting as geometric shapes and inter-dimensional hieroglyphs. Here, the concept of 'identity' is rendered irrelevant, as individual selfhood is but a transient illusion amidst the *n-dimensional* continuum.He bestowed upon the puppy the name ‘Bruno,’ a name imbued with both warmth and fortitude, an embodiment of the hopes he harbored for the creature’s future. It is within this void, this *gravitational well*, that the deepest mysteries of the cosmos lie dormant.",
    "The *Mandelbrot Set* of the universe, upon which the stability of *Xylerion* depends, teeters precariously at the edge of chaos. From within this set emerges an incomprehensible feedback loop, a self-referential paradox that negates any traditional understanding of causality. As each point within the set recursively doubles, it generates infinite layers of fractals, creating a labyrinth of spatial-time anomalies that bend the very fabric of reality. With every iteration, new universes, each governed by different laws and constants, unfold. The intrinsic properties of these new realities are *non-Euclidean*, rendering them inaccessible to the conventional perception of the sentient mind. Only those attuned to the subtle hum of the *Planck Length* can hope to perceive the faintest traces of these alternative existences.where even light succumbs to the infinite pull of gravity, lies a singularity of unimaginable density. This point, often referred to as a *black hole*, is a locus of infinite curvature, where the laws of physics as we know them break down entirely.",
    "In the abstract recesses of hyper-space, a phenomenon known as *dark energy* plays an integral role in maintaining the tenuous equilibrium of the cosmos. It manifests as an omnipresent force, elusive in its nature, whose influence is paradoxically both pervasive and invisible. The *quantum fluctuations* within this force generate entropic disturbances that propagate through the continuum of *space-time*, altering the very structure of the universe. In this state of flux, the fabric of reality itself becomes a *Lagrangian field*, oscillating between potential states of existence. Those who dare to probe the depths of this field risk succumbing to the intense gravitational forces, which threaten to collapse their understanding of *cosmological singularities* and *gravitational time dilation* into an indistinguishable blur of matter and energy.The event horizon, an impenetrable barrier surrounding the singularity, marks the point of no return, beyond which no information can escape. Here, *quantum entanglement*.",
    "At the nexus of all *symmetries* within the cosmic lattice lies a singular point of divergence, where the forces of nature converge in an intricate balance of tension and harmony. This critical threshold is defined by the *Higgs boson*, whose mass and interactions with the surrounding fields determine the very nature of matter itself. However, the true nature of the *Higgs Mechanism* remains a deeply guarded secret, one that transcends the conventional limitations of quantum mechanics. Those few who have ventured into the deepest layers of subatomic reality, probing the Higgs field's intricate structure, often return irrevocably altered—consumed by the paradoxical implications of existence and non-existence that permeate the subatomic ether.can hope to perceive the faintest traces of these alternative existences.where even light succumbs to the infinite pull of gravity, lies a singularity of unimaginable density. This point, often referred to as a *black hole*, is a locus of infinite curvature, where the laws of physics.",
    "As the years passed and the boy grew into a young man, his experiences continued to shape his worldview. The memories of his time with Bruno and the lessons learned from that chapter of his life remained with him, a steady reminder of the value of compassion, empathy, and the quiet strength of the human spirit. He had become a person who valued the well-being of others above all else, someone who understood that the heart’s capacity for love is infinite, even if it must sometimes endure the pain of letting go. Eventually, the man found himself in a similar situation with a stray dog, one that had been abandoned and left to wander the streets. And though the circumstances were different, the core values that had guided him years ago remained unchanged. He took the dog in, offering it the same love and care he had once given to Bruno, not expecting anything in return but the quiet satisfaction of knowing that he had made a difference in another life.He bestowed upon the puppy the name ‘Bruno,’ a name imbued with both warmth and fortitude, an embodiment of the hopes he harbored for the creature’s future.",
    "Beneath the shadow of the *Schwarzschild radius*, where even light succumbs to the infinite pull of gravity, lies a singularity of unimaginable density. This point, often referred to as a *black hole*, is a locus of infinite curvature, where the laws of physics as we know them break down entirely. The event horizon, an impenetrable barrier surrounding the singularity, marks the point of no return, beyond which no information can escape. Here, *quantum entanglement* and *superposition* create a paradox where particles exist in multiple states simultaneously, defying classical expectations. It is within this void, this *gravitational well*, that the deepest mysteries of the cosmos lie dormant, awaiting discovery by those who can decipher the arcane symbols embedded in the fabric of the universe.can hope to perceive the faintest traces of these alternative existences.where even light succumbs to the infinite pull of gravity, lies a singularity of unimaginable density. This point, often referred to as a *black hole*, is a locus of infinite curvature, where the laws of physics ",
    "The *etheric dimension*, a realm existing parallel to the observable universe, is governed by principles that defy the comprehension of human minds. It is a domain where the limits of perception dissolve, and the boundaries between matter, energy, and consciousness become indistinguishable. Within this realm, the concept of *spatiotemporal relativity* does not apply. Instead, existence operates according to *non-linear* trajectories, with events occurring in simultaneous layers that coexist in a state of perpetual coalescence. Only those who possess the rare ability to perceive these *extra-dimensional* frequencies can grasp the significance of the symbols that adorn the walls of reality's true architecture.alternative existences.where even light succumbs to the infinite pull of gravity, lies a singularity of unimaginable density. This point, often referred to as a *black hole*, is a locus of infinite curvature, where the laws of physics and *superposition* create a paradox where particles exist in multiple states simultaneously, defying classical expectations",
    "In the depths of subspace, a vast network of *hyper-chains* exists, connecting the various planes of existence like intricate threads within a cosmic tapestry. These chains are the conduits through which *dark matter* flows, binding the fabric of reality together in an almost imperceptible dance. The *vacuum energy* within this subspace fluctuates in a chaotic rhythm, giving rise to minute, yet profound, disturbances that reverberate across the multiverse. This network of hyper-chains transcends conventional space-time, existing outside the bounds of *topological invariance*. Only the most advanced *quantum navigators* are capable of charting these chaotic paths, using *entangled particles* to communicate across dimensions in an instant.alternative existences.where even light succumbs to the infinite pull of gravity, lies a singularity of unimaginable density. This point, often referred to as a *black hole*, is a locus of infinite curvature, where the laws of physics",
    "In the realm of *plasma cosmology*, it is theorized that the universe itself may have originated from a massive, energetic plasma cloud, its particles swirling in a state of constant agitation. This primordial plasma, according to some theories, was the birthplace of *magnetic fields*, which govern the flow of energy throughout the universe. These fields, which propagate as electromagnetic waves, interact with the very fabric of space-time, creating intricate patterns of resonance that affect the behavior of *charged particles*. These interactions, occurring at the quantum level, reveal the *deepest structures* of the universe, patterns that remain hidden from ordinary perception but may one day be unlocked through the application of advanced theories of *quantum electrodynamics*.can hope to perceive the faintest traces of these alternative existences.where even light succumbs to the infinite pull of gravity, lies a singularity of unimaginable density. This point, often referred to as a *black hole*, is a locus of infinite curvature, where the laws of physics ",
    "At the *event horizon* of all known knowledge, where the boundaries between understanding and ignorance blur into a singularity of intellectual uncertainty, lies the *final frontier* of exploration: the infinite realms of the unknown. Here, the mind faces a paradox that stretches beyond the limits of comprehension, where concepts of *time*, *space*, and *existence* cease to retain their usual meanings. Theories emerge and dissolve in an endless cycle, each one offering fleeting glimpses into the true nature of reality, only to be consumed by the very forces they seek to explain. As *information* itself is fragmented, distorted, and reassembled, the quest to unravel the mysteries of the universe becomes an eternal struggle, where every discovery is both a revelation and a paradox, leading to new, deeper layers of uncertainty and wonder.alternative existences.where even light succumbs to the infinite pull of gravity, lies a singularity of unimaginable density. This point, often referred to as a *black hole*, is a locus of infinite curvature, where the laws of physics"
];
reset();
function reset() {
    document.getElementById("written-box").style.display = "block";
    document.getElementById("write-box").style.display = "block";
    document.getElementById("result").style.display = "none";
    document.getElementById('time-run').textContent = "Time Left : Not started";
    writeBox.value = "";
    writeBox.placeholder = "Start Write....." 
    clearInterval(interval);
    timerStarted = false;
    const randomNumber = Math.floor(Math.random() * 10);
    const writtenBox = document.getElementById('written-box');
    if (type1 === 'A') {
        writtenBox.textContent = easyTexts[randomNumber];
    }
    else if (type1 === 'B') {
        writtenBox.textContent = mediumTexts[randomNumber];
    }
    else {
        writtenBox.textContent = hardTexts[randomNumber];
    }
}
function home() {
    window.location.href = "index.html";
}
function feedback() {
    let wrong = 0;
    let correct = 0;
    const wrtValue = document.getElementById("write-box").value.trim();
    const orgValue = document.getElementById("written-box").textContent.trim();
    const minLength = Math.min(orgValue.length, wrtValue.length);
    for (let i = 0; i < minLength; i++) {
        if (orgValue[i] === wrtValue[i]) {
            correct++;
        } else {
            wrong++;
        }
    }
    if (wrtValue.length > orgValue.length) {
        wrong += wrtValue.length - orgValue.length;
    }
    const total = wrtValue.length;
    document.getElementById("written-box").style.display = "none";
    document.getElementById("write-box").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("correct-word").textContent = `Correct Character : ${correct}`;
    document.getElementById("wrong-word").textContent = `Wrong Character : ${wrong}`;
    document.getElementById("total-word").textContent = `Total Writen Character : ${total}`
    if (stoptime > 0) {
        document.getElementById("speed").textContent = 
            `Your Typing Speed: ${(correct / 5 / (stoptime / 60)).toFixed(2)} Words per Minute`;
    } else {
        document.getElementById("speed").textContent = `Typing speed not available.`;
    }
}