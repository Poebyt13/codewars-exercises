
import fs from 'fs'
import ph from 'path'

const parseArgs = (args) => {

    const [kyu, name] = args.slice(2)

    if (!kyu || !name) {
        throw new Error("Usage: node script.js <kyu> <exercise name>");
    }

    const nameFile = name
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '_')
        .replace(/[^a-z0-9_]/g, '');

    const folderSelected = `${kyu} kyu`

    if (!fs.existsSync(folderSelected)) fs.mkdirSync(folderSelected);

    return {nameFile, folderSelected}
}

const maxNumberOnKyuFolders = (kyuFolders) => {

    const res = [];
    for (const folder of kyuFolders) {
        for (const exercise of fs.readdirSync(folder)) {
            res.push(parseInt(exercise.split('-')[0]))
        }
    }
    return Math.max(...res) + 1

}

const getKyuFolders = () => {
    return fs.readdirSync('.').filter(folder => folder.includes('kyu'))
}

const createExerciseFile = (path, content) => {
    try {
        fs.writeFileSync(path, `// exercise: ${content}`);
        return true
    } catch (err) {
        console.error("Error creating file:", err.message)
        return false;
    }
}

const {nameFile, folderSelected} = parseArgs(process.argv)

const kyuFolders = getKyuFolders();

const maxNumber = maxNumberOnKyuFolders(kyuFolders)

const exercisePath = ph.join(folderSelected, `${maxNumber}- ${nameFile}.js`)

const success = createExerciseFile(exercisePath, exercisePath)
        
if (success) console.log(`✅ Created: ${exercisePath}`)

