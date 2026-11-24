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

  /* IBRIC 인터뷰에 게재된 2019–2022 대표 논문. 저자·DOI·최신 논문은 추가 필요 */
  publications: {
    verified: true,
    note: "2019–2022 대표 논문(IBRIC 인터뷰 게재 목록). 2023년 이후 논문과 저자·DOI 정보 추가가 필요합니다.",
    items: [
      { year: 2022, title: "Tankyrase-selective inhibitor STP1002 shows preclinical antitumour efficacy without on-target toxicity in the gastrointestinal tract", journal: "Eur J Cancer", tags: ["표적치료제"] },
      { year: 2022, title: "PCW-A1001, AI-assisted de novo design approach to design a selective inhibitor for FLT-3(D835Y) in acute myeloid leukemia", journal: "Front Mol Biosci", tags: ["AI 신약"] },
      { year: 2022, title: "Dynamic alterations in PD-1/PD-L1 expression level and immune cell profiles based on radiation response status in mouse tumor model", journal: "Front Oncol", tags: ["방사선", "면역"] },
      { year: 2022, title: "Centrosome de-clustering of cancer cells induces cGAS-STING-mediated innate immunity of tumor-associated tumor cells in response to irradiation", journal: "Biochem Biophys Res Commun", tags: ["암 특이 표적", "방사선"] },
      { year: 2022, title: "PI3Kδ/γ inhibitor BR101801 extrinsically potentiates effector CD8+ T cell-dependent antitumor immunity and abscopal effect after local irradiation", journal: "J Immunother Cancer", tags: ["면역", "방사선"] },
      { year: 2022, title: "PCW-1001, a Novel Pyrazole Derivative, Exerts Antitumor and Radio-Sensitizing Activities in Breast Cancer", journal: "Front Oncol", tags: ["표적치료제", "방사선"] },
      { year: 2022, title: "Cytotoxicity of 9,10-Phenanthrenequinone Impairs Mitotic Progression and Spindle Assembly Independent of ROS Production in HeLa Cells", journal: "Toxics", tags: ["유사분열"] },
      { year: 2022, title: "TCTP overexpression reverses age-associated telomere attrition by upregulating telomerase activity in mouse oocytes", journal: "J Cell Physiol", tags: ["난자 모델"] },
      { year: 2021, title: "Discovery and Characterization of a Novel MASTL Inhibitor MKI-2 Targeting MASTL-PP2A in Breast Cancer Cells and Oocytes", journal: "Pharmaceuticals (Basel)", tags: ["표적치료제", "난자 모델"] },
      { year: 2020, title: "MKI-1, a novel small-molecule inhibitor of MASTL, exerts antitumor and radiosensitizer activities through PP2A activation in breast cancer", journal: "Front Oncol", tags: ["표적치료제", "방사선"] },
      { year: 2020, title: "Mis12 controls cyclin B1 stabilization via Cdc14B-mediated APC/C-Cdh1 regulation during meiotic G2/M transition in mouse oocytes", journal: "Development", tags: ["난자 모델"] },
      { year: 2020, title: "Barium Titanate Nanoparticles Sensitise Treatment-Resistant Breast Cancer Cells to the Antitumor Action of Tumour-Treating Fields", journal: "Sci Rep", tags: ["내성"] },
      { year: 2020, title: "Predicting Radiation Resistance in Breast Cancer with Expression Status of Phosphorylated S6K1", journal: "Sci Rep", tags: ["방사선", "내성"] },
      { year: 2019, title: "Melatonin protects mouse from DNA damage by enhancing nonhomologous end-joining repair", journal: "J Pineal Res", tags: ["방사선"] },
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
