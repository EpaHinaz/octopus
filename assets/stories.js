const STORIES = [
  {
    id: 0,
    title: "The Lost Kitten",
    text: "One sunny day, Lily went to the park. She heard a soft meow. Under a bench, she found a little kitten. Lily asked people nearby, 'Is this your kitten?' Finally, she met Mrs. Brown who was looking for her cat. Lily gave the kitten back, and Mrs. Brown thanked her. Lily felt happy to help.",
    questions: [
      { text: "Where did Lily find the kitten?", options: ["Park", "School", "Library", "Store"], correct: 0, hint: "Look where she heard the meow." },
      { text: "How did Lily feel when she returned the kitten?", options: ["Sad", "Happy", "Angry", "Scared"], correct: 1, hint: "She felt good about helping." },
      { text: "What did Lily do FIRST to find the owner?", options: ["Called her mom", "Asked people nearby", "Took the kitten home", "Looked for a collar"], correct: 1, hint: "She didn't take it home first." },
      { text: "What sound did Lily hear?", options: ["Bark", "Meow", "Quack", "Tweet"], correct: 1, hint: "It was a kitten." },
      { text: "Who owned the kitten?", options: ["Lily", "Mrs. Brown", "A boy", "No one"], correct: 1, hint: "The lady who was looking for it." },
      { text: "What did Lily do after finding the kitten?", options: ["Kept it", "Asked around", "Ran away", "Called police"], correct: 1, hint: "She asked people nearby." },
      { text: "Where did Lily go?", options: ["School", "Park", "Zoo", "Beach"], correct: 1, hint: "It was a sunny day there." },
      { text: "How did Mrs. Brown feel at the end?", options: ["Sad", "Thankful", "Angry", "Worried"], correct: 1, hint: "She thanked Lily." },
      { text: "What does this story teach us?", options: ["Be helpful", "Be quiet", "Keep pets", "Don't talk to strangers"], correct: 0, hint: "Lily helped return the kitten." },
      { text: "What might Lily do next time she sees a lost pet?", options: ["Ignore it", "Help find owner", "Take it home", "Run away"], correct: 1, hint: "She learned to help." }
    ]
  },
  {
    id: 1,
    title: "The Generous Tree",
    text: "There was a big apple tree. A boy played near it every day. The tree loved the boy. When the boy needed money, the tree gave apples to sell. When the boy needed a house, the tree gave branches. When the boy needed a boat, the tree gave its trunk. The tree was always happy to give.",
    questions: [
      { text: "What did the tree give FIRST to help the boy?", options: ["Apples", "Branches", "Trunk", "Shade"], correct: 0, hint: "He needed money first." },
      { text: "What did the boy use the branches for?", options: ["Firewood", "A house", "A boat", "A toy"], correct: 1, hint: "He needed a place to live." },
      { text: "How did the tree feel when giving?", options: ["Sad", "Angry", "Happy", "Tired"], correct: 2, hint: "The tree loved the boy." },
      { text: "What did the boy play near?", options: ["River", "Tree", "House", "School"], correct: 1, hint: "It was an apple tree." },
      { text: "What did the tree give when the boy needed a boat?", options: ["Apples", "Branches", "Trunk", "Leaves"], correct: 2, hint: "The trunk made a boat." },
      { text: "Why did the tree give things to the boy?", options: ["It was scared", "It loved him", "It wanted money", "It had to"], correct: 1, hint: "The tree always loved the boy." },
      { text: "What did the boy sell to get money?", options: ["Branches", "Trunk", "Apples", "Leaves"], correct: 2, hint: "The tree gave apples to sell." },
      { text: "What happened to the tree at the end?", options: ["It died", "It was still happy", "It was angry", "It left"], correct: 1, hint: "It was happy to give." },
      { text: "What is the main idea of the story?", options: ["Trees are useful", "Giving makes you happy", "Boys are greedy", "Apples are sweet"], correct: 1, hint: "The tree was happy to give." },
      { text: "If you were the boy, what would you do to show thanks?", options: ["Take more", "Plant a new tree", "Ignore the tree", "Cut it down"], correct: 1, hint: "Being grateful and giving back." }
    ]
  },
  {
    id: 2,
    title: "The Clever Rabbit",
    text: "In a deep forest, a hungry lion was roaring. All the animals were afraid. A clever rabbit said, 'I have an idea!' The rabbit led the lion to a well. 'Look, there is another lion in the water!' The lion jumped into the well and was never seen again. The forest was safe.",
    questions: [
      { text: "Who was frightening the animals?", options: ["Tiger", "Lion", "Bear", "Wolf"], correct: 1, hint: "The hungry lion was roaring." },
      { text: "What did the rabbit say to the lion?", options: ["Run away", "Look in the well", "Fight me", "Eat grass"], correct: 1, hint: "He showed the lion its reflection." },
      { text: "What did the lion see in the well?", options: ["Another lion", "Fish", "Rabbit", "Its own face"], correct: 0, hint: "It thought it was another lion." },
      { text: "What happened to the lion after he jumped?", options: ["He swam out", "He disappeared", "He became friends", "He caught the rabbit"], correct: 1, hint: "He was never seen again." },
      { text: "Why were the animals afraid?", options: ["The lion was hungry", "There was a flood", "They were lost", "It was night"], correct: 0, hint: "The lion was roaring and hungry." },
      { text: "How did the rabbit feel?", options: ["Scared but clever", "Very angry", "Sad", "Tired"], correct: 0, hint: "He thought of a clever plan." },
      { text: "Where did the rabbit lead the lion?", options: ["A cave", "A river", "A well", "A mountain"], correct: 2, hint: "To a well." },
      { text: "What does this story teach?", options: ["Lions are foolish", "Brains can beat strength", "Rabbits are fast", "Water is dangerous"], correct: 1, hint: "The rabbit used his cleverness." },
      { text: "What did the rabbit tell the lion about the well?", options: ["There is water", "There is another lion", "It's a trap", "It's a home"], correct: 1, hint: "He said 'Look, another lion'." },
      { text: "How did the forest become safe?", options: ["Lion left", "Lion was tricked", "Animals moved", "Lion was caught"], correct: 1, hint: "The lion jumped in." }
    ]
  },
  {
    id: 3,
    title: "The Rainbow Seeds",
    text: "Mia loved flowers. One day, a bird dropped a tiny packet. Inside were seven seeds, each a different color. Mia planted them in a circle. After a week, beautiful rainbow flowers bloomed. Everyone who saw them smiled. Mia shared seeds with her friends so they could grow joy too.",
    questions: [
      { text: "What did the bird drop?", options: ["A leaf", "A packet of seeds", "A worm", "A flower"], correct: 1, hint: "It had seven seeds inside." },
      { text: "How many seeds were there?", options: ["Five", "Six", "Seven", "Eight"], correct: 2, hint: "Each a different color." },
      { text: "What did Mia do with the seeds?", options: ["Ate them", "Planted them", "Threw them", "Gave them away"], correct: 1, hint: "She planted them in a circle." },
      { text: "What grew from the seeds?", options: ["Trees", "Rainbow flowers", "Vegetables", "Grass"], correct: 1, hint: "Rainbow flowers bloomed." },
      { text: "How did people feel when they saw the flowers?", options: ["Sad", "Angry", "Happy", "Scared"], correct: 2, hint: "They smiled." },
      { text: "What did Mia do with extra seeds?", options: ["Kept them", "Shared with friends", "Sold them", "Buried them"], correct: 1, hint: "She shared seeds with friends." },
      { text: "Where did Mia plant the seeds?", options: ["In a pot", "In a circle", "In a row", "In a square"], correct: 1, hint: "She planted them in a circle." },
      { text: "What color were the seeds?", options: ["All green", "Different colors", "Red", "Blue"], correct: 1, hint: "Each a different color." },
      { text: "What does the story teach about sharing?", options: ["Keep things to yourself", "Sharing spreads happiness", "Sharing is hard", "Seeds are expensive"], correct: 1, hint: "Mia shared so friends could grow joy." },
      { text: "What would you do if you found magic seeds?", options: ["Hide them", "Plant and share", "Throw away", "Sell them"], correct: 1, hint: "Like Mia, you could plant and share." }
    ]
  },
  {
    id: 4,
    title: "The Curious Octopus",
    text: "Ollie the octopus lived in a coral reef. He loved exploring. One day, he found a shiny bottle with a map inside. The map led to a sunken ship. Inside the ship, he found a treasure chest of colorful shells. Ollie shared the shells with all his ocean friends.",
    questions: [
      { text: "What is Ollie?", options: ["Fish", "Octopus", "Whale", "Crab"], correct: 1, hint: "He had eight arms." },
      { text: "Where did Ollie live?", options: ["River", "Coral reef", "Lake", "Ocean floor"], correct: 1, hint: "In the coral reef." },
      { text: "What did Ollie find first?", options: ["A map", "A bottle", "A treasure chest", "A ship"], correct: 1, hint: "He found a shiny bottle." },
      { text: "What was inside the bottle?", options: ["A note", "A map", "A key", "A shell"], correct: 1, hint: "A map inside." },
      { text: "What did the map lead to?", options: ["A cave", "A sunken ship", "An island", "A city"], correct: 1, hint: "To a sunken ship." },
      { text: "What was in the treasure chest?", options: ["Gold", "Colorful shells", "Jewels", "Pearls"], correct: 1, hint: "Colorful shells." },
      { text: "What did Ollie do with the shells?", options: ["Kept them", "Shared with friends", "Buried them", "Sold them"], correct: 1, hint: "He shared with all ocean friends." },
      { text: "How would you describe Ollie?", options: ["Lazy", "Curious", "Scared", "Mean"], correct: 1, hint: "He loved exploring." },
      { text: "Where was the ship?", options: ["On land", "Underwater", "On a beach", "In the sky"], correct: 1, hint: "Sunken ship means underwater." },
      { text: "What does this story teach about discovery?", options: ["Keep secrets", "Share discoveries", "Hide treasures", "Be greedy"], correct: 1, hint: "Ollie shared his find." }
    ]
  },
  {
    id: 5,
    title: "The Friendly Robot",
    text: "Leo built a small robot from old parts. He named it Spark. Spark could talk and help with chores. One day, Spark's arm broke. Leo fixed it with a new part. Spark was so happy it beeped and danced. They became best friends and worked together every day.",
    questions: [
      { text: "Who built the robot?", options: ["Leo", "Spark", "A scientist", "A teacher"], correct: 0, hint: "Leo built a small robot." },
      { text: "What did Leo name the robot?", options: ["Tiny", "Spark", "Bolt", "Gear"], correct: 1, hint: "He named it Spark." },
      { text: "What could Spark do?", options: ["Fly", "Talk and help with chores", "Cook", "Swim"], correct: 1, hint: "Talk and help with chores." },
      { text: "What happened to Spark?", options: ["It ran away", "Its arm broke", "It stopped working", "It got lost"], correct: 1, hint: "Spark's arm broke." },
      { text: "How did Leo fix Spark?", options: ["With glue", "With a new part", "With tape", "With batteries"], correct: 1, hint: "He fixed it with a new part." },
      { text: "How did Spark show happiness?", options: ["Cried", "Beeped and danced", "Ran around", "Sang"], correct: 1, hint: "It beeped and danced." },
      { text: "What did Leo and Spark become?", options: ["Enemies", "Best friends", "Strangers", "Coworkers"], correct: 1, hint: "They became best friends." },
      { text: "What does this story show about friendship?", options: ["Friends fix things together", "Robots are scary", "Don't build robots", "Play alone"], correct: 0, hint: "Leo fixed Spark and they worked together." },
      { text: "What did Leo use to build Spark?", options: ["New parts", "Old parts", "Wood", "Metal"], correct: 1, hint: "From old parts." },
      { text: "What might Leo and Spark do together?", options: ["Homework", "Chores and play", "Watch TV", "Sleep"], correct: 1, hint: "They worked together every day." }
    ]
  }
];
