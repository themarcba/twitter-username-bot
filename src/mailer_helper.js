const sgMail = require('@sendgrid/mail');

// Sends e-mail via SendGrid
const sendMessage = async (subject, text, html) => {
    if (!html) html = text // If not html is passed, put pain text as HTML content

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
        to: process.env.EMAIL_TO,
        from: process.env.EMAIL_FROM,
        subject,
        text,
        html,
    }

    sgMail.send(msg)
}

module.exports = {
    sendMessage
}