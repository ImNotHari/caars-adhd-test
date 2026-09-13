/**
 * CAARS 66-Item Psychometric Questions and Inconsistency Index Pairs.
 * Verified Source of Truth with Complete English and Simple, Natural Malayalam (മലയാളം) Phrasing.
 * Dual-environment support: Browser (window.CAARS_QUESTIONS) & Node.js (module.exports).
 */

const CAARS_QUESTIONS = [
  {
    "id": 1,
    "text_self": "I have trouble getting started on a task.",
    "text_self_ml": "ഒരു കാര്യം ചെയ്യാനുണ്ടെങ്കിൽ അത് തുടങ്ങി വെക്കാൻ എനിക്ക് വലിയ മടിയോ ബുദ്ധിമുട്ടോ തോന്നാറുണ്ട്.",
    "text_observer": "Has trouble getting started on a task.",
    "text_observer_ml": "ഒരു കാര്യം ചെയ്യാനുണ്ടെങ്കിൽ അത് തുടങ്ങി വെക്കാൻ ഇവർക്ക് വലിയ മടിയോ ബുദ്ധിമുട്ടോ കാണാറുണ്ട്.",
    "scales": [
      "A",
      "H"
    ]
  },
  {
    "id": 2,
    "text_self": "I am constantly on the go, as if driven by a motor.",
    "text_self_ml": "ഒരിടത്തും അടങ്ങിയിരിക്കാൻ എനിക്ക് പറ്റാറില്ല, എപ്പോഴും എന്തെങ്കിലും ചെയ്തുകൊണ്ടേയിരിക്കണം എന്ന് തോന്നും.",
    "text_observer": "Is constantly on the go, as if driven by a motor.",
    "text_observer_ml": "ഒരിടത്തും അടങ്ങിയിരിക്കാൻ ഇവർക്ക് പറ്റാറില്ല, എപ്പോഴും എന്തെങ്കിലും ചെയ്തുകൊണ്ടേയിരിക്കാൻ തിടുക്കം കാണിക്കും.",
    "scales": [
      "B",
      "F"
    ]
  },
  {
    "id": 3,
    "text_self": "I interrupt people when they are talking.",
    "text_self_ml": "മറ്റുള്ളവർ സംസാരിച്ചു തീരുന്നതിന് മുൻപേ ഞാൻ ഇടക്കുകയറി സംസാരിച്ചു പോകാറുണ്ട്.",
    "text_observer": "Interrupts people when they are talking.",
    "text_observer_ml": "മറ്റുള്ളവർ സംസാരിച്ചു തീരുന്നതിന് മുൻപേ ഇടക്കുകയറി സംസാരിക്കാറുണ്ട്.",
    "scales": [
      "C",
      "F"
    ]
  },
  {
    "id": 4,
    "text_self": "I feel down on myself or lack confidence in my abilities.",
    "text_self_ml": "എന്നെക്കൊണ്ട് ഒന്നിനും കൊള്ളില്ലെന്നോ എനിക്ക് കഴിവില്ലെന്നോ പലപ്പോഴും തോന്നാറുണ്ട്.",
    "text_observer": "Appears to lack confidence or feels down on oneself.",
    "text_observer_ml": "തനിക്ക് ഒന്നിനും കഴിവില്ലെന്നോ ആത്മവിശ്വാസമില്ലെന്നോ ഇവർ പറയാറുണ്ട്.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 5,
    "text_self": "I am easily distracted by extraneous stimuli around me.",
    "text_self_ml": "ചുറ്റുമുള്ള ചെറിയ ശബ്ദമോ ആളുകളുടെ അനക്കമോ ഉണ്ടായാൽപ്പോലും എന്റെ ശ്രദ്ധ പെട്ടെന്ന് മാറിപ്പോകും.",
    "text_observer": "Is easily distracted by extraneous stimuli.",
    "text_observer_ml": "ചുറ്റുമുള്ള ചെറിയ ശബ്ദമോ അനക്കമോ ഉണ്ടായാൽപ്പോലും ഇവരുടെ ശ്രദ്ധ പെട്ടെന്ന് തെറ്റിപ്പോകും.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 6,
    "text_self": "I have difficulty remaining seated when required to do so.",
    "text_self_ml": "കുറെ നേരം ഒരിടത്ത് തന്നെ അടങ്ങിയിരിക്കേണ്ടി വന്നാൽ എനിക്ക് ഇരിപ്പുറക്കില്ല.",
    "text_observer": "Has difficulty remaining seated when expected to do so.",
    "text_observer_ml": "കുറെ നേരം ഒരിടത്ത് തന്നെ അടങ്ങിയിരിക്കേണ്ടി വന്നാൽ ഇവർക്ക് ഇരിപ്പുറക്കാറില്ല.",
    "scales": [
      "B",
      "F"
    ]
  },
  {
    "id": 7,
    "text_self": "I blurt out answers or comments before thinking.",
    "text_self_ml": "ഒന്ന് ആലോചിച്ചു നോക്കുന്നതിന് മുൻപേ വായിൽ തോന്നുന്നത് പെട്ടെന്ന് പറഞ്ഞുപോകും.",
    "text_observer": "Blurts out answers or comments before thinking.",
    "text_observer_ml": "ഒന്ന് ആലോചിച്ചു നോക്കുന്നതിന് മുൻപേ മനസ്സിൽ തോന്നുന്നത് ഇവർ പെട്ടെന്ന് വിളിച്ചുപറയും.",
    "scales": [
      "C",
      "F",
      "H"
    ]
  },
  {
    "id": 8,
    "text_self": "I feel like a failure or underachiever compared to peers.",
    "text_self_ml": "കൂടെയുള്ളവരെ വെച്ച് നോക്കുമ്പോൾ ജീവിതത്തിൽ ഞാൻ ഒരുപാട് പിന്നിലായിപ്പോയെന്ന് തോന്നാറുണ്ട്.",
    "text_observer": "Expresses feeling like a failure or underachiever.",
    "text_observer_ml": "കൂടെയുള്ളവരെ വെച്ച് നോക്കുമ്പോൾ താൻ ഒരുപാട് പിന്നിലായിപ്പോയി എന്ന് ഇവർക്ക് തോന്നാറുണ്ട്.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 9,
    "text_self": "I misplace or lose things needed for work or daily life.",
    "text_self_ml": "താക്കോൽ, ഫോൺ, പേഴ്സ് തുടങ്ങിയ അത്യാവശ്യ സാധനങ്ങൾ എവിടെയെങ്കിലും വെച്ച് മറക്കുകയോ കളഞ്ഞുപോവുകയോ ചെയ്യാറുണ്ട്.",
    "text_observer": "Misplaces or loses items needed for daily tasks.",
    "text_observer_ml": "താക്കോൽ, ഫോൺ തുടങ്ങിയ അത്യാവശ്യ സാധനങ്ങൾ എവിടെയെങ്കിലും വെച്ച് മറക്കുകയോ കളഞ്ഞുപോവുകയോ ചെയ്യും.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 10,
    "text_self": "I fidget with my hands or feet or squirm in my seat.",
    "text_self_ml": "ഇരിക്കുമ്പോൾ വെറുതെ കൈവിരൽ തട്ടുകയോ, കാലാട്ടുകയോ, വെപ്രാളം കാണിക്കുകയോ ചെയ്യാറുണ്ട്.",
    "text_observer": "Fidgets with hands or feet or squirms in seat.",
    "text_observer_ml": "ഇരിക്കുമ്പോൾ വെറുതെ കൈകാലുകൾ ചലിപ്പിക്കുകയോ, കാലാട്ടുകയോ, വെപ്രാളം കാണിക്കുകയോ ചെയ്യാറുണ്ട്.",
    "scales": [
      "B",
      "F"
    ]
  },
  {
    "id": 11,
    "text_self": "I make impulsive decisions on the spur of the moment.",
    "text_self_ml": "മുന്നോട്ടു വരുന്ന കാര്യങ്ങളെപ്പറ്റി ആലോചിക്കാതെ പെട്ടെന്നുള്ള തോന്നലിൽ ഞാൻ എടുത്തുചാടി തീരുമാനങ്ങളെടുക്കും.",
    "text_observer": "Makes impulsive decisions on the spur of the moment.",
    "text_observer_ml": "വരുംവരായ്കകൾ ആലോചിക്കാതെ പെട്ടെന്നുള്ള തോന്നലിൽ എടുത്തുചാടി തീരുമാനങ്ങളെടുക്കും.",
    "scales": [
      "C",
      "H"
    ]
  },
  {
    "id": 12,
    "text_self": "I feel frustrated with how little I accomplish.",
    "text_self_ml": "ഒരു ദിവസത്തെ കാര്യങ്ങളൊന്നും വിചാരിച്ച പോലെ തീർക്കാൻ പറ്റാത്തതിൽ എനിക്ക് എന്നോട് തന്നെ ദേഷ്യം തോന്നാറുണ്ട്.",
    "text_observer": "Seems frustrated with how little is accomplished.",
    "text_observer_ml": "കാര്യങ്ങളൊന്നും വിചാരിച്ച പോലെ തീർക്കാൻ പറ്റാത്തതിൽ ഇവർക്ക് അസ്വസ്ഥത തോന്നാറുണ്ട്.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 13,
    "text_self": "I fail to give close attention to details or make careless mistakes.",
    "text_self_ml": "ചെയ്യുന്ന കാര്യങ്ങളിലെ ചെറിയ കാര്യങ്ങളിൽ ശ്രദ്ധിക്കാൻ പറ്റാതെ അബദ്ധങ്ങളും തെറ്റുകളും വരാറുണ്ട്.",
    "text_observer": "Fails to give close attention to details or makes careless errors.",
    "text_observer_ml": "ചെയ്യുന്ന കാര്യങ്ങളിലെ സൂക്ഷ്മകാര്യങ്ങളിൽ ശ്രദ്ധിക്കാൻ പറ്റാതെ അശ്രദ്ധമായ തെറ്റുകൾ വരുത്താറുണ്ട്.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 14,
    "text_self": "I feel internally restless even when I am sitting still.",
    "text_self_ml": "വെറുതെ ശാന്തമായി ഇരിക്കുമ്പോഴും മനസ്സിന്റെയുള്ളിൽ വല്ലാത്തൊരു പിടപ്പും വെപ്രാളവും തോന്നും.",
    "text_observer": "Appears restless inside even when seated.",
    "text_observer_ml": "വെറുതെ ശാന്തമായി ഇരിക്കുമ്പോഴും ഉള്ളിൽ വല്ലാത്തൊരു പിടപ്പും വെപ്രാളവും ഉള്ളതായി തോന്നും.",
    "scales": [
      "B",
      "H"
    ]
  },
  {
    "id": 15,
    "text_self": "I have a short temper or low tolerance for frustration.",
    "text_self_ml": "എനിക്ക് പെട്ടെന്ന് ദേഷ്യം വരും, ചെറിയ കാര്യങ്ങളിൽ പോലും ക്ഷമിക്കാൻ പറ്റാറില്ല.",
    "text_observer": "Has a short fuse or low tolerance for frustration.",
    "text_observer_ml": "പെട്ടെന്ന് ദേഷ്യം വരികയും ചെറിയ കാര്യങ്ങളിൽ പോലും ക്ഷമയില്ലാതെ പെരുമാറുകയും ചെയ്യാറുണ്ട്.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 16,
    "text_self": "I doubt my ability to succeed at new projects.",
    "text_self_ml": "പുതിയൊരു കാര്യം ഏറ്റെടുത്താൽ അത് നന്നായി ചെയ്യാൻ എനിക്ക് കഴിയുമോ എന്ന് പേടിയും സംശയവുമാണ്.",
    "text_observer": "Doubts ability to succeed at new projects.",
    "text_observer_ml": "പുതിയൊരു കാര്യം ചെയ്യാനുള്ള സ്വന്തം കഴിവിൽ സംശയവും ഭയവും കാണിക്കാറുണ്ട്.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 17,
    "text_self": "I have difficulty sustaining attention during lectures or tasks.",
    "text_self_ml": "ആരെങ്കിലും ദീർഘമായി സംസാരിക്കുമ്പോഴോ മീറ്റിംഗിലോ ക്ലാസിലോ ഇരിക്കുമ്പോൾ കുറെ നേരം ശ്രദ്ധിച്ചിരിക്കാൻ എനിക്ക് പറ്റില്ല.",
    "text_observer": "Has difficulty sustaining focus during conversations or tasks.",
    "text_observer_ml": "സംഭാഷണങ്ങളിലോ മീറ്റിംഗുകളിലോ കൂടുതൽ നേരം ശ്രദ്ധിച്ചിരിക്കാൻ ഇവർക്ക് ബുദ്ധിമുട്ടാണ്.",
    "scales": [
      "A",
      "E",
      "H"
    ]
  },
  {
    "id": 18,
    "text_self": "I talk excessively in social situations.",
    "text_self_ml": "ആളുകൾക്കിടയിൽ ഇരിക്കുമ്പോൾ ഞാൻ നിർത്താതെ സംസാരിച്ചുകൊണ്ടേയിരിക്കും.",
    "text_observer": "Talks excessively in social situations.",
    "text_observer_ml": "ആളുകൾക്കിടയിൽ ഇരിക്കുമ്പോൾ നിർത്താതെ ഒരുപാട് സംസാരിച്ചുകൊണ്ടേയിരിക്കും.",
    "scales": [
      "B",
      "F"
    ]
  },
  {
    "id": 19,
    "text_self": "My moods change quickly and unpredictably.",
    "text_self_ml": "എന്റെ മൂഡ് പെട്ടെന്ന് പെട്ടെന്ന് മാറാറുണ്ട് (ഒരു നിമിഷം സന്തോഷം, അടുത്ത നിമിഷം ദേഷ്യമോ സങ്കടമോ).",
    "text_observer": "Moods change rapidly and unpredictably.",
    "text_observer_ml": "ഇവരുടെ മൂഡ് പെട്ടെന്ന് പെട്ടെന്ന് മാറാറുണ്ട്.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 20,
    "text_self": "I am overly critical of myself and my mistakes.",
    "text_self_ml": "എന്തെങ്കിലും ചെറിയ തെറ്റ് പറ്റിയാൽപ്പോലും എന്നെത്തന്നെ ഒരുപാട് കുറ്റപ്പെടുത്തി വിഷമിക്കാറുണ്ട്.",
    "text_observer": "Is overly self-critical.",
    "text_observer_ml": "ചെറിയ തെറ്റുകൾക്ക് പോലും സ്വയം ഒരുപാട് കുറ്റപ്പെടുത്താറുണ്ട്.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 21,
    "text_self": "I forget appointments, deadlines, or planned activities.",
    "text_self_ml": "പറഞ്ഞുറപ്പിച്ച സമയങ്ങളും, ചെയ്യേണ്ട കാര്യങ്ങളും, ഡേറ്റ് ലൈനുകളും ഞാൻ എപ്പോഴും മറന്നുപോകും.",
    "text_observer": "Forgets appointments, deadlines, or commitments.",
    "text_observer_ml": "കൂടിക്കാഴ്ചകളും, ചെയ്യേണ്ട കാര്യങ്ങളും, സമയപരിധികളും മറന്നുപോകും.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 22,
    "text_self": "It takes great effort for me to sit through long meetings.",
    "text_self_ml": "നീണ്ട മീറ്റിംഗുകളിലോ ചടങ്ങുകളിലോ ഇരിക്കേണ്ടി വന്നാൽ വലിയ കഷ്ടപ്പാടാണ്, ഇരിപ്പുറക്കില്ല.",
    "text_observer": "Struggles to sit quietly through long meetings.",
    "text_observer_ml": "നീണ്ട മീറ്റിംഗുകളിലോ പരിപാടികളിലോ അടങ്ങിയിരിക്കാൻ വലിയ ബുദ്ധിമുട്ടാണ്.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 23,
    "text_self": "I act first and think about consequences later.",
    "text_self_ml": "എന്ത് സംഭവിക്കും എന്ന് ചിന്തിക്കാതെ ആദ്യം ചെയ്യുക, എന്നിട്ട് പിന്നീട് ചിന്തിക്കുക എന്നതാണ് എന്റെ രീതി.",
    "text_observer": "Acts first and thinks about the consequences later.",
    "text_observer_ml": "കാര്യങ്ങൾ ആലോചിക്കാതെ എടുത്തുചാടി ചെയ്യുകയും പിന്നീട് വിഷമിക്കുകയും ചെയ്യാറുണ്ട്.",
    "scales": [
      "C",
      "H"
    ]
  },
  {
    "id": 24,
    "text_self": "I feel dissatisfied with who I am.",
    "text_self_ml": "എന്റെ ഈ സ്വഭാവവും ജീവിതരീതിയും കണ്ട് എനിക്ക് എന്നോട് തന്നെ വലിയ അതൃപ്തി തോന്നാറുണ്ട്.",
    "text_observer": "Seems dissatisfied with self-worth.",
    "text_observer_ml": "സ്വന്തം ജീവിതരീതിയെക്കുറിച്ചും സ്വഭാവത്തെക്കുറിച്ചും അതൃപ്തി പ്രകടിപ്പിക്കാറുണ്ട്.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 25,
    "text_self": "I have trouble organizing multi-step tasks or activities.",
    "text_self_ml": "പല ഭാഗങ്ങളുള്ള ഒരു വലിയ ജോലി വരുമ്പോൾ, ഏത് ആദ്യം ചെയ്യണം എങ്ങനെ ചെയ്യണം എന്ന് പ്ലാൻ ചെയ്യാൻ ബുദ്ധിമുട്ടാണ്.",
    "text_observer": "Has trouble organizing complex tasks or activities.",
    "text_observer_ml": "പല ഘട്ടങ്ങളുള്ള ജോലികൾ ചെയ്യുമ്പോൾ ഏത് ആദ്യം ചെയ്യണം എന്ന് പ്ലാൻ ചെയ്യാൻ ബുദ്ധിമുട്ടാറുണ്ട്.",
    "scales": [
      "A",
      "E",
      "H"
    ]
  },
  {
    "id": 26,
    "text_self": "I have difficulty engaging in leisure activities quietly.",
    "text_self_ml": "വിശ്രമിക്കുമ്പോഴോ എന്തെങ്കിലും വിനോദങ്ങളിൽ ഏർപ്പെടുമ്പോഴോ പോലും ശാന്തമായിരിക്കാൻ എനിക്ക് പറ്റാറില്ല.",
    "text_observer": "Has difficulty engaging in hobbies or leisure quietly.",
    "text_observer_ml": "വിശ്രമവേളകളിൽ പോലും ശാന്തമായി ഇരിക്കാൻ ഇവർക്ക് കഴിയാറില്ല.",
    "scales": [
      "B",
      "F"
    ]
  },
  {
    "id": 27,
    "text_self": "I intrude into other people's conversations or games.",
    "text_self_ml": "മറ്റുള്ളവർ സംസാരിക്കുമ്പോഴോ എന്തെങ്കിലും ചെയ്തുകൊണ്ടിരിക്കുമ്പോഴോ ഞാൻ അറിയാതെ ഇടയിൽ കയറി ഇടപെടാറുണ്ട്.",
    "text_observer": "Intrudes into other people's conversations or games.",
    "text_observer_ml": "മറ്റുള്ളവരുടെ കാര്യങ്ങളിലോ സംഭാഷണങ്ങളിലോ ഇടയിൽ കയറി ഇടപെടാറുണ്ട്.",
    "scales": [
      "C",
      "F"
    ]
  },
  {
    "id": 28,
    "text_self": "I procrastinate or avoid starting tasks requiring sustained effort.",
    "text_self_ml": "തലപുകഞ്ഞ് ആലോചിക്കേണ്ട ജോലികൾ ചെയ്യാനുണ്ടെങ്കിൽ അത് പരമാവധി നാളത്തേക്ക് നീട്ടിവെക്കും.",
    "text_observer": "Procrastinates or avoids tasks that require sustained effort.",
    "text_observer_ml": "ശ്രദ്ധയും ആലോചനയും ആവശ്യമുള്ള വലിയ ജോലികൾ പരമാവധി നീട്ടിവെക്കാറുണ്ട്.",
    "scales": [
      "A",
      "E",
      "H"
    ]
  },
  {
    "id": 29,
    "text_self": "I feel like I have unrealized potential because of my habits.",
    "text_self_ml": "എന്റെ ഈ അലസതയും ചിട്ടയില്ലായ്മയും കാരണം കഴിവുണ്ടായിട്ടും എനിക്ക് ജീവിതത്തിൽ മുന്നേറാൻ പറ്റുന്നില്ല എന്ന് തോന്നാറുണ്ട്.",
    "text_observer": "Expresses feeling held back by disorganized habits.",
    "text_observer_ml": "ചിട്ടയില്ലായ്മ കാരണം കഴിവുകൾ വേണ്ടവിധം ഉപയോഗിക്കാൻ കഴിയുന്നില്ലെന്ന് തോന്നാറുണ്ട്.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 30,
    "text_self": "I have trouble waiting in lines or waiting for my turn.",
    "text_self_ml": "എവിടെയെങ്കിലും ക്യൂ നിൽക്കാനോ ഊഴം കാത്തിരിക്കാനോ എനിക്ക് ഒട്ടും ക്ഷമയുണ്ടാവാറില്ല.",
    "text_observer": "Has difficulty waiting in line or waiting for turn.",
    "text_observer_ml": "ക്യൂ നിൽക്കാനോ ഊഴം കാത്തിരിക്കാനോ ഒട്ടും ക്ഷമ കാണിക്കാറില്ല.",
    "scales": [
      "C",
      "F",
      "H"
    ]
  },
  {
    "id": 31,
    "text_self": "I find myself tapping my fingers or bouncing my leg constantly.",
    "text_self_ml": "ഞാൻ അറിയാതെ തന്നെ എപ്പോഴും വിരലുകൾ തട്ടുകയോ കാലുകൾ ആട്ടിക്കൊണ്ടിരിക്കുകയോ ചെയ്യാറുണ്ട്.",
    "text_observer": "Taps fingers or bounces leg constantly.",
    "text_observer_ml": "തുടർച്ചയായി വിരലുകൾ തട്ടുകയോ കാലുകൾ ആട്ടുകയോ ചെയ്തുകൊണ്ടിരിക്കും.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 32,
    "text_self": "I struggle to remember what I just read or heard.",
    "text_self_ml": "ഇപ്പോൾ വായിച്ചു നിർത്തിയതോ കേട്ടതോ ആയ കാര്യങ്ങൾ പെട്ടെന്ന് മനസ്സിൽ നിന്ന് മാഞ്ഞുപോകാറുണ്ട്.",
    "text_observer": "Struggles to retain information just read or heard.",
    "text_observer_ml": "ഇപ്പോൾ കേട്ടതോ വായിച്ചതോ ആയ കാര്യങ്ങൾ പെട്ടെന്ന് മറന്നുപോകും.",
    "scales": [
      "A"
    ]
  },
  {
    "id": 33,
    "text_self": "I say things I later regret when annoyed or excited.",
    "text_self_ml": "ദേഷ്യമോ വാശിയോ വരുമ്പോൾ പിന്നീട് സങ്കടം തോന്നുന്ന കാര്യങ്ങൾ ഞാൻ പെട്ടെന്ന് പറഞ്ഞുപോകാറുണ്ട്.",
    "text_observer": "Says things later regretted when emotionally stimulated.",
    "text_observer_ml": "ദേഷ്യം വരുമ്പോൾ പിന്നീട് വിഷമിക്കേണ്ടി വരുന്ന വാക്കുകൾ എടുത്തുചാടി പറയും.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 34,
    "text_self": "I feel insecure about my intellect or competence.",
    "text_self_ml": "മറ്റുള്ളവരെപ്പോലെ എനിക്ക് ബുദ്ധിയോ കാര്യപ്രാപ്തിയോ ഇല്ലെന്നൊരു തോന്നൽ എപ്പോഴും എന്നെ അലട്ടാറുണ്ട്.",
    "text_observer": "Shows insecurity about competence.",
    "text_observer_ml": "മറ്റുള്ളവരെ അപേക്ഷിച്ച് തനിക്ക് ബുദ്ധിയോ കാര്യപ്രാപ്തിയോ കുറവാണെന്ന് തോന്നി വിഷമിക്കാറുണ്ട്.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 35,
    "text_self": "I leave projects or chores half-finished.",
    "text_self_ml": "തുടങ്ങിയ പണികളോ വീട്ടുജോലികളോ പൂർത്തിയാക്കാതെ പകുതിവഴിയിൽ ഇട്ടിട്ടു പോകാറുണ്ട്.",
    "text_observer": "Leaves projects or tasks incomplete.",
    "text_observer_ml": "തുടങ്ങിയ ജോലികൾ പൂർത്തിയാക്കാതെ പകുതിവഴിയിൽ ഇട്ടിട്ടു പോകും.",
    "scales": [
      "A",
      "E",
      "H"
    ]
  },
  {
    "id": 36,
    "text_self": "I can't find my keys, wallet, phone, or essential papers.",
    "text_self_ml": "താക്കോൽ, ഫോൺ, പേഴ്സ്, ആവശ്യമായ രേഖകൾ എന്നിവ എവിടെ വെച്ചെന്ന് എനിക്ക് ഒട്ടും ഓർമ്മ കിട്ടാറില്ല.",
    "text_observer": "Frequently misplaces essential items like keys, phone, wallet.",
    "text_observer_ml": "താക്കോൽ, ഫോൺ, പേഴ്സ് തുടങ്ങിയ സാധനങ്ങൾ എപ്പോഴും എവിടെയെങ്കിലും വെച്ച് മറക്കും.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 37,
    "text_self": "I feel uncomfortable sitting still for prolonged periods.",
    "text_self_ml": "ഒരു സ്ഥലത്ത് തന്നെ കുറെ നേരം ഇരിക്കേണ്ടി വന്നാൽ എനിക്ക് വല്ലാത്ത അസ്വസ്ഥതയും വീർപ്പുമുട്ടലും അനുഭവപ്പെടും.",
    "text_observer": "Becomes noticeably restless when seated for extended periods.",
    "text_observer_ml": "കുറെ നേരം ഒരിടത്ത് തന്നെ അടങ്ങിയിരിക്കുമ്പോൾ പ്രകടമായ അസ്വസ്ഥത കാണിക്കും.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 38,
    "text_self": "I react aggressively or defensively when criticized.",
    "text_self_ml": "ആരെങ്കിലും എന്തെങ്കിലും കുറ്റം പറഞ്ഞാൽ എനിക്ക് പെട്ടെന്ന് ദേഷ്യം വരികയോ എതിർത്തു സംസാരിക്കുകയോ ചെയ്യും.",
    "text_observer": "Reacts with irritability or defense when criticized.",
    "text_observer_ml": "ചെറിയൊരു വിമർശനം കേൾക്കുമ്പോഴേക്കും പെട്ടെന്ന് ദേഷ്യപ്പെടുകയോ തർക്കിക്കുകയോ ചെയ്യും.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 39,
    "text_self": "I compare myself unfavorably to friends and coworkers.",
    "text_self_ml": "സുഹൃത്തുക്കളും ഒപ്പം ജോലി ചെയ്യുന്നവരുമായി താരതമ്യം ചെയ്ത് ഞാൻ എന്നെത്തന്നെ താഴ്ത്തിക്കാണാറുണ്ട്.",
    "text_observer": "Compares oneself unfavorably to others.",
    "text_observer_ml": "മറ്റുള്ളവരുമായി താരതമ്യം ചെയ്ത് സ്വയം താഴ്ത്തി സംസാരിക്കാറുണ്ട്.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 40,
    "text_self": "I zone out or drift off when someone speaks directly to me.",
    "text_self_ml": "ആരെങ്കിലും മുഖത്തുനോക്കി സംസാരിക്കുമ്പോൾ പോലും എന്റെ മനസ്സ് വേറെ എവിടെയെങ്കിലും കറങ്ങി നടക്കുകയായിരിക്കും.",
    "text_observer": "Seems not to listen when spoken to directly.",
    "text_observer_ml": "നേരിട്ട് സംസാരിക്കുമ്പോൾ പോലും ഇവരുടെ ശ്രദ്ധ എങ്ങോട്ടോ പോയിരിക്കുന്നതായി തോന്നും.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 41,
    "text_self": "I am impatient when things move slower than I prefer.",
    "text_self_ml": "കാര്യങ്ങൾ വിചാരിച്ച വേഗത്തിൽ നടന്നില്ലെങ്കിൽ എനിക്ക് ഭയങ്കര അക്ഷമയും ദേഷ്യവും തോന്നും.",
    "text_observer": "Shows extreme impatience when things move slowly.",
    "text_observer_ml": "കാര്യങ്ങൾ വിചാരിച്ച വേഗതയിൽ നടന്നില്ലെങ്കിൽ കടുത്ത അക്ഷമയും ദേഷ്യവും കാണിക്കും.",
    "scales": [
      "C",
      "H"
    ]
  },
  {
    "id": 42,
    "text_self": "I get thrown off track by background sounds or sights.",
    "text_self_ml": "എന്തെങ്കിലും ചെയ്തുകൊണ്ടിരിക്കുമ്പോൾ ചുറ്റുമുള്ള ചെറിയ ശബ്ദമോ അനക്കമോ ശ്രദ്ധയെ എളുപ്പം തെറ്റിക്കും.",
    "text_observer": "Easily sidetracked by trivial background events.",
    "text_observer_ml": "ചെറിയ ശബ്ദമോ ചലനമോ ഉണ്ടായാൽപ്പോലും ചെയ്യുന്ന കാര്യത്തിൽ നിന്നുള്ള ശ്രദ്ധ പെട്ടെന്ന് മാറും.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 43,
    "text_self": "I feel an urgent drive to get up and walk around.",
    "text_self_ml": "ഒരിടത്ത് ഇരിക്കുമ്പോൾ എഴുന്നേറ്റ് അങ്ങോട്ടുമിങ്ങോട്ടും നടക്കാൻ തോന്നും, ഇരിക്കാൻ വയ്യാതാകും.",
    "text_observer": "Frequently gets up and wanders around during sedentary tasks.",
    "text_observer_ml": "ഇരിക്കുമ്പോൾ എഴുന്നേറ്റ് അങ്ങോട്ടുമിങ്ങോട്ടും നടക്കാൻ തിടുക്കം കാണിക്കും.",
    "scales": [
      "B",
      "F"
    ]
  },
  {
    "id": 44,
    "text_self": "I feel inadequate in managing basic adult responsibilities.",
    "text_self_ml": "പ്രായത്തിനൊത്ത ദൈനംദിന ഉത്തരവാദിത്തങ്ങൾ പോലും നേരെ ചൊവ്വെ ചെയ്യാൻ എനിക്ക് കഴിയുന്നില്ലെന്ന് തോന്നും.",
    "text_observer": "Expresses feelings of inadequacy in managing daily life.",
    "text_observer_ml": "ദൈനംദിന ഉത്തരവാദിത്തങ്ങൾ കാര്യക്ഷമമായി ചെയ്യാൻ തനിക്ക് കഴിയുന്നില്ലെന്ന് തോന്നി വിഷമിക്കാറുണ്ട്.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 45,
    "text_self": "I make careless errors in calculations, forms, or messages.",
    "text_self_ml": "ഫോം പൂരിപ്പിക്കുമ്പോഴോ കണക്കിലോ മെസ്സേജ് അയക്കുമ്പോഴോ ശ്രദ്ധക്കുറവ് കൊണ്ട് അബദ്ധങ്ങൾ വരാറുണ്ട്.",
    "text_observer": "Makes careless errors in routine paperwork or tasks.",
    "text_observer_ml": "ഫോം പൂരിപ്പിക്കുമ്പോഴോ കണക്കിലോ അശ്രദ്ധമായ തെറ്റുകൾ വരുത്താറുണ്ട്.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 46,
    "text_self": "I spend money impulsively without planning ahead.",
    "text_self_ml": "ആലോചനയില്ലാതെ കയ്യിലുള്ള കാശ് ആവശ്യമില്ലാത്ത കാര്യങ്ങൾക്ക് ഞാൻ എടുത്തുചാടി ചിലവാക്കും.",
    "text_observer": "Spends money impulsively without budget consideration.",
    "text_observer_ml": "ആലോചനയില്ലാതെ പെട്ടെന്നുള്ള തോന്നലിൽ പണം അനാവശ്യമായി ചിലവാക്കും.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 47,
    "text_self": "I have trouble relaxing my mind at the end of the day.",
    "text_self_ml": "രാത്രി കിടക്കുമ്പോൾ പോലും മനസ്സിനെ അടക്കി നിർത്തി വിശ്രമിക്കാൻ എനിക്ക് പറ്റാറില്ല, തലയിൽ ചിന്തകൾ ഓടിക്കൊണ്ടിരിക്കും.",
    "text_observer": "Has trouble unwinding or calming mind down.",
    "text_observer_ml": "ദിവസാവസാനം മനസ്സ് ശാന്തമാക്കി വിശ്രമിക്കാൻ ഇവർക്ക് ബുദ്ധിമുട്ടാണ്.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 48,
    "text_self": "I avoid events where I have to sit still and listen.",
    "text_self_ml": "വെറുതെ മിണ്ടാതെ ഇരുന്ന് കേൾക്കേണ്ടി വരുന്ന ക്ലാസുകളോ പ്രസംഗങ്ങളോ മീറ്റിംഗുകളോ ഞാൻ പരമാവധി ഒഴിവാക്കും.",
    "text_observer": "Avoids settings requiring quiet, passive listening.",
    "text_observer_ml": "ശാന്തമായി ഇരുന്ന് കേൾക്കേണ്ടി വരുന്ന സദസ്സുകളോ യോഗങ്ങളോ ഒഴിവാക്കാൻ നോക്കും.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 49,
    "text_self": "I struggle to estimate the time required for activities.",
    "text_self_ml": "ഒരു ജോലി ചെയ്തു തീർക്കാൻ എത്ര സമയം എടുക്കും എന്ന് കണക്കുകൂട്ടാൻ എനിക്ക് എപ്പോഴും പിഴയ്ക്കാറുണ്ട്.",
    "text_observer": "Poorly estimates time needed to travel or finish tasks.",
    "text_observer_ml": "ഒരു ജോലി തീർക്കാൻ എത്ര സമയം വേണമെന്ന് കണക്കുകൂട്ടാൻ ഇവർക്ക് ബുദ്ധിമുട്ടാണ്.",
    "scales": [
      "A",
      "H"
    ]
  },
  {
    "id": 50,
    "text_self": "I become irritable over minor schedule changes.",
    "text_self_ml": "പ്ലാൻ ചെയ്ത കാര്യങ്ങളിൽ ചെറിയൊരു മാറ്റം വന്നാൽപ്പോലും എനിക്ക് പെട്ടെന്ന് അസ്വസ്ഥതയോ ദേഷ്യമോ വരും.",
    "text_observer": "Becomes agitated over minor disruptions.",
    "text_observer_ml": "പ്ലാൻ ചെയ്ത കാര്യങ്ങളിൽ ചെറിയൊരു മാറ്റം വന്നാൽപ്പോലും പെട്ടെന്ന് അസ്വസ്ഥരാകും.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 51,
    "text_self": "I feel unfulfilled despite working hard.",
    "text_self_ml": "എത്ര കഷ്ടപ്പെട്ടു ജോലി ചെയ്താലും ജീവിതത്തിൽ ഒരു സംതൃപ്തിയോ പൂർണ്ണതയോ തോന്നാറില്ല.",
    "text_observer": "Feels unfulfilled despite putting in effort.",
    "text_observer_ml": "എത്ര പരിശ്രമിച്ചാലും ജീവിതത്തിൽ ഒരു തൃപ്തിയോ പൂർണ്ണതയോ തോന്നുന്നില്ലെന്ന് പറയും.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 52,
    "text_self": "I feel an inner turmoil or physical agitation when still.",
    "text_self_ml": "ശരീരം അനങ്ങാതെ ഇരിക്കുമ്പോൾ ഉള്ളിൽ വല്ലാത്തൊരു വെപ്രാളവും അസ്വസ്ഥതയും തോന്നും.",
    "text_observer": "Shows signs of physical or inner agitation when stationary.",
    "text_observer_ml": "ശരീരം അനങ്ങാതെ ഇരിക്കുമ്പോൾ ഉള്ളിൽ വലിയ വെപ്രാളം കാണിക്കാറുണ്ട്.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 53,
    "text_self": "I lose track of what I am saying in the middle of a sentence.",
    "text_self_ml": "സംസാരിച്ചുകൊണ്ടിരിക്കുമ്പോൾ തന്നെ ഞാൻ എന്താണ് പറഞ്ഞു വന്നതെന്ന് പെട്ടെന്ന് മറന്നുപോകാറുണ്ട്.",
    "text_observer": "Loses train of thought mid-sentence.",
    "text_observer_ml": "സംസാരിച്ചുകൊണ്ടിരിക്കുമ്പോൾ എന്തിനെപ്പറ്റിയാണ് പറഞ്ഞു വന്നതെന്ന് പെട്ടെന്ന് മറന്നുപോകും.",
    "scales": [
      "A"
    ]
  },
  {
    "id": 54,
    "text_self": "I cut in line or rush ahead of others in traffic or queues.",
    "text_self_ml": "വണ്ടിയോടിക്കുമ്പോഴോ ക്യൂവിലോ മറ്റുള്ളവരെ പെട്ടെന്ന് മറികടന്നു മുന്നിൽ കയറാൻ ഞാൻ തിടുക്കം കൂട്ടാറുണ്ട്.",
    "text_observer": "Rushes ahead impatiently or cuts in queues.",
    "text_observer_ml": "ക്യൂവിലോ റോഡിലോ മറ്റുള്ളവരെ മറികടന്ന് പെട്ടെന്ന് മുന്നിൽ കയറാൻ വെപ്രാളം കൂട്ടും.",
    "scales": [
      "C",
      "F"
    ]
  },
  {
    "id": 55,
    "text_self": "I feel helpless about organizing my workspace or home.",
    "text_self_ml": "മുറിയോ മേശയോ സാധനങ്ങളോ വൃത്തിയായും അടുക്കും ചിട്ടയോടും സൂക്ഷിക്കാൻ എനിക്ക് എത്ര നോക്കിയാലും പറ്റാറില്ല.",
    "text_observer": "Feels overwhelmed by clutter or organization.",
    "text_observer_ml": "സാധനങ്ങളും മുറിയും അടുക്കും ചിട്ടയോടും സൂക്ഷിക്കാൻ ഇവർക്ക് ഒട്ടും സാധിക്കാറില്ല.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 56,
    "text_self": "I switch rapidly between multiple unfinished tasks.",
    "text_self_ml": "ഒരു ജോലി തീരുന്നതിന് മുൻപേ അടുത്തതിലേക്ക് മാറും, അങ്ങനെ ഒടുവിൽ ഒന്നും തീരില്ല.",
    "text_observer": "Jumps between several activities without finishing any.",
    "text_observer_ml": "ഒരു ജോലി തീർക്കുന്നതിന് മുൻപേ മറ്റൊന്നിലേക്ക് മാറും, ഒടുവിൽ ഒന്നും തീരില്ല.",
    "scales": [
      "A",
      "H"
    ]
  },
  {
    "id": 57,
    "text_self": "I feel overwhelmed by quiet, monotonous environments.",
    "text_self_ml": "ഒരു മാറ്റവുമില്ലാത്ത നിശബ്ദവും വിരസവുമായ അന്തരീക്ഷത്തിൽ ഇരിക്കുമ്പോൾ എനിക്ക് വല്ലാത്ത വീർപ്പുമുട്ടൽ തോന്നും.",
    "text_observer": "Gets agitated in quiet, monotonous environments.",
    "text_observer_ml": "വിരസവും നിശബ്ദവുമായ അന്തരീക്ഷത്തിൽ ഇരിക്കുമ്പോൾ ഇവർക്ക് വല്ലാത്ത വീർപ്പുമുട്ടൽ തോന്നും.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 58,
    "text_self": "I drive faster or take unnecessary risks on the road.",
    "text_self_ml": "വണ്ടി ഓടിക്കുമ്പോൾ അമിതവേഗത കാണിക്കുകയോ അനാവശ്യ റിസ്ക് എടുക്കുകയോ ചെയ്യാറുണ്ട്.",
    "text_observer": "Drives aggressively or takes impulsive risks.",
    "text_observer_ml": "വാഹനമോടിക്കുമ്പോൾ അമിതവേഗത കാണിക്കുകയോ അനാവശ്യ റിസ്കുകൾ എടുക്കുകയോ ചെയ്യും.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 59,
    "text_self": "I have messy or chaotic filing, storage, or workspaces.",
    "text_self_ml": "എന്റെ സാധനങ്ങളും ഫയലുകളും ജോലിസ്ഥലവും എപ്പോഴും ചിതറി അലങ്കോലമായി കിടക്കും.",
    "text_observer": "Maintains disorganized or chaotic workspaces.",
    "text_observer_ml": "മേശയും ഫയലുകളും സാധനങ്ങളും എപ്പോഴും ചിതറി അലങ്കോലമായി കിടക്കും.",
    "scales": [
      "A",
      "E"
    ]
  },
  {
    "id": 60,
    "text_self": "I feel like I let people down because of my forgetfulness.",
    "text_self_ml": "എന്റെ ഈ മറവിയും ശ്രദ്ധക്കുറവും കാരണം മറ്റുള്ളവരെ ഞാൻ നിരാശപ്പെടുത്തുന്നു എന്ന് തോന്നി വിഷമിക്കാറുണ്ട്.",
    "text_observer": "Worries about disappointing others due to disorganization.",
    "text_observer_ml": "മറവി കാരണം മറ്റുള്ളവരെ നിരാശപ്പെടുത്തുന്നുണ്ടോ എന്ന് ഓർത്ത് വിഷമിക്കാറുണ്ട്.",
    "scales": [
      "D"
    ]
  },
  {
    "id": 61,
    "text_self": "I talk so much that others cannot get a word in.",
    "text_self_ml": "മറ്റുള്ളവർക്ക് സംസാരിക്കാൻ ഒരവസരവും കൊടുക്കാതെ ഞാൻ മാത്രം ഇടവിടാതെ സംസാരിച്ചു കൊണ്ടിരിക്കും.",
    "text_observer": "Dominates conversations without allowing others to speak.",
    "text_observer_ml": "മറ്റുള്ളവർക്ക് ഒരക്ഷരം പറയാൻ അവസരം കൊടുക്കാതെ ഇവർ മാത്രം തുടർച്ചയായി സംസാരിക്കും.",
    "scales": [
      "B",
      "F"
    ]
  },
  {
    "id": 62,
    "text_self": "I make hasty purchases I promptly regret.",
    "text_self_ml": "ആവശ്യമുണ്ടോ എന്ന് നോക്കാതെ പെട്ടെന്നുള്ള ആവേശത്തിൽ സാധനങ്ങൾ വാങ്ങിക്കുകയും പിന്നീട് വിഷമിക്കുകയും ചെയ്യാറുണ്ട്.",
    "text_observer": "Makes hasty purchases that are later regretted.",
    "text_observer_ml": "ആലോചനയില്ലാതെ സാധനങ്ങൾ വാങ്ങിക്കൂട്ടുകയും പിന്നീട് അതിൽ പശ്ചാത്തപിക്കുകയും ചെയ്യും.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 63,
    "text_self": "I misjudge priorities, focusing on trivial tasks first.",
    "text_self_ml": "പ്രധാനപ്പെട്ട കാര്യങ്ങൾ ചെയ്യാതെ മാറ്റിവെച്ച്, നിസ്സാര കാര്യങ്ങളിൽ സമയം കളയാറുണ്ട്.",
    "text_observer": "Focuses on trivial details while ignoring urgent priorities.",
    "text_observer_ml": "പ്രധാനപ്പെട്ട കാര്യങ്ങൾ മാറ്റിവെച്ച് നിസ്സാര കാര്യങ്ങളിൽ സമയം കളയും.",
    "scales": [
      "A",
      "H"
    ]
  },
  {
    "id": 64,
    "text_self": "I have a habit of continuously shifting positions while seated.",
    "text_self_ml": "ഇരിക്കുമ്പോൾ ഒരിടത്ത് ഇരിക്കാതെ നിരന്തരം ഇരിപ്പ് മാറ്റിക്കൊണ്ടിരിക്കാറുണ്ട്.",
    "text_observer": "Continuously shifts positions while seated.",
    "text_observer_ml": "ഇരിക്കുമ്പോൾ നിരന്തരം ഇരിപ്പിടവും സ്ഥാനവും മാറ്റിക്കൊണ്ടിരിക്കും.",
    "scales": [
      "B"
    ]
  },
  {
    "id": 65,
    "text_self": "I am prone to sudden emotional outbursts.",
    "text_self_ml": "പെട്ടെന്ന് നിയന്ത്രണം വിട്ട് ദേഷ്യപ്പെടുകയോ ഒച്ചവെക്കുകയോ ചെയ്യാറുണ്ട്.",
    "text_observer": "Prone to sudden emotional outbursts.",
    "text_observer_ml": "പെട്ടെന്ന് നിയന്ത്രണം വിട്ട് ദേഷ്യപ്പെടുകയോ ശബ്ദമുയർത്തുകയോ ചെയ്യും.",
    "scales": [
      "C"
    ]
  },
  {
    "id": 66,
    "text_self": "I feel hopeless about ever becoming well-organized.",
    "text_self_ml": "എന്റെ ജീവിതവും കാര്യങ്ങളും എന്നെങ്കിലും അടുക്കും ചിട്ടയുമുള്ളതാക്കാൻ എനിക്ക് കഴിയുമോ എന്നതിൽ വലിയ നിരാശ തോന്നാറുണ്ട്.",
    "text_observer": "Expresses hopelessness regarding personal organization.",
    "text_observer_ml": "കാര്യങ്ങൾ എപ്പോഴെങ്കിലും അടുക്കും ചിട്ടയുമുള്ളതാക്കാൻ തനിക്ക് കഴിയുമോ എന്നതിൽ നിരാശ പ്രകടിപ്പിക്കാറുണ്ട്.",
    "scales": [
      "D"
    ]
  }
];

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

