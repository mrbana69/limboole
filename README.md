# Limboole

> **Fast Propositional Logic (SAT) and Quantified Boolean Formula (QBF) Solver & Web Playground**

---

## 📌 Attribution & Original Credits

**This project is a modernized fork and update of the original Limboole.**

The core solver engine, grammar, and original WebAssembly web application were designed and implemented by the original creators:

* **[Armin Biere](http://fmv.jku.at/biere/)** (Johannes Kepler University Linz / University of Freiburg) — Original author of [Limboole](http://fmv.jku.at/limboole/) and [PicoSAT](http://fmv.jku.at/picosat/).
* **[Martina Seidl](http://fmv.jku.at/seidl/)** (Johannes Kepler University Linz) — Quantified Boolean Formulas (QBF) support.
* **[Florian Lonsing](https://lonsing.github.io/)** (Vienna University of Technology) — Author of [DepQBF](https://lonsing.github.io/depqbf/).
* **[Max Heisinger](https://github.com/maximaximal)** — Original creator of the WebAssembly port, CMake build system, and the web app *"Limboole on the Go!"* ([maximaximal/limboole](https://github.com/maximaximal/limboole)).

---

## 🚀 About This Update (Fork by [@mrbana69](https://github.com/mrbana69))

This repository builds upon the foundational work above, treating this as a feature and UI update:

1. **Modern Developer-Tool UI:**
   * Redesigned the web interface into a clean, editor-first developer tool.
   * Compact workspace with side-by-side split layout (formula editor and output/diagnostics).
   * Refined light and dark modes with a restrained neutral palette.
   * Zero marketing bloat or hero distractions; focused on rapid formula analysis.

2. **Multi-Language Internationalization (14 Languages):**
   * Added dynamic client-side localization supporting English (`en`), Spanish (`es`), German (`de`), Italian (`it`), French (`fr`), Portuguese (`pt`), Chinese (`zh`), Japanese (`ja`), Korean (`ko`), Russian (`ru`), Arabic (`ar` with RTL layout), Dutch (`nl`), Polish (`pl`), and Turkish (`tr`).
   * Persistent language preference (`localStorage`) with automatic browser language detection.

3. **Truth Table Generator (`-t`):**
   * Built-in ASCII truth table evaluation displaying all $2^n$ assignments and satisfying model counts.
   * Available both in the CLI (`-t`) and directly in the browser UI.

4. **Extended Syntax & Operators:**
   * Exclusive-OR (`^`).
   * Boolean constants (`true`, `false`, `1`, `0`).
   * Alternative OR syntax (`/`).

5. **Python Bindings & Package:**
   * Full Python package (`import limboole`) with `check()`, `is_valid()`, `is_sat()`, and `truth_table()`.
   * Standard `pyproject.toml` configuration ready for packaging and distribution.

6. **JSON Output (`-j`):**
   * Machine-readable structured JSON format for automated evaluation pipelines.

7. **Continuous Integration & Testing:**
   * GitHub Actions workflow testing on Ubuntu, Windows, and macOS.
   * Comprehensive 73/73 test suite for C engine (`testlimboole`) + `pytest` suite for Python bindings.

---

## 💻 Web Interface ("Limboole on the Go!")

The web application runs entirely client-side using WebAssembly compiled with Emscripten:

```bash
# Serve locally
python -m http.server 8080
```

Open `http://localhost:8080/index.html` in your browser.

* **Run Formula:** Click **Run** or press <kbd>Shift</kbd> + <kbd>Enter</kbd>.
* **Share:** The URL hash automatically synchronizes with the active formula and analysis mode for one-click sharing.
* **Drag & Drop:** Drop `.txt` or `.dimacs` files directly onto the editor.

---

## 🐍 Python Usage

Install the package:

```bash
pip install .
```

Use in Python:

```python
import limboole

# Check validity (tautology)
limboole.is_valid("p | !p")       # True
limboole.is_valid("p & q")        # False

# Check satisfiability (SAT)
limboole.is_sat("p & q")          # True
limboole.is_sat("p & !p")         # False

# Detailed solver check with assignments
res = limboole.check("p & q", sat=False)
# {'status': 'INVALID', 'valid': False, 'assignment': {'p': 1, 'q': 0}}

# Truth table generation
print(limboole.truth_table("p ^ q"))
# | p   | q   | Result |
# |-----|-----|--------|
# | 0   | 0   |   0    |
# | 0   | 1   |   1    |
# | 1   | 0   |   1    |
# | 1   | 1   |   0    |
# % Models: 2 / 4 (Satisfiable, Contingent)
```

---

## ⚙️ Command-Line Interface (CLI)

```
limboole [ <option> ... ] [ <in-file> ]

Options:
  -h, --help        print command line summary and exit
  --version         print the version and exit
  -v                increase verbosity
  -p                pretty print input formula only
  -d                dump generated CNF only
  -s                check satisfiability (default: validity)
  -t, --truth-table print ASCII truth table of the formula
  -j, --json        output result in JSON format
  -o <out-file>     set output file (default: stdout)
  -l <log-file>     set log file (default: stderr)
  --picosat         use PicoSAT SAT solver back-end
  --depqbf          use DepQBF QBF solver back-end
```

---

## 📖 Syntax & Grammar (EBNF)

```ebnf
expr    ::= iff
iff     ::= implies { '<->' implies }
implies ::= or [ '->' or | '<-' or ]
or      ::= xor { ('|' | '/') xor }
xor     ::= and { '^' and }
and     ::= not { '&' not }
not     ::= basic | '!' not | '~' not | '-' not
basic   ::= var | const | '(' expr ')'
const   ::= 'true' | 'false' | '1' | '0'
```

* `var` is a string over letters, digits, and `_ . [ ] $ @` (cannot end with `-`).
* Quantified formulas (QBF): prefix with `#x` (universal $\forall$) and `?y` (existential $\exists$).

---

## 🛠 Building from Source

```bash
cmake -B build
cmake --build build
ctest --test-dir build --output-on-failure
```

---

## 📄 License

* Limboole and PicoSAT are licensed under the **MIT License**.
* DepQBF is licensed under the **GNU General Public License v3.0 (GPLv3)**.
* Original repository: [maximaximal/limboole](https://github.com/maximaximal/limboole) by Max Heisinger.
