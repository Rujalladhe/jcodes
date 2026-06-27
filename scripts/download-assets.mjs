// Downloads ChainGPT homepage assets from the Webflow CDN into public/.
// Run: node scripts/download-assets.mjs
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const CDN = 'https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/';

// [remoteUrl, localPath]
const ASSETS = [
  // Fonts
  [CDN + '64354f50a05bcf61015b4b01_VioletSans-Regular.woff2', 'public/fonts/VioletSans-Regular.woff2'],
  // Logos
  [CDN + '648329053d5c25f54cbb89c2_chaingpt-logoLight-Neon-2.svg', 'public/images/chaingpt-logo-neon.svg'],
  [CDN + '6483293322613c6de68e41b9_chaingpt-logoLight-Mono-2.svg', 'public/images/chaingpt-logo-mono.svg'],
  // Corner bracket decorations
  [CDN + '644fa7ccb2061a3f72c97c6b_corner-bottom-left.svg', 'public/images/corner-bottom-left.svg'],
  [CDN + '644fa7ccf9e72f37ae5162ad_corner-bottom-right.svg', 'public/images/corner-bottom-right.svg'],
  [CDN + '644fa7cd9bc7d5ed92d90f21_corner-top-left.svg', 'public/images/corner-top-left.svg'],
  [CDN + '644fa7cdb9ca0ac43e739b5f_corner-top-right.svg', 'public/images/corner-top-right.svg'],
  [CDN + '64527b1b8e77ad50e87ce02a_corner-top-left-l.svg', 'public/images/corner-top-left-l.svg'],
  [CDN + '64527b20d8de852bcf4960b6_corner-bottom-right-l.svg', 'public/images/corner-bottom-right-l.svg'],
  [CDN + '682f1df8669ff6e276f2adc4_corner-violet-top.svg', 'public/images/corner-violet-top.svg'],
  [CDN + '682f1dfdda81ffe3e0082e96_corner-violet-bottom.svg', 'public/images/corner-violet-bottom.svg'],
  [CDN + '682ae99a09f216a0d1bfc848_ecosystem-nb-corner-top.svg', 'public/images/ecosystem-nb-corner-top.svg'],
  [CDN + '682ae99d126887eebd7a4665_ecosystem-nb-corner-bottom.png', 'public/images/ecosystem-nb-corner-bottom.png'],
  [CDN + '682f225b056ceaef218b0035_ecosysten-forth-corner-top.svg', 'public/images/ecosystem-forth-corner-top.svg'],
  [CDN + '682f225bd323d38b13493c9b_ecosysten-forth-corner-bottom.svg', 'public/images/ecosystem-forth-corner-bottom.svg'],
  // Icons
  [CDN + '6437b8bc549a694211710a04_arrow-right-color.svg', 'public/images/arrow-right-color.svg'],
  [CDN + '6446951576624313547bb1bd_arrow-next.svg', 'public/images/arrow-next.svg'],
  [CDN + '64491f577f22d7daed3c25d2_ico-close.svg', 'public/images/ico-close.svg'],
  [CDN + '644920edd0560b68918741c2_btn-shape.svg', 'public/images/btn-shape.svg'],
  [CDN + '6449229588370d185cb29fc6_active-tab-bg.svg', 'public/images/active-tab-bg.svg'],
  [CDN + '6449229588370df9b2b29fc7_ico-expand.svg', 'public/images/ico-expand.svg'],
  [CDN + '645e3d7ca7fd751544d4e7e8_icon-link-arrow-simple.svg', 'public/images/icon-link-arrow-simple.svg'],
  [CDN + '646201707951b1100b67ddfd_double-dots.svg', 'public/images/double-dots.svg'],
  [CDN + '6475c21b8be0c640d5a29c45_ico-bullet-bright.svg', 'public/images/ico-bullet-bright.svg'],
  [CDN + '670cfebba604aa3309fbe390_pricing-border.svg', 'public/images/pricing-border.svg'],
  // Raster
  [CDN + '6462111672fa898a555625b1_token-coin.webp', 'public/images/token-coin.webp'],
  [CDN + '67a4bbabe02a540e0cbb25b5_borderBG.webp', 'public/images/borderBG.webp'],
  [CDN + '64abde291a2bcc0e558dbc20_solution-placeholder.png', 'public/images/solution-placeholder.png'],
  // Lottie animations
  [CDN + '6459e5817812b53e174e4b3f_loader_cgpt.json', 'public/images/loader_cgpt.json'],
  [CDN + '67a36f5c82f2b4551c49070c_solutions_2025_AIVM.lottie', 'public/images/solutions_2025_AIVM.lottie'],
];

async function download([url, localPath]) {
  try {
    const res = await fetch(url);
    if (!res.ok) { console.error(`FAIL ${res.status} ${url}`); return false; }
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(localPath), { recursive: true });
    await writeFile(localPath, buf);
    console.log(`OK   ${localPath} (${(buf.length/1024).toFixed(1)}kb)`);
    return true;
  } catch (e) { console.error(`ERR  ${url}: ${e.message}`); return false; }
}

async function run() {
  let ok = 0;
  for (let i = 0; i < ASSETS.length; i += 4) {
    const batch = ASSETS.slice(i, i + 4);
    const results = await Promise.all(batch.map(download));
    ok += results.filter(Boolean).length;
  }
  console.log(`\nDone: ${ok}/${ASSETS.length} downloaded.`);
}
run();
