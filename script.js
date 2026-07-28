/* =========================================================
   GeoVision — configuration
   Edit the values below to update the whole site.
   ========================================================= */
const SITE = {
  locationShort: "Dapoli, Khed &amp; Chiplun",
  district: "Ratnagiri District, Maharashtra",
  intro: "This study focuses on the coastal talukas of Dapoli, Khed, and Chiplun in Ratnagiri district, Maharashtra. These regions represent a diverse landscape of coastal ecosystems, agriculture, settlements, and forest cover, making them ideal for multi-source satellite data analysis.",
  lat: "17.36° N – 17.92° N",
  lon: "73.03° E – 73.53° E",
  periodValue: "January 2024 – December 2024",
  periodSub: "(1 Year)",
  areaExtent: "~1,931 km²",
  objective: "To visualize and compare multi-source satellite datasets — Landsat 9, Sentinel-2, and MODIS NDVI — acquired over the calendar year 2024 for the study area, and to analyze how land cover, vegetation health, and surface dynamics appear across sensors of differing spatial resolution and revisit frequency within this single-year window.",
  note: "The area extent is approximate and based on the union of Dapoli, Khed and Chiplun talukas.",
  author: "Bhakti Kamble",
  programme: "M.Sc. Geoinformatics",
  semester: "Semester III",
  instituteShort: "BVIEER, Pune",
};

