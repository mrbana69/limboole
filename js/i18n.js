// Limboole Internationalization (i18n) Module
// Supports 14 major web languages: English, Spanish, German, Italian, French, Portuguese,
// Chinese, Japanese, Korean, Russian, Arabic, Dutch, Polish, and Turkish.

window.translations = {
    en: {
        brand_badge: "SAT &amp; QBF",
        theme_text: "Theme",
        mode_label: "Mode",
        example_label: "Example",
        example_placeholder: "Load formula...",
        btn_truth_table: "Truth Table",
        btn_copy: "Copy Output",
        btn_copied: "Copied! ✓",
        loading_text: "Loading solver...",
        btn_run: "Run",
        btn_kbd: "Shift+Enter",
        formula_title: "Formula",
        output_title: "Output",
        diag_title: "Diagnostics",
        input_placeholder: "Enter propositional or QBF formula, e.g. (p & (p -> q)) -> q",
        output_placeholder: "Solver output will appear here after execution.",
        diag_placeholder: "No errors or warnings.",
        docs_toggle: "Syntax &amp; Usage Reference",
        docs_usage_title: "Usage",
        docs_usage_p1: "Write or paste a formula into the editor, select a mode, and click <strong>Run</strong> (or press <kbd>Shift</kbd> + <kbd>Enter</kbd>).",
        docs_usage_p2: "<strong>Permalinks:</strong> Every analysis synchronizes the formula and mode directly into the browser URL hash so you can share it directly.",
        docs_usage_p3: "<strong>Drag &amp; Drop:</strong> Drag any local text file directly onto the formula input area to load and execute it.",
        docs_modes_title: "Analysis Modes",
        docs_mode_validity: "<strong>Validity Check:</strong> Verifies if the formula is valid (a tautology satisfied under all possible variable assignments).",
        docs_mode_sat: "<strong>Satisfiability Check:</strong> Tests whether there exists at least one satisfying assignment using PicoSAT.",
        docs_mode_tt: "<strong>Truth Table:</strong> Computes all 2<sup>n</sup> variable evaluations and displays model counts.",
        docs_mode_qbf: "<strong>QBF Satisfiability:</strong> Evaluates quantified formulas with universal <code>#</code> (∀) and existential <code>?</code> (∃) quantifiers using DepQBF.",
        docs_syntax_title: "Syntax (EBNF)",
        docs_syntax_notes: "<code>var</code>: letters, digits, and <code>_ . [ ] $ @</code> (must not end with <code>-</code>).<br>Extended operators: XOR (<code>^</code>), constants (<code>true</code>, <code>false</code>, <code>1</code>, <code>0</code>), and <code>/</code> for OR.",
        wrappers: ["Validity Check", "Satisfiability Check", "Truth Table", "QBF Satisfiability Check"]
    },
    es: {
        brand_badge: "SAT y QBF",
        theme_text: "Tema",
        mode_label: "Modo",
        example_label: "Ejemplo",
        example_placeholder: "Cargar fórmula...",
        btn_truth_table: "Tabla de verdad",
        btn_copy: "Copiar salida",
        btn_copied: "¡Copiado! ✓",
        loading_text: "Cargando resolvedor...",
        btn_run: "Ejecutar",
        btn_kbd: "Shift+Enter",
        formula_title: "Fórmula",
        output_title: "Salida",
        diag_title: "Diagnósticos",
        input_placeholder: "Ingrese una fórmula proposicional o QBF, ej. (p & (p -> q)) -> q",
        output_placeholder: "El resultado del análisis aparecerá aquí después de la ejecución.",
        diag_placeholder: "Sin errores ni advertencias.",
        docs_toggle: "Referencia de sintaxis y uso",
        docs_usage_title: "Uso",
        docs_usage_p1: "Escriba o pegue una fórmula en el editor, seleccione un modo y haga clic en <strong>Ejecutar</strong> (o presione <kbd>Shift</kbd> + <kbd>Enter</kbd>).",
        docs_usage_p2: "<strong>Enlaces permanentes:</strong> Cada análisis sincroniza la fórmula y el modo directamente en la URL para compartirlo fácilmente.",
        docs_usage_p3: "<strong>Arrastrar y soltar:</strong> Arrastre cualquier archivo de texto local directamente al editor para cargarlo y ejecutarlo.",
        docs_modes_title: "Modos de análisis",
        docs_mode_validity: "<strong>Comprobación de validez:</strong> Comprueba si la fórmula es válida (una tautología satisfecha en todas las asignaciones).",
        docs_mode_sat: "<strong>Comprobación de satisfacibilidad:</strong> Comprueba si existe al menos una asignación que satisfaga la fórmula mediante PicoSAT.",
        docs_mode_tt: "<strong>Tabla de verdad:</strong> Calcula todas las 2<sup>n</sup> evaluaciones de variables y muestra el recuento de modelos.",
        docs_mode_qbf: "<strong>Satisfacibilidad QBF:</strong> Evalúa fórmulas cuantificadas con cuantificadores universales <code>#</code> (∀) y existenciales <code>?</code> (∃) mediante DepQBF.",
        docs_syntax_title: "Sintaxis (EBNF)",
        docs_syntax_notes: "<code>var</code>: letras, dígitos y <code>_ . [ ] $ @</code> (no debe terminar en <code>-</code>).<br>Operadores extendidos: XOR (<code>^</code>), constantes (<code>true</code>, <code>false</code>, <code>1</code>, <code>0</code>) y <code>/</code> para OR.",
        wrappers: ["Comprobación de validez", "Comprobación de satisfacibilidad", "Tabla de verdad", "Satisfacibilidad QBF"]
    },
    de: {
        brand_badge: "SAT &amp; QBF",
        theme_text: "Design",
        mode_label: "Modus",
        example_label: "Beispiel",
        example_placeholder: "Formel laden...",
        btn_truth_table: "Wahrheitstabelle",
        btn_copy: "Ausgabe kopieren",
        btn_copied: "Kopiert! ✓",
        loading_text: "Solver wird geladen...",
        btn_run: "Ausführen",
        btn_kbd: "Shift+Enter",
        formula_title: "Formel",
        output_title: "Ausgabe",
        diag_title: "Diagnose",
        input_placeholder: "Aussagenlogische oder QBF-Formel eingeben, z.B. (p & (p -> q)) -> q",
        output_placeholder: "Die Solver-Ausgabe erscheint hier nach der Ausführung.",
        diag_placeholder: "Keine Fehler oder Warnungen.",
        docs_toggle: "Syntax- &amp; Bedienungsanleitung",
        docs_usage_title: "Bedienung",
        docs_usage_p1: "Geben Sie eine Formel ein, wählen Sie einen Modus und klicken Sie auf <strong>Ausführen</strong> (oder drücken Sie <kbd>Shift</kbd> + <kbd>Enter</kbd>).",
        docs_usage_p2: "<strong>Permalinks:</strong> Jede Analyse synchronisiert Formel und Modus direkt in den URL-Hash zum einfachen Teilen.",
        docs_usage_p3: "<strong>Drag &amp; Drop:</strong> Ziehen Sie eine Textdatei direkt auf das Eingabefeld, um sie zu laden.",
        docs_modes_title: "Analysemodi",
        docs_mode_validity: "<strong>Gültigkeitsprüfung:</strong> Prüft, ob die Formel gültig ist (eine Tautologie, die unter allen Belegungen wahr ist).",
        docs_mode_sat: "<strong>Erfüllbarkeitsprüfung:</strong> Prüft mit PicoSAT, ob mindestens eine erfüllende Belegung existiert.",
        docs_mode_tt: "<strong>Wahrheitstabelle:</strong> Berechnet alle 2<sup>n</sup> Belegungen und zeigt erfüllende Modelle an.",
        docs_mode_qbf: "<strong>QBF-Erfüllbarkeit:</strong> Bewertet quantifizierte Formeln mit Allquantor <code>#</code> (∀) und Existenzquantor <code>?</code> (∃) via DepQBF.",
        docs_syntax_title: "Syntax (EBNF)",
        docs_syntax_notes: "<code>var</code>: Buchstaben, Ziffern und <code>_ . [ ] $ @</code> (darf nicht mit <code>-</code> enden).<br>Erweiterte Operatoren: XOR (<code>^</code>), Konstanten (<code>true</code>, <code>false</code>, <code>1</code>, <code>0</code>) und <code>/</code> für ODER.",
        wrappers: ["Gültigkeitsprüfung", "Erfüllbarkeitsprüfung", "Wahrheitstabelle", "QBF-Erfüllbarkeitsprüfung"]
    },
    it: {
        brand_badge: "SAT &amp; QBF",
        theme_text: "Tema",
        mode_label: "Modalità",
        example_label: "Esempio",
        example_placeholder: "Carica formula...",
        btn_truth_table: "Tabella di verità",
        btn_copy: "Copia output",
        btn_copied: "Copiato! ✓",
        loading_text: "Caricamento solver...",
        btn_run: "Esegui",
        btn_kbd: "Shift+Enter",
        formula_title: "Formula",
        output_title: "Output",
        diag_title: "Diagnostica",
        input_placeholder: "Inserisci una formula proposizionale o QBF, es. (p & (p -> q)) -> q",
        output_placeholder: "I risultati appariranno qui dopo l'esecuzione.",
        diag_placeholder: "Nessun errore o avviso.",
        docs_toggle: "Guida a sintassi e utilizzo",
        docs_usage_title: "Utilizzo",
        docs_usage_p1: "Inserisci una formula, seleziona una modalità e premi <strong>Esegui</strong> (oppure <kbd>Shift</kbd> + <kbd>Enter</kbd>).",
        docs_usage_p2: "<strong>Permalink:</strong> Ogni analisi aggiorna automaticamente l'URL per consentire la condivisione immediata.",
        docs_usage_p3: "<strong>Drag &amp; Drop:</strong> Trascina un file di testo direttamente nell'editor per caricarlo ed eseguirlo.",
        docs_modes_title: "Modalità di analisi",
        docs_mode_validity: "<strong>Controllo di validità:</strong> Verifica se la formula è valida (una tautologia soddisfatta da tutte le assegnazioni).",
        docs_mode_sat: "<strong>Controllo di soddisfacibilità:</strong> Verifica se esiste almeno un'assegnazione soddisfacente tramite PicoSAT.",
        docs_mode_tt: "<strong>Tabella di verità:</strong> Calcola tutte le 2<sup>n</sup> valutazioni e mostra i modelli soddisfacenti.",
        docs_mode_qbf: "<strong>Soddisfacibilità QBF:</strong> Valuta formule quantificate con quantificatori universali <code>#</code> (∀) ed esistenziali <code>?</code> (∃) con DepQBF.",
        docs_syntax_title: "Sintassi (EBNF)",
        docs_syntax_notes: "<code>var</code>: lettere, cifre e <code>_ . [ ] $ @</code> (non deve terminare con <code>-</code>).<br>Operatori estesi: XOR (<code>^</code>), costanti (<code>true</code>, <code>false</code>, <code>1</code>, <code>0</code>) e <code>/</code> per OR.",
        wrappers: ["Controllo di validità", "Controllo di soddisfacibilità", "Tabella di verità", "Soddisfacibilità QBF"]
    },
    fr: {
        brand_badge: "SAT &amp; QBF",
        theme_text: "Thème",
        mode_label: "Mode",
        example_label: "Exemple",
        example_placeholder: "Charger une formule...",
        btn_truth_table: "Table de vérité",
        btn_copy: "Copier la sortie",
        btn_copied: "Copié ! ✓",
        loading_text: "Chargement du solveur...",
        btn_run: "Exécuter",
        btn_kbd: "Shift+Enter",
        formula_title: "Formule",
        output_title: "Sortie",
        diag_title: "Diagnostics",
        input_placeholder: "Entrez une formule propositionnelle ou QBF, ex. (p & (p -> q)) -> q",
        output_placeholder: "Le résultat de l'analyse apparaîtra ici après exécution.",
        diag_placeholder: "Aucune erreur ni avertissement.",
        docs_toggle: "Guide de syntaxe et d'utilisation",
        docs_usage_title: "Utilisation",
        docs_usage_p1: "Écrivez une formule dans l'éditeur, sélectionnez un mode et cliquez sur <strong>Exécuter</strong> (ou <kbd>Shift</kbd> + <kbd>Entrée</kbd>).",
        docs_usage_p2: "<strong>Permaliens :</strong> Chaque analyse synchronise la formule et le mode dans l'URL pour un partage direct.",
        docs_usage_p3: "<strong>Glisser-déposer :</strong> Glissez n'importe quel fichier texte local directement sur l'éditeur pour le charger.",
        docs_modes_title: "Modes d'analyse",
        docs_mode_validity: "<strong>Vérification de validité :</strong> Vérifie si la formule est valide (une tautologie satisfaite sous toutes les assignations).",
        docs_mode_sat: "<strong>Test de satisfaisabilité :</strong> Vérifie s'il existe au moins une assignation satisfaisante via PicoSAT.",
        docs_mode_tt: "<strong>Table de vérité :</strong> Calcule l'ensemble des 2<sup>n</sup> évaluations et affiche les modèles.",
        docs_mode_qbf: "<strong>Satisfaisabilité QBF :</strong> Évalue les formules quantifiées avec quantificateurs universels <code>#</code> (∀) et existentiels <code>?</code> (∃) via DepQBF.",
        docs_syntax_title: "Syntaxe (EBNF)",
        docs_syntax_notes: "<code>var</code> : lettres, chiffres et <code>_ . [ ] $ @</code> (ne doit pas finir par <code>-</code>).<br>Opérateurs étendus : XOR (<code>^</code>), constantes (<code>true</code>, <code>false</code>, <code>1</code>, <code>0</code>) et <code>/</code> pour OU.",
        wrappers: ["Vérification de validité", "Test de satisfaisabilité", "Table de vérité", "Satisfaisabilité QBF"]
    },
    pt: {
        brand_badge: "SAT e QBF",
        theme_text: "Tema",
        mode_label: "Modo",
        example_label: "Exemplo",
        example_placeholder: "Carregar fórmula...",
        btn_truth_table: "Tabela-verdade",
        btn_copy: "Copiar saída",
        btn_copied: "Copiado! ✓",
        loading_text: "Carregando resolvedor...",
        btn_run: "Executar",
        btn_kbd: "Shift+Enter",
        formula_title: "Fórmula",
        output_title: "Saída",
        diag_title: "Diagnósticos",
        input_placeholder: "Digite uma fórmula proposicional ou QBF, ex. (p & (p -> q)) -> q",
        output_placeholder: "O resultado do solucionador aparecerá aqui após a execução.",
        diag_placeholder: "Nenhum erro ou aviso.",
        docs_toggle: "Referência de sintaxe e uso",
        docs_usage_title: "Uso",
        docs_usage_p1: "Digite uma fórmula no editor, escolha um modo e clique em <strong>Executar</strong> (ou <kbd>Shift</kbd> + <kbd>Enter</kbd>).",
        docs_usage_p2: "<strong>Links permanentes:</strong> Cada análise sincroniza a fórmula e o modo na URL para compartilhamento direto.",
        docs_usage_p3: "<strong>Arrastar e soltar:</strong> Arraste qualquer arquivo de texto local para o editor para carregá-lo e executá-lo.",
        docs_modes_title: "Modos de análise",
        docs_mode_validity: "<strong>Verificação de validade:</strong> Verifica se a fórmula é válida (uma tautologia satisfeita em todas as atribuições).",
        docs_mode_sat: "<strong>Verificação de satisfatibilidade:</strong> Testa se existe pelo menos uma atribuição satisfatória usando PicoSAT.",
        docs_mode_tt: "<strong>Tabela-verdade:</strong> Computa todas as 2<sup>n</sup> avaliações e exibe contagens de modelos.",
        docs_mode_qbf: "<strong>Satisfatibilidade QBF:</strong> Avalia fórmulas quantificadas com quantificadores universais <code>#</code> (∀) e existenciais <code>?</code> (∃) via DepQBF.",
        docs_syntax_title: "Sintaxe (EBNF)",
        docs_syntax_notes: "<code>var</code>: letras, dígitos e <code>_ . [ ] $ @</code> (não deve terminar em <code>-</code>).<br>Operadores estendidos: XOR (<code>^</code>), constantes (<code>true</code>, <code>false</code>, <code>1</code>, <code>0</code>) e <code>/</code> para OU.",
        wrappers: ["Verificação de validade", "Verificação de satisfatibilidade", "Tabela-verdade", "Satisfatibilidade QBF"]
    },
    zh: {
        brand_badge: "SAT 与 QBF",
        theme_text: "主题",
        mode_label: "分析模式",
        example_label: "示例公式",
        example_placeholder: "加载示例公式...",
        btn_truth_table: "真值表",
        btn_copy: "复制结果",
        btn_copied: "已复制! ✓",
        loading_text: "正在加载求解器...",
        btn_run: "运行分析",
        btn_kbd: "Shift+Enter",
        formula_title: "逻辑公式",
        output_title: "求解结果",
        diag_title: "诊断信息",
        input_placeholder: "输入命题逻辑或 QBF 公式，例如: (p & (p -> q)) -> q",
        output_placeholder: "分析结果将在求解器运行后显示在此处。",
        diag_placeholder: "无错误或警告信息。",
        docs_toggle: "语法与使用指南",
        docs_usage_title: "使用方法",
        docs_usage_p1: "在编辑器中输入公式，选择分析模式，点击<strong>运行分析</strong>（或按 <kbd>Shift</kbd> + <kbd>Enter</kbd>）。",
        docs_usage_p2: "<strong>永久链接:</strong> 每次分析都会将公式和模式同步到浏览器 URL Hash 中，方便直接复制分享。",
        docs_usage_p3: "<strong>拖拽上传:</strong> 直接将本地公式文本文件拖放到输入框中即可自动加载并运行。",
        docs_modes_title: "分析模式说明",
        docs_mode_validity: "<strong>有效性检查:</strong> 验证公式是否恒真（在所有变量赋值下均为真，即重言式）。",
        docs_mode_sat: "<strong>可满足性检查:</strong> 使用 PicoSAT 求解是否存在至少一组赋值使公式为真。",
        docs_mode_tt: "<strong>真值表:</strong> 枚举全部 2<sup>n</sup> 种变量真值赋值组合并统计满足模型数。",
        docs_mode_qbf: "<strong>QBF 可满足性:</strong> 使用 DepQBF 分析包含全称量词 <code>#</code> (∀) 与存在量词 <code>?</code> (∃) 的量化布尔公式。",
        docs_syntax_title: "公式语法 (EBNF)",
        docs_syntax_notes: "<code>var</code>: 字母、数字及字符 <code>_ . [ ] $ @</code>（不可由 <code>-</code> 结尾）。<br>扩展运算符: 异或 (<code>^</code>)，布尔常量 (<code>true</code>, <code>false</code>, <code>1</code>, <code>0</code>)，以及 <code>/</code> 代表 OR。",
        wrappers: ["有效性检查 (Validity)", "可满足性检查 (SAT)", "真值表 (Truth Table)", "QBF 可满足性检查"]
    },
    ja: {
        brand_badge: "SAT &amp; QBF",
        theme_text: "テーマ",
        mode_label: "モード",
        example_label: "例",
        example_placeholder: "数式例を読み込む...",
        btn_truth_table: "真理値表",
        btn_copy: "出力をコピー",
        btn_copied: "コピー完了! ✓",
        loading_text: "ソルバー読込中...",
        btn_run: "実行",
        btn_kbd: "Shift+Enter",
        formula_title: "論理式",
        output_title: "出力",
        diag_title: "診断",
        input_placeholder: "命題論理またはQBF式を入力、例: (p & (p -> q)) -> q",
        output_placeholder: "ソルバーの実行結果がここに表示されます。",
        diag_placeholder: "エラーや警告はありません。",
        docs_toggle: "構文・使用方法リファレンス",
        docs_usage_title: "使い方",
        docs_usage_p1: "論理式を入力し、モードを選択して<strong>実行</strong>をクリック（または <kbd>Shift</kbd> + <kbd>Enter</kbd>）。",
        docs_usage_p2: "<strong>パーマリンク:</strong> 解析結果はURLハッシュに同期されるため、リンクをそのまま共有できます。",
        docs_usage_p3: "<strong>ドラッグ＆ドロップ:</strong> ローカルのテキストファイルをエディタ上にドロップして実行できます。",
        docs_modes_title: "解析モード",
        docs_mode_validity: "<strong>恒真性検証:</strong> すべての真理値割り当てで式が充足されるか（恒真式）を検証します。",
        docs_mode_sat: "<strong>充足可能性検証:</strong> PicoSAT を使用して充足する割り当てが存在するかを判定します。",
        docs_mode_tt: "<strong>真理値表:</strong> 2<sup>n</sup> 通りの全割り当てを計算し、モデル数を一覧表示します。",
        docs_mode_qbf: "<strong>QBF 充足可能性:</strong> 全称 <code>#</code> (∀) および存在 <code>?</code> (∃) 量化子を含む論理式を DepQBF で解析します。",
        docs_syntax_title: "構文規則 (EBNF)",
        docs_syntax_notes: "<code>var</code>: 英数字および <code>_ . [ ] $ @</code>（末尾に <code>-</code> は不可）。<br>拡張演算子: 排他的論理和 (<code>^</code>)、定数 (<code>true</code>, <code>false</code>, <code>1</code>, <code>0</code>)、論理和 (<code>/</code>)。",
        wrappers: ["恒真性検証 (Validity)", "充足可能性検証 (SAT)", "真理値表 (Truth Table)", "QBF 充足可能性検証"]
    },
    ko: {
        brand_badge: "SAT &amp; QBF",
        theme_text: "테마",
        mode_label: "모드",
        example_label: "예제",
        example_placeholder: "예제 수식 불러오기...",
        btn_truth_table: "진리표",
        btn_copy: "결과 복사",
        btn_copied: "복사됨! ✓",
        loading_text: "솔버 로딩 중...",
        btn_run: "실행",
        btn_kbd: "Shift+Enter",
        formula_title: "논리식",
        output_title: "출력 결과",
        diag_title: "진단 정보",
        input_placeholder: "명제 논리 또는 QBF 수식 입력, 예: (p & (p -> q)) -> q",
        output_placeholder: "솔버 실행 결과가 여기에 표시됩니다.",
        diag_placeholder: "오류 또는 경고가 없습니다.",
        docs_toggle: "문법 및 사용 가이드",
        docs_usage_title: "사용 방법",
        docs_usage_p1: "수식을 입력하고 모드를 선택한 후 <strong>실행</strong>을 클릭합니다 (또는 <kbd>Shift</kbd> + <kbd>Enter</kbd>).",
        docs_usage_p2: "<strong>고유 링크:</strong> 실행할 때마다 URL 해시가 동기화되어 쉽게 링크를 공유할 수 있습니다.",
        docs_usage_p3: "<strong>드래그 앤 드롭:</strong> 텍스트 파일을 편집기 영역으로 드래그하여 바로 실행할 수 있습니다.",
        docs_modes_title: "분석 모드",
        docs_mode_validity: "<strong>타당성 검사:</strong> 모든 변수 할당에서 수식이 참인지(동어반복) 검증합니다.",
        docs_mode_sat: "<strong>충족 가능성 검사:</strong> PicoSAT을 사용하여 충족하는 할당이 존재하는지 확인합니다.",
        docs_mode_tt: "<strong>진리표:</strong> 모든 2<sup>n</sup>개 변수 평가를 수행하고 만족 모델 수를 계산합니다.",
        docs_mode_qbf: "<strong>QBF 충족 가능성:</strong> 전칭 <code>#</code> (∀) 및 존재 <code>?</code> (∃) 한정자를 포함한 양화 수식을 DepQBF로 분석합니다.",
        docs_syntax_title: "문법 (EBNF)",
        docs_syntax_notes: "<code>var</code>: 영숫자 및 <code>_ . [ ] $ @</code> (끝에 <code>-</code> 불가).<br>확장 연산자: XOR (<code>^</code>), 상수 (<code>true</code>, <code>false</code>, <code>1</code>, <code>0</code>), OR (<code>/</code>).",
        wrappers: ["타당성 검사 (Validity)", "충족 가능성 검사 (SAT)", "진리표 (Truth Table)", "QBF 충족 가능성 검사"]
    },
    ru: {
        brand_badge: "SAT и QBF",
        theme_text: "Тема",
        mode_label: "Режим",
        example_label: "Пример",
        example_placeholder: "Загрузить формулу...",
        btn_truth_table: "Таблица истинности",
        btn_copy: "Копировать вывод",
        btn_copied: "Скопировано! ✓",
        loading_text: "Загрузка решателя...",
        btn_run: "Запуск",
        btn_kbd: "Shift+Enter",
        formula_title: "Формула",
        output_title: "Результат",
        diag_title: "Диагностика",
        input_placeholder: "Введите формулу логики высказываний или QBF, напр. (p & (p -> q)) -> q",
        output_placeholder: "Результат работы решателя появится здесь после запуска.",
        diag_placeholder: "Ошибок и предупреждений нет.",
        docs_toggle: "Справка по синтаксису и использованию",
        docs_usage_title: "Использование",
        docs_usage_p1: "Введите формулу, выберите режим и нажмите <strong>Запуск</strong> (или <kbd>Shift</kbd> + <kbd>Enter</kbd>).",
        docs_usage_p2: "<strong>Постоянные ссылки:</strong> Каждый анализ сохраняет формулу и режим в хэше URL для быстрого обмена ссылками.",
        docs_usage_p3: "<strong>Drag &amp; Drop:</strong> Перетащите текстовый файл прямо в поле ввода для загрузки.",
        docs_modes_title: "Режимы анализа",
        docs_mode_validity: "<strong>Проверка общезначимости:</strong> Проверяет, является ли формула тавтологией (истинной при всех значениях).",
        docs_mode_sat: "<strong>Проверка выполнимости:</strong> Ищет выполняющую подстановку с помощью PicoSAT.",
        docs_mode_tt: "<strong>Таблица истинности:</strong> Вычисляет все 2<sup>n</sup> комбинаций переменных и число моделей.",
        docs_mode_qbf: "<strong>Выполнимость QBF:</strong> Анализирует формулы с кванторами всеобщности <code>#</code> (∀) и существования <code>?</code> (∃) через DepQBF.",
        docs_syntax_title: "Синтаксис (EBNF)",
        docs_syntax_notes: "<code>var</code>: буквы, цифры и <code>_ . [ ] $ @</code> (не может заканчиваться на <code>-</code>).<br>Дополнительные операторы: XOR (<code>^</code>), константы (<code>true</code>, <code>false</code>, <code>1</code>, <code>0</code>) и <code>/</code> для ИЛИ.",
        wrappers: ["Проверка общезначимости", "Проверка выполнимости", "Таблица истинности", "Выполнимость QBF"]
    },
    ar: {
        brand_badge: "SAT و QBF",
        theme_text: "المظهر",
        mode_label: "الوضع",
        example_label: "مثال",
        example_placeholder: "تحميل صيغة...",
        btn_truth_table: "جدول الحقيقة",
        btn_copy: "نسخ المخرجات",
        btn_copied: "تم النسخ! ✓",
        loading_text: "جارٍ تحميل المحلل...",
        btn_run: "تشغيل",
        btn_kbd: "Shift+Enter",
        formula_title: "الصيغة",
        output_title: "المخرجات",
        diag_title: "التشخيص",
        input_placeholder: "أدخل صيغة منطقية أو QBF، مثل (p & (p -> q)) -> q",
        output_placeholder: "ستظهر نتائج التحليل هنا بعد التشغيل.",
        diag_placeholder: "لا توجد أخطاء أو تحذيرات.",
        docs_toggle: "دليل الصياغة والاستخدام",
        docs_usage_title: "طريقة الاستخدام",
        docs_usage_p1: "أدخل الصيغة في المحرر، اختر الوضع، واضغط على <strong>تشغيل</strong> (أو <kbd>Shift</kbd> + <kbd>Enter</kbd>).",
        docs_usage_p2: "<strong>الروابط المباشرة:</strong> يتم حفظ الصيغة والوضع تلقائيًا في رابط الصفحة لمشاركتها بسهولة.",
        docs_usage_p3: "<strong>السحب والإفلات:</strong> اسحب أي ملف نصي مباشرة إلى منطقة الإدخال لتحميله.",
        docs_modes_title: "أوضاع التحليل",
        docs_mode_validity: "<strong>فحص الصلاحية:</strong> يتحقق مما إذا كانت الصيغة صحيحة دائمًا (تحصيل حاصل) لجميع القيم.",
        docs_mode_sat: "<strong>فحص القابلية للإرضاء:</strong> يفحص وجود تعيين متغيرات يحقق الصيغة باستخدام PicoSAT.",
        docs_mode_tt: "<strong>جدول الحقيقة:</strong> يحسب جميع احتمالات المتغيرات (2<sup>n</sup>) ويعرض عدد النماذج المحققة.",
        docs_mode_qbf: "<strong>فحص QBF:</strong> يحلل الصيغ المحصورة بمكممات كلية <code>#</code> (∀) ووجودية <code>?</code> (∃) عبر DepQBF.",
        docs_syntax_title: "قواعد الصياغة (EBNF)",
        docs_syntax_notes: "<code>var</code>: أحرف وأرقام و <code>_ . [ ] $ @</code> (يجب ألا ينتهي بـ <code>-</code>).<br>المعاملات الإضافية: XOR (<code>^</code>)، الثوابت (<code>true</code>, <code>false</code>, <code>1</code>, <code>0</code>)، و <code>/</code> لـ OR.",
        wrappers: ["فحص الصلاحية", "فحص القابلية للإرضاء", "جدول الحقيقة", "فحص QBF"]
    },
    nl: {
        brand_badge: "SAT &amp; QBF",
        theme_text: "Thema",
        mode_label: "Modus",
        example_label: "Voorbeeld",
        example_placeholder: "Formule laden...",
        btn_truth_table: "Waarheidstabel",
        btn_copy: "Uitvoer kopiëren",
        btn_copied: "Gekopieerd! ✓",
        loading_text: "Oplosser laden...",
        btn_run: "Uitvoeren",
        btn_kbd: "Shift+Enter",
        formula_title: "Formule",
        output_title: "Uitvoer",
        diag_title: "Diagnostiek",
        input_placeholder: "Voer propositielogica of QBF-formule in, bijv. (p & (p -> q)) -> q",
        output_placeholder: "De uitvoer verschijnt hier na uitvoering.",
        diag_placeholder: "Geen fouten of waarschuwingen.",
        docs_toggle: "Syntax- &amp; gebruikshandleiding",
        docs_usage_title: "Gebruik",
        docs_usage_p1: "Voer een formule in, kies een modus en klik op <strong>Uitvoeren</strong> (of druk op <kbd>Shift</kbd> + <kbd>Enter</kbd>).",
        docs_usage_p2: "<strong>Permalinks:</strong> Elke analyse synchroniseert formule en modus direct naar de URL-hash om eenvoudig te delen.",
        docs_usage_p3: "<strong>Slepen en neerzetten:</strong> Sleep een tekstbestand direct naar het invoerveld om het te openen.",
        docs_modes_title: "Analysemodi",
        docs_mode_validity: "<strong>Geldigheidscontrole:</strong> Controleert of de formule geldig is (een tautologie die waar is onder alle toewijzingen).",
        docs_mode_sat: "<strong>Vervulbaarheidscontrole:</strong> Test of er ten minste één vervullende toewijzing bestaat met PicoSAT.",
        docs_mode_tt: "<strong>Waarheidstabel:</strong> Berekent alle 2<sup>n</sup> evaluaties en toont het aantal modellen.",
        docs_mode_qbf: "<strong>QBF-vervulbaarheid:</strong> Evalueert gekwantificeerde formules met <code>#</code> (∀) en <code>?</code> (∃) via DepQBF.",
        docs_syntax_title: "Syntaxis (EBNF)",
        docs_syntax_notes: "<code>var</code>: letters, cijfers en <code>_ . [ ] $ @</code> (mag niet eindigen op <code>-</code>).<br>Uitgebreide operatoren: XOR (<code>^</code>), constanten (<code>true</code>, <code>false</code>, <code>1</code>, <code>0</code>) en <code>/</code> voor OF.",
        wrappers: ["Geldigheidscontrole", "Vervulbaarheidscontrole", "Waarheidstabel", "QBF-vervulbaarheid"]
    },
    pl: {
        brand_badge: "SAT &amp; QBF",
        theme_text: "Motyw",
        mode_label: "Tryb",
        example_label: "Przykład",
        example_placeholder: "Załaduj formułę...",
        btn_truth_table: "Tabela prawdy",
        btn_copy: "Kopiuj wynik",
        btn_copied: "Skopiowano! ✓",
        loading_text: "Ładowanie solvera...",
        btn_run: "Uruchom",
        btn_kbd: "Shift+Enter",
        formula_title: "Formuła",
        output_title: "Wynik",
        diag_title: "Diagnostyka",
        input_placeholder: "Wprowadź formułę rachunku zdań lub QBF, np. (p & (p -> q)) -> q",
        output_placeholder: "Wynik pojawi się tutaj po uruchomieniu.",
        diag_placeholder: "Brak błędów lub ostrzeżeń.",
        docs_toggle: "Składnia i instrukcja obsługi",
        docs_usage_title: "Użycie",
        docs_usage_p1: "Wpisz formułę, wybierz tryb i kliknij <strong>Uruchom</strong> (lub naciśnij <kbd>Shift</kbd> + <kbd>Enter</kbd>).",
        docs_usage_p2: "<strong>Odnośniki stałe:</strong> Każda analiza synchronizuje formułę i tryb w adresie URL, ułatwiając udostępnianie.",
        docs_usage_p3: "<strong>Przeciągnij i upuść:</strong> Przeciągnij plik tekstowy bezpośrednio na pole edytora, aby go załadować.",
        docs_modes_title: "Tryby analizy",
        docs_mode_validity: "<strong>Test tautologii:</strong> Sprawdza, czy formuła jest zawsze prawdziwa dla wszystkich wartościowań zmiennych.",
        docs_mode_sat: "<strong>Test spełnialności:</strong> Sprawdza za pomocą PicoSAT, czy istnieje przynajmniej jedno wartościowanie spełniające.",
        docs_mode_tt: "<strong>Tabela prawdy:</strong> Oblicza wszystkie 2<sup>n</sup> kombinacji zmiennych i wyświetla liczbę modeli.",
        docs_mode_qbf: "<strong>Spełnialność QBF:</strong> Analizuje formuły kwantyfikowane za pomocą kwantyfikatora <code>#</code> (∀) i <code>?</code> (∃) przez DepQBF.",
        docs_syntax_title: "Składnia (EBNF)",
        docs_syntax_notes: "<code>var</code>: litery, cyfry oraz <code>_ . [ ] $ @</code> (nie może kończyć się znakiem <code>-</code>).<br>Operatory rozszerzone: XOR (<code>^</code>), stałe (<code>true</code>, <code>false</code>, <code>1</code>, <code>0</code>) oraz <code>/</code> dla LUB.",
        wrappers: ["Test tautologii (Validity)", "Test spełnialności (SAT)", "Tabela prawdy", "Spełnialność QBF"]
    },
    tr: {
        brand_badge: "SAT ve QBF",
        theme_text: "Tema",
        mode_label: "Mod",
        example_label: "Örnek",
        example_placeholder: "Formül yükle...",
        btn_truth_table: "Doğruluk Tablosu",
        btn_copy: "Çıktıyı Kopyala",
        btn_copied: "Kopyalandı! ✓",
        loading_text: "Çözücü yükleniyor...",
        btn_run: "Çalıştır",
        btn_kbd: "Shift+Enter",
        formula_title: "Formül",
        output_title: "Çıktı",
        diag_title: "Tanılama",
        input_placeholder: "Önermeler mantığı veya QBF formülü girin, örn. (p & (p -> q)) -> q",
        output_placeholder: "Çözücü çıktısı çalıştırıldıktan sonra burada görünecektir.",
        diag_placeholder: "Hata veya uyarı yok.",
        docs_toggle: "Sözdizimi ve Kullanım Kılavuzu",
        docs_usage_title: "Kullanım",
        docs_usage_p1: "Formülü düzenleyiciye girin, modu seçin ve <strong>Çalıştır</strong>'a tıklayın (veya <kbd>Shift</kbd> + <kbd>Enter</kbd> tuşlarına basın).",
        docs_usage_p2: "<strong>Kalıcı Bağlantılar:</strong> Her analiz, formülü ve modu doğrudan URL'ye senkronize eder.",
        docs_usage_p3: "<strong>Sürükle ve Bırak:</strong> Yerel bir metin dosyasını doğrudan düzenleyiciye sürükleyerek yükleyebilirsiniz.",
        docs_modes_title: "Analiz Modları",
        docs_mode_validity: "<strong>Geçerlilik Denetimi:</strong> Formülün her değişken atamasında doğru (totoloji) olup olmadığını denetler.",
        docs_mode_sat: "<strong>Sağlanabilirlik Denetimi:</strong> PicoSAT kullanarak formülü sağlayan en az bir atama olup olmadığını test eder.",
        docs_mode_tt: "<strong>Doğruluk Tablosu:</strong> Tüm 2<sup>n</sup> değişken değerlendirmesini hesaplar ve model sayılarını gösterir.",
        docs_mode_qbf: "<strong>QBF Sağlanabilirlik:</strong> DepQBF ile evrensel <code>#</code> (∀) ve varlıksal <code>?</code> (∃) niceleyicileri içeren formülleri değerlendirir.",
        docs_syntax_title: "Sözdizimi (EBNF)",
        docs_syntax_notes: "<code>var</code>: harfler, sayılar ve <code>_ . [ ] $ @</code> (sonunda <code>-</code> olamaz).<br>Genişletilmiş işleçler: XOR (<code>^</code>), sabitler (<code>true</code>, <code>false</code>, <code>1</code>, <code>0</code>) ve VEYA için <code>/</code>.",
        wrappers: ["Geçerlilik Denetimi", "Sağlanabilirlik Denetimi", "Doğruluk Tablosu", "QBF Sağlanabilirlik"]
    }
};

