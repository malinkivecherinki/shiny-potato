#!/usr/bin/env python3
"""
HTTP client utility.
"""

import urllib.request
import json

def fetch_url(url):
    """Fetch content from URL."""
    try:
        with urllib.request.urlopen(url) as response:
            return response.read().decode('utf-8')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def fetch_json(url):
    """Fetch and parse JSON from URL."""
    content = fetch_url(url)
    if content:
        return json.loads(content)
    return None
