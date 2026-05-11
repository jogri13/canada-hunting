const species = [
  { id: "deer", label: "Whitetail deer", group: "Big game" },
  { id: "moose", label: "Moose", group: "Big game" },
  { id: "canada-goose", label: "Canada goose", group: "Waterfowl" },
  { id: "snow-goose", label: "Snow goose", group: "Waterfowl" },
  { id: "duck", label: "Duck", group: "Waterfowl" },
  { id: "turkey", label: "Wild turkey", group: "Upland" }
];


const offers = [
  {
    id: 1,
    title: "Dawn whitetail sit on mixed hardwood farm",
    species: "deer",
    location: "Lanark County, ON",
    jurisdiction: "Canada",
    region: "ON",
    date: "2026-05-11",
    distance: 18,
    price: 145,
    host: "Landlord",
    type: "Land access",
    need: ["land", "gear"],
    partners: 1,
    summary: "Permission-backed farm edge with two stand sites, trail camera notes, and dry storage for a cache.",
    gear: ["Trail camera", "Tree stand", "Ground blind", "Cache"],
    weapon: "Hunter supplies legal firearm or bow"
  },
  {
    id: 2,
    title: "Canada goose field with decoy trailer",
    species: "canada-goose",
    location: "Montcalm, MB",
    jurisdiction: "Canada",
    region: "MB",
    date: "2026-05-11",
    distance: 31,
    price: 95,
    host: "Hunter",
    type: "Spot share",
    need: ["partners", "gear", "weapon", "session"],
    partners: 3,
    summary: "Cut grain field, layout blinds, flags, calls, and a trailer of full-body decoys ready for a morning hunt.",
    gear: ["Calls", "Decoys", "Trailer", "Layout blind"],
    weapon: "Shotgun access through licensed outfitter only"
  },
  {
    id: 3,
    title: "Duck marsh boat blind partner seat",
    species: "duck",
    location: "Cameron Parish, LA",
    jurisdiction: "United States",
    region: "LA",
    date: "2026-05-12",
    distance: 42,
    price: 120,
    host: "Club",
    type: "Hunting session",
    need: ["partners", "gear", "session"],
    partners: 2,
    summary: "Tidal marsh hide with dog ramp, decoy spread, non-toxic shot reminder, and space for two new hunters.",
    gear: ["Duck calls", "Decoys", "Boat blind", "Waders"],
    weapon: "Bring compliant shotgun"
  },
  {
    id: 4,
    title: "Moose scouting block with wall tent option",
    species: "moose",
    location: "Aroostook County, ME",
    jurisdiction: "United States",
    region: "ME",
    date: "2026-06-02",
    distance: 77,
    price: 260,
    host: "Outfitter",
    type: "Land access",
    need: ["land", "gear", "weapon", "session"],
    partners: 0,
    summary: "Private timber access, tent pad, camera corridor, and cache point near a wetland crossing.",
    gear: ["Trail camera", "Wall tent", "Cache", "Pack frame"],
    weapon: "Licensed outfitter coordination required"
  },
  {
    id: 5,
    title: "Spring turkey oak ridge permission",
    species: "turkey",
    location: "Jefferson County, PA",
    jurisdiction: "United States",
    region: "PA",
    date: "2026-05-18",
    distance: 24,
    price: 70,
    host: "Landlord",
    type: "Land access",
    need: ["land", "gear"],
    partners: 1,
    summary: "Small parcel with roost history, pop-up blind space, slate call included, and landowner permission record.",
    gear: ["Turkey call", "Pop-up blind", "Decoy"],
    weapon: "Bring compliant shotgun or bow"
  },
  {
    id: 6,
    title: "Snow goose conservation spread share",
    species: "snow-goose",
    location: "Saskatoon, SK",
    jurisdiction: "Canada",
    region: "SK",
    date: "2026-05-15",
    distance: 56,
    price: 110,
    host: "Hunter",
    type: "Equipment share",
    need: ["gear", "partners"],
    partners: 4,
    summary: "Electronic call setup where legal, white spread, layout blinds, and experienced callers looking for help.",
    gear: ["Electronic caller", "Sock decoys", "Layout blinds", "Trailer"],
    weapon: "Hunter supplies legal shotgun"
  }
];

