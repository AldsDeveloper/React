const express = require('express')
const app = express()
const formidable = require('formidable')
const fs = require('fs')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const port = 8000

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(cookieParser())
app.use(session({
	secret: 'test',	//กำหนดสตริงอะไรก็ได้สำหรับเป็นคีย์สร้าง Session ID
	resave: false,		
	saveUninitialized: false,
}))

app.post('/api/upload', (request, response) => {
    let form = formidable.IncomingForm()

    form.parse(request, (err, fields, files) => {
        if (files.image.size === 0) {
            response.json({
                imgSrc: '',
                descr: 'No file'
            })
            return
        }

        let upfile = files.image		
        let fileName = upfile.name.split('.')		
        
        let r1 = Math.floor(Math.random() * 99999)		//เช่น 12345
        let r2 = Math.floor(Math.random() * 99999)		//เช่น 67890
    
        fileName[0] = r1 + '-' + r2		//แก้ไขชื่อไฟล์ เช่น 12345-67890
        //fileName = ['12345-67890', 'jpg']
        
        let newName = fileName.join('.')	//เชื่อมต่อกันด้วย . => 12345-67890.jpg
    
        //เอาชื่อใหม่มาต่อตำแหน่ง เช่น public/images/12345-67890.jpg
        let target = 	'public/images/' + newName
            
        //นำไฟล์ไปเก็บยังเป้าหมาย
        fs.rename(upfile.path, target, err => {
            response.json({
                imgSrc: 'images/' + newName, 
                descr: fields.description
            })
        })
    })
})

app.get('/api/cookie/get', (request, response) => {
    let e = request.cookies['email'] || ''
    let p = request.cookies['password'] || ''
    let s = (request.cookies['save']) ? true : false
    response.json({
        email: e, password: p, save: s
    })
})

app.post('/api/cookie/set', (request, response) => {
    let email = request.body.email || ''
    let password = request.body.password || ''
    //ถ้าเลือกบันทึกข้อมูลไว้ในเครื่อง ให้จัดเก็บในแบบคุกกี้
    if (request.body.save) {
        let age = 3 * 60 * 1000
        response.cookie('email', email, {maxAge: age})
        response.cookie('password', password, {maxAge: age})
        let save = request.body.save
        response.cookie('save', save, {maxAge: age})
        response.send('จัดเก็บข้อมูลไว้ในคุกกี้แล้ว')
        
    //ถ้าไม่ได้เลือกบันทึกข้อมูล แต่อาจมีข้อมูลเดิมเก็บเอาไว้
    //ดังนั้น เราอาจลบข้อมูลเหล่านั้นออกไป (ถึงไม่มีก็ไม่เกิด Error)
    } else {
        response.clearCookie('email')
        response.clearCookie('password')
        response.clearCookie('save')
        response.send('ข้อมูล *ไม้ได้* ถูกจัดเก็บในคุกกี้')
    }
})

app.get('/api/session/get', (request, response) => {
    //ตรวจสอบว่ามีข้อมูลจัดเก็บไว้ในเซสชันหรือไม่
    let s = (request.session.email) ? true : false
    response.json({signedIn: s})
})

app.all('/api/session/set', (request, response) => {
    //ถ้าส่งข้อมูลจากฟอร์มเข้ามา ในที่นี้จะตรวจสอบแบบง่ายๆ แค่ Password
    //โดยถ้า Password ถูกต้องก็ให้เก็บค่า Email ไว้ในเซสชัน เพื่อใช้ตรวจสอบในภายหลัง
    //แล้วส่งค่ากลับไปว่าได้เข้าสู่ระบบแล้ว
    let email = request.body.email || ''
    let password = request.body.password || ''

    if (password === '12345') {
        request.session['email'] = email
        response.json({signedIn: true})
    } else {
        response.json({signedIn: false})
    }
})

app.get('/api/session/del', (request, response) => {
    request.session.destroy(err => {
        response.json({signedIn: false})
    })
})

app.listen(port, () => {
    console.log('Server listening on port: ' + port)
})