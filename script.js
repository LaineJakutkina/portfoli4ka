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
    illAside: "* Добавляйте работы через редактор портфолио — код не понадобится.",
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
    emptyIllustrations: "Здесь пока пусто — добавьте иллюстрацию или графическую работу в редакторе портфолио.",
    emptyProjects: "Пока нет проектов. Добавьте первый через редактор портфолио.",
    emptyMedia: "Медиа появятся здесь, когда вы добавите их в редакторе портфолио.",
    openWork: "Открыть материал ↗",
    contentLoadError: "Не удалось загрузить материалы портфолио. Проверьте подключение и попробуйте обновить страницу.",
    categoryIllustration: "ИЛЛЮСТРАЦИЯ",
    categoryGraphic: "ГРАФИКА",
    categoryMedia: "МЕДИА",
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
    illAside: "* Add your work through the portfolio editor—no code required.",
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
    emptyIllustrations: "Nothing here yet — add an illustration or graphic through the portfolio editor.",
    emptyProjects: "No projects yet. Add your first one in the portfolio editor.",
    emptyMedia: "Media will appear here after you add it in the portfolio editor.",
    openWork: "Open item ↗",
    contentLoadError: "Could not load portfolio content. Check your connection and refresh the page.",
    categoryIllustration: "ILLUSTRATION",
    categoryGraphic: "GRAPHICS",
    categoryMedia: "MEDIA",
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
    illAside: "* Lisa töid portfoolio redaktoris — koodi pole vaja muuta.",
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
    emptyIllustrations: "Siin pole veel midagi — lisa illustratsioon või graafiline töö portfoolio redaktoris.",
    emptyProjects: "Projekte veel pole. Lisa esimene portfoolio redaktoris.",
    emptyMedia: "Meedia ilmub siia pärast selle lisamist portfoolio redaktoris.",
    openWork: "Ava töö ↗",
    contentLoadError: "Portfoolio sisu laadimine ebaõnnestus. Kontrolli ühendust ja värskenda lehte.",
    categoryIllustration: "ILLUSTRATSIOON",
    categoryGraphic: "GRAAFIKA",
    categoryMedia: "MEEDIA",
  },
};

const languageButtons = [...document.querySelectorAll("[data-language]")];
let currentLanguage = "ru";
let portfolioContent = null;
let gameContent = null;

