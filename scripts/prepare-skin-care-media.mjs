// Non-destructive web exports from the three reviewed image_gen masters.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const siteRoot = fileURLToPath(new URL('..', import.meta.url));
const marketingOutput = path.resolve(siteRoot, '../lidiane-marketing/outputs/skin-care-site-2026-10-25');
const manifest = JSON.parse(fs.readFileSync(path.join(marketingOutput, 'image-provenance.json'), 'utf8'));
const masterDir = path.join(marketingOutput, 'masters');
const webDir = path.join(siteRoot, 'public/images/skin-care-2026-10-25');

(async () => {
  fs.mkdirSync(masterDir, {recursive:true});
  fs.mkdirSync(webDir, {recursive:true});
  const exports = [];
  for (const item of manifest.items) {
    const master = path.join(masterDir, item.name + '-illustration-master.png');
    if (!fs.existsSync(master)) fs.copyFileSync(item.source, master);
    const target = path.join(webDir, item.name + '-illustration.webp');
    const info = await sharp(master).rotate().resize({width:1536,withoutEnlargement:true}).webp({quality:90,effort:6}).toFile(target);
    exports.push({name:item.name,master,web:target,width:info.width,height:info.height,bytes:info.size});
  }
  // Owner-selected section image, archived from the October 25 review attachment.
  const selectedMaster = path.join(masterDir, 'facials-section-selected.png');
  if (fs.existsSync(selectedMaster)) {
    const target = path.join(webDir, 'facials-section.webp');
    const info = await sharp(selectedMaster).rotate().resize({width:1536,withoutEnlargement:true}).webp({quality:90,effort:6}).toFile(target);
    exports.push({name:'facials-section',master:selectedMaster,web:target,width:info.width,height:info.height,bytes:info.size});
  }
  fs.writeFileSync(path.join(marketingOutput, 'web-exports.json'), JSON.stringify(exports,null,2));
  console.log(JSON.stringify(exports,null,2));
})().catch(error => { console.error(error); process.exitCode=1; });
