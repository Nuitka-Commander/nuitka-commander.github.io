import fs from "fs/promises";

async function generateFiles() {
    try {
        const data = await fs.readFile("2.1.json", "utf8");
        const content = JSON.parse(data);

        for (const key in content.Options) {
            if (content.Options.hasOwnProperty(key)) {
                const value = content.Options[key];
                const fileName = `${key}.json`;
                const fileContent = JSON.stringify({[key]: value}, null, 2);

                await fs.writeFile(fileName, fileContent, "utf8");
                console.log(`${fileName} was successfully created.`);
            }
        }
    } catch (err) {
        console.error("Error:", err);
    }
}

generateFiles().then();