const users = [
  { name: "Maya Chen", role: "New hunter", region: "ON", status: "ID pending" },
  { name: "Evan Brooks", role: "Landlord", region: "PA", status: "Land review" },
  { name: "Noah Martin", role: "Hunter host", region: "MB", status: "Ready" },
  { name: "Sofia Alvarez", role: "Club admin", region: "LA", status: "Insurance check" }
];

const checklistTemplates = {
  deer: ["Confirm tag, season, and legal weapon", "Secure written land permission", "Pack trail camera, cache, stand or blind", "Check tree stand harness and weather"],
  moose: ["Confirm draw permit, tag, and zone", "Verify outfitter or land access terms", "Pack camera, tent, cache, and extraction plan", "Share route and check-in plan"],
  "canada-goose": ["Confirm migratory bird permit and limits", "Confirm non-toxic shot rules", "Pack calls, decoys, layout blind, and trailer", "Coordinate partners and field permission"],
  "snow-goose": ["Confirm conservation season rules", "Verify electronic call legality for the area", "Pack white spread, caller, blinds, and trailer", "Plan retrieval and field cleanup"],
  duck: ["Confirm duck stamp, permit, and limits", "Pack non-toxic shot, calls, decoys, and waders", "Check boat blind, flotation, and weather", "Confirm marsh access and retrieval plan"],
  turkey: ["Confirm tag, season dates, and shooting hours", "Pack call, decoy, blind, and orange for movement", "Confirm land permission", "Mark safe setup and backstop"]
};

const state = {
  view: "today",
  searchMode: "today",
  species: "all",
  need: "all",
  quick: "all",
  jurisdiction: "all",
  region: "all",
  keyword: "",
  sort: "soonest",
  resultView: "map",
  journey: "find",
  selectedId: null,
  sessionName: ""
};

const els = {
  marketplaceView: document.querySelector("#marketplaceView"),
  loginView: document.querySelector("#loginView"),
  signupView: document.querySelector("#signupView"),
  adminView: document.querySelector("#adminView"),
  speciesFilter: document.querySelector("#speciesFilter"),
  needFilter: document.querySelector("#needFilter"),
  offerTypeFilter: document.querySelector("#offerTypeFilter"),
  targetDate: document.querySelector("#targetDate"),
  regionFilter: document.querySelector("#regionFilter"),
  jurisdiction: document.querySelector("#jurisdiction"),
  keywordSearch: document.querySelector("#keywordSearch"),
  offerCards: document.querySelector("#offerCards"),
  resultCount: document.querySelector("#resultCount"),
  resultTitle: document.querySelector("#resultTitle"),
  resultSummary: document.querySelector("#resultSummary"),
  mapBoard: document.querySelector("#mapBoard"),
  selectedTrip: document.querySelector("#selectedTrip"),
  checklist: document.querySelector("#checklist"),
  viewTitle: document.querySelector("#viewTitle"),
  sortOffers: document.querySelector("#sortOffers"),
  offerForm: document.querySelector("#offerForm"),
  loginForm: document.querySelector("#loginForm"),
  signupForm: document.querySelector("#signupForm"),
  sessionPill: document.querySelector("#sessionPill"),
  adminStats: document.querySelector("#adminStats"),
  adminListings: document.querySelector("#adminListings"),
  adminUsers: document.querySelector("#adminUsers")
};

function init() {
  const today = new Date().toISOString().slice(0, 10);
  els.targetDate.value = today;

  renderRegions();
  bindEvents();
  renderAdmin();
  render();
}


function renderRegions() {
  const regions = ["all", ...new Set(offers.map((offer) => offer.region))].sort((a, b) => {
    if (a === "all") return -1;
    if (b === "all") return 1;
    return a.localeCompare(b);
  });

  els.regionFilter.innerHTML = regions
    .map((region) => `<option value="${region}">${region === "all" ? "All regions" : region}</option>`)
    .join("");
}

