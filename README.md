# Twitter Username Bot 🤖

## History

In December, [Twitter](https://www.twitter.com) announced they would free inactive accounts. Since I have some usernames that I would prefer instead of my current handle, I decided to develop a little project which would notify me whenever one of my desired usernames would free up.

Since they announced that, they also made a move backwards and halted the initiative until they figure out what to do with accounts from deceased people.

Either way, I moved along with this idea, since eventually they will free up an account I'm looking for

## How does it work?

The script checks once an hour if the Twitter usernames are still existsting. If that state changes, an e-mail is sent via [SendGrid](https://sendgrid.com)

## Prerequisites

In order for this to work, you need an active [SendGrid](https://sendgrid.com) account. If you don't have one, they let you create one for free.

## Installation

```bash
npm install
```

## Configuration

In order for this to work, you need to create a .env file. You can just rename the `dotenv-example`-file:

```bash
mv dotenv-exmaple .env
```

You need the following data to fill out:
- Your SendGrip API key
- The e-mail you want to send the e-mail from
- The e-mail you want to send the e-mail to
- List of desired usernames (this need to be entered comma-separated, as in the example)

Here is an example file:

```bash
DESIRED_USERNAMES='batman, superman, flash, wonderwoman'
SENDGRID_API_KEY=mysupersecreatapikeygiventomebysendgrid
EMAIL_FROM=bot@example.com
EMAIL_TO=youremail@example.com
```

## Run
```bash
npm run start
```

## Run development
```bash
npm run dev
```