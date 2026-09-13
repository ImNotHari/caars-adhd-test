const fs = require('fs');
const path = require('path');

const simplifiedEnglish = {
  1: {
    self: "I have trouble getting started on tasks or chores.",
    obs: "Has trouble getting started on tasks or chores."
  },
  2: {
    self: "I feel constantly on the go, like I'm always driven to keep moving.",
    obs: "Seems constantly on the go, like always driven to keep moving."
  },
  3: {
    self: "I interrupt people or jump in before they finish talking.",
    obs: "Interrupts people or jumps in before they finish talking."
  },
  4: {
    self: "I feel down on myself and lack confidence in my abilities.",
    obs: "Seems down on themselves or lacks confidence in their abilities."
  },
  5: {
    self: "I get easily distracted by sights or sounds around me.",
    obs: "Gets easily distracted by sights or sounds around them."
  },
  6: {
    self: "I have a hard time staying seated when I am expected to sit still.",
    obs: "Has a hard time staying seated when expected to sit still."
  },
  7: {
    self: "I blurt out answers or comments without thinking first.",
    obs: "Blurts out answers or comments without thinking first."
  },
  8: {
    self: "I feel like a failure or that I fall behind compared to people my age.",
    obs: "Feels like a failure or that they fall behind compared to others."
  },
  9: {
    self: "I lose or misplace everyday essentials like keys, phone, or wallet.",
    obs: "Loses or misplaces everyday essentials like keys, phone, or wallet."
  },
  10: {
    self: "I fidget with my hands or feet, or keep squirming in my seat.",
    obs: "Fidgets with hands or feet, or keeps squirming in seat."
  },
  11: {
    self: "I make hasty decisions on impulse without thinking them through.",
    obs: "Makes hasty decisions on impulse without thinking them through."
  },
  12: {
    self: "I feel frustrated by how little I seem to get done.",
    obs: "Seems frustrated by how little they get done."
  },
  13: {
    self: "I miss small details and make careless mistakes in my work.",
    obs: "Misses small details and makes careless mistakes in work."
  },
  14: {
    self: "I feel restless inside even when I am sitting completely still.",
    obs: "Appears restless inside even when sitting still."
  },
  15: {
    self: "I have a short temper and get easily annoyed or frustrated.",
    obs: "Has a short temper and gets easily annoyed or frustrated."
  },
  16: {
    self: "I doubt my ability to do well when starting new projects.",
    obs: "Doubts their ability to do well when starting new projects."
  },
  17: {
    self: "I have a tough time keeping my focus during long talks, lectures, or tasks.",
    obs: "Has a tough time keeping focus during long conversations, lectures, or tasks."
  },
  18: {
    self: "I tend to talk too much when I am around other people.",
    obs: "Tends to talk too much in social situations."
  },
  19: {
    self: "My mood shifts quickly and unexpectedly throughout the day.",
    obs: "Mood shifts quickly and unexpectedly throughout the day."
  },
  20: {
    self: "I am way too hard on myself whenever I make a mistake.",
    obs: "Is way too hard on themselves when making a mistake."
  },
  21: {
    self: "I forget appointments, due dates, or plans I made.",
    obs: "Forgets appointments, due dates, or commitments."
  },
  22: {
    self: "It takes a lot of effort for me to sit through long meetings.",
    obs: "Struggles to sit quietly through long meetings."
  },
  23: {
    self: "I act on impulse first and only think about the consequences later.",
    obs: "Acts on impulse first and only thinks about consequences later."
  },
  24: {
    self: "I often feel unhappy or dissatisfied with who I am.",
    obs: "Seems unhappy or dissatisfied with who they are."
  },
  25: {
    self: "I struggle to organize tasks that involve multiple steps.",
    obs: "Struggles to organize tasks that involve multiple steps."
  },
  26: {
    self: "I find it hard to do hobbies or leisure activities quietly.",
    obs: "Has trouble doing hobbies or leisure activities quietly."
  },
  27: {
    self: "I butt in on other people's conversations or activities.",
    obs: "Butts in on other people's conversations or activities."
  },
  28: {
    self: "I put off or avoid starting tasks that require sustained mental effort.",
    obs: "Puts off or avoids tasks that require sustained mental effort."
  },
  29: {
    self: "I feel like disorganization keeps me from reaching my full potential.",
    obs: "Feels held back from their full potential because of disorganization."
  },
  30: {
    self: "I have a hard time waiting in lines or waiting for my turn.",
    obs: "Has a hard time waiting in lines or waiting for their turn."
  },
  31: {
    self: "I find myself constantly tapping my fingers or bouncing my leg.",
    obs: "Constantly taps fingers or bounces leg."
  },
  32: {
    self: "I quickly forget what I just read or what someone just told me.",
    obs: "Quickly forgets what was just read or heard."
  },
  33: {
    self: "I say things I regret later when I get annoyed or excited.",
    obs: "Says things they regret later when upset or excited."
  },
  34: {
    self: "I feel insecure about how smart or capable I am.",
    obs: "Shows insecurity about how smart or capable they are."
  },
  35: {
    self: "I leave chores, housework, or work projects half-done.",
    obs: "Leaves chores, tasks, or work projects half-done."
  },
  36: {
    self: "I constantly misplace my keys, phone, wallet, or important papers.",
    obs: "Frequently misplaces essential items like keys, phone, or wallet."
  },
  37: {
    self: "I feel uncomfortable and antsy if I have to sit still for a long time.",
    obs: "Becomes visibly restless when having to sit still for long periods."
  },
  38: {
    self: "I get defensive or snappy when someone criticizes me.",
    obs: "Gets defensive, irritable, or snappy when criticized."
  },
  39: {
    self: "I constantly compare myself to friends or coworkers and feel inferior.",
    obs: "Compares themselves to others and feels inferior."
  },
  40: {
    self: "My mind wanders or I tune out when someone is speaking directly to me.",
    obs: "Seems to drift off or tune out when spoken to directly."
  },
  41: {
    self: "I get very impatient when things move slower than I want.",
    obs: "Gets very impatient when things move too slowly."
  },
  42: {
    self: "Background noises or sights nearby easily pull me off track.",
    obs: "Easily gets pulled off track by minor background noises or sights."
  },
  43: {
    self: "I feel a strong urge to get up and wander around instead of staying seated.",
    obs: "Gets up and wanders around frequently instead of staying seated."
  },
  44: {
    self: "I feel overwhelmed trying to handle everyday adult responsibilities.",
    obs: "Feels overwhelmed trying to handle everyday adult responsibilities."
  },
  45: {
    self: "I make careless mistakes in forms, numbers, messages, or simple tasks.",
    obs: "Makes careless mistakes in paperwork, forms, numbers, or routine tasks."
  },
  46: {
    self: "I spend money impulsively without checking my budget or planning ahead.",
    obs: "Spends money impulsively without thinking about budget or planning."
  },
  47: {
    self: "I have a tough time unwinding and calming my mind at the end of the day.",
    obs: "Has a tough time unwinding and calming their mind at night."
  },
  48: {
    self: "I dread or avoid events where I have to sit still and listen quietly.",
    obs: "Avoids settings where they have to sit quietly and listen."
  },
  49: {
    self: "I struggle to judge how much time tasks or activities will actually take.",
    obs: "Has trouble estimating how much time a task or trip will take."
  },
  50: {
    self: "Minor disruptions or last-minute schedule changes make me irritable.",
    obs: "Gets visibly upset or irritated by small schedule changes."
  },
  51: {
    self: "I feel unsatisfied with what I achieve, even when I work really hard.",
    obs: "Feels unsatisfied with achievements, even after working hard."
  },
  52: {
    self: "Sitting still makes me feel jittery, pent-up, or agitated inside.",
    obs: "Appears jittery, pent-up, or physically agitated when sitting still."
  },
  53: {
    self: "I lose my train of thought right in the middle of a sentence.",
    obs: "Loses train of thought right in the middle of a sentence."
  },
  54: {
    self: "I rush ahead, pass people impatiently, or cut in line.",
    obs: "Rushes ahead impatiently in traffic or tries to skip queues."
  },
  55: {
    self: "I feel helpless and overwhelmed by clutter and mess in my living space.",
    obs: "Feels helpless or overwhelmed by clutter and mess."
  },
  56: {
    self: "I jump between several unfinished tasks without wrapping any of them up.",
    obs: "Jumps between several tasks without finishing any of them."
  },
  57: {
    self: "Quiet, boring, repetitive environments make me feel agitated.",
    obs: "Gets restless and agitated in quiet, repetitive environments."
  },
  58: {
    self: "I drive fast or take unnecessary risks on the road.",
    obs: "Drives aggressively or takes impulsive risks on the road."
  },
  59: {
    self: "My desk, workspace, or living area tends to be messy and disorganized.",
    obs: "Keeps a cluttered, messy, or disorganized workspace or room."
  },
  60: {
    self: "I worry that my forgetfulness or delays let other people down.",
    obs: "Worries about disappointing others because of forgetfulness or delays."
  },
  61: {
    self: "I talk so much that other people struggle to get a word in.",
    obs: "Talks so much that others have trouble getting a word in."
  },
  62: {
    self: "I buy things on a whim and immediately regret the purchase.",
    obs: "Buys things on a whim and promptly regrets the purchase."
  },
  63: {
    self: "I get bogged down in small, minor details while ignoring what is urgent.",
    obs: "Focuses on trivial details while ignoring urgent tasks."
  },
  64: {
    self: "I constantly shift positions, stretch, or fidget while sitting.",
    obs: "Constantly shifts positions or fidgets while sitting."
  },
  65: {
    self: "I am prone to sudden, intense emotional reactions or angry outbursts.",
    obs: "Prone to sudden emotional reactions or angry outbursts."
  },
  66: {
    self: "I feel discouraged about ever being able to get my life well-organized.",
    obs: "Feels discouraged about ever being able to stay well-organized."
  }
};