function bindEvents() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      setView(button.dataset.view);
    });
  });

  document.querySelectorAll("[data-auth-view]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.authView));
  });

  document.querySelectorAll("[data-journey]").forEach((button) => {
    button.addEventListener("click", () => {
      state.journey = button.dataset.journey;
      if (state.journey === "offer") setView("offer");
      else setView("today");
    });
  });

  document.querySelectorAll("[data-result-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.resultView = button.dataset.resultView;
      render();
    });
  });

  document.querySelectorAll("[data-search-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.searchMode = button.dataset.searchMode;
      setView(state.searchMode === "planned" ? "plan" : "today");
    });
  });

  els.speciesFilter.addEventListener("change", (event) => {
    state.species = event.target.value;
    render();
  });

  els.needFilter.addEventListener("change", (event) => {
    state.need = event.target.value;
    render();
  });

  els.offerTypeFilter.addEventListener("change", (event) => {
    state.quick = event.target.value;
    render();
  });

  els.jurisdiction.addEventListener("change", (event) => {
    state.jurisdiction = event.target.value;
    render();
  });

  els.regionFilter.addEventListener("change", (event) => {
    state.region = event.target.value;
    render();
  });

  els.keywordSearch.addEventListener("input", (event) => {
    state.keyword = event.target.value.trim().toLowerCase();
    render();
  });

  els.sortOffers.addEventListener("change", (event) => {
    state.sort = event.target.value;
    render();
  });

  document.querySelector("#resetFilters").addEventListener("click", () => {
    state.species = "all";
    state.need = "all";
    state.quick = "all";
    state.region = "all";
    state.jurisdiction = "all";
    state.keyword = "";
    state.sort = "soonest";
    els.keywordSearch.value = "";
    els.speciesFilter.value = "all";
    els.needFilter.value = "all";
    els.offerTypeFilter.value = "all";
    els.regionFilter.value = "all";
    els.jurisdiction.value = "all";
    els.sortOffers.value = "soonest";
    render();
  });

  document.querySelector("#openOffer").addEventListener("click", () => {
    setView("offer");
  });

  els.offerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addOfferFromForm();
  });

  els.loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.querySelector("#loginEmail").value.trim();
    state.sessionName = email.split("@")[0] || "Hunter";
    updateSession();
    setView("today");
  });

  els.signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    state.sessionName = document.querySelector("#signupName").value.trim() || "Hunter";
    updateSession();
    setView("today");
  });
}

function setView(view) {
  state.view = view;
  if (view === "plan") state.searchMode = "planned";
  if (view === "today") {
    state.searchMode = "today";
    state.journey = "find";
  }
  if (view === "offer") state.journey = "offer";
  if (view === "plan") state.journey = "find";

  document.querySelectorAll("[data-view]").forEach((tab) => tab.classList.toggle("active", tab.dataset.view === view));
  document.querySelectorAll("[data-search-mode]").forEach((segment) => {
    segment.classList.toggle("active", segment.dataset.searchMode === state.searchMode);
  });

  render();
  if (view === "offer") document.querySelector(".offer-card").scrollIntoView({ behavior: "smooth", block: "center" });
}

function updateSession() {
  if (!state.sessionName) {
    els.sessionPill.hidden = true;
    els.sessionPill.textContent = "";
    return;
  }

  els.sessionPill.hidden = false;
  els.sessionPill.textContent = state.sessionName;
}


function getFilteredOffers() {
  const targetDate = els.targetDate.value;
  const filtered = offers.filter((offer) => {
    const matchesSpecies = state.species === "all" || offer.species === state.species;
    const matchesNeed = state.need === "all" || offer.need.includes(state.need);
    const matchesQuick = state.quick === "all" || offer.need.includes(state.quick);
    const matchesJurisdiction = state.jurisdiction === "all" || offer.jurisdiction === state.jurisdiction;
    const matchesRegion = state.region === "all" || offer.region === state.region;
    const matchesDate = state.searchMode === "planned" ? offer.date >= targetDate : offer.date === targetDate;
    const haystack = `${offer.title} ${offer.location} ${offer.host} ${offer.type} ${offer.gear.join(" ")} ${getSpeciesLabel(offer.species)}`.toLowerCase();
    const matchesKeyword = !state.keyword || haystack.includes(state.keyword);
    return matchesSpecies && matchesNeed && matchesQuick && matchesJurisdiction && matchesRegion && matchesDate && matchesKeyword;
  });

  return filtered.sort((a, b) => {
    if (state.sort === "price") return a.price - b.price;
    if (state.sort === "distance") return a.distance - b.distance;
    return a.date.localeCompare(b.date);
  });
}

