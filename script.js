const HERO_TITLE = "作品紹介";
const HERO_NAME = "山形　将志";

// 画像の入れ方:
// - 画像ファイルは assets/images/ に配置する。
// - カード用は thumbSrc/thumbAlt、モーダル用は pages[].imageSrc/imageAlt を設定する。
// - githubUrl/githubPagesUrl を設定するとモーダル下部にリンクとして表示される。
// - src が空、または画像読み込みに失敗した場合は自動で代替表示になる。
const WORKS = [
  {
    id: "work-1",
    title: "3-Taps!",
    thumbSrc: "assets/images/work-1-thumb.jpg",
    thumbAlt: "3-Taps! thumbnail",
    githubUrl: "https://github.com/anko-kitubu/3-Taps",
    githubPagesUrl: "https://anko-kitubu.github.io/3-Taps/",
    pages: [
      {
        heading: "概要",
        body: "　日付選択 → 科目選択 → 種別選択（課題 / 試験 / 補講）の「3タップ」で、迷わず予定を登録できる学習タスク管理Webアプリです。カレンダー上で種別を色付きドットで可視化し、直近の予定も一覧できます。科目は絵文字アイコン付きで管理でき、予定ごとにメモの追加・編集も可能です。データはブラウザの localStorage に自動保存されます。\n\n技術スタック\n・Nuxt 4\n・Vue 3\n・TypeScript\n・Vite\n・@supabase/supabase-js\n・GitHub Actions（GitHub Pagesデプロイ）",
        imageSrc: "assets/images/work-1-thumb.jpg",
        imageAlt: "3-Taps! page 1"
      },
      {
        heading: "主要機能",
        body: "　登録フローを「日付 → 科目 → 種別」の3ステップに固定し、操作を迷いにくいUIにしました。\n\n主な機能\n・カレンダーで日付を選択して予定を登録\n・予定種別（課題 / 試験 / 補講）を色付きドットで可視化\n・直近の予定（当日以降）を日付順で一覧表示\n・科目の追加・削除（絵文字アイコン付き）\n・予定メモの追加・編集（空で保存すると削除）\n・localStorage への自動保存\n・2画面構成（/ と /friends）",
        imageSrc: "assets/images/work-1-thumb.jpg",
        imageAlt: "3-Taps! page 2"
      },
      {
        heading: "工夫・実装",
        body: "　科目ボタン押下時に、クリック位置から種別チップを表示するバブルUIを採用。画面端に寄った場合は左右を自動で切り替えて、はみ出しを防止しました。\n\n実装面では Task / Subject をTypeScriptで型定義し、computedで「選択日の予定」「直近の予定」「カレンダー表示用データ」を生成しています。localStorage は 300ms のデバウンス保存にし、読み込み時はJSONのパース失敗時の復旧や旧データ移行も入れて堅牢性を上げました。\n\n将来の共有機能を見据えて Supabase 連携（upsert / delete）も用意しつつ、現在は shareEnabled = false で停止しています。",
        imageSrc: "assets/images/work-1-thumb.jpg",
        imageAlt: "3-Taps! page 3"
      }
    ]
  },
  {
    id: "work-2",
    title: "振りコピスタジオ",
    thumbSrc: "assets/images/work-2-thumb.jpg",
    thumbAlt: "振りコピスタジオ thumbnail",
    githubUrl: "https://github.com/anko-kitubu/dance-practice-studio",
    githubPagesUrl: "https://anko-kitubu.github.io/dance-practice-studio/",
    pages: [
      {
        heading: "概要",
        body: "　YouTubeのお手本動画と自分のカメラ映像を同時表示し、振り付け練習をしやすくするWebアプリです。再生/シーク/再生速度変更に加え、練習シーンに合わせたレイアウト切替（Split / Reverse / Float など）や、カメラ・動画のミラー切替、履歴・プレイリスト管理、設定の保存/復元に対応しています。\n\n技術スタック\n・Vue 3\n・TypeScript\n・Vite\n・YouTube IFrame Player API\n・MediaDevices API（getUserMedia）\n・GitHub Actions / GitHub Pages",
        imageSrc: "assets/images/work-2-thumb.jpg",
        imageAlt: "振りコピスタジオ page 1"
      },
      {
        heading: "主要機能",
        body: "　動画とカメラを同時に見ながら、練習区間の調整と表示切替をスムーズに行えるようにしました。\n\n主な機能\n・YouTube URL / 動画IDの読み込み\n・再生/停止、シーク、再生速度変更\n・レイアウト切替（Split / Reverse / Cam Float / Vid Float / Video / Camera）\n・カメラ・動画のミラー切替\n・履歴管理（再生動画・再生位置）\n・プレイリスト管理（追加・並び替え・削除）\n・設定の保存/復元（localStorage）\n・フォーカスモード（UIを隠して練習に集中）",
        imageSrc: "assets/images/work-2-page-2.jpg",
        imageAlt: "振りコピスタジオ page 2"
      },
      {
        heading: "工夫・実装",
        body: "　「お手本の全身」と「自分の全身」を大きく見たい一方で、端末ごとの画面サイズ差により比率の崩れ・切り取り・余白が発生する課題がありました。\n\n実装ポイント\n・16:9固定で最大表示（viewportから内接サイズを算出）\n・レイアウト切替直後のズレ対策（nextTick＋requestAnimationFrameで再計算）\n・小窓はドラッグ移動＋画面外に出ないよう位置/サイズをクランプ\n・履歴/プレイリスト/設定をlocalStorageに保存して復元\n・Canvasで疑似波形（pseudo）と簡易モーション量（フレーム差分）を試作",
        imageSrc: "assets/images/work-2-page-3.jpg",
        imageAlt: "振りコピスタジオ page 3"
      }
    ]
  },
  {
    id: "work-3",
    title: "ClipNest",
    thumbSrc: "assets/images/work-3-thumb.png",
    thumbAlt: "ClipNest thumbnail",
    githubUrl: "https://github.com/anko-kitubu/clipnest",
    githubPagesUrl: "https://github.com/anko-kitubu/clipnest/releases/tag/0.1.0",
    secondaryLinkLabel: "release",
    pages: [
      {
        heading: "概要",
        body: "　画像を一時的に整理できるクリップボードキャンバスと、シンプルなタスク管理を1つにまとめたWindows向けデスクトップアプリです。Ctrl+V やドラッグ&ドロップで画像を追加し、ドラッグ移動・リサイズで配置できます。最前面表示のトグルも搭載しています。\n\n技術スタック\n・Electron\n・Vue 3\n・TypeScript\n・Vite\n・electron-builder（NSIS）",
        imageSrc: "assets/images/work-3-thumb.png",
        imageAlt: "ClipNest page 1"
      },
      {
        heading: "主要機能",
        body: "　画像整理とタスク管理を「すぐ使える」操作に寄せて実装しました。\n\n主な機能\n・Ctrl+Vでクリップボード画像を追加\n・画像ファイルのドラッグ&ドロップ追加\n・画像の移動・拡縮・削除（Delete）\n・選択画像のコピー（Ctrl+C / ボタン）\n・Undo（Ctrl+Z、最大50履歴）\n・画像は最大50枚まで保持（超過時は古い順に削除）\n・タスク追加/完了（チェックで削除）\n・最前面表示トグル（状態保持）",
        imageSrc: "assets/images/work-3-thumb.png",
        imageAlt: "ClipNest page 2"
      },
      {
        heading: "工夫・実装",
        body: "　キャンバス上の操作は、選択・重なり順・Undo・ショートカットが絡むため、状態の持ち方と履歴管理を工夫しました。\n\n実装ポイント\n・contextIsolation + preload 経由の最小APIで、クリップボード画像の読み書きをIPC化（PNG base64）\n・画像アイテムは座標/サイズ/z-indexを状態管理し、選択時に前面へ\n・Undoはスナップショット方式で、変更があるときだけ履歴に追加（上限50）\n・誤ドロップで画面遷移しないよう、windowのdropを抑止\n・最前面設定はuserData配下のJSONへ永続化",
        imageSrc: "assets/images/work-3-thumb.png",
        imageAlt: "ClipNest page 3"
      }
    ]
  },
  {
    id: "work-4",
    title: "ANtranslator",
    thumbSrc: "assets/images/work-4-thumb.png",
    thumbAlt: "ANtranslator thumbnail",
    githubUrl: "https://github.com/anko-kitubu/ANtranslator",
    githubPagesUrl: "",
    pages: [
      {
        heading: "概要",
        body: "　画面上の任意範囲を選択し、OCRで抽出した英語テキストを日本語に翻訳するWindowsアプリです（MVP開発中）。\n\n現在できていること\n・範囲選択キャプチャ\n・前処理（拡大/二値化）\n・OCR（Tesseract CLI）\n・翻訳（Microsoft Translator API / noop）\n・原文/訳文の表示とコピー\n\n技術スタック\n・C# / .NET 10 / WPF\n・Tesseract CLI\n・Microsoft Translator API",
        imageSrc: "assets/images/work-4-thumb.png",
        imageAlt: "ANtranslator page 1"
      }
    ]
  }
];

