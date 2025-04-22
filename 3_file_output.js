const file_system = require("fs");
file_system.writeFileSync("example.txt", "this content is written by writeFileSync method", "utf8");
console.log("file write complete");

file_system.writeFile(
    "example.txt",
    "this content is written by writeFile method",
    "utf8",
    (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("file write complete");
    }
)

file_system.appendFile("output.txt", "\nthis content is written by appendFile method", "utf8", (err) => {
    if (err) {
        throw error;
    }
    console.log("file append complete");
})

file_system.unlink("output.txt", (err) => {
    if (err) {
        throw error;
    }
    console.log("file delete complete");
})