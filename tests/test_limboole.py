"""Tests for Limboole Python API."""

import pytest
import sys
import os

# Ensure src is on sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "src")))

import limboole


def test_is_valid():
    assert limboole.is_valid("p | !p") is True
    assert limboole.is_valid("p & q") is False
    assert limboole.is_valid("((p -> q) -> p) -> p") is True  # Peirce's law


def test_is_sat():
    assert limboole.is_sat("p & q") is True
    assert limboole.is_sat("p & !p") is False
    assert limboole.is_sat("p ^ q") is True
    assert limboole.is_sat("p ^ p") is False


def test_check_validity_assignment():
    res = limboole.check("p & q", sat=False)
    assert res["status"] == "INVALID"
    assert res["valid"] is False
    assert "assignment" in res
    assert isinstance(res["assignment"], dict)


def test_constants():
    assert limboole.is_valid("p | true") is True
    assert limboole.is_sat("p & false") is False
    assert limboole.is_valid("p | 1") is True
    assert limboole.is_sat("p & 0") is False


def test_xor_operator():
    assert limboole.is_valid("(p ^ q) <-> (!p & q | p & !q)") is True
    assert limboole.is_sat("p ^ q") is True


def test_truth_table_ascii():
    table = limboole.truth_table("p & q")
    assert "Result" in table
    assert "| 1" in table
    assert "Models: 1 / 4" in table


def test_truth_table_json():
    data = limboole.truth_table("p ^ q", as_json=True)
    assert data["type"] == "truth_table"
    assert data["variables"] == ["p", "q"]
    assert len(data["rows"]) == 4
    assert data["models"] == 2
    assert data["total_rows"] == 4
    assert data["satisfiable"] is True
    assert data["valid"] is False