const heroTitleEl = document.getElementById("hero-title");
const heroNameEl = document.getElementById("hero-name");
const worksGridEl = document.getElementById("works-grid");

const modalEl = document.getElementById("work-modal");
const modalTitleEl = document.getElementById("modal-work-title");
const modalPageImageEl = document.getElementById("modal-page-image");
const modalPageImageFallbackEl = document.getElementById("modal-page-image-fallback");
const modalPageHeadingEl = document.getElementById("modal-page-heading");
const modalPageBodyEl = document.getElementById("modal-page-body");
const modalGithubLinkEl = document.getElementById("modal-github-link");
const modalSecondaryLinkLabelEl = document.getElementById("modal-secondary-link-label");
const modalGithubPagesLinkEl = document.getElementById("modal-github-pages-link");
const modalPrevEl = document.getElementById("modal-prev");
const modalNextEl = document.getElementById("modal-next");
const modalDotsEl = document.getElementById("modal-dots");

let activeWorkIndex = -1;
let activePageIndex = 0;

// 数値を指定した最小値と最大値の範囲に収める。
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

// 定数で定義したヒーロー文言を画面に反映する。
function setHeroContent() {
  heroTitleEl.textContent = HERO_TITLE;
  heroNameEl.textContent = HERO_NAME;
}

