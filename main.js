// Limboole Web GUI

window.input__ = (c) => alert("UNHANDLED INPUT");
window.stderr__ = (c) => alert("UNHANDLED STDERR");
window.stdout__ = (c) => alert("UNHANDLED STDOUT");

class StdinToStdoutProcessor {
    print_line_stdout(line) {
        console.out("STDOUT: " + line);
    };
    print_line_stderr(line) {
        console.out("STDERR: " + line);
    };

    stdin() {
        if (this.input_str_pos < this.input_str.length) {
            let c = this.input_str.charCodeAt(this.input_str_pos);
            this.input_str_pos += 1;
            return c;
        } else {
            return null;
        }
    }
    stdout(code) {
        if (code === "\n".charCodeAt(0) && this.stdout_buf !== "") {
            this.print_line_stdout(this.stdout_buf + "\n");
            this.stdout_buf = "";
        } else {
            this.stdout_buf += String.fromCharCode(code);
        }
    }
    stderr(code) {
        if (code === "\n".charCodeAt(0) && this.stderr_buf !== "") {
            this.print_line_stderr(this.stderr_buf + "\n");
            this.stderr_buf = "";
        } else {
            this.stderr_buf += String.fromCharCode(code);
        }
    }
    
    constructor(creatorFunc, resolve, reject) {
        this.input_str_pos = 0;
        this.input_str = "";
        this.ready = false;

        this.stdout_buf = "";
        this.stderr_buf = "";

        let options = {
            preRun: function(mod) {
                function stdin() {
                    return window.input__();
                }

                function stdout(c) {
                    window.stdout__(c);
                }

                function stderr(c) {
                    window.stderr__(c);
                }

                mod.FS.init(stdin, stdout, stderr);
            }
        };

        var self = this;

        console.debug("Creating Processor");
        createLimbooleModule(options).then(function(Module) {
            self.Module = Module;
            window.input__ = function() {return '';};
            window.stdout__ = function(_) {};
            window.stderr__ = function(_) {};

            console.debug("Initial Processor Startup");
            Module.callMain();
            console.debug("Initialized Processor");
            self.limboole = Module.cwrap('limboole_extended', 'number', ['number', 'array', 'number', 'string', 'number']);
            resolve();
            self.ready = true;
        });
    };

    run(input, satcheck, stdout_writeln, stderr_writeln) {
        this.input_str = input;
        this.input_str_pos = 0;
        this.print_line_stdout = stdout_writeln;
        this.print_line_stderr = stderr_writeln;

        window.stdout__ = this.stdout.bind(this);
        window.stderr__ = this.stderr.bind(this);
        
        let status = this.limboole(1, [""], satcheck, input, input.length);
        
        if(this.stdout_buf != "") {
            this.print_line_stdout(this.stdout_buf);
            this.stdout_buf = "";
        }
        if(this.stderr_buf != "") {
            this.print_line_stderr(this.stdout_buf);
            this.stderr_buf = "";
        }
    }
};

class ProcessorWrapper {
    constructor(processor, name, args) {
        this.processor = processor;
        this.name = name;
        this.args = args;
    }

    run(input, stdout, stderr) {
        if(!this.ready()) {
            alert("Not yet ready for execution! Wait until Limboole has been downloaded and compiled!");
            return;
        }
        this.processor.run(input, this.args, stdout, stderr);
    }

    ready() {
        return this.processor.ready;
    }
};


function run_wrapper(wrapper) {
    window.input_textarea = document.getElementById("input");
    window.stdout_textarea = document.getElementById("stdout");
    window.stderr_textarea = document.getElementById("stderr");

    function writeln(element, line) {
        element.value += line;

        element.style.height = 'auto';
        element.style.height = (element.scrollHeight) + 'px';
    };

    window.stdout_textarea.value = "";
    window.stderr_textarea.value = "";

    wrapper.run.bind(wrapper)(window.input_textarea.value, function(line) { writeln(window.stdout_textarea, line); }, function(line) { writeln(window.stderr_textarea, line); } );
}

