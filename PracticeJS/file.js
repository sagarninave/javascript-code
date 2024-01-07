const file = require("fs");

const fileNames = ["input1.txt", "input2.txt", "input3.txt"];

const readFilePromises = fileNames.map(
  (fileName) =>
    new Promise((resolve, reject) =>
      file.readFile(fileName, "utf8", (error, data) => {
        if (error) {
          reject(error.message);
        }
        resolve(data);
      })
    )
);

const writeToFile = async () => {
  try {
    const result = await Promise.all(readFilePromises);
    file.writeFile("output.txt", result.join("\n"), "utf8", (error) => {
      if (error) throw new Error("Write:", error.message);
      console.log("Files successfully written");
    });
  } catch (error) {
    console.log("Read:", error);
  }
};

// writeToFile();

const content = fileNames.map((fileName) => file.readFileSync(fileName, "utf8"));
file.writeFileSync("output.txt", content.join(" "), "utf8", (error) => {
  if (error) throw new Error("Write:", error.message);
});