window.currentLanguage = 'en';

window.setLanguage = function(lang) {
    if (!window.translations[lang]) lang = 'en';
    window.currentLanguage = lang;

    try {
        localStorage.setItem("limboole_lang", lang);
    } catch(e) {}

    let t = window.translations[lang];

    // Update document language & direction
    document.documentElement.lang = lang;
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }

    // Update select element if present
    let langSelect = document.getElementById("language_select");
    if (langSelect && langSelect.value !== lang) {
        langSelect.value = lang;
    }

    // Update text for all elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(function(el) {
        let key = el.getAttribute("data-i18n");
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // Update placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function(el) {
        let key = el.getAttribute("data-i18n-placeholder");
        if (t[key] !== undefined) {
            el.setAttribute("placeholder", t[key]);
        }
    });

    // Update titles
    document.querySelectorAll("[data-i18n-title]").forEach(function(el) {
        let key = el.getAttribute("data-i18n-title");
        if (t[key] !== undefined) {
            el.setAttribute("title", t[key]);
        }
    });

    // Update select_wrapper options
    let selectWrapper = document.getElementById("select_wrapper");
    if (selectWrapper && selectWrapper.options && t.wrappers) {
        for (let i = 0; i < selectWrapper.options.length && i < t.wrappers.length; i++) {
            selectWrapper.options[i].textContent = t.wrappers[i];
        }
    }

    // Update example_select placeholder option
    let exampleSelect = document.getElementById("example_select");
    if (exampleSelect && exampleSelect.options && exampleSelect.options[0]) {
        exampleSelect.options[0].textContent = t.example_placeholder;
    }
};