window.LimbooleLoadedPromise = new Promise(function(resolve, reject) {
    window.Processors = [
        new StdinToStdoutProcessor(createLimbooleModule, resolve, reject),
    ];
});

window.LimbooleLoadedPromise.then(function() {
    $("#loading-indicator").hide();
    $("#run-btn").removeClass("invisible");
});

window.Wrappers = [
    new ProcessorWrapper(window.Processors[0], "Validity Check", 0 ),
    new ProcessorWrapper(window.Processors[0], "Satisfiability Check", 1),
    new ProcessorWrapper(window.Processors[0], "Truth Table", 4),
    new ProcessorWrapper(window.Processors[0], "QBF Satisfiability Check", 3)
];

let selector = document.getElementById("select_wrapper");
for(let i = 0; i < window.Wrappers.length; ++i) {
    let proc = window.Wrappers[i];
    let o = document.createElement('option');
    o.appendChild(document.createTextNode(proc.name));
    o.value = i;
    selector.appendChild(o);
}

function stateToLocationHash() {
    let selector = document.getElementById("select_wrapper");
    let input = document.getElementById("input");
    return encodeURIComponent(selector.options.selectedIndex + input.value);
}

function applyFromLocationHash() {
    if(window.location.hash != "" && window.location.hash != undefined && window.location.hash != null) {
        let selector = document.getElementById("select_wrapper");
        let input = document.getElementById("input");

        let h = decodeURIComponent(window.location.hash);

        let v = parseInt(h.charAt(1));
        if(isNaN(v) || v >= window.Wrappers.length) { v = 0; }
        selector.value = v;
        input.value = h.substring(2);

        input.style.height = 'auto';
        input.style.height = (input.scrollHeight) + 'px';

        window.LimbooleLoadedPromise.then(function() {
            window.run_();
        });
    }
}

window.run_ = function() {
    let selector = document.getElementById("select_wrapper");
    let selIdx = selector.options.selectedIndex;
    if (window.Wrappers[selIdx].name === "Truth Table") {
        window.generateTruthTableUI();
    } else {
        let wr = window.Wrappers[selIdx];
        run_wrapper(wr);
    }
    window.location.hash = stateToLocationHash();
};

document.getElementById("input").onkeydown = function(e) {
    if (e.keyCode == 13)
    {
        //      if (e.shiftKey === true)
        if (e.shiftKey)  // thruthy
        {
            window.run_();
            e.preventDefault();
            return false;
        }
        return true;
    }
    return true;
};

let inputDiv = document.getElementById("input");
let inputDivHeaderStatus = document.getElementById("input_annotation");

// File Reader taken from https://stackoverflow.com/a/11313902
if (typeof window.FileReader === 'undefined') {
    // No registering, as file reading is not possible!
} else {
    inputDivHeaderStatus.classList.remove("hide");
    inputDivHeaderStatus.innerHTML = 'Drag&Drop ✓';

    inputDiv.ondragover = function() {
        this.classList.add('hover');
        return false;
    };
    var endevcb = function() {
        this.classList.remove('hover');
        return false;
    }
    inputDiv.ondragend = endevcb;
    inputDiv.onmouseleave = endevcb;

    inputDiv.ondrop = function(e) {
        this.classList.remove('hover');
        e.preventDefault();

        var file = e.dataTransfer.files[0],
            reader = new FileReader();
        reader.onload = function(event) {
            inputDiv.value = event.target.result;
            $(inputDiv).trigger('change');
            window.run_();
        };
        reader.readAsText(file);

        return false;
    };
}

$('textarea').each(function () {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
}).on('input change', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});



applyFromLocationHash();

// =============================================
// UI Helpers & In-Browser Truth Table Evaluator
// =============================================

window.loadExample = function(formula) {
    if (!formula) return;
    let input = document.getElementById("input");
    input.value = formula;
    input.style.height = 'auto';
    input.style.height = (input.scrollHeight) + 'px';
    let selector = document.getElementById("select_wrapper");
    if (formula.startsWith("#") || formula.startsWith("?")) {
        selector.value = 3; // QBF mode
    } else {
        selector.value = 0; // Validity check by default
    }
    window.run_();
};

