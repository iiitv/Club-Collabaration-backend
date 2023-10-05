const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken')

const sendMail = (user) => {

  const [email,emailSecret,jwtSecret] = [
    process.env.EMAIL,
    process.env.EMAIL_SECRET,
    process.env.JWT_SECRET
  ]

  const mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: emailSecret
    }
  })

  const token = jwt.sign({id:user._id.toString()},jwtSecret,{expiresIn:'2h'})
  
  //to update link domain after deplying the app
  const link = `http://localhost:3000/verify/${token}`

  const mailContent = 
  `Welcome to Club Collaboration!\nTo verify your email click on the link below\n <a href="${link}">Link</a>`

  const mailDetails = {
    from: email,
    to: `${user.email}`,
    subject: 'Verification Email',
    html: mailContent
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log('Error Occurs',err);
    } else {
      console.log('Email sent successfully');
    }
  })
}

module.exports = sendMail