// Enhanced copyResult to support localized feedback
window.copyResult = function() {
    let stdout = document.getElementById("stdout");
    if (!stdout || !stdout.value) return;
    navigator.clipboard.writeText(stdout.value).then(function() {
        let btn = document.getElementById("copy-result-btn");
        if (!btn) return;
        let textSpan = btn.querySelector("span");
        let orig = textSpan ? textSpan.innerText : btn.innerText;
        let t = window.translations[window.currentLanguage] || window.translations.en;
        let copiedMsg = t.btn_copied || "Copied! ✓";
        if (textSpan) {
            textSpan.innerText = copiedMsg;
            setTimeout(function() { textSpan.innerText = orig; }, 1500);
        } else {
            btn.innerText = copiedMsg;
            setTimeout(function() { btn.innerText = orig; }, 1500);
        }
    });
};

// Initialize language on DOM readiness
function initLimbooleLanguage() {
    let lang = 'en';
    try {
        let stored = localStorage.getItem("limboole_lang");
        if (stored && window.translations[stored]) {
            lang = stored;
        } else if (navigator.language) {
            let browserPrefix = navigator.language.slice(0, 2).toLowerCase();
            if (window.translations[browserPrefix]) {
                lang = browserPrefix;
            }
        }
    } catch(e) {}

    window.setLanguage(lang);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLimbooleLanguage);
} else {
    initLimbooleLanguage();
}
