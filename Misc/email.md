https://git-send-email.io/

sudo pacman -Syu --needed git perl-authen-sasl perl-net-smtp-ssl perl-mime-tools

[sendemail]
	smtpserver = mail.example.org
	smtpuser = you@example.org
	smtpencryption = tls
	smtpserverport = 587

git config --global user.email "you@example.org"
git config --global user.name "Your Name"

git clone https://git.sr.ht/~sircmpwn/email-test-drive
cd email-test-drive

echo "I'm about to try git send-email!" >your-name

git add your-name
git commit -m "Demonstrate that I can use git send-email!"

git send-email --to="~sircmpwn/email-test-drive@lists.sr.ht" HEAD^