// src と読込結果に応じて画像表示と代替表示を切り替える。
function setImageWithFallback(imageEl, fallbackEl, src, alt) {
  imageEl.alt = alt || "";
  imageEl.onload = () => {
    imageEl.classList.remove("is-hidden");
    fallbackEl.classList.add("is-hidden");
  };
  imageEl.onerror = () => {
    imageEl.classList.add("is-hidden");
    fallbackEl.classList.remove("is-hidden");
  };

  if (!src) {
    imageEl.removeAttribute("src");
    imageEl.classList.add("is-hidden");
    fallbackEl.classList.remove("is-hidden");
    return;
  }

  imageEl.classList.add("is-hidden");
  fallbackEl.classList.remove("is-hidden");

  const currentSrc = imageEl.getAttribute("src");
  if (currentSrc === src && imageEl.complete && imageEl.naturalWidth > 0) {
    imageEl.classList.remove("is-hidden");
    fallbackEl.classList.add("is-hidden");
    return;
  }

  imageEl.src = src;
}

// URL がある場合はリンクとして表示し、ない場合は "-" を表示する。
function setLinkOrDash(linkEl, url) {
  const trimmedUrl = typeof url === "string" ? url.trim() : "";

  if (!trimmedUrl) {
    linkEl.textContent = "-";
    linkEl.classList.add("is-disabled");
    linkEl.removeAttribute("href");
    linkEl.removeAttribute("target");
    linkEl.removeAttribute("rel");
    linkEl.setAttribute("tabindex", "-1");
    return;
  }

  linkEl.textContent = trimmedUrl;
  linkEl.href = trimmedUrl;
  linkEl.target = "_blank";
  linkEl.rel = "noopener noreferrer";
  linkEl.classList.remove("is-disabled");
  linkEl.removeAttribute("tabindex");
}

// HTML特殊文字をエスケープして本文の描画を安全にする。
function escapeHtml(text) {
  const entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  };

  return text.replace(/[&<>"']/g, (char) => entityMap[char]);
}

// モーダル本文を整形し、技術スタック見出しを強調表示する。
function formatModalBody(body) {
  const normalized = String(body ?? "")
    .replace(/\r\n?/g, "\n")
    .replace(/\n*技術スタック/g, "\n\n技術スタック");

  const escaped = escapeHtml(normalized);
  const emphasized = escaped.replace(
    /技術スタック/g,
    "<strong class=\"stack-title\">技術スタック</strong>"
  );

  return emphasized.replace(/\n/g, "<br>");
}

// 作品グリッド用のカード要素を1件分生成する。
function createWorkCard(work, index) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "work-card";
  card.dataset.index = String(index);
  card.setAttribute("aria-label", `Open ${work.title} details`);

  const thumbWrap = document.createElement("div");
  thumbWrap.className = "work-thumb-wrap";

  const thumbImage = document.createElement("img");
  thumbImage.className = "work-thumb is-hidden";

  const thumbFallback = document.createElement("div");
  thumbFallback.className = "image-fallback";
  thumbFallback.textContent = "No Image";

  setImageWithFallback(
    thumbImage,
    thumbFallback,
    work.thumbSrc,
    work.thumbAlt || `${work.title} thumbnail`
  );

  thumbWrap.append(thumbImage, thumbFallback);

  const title = document.createElement("p");
  title.className = "work-title";
  title.textContent = work.title;

  card.append(thumbWrap, title);
  return card;
}

