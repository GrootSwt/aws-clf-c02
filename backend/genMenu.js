import { access, readdir, writeFile, stat, unlink } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const publicDir = join(__dirname, "../public/documents");

const menu = [];

/**
 * 递归获取目录名和文件列表
 * @param {string} dirPath
 * @param {Array} result
 */
async function traverseDirectory(dirPath, result) {
  const files = await readdir(dirPath);
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fullPath = join(dirPath, file);
    const stats = await stat(fullPath);
    if (stats.isDirectory()) {
      const item = {
        title: file,
        links: []
      };
      result.push(item);
      await traverseDirectory(fullPath, item.links);
    } else if (stats.isFile()) {
      result.push(file);
    }
  }
}

await traverseDirectory(publicDir, menu);

const menuPath = join(__dirname, "../src/views/menu.json");

try {
  await access(menuPath);
  await unlink(menuPath);
  await writeFile(menuPath, JSON.stringify(menu));
} catch (err) {
  if (err.code === "ENOENT") {
    await writeFile(menuPath, JSON.stringify(menu));
  } else {
    console.error(`Error: ${err.message}`);
  }
}