window.copyResult = function() {
    let stdout = document.getElementById("stdout");
    if (!stdout || !stdout.value) return;
    navigator.clipboard.writeText(stdout.value).then(function() {
        let btn = document.getElementById("copy-result-btn");
        let orig = btn.innerText;
        btn.innerText = "Copied! ✓";
        setTimeout(function() { btn.innerText = orig; }, 1500);
    });
};

window.toggleDarkMode = function() {
    document.body.classList.toggle("dark-mode");
    let isDark = document.body.classList.contains("dark-mode");
    try {
        localStorage.setItem("limboole_dark_mode", isDark ? "1" : "0");
    } catch(e) {}
};

try {
    if (localStorage.getItem("limboole_dark_mode") === "1" ||
        (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && localStorage.getItem("limboole_dark_mode") === null)) {
        document.body.classList.add("dark-mode");
    }
} catch(e) {}

function evalTruthTable(input) {
    let lines = input.split("\n");
    let clean = lines.map(l => l.replace(/%.*$/, "")).join(" ").trim();
    if (!clean) return "Error: empty input formula";
    if (clean.includes("#") || clean.includes("?")) {
        return "% Truth table is not supported for quantified formulas (QBF)\n";
    }

    let pos = 0;
    function nextToken() {
        while (pos < clean.length && /\s/.test(clean[pos])) pos++;
        if (pos >= clean.length) return { type: 'EOF' };
        if (clean.substr(pos, 3) === '<->') { pos += 3; return { type: 'IFF' }; }
        if (clean.substr(pos, 2) === '<-') { pos += 2; return { type: 'SEILPMI' }; }
        if (clean.substr(pos, 2) === '->') { pos += 2; return { type: 'IMPLIES' }; }
        let c = clean[pos];
        if (c === '(' || c === ')') { pos++; return { type: c }; }
        if (c === '&') { pos++; return { type: 'AND' }; }
        if (c === '|' || c === '/') { pos++; return { type: 'OR' }; }
        if (c === '^') { pos++; return { type: 'XOR' }; }
        if (c === '!' || c === '~') { pos++; return { type: 'NOT' }; }
        if (c === '-') {
            pos++;
            return { type: 'NOT' };
        }
        if (/[a-zA-Z0-9_\.\[\]\$@]/.test(c)) {
            let start = pos;
            while (pos < clean.length && /[a-zA-Z0-9_\-\.\[\]\$@]/.test(clean[pos])) pos++;
            let name = clean.substring(start, pos);
            if (name.endsWith('-')) throw new Error(`variable '${name}' ends with '-'`);
            if (name === 'true' || name === 'TRUE' || name === '1') return { type: 'CONST', val: 1 };
            if (name === 'false' || name === 'FALSE' || name === '0') return { type: 'CONST', val: 0 };
            return { type: 'VAR', name: name };
        }
        throw new Error("Invalid character: '" + c + "'");
    }

    let tokens = [];
    while (true) {
        let t = nextToken();
        tokens.push(t);
        if (t.type === 'EOF') break;
    }

    let tIndex = 0;
    function peek() { return tokens[tIndex]; }
    function consume(type) {
        let t = tokens[tIndex++];
        if (type && t.type !== type) throw new Error("Expected " + type + " but got " + t.type);
        return t;
    }

    function parseExpr() { return parseIff(); }
    function parseIff() {
        let left = parseImplies();
        while (peek().type === 'IFF') {
            consume('IFF');
            let right = parseImplies();
            let l = left, r = right;
            left = (env) => (l(env) === r(env) ? 1 : 0);
        }
        return left;
    }
    function parseImplies() {
        let left = parseOr();
        if (peek().type === 'IMPLIES') {
            consume('IMPLIES');
            let right = parseOr();
            let l = left, r = right;
            return (env) => (!l(env) || r(env) ? 1 : 0);
        }
        if (peek().type === 'SEILPMI') {
            consume('SEILPMI');
            let right = parseOr();
            let l = left, r = right;
            return (env) => (l(env) || !r(env) ? 1 : 0);
        }
        return left;
    }
    function parseOr() {
        let left = parseXor();
        while (peek().type === 'OR') {
            consume('OR');
            let right = parseXor();
            let l = left, r = right;
            left = (env) => (l(env) || r(env) ? 1 : 0);
        }
        return left;
    }
    function parseXor() {
        let left = parseAnd();
        while (peek().type === 'XOR') {
            consume('XOR');
            let right = parseAnd();
            let l = left, r = right;
            left = (env) => (l(env) ^ r(env));
        }
        return left;
    }
    function parseAnd() {
        let left = parseNot();
        while (peek().type === 'AND') {
            consume('AND');
            let right = parseNot();
            let l = left, r = right;
            left = (env) => (l(env) && r(env) ? 1 : 0);
        }
        return left;
    }
    function parseNot() {
        if (peek().type === 'NOT') {
            consume('NOT');
            let sub = parseNot();
            return (env) => (sub(env) ? 0 : 1);
        }
        return parseBasic();
    }
    let varsSet = new Set();
    function parseBasic() {
        let t = peek();
        if (t.type === '(') {
            consume('(');
            let sub = parseExpr();
            consume(')');
            return sub;
        }
        if (t.type === 'CONST') {
            consume('CONST');
            let val = t.val;
            return () => val;
        }
        if (t.type === 'VAR') {
            consume('VAR');
            let name = t.name;
            varsSet.add(name);
            return (env) => (env[name] ? 1 : 0);
        }
        throw new Error("Expected variable or '(' but got '" + (t.name || t.type) + "'");
    }

    let fn = parseExpr();
    if (peek().type !== 'EOF') throw new Error("Unexpected token after formula: " + peek().type);

    let varList = Array.from(varsSet).sort();
    let n = varList.length;
    if (n > 16) {
        return `% Truth table omitted: formula has ${n} variables (2^${n} rows). Maximum supported is 16 variables.\n`;
    }

    let colWidths = varList.map(v => Math.max(v.length, 3));
    let header = "|" + varList.map((v, i) => " " + v.padEnd(colWidths[i]) + " |").join("") + " Result |\n|";
    let sep = varList.map((v, i) => "-".repeat(colWidths[i] + 2) + "|").join("") + "--------|\n";

    let rowsOut = [];
    let total = n === 0 ? 1 : Math.pow(2, n);
    let models = 0;

    for (let r = 0; r < total; r++) {
        let env = {};
        for (let i = 0; i < n; i++) {
            let bit = (r >> (n - 1 - i)) & 1;
            env[varList[i]] = bit;
        }
        let res = fn(env);
        if (res) models++;
        let rowStr = "|" + varList.map((v, i) => " " + String(env[v]).padEnd(colWidths[i]) + " |").join("") + `   ${res}    |`;
        rowsOut.push(rowStr);
    }

    let status = models === total ? "Valid, Tautology" : (models === 0 ? "Unsatisfiable, Contradiction" : "Satisfiable, Contingent");
    let summary = `\n% Models: ${models} / ${total} (${status})\n`;
    return header + sep + rowsOut.join("\n") + summary;
}

window.generateTruthTableUI = function() {
    let input = document.getElementById("input").value;
    let stdout = document.getElementById("stdout");
    let stderr = document.getElementById("stderr");
    stdout.value = "";
    stderr.value = "";
    try {
        let table = evalTruthTable(input);
        stdout.value = table;
    } catch(err) {
        stderr.value = "Error: " + err.message + "\n";
    }
    stdout.style.height = 'auto';
    stdout.style.height = (stdout.scrollHeight) + 'px';
    stderr.style.height = 'auto';
    stderr.style.height = (stderr.scrollHeight) + 'px';
};

