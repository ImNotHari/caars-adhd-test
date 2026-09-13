/**
 * CAARS 66-Item Psychometric Questions and Inconsistency Index Pairs.
 * Verified Source of Truth.
 * Dual-environment support: Browser (window.CAARS_QUESTIONS) & Node.js (module.exports).
 */

const CAARS_QUESTIONS = [
  {
    "id": 1,
    "text_self": "I have trouble getting started on a task.",
    "text_observer": "Has trouble getting started on a task.",
    "scales": [
      "A",
      "H"
    ]
  },
  {
    "id": 2,
    "text_self": "I am constantly on the go, as if driven by a motor.",
    "text_observer": "Is constantly on the go, as if driven by a motor.",
    "scales": [
      "B",
      "F"
    ]
  },
  {
    "id": 3,
    "text_self": "I interrupt people when they are talking.",
    "text_observer": "Interrupts people when they are talking.",
    "scales": [
      "C",
      "F"
    ]
  },
  {
    "id": 4,
    "text_self": "I feel down on myself or lack confidence in my abilities.",
    "text_observer": "Appears to lack confidence or feels down on oneself.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 5,
    "text_self": "I am easily distracted by extraneous stimuli around me.",
    "text_observer": "Is easily distracted by extraneous stimuli.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 6,
    "text_self": "I have difficulty remaining seated when required to do so.",
    "text_observer": "Has difficulty remaining seated when expected to do so.",
    "scales": [
      "B",
      "F"
    ]
  },
  {
    "id": 7,
    "text_self": "I blurt out answers or comments before thinking.",
    "text_observer": "Blurts out answers or comments before thinking.",
    "scales": [
      "C",
      "F",
      "H"
    ]
  },
  {
    "id": 8,
    "text_self": "I feel like a failure or underachiever compared to peers.",
    "text_observer": "Expresses feeling like a failure or underachiever.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 9,
    "text_self": "I misplace or lose things needed for work or daily life.",
    "text_observer": "Misplaces or loses items needed for daily tasks.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 10,
    "text_self": "I fidget with my hands or feet or squirm in my seat.",
    "text_observer": "Fidgets with hands or feet or squirms in seat.",
    "scales": [
      "B",
      "F"
    ]
  },
  {
    "id": 11,
    "text_self": "I make impulsive decisions on the spur of the moment.",
    "text_observer": "Makes impulsive decisions on the spur of the moment.",
    "scales": [
      "C",
      "H"
    ]
  },
  {
    "id": 12,
    "text_self": "I feel frustrated with how little I accomplish.",
    "text_observer": "Seems frustrated with how little is accomplished.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 13,
    "text_self": "I fail to give close attention to details or make careless mistakes.",
    "text_observer": "Fails to give close attention to details or makes careless errors.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 14,
    "text_self": "I feel internally restless even when I am sitting still.",
    "text_observer": "Appears restless inside even when seated.",
    "scales": [
      "B",
      "H"
    ]
  },
  {
    "id": 15,
    "text_self": "I have a short temper or low tolerance for frustration.",
    "text_observer": "Has a short fuse or low tolerance for frustration.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 16,
    "text_self": "I doubt my ability to succeed at new projects.",
    "text_observer": "Doubts ability to succeed at new projects.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 17,
    "text_self": "I have difficulty sustaining attention during lectures or tasks.",
    "text_observer": "Has difficulty sustaining focus during conversations or tasks.",
    "scales": [
      "A",
      "E",
      "H"
    ]
  },
  {
    "id": 18,
    "text_self": "I talk excessively in social situations.",
    "text_observer": "Talks excessively in social situations.",
    "scales": [
      "B",
      "F"
    ]
  },
  {
    "id": 19,
    "text_self": "My moods change quickly and unpredictably.",
    "text_observer": "Moods change rapidly and unpredictably.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 20,
    "text_self": "I am overly critical of myself and my mistakes.",
    "text_observer": "Is overly self-critical.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 21,
    "text_self": "I forget appointments, deadlines, or planned activities.",
    "text_observer": "Forgets appointments, deadlines, or commitments.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 22,
    "text_self": "It takes great effort for me to sit through long meetings.",
    "text_observer": "Struggles to sit quietly through long meetings.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 23,
    "text_self": "I act first and think about consequences later.",
    "text_observer": "Acts first and thinks about the consequences later.",
    "scales": [
      "C",
      "H"
    ]
  },
  {
    "id": 24,
    "text_self": "I feel dissatisfied with who I am.",
    "text_observer": "Seems dissatisfied with self-worth.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 25,
    "text_self": "I have trouble organizing multi-step tasks or activities.",
    "text_observer": "Has trouble organizing complex tasks or activities.",
    "scales": [
      "A",
      "E",
      "H"
    ]
  },
  {
    "id": 26,
    "text_self": "I have difficulty engaging in leisure activities quietly.",
    "text_observer": "Has difficulty engaging in hobbies or leisure quietly.",
    "scales": [
      "B",
      "F"
    ]
  },
  {
    "id": 27,
    "text_self": "I intrude into other people's conversations or games.",
    "text_observer": "Intrudes into other people's conversations or games.",
    "scales": [
      "C",
      "F"
    ]
  },
  {
    "id": 28,
    "text_self": "I procrastinate or avoid starting tasks requiring sustained effort.",
    "text_observer": "Procrastinates or avoids tasks that require sustained effort.",
    "scales": [
      "A",
      "E",
      "H"
    ]
  },
  {
    "id": 29,
    "text_self": "I feel like I have unrealized potential because of my habits.",
    "text_observer": "Expresses feeling held back by disorganized habits.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 30,
    "text_self": "I have trouble waiting in lines or waiting for my turn.",
    "text_observer": "Has difficulty waiting in line or waiting for turn.",
    "scales": [
      "C",
      "F",
      "H"
    ]
  },
  {
    "id": 31,
    "text_self": "I find myself tapping my fingers or bouncing my leg constantly.",
    "text_observer": "Taps fingers or bounces leg constantly.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 32,
    "text_self": "I struggle to remember what I just read or heard.",
    "text_observer": "Struggles to retain information just read or heard.",
    "scales": [
      "A"
    ]
  },
  {
    "id": 33,
    "text_self": "I say things I later regret when annoyed or excited.",
    "text_observer": "Says things later regretted when emotionally stimulated.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 34,
    "text_self": "I feel insecure about my intellect or competence.",
    "text_observer": "Shows insecurity about competence.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 35,
    "text_self": "I leave projects or chores half-finished.",
    "text_observer": "Leaves projects or tasks incomplete.",
    "scales": [
      "A",
      "E",
      "H"
    ]
  },
  {
    "id": 36,
    "text_self": "I can't find my keys, wallet, phone, or essential papers.",
    "text_observer": "Frequently misplaces essential items like keys, phone, wallet.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 37,
    "text_self": "I feel uncomfortable sitting still for prolonged periods.",
    "text_observer": "Becomes noticeably restless when seated for extended periods.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 38,
    "text_self": "I react aggressively or defensively when criticized.",
    "text_observer": "Reacts with irritability or defense when criticized.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 39,
    "text_self": "I compare myself unfavorably to friends and coworkers.",
    "text_observer": "Compares oneself unfavorably to others.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 40,
    "text_self": "I zone out or drift off when someone speaks directly to me.",
    "text_observer": "Seems not to listen when spoken to directly.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 41,
    "text_self": "I am impatient when things move slower than I prefer.",
    "text_observer": "Shows extreme impatience when things move slowly.",
    "scales": [
      "C",
      "H"
    ]
  },
  {
    "id": 42,
    "text_self": "I get thrown off track by background sounds or sights.",
    "text_observer": "Easily sidetracked by trivial background events.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 43,
    "text_self": "I feel an urgent drive to get up and walk around.",
    "text_observer": "Frequently gets up and wanders around during sedentary tasks.",
    "scales": [
      "B",
      "F"
    ]
  },
  {
    "id": 44,
    "text_self": "I feel inadequate in managing basic adult responsibilities.",
    "text_observer": "Expresses feelings of inadequacy in managing daily life.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 45,
    "text_self": "I make careless errors in calculations, forms, or messages.",
    "text_observer": "Makes careless errors in routine paperwork or tasks.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 46,
    "text_self": "I spend money impulsively without planning ahead.",
    "text_observer": "Spends money impulsively without budget consideration.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 47,
    "text_self": "I have trouble relaxing my mind at the end of the day.",
    "text_observer": "Has trouble unwinding or calming mind down.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 48,
    "text_self": "I avoid events where I have to sit still and listen.",
    "text_observer": "Avoids settings requiring quiet, passive listening.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 49,
    "text_self": "I struggle to estimate the time required for activities.",
    "text_observer": "Poorly estimates time needed to travel or finish tasks.",
    "scales": [
      "A",
      "H"
    ]
  },
  {
    "id": 50,
    "text_self": "I become irritable over minor schedule changes.",
    "text_observer": "Becomes agitated over minor disruptions.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 51,
    "text_self": "I feel unfulfilled despite working hard.",
    "text_observer": "Feels unfulfilled despite putting in effort.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 52,
    "text_self": "I feel an inner turmoil or physical agitation when still.",
    "text_observer": "Shows signs of physical or inner agitation when stationary.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 53,
    "text_self": "I lose track of what I am saying in the middle of a sentence.",
    "text_observer": "Loses train of thought mid-sentence.",
    "scales": [
      "A"
    ]
  },
  {
    "id": 54,
    "text_self": "I cut in line or rush ahead of others in traffic or queues.",
    "text_observer": "Rushes ahead impatiently or cuts in queues.",
    "scales": [
      "C",
      "F"
    ]
  },
  {
    "id": 55,
    "text_self": "I feel helpless about organizing my workspace or home.",
    "text_observer": "Feels overwhelmed by clutter or organization.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 56,
    "text_self": "I switch rapidly between multiple unfinished tasks.",
    "text_observer": "Jumps between several activities without finishing any.",
    "scales": [
      "A",
      "H"
    ]
  },
  {
    "id": 57,
    "text_self": "I feel overwhelmed by quiet, monotonous environments.",
    "text_observer": "Gets agitated in quiet, monotonous environments.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 58,
    "text_self": "I drive faster or take unnecessary risks on the road.",
    "text_observer": "Drives aggressively or takes impulsive risks.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 59,
    "text_self": "I have messy or chaotic filing, storage, or workspaces.",
    "text_observer": "Maintains disorganized or chaotic workspaces.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 60,
    "text_self": "I feel like I let people down because of my forgetfulness.",
    "text_observer": "Worries about disappointing others due to disorganization.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 61,
    "text_self": "I talk so much that others cannot get a word in.",
    "text_observer": "Dominates conversations without allowing others to speak.",
    "scales": [
      "B",
      "F"
    ]
  },
  {
    "id": 62,
    "text_self": "I make hasty purchases I promptly regret.",
    "text_observer": "Makes hasty purchases that are later regretted.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 63,
    "text_self": "I misjudge priorities, focusing on trivial tasks first.",
    "text_observer": "Focuses on trivial details while ignoring urgent priorities.",
    "scales": [
      "A",
      "H"
    ]
  },
  {
    "id": 64,
    "text_self": "I have a habit of continuously shifting positions while seated.",
    "text_observer": "Continuously shifts positions while seated.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 65,
    "text_self": "I am prone to sudden emotional outbursts.",
    "text_observer": "Prone to sudden emotional outbursts.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 66,
    "text_self": "I feel hopeless about ever becoming well-organized.",
    "text_observer": "Expresses hopelessness regarding personal organization.",
    "scales": [
      "D"
    ]
  }
];

const INCONSISTENCY_PAIRS = [
  [
    1,
    28
  ],
  [
    5,
    42
  ],
  [
    9,
    36
  ],
  [
    14,
    52
  ],
  [
    18,
    61
  ],
  [
    22,
    48
  ],
  [
    25,
    59
  ],
  [
    31,
    64
  ]
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CAARS_QUESTIONS, INCONSISTENCY_PAIRS };
}
if (typeof window !== 'undefined') {
  window.CAARS_QUESTIONS = CAARS_QUESTIONS;
  window.INCONSISTENCY_PAIRS = INCONSISTENCY_PAIRS;
}
