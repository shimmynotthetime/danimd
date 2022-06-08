
const fs = require('fs')
const chalk = require('chalk')

// Other
global.owner = ['6289693802507','6289693802507','6289693802507']
global.premium = ['6289693802507']
global.packname = 'VernonSticker'
global.author = 'Vernon'
global.sessionName = 'alif'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: 'https://v3.tiktokcdn.com/1fc7e768cd33aad7d5db07a54fe5698e/62a17844/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/3b0d852c17f74fb5b93f4b85332492e9/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=2452&bt=1226&btag=80000&cs=0&ds=6&ft=lUxRkHy2Myq8Zea1awe2Nt0WbIJGb&mime_type=video_mp4&qs=0&rc=M2ZpM2k8ZmY2ZmY3NGlkZ0BpamtyNzM6Zmc3PDMzZjgzM0BeMDUtLy9gNTExLjMxXjVjYSNrZzIvcjRfNWZgLS1kL2Nzcw%3D%3D&l=202206082234010102452421171D7177B6&asc=1' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
