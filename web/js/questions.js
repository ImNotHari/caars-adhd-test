/**
 * CAARS 66-Item Psychometric Questions and Inconsistency Index Pairs.
 * Verified Source of Truth with Complete English and Malayalam (മലയാളം) Translations.
 * Dual-environment support: Browser (window.CAARS_QUESTIONS) & Node.js (module.exports).
 */

const CAARS_QUESTIONS = [
  {
    "id": 1,
    "text_self": "I have trouble getting started on a task.",
    "text_self_ml": "ഒരു ജോലി ആരംഭിക്കാൻ എനിക്ക് ബുദ്ധിമുട്ടുണ്ട്.",
    "text_observer": "Has trouble getting started on a task.",
    "text_observer_ml": "ഒരു ജോലി ആരംഭിക്കാൻ ഇദ്ദേഹത്തിന് ബുദ്ധിമുട്ടുണ്ട്.",
    "scales": [
      "A",
      "H"
    ]
  },
  {
    "id": 2,
    "text_self": "I am constantly on the go, as if driven by a motor.",
    "text_self_ml": "ഒരു മോട്ടോർ ഘടിപ്പിച്ചതുപോലെ ഞാൻ എപ്പോഴും എന്തെങ്കിലും ചെയ്തുകൊണ്ട് ചലിച്ചുകൊണ്ടിരിക്കുന്നു.",
    "text_observer": "Is constantly on the go, as if driven by a motor.",
    "text_observer_ml": "ഒരു മോട്ടോർ ഘടിപ്പിച്ചതുപോലെ ഇദ്ദേഹം എപ്പോഴും ചലിച്ചുകൊണ്ടിരിക്കുന്നു.",
    "scales": [
      "B",
      "F"
    ]
  },
  {
    "id": 3,
    "text_self": "I interrupt people when they are talking.",
    "text_self_ml": "മറ്റുള്ളവർ സംസാരിക്കുമ്പോൾ ഞാൻ ഇടക്കുകയറി സംസാരിക്കുന്നു.",
    "text_observer": "Interrupts people when they are talking.",
    "text_observer_ml": "മറ്റുള്ളവർ സംസാരിക്കുമ്പോൾ ഇടക്കുകയറി സംസാരിക്കുന്നു.",
    "scales": [
      "C",
      "F"
    ]
  },
  {
    "id": 4,
    "text_self": "I feel down on myself or lack confidence in my abilities.",
    "text_self_ml": "എന്നെക്കുറിച്ച് തന്നെ എനിക്ക് നിരാശ തോന്നുന്നു അല്ലെങ്കിൽ എൻ്റെ കഴിവുകളിൽ ആത്മവിശ്വാസമില്ല.",
    "text_observer": "Appears to lack confidence or feels down on oneself.",
    "text_observer_ml": "ആത്മവിശ്വാസമില്ലായ്മയോ സ്വന്തം കഴിവിനെക്കുറിച്ച് നിരാശയോ പ്രകടിപ്പിക്കുന്നു.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 5,
    "text_self": "I am easily distracted by extraneous stimuli around me.",
    "text_self_ml": "ചുറ്റുമുള്ള ചെറിയ ശബ്ദങ്ങളോ കാഴ്ചകളോ എൻ്റെ ശ്രദ്ധ വളരെ എളുപ്പത്തിൽ തെറ്റിക്കുന്നു.",
    "text_observer": "Is easily distracted by extraneous stimuli.",
    "text_observer_ml": "ചുറ്റുമുള്ള ചെറിയ കാര്യങ്ങളാൽ ശ്രദ്ധ വളരെ എളുപ്പത്തിൽ മാറുന്നു.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 6,
    "text_self": "I have difficulty remaining seated when required to do so.",
    "text_self_ml": "ഇരിക്കേണ്ട സന്ദർഭങ്ങളിൽ ഒരിടത്ത് തന്നെ അടങ്ങിയിരിക്കാൻ എനിക്ക് ബുദ്ധിമുട്ടാണ്.",
    "text_observer": "Has difficulty remaining seated when expected to do so.",
    "text_observer_ml": "ഇരിക്കേണ്ട സന്ദർഭങ്ങളിൽ അടങ്ങിയിരിക്കാൻ ബുദ്ധിമുട്ട് കാണിക്കുന്നു.",
    "scales": [
      "B",
      "F"
    ]
  },
  {
    "id": 7,
    "text_self": "I blurt out answers or comments before thinking.",
    "text_self_ml": "ചിന്തിക്കുന്നതിന് മുൻപ് തന്നെ ഞാൻ ഉത്തരങ്ങളോ അഭിപ്രായങ്ങളോ പെട്ടെന്ന് വിളിച്ചു പറയുന്നു.",
    "text_observer": "Blurts out answers or comments before thinking.",
    "text_observer_ml": "ചിന്തിക്കുന്നതിന് മുൻപ് തന്നെ ഉത്തരങ്ങളോ അഭിപ്രായങ്ങളോ എടുത്തുചാടി പറയുന്നു.",
    "scales": [
      "C",
      "F",
      "H"
    ]
  },
  {
    "id": 8,
    "text_self": "I feel like a failure or underachiever compared to peers.",
    "text_self_ml": "മറ്റുള്ളവരുമായി താരതമ്യം ചെയ്യുമ്പോൾ ഞാൻ പരാജയപ്പെട്ടതുപോലെ അല്ലെങ്കിൽ പിന്നിലായതുപോലെ തോന്നുന്നു.",
    "text_observer": "Expresses feeling like a failure or underachiever.",
    "text_observer_ml": "മറ്റുള്ളവരെ അപേക്ഷിച്ച് താൻ പരാജയപ്പെട്ടുവെന്ന തോന്നൽ പ്രകടിപ്പിക്കുന്നു.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 9,
    "text_self": "I misplace or lose things needed for work or daily life.",
    "text_self_ml": "ജോലിക്കോ ദൈനംദിന ജീവിതത്തിനോ ആവശ്യമായ സാധനങ്ങൾ ഞാൻ എവിടെയെങ്കിലും വെച്ച് മറക്കുന്നു അല്ലെങ്കിൽ നഷ്ടപ്പെടുത്തുന്നു.",
    "text_observer": "Misplaces or loses items needed for daily tasks.",
    "text_observer_ml": "ദൈനംദിന കാര്യങ്ങൾക്ക് ആവശ്യമായ സാധനങ്ങൾ വെച്ച് മറക്കുകയോ നഷ്ടപ്പെടുത്തുകയോ ചെയ്യുന്നു.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 10,
    "text_self": "I fidget with my hands or feet or squirm in my seat.",
    "text_self_ml": "ഞാൻ കൈകാലുകൾ വെറുതെ ചലിപ്പിക്കുകയോ അല്ലെങ്കിൽ ഇരിക്കുന്നിടത്ത് അനങ്ങിക്കൊണ്ടിരിക്കുകയോ ചെയ്യുന്നു.",
    "text_observer": "Fidgets with hands or feet or squirms in seat.",
    "text_observer_ml": "കൈകാലുകൾ വെറുതെ ചലിപ്പിക്കുകയോ ഇരിപ്പിടത്തിൽ അടങ്ങിയിരിക്കാതെ അനങ്ങുകയോ ചെയ്യുന്നു.",
    "scales": [
      "B",
      "F"
    ]
  },
  {
    "id": 11,
    "text_self": "I make impulsive decisions on the spur of the moment.",
    "text_self_ml": "ഒരു നിമിഷത്തെ തോന്നലിൽ എടുത്തുചാടി ഞാൻ തീരുമാനങ്ങൾ എടുക്കുന്നു.",
    "text_observer": "Makes impulsive decisions on the spur of the moment.",
    "text_observer_ml": "മുൻപിൻ നോക്കാതെ പെട്ടെന്നുള്ള തോന്നലിൽ തീരുമാനങ്ങൾ എടുക്കുന്നു.",
    "scales": [
      "C",
      "H"
    ]
  },
  {
    "id": 12,
    "text_self": "I feel frustrated with how little I accomplish.",
    "text_self_ml": "എനിക്ക് കാര്യങ്ങളൊന്നും ശരിയായി പൂർത്തിയാക്കാൻ സാധിക്കുന്നില്ല എന്നതിൽ ഞാൻ അസ്വസ്ഥനാണ്.",
    "text_observer": "Seems frustrated with how little is accomplished.",
    "text_observer_ml": "കാര്യങ്ങൾ പൂർത്തിയാക്കാൻ കഴിയാത്തതിൽ അസ്വസ്ഥത പ്രകടിപ്പിക്കുന്നു.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 13,
    "text_self": "I fail to give close attention to details or make careless mistakes.",
    "text_self_ml": "കാര്യങ്ങളിൽ സൂക്ഷ്മശ്രദ്ധ നൽകാൻ എനിക്ക് കഴിയുന്നില്ല, അല്ലെങ്കിൽ അശ്രദ്ധമായ തെറ്റുകൾ വരുത്തുന്നു.",
    "text_observer": "Fails to give close attention to details or makes careless errors.",
    "text_observer_ml": "സൂക്ഷ്മകാര്യങ്ങളിൽ ശ്രദ്ധക്കുറവ് കാണിക്കുകയോ അശ്രദ്ധമായ തെറ്റുകൾ വരുത്തുകയോ ചെയ്യുന്നു.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 14,
    "text_self": "I feel internally restless even when I am sitting still.",
    "text_self_ml": "വെറുതെ ശാന്തമായി ഇരിക്കുമ്പോഴും മനസ്സിനുള്ളിൽ വല്ലാത്തൊരു അസ്വസ്ഥതയും വെപ്രാളവും അനുഭവപ്പെടുന്നു.",
    "text_observer": "Appears restless inside even when seated.",
    "text_observer_ml": "ശാന്തമായി ഇരിക്കുമ്പോഴും ഉള്ളിൽ വല്ലാത്തൊരു അസ്വസ്ഥത അനുഭവപ്പെടുന്നതായി കാണപ്പെടുന്നു.",
    "scales": [
      "B",
      "H"
    ]
  },
  {
    "id": 15,
    "text_self": "I have a short temper or low tolerance for frustration.",
    "text_self_ml": "എനിക്ക് പെട്ടെന്ന് ദേഷ്യം വരുന്നു അല്ലെങ്കിൽ അല്പം പോലും ക്ഷമിക്കാൻ സാധിക്കുന്നില്ല.",
    "text_observer": "Has a short fuse or low tolerance for frustration.",
    "text_observer_ml": "പെട്ടെന്ന് ദേഷ്യപ്പെടുകയോ അല്പം പോലും ക്ഷമയില്ലാതെ പെരുമാറുകയോ ചെയ്യുന്നു.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 16,
    "text_self": "I doubt my ability to succeed at new projects.",
    "text_self_ml": "പുതിയ കാര്യങ്ങളിലോ പ്രോജക്ടുകളിലോ വിജയിക്കാനുള്ള എൻ്റെ കഴിവിൽ എനിക്ക് സംശയം തോന്നുന്നു.",
    "text_observer": "Doubts ability to succeed at new projects.",
    "text_observer_ml": "പുതിയ കാര്യങ്ങളിൽ വിജയിക്കാനുള്ള സ്വന്തം കഴിവിൽ സംശയം പ്രകടിപ്പിക്കുന്നു.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 17,
    "text_self": "I have difficulty sustaining attention during lectures or tasks.",
    "text_self_ml": "സംഭാഷണങ്ങളിലോ ക്ലാസ്സുകളിലോ ജോലികളിലോ ദീർഘനേരം ശ്രദ്ധ നിലനിർത്താൻ എനിക്ക് പ്രയാസമാണ്.",
    "text_observer": "Has difficulty sustaining focus during conversations or tasks.",
    "text_observer_ml": "സംഭാഷണങ്ങളിലോ ജോലികളിലോ ദീർഘനേരം ശ്രദ്ധ നിലനിർത്താൻ ബുദ്ധിമുട്ടുന്നു.",
    "scales": [
      "A",
      "E",
      "H"
    ]
  },
  {
    "id": 18,
    "text_self": "I talk excessively in social situations.",
    "text_self_ml": "സാമൂഹിക ഒത്തുചേരലുകളിൽ ഞാൻ അമിതമായി സംസാരിക്കുന്നു.",
    "text_observer": "Talks excessively in social situations.",
    "text_observer_ml": "മറ്റുള്ളവരുമായി ഇടപഴകുമ്പോൾ നിർത്താതെ അമിതമായി സംസാരിക്കുന്നു.",
    "scales": [
      "B",
      "F"
    ]
  },
  {
    "id": 19,
    "text_self": "My moods change quickly and unpredictably.",
    "text_self_ml": "എൻ്റെ മാനസികാവസ്ഥ പെട്ടെന്ന് പെട്ടെന്ന് പ്രവചനാതീതമായി മാറിക്കൊണ്ടിരിക്കുന്നു.",
    "text_observer": "Moods change rapidly and unpredictably.",
    "text_observer_ml": "മാനസികാവസ്ഥ പെട്ടെന്നും അപ്രതീക്ഷിതമായും മാറിക്കൊണ്ടിരിക്കുന്നു.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 20,
    "text_self": "I am overly critical of myself and my mistakes.",
    "text_self_ml": "എന്നെക്കുറിച്ചും എൻ്റെ തെറ്റുകളെക്കുറിച്ചും ഞാൻ അമിതമായി കുറ്റപ്പെടുത്തുന്നു.",
    "text_observer": "Is overly self-critical.",
    "text_observer_ml": "സ്വന്തം തെറ്റുകളെക്കുറിച്ച് അമിതമായി സ്വയം കുറ്റപ്പെടുത്തുന്നു.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 21,
    "text_self": "I forget appointments, deadlines, or planned activities.",
    "text_self_ml": "കൂടിക്കാഴ്ചകളും സമയപരിധികളും പദ്ധതിയിട്ട കാര്യങ്ങളും ഞാൻ മറന്നുപോകുന്നു.",
    "text_observer": "Forgets appointments, deadlines, or commitments.",
    "text_observer_ml": "തീരുമാനിച്ച കാര്യങ്ങളും സമയപരിധികളും കൂടിക്കാഴ്ചകളും മറന്നുപോകുന്നു.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 22,
    "text_self": "It takes great effort for me to sit through long meetings.",
    "text_self_ml": "നീണ്ട മീറ്റിംഗുകളിലോ യോഗങ്ങളിലോ ഇരിക്കാൻ എനിക്ക് വലിയ പരിശ്രമം ആവശ്യമാണ്.",
    "text_observer": "Struggles to sit quietly through long meetings.",
    "text_observer_ml": "നീണ്ട മീറ്റിംഗുകളിൽ അടങ്ങിയിരിക്കാൻ വളരെ ബുദ്ധിമുട്ടുന്നു.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 23,
    "text_self": "I act first and think about consequences later.",
    "text_self_ml": "പരിണിതഫലങ്ങളെക്കുറിച്ച് ചിന്തിക്കാതെ ഞാൻ ആദ്യം പ്രവർത്തിക്കുന്നു.",
    "text_observer": "Acts first and thinks about the consequences later.",
    "text_observer_ml": "പരിണതഫലങ്ങൾ ആലോചിക്കാതെ എടുത്തുചാടി പ്രവർത്തിക്കുന്നു.",
    "scales": [
      "C",
      "H"
    ]
  },
  {
    "id": 24,
    "text_self": "I feel dissatisfied with who I am.",
    "text_self_ml": "എൻ്റെ വ്യക്തിത്വത്തെക്കുറിച്ചും ഞാൻ ആരാണെന്നതിനെക്കുറിച്ചും എനിക്ക് അതൃപ്തി തോന്നുന്നു.",
    "text_observer": "Seems dissatisfied with self-worth.",
    "text_observer_ml": "സ്വന്തം വ്യക്തിത്വത്തെക്കുറിച്ച് അതൃപ്തി പ്രകടിപ്പിക്കുന്നു.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 25,
    "text_self": "I have trouble organizing multi-step tasks or activities.",
    "text_self_ml": "പല ഘട്ടങ്ങളുള്ള ജോലികൾ മുൻഗണനാക്രമത്തിൽ ചിട്ടപ്പെടുത്താൻ എനിക്ക് ബുദ്ധിമുട്ടുണ്ട്.",
    "text_observer": "Has trouble organizing complex tasks or activities.",
    "text_observer_ml": "സങ്കീർണ്ണമായ ജോലികൾ ക്രമീകരിക്കാൻ ബുദ്ധിമുട്ട് കാണിക്കുന്നു.",
    "scales": [
      "A",
      "E",
      "H"
    ]
  },
  {
    "id": 26,
    "text_self": "I have difficulty engaging in leisure activities quietly.",
    "text_self_ml": "വിശ്രമവേളകളിലെ വിനോദങ്ങളിൽ ബഹളമില്ലാതെ ശാന്തമായി ഏർപ്പെടാൻ എനിക്ക് കഴിയുന്നില്ല.",
    "text_observer": "Has difficulty engaging in hobbies or leisure quietly.",
    "text_observer_ml": "വിനോദങ്ങളിൽ ശാന്തമായി ഏർപ്പെടാൻ ബുദ്ധിമുട്ട് കാണിക്കുന്നു.",
    "scales": [
      "B",
      "F"
    ]
  },
  {
    "id": 27,
    "text_self": "I intrude into other people's conversations or games.",
    "text_self_ml": "മറ്റുള്ളവരുടെ സംഭാഷണങ്ങളിലോ കളികളിലോ ഞാൻ അനുവാദമില്ലാതെ ഇടപെടുന്നു.",
    "text_observer": "Intrudes into other people's conversations or games.",
    "text_observer_ml": "മറ്റുള്ളവരുടെ സംഭാഷണങ്ങളിലോ കാര്യങ്ങളിലോ അനാവശ്യമായി ഇടപെടുന്നു.",
    "scales": [
      "C",
      "F"
    ]
  },
  {
    "id": 28,
    "text_self": "I procrastinate or avoid starting tasks requiring sustained effort.",
    "text_self_ml": "കൂടുതൽ മാനസിക പരിശ്രമം വേണ്ട ജോലികൾ ആരംഭിക്കുന്നത് ഞാൻ നീട്ടിവെക്കുകയോ ഒഴിവാക്കുകയോ ചെയ്യുന്നു.",
    "text_observer": "Procrastinates or avoids tasks that require sustained effort.",
    "text_observer_ml": "കൂടുതൽ ശ്രദ്ധ വേണ്ട ജോലികൾ നീട്ടിവെക്കുകയോ ഒഴിവാക്കുകയോ ചെയ്യുന്നു.",
    "scales": [
      "A",
      "E",
      "H"
    ]
  },
  {
    "id": 29,
    "text_self": "I feel like I have unrealized potential because of my habits.",
    "text_self_ml": "എൻ്റെ ചിട്ടയില്ലാത്ത ശീലങ്ങൾ കാരണം എൻ്റെ യഥാർത്ഥ കഴിവുകൾ പുറത്തെടുക്കാൻ സാധിക്കുന്നില്ലെന്ന് തോന്നുന്നു.",
    "text_observer": "Expresses feeling held back by disorganized habits.",
    "text_observer_ml": "ചിട്ടയില്ലാത്ത സ്വഭാവം കാരണം കഴിവുകൾ പൂർണ്ണമായി ഉപയോഗിക്കാൻ കഴിയുന്നില്ലെന്ന് പ്രകടിപ്പിക്കുന്നു.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 30,
    "text_self": "I have trouble waiting in lines or waiting for my turn.",
    "text_self_ml": "വരിയിൽ (ക്യൂവിൽ) നിൽക്കാനോ എൻ്റെ ഊഴം കാത്തിരിക്കാനോ എനിക്ക് ക്ഷമയില്ല.",
    "text_observer": "Has difficulty waiting in line or waiting for turn.",
    "text_observer_ml": "വരികളിൽ നിൽക്കാനോ ഊഴം കാത്തിരിക്കാനോ പ്രയാസം കാണിക്കുന്നു.",
    "scales": [
      "C",
      "F",
      "H"
    ]
  },
  {
    "id": 31,
    "text_self": "I find myself tapping my fingers or bouncing my leg constantly.",
    "text_self_ml": "ഞാൻ അറിയാതെ തന്നെ വിരലുകൾ കൊണ്ട് മേശപ്പുറത്ത് തട്ടുകയോ കാലുകൾ ആട്ടുകയോ ചെയ്തുകൊണ്ടിരിക്കുന്നു.",
    "text_observer": "Taps fingers or bounces leg constantly.",
    "text_observer_ml": "തുടർച്ചയായി വിരലുകൾ തട്ടുകയോ കാലുകൾ ആട്ടുകയോ ചെയ്തുകൊണ്ടിരിക്കുന്നു.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 32,
    "text_self": "I struggle to remember what I just read or heard.",
    "text_self_ml": "ഇപ്പോൾ വായിച്ചതോ കേട്ടതോ ആയ കാര്യങ്ങൾ ഓർത്തെടുക്കാൻ ഞാൻ പ്രയാസപ്പെടുന്നു.",
    "text_observer": "Struggles to retain information just read or heard.",
    "text_observer_ml": "കേട്ടതോ വായിച്ചതോ ആയ വിവരങ്ങൾ പെട്ടെന്ന് ഓർത്തെടുക്കാൻ ബുദ്ധിമുട്ടുന്നു.",
    "scales": [
      "A"
    ]
  },
  {
    "id": 33,
    "text_self": "I say things I later regret when annoyed or excited.",
    "text_self_ml": "ദേഷ്യമോ ആവേശമോ വരുമ്പോൾ പിന്നീട് ഖേദിക്കേണ്ടി വരുന്ന കാര്യങ്ങൾ ഞാൻ വിളിച്ചുപറയുന്നു.",
    "text_observer": "Says things later regretted when emotionally stimulated.",
    "text_observer_ml": "വികാരവിക്ഷോഭത്തിൽ പിന്നീട് വിഷമിക്കേണ്ടി വരുന്ന വാക്കുകൾ പറയുന്നു.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 34,
    "text_self": "I feel insecure about my intellect or competence.",
    "text_self_ml": "എൻ്റെ ബുദ്ധിശക്തിയെക്കുറിച്ചും കാര്യപ്രാപ്തിയെക്കുറിച്ചും എനിക്ക് അപകർഷതാബോധം തോന്നുന്നു.",
    "text_observer": "Shows insecurity about competence.",
    "text_observer_ml": "കാര്യപ്രാപ്തിയെയും ബുദ്ധിയെയും കുറിച്ച് അപകർഷതാബോധം കാണിക്കുന്നു.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 35,
    "text_self": "I leave projects or chores half-finished.",
    "text_self_ml": "തുടങ്ങിയ ജോലികളോ വീട്ടുജോലികളോ ഞാൻ പകുതിവഴിയിൽ ഉപേക്ഷിക്കുന്നു.",
    "text_observer": "Leaves projects or tasks incomplete.",
    "text_observer_ml": "ജോലികളും പ്രോജക്ടുകളും പൂർത്തിയാക്കാതെ പകുതിയിൽ നിർത്തുന്നു.",
    "scales": [
      "A",
      "E",
      "H"
    ]
  },
  {
    "id": 36,
    "text_self": "I can't find my keys, wallet, phone, or essential papers.",
    "text_self_ml": "താക്കോലുകൾ, പഴ്സ്, ഫോൺ, പ്രധാന രേഖകൾ എന്നിവ എവിടെയാണെന്ന് കണ്ടെത്താൻ എനിക്ക് കഴിയുന്നില്ല.",
    "text_observer": "Frequently misplaces essential items like keys, phone, wallet.",
    "text_observer_ml": "താക്കോൽ, ഫോൺ, പഴ്സ് തുടങ്ങിയ അത്യാവശ്യ സാധനങ്ങൾ ഇടയ്ക്കിടെ നഷ്ടപ്പെടുത്തുന്നു.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 37,
    "text_self": "I feel uncomfortable sitting still for prolonged periods.",
    "text_self_ml": "കൂടുതൽ സമയം ഒരിടത്ത് തന്നെ അടങ്ങിയിരിക്കുന്നത് എനിക്ക് വലിയ അസ്വസ്ഥത ഉണ്ടാക്കുന്നു.",
    "text_observer": "Becomes noticeably restless when seated for extended periods.",
    "text_observer_ml": "കൂടുതൽ നേരം ഒരേയിടത്ത് ഇരിക്കുമ്പോൾ പ്രകടമായ അസ്വസ്ഥത കാണിക്കുന്നു.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 38,
    "text_self": "I react aggressively or defensively when criticized.",
    "text_self_ml": "ആരെങ്കിലും എന്നെ വിമർശിക്കുമ്പോൾ ഞാൻ പ്രകോപിതനാകുകയോ പെട്ടെന്ന് പ്രതിരോധിക്കുകയോ ചെയ്യുന്നു.",
    "text_observer": "Reacts with irritability or defense when criticized.",
    "text_observer_ml": "വിമർശനങ്ങൾ കേൾക്കുമ്പോൾ പെട്ടെന്ന് പ്രകോപിതനാകുന്നു.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 39,
    "text_self": "I compare myself unfavorably to friends and coworkers.",
    "text_self_ml": "സുഹൃത്തുക്കളുമായും സഹപ്രവർത്തകരുമായും താരതമ്യപ്പെടുത്തി ഞാൻ എന്നെത്തന്നെ താഴ്ത്തിക്കെട്ടുന്നു.",
    "text_observer": "Compares oneself unfavorably to others.",
    "text_observer_ml": "മറ്റുള്ളവരുമായി താരതമ്യം ചെയ്ത് സ്വയം താഴ്ത്തി സംസാരിക്കുന്നു.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 40,
    "text_self": "I zone out or drift off when someone speaks directly to me.",
    "text_self_ml": "ആരെങ്കിലും എന്നോട് നേരിട്ട് സംസാരിക്കുമ്പോൾ എൻ്റെ മനസ്സ് എങ്ങോട്ടോ അലഞ്ഞുതിരിഞ്ഞു പോകുന്നു.",
    "text_observer": "Seems not to listen when spoken to directly.",
    "text_observer_ml": "നേരിട്ട് സംസാരിക്കുമ്പോൾ ശ്രദ്ധിക്കാതെ വേറെ എവിടെയോ നോക്കിയിരിക്കുന്നതായി തോന്നുന്നു.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 41,
    "text_self": "I am impatient when things move slower than I prefer.",
    "text_self_ml": "കാര്യങ്ങൾ ഞാൻ ആഗ്രഹിക്കുന്നതിലും പതുക്കെ നടക്കുമ്പോൾ എനിക്ക് കടുത്ത അക്ഷമ അനുഭവപ്പെടുന്നു.",
    "text_observer": "Shows extreme impatience when things move slowly.",
    "text_observer_ml": "കാര്യങ്ങൾക്ക് വേഗത കുറയുമ്പോൾ കടുത്ത അക്ഷമ പ്രകടിപ്പിക്കുന്നു.",
    "scales": [
      "C",
      "H"
    ]
  },
  {
    "id": 42,
    "text_self": "I get thrown off track by background sounds or sights.",
    "text_self_ml": "പശ്ചാത്തലത്തിലെ ചെറിയ ശബ്ദങ്ങളോ കാഴ്ചകളോ എൻ്റെ ജോലിയിൽ നിന്നുള്ള ശ്രദ്ധ പെട്ടെന്ന് തെറ്റിക്കുന്നു.",
    "text_observer": "Easily sidetracked by trivial background events.",
    "text_observer_ml": "ചെറിയ ബാഹ്യ സംഭവങ്ങളാൽ ശ്രദ്ധ എളുപ്പത്തിൽ നഷ്ടപ്പെടുന്നു.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 43,
    "text_self": "I feel an urgent drive to get up and walk around.",
    "text_self_ml": "ഇരിക്കുന്നിടത്തുനിന്ന് എഴുന്നേറ്റ് അങ്ങോട്ടുമിങ്ങോട്ടും നടക്കണമെന്ന് എനിക്ക് ശക്തമായ തോന്നലുണ്ടാകുന്നു.",
    "text_observer": "Frequently gets up and wanders around during sedentary tasks.",
    "text_observer_ml": "ഇരിക്കേണ്ട സമയങ്ങളിൽ എഴുന്നേറ്റ് നടക്കാൻ പ്രവണത കാണിക്കുന്നു.",
    "scales": [
      "B",
      "F"
    ]
  },
  {
    "id": 44,
    "text_self": "I feel inadequate in managing basic adult responsibilities.",
    "text_self_ml": "മുതിർന്ന ഒരാളുടെ അടിസ്ഥാന ഉത്തരവാദിത്തങ്ങൾ നിർവഹിക്കാൻ എനിക്ക് കഴിയുന്നില്ലെന്ന് തോന്നുന്നു.",
    "text_observer": "Expresses feelings of inadequacy in managing daily life.",
    "text_observer_ml": "ദൈനംദിന ജീവിത ഉത്തരവാദിത്തങ്ങൾ കൈകാര്യം ചെയ്യാൻ പ്രാപ്തിയില്ലെന്ന തോന്നൽ പ്രകടിപ്പിക്കുന്നു.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 45,
    "text_self": "I make careless errors in calculations, forms, or messages.",
    "text_self_ml": "കണക്കുകൂട്ടലുകളിലോ ഫോമുകൾ പൂരിപ്പിക്കുമ്പോഴോ സന്ദേശങ്ങളിലോ ഞാൻ അശ്രദ്ധമായ തെറ്റുകൾ വരുത്തുന്നു.",
    "text_observer": "Makes careless errors in routine paperwork or tasks.",
    "text_observer_ml": "പതിവ് രേഖകളിലോ ജോലികളിലോ അശ്രദ്ധമായ പിഴവുകൾ വരുത്തുന്നു.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 46,
    "text_self": "I spend money impulsively without planning ahead.",
    "text_self_ml": "മുൻകൂട്ടി ആലോചിക്കാതെ ഞാൻ പെട്ടെന്നുള്ള തോന്നലിൽ പണം ധൂർത്തടിക്കുന്നു.",
    "text_observer": "Spends money impulsively without budget consideration.",
    "text_observer_ml": "ആവശ്യവും അനാവശ്യവും നോക്കാതെ പണം എടുത്തുചാടി ചിലവഴിക്കുന്നു.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 47,
    "text_self": "I have trouble relaxing my mind at the end of the day.",
    "text_self_ml": "ദിവസാവസാനം എൻ്റെ മനസ്സിനെ ശാന്തമാക്കാനും വിശ്രമിക്കാനും എനിക്ക് സാധിക്കുന്നില്ല.",
    "text_observer": "Has trouble unwinding or calming mind down.",
    "text_observer_ml": "മനസ്സ് ശാന്തമാക്കാനോ വിശ്രമിക്കാനോ ബുദ്ധിമുട്ടുന്നതായി കാണപ്പെടുന്നു.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 48,
    "text_self": "I avoid events where I have to sit still and listen.",
    "text_self_ml": "ശാന്തമായി ഇരുന്ന് കേൾക്കേണ്ടി വരുന്ന സദസ്സുകളോ പരിപാടികളോ ഞാൻ ഒഴിവാക്കുന്നു.",
    "text_observer": "Avoids settings requiring quiet, passive listening.",
    "text_observer_ml": "ശാന്തമായി ഇരിക്കേണ്ട സാഹചര്യങ്ങൾ പരമാവധി ഒഴിവാക്കുന്നു.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 49,
    "text_self": "I struggle to estimate the time required for activities.",
    "text_self_ml": "ഒരു ജോലി ചെയ്ത് തീർക്കാൻ എത്ര സമയം വേണമെന്ന് മുൻകൂട്ടി കണക്കാക്കാൻ ഞാൻ പ്രയാസപ്പെടുന്നു.",
    "text_observer": "Poorly estimates time needed to travel or finish tasks.",
    "text_observer_ml": "ജോലികൾ തീർക്കാൻ വേണ്ട സമയം കണക്കുകൂട്ടുന്നതിൽ പിഴവ് വരുത്തുന്നു.",
    "scales": [
      "A",
      "H"
    ]
  },
  {
    "id": 50,
    "text_self": "I become irritable over minor schedule changes.",
    "text_self_ml": "തീരുമാനിച്ച സമയക്രമത്തിൽ ചെറിയ മാറ്റങ്ങൾ വരുമ്പോൾ പോലും എനിക്ക് പെട്ടെന്ന് ദേഷ്യവും അസ്വസ്ഥതയും ഉണ്ടാകുന്നു.",
    "text_observer": "Becomes agitated over minor disruptions.",
    "text_observer_ml": "ചെറിയ തടസ്സങ്ങളോ മാറ്റങ്ങളോ ഉണ്ടാകുമ്പോൾ പെട്ടെന്ന് പ്രകോപിതനാകുന്നു.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 51,
    "text_self": "I feel unfulfilled despite working hard.",
    "text_self_ml": "കഠിനാധ്വാനം ചെയ്തിട്ടും ജീവിതത്തിൽ എന്തോ അപൂർണ്ണതയും അതൃപ്തിയും അനുഭവപ്പെടുന്നു.",
    "text_observer": "Feels unfulfilled despite putting in effort.",
    "text_observer_ml": "പരിശ്രമിച്ചിട്ടും തൃപ്തി ലഭിക്കുന്നില്ലെന്ന വികാരം പ്രകടിപ്പിക്കുന്നു.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 52,
    "text_self": "I feel an inner turmoil or physical agitation when still.",
    "text_self_ml": "അനങ്ങാതെ ഇരിക്കുമ്പോൾ ഉള്ളിൽ വല്ലാത്തൊരു പിരിമുറുക്കമോ ശാരീരിക അസ്വസ്ഥതയോ അനുഭവപ്പെടുന്നു.",
    "text_observer": "Shows signs of physical or inner agitation when stationary.",
    "text_observer_ml": "അനങ്ങാതെ ഇരിക്കുമ്പോൾ ശാരീരികമായ അസ്വസ്ഥതയോ പിരിമുറുക്കമോ കാണിക്കുന്നു.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 53,
    "text_self": "I lose track of what I am saying in the middle of a sentence.",
    "text_self_ml": "സംസാരിച്ചുകൊണ്ടിരിക്കുമ്പോൾ വാചകത്തിന് നടുവിൽ വെച്ച് ഞാൻ എന്താണ് പറഞ്ഞതെന്ന് ഓർമ്മ നഷ്ടപ്പെടുന്നു.",
    "text_observer": "Loses train of thought mid-sentence.",
    "text_observer_ml": "സംസാരത്തിനിടയിൽ ആശയങ്ങൾ പെട്ടെന്ന് നഷ്ടപ്പെടുന്നു.",
    "scales": [
      "A"
    ]
  },
  {
    "id": 54,
    "text_self": "I cut in line or rush ahead of others in traffic or queues.",
    "text_self_ml": "വാഹനമോടിക്കുമ്പോഴോ ക്യൂവിലോ മറ്റുള്ളവരെ മറികടന്ന് മുന്നിൽ കയറാൻ ഞാൻ തിടുക്കം കൂട്ടുന്നു.",
    "text_observer": "Rushes ahead impatiently or cuts in queues.",
    "text_observer_ml": "ക്യൂവിലോ ട്രാഫിക്കിലോ മറ്റുള്ളവരെ മറികടന്ന് പോകാൻ അക്ഷമ കാണിക്കുന്നു.",
    "scales": [
      "C",
      "F"
    ]
  },
  {
    "id": 55,
    "text_self": "I feel helpless about organizing my workspace or home.",
    "text_self_ml": "എൻ്റെ വീടോ ജോലിസ്ഥലമോ അടുക്കും ചിട്ടയോടും കൂടി സൂക്ഷിക്കാൻ എനിക്ക് ഒരു വഴിയും കാണുന്നില്ല.",
    "text_observer": "Feels overwhelmed by clutter or organization.",
    "text_observer_ml": "മുറിയോ സാധനങ്ങളോ ക്രമീകരിക്കുന്നതിൽ നിസ്സഹായാവസ്ഥ കാണിക്കുന്നു.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 56,
    "text_self": "I switch rapidly between multiple unfinished tasks.",
    "text_self_ml": "പൂർത്തിയാക്കാത്ത ഒന്നിലധികം ജോലികളിലേക്ക് ഞാൻ വളരെ വേഗത്തിൽ മാറിമാറി പോകുന്നു.",
    "text_observer": "Jumps between several activities without finishing any.",
    "text_observer_ml": "ഒന്നും പൂർത്തിയാക്കാതെ പല ജോലികളിലേക്ക് മാറിമാറി ഏർപ്പെടുന്നു.",
    "scales": [
      "A",
      "H"
    ]
  },
  {
    "id": 57,
    "text_self": "I feel overwhelmed by quiet, monotonous environments.",
    "text_self_ml": "ശാന്തവും ഒരേപോലെയുള്ളതുമായ വിരസമായ അന്തരീക്ഷം എന്നെ വല്ലാതെ അസ്വസ്ഥനാക്കുന്നു.",
    "text_observer": "Gets agitated in quiet, monotonous environments.",
    "text_observer_ml": "ശാന്തവും വിരസവുമായ അന്തരീക്ഷത്തിൽ അസ്വസ്ഥനാകുന്നു.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 58,
    "text_self": "I drive faster or take unnecessary risks on the road.",
    "text_self_ml": "റോഡിൽ ഞാൻ അമിതവേഗതയിൽ വാഹനമോടിക്കുകയോ അനാവശ്യമായ അപകടസാധ്യതകൾ വരുത്തിവെക്കുകയോ ചെയ്യുന്നു.",
    "text_observer": "Drives aggressively or takes impulsive risks.",
    "text_observer_ml": "അശ്രദ്ധമായി വാഹനമോടിക്കുകയോ അനാവശ്യ അപകടങ്ങൾ വരുത്തുകയോ ചെയ്യുന്നു.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 59,
    "text_self": "I have messy or chaotic filing, storage, or workspaces.",
    "text_self_ml": "എൻ്റെ രേഖകളും ഫയലുകളും ജോലിസ്ഥലവും എപ്പോഴും അലങ്കോലമായി ചിതറിക്കിടക്കുന്നു.",
    "text_observer": "Maintains disorganized or chaotic workspaces.",
    "text_observer_ml": "ജോലിസ്ഥലവും ഫയലുകളും ചിട്ടയില്ലാതെ സൂക്ഷിക്കുന്നു.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 60,
    "text_self": "I feel like I let people down because of my forgetfulness.",
    "text_self_ml": "എൻ്റെ മറവിയും ശ്രദ്ധക്കുറവും കാരണം ഞാൻ മറ്റുള്ളവരുടെ പ്രതീക്ഷകൾ തെറ്റിക്കുന്നു എന്ന് എനിക്ക് തോന്നുന്നു.",
    "text_observer": "Worries about disappointing others due to disorganization.",
    "text_observer_ml": "മറവി കാരണം മറ്റുള്ളവരെ നിരാശപ്പെടുത്തുന്നുവെന്ന ആശങ്ക പ്രകടിപ്പിക്കുന്നു.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 61,
    "text_self": "I talk so much that others cannot get a word in.",
    "text_self_ml": "മറ്റുള്ളവർക്ക് ഒരക്ഷരം പോലും പറയാൻ അവസരം നൽകാതെ ഞാൻ അത്രയധികം സംസാരിച്ചുകൊണ്ടേയിരിക്കുന്നു.",
    "text_observer": "Dominates conversations without allowing others to speak.",
    "text_observer_ml": "മറ്റുള്ളവർക്ക് സംസാരിക്കാൻ അവസരം നൽകാതെ സംഭാഷണത്തിൽ ആധിപത്യം പുലർത്തുന്നു.",
    "scales": [
      "B",
      "F"
    ]
  },
  {
    "id": 62,
    "text_self": "I make hasty purchases I promptly regret.",
    "text_self_ml": "ആലോചനയില്ലാതെ ഞാൻ തിടുക്കത്തിൽ സാധനങ്ങൾ വാങ്ങിക്കൂട്ടുകയും ഉടൻതന്നെ അതിൽ ഖേദിക്കുകയും ചെയ്യുന്നു.",
    "text_observer": "Makes hasty purchases that are later regretted.",
    "text_observer_ml": "തിടുക്കത്തിൽ വാങ്ങിയ സാധനങ്ങളിൽ പിന്നീട് കുറ്റബോധം കാണിക്കുന്നു.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 63,
    "text_self": "I misjudge priorities, focusing on trivial tasks first.",
    "text_self_ml": "പ്രധാനപ്പെട്ട കാര്യങ്ങൾ വിട്ട് നിസ്സാര കാര്യങ്ങളിൽ ഞാൻ മുൻഗണന നൽകി സമയം കളയുന്നു.",
    "text_observer": "Focuses on trivial details while ignoring urgent priorities.",
    "text_observer_ml": "പ്രധാന കാര്യങ്ങൾ ഒഴിവാക്കി നിസ്സാര കാര്യങ്ങളിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നു.",
    "scales": [
      "A",
      "H"
    ]
  },
  {
    "id": 64,
    "text_self": "I have a habit of continuously shifting positions while seated.",
    "text_self_ml": "ഇരിക്കുമ്പോൾ തുടർച്ചയായി ഇരിപ്പിടം മാറിക്കൊണ്ടിരിക്കുന്ന ഒരു ശീലം എനിക്കുണ്ട്.",
    "text_observer": "Continuously shifts positions while seated.",
    "text_observer_ml": "ഇരിക്കുമ്പോൾ നിരന്തരം ഇരിപ്പിടം മാറ്റിക്കൊണ്ടിരിക്കുന്നു.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 65,
    "text_self": "I am prone to sudden emotional outbursts.",
    "text_self_ml": "പെട്ടെന്ന് നിയന്ത്രണം വിട്ട് ദേഷ്യപ്പെടുകയോ വികാരപ്രകടനങ്ങൾ നടത്തുകയോ ചെയ്യുന്ന പ്രവണത എനിക്കുണ്ട്.",
    "text_observer": "Prone to sudden emotional outbursts.",
    "text_observer_ml": "പെട്ടെന്ന് വികാരാധീനനാകുകയോ ദേഷ്യപ്പെടുകയോ ചെയ്യുന്നു.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 66,
    "text_self": "I feel hopeless about ever becoming well-organized.",
    "text_self_ml": "എൻ്റെ ജീവിതവും കാര്യങ്ങളും എപ്പോഴെങ്കിലും ചിട്ടയുള്ളതാക്കാൻ സാധിക്കുമോ എന്നതിൽ എനിക്ക് നിരാശ തോന്നുന്നു.",
    "text_observer": "Expresses hopelessness regarding personal organization.",
    "text_observer_ml": "കാര്യങ്ങൾ ചിട്ടപ്പെടുത്തുന്നതിൽ നിരാശയും പ്രതീക്ഷയില്ലായ്മയും പ്രകടിപ്പിക്കുന്നു.",
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