function render() {
  updateShellVisibility();
  updateJourneyState();
  updateResultViewState();
  renderAdmin();

  const filtered = getFilteredOffers();
  els.resultCount.textContent = filtered.length;
  els.resultTitle.textContent = state.resultView === "map" ? "Map view" : "List view";
  els.resultSummary.textContent = `${filtered.length} matching ${filtered.length === 1 ? "opportunity" : "opportunities"}`;
  els.viewTitle.textContent =
    state.view === "offer"
      ? "Offer a hunt, spot, land, or gear"
      : state.searchMode === "planned"
        ? "Plan a future hunt"
        : "Find a hunt for today";

  els.offerCards.innerHTML = filtered.length
    ? filtered.map((offer) => renderOfferCard(offer)).join("")
    : `<div class="no-results">No matching listings. Try a wider region, species, or need.</div>`;

  els.offerCards.querySelectorAll("[data-select-offer]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedId = Number(button.dataset.selectOffer);
      render();
    });
  });

  renderSelectedTrip();
}

function updateShellVisibility() {
  els.marketplaceView.classList.toggle("hidden", !["today", "plan", "offer"].includes(state.view));
  els.loginView.classList.toggle("hidden", state.view !== "login");
  els.signupView.classList.toggle("hidden", state.view !== "signup");
  els.adminView.classList.toggle("hidden", state.view !== "admin");
}

function updateJourneyState() {
  document.querySelectorAll("[data-journey]").forEach((button) => {
    button.classList.toggle("active", button.dataset.journey === state.journey);
  });
}

function updateResultViewState() {
  els.marketplaceView.classList.toggle("list-layout", state.resultView === "list");
  els.marketplaceView.classList.toggle("map-layout", state.resultView === "map");
  els.mapBoard.hidden = state.resultView === "list";
  document.querySelectorAll("[data-result-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.resultView === state.resultView);
  });
}

function renderOfferCard(offer) {
  const speciesClass = `species-${offer.species.includes("goose") ? "goose" : offer.species}`;
  const legalBadge = offer.need.includes("weapon") || offer.weapon.includes("licensed") ? `<span class="badge legal">Licensed only</span>` : "";
  return `
    <article class="listing-card ${state.selectedId === offer.id ? "selected" : ""}">
      <div class="card-visual ${speciesClass}"></div>
      <div class="card-topline">
        <span class="badge">${getSpeciesLabel(offer.species)}</span>
        <span class="price">$${offer.price}</span>
      </div>
      <div>
        <h2>${offer.title}</h2>
        <p>${offer.summary}</p>
      </div>
      <div class="listing-meta">
        <span>${offer.location}</span>
        <span>${offer.date}</span>
        <span>${offer.distance} mi/km</span>
      </div>
      <div class="tag-row">
        <span class="tag">${offer.host}</span>
        <span class="tag">${offer.type}</span>
        <span class="tag">${offer.partners} partner spots</span>
        ${legalBadge}
      </div>
      <div class="tag-row">
        ${offer.gear.slice(0, 4).map((item) => `<span class="tag">${item}</span>`).join("")}
      </div>
      <div class="listing-footer">
        <span class="badge warning">${offer.weapon}</span>
        <button class="secondary-button" data-select-offer="${offer.id}" type="button">Build trip</button>
      </div>
    </article>
  `;
}

