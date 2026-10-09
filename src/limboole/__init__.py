"""Limboole: Boolean and QBF validity and satisfiability solver."""

import json
import os
import shutil
import subprocess
import sys
import sysconfig
from typing import Any, Dict, Optional, Union

__version__ = "1.3.2"


def _find_binary(name: str = "limboole") -> str:
    """Locate the limboole binary across environments."""
    env_bin = os.environ.get("LIMBOOLE_BIN")
    if env_bin and os.path.isfile(env_bin):
        return env_bin

    # Check local build directory relative to this file first
    repo_root = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
    for sub in ("build", "cmake-build-release", "cmake-build-debug", "bin"):
        for ext in (".exe", "") if sys.platform == "win32" else ("",):
            candidate = os.path.join(repo_root, sub, f"{name}{ext}")
            if os.path.isfile(candidate):
                return candidate

    # Check python Scripts / bin folder
    scripts_dir = sysconfig.get_path("scripts")
    for ext in (".exe", "") if sys.platform == "win32" else ("",):
        candidate = os.path.join(scripts_dir, f"{name}{ext}")
        if os.path.isfile(candidate):
            return candidate

    # Check PATH
    bin_name = f"{name}.exe" if sys.platform == "win32" else name
    path_bin = shutil.which(bin_name)
    if path_bin and os.path.isfile(path_bin):
        return path_bin

    return bin_name


def check(
    formula: str,
    sat: bool = False,
    qbf: bool = False,
    json_output: bool = True,
    timeout: Optional[float] = None,
) -> Union[Dict[str, Any], str]:
    """Check a formula for validity or satisfiability.

    Args:
        formula: Boolean formula string (e.g. 'p & (p -> q) -> q').
        sat: If True, check satisfiability instead of validity.
        qbf: If True, use DepQBF solver.
        json_output: If True, returns parsed dictionary with status and assignment.
        timeout: Timeout in seconds for solver execution.

    Returns:
        A dictionary containing 'status', 'valid', 'satisfiable', and 'assignment'
        if json_output is True, or the raw string output otherwise.
    """
    binary = _find_binary("limboole")
    cmd = [binary]

    if sat:
        cmd.append("-s")
    if qbf:
        cmd.append("--depqbf")
    if json_output:
        cmd.append("-j")

    proc = subprocess.run(
        cmd,
        input=formula.strip(),
        text=True,
        capture_output=True,
        timeout=timeout,
        check=False,
    )

    if proc.returncode != 0 and not proc.stdout:
        raise RuntimeError(f"Limboole failed with code {proc.returncode}: {proc.stderr.strip()}")

    output = proc.stdout.strip()
    if json_output:
        try:
            return json.loads(output)
        except json.JSONDecodeError:
            pass

    return output


def is_valid(formula: str, timeout: Optional[float] = None) -> bool:
    """Check if a propositional formula is valid (a tautology)."""
    res = check(formula, sat=False, json_output=True, timeout=timeout)
    if isinstance(res, dict):
        return bool(res.get("valid", False))
    return "% VALID" in str(res)


def is_sat(formula: str, timeout: Optional[float] = None) -> bool:
    """Check if a propositional formula is satisfiable."""
    res = check(formula, sat=True, json_output=True, timeout=timeout)
    if isinstance(res, dict):
        return bool(res.get("satisfiable", False))
    return "% SATISFIABLE" in str(res)


def truth_table(
    formula: str,
    as_json: bool = False,
    timeout: Optional[float] = None,
) -> Union[str, Dict[str, Any]]:
    """Generate the truth table for a given propositional formula.

    Args:
        formula: Boolean formula string.
        as_json: If True, returns structured JSON/dict. Otherwise, ASCII table string.
        timeout: Timeout in seconds.

    Returns:
        Formatted ASCII truth table string, or structured dictionary.
    """
    binary = _find_binary("limboole")
    cmd = [binary, "-t"]
    if as_json:
        cmd.append("-j")

    proc = subprocess.run(
        cmd,
        input=formula.strip(),
        text=True,
        capture_output=True,
        timeout=timeout,
        check=False,
    )

    if proc.returncode != 0 and not proc.stdout:
        raise RuntimeError(f"Limboole truth-table failed: {proc.stderr.strip()}")

    out = proc.stdout.strip()
    if as_json:
        return json.loads(out)
    return out


solve = check
