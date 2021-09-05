const fs = require('fs')
const https = require('https')

const downloadFileToPath = (url, path) => {
  return new Promise((resolve, reject) =>{
    https.get(url, res =>{
      const fileWriteStream = fs.createWriteStream(path);
      res.pipe(fileWriteStream)
      fileWriteStream.on('finish', () =>{
        filePath.close();
        resolve(path);
      })
      fileWriteStream.on('error', (e) =>{
        filePath.close();
        reject(e)
      })
    })

  })
}
