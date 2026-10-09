const header = document.querySelector(".site-header");
const navLinks = [...document.querySelectorAll(".main-nav__link")];
const curtain = document.querySelector(".curtain");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const translations = {
  ru: {
    metaDescription: "Портфолио для работодателей и учебных заведений. Серьёзные намерения, несерьёзная подача.",
    pageTitle: "Портфолио — премьера скоро",
    navIllustration: "Иллюстрация и графика",
    navProjects: "Проекты",
    navMedia: "Медиа",
    navGame: "Миниигра",
    navAbout: "Обо мне",
    languageGroup: "Выбор языка",
    navAria: "Основная навигация",
    traitListAria: "Мои принципы",
    heroMetaLeft: "ЛИЧНОЕ ДЕЛО № 001",
    heroMetaRight: "ОТКРЫТО К ПРЕДЛОЖЕНИЯМ",
    heroEyebrow: "В поиске следующей сцены",
    heroTitle: "Пока без<br />«успешного успеха».",
    heroDescription: "Зато с любопытством, чувством юмора и портфолио.<br class=\"desktop-break\" /> Для тех, кто нанимает, учит и иногда смеётся.",
    heroMenu: "Выберите сюжет",
    heroBottomLeft: "ВАШЕ ИМЯ — ВРЕМЕННОЕ НАЗВАНИЕ",
    heroBottomRight: "ПРОКРУТИТЕ ИЛИ ВЫБЕРИТЕ РАЗДЕЛ",
    illKickerLeft: "01 / ВИЗУАЛЬНОЕ",
    illKickerRight: "РИСУНКИ И ГРАФИКА",
    illEyebrow: "Цвет, форма и иногда здравый смысл",
    illTitle: "Иллюстрация<br />и графика<span class=\"accent\">.</span>",
    illStamp: "ИЛЛЮСТРАЦИЯ",
    illPoster: "ОБРАЗ<br />С ХАРАКТЕРОМ",
    illCaption: "здесь будет ваша работа",
    illCardIndex: "ИЛЛЮСТРАЦИЯ 01",
    illCardTitle: "Первая работа",
    illCardDescription: "Добавим название, технику и историю создания.",
    graphicPoster: "графика<br />с идеей",
    graphicCaption: "не просто красиво — ещё и зачем-то",
    graphicCardIndex: "ГРАФИКА 02",
    graphicCardTitle: "Вторая работа",
    graphicCardDescription: "Постер, обложка, персонаж или что-то совсем своё.",
    illAside: "* Пока это выставочные стенды. Скоро появятся настоящие работы.",
    projectsKickerLeft: "02 / СДЕЛАНО ИЛИ ЗАДУМАНО",
    projectsKickerRight: "ПРОЕКТЫ",
    projectsEyebrow: "От первой идеи до «а оно работает!»",
    projectsTitle: "Проекты",
    projectOneTitle: "Проект появится здесь",
    projectOneDescription: "Коротко расскажем, что это, для кого и какую задачу решает.",
    projectOneStatus: "В ПРОЦЕССЕ",
    projectTwoTitle: "Идея с шансом на жизнь",
    projectTwoDescription: "Учебные, личные и командные проекты — с честным описанием вклада.",
    projectTwoStatus: "СКОРО",
    projectThreeTitle: "Место для эксперимента",
    projectThreeDescription: "Потому что не всякая хорошая идея сначала выглядит разумно.",
    projectThreeStatus: "В РАЗРАБОТКЕ",
    mediaKickerLeft: "03 / В ЭФИРЕ",
    mediaKickerRight: "МЕДИА",
    mediaEyebrow: "То, что движется, звучит или выходит в свет",
    mediaTitle: "Медиа",
    mediaVideoLabel: "ФОРМАТ 01 / ВИДЕО",
    mediaVideoTitle: "Здесь будет видео",
    mediaVideoDescription: "Ролик, анимация или доказательство, что статичные картинки — не единственный талант.",
    mediaOtherLabel: "ФОРМАТ 02 / ДРУГОЕ",
    mediaOtherTitle: "И другие медиа",
    mediaOtherDescription: "Подкасты, публикации, выступления и прочие выходы к публике.",
    aboutKickerLeft: "05 / ЗА КУЛИСАМИ",
    aboutKickerRight: "НЕ ТОЛЬКО РЕЗЮМЕ",
    aboutEyebrow: "Коротко о главном",
    aboutTitle: "Обо мне",
    aboutLead: "Привет. Я <span class=\"text-highlight\">ваше имя</span> — человек, который предпочитает показывать, а не обещать.",
    aboutDescription: "Здесь будет история о том, чем я занимаюсь, что мне интересно и почему со мной приятно работать. Без фразы «стрессоустойчивый командный игрок» — если только однажды это не станет действительно важным сюжетом.",
    traitCuriosity: "Любопытство — включено",
    traitHumor: "Юмор — в комплекте",
    traitHonesty: "Вымышленные регалии — отсутствуют",
    footerNote: "СДЕЛАНО САМООНИРОНИЕЙ И ХОРОШИМИ НАМЕРЕНИЯМИ",
    backToTop: "НАВЕРХ ↑",
    gameMetaDescription: "Отдельная страница мини-игры в портфолио.",
    gamePageTitle: "Миниигра — портфолио",
    gameBack: "← Вернуться в портфолио",
    gameIndex: "ВНЕ ПРОГРАММЫ / 001",
    gameEyebrow: "Пауза для несерьёзных дел",
    gameTitle: "Миниигра",
    gameDescription: "Игровая механика пока за кулисами. Скоро здесь появится ваша идея — а пока можно вернуться к просмотру работ.",
    gameStatus: "ПРАВИЛА СОЧИНЯЮТСЯ",
    gameFooter: "УДАЧИ. ОНА МОЖЕТ ПОНАДОБИТЬСЯ.",
  },
  en: {
    metaDescription: "A portfolio for employers and schools. Serious intentions, not-so-serious presentation.",
    pageTitle: "Portfolio — coming to a stage near you",
    navIllustration: "Illustration & Graphics",
    navProjects: "Projects",
    navMedia: "Media",
    navGame: "Mini-game",
    navAbout: "About me",
    languageGroup: "Choose language",
    navAria: "Main navigation",
    traitListAria: "My principles",
    heroMetaLeft: "PERSONAL FILE NO. 001",
    heroMetaRight: "OPEN TO OPPORTUNITIES",
    heroEyebrow: "Looking for my next stage",
    heroTitle: "No “overnight<br />success” just yet.",
    heroDescription: "But there is curiosity, a sense of humour and a portfolio.<br class=\"desktop-break\" /> For people who hire, teach and occasionally laugh.",
    heroMenu: "Choose your story",
    heroBottomLeft: "YOUR NAME — TEMPORARY TITLE",
    heroBottomRight: "SCROLL OR PICK A SECTION",
    illKickerLeft: "01 / THE VISUALS",
    illKickerRight: "DRAWINGS & GRAPHICS",
    illEyebrow: "Colour, form and the occasional good idea",
    illTitle: "Illustration<br />& graphics<span class=\"accent\">.</span>",
    illStamp: "ILLUSTRATION",
    illPoster: "AN IMAGE<br />WITH CHARACTER",
    illCaption: "your work goes here",
    illCardIndex: "ILLUSTRATION 01",
    illCardTitle: "The first piece",
    illCardDescription: "We’ll add its title, medium and the story behind it.",
    graphicPoster: "graphics<br />with a point",
    graphicCaption: "not just pretty — pretty purposeful",
    graphicCardIndex: "GRAPHICS 02",
    graphicCardTitle: "Another piece",
    graphicCardDescription: "A poster, cover, character or something entirely your own.",
    illAside: "* These are placeholders for now. The real work is on its way.",
    projectsKickerLeft: "02 / MADE OR IMAGINED",
    projectsKickerRight: "PROJECTS",
    projectsEyebrow: "From first idea to “hey, it works!”",
    projectsTitle: "Projects",
    projectOneTitle: "A project will go here",
    projectOneDescription: "A quick look at what it is, who it’s for and what it solves.",
    projectOneStatus: "IN PROGRESS",
    projectTwoTitle: "An idea with potential",
    projectTwoDescription: "School, personal and team projects—with an honest account of my part.",
    projectTwoStatus: "COMING SOON",
    projectThreeTitle: "Room to experiment",
    projectThreeDescription: "Because a good idea doesn’t always look sensible at first.",
    projectThreeStatus: "IN DEVELOPMENT",
    mediaKickerLeft: "03 / ON AIR",
    mediaKickerRight: "MEDIA",
    mediaEyebrow: "Things that move, make a sound or get published",
    mediaTitle: "Media",
    mediaVideoLabel: "FORMAT 01 / VIDEO",
    mediaVideoTitle: "A video will go here",
    mediaVideoDescription: "A film, animation or proof that still images aren’t my only trick.",
    mediaOtherLabel: "FORMAT 02 / OTHER",
    mediaOtherTitle: "And other media",
    mediaOtherDescription: "Podcasts, publications, talks and other appearances.",
    aboutKickerLeft: "05 / BACKSTAGE",
    aboutKickerRight: "MORE THAN A CV",
    aboutEyebrow: "The short version",
    aboutTitle: "About me",
    aboutLead: "Hi, I’m <span class=\"text-highlight\">your name</span> — I’d rather show what I can do than promise the moon.",
    aboutDescription: "This is where I’ll tell you what I do, what I’m curious about and why I’m good to work with. No “resilient team player” line unless it becomes relevant to the plot.",
    traitCuriosity: "Curiosity — switched on",
    traitHumor: "Humour — included",
    traitHonesty: "Made-up credentials — not included",
    footerNote: "MADE WITH SELF-AWARENESS AND GOOD INTENTIONS",
    backToTop: "BACK TO TOP ↑",
    gameMetaDescription: "A standalone mini-game page in the portfolio.",
    gamePageTitle: "Mini-game — portfolio",
    gameBack: "← Back to the portfolio",
    gameIndex: "OFF SCRIPT / 001",
    gameEyebrow: "A little break from being serious",
    gameTitle: "Mini-game",
    gameDescription: "The game mechanics are still backstage. Your idea will take the spotlight here soon—in the meantime, feel free to browse the work.",
    gameStatus: "RULES ARE BEING MADE UP",
    gameFooter: "GOOD LUCK. YOU MAY NEED IT.",
  },
  et: {
    metaDescription: "Portfoolio tööandjatele ja õppeasutustele. Tõsised kavatsused, mänguline esitlus.",
    pageTitle: "Portfoolio — esietendus peagi",
    navIllustration: "Illustratsioon ja graafika",
    navProjects: "Projektid",
    navMedia: "Meedia",
    navGame: "Minimäng",
    navAbout: "Minust",
    languageGroup: "Keele valimine",
    navAria: "Põhimenüü",
    traitListAria: "Minu põhimõtted",
    heroMetaLeft: "ISIKLIK TOIMIK NR 001",
    heroMetaRight: "AVATUD UUTELE VÕIMALUSTELE",
    heroEyebrow: "Otsin oma järgmist lava",
    heroTitle: "Veel pole<br />„suurt läbimurret”.",
    heroDescription: "Aga uudishimu, huumorimeel ja portfoolio on olemas.<br class=\"desktop-break\" /> Neile, kes palkavad, õpetavad ja vahel naeravad.",
    heroMenu: "Vali oma lugu",
    heroBottomLeft: "SINU NIMI — AJUTINE PEALKIRI",
    heroBottomRight: "KERIGE VÕI VALIGE JAOTIS",
    illKickerLeft: "01 / VISUAALNE POOL",
    illKickerRight: "JOONISTUSED JA GRAAFIKA",
    illEyebrow: "Värv, vorm ja vahel ka terve mõistus",
    illTitle: "Illustratsioon<br />ja graafika<span class=\"accent\">.</span>",
    illStamp: "ILLUSTRATSIOON",
    illPoster: "KUJUND<br />ISIKUPÄRAGA",
    illCaption: "siia tuleb sinu töö",
    illCardIndex: "ILLUSTRATSIOON 01",
    illCardTitle: "Esimene töö",
    illCardDescription: "Lisame pealkirja, tehnika ja loo selle sünnist.",
    graphicPoster: "graafika<br />mõttega",
    graphicCaption: "mitte ainult ilus — ka põhjusega",
    graphicCardIndex: "GRAAFIKA 02",
    graphicCardTitle: "Teine töö",
    graphicCardDescription: "Plakat, kaas, tegelane või midagi päris omaloomingulist.",
    illAside: "* Praegu on need näitusealused. Päris tööd jõuavad siia peagi.",
    projectsKickerLeft: "02 / TEHTUD VÕI KAVANDATUD",
    projectsKickerRight: "PROJEKTID",
    projectsEyebrow: "Esimesest ideest kuni „näe, töötabki!”",
    projectsTitle: "Projektid",
    projectOneTitle: "Siia tuleb projekt",
    projectOneDescription: "Lühidalt sellest, mis see on, kellele mõeldud ja mida lahendab.",
    projectOneStatus: "TÖÖS",
    projectTwoTitle: "Idee, millel on potentsiaali",
    projectTwoDescription: "Õppe-, isiklikud ja tiimiprojektid — ausalt kirjeldatud panusega.",
    projectTwoStatus: "PEAGI",
    projectThreeTitle: "Ruumi katsetamiseks",
    projectThreeDescription: "Sest hea idee ei näe alati alguses mõistlik välja.",
    projectThreeStatus: "ARENDAMISEL",
    mediaKickerLeft: "03 / EETRIS",
    mediaKickerRight: "MEEDIA",
    mediaEyebrow: "Kõik, mis liigub, kõlab või ilmub",
    mediaTitle: "Meedia",
    mediaVideoLabel: "VORM 01 / VIDEO",
    mediaVideoTitle: "Siia tuleb video",
    mediaVideoDescription: "Video, animatsioon või tõestus, et staatilised pildid pole ainus oskus.",
    mediaOtherLabel: "VORM 02 / MUU",
    mediaOtherTitle: "Ja muu meedia",
    mediaOtherDescription: "Taskuhäälingud, artiklid, esinemised ja muud ülesastumised.",
    aboutKickerLeft: "05 / LAVA TAGA",
    aboutKickerRight: "ROHKEM KUI CV",
    aboutEyebrow: "Lühidalt olulisest",
    aboutTitle: "Minust",
    aboutLead: "Tere! Mina olen <span class=\"text-highlight\">Laine</span> — eelistan lubaduste asemel oma oskusi näidata.",
    aboutDescription: "Siin räägin, millega tegelen, mis mind huvitab ja miks minuga on hea koos töötada. Ei mingit „pingetaluvat meeskonnamängijat” — kui see just loo jaoks oluliseks ei muutu.",
    traitCuriosity: "Uudishimu — sisse lülitatud",
    traitHumor: "Huumor — kaasas",
    traitHonesty: "Väljamõeldud tiitlid — puuduvad",
    footerNote: "VALMINUD ENESEIROONIA JA HEADE KAVATSUSTEGA",
    backToTop: "ÜLES ↑",
    gameMetaDescription: "Portfoolio minimängu eraldi leht.",
    gamePageTitle: "Minimäng — portfoolio",
    gameBack: "← Tagasi portfooliosse",
    gameIndex: "VÄLJASPOOL KAVA / 001",
    gameEyebrow: "Väike paus tõsistest asjadest",
    gameTitle: "Minimäng",
    gameDescription: "Mängumehaanika on veel lava taga. Peagi jõuab siia sinu idee — seni võid töödega tutvuda.",
    gameStatus: "REEGLID ON LOOMISEL",
    gameFooter: "EDU. SEDA VÕIB TARVIS MINNA.",
  },
};