const ABOUT_STUDY_AREA = [
  {
    label: "Topography",
    text: "Coastal plains, hills and undulating terrain",
    icon: '<path d="M3 20 9 9l4 6 3-4 5 9H3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/>',
  },
  {
    label: "Land Cover",
    text: "Forests, agriculture, settlements, water bodies, roads and barren land",
    icon: '<path d="M12 3 6 11h3l-4 7h6v3h2v-3h6l-4-7h3L12 3Z" fill="currentColor"/>',
  },
  {
    label: "Climate",
    text: "Tropical monsoon with heavy rainfall (June – September)",
    icon: '<path d="M7 15a4 4 0 1 1 1.3-7.8A5 5 0 0 1 18 9a3.5 3.5 0 0 1-1 6.9H7Z" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linejoin="round"/><path d="M8 18v2M12 18v2M16 18v2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  },
  {
    label: "Relevance",
    text: "Supports environmental monitoring, land use planning, and natural resource management",
    icon: '<path d="M12 3c-4 3-5 7-5 10a5 5 0 0 0 10 0c0-3-1-7-5-10Z" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M12 13v8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  },
];

const DATASETS = [
  {
    id: "landsat",
    tab: "LANDSAT 9",
    name: "Landsat 9 Surface Reflectance",
    desc: "USGS/NASA Landsat 9 OLI-2 Collection 2 Level-2 surface reflectance composite over the region of interest.",
    accent: "#7c6fe0",
    appUrl: "https://kamble-ee.projects.earthengine.app/view/landsat-9",
    codeUrl: "https://code.earthengine.google.com/dfccc543989df33b49de271d19835338",
    fields: [
      ["Earth Engine Collection", "LANDSAT/LC09/C02/T1_L2"],
      ["Resolution", "30 m"],
      ["Date Range", "2024-01-01 → 2024-12-31"],
      ["Cloud Threshold", "20%"],
      ["Number of Images", "16"],
      ["Band Combination", "SR_B4 · SR_B3 · SR_B2"],
      ["Processing", "Cloud mask + median composite"],
      ["Visualization", "True colour composite"],
    ],
    legend: null,
    interpretation: "This slide displays a Landsat 9 OLI-2 surface reflectance composite built from a cloud-masked median of scenes acquired across 2024. At 30 m spatial resolution, the composite resolves broad terrain and land-cover units — coastline, ridgelines, drainage networks and settlement clusters — while remaining coarse enough to render efficiently over a large area of interest. The true-colour band combination (SR_B4, SR_B3, SR_B2) approximates natural surface colour, making it intuitive to interpret alongside the basemap. Because Landsat 9 revisits the same location only every 16 days, the annual compositing window is necessary to secure enough cloud-free observations; the resulting image count (16) reflects the number of scenes retained after the 20% cloud-cover filter. This dataset anchors the comparison as the long-running, moderate-resolution baseline against which the finer Sentinel-2 composite and the coarser MODIS vegetation index are evaluated."
  },
  {
    id: "sentinel",
    tab: "SENTINEL-2",
    name: "Sentinel-2 Surface Reflectance",
    desc: "ESA Copernicus Sentinel-2 harmonized surface reflectance composite over the region of interest.",
    accent: "#e5484d",
    appUrl: "https://kamble-ee.projects.earthengine.app/view/sentinel-2",
    codeUrl: "https://code.earthengine.google.com/17f382e5479c6d8567fae832a1fa8f72",
    fields: [
      ["Earth Engine Collection", "COPERNICUS/S2_SR_HARMONIZED"],
      ["Resolution", "10 m"],
      ["Date Range", "2024-01-01 → 2024-12-31"],
      ["Cloud Threshold", "20%"],
      ["Number of Images", "45"],
      ["Band Combination", "B4 · B3 · B2"],
      ["Processing", "Cloud mask + median composite"],
      ["Visualization", "True colour composite"],
    ],
    legend: null,
    interpretation: "This slide shows a Sentinel-2 MSI surface reflectance composite, built the same way as the Landsat panel — a cloud-masked median across the 2024 study period — but at 10 m resolution, roughly three times finer than Landsat 9. The higher revisit frequency of the twin Sentinel-2A/2B constellation yields far more usable scenes after cloud filtering, reflected in the larger image count (45) despite the same acquisition window and cloud threshold. At this resolution, finer terrain texture, individual forest patches, narrower river channels and smaller settlements become distinguishable in ways the coarser Landsat composite cannot resolve. The trade-off is a heavier per-pixel data volume and a shorter operational record, since Sentinel-2 has only been operating since 2015 compared with the multi-decade Landsat archive. Comparing this panel against the Landsat 9 slide illustrates the classic resolution-versus-continuity trade-off central to multi-sensor Earth observation."
  },
  {
    id: "modis",
    tab: "MODIS NDVI",
    name: "MODIS Vegetation Index",
    desc: "NASA MODIS 16-day Vegetation Indices product, classified into five NDVI-derived vegetation density classes.",
    accent: "#2f9e44",
    appUrl: "https://kamble-ee.projects.earthengine.app/view/modis-ndvi",
    codeUrl: "https://code.earthengine.google.com/c09adc2eccccabcbf82c103a062e27df",
    fields: [
      ["Earth Engine Collection", "MODIS/061/MOD13Q1"],
      ["Resolution", "250 m"],
      ["Date Range", "2024-01-01 → 2024-12-31"],
      ["Number of Images", "23"],
      ["Index", "NDVI (16-day composite)"],
      ["Processing", "Quality filtering + classification"],
      ["Visualization", "5-class NDVI density ramp"],
    ],
    legend: [
      ["Bare Soil / Built-up", "#d9c9a3"],
      ["Sparse Vegetation", "#ffeb3b"],
      ["Moderate Vegetation", "#ff9800"],
      ["Dense Vegetation", "#a5d6a7"],
      ["Very Dense Vegetation", "#4caf50"],
      ["Healthy Dense Vegetation", "#1b5e20"],
    ],
    interpretation: "This slide replaces true-colour imagery with a derived index: MODIS-based NDVI, classified into five vegetation-density classes from bare soil / built-up through to healthy dense vegetation. Unlike the two reflectance composites, MODIS trades spatial detail (250 m per pixel) for temporal density — the MOD13Q1 product delivers a new 16-day composite year-round, giving 23 images across the study period with minimal gaps from cloud cover. This makes MODIS NDVI far better suited to tracking vegetation vigour and seasonal change through time than to resolving fine spatial features. In this study area, the dominant classes are dense to very dense vegetation, consistent with the forested Western Ghats terrain visible in the higher-resolution panels, while sparser and moderate classes mark cleared or lower-canopy patches near the coast and settlements. Viewed alongside Landsat 9 and Sentinel-2, this panel demonstrates how coarse-resolution, high-frequency indices complement fine-resolution, low-frequency reflectance data in a multi-sensor monitoring workflow."
  },
];

/* =========================================================
   Render
   ========================================================= */
let current = 0;

function hexToRgba(hex, alpha){
  const h = hex.replace('#','');
  const r = parseInt(h.substring(0,2),16);
  const g = parseInt(h.substring(2,4),16);
  const b = parseInt(h.substring(4,6),16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function applyAccent(hex){
  const root = document.documentElement.style;
  root.setProperty('--accent', hex);
  root.setProperty('--accent-soft', hexToRgba(hex, 0.14));
  root.setProperty('--accent-line', hexToRgba(hex, 0.4));
}

function renderTabs(){
  const wrap = document.getElementById('sliderTabs');
  wrap.innerHTML = '';
  DATASETS.forEach((d, i) => {
    const btn = document.createElement('button');
    btn.className = 'tab' + (i === current ? ' active' : '');
    btn.textContent = d.tab;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', i === current ? 'true' : 'false');
    btn.addEventListener('click', () => goTo(i));
    wrap.appendChild(btn);
  });
}

function renderSlide(){
  const d = DATASETS[current];

  applyAccent(d.accent);

  document.getElementById('mapEmbed').src = d.appUrl;
  document.getElementById('codeLink').href = d.codeUrl;
  document.getElementById('openAppLink').href = d.appUrl;

  document.getElementById('infoDatasetName').textContent = d.name;
  document.getElementById('infoDatasetDesc').textContent = d.desc;

  const list = document.getElementById('infoList');
  list.innerHTML = '';
  d.fields.forEach(([label, value]) => {
    const row = document.createElement('div');
    row.innerHTML = `<dt>${label}</dt><dd>${value}</dd>`;
    list.appendChild(row);
  });

  const legendBlock = document.getElementById('legendBlock');
  const legendList = document.getElementById('legendList');
  if (d.legend){
    legendBlock.hidden = false;
    legendList.innerHTML = '';
    d.legend.forEach(([label, color]) => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="legend-swatch" style="background:${color}"></span>${label}`;
      legendList.appendChild(li);
    });
  } else {
    legendBlock.hidden = true;
  }

  document.getElementById('interpTitle').textContent = d.tab.replace(/\b\w/g, c => c) ;
  document.getElementById('interpTitle').textContent = d.name;
  document.getElementById('interpText').textContent = d.interpretation;

  const progress = document.getElementById('progressFill');
  progress.style.width = `${((current + 1) / DATASETS.length) * 100}%`;

  renderTabs();
}

function goTo(index){
  current = (index + DATASETS.length) % DATASETS.length;
  renderSlide();
}

document.getElementById('prevBtn').addEventListener('click', () => goTo(current - 1));
document.getElementById('nextBtn').addEventListener('click', () => goTo(current + 1));
document.getElementById('navOpenMap').addEventListener('click', () => {
  window.open(DATASETS[current].appUrl, '_blank', 'noopener');
});

/* =========================================================
   Site config injection
   ========================================================= */
document.getElementById('heroLocation') && (document.getElementById('heroLocation').innerHTML = SITE.locationShort);
document.getElementById('footerCredit').textContent = `© 2026 ${SITE.author} · ${SITE.programme} · ${SITE.instituteShort}`;

document.getElementById('cardAuthor').textContent = SITE.author;
document.getElementById('cardProgramme').textContent = SITE.programme;
document.getElementById('cardSemester').textContent = SITE.semester;
document.getElementById('cardInstitute').textContent = SITE.instituteShort;

document.getElementById('ctxIntro').textContent = SITE.intro;
document.getElementById('ctxStudyArea').innerHTML = SITE.locationShort;
document.getElementById('ctxStudyAreaSub').textContent = SITE.district;
document.getElementById('ctxLat').textContent = SITE.lat;
document.getElementById('ctxLon').textContent = SITE.lon;
document.getElementById('ctxPeriodLight').textContent = SITE.periodValue;
document.getElementById('ctxPeriodSub').textContent = SITE.periodSub;
document.getElementById('ctxExtent').textContent = SITE.areaExtent;
document.getElementById('ctxObjective').textContent = SITE.objective;
document.getElementById('ctxNote').textContent = SITE.note;

const aboutList = document.getElementById('aboutList');
aboutList.innerHTML = '';
ABOUT_STUDY_AREA.forEach(item => {
  const li = document.createElement('li');
  li.innerHTML = `<svg viewBox="0 0 24 24">${item.icon}</svg><div><strong>${item.label}</strong><span>${item.text}</span></div>`;
  aboutList.appendChild(li);
});

/* =========================================================
   Init
   ========================================================= */
renderSlide();
