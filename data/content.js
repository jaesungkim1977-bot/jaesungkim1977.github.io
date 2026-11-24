/*
 * 연구실 홈페이지 콘텐츠 데이터
 * ------------------------------------------------------------
 * 홈페이지의 모든 문구·목록은 이 파일 하나에서 수정합니다.
 * verified: false 인 항목은 화면에 "예시" 배지가 붙습니다.
 *   → 실제 자료로 바꾼 뒤 verified: true 로 바꾸면 배지가 사라집니다.
 * 출처 표기: IBRIC 브만사 BioLab 인터뷰(2024.07.22 등록)
 */
window.LAB_DATA = {
  /* 공개 설정: false 로 두면 "예시" 항목(연구주제 카드, 파이프라인, 수행과제, 예시 뉴스)을 숨깁니다 */
  site: { showExamples: false },

  lab: {
    nameKo: "혁신 항암신약 연구실",
    nameEn: "Innovative Anticancer Drug Discovery Lab",
    affiliation: "UST · 한국원자력의학원(KIRAMS)",
    tagline: "Cancer X",
    headline: "암세포만을 겨냥하는\n혁신 항암치료제",
    sub: "방사선의학과 표적치료를 잇는 First-in-class 항암신약 개발",
  },

  about: {
    verified: true,
    source: "IBRIC 인터뷰(2024) 기관·연구실 소개를 바탕으로 정리",
    text: [
      "한국원자력의학원은 방사선을 이용한 의학연구를 선도하는 정부출연 연구기관입니다. 혁신 항암신약 연구실은 UST(과학기술연합대학원대학교) 캠퍼스로서 학생 교육과 연구를 함께 수행합니다.",
      "항암·방사선 치료의 핵심 난제인 치료 내성과 정상조직 독성을 넘어서기 위해, 암세포에만 존재하는 특이적 표적을 발굴하고 이를 저해하는 혁신형(First-in-class) 치료제를 개발합니다.",
    ],
    stats: [
      { value: "2007~", label: "KIRAMS 연구 시작" },
      { value: "TRL 1–6", label: "기초 → 전임상 연계" },
      { value: "First-in-class", label: "신규 표적 치료제" },
    ],
  },

  /* 현재 비전. 세부 연구주제는 사용자 PPT 수령 후 교체 예정 */
  vision: {
    title: "Cancer X",
    statement:
      "정상세포는 지나치고 암세포만을 표적화하는 항암치료제. 치료 효과는 높이고 부작용은 줄이는 것이 목표입니다.",
  },

  research: [
    {
      verified: false,
      icon: "target",
      title: "암세포 특이 표적 발굴",
      en: "Cancer-specific Target Discovery",
      desc: "정상세포에는 없고 암세포에만 나타나는 취약점을 찾아 치료 표적으로 검증합니다.",
    },
    {
      verified: false,
      icon: "molecule",
      title: "First-in-class 표적치료제",
      en: "Novel Targeted Therapeutics",
      desc: "발굴한 표적에 대한 신규 저해제를 설계·최적화하고 전임상 효능을 평가합니다.",
    },
    {
      verified: false,
      icon: "radiation",
      title: "방사선 병용 치료 전략",
      en: "Radiation-combined Therapy",
      desc: "방사선 내성을 극복하고 항암면역을 높이는 병용 전략을 연구합니다.",
    },
    {
      verified: false,
      icon: "ai",
      title: "AI 기반 신약 설계",
      en: "AI-assisted Drug Design",
      desc: "AI 신약개발 기술과 공동연구로 후보물질 발굴 기간과 비용을 줄입니다.",
    },
  ],

  /* 파이프라인: 박사님 제공 "파이프라인.pptx" (Current Research) 기준.
   * stage 는 7단계 중 진행 위치(1~7, 소수 가능). 화살표 길이를 단계로 옮긴 값이라 필요하면 조정하세요. */
  pipeline: {
    verified: true,
    subtitle: "저분자 방사선 항암면역치료제 개발",
    note: "",
    stages: ["작용점 탐색", "유효물질 도출", "선도물질 도출·최적화", "후보물질 도출", "MOA·전임상", "연구용/허가용 비임상", "임상 (I–II)"],
    modalities: {
      sm: { label: "Small molecule", color: "#ff4d6d" },
      tpd: { label: "TPD", color: "#3b82f6" },
      protein: { label: "Protein drug", color: "#facc15" },
    },
    items: [
      { name: "MASTL", code: "MKI 시리즈", modality: ["sm"], stage: 2.75, status: "선도물질 최적화", partners: ["한국화학연구원(KRICT)", "국가신약개발재단(KDDF)"] },
      { name: "TEAD", modality: ["sm", "tpd"], stage: 2.75, status: "선도물질 최적화", partners: ["국가신약개발재단(KDDF)"] },
      { name: "NUAK1", modality: ["sm"], stage: 2.95, status: "선도물질 최적화", partners: ["국가신약개발재단(KDDF)"] },
      { name: "PCW", modality: ["sm"], stage: 2.15, status: "선도물질 도출", partners: ["한국화학연구원(KRICT)"] },
      { name: "HIF-2α", modality: ["sm"], stage: 2.15, status: "선도물질 도출", partners: ["한국화학연구원(KRICT)"] },
      { name: "ATTEC-1", modality: ["tpd"], stage: 1.45, status: "유효물질 도출", partners: [] },
      { name: "PI3Kδ/γ", code: "BR101801", modality: ["sm"], stage: 7, status: "임상 2상 (FDA)", partners: ["보령제약 (공동연구 적응증확장연구)"] },
      { name: "TNKS", code: "STP1002 (Basroparib)", modality: ["sm"], stage: 7, status: "임상 2상 (FDA)", partners: ["에스티팜 (공동연구 적응증 및 병용치료전략연구)"] },
      { name: "Albubody-LYTAC", modality: ["protein"], stage: 2.2, status: "선도물질 도출", partners: ["ProAbTech", "한국화학연구원(KRICT)"] },
    ],
  },

  /* 구성원·책임자. 사진은 images/ 폴더에 넣고 photo: "images/파일명.jpg" 로 지정하세요 */
  members: {
    verified: false,
    note: "구성원은 2024년 7월 IBRIC 인터뷰 기준입니다. 현재 구성원과 사진으로 업데이트가 필요합니다.",
    intro: "방사선의학과 항암신약 개발을 함께 연구하는 구성원들이 암세포만을 표적화하는 항암치료제라는 하나의 목표를 향해 연구합니다.",
    /* 출처: 박사님 CV (2026.10) */
    pi: {
      name: "김재성",
      nameEn: "Jae-Sung Kim, Ph.D.",
      title: "책임연구원, 한국원자력의학원 방사선의학연구소 · 교수(전임), UST",
      photo: "images/pi.jpg?v=3",
      email: "jaesung@kirams.re.kr",
      phone: "02-970-1669",
      greetingNote: "",
      greeting: [
        "혁신 항암신약 연구실에 오신 것을 환영합니다. 2007년부터 한국원자력의학원 방사선의학연구소에서 항암·방사선 치료 표적을 연구해 왔고, 2015년부터 UST 교수로 학생들과 함께하고 있습니다.",
        "치료 표적 발굴에서 치료제 개발까지 전주기 연구를 수행하며, 국가신약개발사업 과제 3건을 수행했습니다. 기술이전 2건과 기업 공동연구를 통해 임상 2상에 진입한 후보물질 2건이 나왔습니다.",
        "지금은 정상세포는 지나치고 암세포만을 표적화하는 Cancer X 치료제 개발에 집중하고 있습니다. 사회에 실질적으로 보탬이 되는 연구, 함께하는 구성원 모두의 성장에 도움이 되는 연구실을 지향합니다.",
      ],
      highlights: [
        { value: "48편", label: "항암·표적 발굴 논문 (최근 10년)" },
        { value: "2건", label: "치료제 기술이전" },
        { value: "2건", label: "공동개발 후보물질 임상 2상 진입" },
        { value: "3건", label: "국가신약개발사업 과제 수행" },
      ],
      interests: ["치료 표적 발굴·개발 전주기 연구", "AI 활용 항암·방사선 표적 발굴", "항암면역치료제 개발"],
      education: [
        { period: "2008", text: "Ph.D., 광주과학기술원(GIST)" },
        { period: "2003", text: "M.S., 광주과학기술원(GIST)" },
        { period: "2002", text: "B.S., 생물학과, 경북대학교" },
      ],
      career: [
        { period: "2024–현재", text: "이사, 방사선생명과학회" },
        { period: "2019–2024", text: "팀장, 표적치료팀, 한국원자력의학원 방사선의학연구소" },
        { period: "2015–현재", text: "교수(전임), 과학기술연합대학원대학교(UST)" },
        { period: "2007–현재", text: "책임연구원, 한국원자력의학원 방사선의학연구소" },
      ],
      /* 수상 내역을 받으면 채웁니다. 비어 있으면 화면에 표시하지 않습니다 */
      awards: [],
    },
    /* 직급(group) 순서대로 묶어서 표시합니다 */
    groups: ["Senior Researcher", "Postdoctoral Researcher", "Ph.D. Candidate", "M.S. Candidate", "Researcher"],
    people: [
      { name: "김동영", role: "선임연구원", group: "Senior Researcher", photo: "" },
      { name: "김윤아", role: "박사후연구원", group: "Postdoctoral Researcher", photo: "" },
      { name: "권영주", role: "박사과정", group: "Ph.D. Candidate", photo: "" },
      { name: "김예현", role: "박사과정", group: "Ph.D. Candidate", photo: "" },
    ],
    /* 예: { name: "홍길동", now: "현재 소속" } */
    alumni: [],
  },

  /* 논문 목록: 박사님 제공 엑셀(2026-11 기준)에서 제목·저널·연도·교신저자 여부만 반영 */
  publications: {
    verified: true,
    note: "",
    items: [
      {"year": 2026, "authors": "Kim JI, Kim YH, Pandit N, Lee KM, Chae CH, Kim D, Kim JS, Jung KY", "selected": true, "title": "Development of MKI-3: A Potent and Selective MASTL Inhibitor with Improved Efficacy for Cancer Treatment", "journal": "Journal of Medicinal Chemistry", "corresponding": true, "tags": ["표적치료제"]},
      {"year": 2026, "authors": "Kwon YJ, Kim DY, Kim Y, Kim UI, Kim JS", "selected": true, "title": "Basroparib inhibits YAP-driven cancers by stabilizing angiomotin", "journal": "Molecular Oncology", "corresponding": true, "tags": ["표적치료제"]},
      {"year": 2026, "authors": "Kim YH, Kim JS", "selected": true, "title": "Dual PI3Kδ/γ inhibition enhances radiotherapy-induced antitumor immunity via macrophage-dependent cGAS–STING–type I interferon signaling", "journal": "Biochemical and Biophysical Research Communications", "corresponding": true, "tags": ["방사선", "면역", "표적치료제"]},
      {"year": 2025, "authors": "Kwon YJ, Kim DY, Kim UI, Kim SH, Kim YH, Kim K, Kim JS", "selected": true, "title": "Basroparib overcomes acquired resistance to MEK inhibitors by inhibiting Wnt-mediated cancer stemness in KRAS-mutated colorectal cancer", "journal": "Biochemical Pharmacology", "corresponding": true, "tags": ["표적치료제", "내성"]},
      {"year": 2024, "title": "Glutaminase-1 inhibition alleviates senescence of Wharton’s jelly-derived mesenchymal stem cells via senolysis", "journal": "Stem Cells Translational Medicine", "corresponding": false, "tags": ["표적치료제"]},
      {"year": 2024, "title": "Activity-based protein profiling and global proteome analysis reveal MASTL as a potential therapeutic target in gastric cancer", "journal": "Cell Communication and Signaling", "corresponding": false, "tags": []},
      {"year": 2023, "authors": "Kim S, Jun K, Kim YH, Jung KY, Oh JS, Kim JS", "selected": true, "title": "Endosulfine alpha maintains spindle pole integrity by recruiting Aurora A during mitosis", "journal": "BMC Cancer", "corresponding": true, "tags": ["유사분열·중심체"]},
      {"year": 2023, "title": "Oocytes can repair DNA damage during meiosis via a microtubule-dependent recruitment of CIP2A-MDC1-TOPBP1 complex from spindle pole to chromosomes", "journal": "Nucleic Acids Research", "corresponding": false, "tags": ["유사분열·중심체", "난자 모델"]},
      {"year": 2022, "title": "Centrosome de-clustering of cancer cells induces cGAS-STING-mediated innate immunity of tumor-associated tumor cells in response to irradiation", "journal": "Biochemical and Biophysical Research Communications", "corresponding": true, "tags": ["방사선", "면역", "유사분열·중심체"]},
      {"year": 2022, "title": "PCW-A1001, AI-assisted de novo design approach to design a selective inhibitor for FLT-3(D835Y) in acute myeloid leukemia", "journal": "Frontiers in Molecular Biosciences", "corresponding": true, "tags": ["표적치료제", "AI 신약"]},
      {"year": 2022, "title": "Dynamic alterations in PD-1/PD-L1 expression level and immune cell profiles based on radiation response status in mouse tumor model", "journal": "Frontiers in Oncology", "corresponding": true, "tags": ["방사선", "면역"]},
      {"year": 2022, "authors": "Kim DY, Kwon YJ, Seo WY, Kim UI, Ahn S, Choi SM, Bang HT, Kim K, Kim JS", "selected": true, "title": "Tankyrase-selective inhibitor STP1002 shows preclinical antitumour efficacy without on-target toxicity in the gastrointestinal tract", "journal": "European Journal of Cancer", "corresponding": true, "tags": ["표적치료제"]},
      {"year": 2022, "title": "ROS-independent cytotoxicity of 9,10-phenanthrenequinone inhibits cell cycle progression and spindle assembly during meiotic maturation in mouse oocytes", "journal": "Journal of Hazardous Materials", "corresponding": false, "tags": ["표적치료제", "유사분열·중심체", "난자 모델"]},
      {"year": 2022, "authors": "Kim S, Leem J, Oh JS, Kim JS", "selected": true, "title": "Cytotoxicity of 9,10-Phenanthrenequinone Impairs Mitotic Progression and Spindle Assembly Independent of ROS Production in HeLa Cells", "journal": "Toxics", "corresponding": true, "tags": ["유사분열·중심체"]},
      {"year": 2022, "authors": "Yoon YN, Lee E, Kwon YJ, Gim JA, Kim TJ, Kim JS", "selected": true, "title": "PI3Kδ/γ inhibitor BR101801 extrinsically potentiates effector CD8+ T cell-dependent antitumor immunity and abscopal effect after local irradiation", "journal": "Journal for Immunotherapy of Cancer", "corresponding": true, "tags": ["방사선", "면역", "표적치료제"]},
      {"year": 2022, "authors": "Kang M, Pandit N, Kim AY, Cho SJ, Kwon YJ, Ahn J, Lee KM, Wu S, Oh JS, Jung KY, Kim JS", "selected": true, "title": "PCW-1001, a Novel Pyrazole Derivative, Exerts Antitumor and Radio-Sensitizing Activities in Breast Cancer", "journal": "Frontiers in Oncology", "corresponding": true, "tags": ["방사선", "표적치료제"]},
      {"year": 2022, "title": "A novel function of HRP-3 in regulating cell cycle progression via the HDAC–E2F1–Cyclin E pathway in lung cancer", "journal": "Cancer Science", "corresponding": false, "tags": []},
      {"year": 2022, "title": "TCTP overexpression reverses age-associated telomere attrition by upregulating telomerase activity in mouse oocytes", "journal": "Journal of Cellular Physiology", "corresponding": true, "tags": ["난자 모델"]},
      {"year": 2021, "authors": "Kang M, Kim C, Leem J, Kim YH, Kwon YJ, Yoon YN, Chae CH, Ahn J, Jung KY, Oh JS, Kim JS", "selected": true, "title": "Discovery and Characterization of a Novel MASTL Inhibitor MKI-2 Targeting MASTL-PP2A in Breast Cancer Cells and Oocytes", "journal": "Pharmaceuticals", "corresponding": true, "tags": ["표적치료제", "난자 모델"]},
      {"year": 2021, "title": "Discovery of a Novel Triazolopyridine Derivative as a Tankyrase Inhibitor", "journal": "International Journal of Molecular Sciences", "corresponding": false, "tags": ["표적치료제"]},
      {"year": 2021, "title": "Radiation-induced IL-1β expression and secretion promote cancer cell migration/invasion via activation of the NF-κB–RIP1 pathway", "journal": "Biochemical and Biophysical Research Communications", "corresponding": false, "tags": ["방사선"]},
      {"year": 2020, "authors": "Kim Y, Yoon YN, Leem J, Lee J, Jung K, Kang M, Ahn J, Hwang S, Oh JS, Kim JS", "selected": true, "title": "MKI-1, a novel small-molecule inhibitor of MASTL, exerts antitumor and radiosensitizer activities through PP2A activation in breast cancer", "journal": "Frontiers in Oncology", "corresponding": true, "tags": ["방사선", "표적치료제"]},
      {"year": 2020, "authors": "Bai GY, Choe MH, Kim JS, Oh JS", "selected": true, "title": "Mis12 controls cyclin B1 stabilization via Cdc14B-mediated APC/C-Cdh1 regulation during meiotic G2/M transition in mouse oocytes", "journal": "Development", "corresponding": true, "tags": ["난자 모델"]},
      {"year": 2020, "title": "Kinesin light chain 4 as a new target for lung cancer chemoresistance via targeted inhibition of checkpoint kinases in the DNA repair network", "journal": "Cell Death & Disease", "corresponding": false, "tags": ["표적치료제", "내성"]},
      {"year": 2020, "title": "Barium Titanate Nanoparticles Sensitise Treatment-Resistant Breast Cancer Cells to the Antitumor Action of Tumour-Treating Fields", "journal": "Scientific Reports", "corresponding": true, "tags": ["내성"]},
      {"year": 2020, "authors": "Choi J, Yoon YN, Kim N, Park CS, Seol H, Park IC, Kim HA, Noh WC, Kim JS, Seong MK", "selected": true, "title": "Predicting Radiation Resistance in Breast Cancer with Expression Status of Phosphorylated S6K1", "journal": "Scientific Reports", "corresponding": true, "tags": ["방사선", "내성"]},
      {"year": 2019, "title": "Prevention of quality decline and delivery of siRNA using exogenous TCTP translocation across the zona pellucida in mouse oocytes", "journal": "Scientific Reports", "corresponding": true, "tags": ["난자 모델"]},
      {"year": 2019, "authors": "Leem J, Bai GY, Kim JS, Oh JS", "selected": true, "title": "Melatonin protects mouse oocytes from DNA damage by enhancing nonhomologous end-joining repair", "journal": "Journal of Pineal Research", "corresponding": true, "tags": ["난자 모델"]},
      {"year": 2019, "title": "A Small Compound KJ-28d Enhances the Sensitivity of Non-Small Cell Lung Cancer to Radio- and Chemotherapy", "journal": "International Journal of Molecular Sciences", "corresponding": false, "tags": ["방사선", "표적치료제"]},
      {"year": 2019, "title": "Zw10 is a spindle assembly checkpoint protein that regulates meiotic maturation in mouse oocytes", "journal": "Histochemistry and Cell Biology", "corresponding": true, "tags": ["유사분열·중심체", "난자 모델"]},
      {"year": 2019, "title": "Antitumor Activity of a Novel Tyrosine Kinase Inhibitor AIU2001 Due to Abrogation of the DNA Damage Repair in Non-Small Cell Lung Cancer Cells", "journal": "International Journal of Molecular Sciences", "corresponding": false, "tags": ["표적치료제"]},
      {"year": 2019, "title": "pS6K1 as an efficacy marker of GnRH agonist with premenopausal breast cancer", "journal": "Endocrine Connections", "corresponding": false, "tags": []},
      {"year": 2019, "title": "PLOD3 suppression exerts an anti-tumor effect on human lung cancer cells by modulating the PKC-delta signaling pathway", "journal": "Cell Death & Disease", "corresponding": false, "tags": []},
      {"year": 2018, "title": "PLOD3 promotes lung metastasis via regulation of STAT3", "journal": "Cell Death & Disease", "corresponding": false, "tags": []},
      {"year": 2018, "title": "WIP1 phosphatase suppresses the DNA damage response during G2/prophase arrest in mouse oocytes", "journal": "Biology of Reproduction", "corresponding": false, "tags": ["난자 모델"]},
      {"year": 2018, "title": "Post-chemotherapy serum anti-Mullerian hormone level predicts ovarian function recovery", "journal": "Endocrine Connections", "corresponding": false, "tags": []},
      {"year": 2018, "title": "MASTL inhibition promotes mitotic catastrophe through PP2A activation to inhibit cancer growth and radioresistance in breast cancer cells", "journal": "BMC Cancer", "corresponding": true, "tags": ["방사선", "표적치료제", "유사분열·중심체"]},
      {"year": 2018, "title": "Centrosome clustering is a tumor-selective target for the improvement of radiotherapy in breast cancer cells", "journal": "Anticancer Research", "corresponding": true, "tags": ["방사선", "유사분열·중심체"]},
      {"year": 2018, "authors": "Choe MH, Yoon Y, Kim J, Hwang SG, Han YH, Kim JS", "selected": true, "title": "miR-550a-3-5p acts as a tumor suppressor and reverses BRAF inhibitor resistance through the direct targeting of YAP", "journal": "Cell Death & Disease", "corresponding": true, "tags": ["표적치료제", "내성"]},
      {"year": 2018, "title": "Knockdown of end-binding protein 1 induces apoptosis in radioresistant A549 lung cancer cells via p38 kinase-dependent COX-2 upregulation", "journal": "Oncology Reports", "corresponding": false, "tags": ["방사선", "내성"]},
      {"year": 2017, "title": "Breast cancer stem cells in HER2-negative breast cancer cells contribute to HER2-mediated radioresistance and molecular subtype conversion: clinical implications for serum HER2 in recurrent HER2-negative breast cancer", "journal": "Oncotarget", "corresponding": true, "tags": ["방사선", "내성"]},
      {"year": 2017, "title": "The Small Molecule AU14022 Promotes Colorectal Cancer Cell Death via p53-mediated G2/M-phase Arrest and Mitochondria-mediated Apoptosis", "journal": "Journal of Cellular Physiology", "corresponding": false, "tags": ["표적치료제"]},
      {"year": 2017, "title": "CIP2A acts as a scaffold for CEP192-mediated MTOC assembly by recruiting Plk1 and Aurora A during meiotic maturation", "journal": "Development", "corresponding": true, "tags": ["유사분열·중심체", "난자 모델"]},
      {"year": 2017, "title": "Antihelminthic drug niclosamide inhibits CIP2A and reactivates tumor suppressor protein phosphatase 2A in non-small cell lung cancer cells", "journal": "Biochemical Pharmacology", "corresponding": true, "tags": ["표적치료제"]},
      {"year": 2017, "title": "Peroxiredoxins are required for spindle assembly, chromosome organization, and polarization in mouse oocytes", "journal": "Biochemical and Biophysical Research Communications", "corresponding": false, "tags": ["유사분열·중심체", "난자 모델"]},
      {"year": 2017, "title": "TCTP regulates spindle assembly during postovulatory aging and prevents deterioration in mouse oocyte quality", "journal": "Biochim Biophys Acta Mol Cell Biol Lipids", "corresponding": false, "tags": ["유사분열·중심체", "난자 모델"]},
    ],
  },

  /* NTIS 수행과제. 아래는 모두 형식 예시입니다. NTIS 과제 목록을 받으면 교체 */
  projects: {
    verified: false,
    note: "아래 과제는 표시 형식 예시입니다. NTIS(ntis.go.kr) 과제 목록으로 교체가 필요합니다.",
    items: [
      { title: "암세포 특이 표적 기반 First-in-class 항암제 개발 (예시)", agency: "과학기술정보통신부 / 한국연구재단", program: "중견연구 (예시)", period: "2025.03 – 2028.02", role: "연구책임자", status: "진행" },
      { title: "방사선 병용 저분자 항암면역치료제 전임상 연구 (예시)", agency: "보건복지부 / 한국보건산업진흥원", program: "국가신약개발사업 (예시)", period: "2024.04 – 2026.12", role: "연구책임자", status: "진행" },
      { title: "AI 기반 내성 표적 저해제 발굴 (예시)", agency: "과학기술정보통신부", program: "기관고유사업 (예시)", period: "2021.01 – 2023.12", role: "참여", status: "종료" },
    ],
  },

  /* 연구 뉴스: 구글 뉴스 검색 '한국원자력의학원 김재성' 결과를 기사 원문으로 확인해 정리 (2026-11-24) */
  news: {
    verified: true,
    note: "",
    items: [
      {"date": "2026-03", "category": "Research", "title": "난치성 삼중음성유방암 표적 신약 후보물질 'MKI-3' 개발", "body": "한국화학연구원 정관령 박사팀과 공동으로 MASTL을 표적으로 하는 항암 신약 후보물질을 개발했습니다. (J Med Chem)", "source": "헬로디디", "link": "https://www.hellodd.com/news/articleView.html?idxno=111250", "verified": true},
      {"date": "2026-02", "category": "Research", "title": "에스티팜과 난치성 대장암 치료 전략·환자 선별 기준 제시", "body": "KRAS 변이 대장암을 대상으로 한 공동 전임상 연구로 새 치료 전략과 환자 선별 기준을 제시했습니다.", "source": "사이언스타임즈(연합뉴스)", "link": "https://www.sciencetimes.co.kr/nscvrg/view/menu/251?searchCategory=223&nscvrgSn=261412", "verified": true},
      {"date": "2024-07", "category": "Media", "title": "BRIC 브만사 BioLab 인터뷰 게재", "body": "UST/한국원자력의학원 혁신 항암신약 연구실 소개.", "source": "BRIC", "link": "https://www.ibric.org/bric/interview/biolab.do?mode=view&articleNo=9913868", "verified": true},
      {"date": "2022-04", "category": "Event", "title": "방사선의학연구소 우수 연구성과 발표", "body": "'방사선병용 저분자 항암면역치료제 개발' 성과를 발표했습니다.", "source": "청년의사", "link": "http://www.docdocdoc.co.kr/news/articleView.html?idxno=2022348", "verified": true},
      {"date": "2022-03", "category": "Research", "title": "방사선치료와 표적항암치료 병용으로 전이암까지 억제", "body": "PI3Kδ/γ 저해제 병용 시 면역억제세포가 줄고 방사선을 쬐지 않은 원격 종양까지 억제되는 효과를 확인했습니다. (J Immunother Cancer)", "source": "연합뉴스 외", "link": "https://www.google.com/search?tbm=nws&q=%EA%B9%80%EC%9E%AC%EC%84%B1%20%EB%B0%A9%EC%82%AC%EC%84%A0%20%EC%B9%98%EB%A3%8C%EC%99%80%20%ED%91%9C%EC%A0%81%ED%95%AD%EC%95%94%EC%B9%98%EB%A3%8C%20%EB%B3%91%EC%9A%A9%ED%95%B4%20%EC%A0%84%EC%9D%B4%EC%95%94%EA%B9%8C%EC%A7%80%20%EC%A0%9C%EA%B1%B0", "verified": true},
      {"date": "2020-08", "category": "MOU", "title": "AI 신약개발기업 팜캐드와 기술사업화 협약", "body": "저분자 화합물의 타깃 단백질 발굴·검증과 기술이전을 위한 협력을 체결했습니다.", "source": "데이터넷", "link": "http://www.datanet.co.kr/news/articleView.html?idxno=150135", "verified": true},
      {"date": "2020-02", "category": "Research", "title": "ETRI와 '입는 전기장 암 치료기' 공동 개발 착수", "body": "한국전자통신연구원 박형주 박사팀과 옷처럼 입는 전기장 암 치료 기술 개발에 나섰습니다.", "source": "전기신문", "link": "https://www.electimes.com/news/articleView.html?idxno=194508", "verified": true},
      {"date": "2020-01", "category": "Research", "title": "방사선치료 효과가 낮은 유방암 환자 예측 지표 개발", "body": "성민기 박사팀과 함께 수술 후 방사선치료가 잘 듣지 않는 유방암 환자를 미리 가려낼 수 있는 지표를 제시했습니다. (Sci Rep)", "source": "서울경제", "link": "https://www.sedaily.com/article/12554242", "verified": true},
      {"date": "2018-06", "category": "Research", "title": "종양 증식을 억제하는 microRNA 발견", "body": "암세포 증식을 억제하고 표적 항암제 내성을 조절하는 microRNA를 보고했습니다.", "source": "의학신문", "link": "https://www.google.com/search?tbm=nws&q=%EC%A2%85%EC%96%91%20%EC%A6%9D%EC%8B%9D%20%EC%96%B5%EC%A0%9C%20microRNA%20%EC%84%B8%EA%B3%84%EC%B5%9C%EC%B4%88%20%EB%B0%9C%EA%B2%AC%20%EC%9B%90%EC%9E%90%EB%A0%A5%EC%9D%98%ED%95%99%EC%9B%90", "verified": true},
      {"date": "2016-02", "category": "Research", "title": "유방암 재발 가능성 예측 분자진단 지표 개발", "body": "원자력병원 유방암 환자 1,693명을 15년간 추적해 재발 위험을 미리 알 수 있는 지표를 제시했습니다.", "source": "동아사이언스", "link": "https://www.google.com/search?tbm=nws&q=%EC%97%AC%EC%84%B1%EC%95%94%201%EC%9C%84%20%EC%9C%A0%EB%B0%A9%EC%95%94%20%EC%B9%98%EB%A3%8C%20%ED%9B%84%20%EC%9E%AC%EB%B0%9C%20%EA%B0%80%EB%8A%A5%EC%84%B1%20%EB%AF%B8%EB%A6%AC%20%ED%99%95%EC%9D%B8%20%EC%9B%90%EC%9E%90%EB%A0%A5%EC%9D%98%ED%95%99%EC%9B%90", "verified": true},
    ],
  },

  contact: {
    verified: false,
    note: "주소는 한국원자력의학원 대표 주소입니다. 연구동·호실을 확인해 주세요.",
    email: "jaesung@kirams.re.kr",
    address: "서울특별시 노원구 노원로 75 한국원자력의학원",
    recruit: "UST 석·박사 과정 및 박사후연구원 지원을 환영합니다. 관심 연구 분야와 CV를 이메일로 보내 주세요.",
  },
};
