#!/usr/bin/env python3
"""
Utility module 12 script for data processing.
"""

import json
import sys

def process_data_12(input_data):
    """Process input data."""
    if isinstance(input_data, str):
        return input_data.upper()
    elif isinstance(input_data, dict):
        return {k.upper(): v for k, v in input_data.items()}
    return input_data

if __name__ == "__main__":
    data = sys.argv[1] if len(sys.argv) > 1 else "default"
    result = process_data_12(data)
    print(json.dumps(result, indent=2))
