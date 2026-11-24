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

  pipeline: {
    verified: false,
    note: "파이프라인 단계는 예시입니다. 실제 과제/후보물질 정보로 교체하세요.",
    stages: ["표적 발굴", "후보 도출", "선도 최적화", "전임상", "임상"],
    items: [
      { name: "Cancer X 프로그램 A", target: "암 특이 표적 (예시)", stage: 3 },
      { name: "Cancer X 프로그램 B", target: "방사선 병용 (예시)", stage: 2 },
      { name: "Cancer X 프로그램 C", target: "AI 설계 저분자 (예시)", stage: 1 },
    ],
  },

  members: {
    verified: false,
    note: "구성원은 2024년 7월 IBRIC 인터뷰 기준입니다. 현재 구성원과 사진으로 업데이트가 필요합니다.",
    pi: {
      name: "김재성",
      nameEn: "Jae-Sung Kim, Ph.D.",
      title: "책임연구원 · UST 교수",
      email: "jaesung@kirams.re.kr",
      education: [
        "2008 박사, 광주과학기술원(GIST) 분자생물학",
        "2003 석사, 광주과학기술원(GIST) 분자생물학",
        "2002 학사, 경북대학교 생명과학",
      ],
      career: [
        "2014–현재 UST 교수(전임)",
        "2007–현재 한국원자력의학원 책임연구원",
        "2003–2007 광주과학기술원 나노연구소 연구원",
      ],
    },
    people: [
      { name: "김동영", role: "선임연구원" },
      { name: "김윤아", role: "박사후연구원" },
      { name: "권영주", role: "박사과정" },
      { name: "김예현", role: "박사과정" },
    ],
  },

  /* 논문 목록: 박사님 제공 엑셀(2026-11 기준)에서 제목·저널·연도·교신저자 여부만 반영 */
  publications: {
    verified: true,
    note: "",
    items: [
      {"year": 2026, "title": "Development of MKI-3: A Potent and Selective MASTL Inhibitor with Improved Efficacy for Cancer Treatment", "journal": "Journal of Medicinal Chemistry", "corresponding": true, "tags": ["표적치료제"]},
      {"year": 2026, "title": "Basroparib inhibits YAP-driven cancers by stabilizing angiomotin", "journal": "Molecular Oncology", "corresponding": true, "tags": ["표적치료제"]},
      {"year": 2026, "title": "Dual PI3Kδ/γ inhibition enhances radiotherapy-induced antitumor immunity via macrophage-dependent cGAS–STING–type I interferon signaling", "journal": "Biochemical and Biophysical Research Communications", "corresponding": true, "tags": ["방사선", "면역", "표적치료제"]},
      {"year": 2025, "title": "Basroparib overcomes acquired resistance to MEK inhibitors by inhibiting Wnt-mediated cancer stemness in KRAS-mutated colorectal cancer", "journal": "Biochemical Pharmacology", "corresponding": true, "tags": ["표적치료제", "내성"]},
      {"year": 2024, "title": "Glutaminase-1 inhibition alleviates senescence of Wharton’s jelly-derived mesenchymal stem cells via senolysis", "journal": "Stem Cells Translational Medicine", "corresponding": false, "tags": ["표적치료제"]},
      {"year": 2024, "title": "Activity-based protein profiling and global proteome analysis reveal MASTL as a potential therapeutic target in gastric cancer", "journal": "Cell Communication and Signaling", "corresponding": false, "tags": []},
      {"year": 2023, "title": "Endosulfine alpha maintains spindle pole integrity by recruiting Aurora A during mitosis", "journal": "BMC Cancer", "corresponding": true, "tags": ["유사분열·중심체"]},
      {"year": 2023, "title": "Oocytes can repair DNA damage during meiosis via a microtubule-dependent recruitment of CIP2A-MDC1-TOPBP1 complex from spindle pole to chromosomes", "journal": "Nucleic Acids Research", "corresponding": false, "tags": ["유사분열·중심체", "난자 모델"]},
      {"year": 2022, "title": "Centrosome de-clustering of cancer cells induces cGAS-STING-mediated innate immunity of tumor-associated tumor cells in response to irradiation", "journal": "Biochemical and Biophysical Research Communications", "corresponding": true, "tags": ["방사선", "면역", "유사분열·중심체"]},
      {"year": 2022, "title": "PCW-A1001, AI-assisted de novo design approach to design a selective inhibitor for FLT-3(D835Y) in acute myeloid leukemia", "journal": "Frontiers in Molecular Biosciences", "corresponding": true, "tags": ["표적치료제", "AI 신약"]},
      {"year": 2022, "title": "Dynamic alterations in PD-1/PD-L1 expression level and immune cell profiles based on radiation response status in mouse tumor model", "journal": "Frontiers in Oncology", "corresponding": true, "tags": ["방사선", "면역"]},
      {"year": 2022, "title": "Tankyrase-selective inhibitor STP1002 shows preclinical antitumour efficacy without on-target toxicity in the gastrointestinal tract", "journal": "European Journal of Cancer", "corresponding": true, "tags": ["표적치료제"]},
      {"year": 2022, "title": "ROS-independent cytotoxicity of 9,10-phenanthrenequinone inhibits cell cycle progression and spindle assembly during meiotic maturation in mouse oocytes", "journal": "Journal of Hazardous Materials", "corresponding": false, "tags": ["표적치료제", "유사분열·중심체", "난자 모델"]},
      {"year": 2022, "title": "Cytotoxicity of 9,10-Phenanthrenequinone Impairs Mitotic Progression and Spindle Assembly Independent of ROS Production in HeLa Cells", "journal": "Toxics", "corresponding": true, "tags": ["유사분열·중심체"]},
      {"year": 2022, "title": "PI3Kδ/γ inhibitor BR101801 extrinsically potentiates effector CD8+ T cell-dependent antitumor immunity and abscopal effect after local irradiation", "journal": "Journal for Immunotherapy of Cancer", "corresponding": true, "tags": ["방사선", "면역", "표적치료제"]},
      {"year": 2022, "title": "PCW-1001, a Novel Pyrazole Derivative, Exerts Antitumor and Radio-Sensitizing Activities in Breast Cancer", "journal": "Frontiers in Oncology", "corresponding": true, "tags": ["방사선", "표적치료제"]},
      {"year": 2022, "title": "A novel function of HRP-3 in regulating cell cycle progression via the HDAC–E2F1–Cyclin E pathway in lung cancer", "journal": "Cancer Science", "corresponding": false, "tags": []},
      {"year": 2022, "title": "TCTP overexpression reverses age-associated telomere attrition by upregulating telomerase activity in mouse oocytes", "journal": "Journal of Cellular Physiology", "corresponding": true, "tags": ["난자 모델"]},
      {"year": 2021, "title": "Discovery and Characterization of a Novel MASTL Inhibitor MKI-2 Targeting MASTL-PP2A in Breast Cancer Cells and Oocytes", "journal": "Pharmaceuticals", "corresponding": true, "tags": ["표적치료제", "난자 모델"]},
      {"year": 2021, "title": "Discovery of a Novel Triazolopyridine Derivative as a Tankyrase Inhibitor", "journal": "International Journal of Molecular Sciences", "corresponding": false, "tags": ["표적치료제"]},
      {"year": 2021, "title": "Radiation-induced IL-1β expression and secretion promote cancer cell migration/invasion via activation of the NF-κB–RIP1 pathway", "journal": "Biochemical and Biophysical Research Communications", "corresponding": false, "tags": ["방사선"]},
      {"year": 2020, "title": "MKI-1, a novel small-molecule inhibitor of MASTL, exerts antitumor and radiosensitizer activities through PP2A activation in breast cancer", "journal": "Frontiers in Oncology", "corresponding": true, "tags": ["방사선", "표적치료제"]},
      {"year": 2020, "title": "Mis12 controls cyclin B1 stabilization via Cdc14B-mediated APC/C-Cdh1 regulation during meiotic G2/M transition in mouse oocytes", "journal": "Development", "corresponding": true, "tags": ["난자 모델"]},
      {"year": 2020, "title": "Kinesin light chain 4 as a new target for lung cancer chemoresistance via targeted inhibition of checkpoint kinases in the DNA repair network", "journal": "Cell Death & Disease", "corresponding": false, "tags": ["표적치료제", "내성"]},
      {"year": 2020, "title": "Barium Titanate Nanoparticles Sensitise Treatment-Resistant Breast Cancer Cells to the Antitumor Action of Tumour-Treating Fields", "journal": "Scientific Reports", "corresponding": true, "tags": ["내성"]},
      {"year": 2020, "title": "Predicting Radiation Resistance in Breast Cancer with Expression Status of Phosphorylated S6K1", "journal": "Scientific Reports", "corresponding": true, "tags": ["방사선", "내성"]},
      {"year": 2019, "title": "Prevention of quality decline and delivery of siRNA using exogenous TCTP translocation across the zona pellucida in mouse oocytes", "journal": "Scientific Reports", "corresponding": true, "tags": ["난자 모델"]},
      {"year": 2019, "title": "Melatonin protects mouse oocytes from DNA damage by enhancing nonhomologous end-joining repair", "journal": "Journal of Pineal Research", "corresponding": true, "tags": ["난자 모델"]},
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
      {"year": 2018, "title": "miR-550a-3-5p acts as a tumor suppressor and reverses BRAF inhibitor resistance through the direct targeting of YAP", "journal": "Cell Death & Disease", "corresponding": true, "tags": ["표적치료제", "내성"]},
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

  news: {
    verified: false,
    note: "뉴스는 예시입니다. 실제 소식으로 교체하세요.",
    items: [
      { date: "2026-11", category: "Notice", title: "연구실 홈페이지를 새로 열었습니다", body: "Cancer X 비전과 연구 소식을 이곳에서 전합니다." },
      { date: "2024-07", category: "Media", title: "BRIC 브만사 BioLab 인터뷰 게재", body: "UST/한국원자력의학원 혁신 항암신약 연구실 소개.", link: "https://www.ibric.org/bric/interview/biolab.do?mode=view&articleNo=9913868", verified: true },
      { date: "YYYY-MM", category: "Award", title: "학회 수상 소식 (예시)", body: "수상 내용과 학회명을 입력하세요." },
      { date: "YYYY-MM", category: "Recruit", title: "석·박사 통합과정 / 박사후연구원 모집 (예시)", body: "UST 입학 일정에 맞춰 모집 공고를 게시하세요." },
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
