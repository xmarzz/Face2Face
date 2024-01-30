"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          homePara1:
          "your go-to destination for grooming and style in Palakkad, Kerala! Nestled on the scenic Pathiripala to Kongad road, our barbershop is not just a place for a haircut, it's an experience.",
          homePara2:
          "At Face 2 Face, we pride ourselves on delivering top-notch grooming services tailored to your unique style. Our skilled barbers are dedicated to ensuring you leave our shop looking and feeling your absolute best.",
          homePara3:
            "Discover a range of services designed to cater to your grooming needs. From classic haircuts to modern styles, beard trims to hot towel shaves, our expert barbers are here to elevate your grooming routine.",
          whyChooseFace2Face: "why Choose Face 2 Face",
          whyChooseUsPara1:
          "Experienced Barbers: Our team of experienced barbers brings years of expertise to the styling chair, ensuring precision and attention to detail with every service.",
          whyChooseUsPara2:
          "Warm and Friendly Atmosphere: Step into a welcoming environment where you can relax and enjoy the grooming process. We believe in creating a friendly atmosphere for our customers.",
          whyChooseUsPara3:
          "Modern and Traditional Styles: Whether you prefer a contemporary haircut or a timeless, classic look, we offer a variety of styles to suit your taste.",
          whyChooseUsPara4:
          "Hygiene and Cleanliness: Your well-being is our priority. We maintain high standards of hygiene and cleanliness throughout our barbershop.",
          tipsHeader1: " WHY PERSONAL GROOMING IS IMPORTANT?",
          tipsHeader2: "MAKES YOU MORE ATTRACTIVE",
          tipsHeader3: "BEING WELL GROOMED IS A HUGE CONFIDENCE BOOSTER",
          tipsHeader4: "YOUR FRIENDS AND PEERS WILL RESPECT YOU MORE",
          tipsHeader5:
            "GROOMING IS ONE OF THE EASIEST WAYS TO IMPROVE YOURSELF WITHOUT DOING MUCH WORK",
          tipsHeader6:
            "TAKING CARE OF YOURSELF IS THE ULTIMATE FORM OF SELF-DISCIPLINE",
          tipsPara1:
            "If you ask young men about grooming, most will have to agree that it should be part of everyday life. So what’s grooming? It’s basically taking a bath, shaving your facial hair, applying deodorant, taking a haircut, and more! It’s a plethora of habits and actions that aim to give you a neat and tidy appearance. One of our goals is to educate the gents on why grooming is important. Here are some reasons as to why it’s essential and integral for gents like you.",
          tipsPara2:
            "Clean-looking people have one thing in common - they radiate confidence and good vibes. Being well-groomed helps you navigate your way in social gatherings and lets you have an easier time making friends. Being confident is the foundation of a successful gent, so if you want to be confident, taking hygiene seriously is a good first step.",
          tipsPara3:
            "Did you know that cleanliness is usually associated with being smart? A well-groomed young man always gives off a good impression to his classmates, friends, and those whom he’s meeting for the first time. A true GATSBY gent prides himself on his appearance, something that other people will surely notice.",
          tipsPara4:
            "Prioritizing personal grooming earns the respect of your friends and peers. A well-groomed appearance reflects self-discipline and consideration, signaling a level of commitment that others find admirable. By presenting yourself in the best possible light, you demonstrate a sense of self-respect that resonates with those around you. This commitment to grooming not only enhances your own confidence but also fosters a positive impression, leading to increased respect from your social circle. Ultimately, maintaining a well-groomed image is a simple yet powerful way to earn the respect of those you interact with.",
          tipsPara5:
            "Personal grooming is the cheapest and most effective way to improve your overall style and appearance without having to spend so much time and money. Taking a shower, using a shaver, and using affordable, yet essential grooming and hairstyle products for men such as GATSBY are all you need to be on top of your grooming routine.",
            tipsPara6:
            "Personal hygiene is not much work, but doing it on a daily basis is the real challenge for many. Taking care of yourself every day will not only keep you smelling fresh and clean but also improve your self-discipline and, more importantly, form good habits. As we’ve said before, grooming doesn’t have to be expensive! That’s why GATSBY is your buddy to help you achieve your grooming goals without having to exhaust your wallet. Visit our website here to check all our products.",
          },
        },
        ml: {
          translation: {
          homePara1:
            "കേരളത്തിലെ പാലക്കാടാണ് നിങ്ങളുടെ ചമയത്തിനും സ്റ്റൈലിനുമുള്ള നിങ്ങളുടെ ലക്ഷ്യസ്ഥാനം! പ്രകൃതിരമണീയമായ പത്തിരിപ്പാല മുതൽ കോങ്ങാട് വരെയുള്ള റോഡിൽ സ്ഥിതി ചെയ്യുന്ന ഞങ്ങളുടെ ബാർബർഷോപ്പ് മുടിവെട്ടാനുള്ള സ്ഥലമല്ല, അതൊരു അനുഭവമാണ്.",
          homePara2:
            "ഫേസ് 2 ഫേസിൽ, നിങ്ങളുടെ തനതായ ശൈലിക്ക് അനുസൃതമായി മികച്ച ഗ്രൂമിംഗ് സേവനങ്ങൾ നൽകുന്നതിൽ ഞങ്ങൾ അഭിമാനിക്കുന്നു. ഞങ്ങളുടെ വിദഗ്ദ്ധരായ ബാർബർമാർ ഞങ്ങളുടെ ഷോപ്പ് ഉപേക്ഷിക്കുന്നത് ഉറപ്പാക്കാൻ പ്രതിജ്ഞാബദ്ധരാണ്.",
          homePara3:
            "നിങ്ങളുടെ പരിചരണ ആവശ്യങ്ങൾ നിറവേറ്റുന്നതിനായി രൂപകൽപ്പന ചെയ്‌തിരിക്കുന്ന സേവനങ്ങളുടെ ഒരു ശ്രേണി കണ്ടെത്തുക. ക്ലാസിക് ഹെയർകട്ടുകൾ മുതൽ ആധുനിക ശൈലികൾ വരെ, താടി ട്രിം മുതൽ ചൂടുള്ള ടവൽ ഷേവ് വരെ, ഞങ്ങളുടെ വിദഗ്ധരായ ബാർബർമാർ നിങ്ങളുടെ ചമയം വർദ്ധിപ്പിക്കാൻ ഇവിടെയുണ്ട്.",
          whyChooseUsPara1:
            "പരിചയസമ്പന്നരായ ബാർബർമാർ: ഞങ്ങളുടെ പരിചയസമ്പന്നരായ ബാർബർമാരുടെ ടീം സ്‌റ്റൈലിംഗ് ചെയറിലേക്ക് വർഷങ്ങളുടെ വൈദഗ്ദ്ധ്യം കൊണ്ടുവരുന്നു, എല്ലാ സേവനങ്ങളിലും സൂക്ഷ്മതയും ശ്രദ്ധയും ഉറപ്പാക്കുന്നു.",
          whyChooseUsPara2:
            "ഊഷ്മളവും സൗഹൃദപരവുമായ അന്തരീക്ഷം: നിങ്ങൾക്ക് വിശ്രമിക്കാനും ചമയം ആസ്വദിക്കാനും കഴിയുന്ന സ്വാഗതാർഹമായ അന്തരീക്ഷത്തിലേക്ക് ചുവടുവെക്കുക. ഞങ്ങളുടെ ഉപഭോക്താക്കൾക്ക് സൗഹൃദ അന്തരീക്ഷം സൃഷ്ടിക്കുന്നതിൽ ഞങ്ങൾ വിശ്വസിക്കുന്നു.",
          whyChooseUsPara3:
            "ആധുനികവും പരമ്പരാഗതവുമായ ശൈലികൾ: നിങ്ങൾ ഒരു സമകാലിക ഹെയർകട്ട് അല്ലെങ്കിൽ കാലാതീതമായ, ക്ലാസിക് ലുക്ക് തിരഞ്ഞെടുക്കുകയാണെങ്കിൽ, നിങ്ങളുടെ അഭിരുചിക്കനുസരിച്ച് ഞങ്ങൾ വൈവിധ്യമാർന്ന ശൈലികൾ വാഗ്ദാനം ചെയ്യുന്നു.",
          whyChooseUsPara4:
            "ശുചിത്വവും ശുചിത്വവും: നിങ്ങളുടെ ക്ഷേമമാണ് ഞങ്ങളുടെ മുൻഗണന. ഞങ്ങളുടെ ബാർബർഷോപ്പിലുടനീളം ഞങ്ങൾ ശുചിത്വത്തിൻ്റെയും വൃത്തിയുടെയും ഉയർന്ന നിലവാരം പുലർത്തുന്നു.",
            tipsHeader1: "വ്യക്തിഗത ചമയം പ്രധാനമായിരിക്കുന്നത് എന്തുകൊണ്ട്?",
            tipsHeader2: "നിങ്ങളെ കൂടുതൽ ആകർഷകമാക്കുന്നു            ",
            tipsHeader3: "നന്നായി ഭംഗിയുള്ളവരായിരിക്കുക എന്നത് ഒരു വലിയ ആത്മവിശ്വാസം വർദ്ധിപ്പിക്കുന്നതാണ്",
            tipsHeader4: "നിങ്ങളുടെ സുഹൃത്തുക്കളും സമപ്രായക്കാരും നിങ്ങളെ കൂടുതൽ ബഹുമാനിക്കും",
            tipsHeader5:
              "വളരെയധികം ജോലികൾ ചെയ്യാതെ തന്നെ സ്വയം മെച്ചപ്പെടുത്താനുള്ള എളുപ്പവഴികളിൽ ഒന്നാണ് ചമയം",
            tipsHeader6:
              "സ്വയം പരിപാലിക്കുക എന്നത് സ്വയം അച്ചടക്കത്തിൻ്റെ പരമമായ രൂപമാണ്",
          tipsPara1:
            "യുവാക്കളോട് ചമയത്തെക്കുറിച്ച് ചോദിച്ചാൽ, അത് ദൈനംദിന ജീവിതത്തിൻ്റെ ഭാഗമാകണമെന്ന് മിക്കവരും സമ്മതിക്കേണ്ടിവരും. അപ്പോൾ എന്താണ് ചമയം? ഇത് അടിസ്ഥാനപരമായി കുളിക്കുക, നിങ്ങളുടെ മുഖത്തെ രോമങ്ങൾ ഷേവ് ചെയ്യുക, ഡിയോഡറൻ്റ് പ്രയോഗിക്കുക, ഹെയർകട്ട് എടുക്കുക എന്നിവയും മറ്റും! നിങ്ങൾക്ക് വൃത്തിയും വെടിപ്പുമുള്ള രൂപം നൽകാൻ ലക്ഷ്യമിടുന്ന ശീലങ്ങളുടെയും പ്രവർത്തനങ്ങളുടെയും ഒരു ധാരാളിത്തമാണിത്. ചമയം പ്രധാനമായിരിക്കുന്നത് എന്തുകൊണ്ടാണെന്ന് ജെൻ്റുമാരെ ബോധവൽക്കരിക്കുക എന്നതാണ് ഞങ്ങളുടെ ലക്ഷ്യങ്ങളിലൊന്ന്. നിങ്ങളെപ്പോലുള്ള മാന്യന്മാർക്ക് ഇത് അനിവാര്യവും അവിഭാജ്യവുമായതിൻ്റെ ചില കാരണങ്ങൾ ഇതാ.",
          tipsPara2:
            "വൃത്തിയായി കാണപ്പെടുന്ന ആളുകൾക്ക് പൊതുവായ ഒരു കാര്യമുണ്ട് - അവർ ആത്മവിശ്വാസവും നല്ല സ്പന്ദനങ്ങളും പ്രസരിപ്പിക്കുന്നു. നന്നായി പക്വത പ്രാപിക്കുന്നത് സാമൂഹിക ഒത്തുചേരലുകളിൽ നിങ്ങളുടെ വഴി നാവിഗേറ്റ് ചെയ്യാൻ നിങ്ങളെ സഹായിക്കുകയും സുഹൃത്തുക്കളെ ഉണ്ടാക്കാൻ എളുപ്പമുള്ള സമയം നിങ്ങളെ അനുവദിക്കുകയും ചെയ്യുന്നു. ആത്മവിശ്വാസമുള്ളവരായിരിക്കുക എന്നത് ഒരു വിജയകരമായ ജനത്തിൻ്റെ അടിത്തറയാണ്, അതിനാൽ നിങ്ങൾക്ക് ആത്മവിശ്വാസം വേണമെങ്കിൽ, ശുചിത്വം ഗൗരവമായി എടുക്കുന്നത് നല്ല ആദ്യപടിയാണ്.",
          tipsPara3:
            "ശുചിത്വം സാധാരണയായി മിടുക്കനുമായി ബന്ധപ്പെട്ടിരിക്കുന്നുവെന്ന് നിങ്ങൾക്കറിയാമോ? നന്നായി പക്വതയുള്ള ഒരു ചെറുപ്പക്കാരൻ എപ്പോഴും തൻ്റെ സഹപാഠികൾക്കും സുഹൃത്തുക്കൾക്കും അവൻ ആദ്യമായി കണ്ടുമുട്ടുന്നവർക്കും നല്ല മതിപ്പ് നൽകുന്നു. ഒരു യഥാർത്ഥ ഗാറ്റ്സ്ബി ജെൻ്റ് തൻ്റെ രൂപഭാവത്തിൽ സ്വയം അഭിമാനിക്കുന്നു, മറ്റുള്ളവർ തീർച്ചയായും ശ്രദ്ധിക്കും.",
          tipsPara4:
            "വ്യക്തിഗത ചമയത്തിന് മുൻഗണന നൽകുന്നത് നിങ്ങളുടെ സുഹൃത്തുക്കളുടെയും സമപ്രായക്കാരുടെയും ബഹുമാനം നേടുന്നു. നന്നായി പക്വതയാർന്ന രൂപം സ്വയം അച്ചടക്കത്തെയും പരിഗണനയെയും പ്രതിഫലിപ്പിക്കുന്നു, മറ്റുള്ളവർ പ്രശംസനീയമെന്ന് തോന്നുന്ന പ്രതിബദ്ധതയുടെ ഒരു തലത്തെ സൂചിപ്പിക്കുന്നു. സാധ്യമായ ഏറ്റവും മികച്ച വെളിച്ചത്തിൽ സ്വയം അവതരിപ്പിക്കുന്നതിലൂടെ, നിങ്ങളുടെ ചുറ്റുമുള്ളവരുമായി പ്രതിധ്വനിക്കുന്ന ആത്മാഭിമാനബോധം നിങ്ങൾ പ്രകടിപ്പിക്കുന്നു. ചമയത്തിനുള്ള ഈ പ്രതിബദ്ധത നിങ്ങളുടെ സ്വന്തം ആത്മവിശ്വാസം വർദ്ധിപ്പിക്കുക മാത്രമല്ല, ഒരു നല്ല മതിപ്പ് വളർത്തുകയും ചെയ്യുന്നു, ഇത് നിങ്ങളുടെ സോഷ്യൽ സർക്കിളിൽ നിന്നുള്ള ബഹുമാനം വർദ്ധിപ്പിക്കുന്നതിലേക്ക് നയിക്കുന്നു. ആത്യന്തികമായി, നന്നായി പക്വതയാർന്ന ഒരു ഇമേജ് നിലനിർത്തുന്നത് നിങ്ങൾ ഇടപഴകുന്നവരുടെ ബഹുമാനം നേടുന്നതിനുള്ള ലളിതവും എന്നാൽ ശക്തവുമായ മാർഗമാണ്.",
          tipsPara5:
            "വളരെയധികം സമയവും പണവും ചെലവഴിക്കാതെ തന്നെ നിങ്ങളുടെ മൊത്തത്തിലുള്ള ശൈലിയും രൂപവും മെച്ചപ്പെടുത്തുന്നതിനുള്ള ഏറ്റവും വിലകുറഞ്ഞതും ഫലപ്രദവുമായ മാർഗ്ഗമാണ് വ്യക്തിഗത ചമയം. കുളിക്കുക, ഷേവർ ഉപയോഗിക്കുക, GATSBY പോലുള്ള പുരുഷന്മാർക്ക് താങ്ങാനാവുന്ന, എന്നാൽ അത്യാവശ്യമായ ഗ്രൂമിംഗ്, ഹെയർസ്റ്റൈൽ ഉൽപ്പന്നങ്ങൾ എന്നിവ ഉപയോഗിക്കുക എന്നിവ മാത്രമാണ് നിങ്ങളുടെ ചമയ ദിനചര്യയിൽ നിങ്ങൾ കൂടുതലായി ചെയ്യേണ്ടത്.",
          tipsPara6:
            "വ്യക്തിപരമായ ശുചിത്വം അത്ര വലിയ ജോലിയല്ല, എന്നാൽ ദിവസേന അത് ചെയ്യുന്നത് പലർക്കും യഥാർത്ഥ വെല്ലുവിളിയാണ്. എല്ലാ ദിവസവും സ്വയം പരിപാലിക്കുന്നത് നിങ്ങളെ പുതുമയുള്ളതും വൃത്തിയുള്ളതുമായി നിലനിർത്താൻ മാത്രമല്ല, നിങ്ങളുടെ സ്വയം അച്ചടക്കം മെച്ചപ്പെടുത്താനും, അതിലും പ്രധാനമായി, നല്ല ശീലങ്ങൾ രൂപപ്പെടുത്താനും സഹായിക്കും. ഞങ്ങൾ നേരത്തെ പറഞ്ഞതുപോലെ, ചമയം ചെലവേറിയതായിരിക്കണമെന്നില്ല! അതുകൊണ്ടാണ് GATSBY നിങ്ങളുടെ വാലറ്റ് തളരാതെ തന്നെ നിങ്ങളുടെ ചമയ ലക്ഷ്യങ്ങൾ കൈവരിക്കാൻ സഹായിക്കുന്ന നിങ്ങളുടെ ചങ്ങാതി. ഞങ്ങളുടെ എല്ലാ ഉൽപ്പന്നങ്ങളും പരിശോധിക്കാൻ ഞങ്ങളുടെ വെബ്സൈറ്റ് ഇവിടെ സന്ദർശിക്കുക.",
        },
      },
    },
  });

export default i18n;