const languageButtons = [...document.querySelectorAll("[data-language]")];

function setLanguage(language) {
  const translationsForLanguage = translations[language] ?? translations.ru;

  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translation = translationsForLanguage[element.dataset.i18n];
    if (translation !== undefined) element.textContent = translation;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const translation = translationsForLanguage[element.dataset.i18nHtml];
    if (translation !== undefined) element.innerHTML = translation;
  });
  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const translation = translationsForLanguage[element.dataset.i18nContent];
    if (translation !== undefined) element.setAttribute("content", translation);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const translation = translationsForLanguage[element.dataset.i18nAria];
    if (translation !== undefined) element.setAttribute("aria-label", translation);
  });

  languageButtons.forEach((button) => {
    const isSelected = button.dataset.language === language;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  localStorage.setItem("portfolio-language", language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

const savedLanguage = localStorage.getItem("portfolio-language");
setLanguage(savedLanguage && translations[savedLanguage] ? savedLanguage : "ru");

function dockNavigation() {
  header?.classList.add("is-docked");
}

function openCurtain() {
  document.body.classList.remove("is-opening");
  if (!curtain) return;
  curtain.classList.add("is-open");
  window.setTimeout(() => curtain.classList.add("is-gone"), reducedMotion ? 0 : 1700);
}

if (curtain) {
  document.body.classList.add("is-opening");

  if (reducedMotion) {
    openCurtain();
  } else {
    window.addEventListener("load", () => window.setTimeout(openCurtain, 250), { once: true });
    window.setTimeout(openCurtain, 2500);
  }
}

window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 24) dockNavigation();
  },
  { passive: true },
);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    dockNavigation();
    navLinks.forEach((item) => item.classList.toggle("is-active", item === link));
  });
});

const sections = navLinks
  .filter((link) => link.getAttribute("href").startsWith("#"))
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visibleSection = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleSection) return;

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.hash === `#${visibleSection.target.id}`);
    });
  },
  { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5] },
);

sections.forEach((section) => sectionObserver.observe(section));