function renderSelectedTrip() {
  const offer = offers.find((item) => item.id === state.selectedId);
  if (!offer) {
    els.selectedTrip.className = "selected-trip empty-state";
    els.selectedTrip.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h10"/></svg>
      <p>Select a listing to build a hunt checklist.</p>
    `;
    els.checklist.innerHTML = "";
    return;
  }

  els.selectedTrip.className = "selected-trip";
  els.selectedTrip.innerHTML = `
    <span class="badge">${getSpeciesLabel(offer.species)}</span>
    <h3 class="trip-title">${offer.title}</h3>
    <p>${offer.location} / ${offer.date}</p>
    <p>${offer.summary}</p>
  `;

  const checks = checklistTemplates[offer.species] || [];
  els.checklist.innerHTML = checks
    .map(
      (item, index) => `
        <label class="check-item">
          <input type="checkbox" ${index === 0 ? "checked" : ""} />
          <span>${item}</span>
        </label>`
    )
    .join("");
}

function addOfferFromForm() {
  const location = document.querySelector("#offerLocation").value.trim();
  const speciesLabel = document.querySelector("#offerSpecies").value;
  const offerType = document.querySelector("#offerType").value;
  const host = document.querySelector("#hostType").value;
  const speciesId = species.find((item) => item.label === speciesLabel)?.id || "deer";
  const today = new Date().toISOString().slice(0, 10);
  const region = location.split(",").pop()?.trim() || "New";
  const need = inferNeeds(offerType);

  offers.unshift({
    id: Date.now(),
    title: `${offerType} for ${speciesLabel}`,
    species: speciesId,
    location: location || "Unlisted location",
    jurisdiction: region.length === 2 ? "Canada" : "United States",
    region,
    date: today,
    distance: 12,
    price: offerType.includes("Equipment") ? 45 : 100,
    host,
    type: offerType,
    need,
    partners: offerType.includes("session") ? 2 : 1,
    summary: "New verified offer pending permit, season, and access details.",
    gear: getDefaultGear(speciesId),
    weapon: offerType.includes("weapon") ? "Licensed provider workflow required" : "Hunter verifies legal weapon"
  });

  renderRegions();
  renderAdmin();
  els.offerForm.reset();
  state.selectedId = offers[0].id;
  render();
}

function renderAdmin() {
  const licensedListings = offers.filter((offer) => offer.need.includes("weapon") || offer.weapon.toLowerCase().includes("licensed")).length;
  const partnerSeats = offers.reduce((total, offer) => total + offer.partners, 0);
  const pendingUsers = users.filter((user) => user.status !== "Ready").length;

  els.adminStats.innerHTML = [
    { label: "Active listings", value: offers.length, note: "Land, spots, gear, and sessions" },
    { label: "Partner seats", value: partnerSeats, note: "Open seats across marketplace" },
    { label: "Licensed reviews", value: licensedListings, note: "Weapon or outfitter workflow" },
    { label: "User checks", value: pendingUsers, note: "Profiles waiting for review" }
  ]
    .map(
      (stat) => `
        <article class="stat-card">
          <span>${stat.label}</span>
          <strong>${stat.value}</strong>
          <p>${stat.note}</p>
        </article>`
    )
    .join("");

  els.adminListings.innerHTML = offers
    .slice(0, 6)
    .map(
      (offer) => `
        <article class="admin-row">
          <div>
            <strong>${offer.title}</strong>
            <span>${offer.host} / ${offer.location}</span>
          </div>
          <span class="badge ${offer.need.includes("weapon") ? "legal" : ""}">${offer.need.includes("weapon") ? "Review" : "Live"}</span>
          <button class="secondary-button" type="button">Inspect</button>
        </article>`
    )
    .join("");

  els.adminUsers.innerHTML = users
    .map(
      (user) => `
        <article class="user-card">
          <div class="avatar" aria-hidden="true">${getInitials(user.name)}</div>
          <div>
            <strong>${user.name}</strong>
            <span>${user.role} / ${user.region}</span>
          </div>
          <span class="badge ${user.status === "Ready" ? "" : "warning"}">${user.status}</span>
        </article>`
    )
    .join("");
}

function inferNeeds(type) {
  if (type.includes("Land")) return ["land"];
  if (type.includes("Spot")) return ["land", "partners"];
  if (type.includes("Equipment")) return ["gear"];
  if (type.includes("weapon")) return ["weapon"];
  return ["session", "partners"];
}

function getDefaultGear(speciesId) {
  if (speciesId === "deer") return ["Trail camera", "Tree stand", "Cache"];
  if (speciesId === "moose") return ["Trail camera", "Wall tent", "Cache"];
  if (speciesId === "turkey") return ["Call", "Decoy", "Blind"];
  return ["Calls", "Decoys", "Layout blind", "Trailer"];
}

function getSpeciesLabel(id) {
  return species.find((item) => item.id === id)?.label || id;
}

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

init();
