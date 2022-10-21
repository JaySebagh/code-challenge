// https://leetcode.com/problems/unique-email-addresses/

// brainstorm/sudo code
// split the email string by @
// everything after @ will be the domain name
// everything before the @ will be the local name
// if the local name has +, delete everything after it
// remove all .
// rejoin the email address
// compare all email addresses and count unique ones

const numUniqueEmails = function(emails) {
    for(let i = 0; i < emails.length; i++){
        let seperate = emails[i].split("@"), locale = seperate[0];
        const plusIndex = locale.indexOf("+")
        
        plusIndex === -1 ?
            seperate[0] = locale.replace(/\W/g, '') :
            seperate[0] = locale.slice(0, plusIndex).replace(/\W/g, '');
        emails[i] = seperate.join("@")
    }
    
    const unique = new Set(emails);
    return unique.size;
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.email.leet+alex@code.com"])) // 2

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])) // 2

console.log(numUniqueEmails(["a@leetcode.com","b@leetcode.com","c@leetcode.com"])) // 3


// other solutions

const numUniqueEmails = emails => new Set(emails.map(mail => `${mail.split('@')[0].replace(/\+.*$|\./g, '')}@${mail.split('@')[1]}`)).size

//

const numUniqueEmails = function(emails) {
    return (new Set(emails.map(email => {
        const [local, domain] = email.split('@');
        return local.split('+')[0].split('.').join('') + '@' + domain;
    }))).size;
};
