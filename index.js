function main() {
  const fs = require("fs");
  const matter = require("gray-matter");
  const md = require("markdown-it")({ html: true });
  const noteTemplate = fs.readFileSync(
    "./templates/template-note.html",
    "utf-8"
  );

  const entriesEl = [];

  fs.readdirSync("./notes").forEach((fn) => {
    fs.unlinkSync(`./notes/${fn}`);
  });

  fs.readdirSync("./markdown").forEach((fn) => {
    const markdown = fs.readFileSync(`./markdown/${fn}`, "utf-8");
    const { data, content } = matter(markdown);
    const html = md.render(content);
    const slug = fn.replace(".md", "");

    fs.writeFileSync(
      `./notes/${slug}.html`,
      noteTemplate
        .replace("🔑__TITLE__🔑", data.title)
        .replace("🔑__MARKDOWN__🔑", html),
      "utf-8"
    );

    entriesEl.push(`<li><a href="./notes/${slug}">${data.title}</a></li>`);
  });

  const listEl = entriesEl.join("\n");
  const indexTemplate = fs.readFileSync(
    "./templates/template-index.html",
    "utf-8"
  );

  fs.writeFileSync(
    "./index.html",
    indexTemplate.replace("🔑__ENTRIES__🔑", listEl)
  );
}

main();