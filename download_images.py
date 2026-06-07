import urllib.request
import re
import os

# Create User-Agent header to avoid being blocked
headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

def get_images(query, limit=10):
    url = f"https://unsplash.com/s/photos/{query}"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            # Extract photo URLs
            urls = re.findall(r'https://images.unsplash.com/photo-[a-zA-Z0-9\-]+', html)
            # Remove duplicates while preserving order
            seen = set()
            unique_urls = []
            for u in urls:
                if u not in seen:
                    seen.add(u)
                    unique_urls.append(u)
            return unique_urls[:limit]
    except Exception as e:
        print(f"Error fetching {query}: {e}")
        return []

# Search for both queries
urls_ethnic = get_images("indian-ethnic-wear", 15)
urls_clothing = get_images("indian-clothing-model", 15)

# Combine and deduplicate
all_urls = []
seen = set()
for u in urls_ethnic + urls_clothing:
    if u not in seen:
        seen.add(u)
        all_urls.append(u)

print(f"Found {len(all_urls)} image candidates.")

# Let's specify our target names in public/images/
targets = [
    ("product-1.png", "A bright, colourful floral/sage print"),
    ("product-2.png", "A bright warm terracotta/orange style"),
    ("product-3.png", "A bright mustard yellow lifestyle dress"),
    ("product-4.png", "A bright indigo blue dress"),
    ("product-5.png", "A bright colorful co-ord or dress"),
    ("hero.png", "A bright, stunning Chikankari/white dress or floral kurti"),
]

# Download images
dest_dir = "./public/images"
os.makedirs(dest_dir, exist_ok=True)

# Select a subset of URLs that look bright and diverse
# To ensure they are bright, we can pick distinct images from the results
# Let's write them
for i, (filename, desc) in enumerate(targets):
    if i < len(all_urls):
        url = all_urls[i]
        # Request a cropped version at a good resolution (e.g. 800x800 for products, 1600x900 for hero)
        if filename == "hero.png":
            img_url = f"{url}?q=80&w=1600&h=900&fit=crop&auto=format"
        else:
            img_url = f"{url}?q=80&w=800&h=800&fit=crop&auto=format"
            
        print(f"Downloading {filename} ({desc}) from {img_url}...")
        req = urllib.request.Request(img_url, headers=headers)
        try:
            with urllib.request.urlopen(req) as response:
                with open(os.path.join(dest_dir, filename), 'wb') as f:
                    f.write(response.read())
            print(f"Successfully downloaded {filename}")
        except Exception as e:
            print(f"Failed to download {filename}: {e}")
