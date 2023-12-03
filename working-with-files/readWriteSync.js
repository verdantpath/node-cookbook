// const fs = require("fs");
// const path = require("path");

// const filepath = path.join(process.cwd(), "hello.txt");
// const contents = fs.readFileSync(filepath, "utf8");
// console.log("File Contents:", contents);
// const upperContents = contents.toUpperCase();

// fs.writeFileSync(filepath, upperContents);
// console.log("File updated.");

const fs = require("fs");
const path = require("path");

const filepath = path.join(process.cwd(), "hello.txt");

fs.readFile(filepath, "utf8", (err, contents) => {
  if(err) {
    return console.log(err);
  }
  console.log("File Contents:", contents);
  const upperContents = contents.toUpperCase();

  setTimeout(() => updateFile(filepath, upperContents), 10);
});

function updateFile(filepath, contents) {
  fs.writeFile(filepath, contents, (err) => {
    if (err) throw err;
    console.log("File updated.");
  });
}


setInterval(() => process.stdout.write("**** \n"), 1).unref();