const questionsPath = path.join(__dirname, '../web/js/questions.js');
const questionsModule = require(questionsPath);
const questions = questionsModule.CAARS_QUESTIONS;

questions.forEach(q => {
  if (simplifiedEnglish[q.id]) {
    q.text_self = simplifiedEnglish[q.id].self;
    q.text_observer = simplifiedEnglish[q.id].obs;
  }
});

const content = `/**
 * CAARS 66-Item Psychometric Questions and Inconsistency Index Pairs.
 * Verified Source of Truth with Simple, Clear English and Natural Malayalam (മലയാളം) Phrasing.
 * Dual-environment support: Browser (window.CAARS_QUESTIONS) & Node.js (module.exports).
 */

const CAARS_QUESTIONS = ${JSON.stringify(questions, null, 2)};

const CAARS_INCONSISTENCY_PAIRS = [
  [1, 28],
  [5, 42],
  [9, 36],
  [14, 52],
  [18, 61],
  [22, 48],
  [25, 59],
  [31, 64]
];

const INCONSISTENCY_PAIRS = CAARS_INCONSISTENCY_PAIRS;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CAARS_QUESTIONS,
    CAARS_INCONSISTENCY_PAIRS,
    INCONSISTENCY_PAIRS
  };
}
if (typeof window !== 'undefined') {
  window.CAARS_QUESTIONS = CAARS_QUESTIONS;
  window.CAARS_INCONSISTENCY_PAIRS = CAARS_INCONSISTENCY_PAIRS;
  window.INCONSISTENCY_PAIRS = INCONSISTENCY_PAIRS;
}
`;

fs.writeFileSync(questionsPath, content, 'utf8');
console.log('Successfully updated questions.js with simplified English questions');