function localized(value) {
  if (typeof value === "string") return value;
  if (!value || typeof value !== "object") return "";
  return value[currentLanguage] || value.ru || value.en || value.et || "";
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function resolveAssetUrl(path) {
  if (!path) return "";
  if (/^(https?:|data:|blob:)/i.test(path)) return path;
  return new URL(path.replace(/^\.?\//, "").replace(/^\/+/, ""), document.baseURI).href;
}

function safeExternalUrl(value) {
  if (!value) return "";
  try {
    const url = new URL(value, window.location.href);
    return ["http:", "https:", "mailto:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function appendWorkImage(container, work) {
  if (!work.image) return false;
  const image = createElement("img", "work-image");
  image.src = resolveAssetUrl(work.image);
  image.alt = localized(work.imageAlt) || localized(work.title);
  image.loading = "lazy";
  image.addEventListener("error", () => {
    image.remove();
    container.classList.add("work-visual--missing");
    container.append(createElement("span", "work-visual__title", localized(work.title)));
  }, { once: true });
  container.append(image);
  container.classList.add("work-visual--image");
  return true;
}

function createIllustrationCard(work, index) {
  const card = createElement("article", "project-card");
  const visual = createElement("div", `project-card__visual work-visual ${index % 2 ? "visual-note" : "visual-poster"}`);
  if (!appendWorkImage(visual, work)) {
    const placeholder = createElement("span", "work-visual__title", localized(work.title));
    visual.append(placeholder);
  }

  const details = createElement("div", "project-card__details");
  const heading = createElement("div");
  const category = work.category === "graphic"
    ? translations[currentLanguage].categoryGraphic
    : translations[currentLanguage].categoryIllustration;
  heading.append(
    createElement("span", "card-index", `${category} ${String(index + 1).padStart(2, "0")}`),
    createElement("h3", "", localized(work.title)),
  );
  const description = createElement("p", "", localized(work.description));
  details.append(heading, description);
  card.append(visual, details);
  return card;
}

function createProjectRow(work, index) {
  const row = createElement("article", "project-row");
  const number = createElement("span", "card-index", String(index + 1).padStart(2, "0"));
  const thumbnail = createElement("div", "project-row__thumbnail");
  if (work.image) {
    const image = createElement("img", "work-image");
    image.src = resolveAssetUrl(work.image);
    image.alt = localized(work.imageAlt) || localized(work.title);
    image.loading = "lazy";
    image.addEventListener("error", () => image.remove(), { once: true });
    thumbnail.append(image);
  } else {
    thumbnail.textContent = "↗";
    thumbnail.setAttribute("aria-hidden", "true");
  }
  const content = createElement("div");
  const title = createElement("h3", "", localized(work.title));
  const description = createElement("p", "", localized(work.description));
  const link = safeExternalUrl(work.link);
  if (link) {
    const titleLink = createElement("a", "work-title-link");
    titleLink.href = link;
    titleLink.target = "_blank";
    titleLink.rel = "noopener noreferrer";
    titleLink.append(title);
    content.append(titleLink);
  } else {
    content.append(title);
  }
  content.append(description);
  const status = createElement("span", "project-row__type", localized(work.status));
  row.append(number, thumbnail, content, status);
  return row;
}

function createMediaCard(work, index) {
  const card = createElement("article", `media-card${index === 0 ? " media-card--wide" : ""}`);
  const visual = createElement("div", "media-card__visual");
  if (!appendWorkImage(visual, work)) {
    const placeholder = createElement("span", "media-card__placeholder", localized(work.title));
    visual.append(placeholder);
  }
  const content = createElement("div", "media-card__content");
  content.append(
    createElement("span", "media-card__label", `${translations[currentLanguage].categoryMedia} ${String(index + 1).padStart(2, "0")}`),
    createElement("h3", "", localized(work.title)),
    createElement("p", "", localized(work.description)),
  );
  const link = safeExternalUrl(work.link);
  if (link) {
    const anchor = createElement("a", "media-card__link", translations[currentLanguage].openWork);
    anchor.href = link;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    content.append(anchor);
  }
  card.append(visual, content);
  return card;
}

function renderPortfolioContent() {
  if (!portfolioContent) return;

  const works = portfolioContent.works.filter((work) => work && work.hidden !== true);
  const visualWorks = works.filter((work) => ["illustration", "graphic"].includes(work.category));
  const projects = works.filter((work) => work.category === "project");
  const media = works.filter((work) => work.category === "media");
  const lists = [
    ["#illustration-work-list", visualWorks, "emptyIllustrations", createIllustrationCard],
    ["#project-list", projects, "emptyProjects", createProjectRow],
    ["#media-list", media, "emptyMedia", createMediaCard],
  ];

  lists.forEach(([selector, entries, emptyKey, createCard]) => {
    const container = document.querySelector(selector);
    if (!container) return;
    container.replaceChildren();
    if (!entries.length) {
      container.append(createElement("p", "content-message", translations[currentLanguage][emptyKey]));
      return;
    }
    entries.forEach((entry, index) => container.append(createCard(entry, index)));
  });

  const lead = document.querySelector("#about-lead");
  const description = document.querySelector("#about-description");
  const traits = document.querySelector("#about-traits");
  if (lead) lead.textContent = localized(portfolioContent.about.lead);
  if (description) description.textContent = localized(portfolioContent.about.description);
  if (traits) {
    traits.replaceChildren();
    (portfolioContent.about.traits || []).forEach((trait) => {
      const text = localized(trait);
      if (text) traits.append(createElement("span", "", text));
    });
  }
}

function renderGameContent() {
  if (!gameContent) return;
  const fields = [
    ["#game-eyebrow", gameContent.eyebrow],
    ["#game-title", gameContent.title],
    ["#game-description", gameContent.description],
    ["#game-status", gameContent.status],
  ];
  fields.forEach(([selector, value]) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = localized(value);
  });
}

async function loadPortfolioContent() {
  try {
    const [worksResponse, aboutResponse] = await Promise.all([
      fetch("content/works.json"),
      fetch("content/about.json"),
    ]);
    if (!worksResponse.ok || !aboutResponse.ok) {
      throw new Error(`Content request failed: works=${worksResponse.status}, about=${aboutResponse.status}`);
    }

    const [works, about] = await Promise.all([worksResponse.json(), aboutResponse.json()]);
    if (!Array.isArray(works) || !about || typeof about !== "object") {
      throw new TypeError("Portfolio content has an unexpected format");
    }

    portfolioContent = { works, about };
    renderPortfolioContent();
  } catch (error) {
    console.error("Could not load portfolio content.", error);
    document.querySelectorAll("#illustration-work-list, #project-list, #media-list").forEach((container) => {
      container.replaceChildren(createElement("p", "content-message content-message--error", translations[currentLanguage].contentLoadError));
    });
  }
}

async function loadGameContent() {
  try {
    const response = await fetch("content/game.json");
    if (!response.ok) throw new Error(`Game content request failed: ${response.status}`);
    gameContent = await response.json();
    if (!gameContent || typeof gameContent !== "object") {
      throw new TypeError("Game content has an unexpected format");
    }
    renderGameContent();
  } catch (error) {
    console.error("Could not load mini-game page content.", error);
    const description = document.querySelector("#game-description");
    if (description) description.textContent = translations[currentLanguage].contentLoadError;
  }
}

function setLanguage(language) {
  const translationsForLanguage = translations[language] ?? translations.ru;
  currentLanguage = translations[language] ? language : "ru";

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
  renderPortfolioContent();
  renderGameContent();
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

const savedLanguage = localStorage.getItem("portfolio-language");
setLanguage(savedLanguage && translations[savedLanguage] ? savedLanguage : "ru");
if (document.querySelector("#illustration-work-list")) loadPortfolioContent();
if (document.querySelector("#game-title")) loadGameContent();

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