// 全作品カードを生成してグリッドに描画する。
function renderWorkCards() {
  const fragment = document.createDocumentFragment();

  WORKS.forEach((work, index) => {
    fragment.appendChild(createWorkCard(work, index));
  });

  worksGridEl.innerHTML = "";
  worksGridEl.appendChild(fragment);
}

// スクロール量に応じてヒーローをフェードアウトし作品一覧をフェードインする。
function updateScrollAnimation() {
  const progress = clamp(window.scrollY / window.innerHeight, 0, 1);

  document.documentElement.style.setProperty("--hero-opacity", String(1 - progress));
  document.documentElement.style.setProperty("--works-opacity", String(0.1 + progress * 0.9));
  document.documentElement.style.setProperty("--works-shift", `${(1 - progress) * 24}px`);
}

// モーダルが現在表示中かどうかを返す。
function isModalOpen() {
  return modalEl.classList.contains("is-open");
}

// モーダル内の画像・タイトル・本文・矢印状態・ドット表示を更新する。
function updateModalView() {
  const work = WORKS[activeWorkIndex];
  if (!work) {
    return;
  }

  const page = work.pages[activePageIndex];
  modalTitleEl.textContent = work.title;
  modalPageHeadingEl.textContent = page.heading;
  modalPageBodyEl.innerHTML = formatModalBody(page.body);

  setImageWithFallback(
    modalPageImageEl,
    modalPageImageFallbackEl,
    page.imageSrc,
    page.imageAlt || `${work.title} page ${activePageIndex + 1}`
  );
  const secondaryLabel = work.secondaryLinkLabel || "githubpages";
  modalSecondaryLinkLabelEl.textContent = `${secondaryLabel}:`;
  setLinkOrDash(modalGithubLinkEl, work.githubUrl);
  setLinkOrDash(modalGithubPagesLinkEl, work.githubPagesUrl);

  modalPrevEl.disabled = activePageIndex === 0;
  modalNextEl.disabled = activePageIndex === work.pages.length - 1;

  modalDotsEl.innerHTML = "";
  work.pages.forEach((_, pageIndex) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "modal-dot";
    dot.setAttribute("aria-label", `Go to page ${pageIndex + 1}`);
    if (pageIndex === activePageIndex) {
      dot.classList.add("is-active");
    }
    dot.addEventListener("click", () => {
      activePageIndex = pageIndex;
      updateModalView();
    });
    modalDotsEl.appendChild(dot);
  });
}

// 指定作品のモーダルを開き、表示ページを1ページ目に戻す。
function openModal(workIndex) {
  activeWorkIndex = workIndex;
  activePageIndex = 0;
  updateModalView();

  modalEl.classList.add("is-open");
  modalEl.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

// モーダルを閉じて、現在選択中の作品状態をリセットする。
function closeModal() {
  modalEl.classList.remove("is-open");
  modalEl.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  activeWorkIndex = -1;
}

// イベント委譲で作品カードのクリックを処理する。
function setupCardEvents() {
  worksGridEl.addEventListener("click", (event) => {
    const button = event.target.closest(".work-card");
    if (!button) {
      return;
    }
    const workIndex = Number(button.dataset.index);
    if (Number.isNaN(workIndex)) {
      return;
    }
    openModal(workIndex);
  });
}

// モーダルの閉じる・前後移動・キーボード操作のイベントを登録する。
function setupModalEvents() {
  modalEl.addEventListener("click", (event) => {
    if (event.target.closest("[data-modal-close]")) {
      closeModal();
    }
  });

  modalPrevEl.addEventListener("click", () => {
    const work = WORKS[activeWorkIndex];
    if (!work) {
      return;
    }
    activePageIndex = clamp(activePageIndex - 1, 0, work.pages.length - 1);
    updateModalView();
  });

  modalNextEl.addEventListener("click", () => {
    const work = WORKS[activeWorkIndex];
    if (!work) {
      return;
    }
    activePageIndex = clamp(activePageIndex + 1, 0, work.pages.length - 1);
    updateModalView();
  });

  document.addEventListener("keydown", (event) => {
    if (!isModalOpen()) {
      return;
    }

    if (event.key === "Escape") {
      closeModal();
      return;
    }

    if (event.key === "ArrowLeft") {
      modalPrevEl.click();
      return;
    }

    if (event.key === "ArrowRight") {
      modalNextEl.click();
    }
  });
}

// スクロール関連リスナーを登録し、初期表示状態を適用する。
function setupScrollAnimation() {
  updateScrollAnimation();
  window.addEventListener("scroll", updateScrollAnimation, { passive: true });
  window.addEventListener("resize", updateScrollAnimation);
}

// ページ内容と各種インタラクションを初期化する。
function init() {
  setHeroContent();
  renderWorkCards();
  setupCardEvents();
  setupModalEvents();
  setupScrollAnimation();
}

init();
