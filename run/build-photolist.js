import fs from 'fs'
import path from 'path'

const photos = fs.readdirSync(path.join(__dirname, '../public/photos'))
fs.writeFileSync(path.join(__dirname, '../src/photos.json'), JSON.stringify(photos))
