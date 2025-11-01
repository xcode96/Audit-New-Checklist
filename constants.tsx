[
  {
    "id": "auth",
    "title": "Authentication",
    "description": "Securing your online account login credentials",
    "longDescription": "Most reported data breaches are caused by the use of weak, default, or stolen passwords (according to this Verizon report). Use long, strong, and unique passwords, manage them in a secure password manager, enable 2-factor authentication, keep on top of breaches, and take care while logging into your accounts.",
    "iconName": "KeyIcon",
    "color": "#facc15",
    "textColor": "text-yellow-400",
    "completed": 0,
    "total": 21,
    "items": [
      {
        "security": "Use a Strong Password",
        "priority": "Essential",
        "details": "If your password is too short, or contains dictionary words, places, or names, then it can be easily cracked through brute force or guessed by someone. The easiest way to make a strong password is by making it long (12+ characters) — consider using a 'passphrase' made up of many words. Alternatively, use a password generator to create a long, strong random password. Have a play with [Security.org's How Secure Is My Password?](https://security.org/how-secure-is-my-password/), to get an idea of how quickly common passwords can be cracked. Read more about creating strong passwords: [securityinabox.org](https://securityinabox.org/en/passwords/passwords-and-2fa/).",
        "id": "auth-0",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Don't Reuse Passwords",
        "priority": "Essential",
        "details": "If someone were to reuse a password and one site they had an account with suffered a leak, then a criminal could easily gain unauthorized access to their other accounts. This is usually done through large-scale automated login requests, and it is called Credential Stuffing. Unfortunately, this is all too common, but it's simple to protect against — use a different password for each of your online accounts.",
        "id": "auth-1",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use a Secure Password Manager",
        "priority": "Essential",
        "details": "For most people, it is going to be near-impossible to remember hundreds of strong and unique passwords. A password manager is an application that generates, stores, and auto-fills your login credentials for you. All your passwords will be encrypted against 1 master password (which you must remember, and it should be very strong). Most password managers have browser extensions and mobile apps, so whatever device you are on, your passwords can be auto-filled. A good all-rounder is [Bitwarden](https://awesome-privacy.xyz/essentials/password-managers/bitwarden), or see [Recommended Password Managers](https://awesome-privacy.xyz/essentials/password-managers).",
        "id": "auth-2",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Avoid Sharing Passwords",
        "priority": "Essential",
        "details": "While there may be times that you need to share access to an account with another person, you should generally avoid doing this because it makes it easier for the account to become compromised. If you absolutely do need to share a password — for example, when working on a team with a shared account — this should be done via features built into a password manager.",
        "id": "auth-3",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Enable 2-Factor Authentication",
        "priority": "Essential",
        "details": "2FA is where you must provide both something you know (a password) and something you have (such as a code on your phone) to log in. This means that if anyone has your password (e.g., through phishing, malware, or a data breach), they will not be able to log into your account. It's easy to get started, download [an authenticator app](https://github.com/Lissy93/awesome-privacy#2-factor-authentication) onto your phone, and then go to your account security settings and follow the steps to enable 2FA. Next time you log in on a new device, you will be prompted for the code that is displayed in the app on your phone (it works without internet, and the code usually changes every 30 seconds).",
        "id": "auth-4",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Keep Backup Codes Safe",
        "priority": "Essential",
        "details": "When you enable multi-factor authentication, you will usually be given several codes that you can use if your 2FA method is lost, broken, or unavailable. Keep these codes somewhere safe to prevent loss or unauthorized access. You should store these on paper or in a safe place on disk (e.g., in offline storage or an encrypted file/drive). Don't store these in your password manager as 2FA sources and passwords should be kept separately.",
        "id": "auth-5",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Sign Up for Breach Alerts",
        "priority": "Optional",
        "details": "After a website suffers a significant data breach, the leaked data often ends up on the internet. Several websites collect these leaked records and allow you to search your email address to check if you are in any of their lists. [Firefox Monitor](https://monitor.firefox.com), [Have I Been Pwned](https://haveibeenpwned.com), and [DeHashed](https://dehashed.com) allow you to sign up for monitoring, where they will notify you if your email address appears in any new data sets. It is useful to know as soon as possible when this happens so that you can change your passwords for the affected accounts. [Have i been pwned](https://awesome-privacy.xyz/security-tools/online-tools/have-i-been-pwned) also has domain-wide notification, where you can receive alerts if any email addresses under your entire domain appear (useful if you use aliases for [anonymous forwarding](https://github.com/Lissy93/awesome-privacy#anonymous-mail-forwarding)).",
        "id": "auth-6",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Shield your Password/PIN",
        "priority": "Optional",
        "details": "When typing your password in public places, ensure you are not in direct line of sight of a CCTV camera and that no one can see over your shoulder. Cover your password or pin code while you type, and do not reveal any plain text passwords on your screen.",
        "id": "auth-7",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Update Critical Passwords Periodically",
        "priority": "Optional",
        "details": "Database leaks and breaches are common, and, likely, several of your passwords are already somewhere online. Occasionally updating passwords of security-critical accounts can help mitigate this. But providing that all your passwords are long, strong, and unique, there is no need to do this too often — annually should be sufficient. Enforcing mandatory password changes within organisations is [no longer recommended](https://duo.com/decipher/microsoft-will-no-longer-recommend-forcing-periodic-password-changes), as it encourages colleagues to select weaker passwords.",
        "id": "auth-8",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Don’t Save your Password in Browsers",
        "priority": "Optional",
        "details": "Most modern browsers offer to save your credentials when you log into a site. Don’t allow this, as they are not always encrypted and could allow someone to gain access to your accounts. Instead, use a dedicated password manager to store (and auto-fill) your passwords.",
        "id": "auth-9",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Avoid Logging In on Someone Else’s Device",
        "priority": "Optional",
        "details": "Avoid logging in on other people's computers since you can't be sure their system is clean. Be especially cautious of public machines, as malware and tracking arr more common here. Using someone else's device is especially dangerous with critical accounts like online banking. When using someone else's machine, ensure that you're in a private/incognito session (Use Ctrl+Shift+N/ Cmd+Shift+N). This will request the browser to not save your credentials, cookies, and browsing history.",
        "id": "auth-10",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Avoid Password Hints",
        "priority": "Optional",
        "details": "Some sites allow you to set password hints. Often, it is very easy to guess answers. In cases where password hints are mandatory, use random answers and record them in your password manager (`Name of the first school: 6D-02-8B-!a-E8-8F-81`).",
        "id": "auth-11",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Never Answer Online Security Questions Truthfully",
        "priority": "Optional",
        "details": "If a site asks security questions (such as place of birth, mother's maiden name, or first car, etc.), don't provide real answers. It is a trivial task for hackers to find out this information online or through social engineering. Instead, create a fictitious answer, and store it inside your password manager. Using real words is better than random characters, as [explained here](https://news.ycombinator.com/item?id=29244870).",
        "id": "auth-12",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Don’t Use a 4-digit PIN",
        "priority": "Optional",
        "details": "Don’t use a short PIN to access your smartphone or computer. Instead, use a text password or a much longer PIN. Numeric passphrases are easy to crack (A 4-digit pin has 10,000 combinations, compared to 7.4 million for a 4-character alpha-numeric code).",
        "id": "auth-13",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Avoid Using SMS for 2FA",
        "priority": "Optional",
        "details": "When enabling multi-factor authentication, opt for app-based codes or a hardware token if supported. SMS is susceptible to several common threats, such as [SIM-swapping](https://www.maketecheasier.com/sim-card-hijacking) and [interception](https://secure-voice.com/ss7_attacks). There's also no guarantee of how securely your phone number will be stored or what else it will be used for. From a practical point of view, SMS will only work when you have a signal and can be slow. If a website or service requires the usage of an SMS number for recovery, consider purchasing a second pre-paid phone number only used for account recovery for these instances.",
        "id": "auth-14",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Avoid Using your PM to Generate OTPs",
        "priority": "Advanced",
        "details": "Many password managers are also able to generate 2FA codes. It is best not to use your primary password manager as your 2FA authenticator as well, since it would become a single point of failure if compromised. Instead, use a dedicated [authenticator app](https://github.com/Lissy93/awesome-privacy#2-factor-authentication) on your phone or laptop.",
        "id": "auth-15",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Avoid Face Unlock",
        "priority": "Advanced",
        "details": "Most phones and laptops offer a facial recognition authentication feature, using the camera to compare a snapshot of your face with a stored hash. It may be very convenient, but there are numerous ways to [fool it](https://www.forbes.com/sites/jvchamary/2017/09/18/security-apple-face-id-iphone-x/) and gain access to the device through digital photos and reconstructions from CCTV footage. Unlike your password, there are likely photos of your face on the internet and videos recorded by surveillance cameras.",
        "id": "auth-16",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Watch Out for Keyloggers",
        "priority": "Advanced",
        "details": "A hardware [keylogger](https://en.wikipedia.org/wiki/Hardware_keylogger) is a physical device planted between your keyboard and the USB port, which intercepts all keystrokes and sometimes relays data to a remote server. It gives a hacker access to everything typed, including passwords. The best way to stay protected is just by checking your USB connection after your PC has been unattended. It is also possible for keyloggers to be planted inside the keyboard housing, so look for any signs that the case has been tampered with, and consider bringing your own keyboard to work. Data typed on a virtual keyboard, pasted from the clipboard, or auto-filled by a password manager can not be intercepted by a hardware keylogger.",
        "id": "auth-17",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Consider a Hardware Token",
        "priority": "Advanced",
        "details": "A U2F/FIDO2 security key is a USB (or NFC) device that you insert while logging in to an online service to verify your identity instead of entering a OTP from your authenticator. [SoloKey](https://solokeys.com) and [NitroKey](https://www.nitrokey.com) are examples of such keys. They bring with them several security benefits. Since the browser communicates directly with the device, it cannot be fooled as to which host is requesting authentication because the TLS certificate is checked. [This post](https://security.stackexchange.com/a/71704) is a good explanation of the security of using FIDO U2F tokens. Of course, it is important to store the physical key somewhere safe or keep it on your person. Some online accounts allow for several methods of 2FA to be enabled.",
        "id": "auth-18",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Consider Offline Password Manager",
        "priority": "Advanced",
        "details": "For increased security, an encrypted offline password manager will give you full control over your data. [KeePass](https://awesome-privacy.xyz/essentials/password-managers/keepass) is a popular choice, with lots of [plugins](https://keepass.info/plugins.html) and community forks with additional compatibility and functionality. Popular clients include: [KeePassXC](https://keepassxc.org) (desktop), [KeePassDX](https://www.keepassdx.com) (Android) and [StrongBox](https://apps.apple.com/us/app/strongbox-password-safe/id897283731) (iOS). The drawback being that it may be slightly less convenient for some, and it will be up to you to back it up and store it securely.",
        "id": "auth-19",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Consider Unique Usernames",
        "priority": "Advanced",
        "details": "Having different passwords for each account is a good first step, but if you also use a unique username, email, or phone number to log in, then it will be significantly harder for anyone trying to gain unauthorised access. The easiest method for multiple emails, is using auto-generated aliases for anonymous mail forwarding. This is where [anything]@yourdomain.com will arrive in your inbox, allowing you to use a different email for each account (see [Mail Alias Providers](https://github.com/Lissy93/awesome-privacy#mail-forwarding)). Usernames are easier since you can use your password manager to generate, store, and auto-fill these. Virtual phone numbers can be generated through your VOIP provider.",
        "id": "auth-20",
        "completed": false,
        "ignored": false
      }
    ]
  },
  {
    "id": "web",
    "title": "Web Browsing",
    "description": "Avoiding tracking, censorship, and data collection online",
    "longDescription": "Most websites on the internet will use some form of tracking, often to gain insight into their users behaviour and preferences. This data can be incredibly detailed, and so is extremely valuable to corporations, governments and intellectual property thieves. Data breaches and leaks are common, and deanonymizing users web activity is often a trivial task.",
    "iconName": "GlobeIcon",
    "color": "#34d399",
    "textColor": "text-emerald-400",
    "completed": 0,
    "total": 39,
    "items": [
      {
        "security": "Block Ads",
        "priority": "Essential",
        "details": "Using an ad-blocker can help improve your privacy, by blocking the trackers that ads implement. [uBlock Origin](https://awesome-privacy.xyz/networking/ad-blockers/ublock-origin) is a very efficient and open source browser addon, developed by Raymond Hill. When 3rd-party ads are displayed on a {webpage}[red], they have the ability to track you, gathering personal information about you and your habits, which can then be sold, or used to show you more targeted ads, and some ads are plain malicious or fake. Blocking ads also makes pages load faster, uses less data and provides a less cluttered experience.",
        "id": "web-0",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Ensure Website is Legitimate",
        "priority": "Basic",
        "details": "It may sound obvious, but when you logging into any online accounts, double check the URL is correct. Storing commonly visited sites in your bookmarks is a good way to ensure the URL is easy to find. When visiting new websites, look for common signs that it could be unsafe: Browser warnings, redirects, on-site spam and pop-ups. You can also check a website using a tool, such as: [Virus Total](https://awesome-privacy.xyz/security-tools/online-tools/virus-total), [IsLegitSite](https://www.islegitsite.com), [Google Safe Browsing Status](https://transparencyreport.google.com/safe-browsing/search) if you are unsure.",
        "id": "web-1",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Watch out for Browser Malware",
        "priority": "Basic",
        "details": "Your system or browser can be compromised by spyware, miners, browser hijackers, malicious redirects, adware etc. You can usually stay protected, just by: ignoring pop-ups, be wary of what your clicking, don't proceed to a website if your browser warns you it may be malicious. Common signs of browser malware include: default search engine or homepage has been modified, toolbars, unfamiliar extensions or icons, significantly more ads, errors and pages loading much slower than usual. These articles from Heimdal explain [signs of browser malware](https://heimdalsecurity.com/blog/warning-signs-operating-system-infected-malware), [how browsers get infected](https://heimdalsecurity.com/blog/practical-online-protection-where-malware-hides) and [how to remove browser malware](https://heimdalsecurity.com/blog/malware-removal).",
        "id": "web-2",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use a Privacy-Respecting Browser",
        "priority": "Essential",
        "details": "[Firefox](https://awesome-privacy.xyz/essentials/browsers/firefox) (with a few tweaks) and [Brave](https://awesome-privacy.xyz/essentials/browsers/brave-browser) are secure, private-respecting browsers. Both are fast, open source, user-friendly and available on all major operating systems. Your browser has access to everything that you do online, so if possible, avoid Google Chrome, Edge and Safari as (without correct configuration) all three of them, collect usage data, call home and allow for invasive tracking. Firefox requires a few changes to achieve optimal security, for example - [arkenfox](https://github.com/arkenfox/user.js/wiki) or [12byte](https://12bytes.org/firefox-configuration-guide-for-privacy-freaks-and-performance-buffs/)'s user.js configs. See more: [Privacy Browsers](https://github.com/Lissy93/awesome-privacy#browsers).",
        "id": "web-3",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use a Private Search Engine",
        "priority": "Essential",
        "details": "Using a privacy-preserving, non-tracking search engine, will reduce risk that your search terms are not logged, or used against you. Consider [DuckDuckGo](https://awesome-privacy.xyz/essentials/search-engines/duckduckgo), or [Qwant](https://awesome-privacy.xyz/essentials/search-engines/qwant). Google implements some [incredibly invasive](https://hackernoon.com/data-privacy-concerns-with-google-b946f2b7afea) tracking policies, and have a history of displaying [biased search results](https://www.businessinsider.com/evidence-that-google-search-results-are-biased-2014-10). Therefore Google, along with Bing, Baidu, Yahoo and Yandex are incompatible with anyone looking to protect their privacy. It is recommended to update your [browsers default search](https://duckduckgo.com/install) to a privacy-respecting search engine.",
        "id": "web-4",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Remove Unnecessary Browser Addons",
        "priority": "Essential",
        "details": "Extensions are able to see, log or modify anything you do in the browser, and some innocent looking browser apps, have malicious intentions. Websites can see which extensions you have installed, and may use this to enhance your fingerprint, to more accurately identify/ track you. Both [Firefox](https://awesome-privacy.xyz/essentials/browsers/firefox) and Chrome web stores allow you to check what permissions/access rights an extension requires before you install it. Check the reviews. Only install extensions you really need, and removed those which you haven't used in a while.",
        "id": "web-5",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Keep Browser Up-to-date",
        "priority": "Essential",
        "details": "Browser vulnerabilities are constantly being [discovered](https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=browser) and patched, so it’s important to keep it up to date, to avoid a zero-day exploit. You can [see which browser version you're using here](https://www.whatismybrowser.com/), or follow [this guide](https://www.whatismybrowser.com/guides/how-to-update-your-browser/) for instructions on how to update. Some browsers will auto-update to the latest stable version.",
        "id": "web-6",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Check for HTTPS",
        "priority": "Essential",
        "details": "If you enter information on a non-HTTPS website, this data is transported unencrypted and can therefore be read by anyone who intercepts it. Do not enter any data on a non-HTTPS website, but also do not let the green padlock give you a false sense of security, just because a website has SSL certificate, does not mean that it is legitimate or trustworthy. [HTTPS-Everywhere](https://www.eff.org/https-everywhere) (developed by the [EFF](https://www.eff.org/)) used to be a browser extension/addon that automatically enabled HTTPS on websites, but as of 2022 is now deprecated. In their [accouncement article](https://www.eff.org/) the EFF explains that most browsers now integrate such protections. Additionally, it provides instructions for [Firefox](https://awesome-privacy.xyz/essentials/browsers/firefox), Chrome, Edge and Safari browsers on how to enable their HTTPS secure protections.",
        "id": "web-7",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use DNS-over-HTTPS",
        "priority": "Essential",
        "details": "Traditional DNS makes requests in plain text for everyone to see. It allows for eavesdropping and manipulation of DNS data through man-in-the-middle attacks. Whereas DNS-over-HTTPS performs DNS resolution via the HTTPS protocol, meaning data between you and your DNS resolver is encrypted. A popular option is [CloudFlare](https://awesome-privacy.xyz/networking/dns-providers/cloudflare)'s [1.1.1.1](https://awesome-privacy.xyz/security-tools/mobile-apps/1.1.1.1), or compare providers- it is simple to enable in-browser. Note that DoH comes with its own issues, mostly preventing web filtering.",
        "id": "web-8",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Multi-Session Containers",
        "priority": "Essential",
        "details": "Compartmentalisation is really important to keep different aspects of your browsing separate. For example, using different profiles for work, general browsing, social media, online shopping etc will reduce the number associations that data brokers can link back to you. One option is to make use of [Firefox Containers](https://awesome-privacy.xyz/security-tools/browser-extensions/firefox-multi-account-containers) which is designed exactly for this purpose. Alternatively, you could use different browsers for different tasks ([Brave](https://awesome-privacy.xyz/essentials/browsers/brave-browser), [Firefox](https://awesome-privacy.xyz/essentials/browsers/firefox), [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor) etc).",
        "id": "web-9",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use Incognito",
        "priority": "Essential",
        "details": "When using someone else's machine, ensure that you're in a private/ incognito session. This will prevent browser history, cookies and some data being saved, but is not fool-proof- you can still be tracked.",
        "id": "web-10",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Understand Your Browser Fingerprint",
        "priority": "Essential",
        "details": "Browser Fingerprinting is an incredibly accurate method of tracking, where a website identifies you based on your device information. You can view your fingerprint at amiunique.org- The aim is to be as un-unique as possible.",
        "id": "web-11",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Manage Cookies",
        "priority": "Essential",
        "details": "Clearing cookies regularly is one step you can take to help reduce websites from tracking you. Cookies may also store your session token, which if captured, would allow someone to access your accounts without credentials. To mitigate this you should clear cookies often.",
        "id": "web-12",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Block Third-Party Cookies",
        "priority": "Essential",
        "details": "Third-party cookies placed on your device by a website other than the one you’re visiting. This poses a privacy risk, as a 3rd entity can collect data from your current session. This guide explains how you can disable 3rd-party cookies, and you can check here ensure this worked.",
        "id": "web-13",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Block Third-Party Trackers",
        "priority": "Essential",
        "details": "Blocking trackers will help to stop websites, advertisers, analytics and more from tracking you in the background. [Privacy Badger](https://awesome-privacy.xyz/security-tools/browser-extensions/privacy-badger), [DuckDuckGo Privacy Essentials](https://awesome-privacy.xyz/security-tools/browser-extensions/privacy-essentials), [uBlock Origin](https://awesome-privacy.xyz/networking/ad-blockers/ublock-origin) and uMatrix (advanced) are all very effective, open source tracker-blockers available for all major browsers.",
        "id": "web-14",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Beware of Redirects",
        "priority": "Optional",
        "details": "While some redirects are harmless, others, such as Unvalidated redirects are used in phishing attacks, it can make a malicious link seem legitimate. If you are unsure about a redirect URL, you can check where it forwards to with a tool like RedirectDetective.",
        "id": "web-15",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Do Not Sign Into Your Browser",
        "priority": "Optional",
        "details": "Many browsers allow you to sign in, in order to sync history, bookmarks and other browsing data across devices. However this not only allows for further data collection, but also increases attack surface through providing another avenue for a malicious actor to get hold of personal information.",
        "id": "web-16",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Disallow Prediction Services",
        "priority": "Optional",
        "details": "Some browsers allow for prediction services, where you receive real-time search results or URL auto-fill. If this is enabled then data is sent to Google (or your default search engine) with every keypress, rather than when you hit enter.",
        "id": "web-17",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Avoid G Translate for Webpages",
        "priority": "Optional",
        "details": "When you visit a web page written in a foreign language, you may be prompted to install the Google Translate extension. Be aware that Google collects all data (including input fields), along with details of the current user. Instead use a translation service that is not linked to your browser.",
        "id": "web-18",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Disable Web Notifications",
        "priority": "Optional",
        "details": "Browser push notifications are a common method for criminals to encourage you to click their link, since it is easy to spoof the source. Be aware of this, and for instructions on disabling browser notifications, see this article.",
        "id": "web-19",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Disable Automatic Downloads",
        "priority": "Optional",
        "details": "Drive-by downloads is a common method of getting harmful files onto a users device. This can be mitigated by disabling auto file downloads, and be cautious of websites which prompt you to download files unexpectedly.",
        "id": "web-20",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Disallow Access to Sensors",
        "priority": "Optional",
        "details": "Mobile websites can tap into your device sensors without asking. If you grant these permissions to your browser once, then all websites are able to use these capabilities, without permission or notification.",
        "id": "web-21",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Disallow Location",
        "priority": "Optional",
        "details": "Location Services lets sites ask for your physical location to improve your experience. This should be disabled in settings. Note that there are still other methods of determining your approximate location.",
        "id": "web-22",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Disallow Camera/ Microphone access",
        "priority": "Optional",
        "details": "Check browser settings to ensure that no websites are granted access to webcam or microphone. It may also be beneficial to use physical protection such as a webcam cover and microphone blocker.",
        "id": "web-23",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Disable Browser Password Saves",
        "priority": "Optional",
        "details": "Do not allow your browser to store usernames and passwords. These can be easily viewed or accessed. Instead use a password manager.",
        "id": "web-24",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Disable Browser Autofill",
        "priority": "Optional",
        "details": "Turn off autofill for any confidential or personal details. This feature can be harmful if your browser is compromised in any way. Instead, consider using your password manager's Notes feature.",
        "id": "web-25",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Protect from Exfil Attack",
        "priority": "Optional",
        "details": "The CSS Exfiltrate attack is a method where credentials and other sensitive details can be snagged with just pure CSS. You can use the [CSS Exfil Protection](https://awesome-privacy.xyz/security-tools/browser-extensions/css-exfil-protection) plugin.",
        "id": "web-26",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Deactivate ActiveX",
        "priority": "Optional",
        "details": "ActiveX is a browser extension API that built into Microsoft IE, and enabled by default. It's not commonly used anymore, but since it gives plugins intimate access rights, and can be dangerous, therefore you should disable it.",
        "id": "web-27",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Disable WebRTC",
        "priority": "Optional",
        "details": "WebRTC allows high-quality audio/video communication and peer-to-peer file-sharing straight from the browser. However it can pose as a privacy leak. To learn more, check out this guide.",
        "id": "web-28",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Spoof HTML5 Canvas Sig",
        "priority": "Optional",
        "details": "Canvas Fingerprinting allows websites to identify and track users very accurately. You can use the Canvas-Fingerprint-Blocker extension to spoof your fingerprint or use [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor).",
        "id": "web-29",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Spoof User Agent",
        "priority": "Optional",
        "details": "The user agent tells the website what device, browser and version you are using. Switching user agent periodically is one small step you can take to become less unique.",
        "id": "web-30",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Disregard DNT",
        "priority": "Optional",
        "details": "Enabling Do Not Track has very limited impact, since many websites do not respect or follow this. Since it is rarely used, it may also add to your signature, making you more unique.",
        "id": "web-31",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Prevent HSTS Tracking",
        "priority": "Optional",
        "details": "HSTS was designed to help secure websites, but privacy concerns have been raised as it allowed site operators to plant super-cookies. It can be disabled by visiting chrome://net-internals/#hsts in Chromium-based browsers.",
        "id": "web-32",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Prevent Automatic Browser Connections",
        "priority": "Optional",
        "details": "Even when you are not using your browser, it may call home to report on usage activity, analytics and diagnostics. You may wish to disable some of this, which can be done through the settings.",
        "id": "web-33",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Enable 1st-Party Isolation",
        "priority": "Optional",
        "details": "[First Party Isolation](https://awesome-privacy.xyz/security-tools/browser-extensions/first-party-isolation) means that all identifier sources and browser state are scoped using the URL bar domain, this can greatly reduce tracking.",
        "id": "web-34",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Strip Tracking Params from URLs",
        "priority": "Advanced",
        "details": "Websites often append additional GET parameters to URLs that you click, to identify information like source/referrer. You can sanitize manually, or use an extension like [ClearURLs](https://awesome-privacy.xyz/security-tools/browser-extensions/clearurls) to strip tracking data from URLs automatically.",
        "id": "web-35",
        "completed": false,
        "ignored": false
      },
      {
        "security": "First Launch Security",
        "priority": "Advanced",
        "details": "After installing a web browser, the first time you launch it (prior to configuring its privacy settings), most browsers will call home. Therefore, after installing a browser, you should first disable your internet connection, then configure privacy options before reenabling your internet connectivity.",
        "id": "web-36",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use The Tor Browser",
        "priority": "Advanced",
        "details": "The [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor) Project provides a browser that encrypts and routes your traffic through multiple nodes, keeping users safe from interception and tracking. The main drawbacks are speed and user experience.",
        "id": "web-37",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Disable JavaScript",
        "priority": "Advanced",
        "details": "Many modern web apps are JavaScript-based, so disabling it will greatly decrease your browsing experience. But if you really want to go all out, then it will really reduce your attack surface.",
        "id": "web-38",
        "completed": false,
        "ignored": false
      }
    ]
  },
  {
    "id": "email",
    "title": "Email",
    "description": "Protecting the gateway to your online accounts",
    "longDescription": "If a hacker gets access to your emails, it provides a gateway for your other accounts to be compromised (through password resets), therefore email security is paramount for your digital safety.",
    "iconName": "MailIcon",
    "color": "#60a5fa",
    "textColor": "text-blue-400",
    "completed": 0,
    "total": 21,
    "items": [
      {
        "security": "Have more than one email address",
        "priority": "Essential",
        "details": "Consider using a different email address for security-critical communications from trivial mail such as newsletters. This compartmentalization could reduce the amount of damage caused by a data breach, and also make it easier to recover a compromised account.",
        "id": "email-0",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Keep Email Address Private",
        "priority": "Essential",
        "details": "Do not share your primary email publicly, as mail addresses are often the starting point for most phishing attacks.",
        "id": "email-1",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Keep your Account Secure",
        "priority": "Essential",
        "details": "Use a long and unique password, enable 2FA and be careful while logging in. Your email account provides an easy entry point to all your other online accounts for an attacker.",
        "id": "email-2",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Disable Automatic Loading of Remote Content",
        "priority": "Essential",
        "details": "Email messages can contain remote content such as images or stylesheets, often automatically loaded from the server. You should disable this, as it exposes your IP address and device information, and is often used for tracking. For more info, see [this article](https://www.theverge.com/2019/7/3/20680903/email-pixel-trackers-how-to-stop-images-automatic-download).",
        "id": "email-3",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use Plaintext",
        "priority": "Optional",
        "details": "There are two main types of emails on the internet: plaintext and HTML. The former is strongly preferred for privacy & security as HTML messages often include identifiers in links and inline images, which can collect usage and personal data. There's also numerous risks of remote code execution targeting the HTML parser of your mail client, which cannot be exploited if you are using plaintext. For more info, as well as setup instructions for your mail provider, see [UsePlaintext.email](https://useplaintext.email/).",
        "id": "email-4",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Don’t connect third-party apps to your email account",
        "priority": "Optional",
        "details": "If you give a third-party app or plug-in full access to your inbox, they effectively have full unhindered access to all your emails and their contents, which poses significant security and privacy risks.",
        "id": "email-5",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Don't Share Sensitive Data via Email",
        "priority": "Optional",
        "details": "Emails are very easily intercepted. Furthermore, you can’t be sure of how secure your recipient's environment is. Therefore, emails cannot be considered safe for exchanging confidential information, unless it is encrypted.",
        "id": "email-6",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Consider Switching to a Secure Mail Provider",
        "priority": "Optional",
        "details": "Secure and reputable email providers such as [Forward Email](https://awesome-privacy.xyz/communication/encrypted-email/forward-email), [ProtonMail](https://awesome-privacy.xyz/communication/mail-forwarding/protonmail), and [Tutanota](https://awesome-privacy.xyz/communication/encrypted-email/tuta) allow for end-to-end encryption, full privacy as well as more security-focused features. Unlike typical email providers, your mailbox cannot be read by anyone but you, since all messages are encrypted.",
        "id": "email-7",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use Smart Key",
        "priority": "Advanced",
        "details": "OpenPGP does not support Forward secrecy, which means if either your or the recipient's private key is ever stolen, all previous messages encrypted with it will be exposed. Therefore, you should take great care to keep your private keys safe. One method of doing so, is to use a USB Smart Key to sign or decrypt messages, allowing you to do so without your private key leaving the USB device.",
        "id": "email-8",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use Aliasing / Anonymous Forwarding",
        "priority": "Advanced",
        "details": "Email aliasing allows messages to be sent to [anything]@my-domain.com and still land in your primary inbox. Effectively allowing you to use a different, unique email address for each service you sign up for. This means if you start receiving spam, you can block that alias and determine which company leaked your email address.",
        "id": "email-9",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Subaddressing",
        "priority": "Optional",
        "details": "An alternative to aliasing is subaddressing, where anything after the `+` symbol is omitted during mail delivery. This enables you to keep track of who shared/ leaked your email address, but unlike aliasing, it will not protect against your real address being revealed.",
        "id": "email-10",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use a Custom Domain",
        "priority": "Advanced",
        "details": "Using a custom domain means that you are not dependent on the address assigned by your mail provider. So you can easily switch providers in the future and do not need to worry about a service being discontinued.",
        "id": "email-11",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Sync with a client for backup",
        "priority": "Advanced",
        "details": "To avoid losing temporary or permanent access to your emails during an unplanned event (such as an outage or account lock), Thunderbird can sync/ backup messages from multiple accounts via IMAP and store locally on your primary device.",
        "id": "email-12",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Be Careful with Mail Signatures",
        "priority": "Advanced",
        "details": "You do not know how secure of an email environment the recipient of your message may have. There are several extensions that automatically crawl messages, and create a detailed database of contact information based upon email signatures.",
        "id": "email-13",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Be Careful with Auto-Replies",
        "priority": "Advanced",
        "details": "Out-of-office automatic replies are very useful for informing people there will be a delay in replying, but all too often people reveal too much information- which can be used in social engineering and targeted attacks.",
        "id": "email-14",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Choose the Right Mail Protocol",
        "priority": "Advanced",
        "details": "Do not use outdated protocols (below IMAPv4 or POPv3), both have known vulnerabilities and out-dated security.",
        "id": "email-15",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Self-Hosting",
        "priority": "Advanced",
        "details": "Self-hosting your own mail server is not recommended for non-advanced users, since correctly securing it is critical yet requires strong networking knowledge.",
        "id": "email-16",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Always use TLS Ports",
        "priority": "Advanced",
        "details": "There are SSL options for POP3, IMAP, and SMTP as standard TCP/IP ports. They are easy to use, and widely supported so should always be used instead of plaintext email ports.",
        "id": "email-17",
        "completed": false,
        "ignored": false
      },
      {
        "security": "DNS Availability",
        "priority": "Advanced",
        "details": "For self-hosted mail servers, to prevent DNS problems impacting availability- use at least 2 MX records, with secondary and tertiary MX records for redundancy when the primary MX record fails.",
        "id": "email-18",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Prevent DDoS and Brute Force Attacks",
        "priority": "Advanced",
        "details": "For self-hosted mail servers (specifically SMTP), limit your total number of simultaneous connections, and maximum connection rate to reduce the impact of attempted bot attacks.",
        "id": "email-19",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Maintain IP Blacklist",
        "priority": "Advanced",
        "details": "For self-hosted mail servers, you can improve spam filters and harden security, through maintaining an up-to-date local IP blacklist and a spam URI realtime block lists to filter out malicious hyperlinks.",
        "id": "email-20",
        "completed": false,
        "ignored": false
      }
    ]
  },
  {
    "id": "messaging",
    "title": "Messaging",
    "description": "Keeping your communications private and secure",
    "longDescription": "This section covers advice for secure, private and anonymous communication.",
    "iconName": "MessageSquareIcon",
    "color": "#2dd4bf",
    "textColor": "text-teal-400",
    "completed": 0,
    "total": 19,
    "items": [
      {
        "security": "Only Use Fully End-to-End Encrypted Messengers",
        "priority": "Essential",
        "details": "End-to-end encryption is a system of communication where messages are encrypted on your device and not decrypted until they reach the intended recipient. This ensures that any actor who intercepts traffic cannot read the message contents, nor can anybody with access to the central servers where data is stored.",
        "id": "messaging-0",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use only Open Source Messaging Platforms",
        "priority": "Essential",
        "details": "If code is open source then it can be independently examined and audited by anyone qualified to do so, to ensure that there are no backdoors, vulnerabilities, or other security issues.",
        "id": "messaging-1",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use a \"Trustworthy\" Messaging Platform",
        "priority": "Essential",
        "details": "When selecting an encrypted messaging app, ensure it's fully open source, stable, actively maintained, and ideally backed by reputable developers.",
        "id": "messaging-2",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Check Security Settings",
        "priority": "Essential",
        "details": "Enable security settings, including contact verification, security notifications, and encryption. Disable optional non-security features such as read receipt, last online, and typing notification.",
        "id": "messaging-3",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Ensure your Recipients Environment is Secure",
        "priority": "Essential",
        "details": "Your conversation can only be as secure as the weakest link. Often the easiest way to infiltrate a communications channel is to target the individual or node with the least protection.",
        "id": "messaging-4",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Disable Cloud Services",
        "priority": "Essential",
        "details": "Some mobile messaging apps offer a web or desktop companion. This not only increases attack surface but it has been linked to several critical security issues, and should therefore be avoided, if possible.",
        "id": "messaging-5",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Secure Group Chats",
        "priority": "Essential",
        "details": "The risk of compromise rises exponentially, the more participants are in a group, as the attack surface increases. Periodically check that all participants are legitimate.",
        "id": "messaging-6",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Create a Safe Environment for Communication",
        "priority": "Essential",
        "details": "There are several stages where your digital communications could be monitored or intercepted. This includes: your or your participants' device, your ISP, national gateway or government logging, the messaging provider, the servers.",
        "id": "messaging-7",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Agree on a Communication Plan",
        "priority": "Optional",
        "details": "In certain situations, it may be worth making a communication plan. This should include primary and backup methods of securely getting in hold with each other.",
        "id": "messaging-8",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Strip Meta-Data from Media",
        "priority": "Optional",
        "details": "Metadata is \"Data about Data\" or additional information attached to a file or transaction. When you send a photo, audio recording, video, or document you may be revealing more than you intended to.",
        "id": "messaging-9",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Defang URLs",
        "priority": "Optional",
        "details": "Sending links via various services can unintentionally expose your personal information. This is because, when a thumbnail or preview is generated- it happens on the client-side.",
        "id": "messaging-10",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Verify your Recipient",
        "priority": "Optional",
        "details": "Always ensure you are talking to the intended recipient, and that they have not been compromised. One method for doing so is to use an app which supports contact verification.",
        "id": "messaging-11",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Enable Ephemeral Messages",
        "priority": "Optional",
        "details": "Self-destructing messages is a feature that causes your messages to automatically delete after a set of time. This means that if your device is lost, stolen, or seized, an adversary will only have access to the most recent communications.",
        "id": "messaging-12",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Avoid SMS",
        "priority": "Optional",
        "details": "SMS may be convenient, but it's not secure. It is susceptible to threats such as interception, sim swapping, manipulation, and malware.",
        "id": "messaging-13",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Watch out for Trackers",
        "priority": "Optional",
        "details": "Be wary of messaging applications with trackers, as the detailed usage statistics they collect are often very invasive, and can sometimes reveal your identity as well as personal information that you would otherwise not intend to share.",
        "id": "messaging-14",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Consider Jurisdiction",
        "priority": "Advanced",
        "details": "The jurisdictions where the organisation is based, and data is hosted should also be taken into account.",
        "id": "messaging-15",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use an Anonymous Platform",
        "priority": "Advanced",
        "details": "If you believe you may be targeted, you should opt for an anonymous messaging platform that does not require a phone number, or any other personally identifiable information to sign up or use.",
        "id": "messaging-16",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Ensure Forward Secrecy is Supported",
        "priority": "Advanced",
        "details": "Opt for a platform that implements forward secrecy. This is where your app generates a new encryption key for every message.",
        "id": "messaging-17",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Consider a Decentralized Platform",
        "priority": "Advanced",
        "details": "If all data flows through a central provider, you have to trust them with your data and meta-data. You cannot verify that the system running is authentic without back doors.",
        "id": "messaging-18",
        "completed": false,
        "ignored": false
      }
    ]
  },
  {
    "id": "social",
    "title": "Social Media",
    "description": "Minimizing the risks associated with using online communities",
    "longDescription": "Secure your account, lock down your privacy settings, but know that even after doing so, all data intentionally and non-intentionally uploaded is effectively public. If possible, avoid using conventional social media networks.",
    "iconName": "Share2Icon",
    "color": "#38bdf8",
    "textColor": "text-sky-400",
    "completed": 0,
    "total": 15,
    "items": [
      {
        "security": "Secure your Account",
        "priority": "Essential",
        "details": "Social media profiles get stolen or taken over all too often. To protect your account: use a unique and strong password, and enable 2-factor authentication.",
        "id": "social-0",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Check Privacy Settings",
        "priority": "Essential",
        "details": "Most social networks allow you to control your privacy settings. Ensure that you are comfortable with what data you are currently exposing and to whom.",
        "id": "social-1",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Think of All Interactions as Public",
        "priority": "Essential",
        "details": "There are still numerous methods of viewing a users 'private' content across many social networks. Therefore, before uploading, posting or commenting on anything, think \"Would I mind if this was totally public?\"",
        "id": "social-2",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Think of All Interactions as Permanent",
        "priority": "Essential",
        "details": "Pretty much every post, comment, photo etc is being continuously backed up by a myriad of third-party services, who archive this data and make it indexable and publicly available almost forever.",
        "id": "social-3",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Don't Reveal too Much",
        "priority": "Essential",
        "details": "Profile information creates a goldmine of info for hackers, the kind of data that helps them personalize phishing scams. Avoid sharing too much detail (DoB, Hometown, School etc).",
        "id": "social-4",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Be Careful what you Upload",
        "priority": "Essential",
        "details": "Status updates, comments, check-ins and media can unintentionally reveal a lot more than you intended them to. This is especially relevant to photos and videos, which may show things in the background.",
        "id": "social-5",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Don't Share Email or Phone Number",
        "priority": "Essential",
        "details": "Posting your real email address or mobile number, gives hackers, trolls and spammers more munition to use against you, and can also allow separate aliases, profiles or data points to be connected.",
        "id": "social-6",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Don't Grant Unnecessary Permissions",
        "priority": "Essential",
        "details": "By default many of the popular social networking apps will ask for permission to access your contacts, call log, location, messaging history etc. If they don’t need this access, don’t grant it.",
        "id": "social-7",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Be Careful of 3rd-Party Integrations",
        "priority": "Essential",
        "details": "Avoid signing up for accounts using a Social Network login, revoke access to social apps you no longer use.",
        "id": "social-8",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Avoid Publishing Geo Data while still Onsite",
        "priority": "Essential",
        "details": "If you plan to share any content that reveals a location, then wait until you have left that place. This is particularly important when you are taking a trip, at a restaurant, campus, hotel/resort, public building or airport.",
        "id": "social-9",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Remove metadata before uploading media",
        "priority": "Optional",
        "details": "Most smartphones and some cameras automatically attach a comprehensive set of additional data (called EXIF data) to each photograph. Remove this data before uploading.",
        "id": "social-10",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Implement Image Cloaking",
        "priority": "Advanced",
        "details": "Tools like Fawkes can be used to very subtly, slightly change the structure of faces within photos in a way that is imperceptible by humans, but will prevent facial recognition systems from being able to recognize a given face.",
        "id": "social-11",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Consider Spoofing GPS in home vicinity",
        "priority": "Advanced",
        "details": "Even if you yourself never use social media, there is always going to be others who are not as careful, and could reveal your location.",
        "id": "social-12",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Consider False Information",
        "priority": "Advanced",
        "details": "If you just want to read, and do not intend on posting too much- consider using an alias name, and false contact details.",
        "id": "social-13",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Don’t have any social media accounts",
        "priority": "Advanced",
        "details": "Social media is fundamentally un-private, so for maximum online security and privacy, avoid using any mainstream social networks.",
        "id": "social-14",
        "completed": false,
        "ignored": false
      }
    ]
  },
  {
    "id": "networks",
    "title": "Networks",
    "description": "Safeguarding your network traffic",
    "longDescription": "This section covers how you connect your devices to the internet securely, including configuring your router and setting up a VPN.",
    "iconName": "WifiIcon",
    "color": "#a78bfa",
    "textColor": "text-violet-400",
    "completed": 0,
    "total": 25,
    "items": [
      {
        "security": "Use a VPN",
        "priority": "Essential",
        "details": "Use a reputable, paid-for VPN. This can help protect sites you visit from logging your real IP, reduce the amount of data your ISP can collect, and increase protection on public WiFi.",
        "id": "networks-0",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Change your Router Password",
        "priority": "Essential",
        "details": "After getting a new router, change the password. Default router passwords are publicly available, meaning anyone within proximity would be able to connect.",
        "id": "networks-1",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use WPA2, and a strong password",
        "priority": "Essential",
        "details": "There are different authentication protocols for connecting to WiFi. Currently, the most secure options are WPA2 and WPA3 (on newer routers).",
        "id": "networks-2",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Keep router firmware up-to-date",
        "priority": "Essential",
        "details": "Manufacturers release firmware updates that fix security vulnerabilities, implement new standards, and sometimes add features or improve the performance of your router.",
        "id": "networks-3",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Implement a Network-Wide VPN",
        "priority": "Optional",
        "details": "If you configure your VPN on your router, firewall, or home server, then traffic from all devices will be encrypted and routed through it, without needing individual VPN apps.",
        "id": "networks-4",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Protect against DNS leaks",
        "priority": "Optional",
        "details": "When using a VPN, it is extremely important to exclusively use the DNS server of your VPN provider or secure service.",
        "id": "networks-5",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use a secure VPN Protocol",
        "priority": "Optional",
        "details": "OpenVPN and WireGuard are open source, lightweight, and secure tunneling protocols. Avoid using PPTP or SSTP.",
        "id": "networks-6",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Secure DNS",
        "priority": "Optional",
        "details": "Use DNS-over-HTTPS which performs DNS resolution via the HTTPS protocol, encrypting data between you and your DNS resolver.",
        "id": "networks-7",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Avoid the free router from your ISP",
        "priority": "Optional",
        "details": "Typically they’re manufactured cheaply in bulk in China, with insecure propriety firmware that doesn't receive regular security updates.",
        "id": "networks-8",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Whitelist MAC Addresses",
        "priority": "Optional",
        "details": "You can whitelist MAC addresses in your router settings, disallowing any unknown devices to immediately connect to your network, even if they know your credentials.",
        "id": "networks-9",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Change the Router’s Local IP Address",
        "priority": "Optional",
        "details": "It is possible for a malicious script in your web browser to exploit a cross-site scripting vulnerability, accessing known-vulnerable routers at their local IP address and tampering with them.",
        "id": "networks-10",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Don't Reveal Personal Info in SSID",
        "priority": "Optional",
        "details": "You should update your network name, choosing an SSID that does not identify you, include your flat number/address, and does not specify the device brand/model.",
        "id": "networks-11",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Opt-Out Router Listings",
        "priority": "Optional",
        "details": "WiFi SSIDs are scanned, logged, and then published on various websites, which is a serious privacy concern for some.",
        "id": "networks-12",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Hide your SSID",
        "priority": "Optional",
        "details": "Your router's Service Set Identifier is simply the network name. If it is not visible, it may receive less abuse.",
        "id": "networks-13",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Disable WPS",
        "priority": "Optional",
        "details": "Wi-Fi Protected Setup provides an easier method to connect, without entering a long WiFi password, but WPS introduces a series of major security issues.",
        "id": "networks-14",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Disable UPnP",
        "priority": "Optional",
        "details": "Universal Plug and Play allows applications to automatically forward a port on your router, but it has a long history of serious security issues.",
        "id": "networks-15",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use a Guest Network for Guests",
        "priority": "Optional",
        "details": "Do not grant access to your primary WiFi network to visitors, as it enables them to interact with other devices on the network.",
        "id": "networks-16",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Change your Router's Default IP",
        "priority": "Optional",
        "details": "Modifying your router admin panel's default IP address will make it more difficult for malicious scripts targeting local IP addresses.",
        "id": "networks-17",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Kill unused processes and services on your router",
        "priority": "Optional",
        "details": "Services like Telnet and SSH that provide command-line access to devices should never be exposed to the internet and should also be disabled on the local network unless they're actually needed.",
        "id": "networks-18",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Don't have Open Ports",
        "priority": "Optional",
        "details": "Close any open ports on your router that are not needed. Open ports provide an easy entrance for hackers.",
        "id": "networks-19",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Disable Unused Remote Access Protocols",
        "priority": "Optional",
        "details": "When protocols such as PING, Telnet, SSH, UPnP, and HNAP etc are enabled, they allow your router to be probed from anywhere in the world.",
        "id": "networks-20",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Disable Cloud-Based Management",
        "priority": "Optional",
        "details": "You should treat your router's admin panel with the utmost care, as considerable damage can be caused if an attacker is able to gain access.",
        "id": "networks-21",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Manage Range Correctly",
        "priority": "Optional",
        "details": "It's common to want to pump your router's range to the max, but if you reside in a smaller flat, your attack surface is increased when your WiFi network can be picked up across the street.",
        "id": "networks-22",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Route all traffic through Tor",
        "priority": "Advanced",
        "details": "VPNs have their weaknesses. For increased security, route all your internet traffic through the [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor) network.",
        "id": "networks-23",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Disable WiFi on all Devices",
        "priority": "Advanced",
        "details": "Connecting to even a secure WiFi network increases your attack surface. Disabling your home WiFi and connect each device via Ethernet.",
        "id": "networks-24",
        "completed": false,
        "ignored": false
      }
    ]
  },
  {
    "id": "mobile",
    "title": "Mobile Devices",
    "description": "Reduce invasive tracking for cells, smartphones and tablets",
    "longDescription": "Using a smart phone generates a lot of data about you- from information you intentionally share, to data silently generated from your actions. This data is used for far more than just advertising - more often it's used to rate people for finance, insurance and employment.",
    "iconName": "SmartphoneIcon",
    "color": "#c084fc",
    "textColor": "text-purple-400",
    "completed": 0,
    "total": 23,
    "items": [
      {
        "security": "Encrypt your Device",
        "priority": "Essential",
        "details": "In order to keep your data safe from physical access, use file encryption. This will mean if your device is lost or stolen, no one will have access to your data.",
        "id": "mobile-0",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Turn off connectivity features that aren’t being used",
        "priority": "Essential",
        "details": "When you're not using WiFi, Bluetooth, NFC etc, turn those features off. There are several common threats that utilise these features.",
        "id": "mobile-1",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Keep app count to a minimum",
        "priority": "Essential",
        "details": "Uninstall apps that you don’t need or use regularly. As apps often run in the background, slowing your device down, but also collecting data.",
        "id": "mobile-2",
        "completed": false,
        "ignored": false
      },
      {
        "security": "App Permissions",
        "priority": "Essential",
        "details": "Don’t grant apps permissions that they don’t need. For Android, [Bouncer](https://awesome-privacy.xyz/security-tools/mobile-apps/bouncer) is an app that allows you to grant temporary/ 1-off permissions.",
        "id": "mobile-3",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Only install Apps from official source",
        "priority": "Essential",
        "details": "Applications on Apple App Store and Google Play Store are scanned and cryptographically signed, making them less likely to be malicious.",
        "id": "mobile-4",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Be Careful of Phone Charging Threats",
        "priority": "Optional",
        "details": "Juice Jacking is when hackers use public charging stations to install malware on your smartphone or tablet through a compromised USB port.",
        "id": "mobile-5",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Set up a mobile carrier PIN",
        "priority": "Essential",
        "details": "SIM hijacking is when a hacker is able to get your mobile number transferred to their sim. The easiest way to protect against this is to set up a PIN through your mobile provider.",
        "id": "mobile-6",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Opt-out of Caller ID Listings",
        "priority": "Optional",
        "details": "To keep your details private, you can unlist your number from caller ID apps like TrueCaller, CallApp, SyncMe, and Hiya.",
        "id": "mobile-7",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use Offline Maps",
        "priority": "Optional",
        "details": "Consider using an offline maps app, such as OsmAnd or Organic Maps, to reduce data leaks from map apps.",
        "id": "mobile-8",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Opt-out of personalized ads",
        "priority": "Optional",
        "details": "You can slightly reduce the amount of data collected by opting-out of seeing personalized ads.",
        "id": "mobile-9",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Erase after too many login attempts",
        "priority": "Optional",
        "details": "To protect against an attacker brute forcing your pin, set your device to erase after too many failed login attempts.",
        "id": "mobile-10",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Monitor Trackers",
        "priority": "Optional",
        "details": "[εxodus](https://awesome-privacy.xyz/security-tools/online-tools/εxodus) is a great service which lets you search for any app and see which trackers are embedded in it.",
        "id": "mobile-11",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use a Mobile Firewall",
        "priority": "Optional",
        "details": "To prevent applications from leaking privacy-sensitive data, you can install a firewall app.",
        "id": "mobile-12",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Reduce Background Activity",
        "priority": "Optional",
        "details": "For Android, SuperFreeze makes it possible to entirely freeze all background activities on a per-app basis.",
        "id": "mobile-13",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Sandbox Mobile Apps",
        "priority": "Optional",
        "details": "Prevent permission-hungry apps from accessing your private data with [Island](https://awesome-privacy.xyz/security-tools/mobile-apps/island), a sandbox environment.",
        "id": "mobile-14",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Tor Traffic",
        "priority": "Advanced",
        "details": "[Orbot](https://awesome-privacy.xyz/security-tools/mobile-apps/orbot) provides a system-wide Tor connection, which will help protect you from surveillance and public WiFi threats.",
        "id": "mobile-15",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Avoid Custom Virtual Keyboards",
        "priority": "Optional",
        "details": "It is recommended to stick with your device's stock keyboard. If you choose to use a third-party keyboard app, ensure it is reputable.",
        "id": "mobile-16",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Restart Device Regularly",
        "priority": "Optional",
        "details": "Restarting your phone at least once a week will clear the app state cached in memory and may run more smoothly after a restart.",
        "id": "mobile-17",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Avoid SMS",
        "priority": "Optional",
        "details": "SMS should not be used to receive 2FA codes or for communication, instead use an encrypted messaging app, such as [Signal](https://awesome-privacy.xyz/communication/encrypted-messaging/signal).",
        "id": "mobile-18",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Keep your Number Private",
        "priority": "Optional",
        "details": "[MySudo](https://awesome-privacy.xyz/finance/virtual-credit-cards/mysudo) allows you to create and use virtual phone numbers for different people or groups. This is great for compartmentalisation.",
        "id": "mobile-19",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Watch out for Stalkerware",
        "priority": "Optional",
        "details": "Stalkerware is malware that is installed directly onto your device by someone you know. The best way to get rid of it is through a factory reset.",
        "id": "mobile-20",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Favor the Browser, over Dedicated App",
        "priority": "Optional",
        "details": "Where possible, consider using a secure browser to access sites, rather than installing dedicated applications.",
        "id": "mobile-21",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Consider running a custom ROM (Android)",
        "priority": "Advanced",
        "details": "If you're concerned about your device manufacturer collecting too much personal information, consider a privacy-focused custom ROM.",
        "id": "mobile-22",
        "completed": false,
        "ignored": false
      }
    ]
  },
  {
    "id": "computers",
    "title": "Personal Computers",
    "description": "Securing your PC's operating system, data & activity",
    "longDescription": "Although Windows and OS X are easy to use and convenient, they both are far from secure. Your OS provides the interface between hardware and your applications, so if compromised can have detrimental effects.",
    "iconName": "ComputerIcon",
    "color": "#f472b6",
    "textColor": "text-pink-400",
    "completed": 0,
    "total": 35,
    "items": [
      {
        "security": "Keep your System up-to-date",
        "priority": "Essential",
        "details": "System updates contain fixes/patches for security issues, improve performance, and sometimes add new features. Install new updates when prompted.",
        "id": "computers-0",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Encrypt your Device",
        "priority": "Essential",
        "details": "Use BitLocker for Windows, FileVault on MacOS, or LUKS on Linux, to enable full disk encryption. This prevents unauthorized access if your computer is lost or stolen.",
        "id": "computers-1",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Backup Important Data",
        "priority": "Essential",
        "details": "Maintaining encrypted backups prevents loss due to ransomware, theft, or damage. Consider using [Cryptomator](https://awesome-privacy.xyz/security-tools/mobile-apps/cryptomator) for cloud files or [VeraCrypt](https://awesome-privacy.xyz/essentials/file-encryption/veracrypt) for USB drives.",
        "id": "computers-2",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Be Careful Plugging USB Devices into your Computer",
        "priority": "Essential",
        "details": "USB devices can pose serious threats. Consider making a USB sanitizer with CIRCLean to safely check USB devices.",
        "id": "computers-3",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Activate Screen-Lock when Idle",
        "priority": "Essential",
        "details": "Lock your computer when away and set it to require a password on resume from screensaver or sleep to prevent unauthorized access.",
        "id": "computers-4",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Disable Cortana or Siri",
        "priority": "Essential",
        "details": "Voice-controlled assistants can have privacy implications due to data sent back for processing. Disable or limit their listening capabilities.",
        "id": "computers-5",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Review your Installed Apps",
        "priority": "Essential",
        "details": "Keep installed applications to a minimum to reduce exposure to vulnerabilities and regularly clear application caches.",
        "id": "computers-6",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Manage Permissions",
        "priority": "Essential",
        "details": "Control which apps have access to your location, camera, microphone, contacts, and other sensitive information.",
        "id": "computers-7",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Disallow Usage Data from being sent to the Cloud",
        "priority": "Essential",
        "details": "Limit the amount of usage information or feedback sent to the cloud to protect your privacy.",
        "id": "computers-8",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Avoid Quick Unlock",
        "priority": "Essential",
        "details": "Use a strong password instead of biometrics or short PINs for unlocking your computer to enhance security.",
        "id": "computers-9",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Power Off Computer, instead of Standby",
        "priority": "Essential",
        "details": "Shut down your device when not in use, especially if your disk is encrypted, to keep data secure.",
        "id": "computers-10",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Don't link your PC with your Microsoft or Apple Account",
        "priority": "Optional",
        "details": "Use a local account only to prevent data syncing and exposure. Avoid using sync services that compromise privacy.",
        "id": "computers-11",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Check which Sharing Services are Enabled",
        "priority": "Optional",
        "details": "Disable network sharing features you are not using to close gateways to common threats.",
        "id": "computers-12",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Don't use Root/Admin Account for Non-Admin Tasks",
        "priority": "Optional",
        "details": "Use an unprivileged user account for daily tasks and only elevate permissions for administrative changes to mitigate vulnerabilities.",
        "id": "computers-13",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Block Webcam + Microphone",
        "priority": "Optional",
        "details": "Cover your webcam when not in use and consider blocking unauthorized audio recording to protect privacy.",
        "id": "computers-14",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use a Privacy Filter",
        "priority": "Optional",
        "details": "Use a screen privacy filter in public spaces to prevent shoulder surfing and protect sensitive information.",
        "id": "computers-15",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Physically Secure Device",
        "priority": "Optional",
        "details": "Use a Kensington Lock to secure your laptop in public spaces and consider port locks to prevent unauthorized physical access.",
        "id": "computers-16",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Don't Charge Devices from your PC",
        "priority": "Optional",
        "details": "Use a power bank or AC wall charger instead of your PC to avoid security risks associated with USB connections.",
        "id": "computers-17",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Randomize your hardware address on Wi-Fi",
        "priority": "Optional",
        "details": "Modify or randomize your MAC address to protect against tracking across different WiFi networks.",
        "id": "computers-18",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use a Firewall",
        "priority": "Optional",
        "details": "Install a firewall app to monitor and block unwanted internet access by certain applications, protecting against remote access attacks and privacy breaches.",
        "id": "computers-19",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Protect Against Software Keyloggers",
        "priority": "Optional",
        "details": "Use key stroke encryption tools to protect against software keyloggers recording your keystrokes.",
        "id": "computers-20",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Check Keyboard Connection",
        "priority": "Optional",
        "details": "Be vigilant for hardware keyloggers when using public or unfamiliar computers by checking keyboard connections.",
        "id": "computers-21",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Prevent Keystroke Injection Attacks",
        "priority": "Optional",
        "details": "Lock your PC when away and consider using USBGuard or similar tools to protect against keystroke injection attacks.",
        "id": "computers-22",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Don't use commercial \"Free\" Anti-Virus",
        "priority": "Optional",
        "details": "Rely on built-in security tools and avoid free anti-virus applications due to their potential for privacy invasion and data collection.",
        "id": "computers-23",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Periodically check for Rootkits",
        "priority": "Advanced",
        "details": "Regularly check for rootkits to detect and mitigate full system control threats using tools like [chkrootkit](https://awesome-privacy.xyz/operating-systems/linux-defenses/chkrootkit).",
        "id": "computers-24",
        "completed": false,
        "ignored": false
      },
      {
        "security": "BIOS Boot Password",
        "priority": "Advanced",
        "details": "Enable a BIOS or UEFI password to add an additional security layer during boot-up, though be aware of its limitations.",
        "id": "computers-25",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use a Security-Focused Operating System",
        "priority": "Advanced",
        "details": "Consider switching to Linux or a security-focused distro like QubeOS or [Tails](https://awesome-privacy.xyz/operating-systems/desktop-operating-systems/tails) for enhanced privacy and security.",
        "id": "computers-26",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Make Use of VMs",
        "priority": "Advanced",
        "details": "Use virtual machines for risky activities or testing suspicious software to isolate potential threats from your primary system.",
        "id": "computers-27",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Compartmentalize",
        "priority": "Advanced",
        "details": "Isolate different programs and data sources from one another as much as possible to limit the extent of potential breaches.",
        "id": "computers-28",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Disable Undesired Features (Windows)",
        "priority": "Advanced",
        "details": "Disable unnecessary Windows \"features\" and services that run in the background to reduce data collection and resource use.",
        "id": "computers-29",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Secure Boot",
        "priority": "Advanced",
        "details": "Ensure that Secure Boot is enabled to prevent malware from replacing your boot loader and other critical software.",
        "id": "computers-30",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Secure SSH Access",
        "priority": "Advanced",
        "details": "Take steps to protect SSH access from attacks by changing the default port, using SSH keys, and configuring firewalls.",
        "id": "computers-31",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Close Un-used Open Ports",
        "priority": "Advanced",
        "details": "Turn off services listening on external ports that are not needed to protect against remote exploits and improve security.",
        "id": "computers-32",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Implement Mandatory Access Control",
        "priority": "Advanced",
        "details": "Restrict privileged access to limit the damage that can be done if a system is compromised.",
        "id": "computers-33",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use Canary Tokens",
        "priority": "Advanced",
        "details": "Deploy canary tokens to detect unauthorized access to your files or emails faster and gather information about the intruder.",
        "id": "computers-34",
        "completed": false,
        "ignored": false
      }
    ]
  },
  {
    "id": "smarthome",
    "title": "Smart Home",
    "description": "Using IoT devices without compromising your privacy",
    "longDescription": "The most privacy-respecting option, would be to not use \"smart\" internet-connected devices in your home, and not to rely on a security device that requires an internet connection. But if you do, it is important to fully understand the risks of any given product, before buying it.",
    "iconName": "HomeIcon",
    "color": "#fb7185",
    "textColor": "text-rose-400",
    "completed": 0,
    "total": 13,
    "items": [
      {
        "security": "Rename devices to not specify brand/model",
        "priority": "Essential",
        "details": "Change default device names to something generic to prevent targeted attacks by obscuring brand or model information.",
        "id": "smarthome-0",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Disable microphone and camera when not in use",
        "priority": "Essential",
        "details": "Use hardware switches to turn off microphones and cameras on smart devices to protect against accidental recordings or targeted access.",
        "id": "smarthome-1",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Understand what data is collected, stored and transmitted",
        "priority": "Essential",
        "details": "Research and ensure comfort with the data handling practices of smart home devices before purchase, avoiding devices that share data with third parties.",
        "id": "smarthome-2",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Set privacy settings, and opt out of sharing data with third parties",
        "priority": "Essential",
        "details": "Adjust app settings for strictest privacy controls and opt-out of data sharing with third parties wherever possible.",
        "id": "smarthome-3",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Don't link your smart home devices to your real identity",
        "priority": "Essential",
        "details": "Use anonymous usernames and passwords, avoiding sign-up/log-in via social media or other third-party services to maintain privacy.",
        "id": "smarthome-4",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Keep firmware up-to-date",
        "priority": "Essential",
        "details": "Regularly update smart device firmware to apply security patches and enhancements.",
        "id": "smarthome-5",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Protect your Network",
        "priority": "Essential",
        "details": "Secure your home WiFi and network to prevent unauthorized access to smart devices.",
        "id": "smarthome-6",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Be wary of wearables",
        "priority": "Optional",
        "details": "Consider the extensive data collection capabilities of wearable devices and their implications for privacy.",
        "id": "smarthome-7",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Don't connect your home's critical infrastructure to the Internet",
        "priority": "Optional",
        "details": "Evaluate the risks of internet-connected thermostats, alarms, and detectors due to potential remote access by hackers.",
        "id": "smarthome-8",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Mitigate Alexa/ Google Home Risks",
        "priority": "Optional",
        "details": "Consider privacy-focused alternatives like [Mycroft](https://awesome-privacy.xyz/smart-home-and-iot/voice-assistants/mycroft) or use Project Alias to prevent idle listening by voice-activated assistants.",
        "id": "smarthome-9",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Monitor your home network closely",
        "priority": "Optional",
        "details": "Use tools like FingBox or router features to monitor for unusual network activity.",
        "id": "smarthome-10",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Deny Internet access where possible",
        "priority": "Advanced",
        "details": "Use firewalls to block internet access for devices that don't need it, limiting operation to local network use.",
        "id": "smarthome-11",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Assess risks",
        "priority": "Advanced",
        "details": "Consider the privacy implications for all household members and adjust device settings for security and privacy, such as disabling devices at certain times.",
        "id": "smarthome-12",
        "completed": false,
        "ignored": false
      }
    ]
  },
  {
    "id": "finance",
    "title": "Personal Finance",
    "description": "Protecting your funds, financial accounts and transactions",
    "longDescription": "Credit card fraud is the most common form of identity theft. It's more important than ever to take basic steps to protect yourself from falling victim.",
    "iconName": "CreditCardIcon",
    "color": "#e879f9",
    "textColor": "text-fuchsia-400",
    "completed": 0,
    "total": 10,
    "items": [
      {
        "security": "Sign up for Fraud Alerts and Credit Monitoring",
        "priority": "Essential",
        "details": "Enable fraud alerts and credit monitoring through Experian, TransUnion, or Equifax to be alerted of suspicious activity.",
        "id": "finance-0",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Apply a Credit Freeze",
        "priority": "Essential",
        "details": "Prevent unauthorized credit inquiries by freezing your credit through Experian, TransUnion, and Equifax.",
        "id": "finance-1",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use Virtual Cards",
        "priority": "Optional",
        "details": "Utilize virtual card numbers for online transactions to protect your real banking details. Services like [Privacy.com](https://awesome-privacy.xyz/finance/virtual-credit-cards/privacy.com) and [MySudo](https://awesome-privacy.xyz/finance/virtual-credit-cards/mysudo) offer such features.",
        "id": "finance-2",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use Cash for Local Transactions",
        "priority": "Optional",
        "details": "Pay with [Cash](https://awesome-privacy.xyz/finance/other-payment-methods/cash) for local and everyday purchases to avoid financial profiling by institutions.",
        "id": "finance-3",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use Cryptocurrency for Online Transactions",
        "priority": "Optional",
        "details": "Opt for privacy-focused cryptocurrencies like [Monero](https://awesome-privacy.xyz/finance/cryptocurrencies/monero) for online transactions to maintain anonymity. Use cryptocurrencies wisely to ensure privacy.",
        "id": "finance-4",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Store Crypto Securely",
        "priority": "Advanced",
        "details": "Securely store cryptocurrencies using offline wallet generation, hardware wallets like [Trezor](https://awesome-privacy.xyz/finance/crypto-wallets/trezor) or [ColdCard](https://awesome-privacy.xyz/finance/crypto-wallets/coldcard), or consider long-term storage solutions like [CryptoSteel](https://awesome-privacy.xyz/finance/crypto-wallets/cryptosteel).",
        "id": "finance-5",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Buy Crypto Anonymously",
        "priority": "Advanced",
        "details": "Purchase cryptocurrencies without linking to your identity through services like [LocalBitcoins](https://awesome-privacy.xyz/finance/crypto-exchanges/localbitcoins), [Bisq](https://awesome-privacy.xyz/finance/crypto-exchanges/bisq), or Bitcoin ATMs.",
        "id": "finance-6",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Tumble/ Mix Coins",
        "priority": "Advanced",
        "details": "Use a bitcoin mixer or CoinJoin before converting Bitcoin to currency to obscure transaction trails.",
        "id": "finance-7",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use an Alias Details for Online Shopping",
        "priority": "Advanced",
        "details": "For online purchases, consider using alias details, forwarding email addresses, VOIP numbers, and secure delivery methods to protect your identity.",
        "id": "finance-8",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use alternate delivery address",
        "priority": "Advanced",
        "details": "Opt for deliveries to non-personal addresses such as PO Boxes, forwarding addresses, or local pickup locations to avoid linking purchases directly to you.",
        "id": "finance-9",
        "completed": false,
        "ignored": false
      }
    ]
  },
  {
    "id": "human",
    "title": "Human Aspect",
    "description": "Avoiding social engineering security risks",
    "longDescription": "Many data breaches, hacks and attacks are caused by human error. The following list contains steps you should take, to reduce the risk of this happening to you.",
    "iconName": "UserIcon",
    "color": "#818cf8",
    "textColor": "text-indigo-400",
    "completed": 0,
    "total": 21,
    "items": [
      {
        "security": "Verify Recipients",
        "priority": "Essential",
        "details": "Emails can be easily spoofed. Verify the sender's authenticity, especially for sensitive actions, and prefer entering URLs manually rather than clicking links in emails.",
        "id": "human-0",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Don't Trust Your Popup Notifications",
        "priority": "Essential",
        "details": "Fake pop-ups can be deployed by malicious actors. Always check the URL before entering any information on a popup.",
        "id": "human-1",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Never Leave Device Unattended",
        "priority": "Essential",
        "details": "Unattended devices can be compromised even with strong passwords. Use encryption and remote erase features like Find My Phone for lost devices.",
        "id": "human-2",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Prevent Camfecting",
        "priority": "Essential",
        "details": "Protect against camfecting by using webcam covers and microphone blockers. Mute home assistants when not in use or discussing sensitive matters.",
        "id": "human-3",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Stay protected from shoulder surfers",
        "priority": "Essential",
        "details": "Use privacy screens on laptops and mobiles to prevent others from reading your screen in public spaces.",
        "id": "human-4",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Educate yourself about phishing attacks",
        "priority": "Essential",
        "details": "Be cautious of phishing attempts. Verify URLs, context of received messages, and employ good security practices like using 2FA and not reusing passwords.",
        "id": "human-5",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Watch out for Stalkerware",
        "priority": "Essential",
        "details": "Be aware of stalkerware installed by acquaintances for spying. Look out for signs like unusual battery usage and perform factory resets if suspected.",
        "id": "human-6",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Install Reputable Software from Trusted Sources",
        "priority": "Essential",
        "details": "Only download software from legitimate sources and check files with tools like [Virus Total](https://awesome-privacy.xyz/security-tools/online-tools/virus-total) before installation.",
        "id": "human-7",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Store personal data securely",
        "priority": "Essential",
        "details": "Ensure all personal data on devices or in the cloud is encrypted to protect against unauthorized access.",
        "id": "human-8",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Obscure Personal Details from Documents",
        "priority": "Essential",
        "details": "When sharing documents, obscure personal details with opaque rectangles to prevent information leakage.",
        "id": "human-9",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Do not assume a site is secure, just because it is `HTTPS`",
        "priority": "Essential",
        "details": "HTTPS does not guarantee a website's legitimacy. Verify URLs and exercise caution with personal data.",
        "id": "human-10",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use Virtual Cards when paying online",
        "priority": "Optional",
        "details": "Use virtual cards for online payments to protect your banking details and limit transaction risks.",
        "id": "human-11",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Review application permissions",
        "priority": "Optional",
        "details": "Regularly review and manage app permissions to ensure no unnecessary access to sensitive device features.",
        "id": "human-12",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Opt-out of public lists",
        "priority": "Optional",
        "details": "Remove yourself from public databases and marketing lists to reduce unwanted contacts and potential risks.",
        "id": "human-13",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Never Provide Additional PII When Opting-Out",
        "priority": "Optional",
        "details": "Do not provide additional personal information when opting out of data services to avoid further data collection.",
        "id": "human-14",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Opt-out of data sharing",
        "priority": "Optional",
        "details": "Many apps and services default to data sharing settings. Opt out to protect your data from being shared with third parties.",
        "id": "human-15",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Review and update social media privacy",
        "priority": "Optional",
        "details": "Regularly check and update your social media settings due to frequent terms updates that may affect your privacy settings.",
        "id": "human-16",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Compartmentalize",
        "priority": "Advanced",
        "details": "Keep different areas of digital activity separate to limit data exposure in case of a breach.",
        "id": "human-17",
        "completed": false,
        "ignored": false
      },
      {
        "security": "WhoIs Privacy Guard",
        "priority": "Advanced",
        "details": "Use WhoIs Privacy Guard for domain registrations to protect your personal information from public searches.",
        "id": "human-18",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use a forwarding address",
        "priority": "Advanced",
        "details": "Use a PO Box or forwarding address for mail to prevent companies from knowing your real address, adding a layer of privacy protection.",
        "id": "human-19",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use anonymous payment methods",
        "priority": "Advanced",
        "details": "Opt for anonymous payment methods like cryptocurrencies to avoid entering identifiable information online.",
        "id": "human-20",
        "completed": false,
        "ignored": false
      }
    ]
  },
  {
    "id": "physical",
    "title": "Physical Security",
    "description": "Taking measures to prevent IRL security incidents",
    "longDescription": "Strong authentication, encrypted devices, patched software and anonymous web browsing may be of little use if someone is able to physically compromise you, your devices and your data. This section outlines some basic methods for physical security.",
    "iconName": "ShieldIcon",
    "color": "#4ade80",
    "textColor": "text-green-400",
    "completed": 0,
    "total": 16,
    "items": [
      {
        "security": "Destroy Sensitive Documents",
        "priority": "Essential",
        "details": "Shred or redact sensitive documents before disposal to protect against\nidentity theft and maintain confidentiality.",
        "id": "physical-0",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Opt-Out of Public Records",
        "priority": "Essential",
        "details": "Contact people search websites to opt-out from listings that show persona\ninformation, using guides like Michael Bazzell's Personal Data Removal Workbook.",
        "id": "physical-1",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Watermark Documents",
        "priority": "Essential",
        "details": "Add a watermark with the recipient's name and date to digital copies of\npersonal documents to trace the source of a breach.",
        "id": "physical-2",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Don't Reveal Info on Inbound Calls",
        "priority": "Essential",
        "details": "Only share personal data on calls you initiate and verify the recipient's phone number.",
        "id": "physical-3",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Stay Alert",
        "priority": "Essential",
        "details": "Be aware of your surroundings and assess potential risks in new environments.",
        "id": "physical-4",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Secure Perimeter",
        "priority": "Essential",
        "details": "Ensure physical security of locations storing personal info devices, minimizing external access and using intrusion detection systems.",
        "id": "physical-5",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Physically Secure Devices",
        "priority": "Essential",
        "details": "Use physical security measures like Kensington locks, webcam covers, and privacy screens for devices.",
        "id": "physical-6",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Keep Devices Out of Direct Sight",
        "priority": "Essential",
        "details": "Prevent devices from being visible from outside to mitigate risks from lasers and theft.",
        "id": "physical-7",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Protect your PIN",
        "priority": "Essential",
        "details": "Shield your PIN entry from onlookers and cameras, and clean touchscreens after use.",
        "id": "physical-8",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Check for Skimmers",
        "priority": "Essential",
        "details": "Inspect ATMs and public devices for skimming devices and tampering signs before use.",
        "id": "physical-9",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Protect your Home Address",
        "priority": "Optional",
        "details": "Use alternative locations, forwarding addresses, and anonymous payment methods to protect your home address.",
        "id": "physical-10",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Use a PIN, Not Biometrics",
        "priority": "Advanced",
        "details": "Prefer PINs over biometrics for device security in situations where legal coercion to unlock devices may occur.",
        "id": "physical-11",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Reduce exposure to CCTV",
        "priority": "Advanced",
        "details": "Wear disguises and choose routes with fewer cameras to avoid surveillance.",
        "id": "physical-12",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Anti-Facial Recognition Clothing",
        "priority": "Advanced",
        "details": "Wear clothing with patterns that trick facial-recognition technology.",
        "id": "physical-13",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Reduce Night Vision Exposure",
        "priority": "Advanced",
        "details": "Use IR light sources or reflective glasses to obstruct night vision cameras.",
        "id": "physical-14",
        "completed": false,
        "ignored": false
      },
      {
        "security": "Protect your DNA",
        "priority": "Advanced",
        "details": "Avoid sharing DNA with heritage websites and be cautious about leaving DNA traces.",
        "id": "physical-15",
        "completed": false,
        "ignored": false
      }
    ]
  }
]