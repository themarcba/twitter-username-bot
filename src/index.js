require('dotenv').config()

const {
    sendMessage
} = require('./mailer_helper')
const TwitterChecker = require('twitter-checker')

let users = {}

// Turn string array of usernames to object array of usernames with availability:false
process.env.DESIRED_USERNAMES.split(',').map(u => u.trim()).forEach(username => {
    users[username.trim()] = {
        available: false
    }
})


const checkUsernames = async (users) => {
    console.log(`[${new Date()}] Checking usernames...`);

    // Iterating all desired usernames...
    for (const username of Object.keys(users)) {

        // Check if it exists with the TwitterChecker module
        const available = !(await TwitterChecker.check(username)).exists

        // If it exists...
        if (available && !users[username].available) {
            console.log(`Username ${username} became available!`);

            // Write the 'available' value to the object array
            users[username].available = true

            // // Send e-mail
            sendMessage(`Username ${username} is available!`,
                    `Good news! 🎉 <br>The bot detected that the username ${username} is now available on Twitter`,
                    `Good news! 🎉 <br>The bot detected that the username <strong>${username}</strong> is now available on Twitter.<br><br>Go ahead and <a href="http://twitter.com/signup">reserve it now</a>!`)
                .catch(console.error)
        }
    }

    // Print table
    console.table(users);

}

// Run check
const run = () => {
    checkUsernames(users)
}

// Run program, then every hour
run()
setInterval(run, 1000*60*60) // 1000*60*60 = 1 hour