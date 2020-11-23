const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to:email,
        from:'sunilpanchal123.sp@gmail.com',
        subject:'Thanks for joining in!',
        text:`Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name)=>{
    sgMail.send({
        to:email,
        from:'sunilpanchal123.sp@gmail.com',
        subject:'Sorry to see you go!',
        text:`Sorry ${name} for inconvenience, If you faced any issue you can send us, We will try to resolve as soon as possible.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}