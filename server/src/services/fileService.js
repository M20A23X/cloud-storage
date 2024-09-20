const fs = require('fs')
const config = require('config')

/// Summary: file management
class FileService {
    /// Summary: creates a new dir
    /// Args: file - File entity
    createDir(file) {
        const filePath = `${config.get('filePath')}\\${file.user}\\${file.path}`
        console.log(filePath)
        return new Promise(((resolve, reject) => {
            try {
                if (!fs.existsSync(filePath)) {
                    fs.mkdirSync(filePath, {recursive: true})
                    return resolve({message: 'File was created'})
                } else {
                    return reject({message: "File already exist"})
                }
            } catch (e) {
                console.log(e)
                return reject({message: 'File error'})
            }
        }))
    }

    /// Summary: deletes the file
    /// Args: file - File entity
    deleteFile(file) {
        const path = this.getPath(file)
        if (file.type === 'dir') {
            fs.rmdirSync(path)
        } else {
            fs.unlinkSync(path)
        }
    }

    /// Summary: gets file path
    /// Args: file - File entity
    getPath(file) {
        return config.get('filePath') + '\\' + file.user + '\\' + file.path
    }
}


module.exports = new FileService()
