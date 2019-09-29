### Free DNS Hosting, Dynamic DNS Hosting, Static DNS Hosting, subdomain and domain hosting - by Afraid.org

Update demo

    [~] $ curl https://sync.afraid.org/u/CyTXMbtq5cPnLjEg5vKHTPDE/
    Updated demo.freshdns.com from 107.170.238.X to 50.23.197.94

IPv6 updates? Easy, just add v6.

    [~] $ curl https://v6.sync.afraid.org/u/CyTXMbtq5cPnLjEg5vKHTPDE/
    Updated demo.freshdns.com from 50.23.197.94 to 2607:f0d0:1102:d5::2


Possible Uses:
+ Host your own site on your own connection from home/work/school/etc
+ Access your computer with a name (like zeus.afraid.org or yourdomain.com) instead of a numeric IP address
+ Run your own http server, ftp server, or anything you want to install on your computer/server
+ Fetchable URL to update your IP instantly on our network if you have a dynamic address

+ Hosts even work for your LAN. If you have a LAN connected to the internet you can point hosts to private IP addresses (even private IPv6 addresses) and they will work within your network
+ Let your friends point theirname.yourdomain.com to their own connection
+ Use web forwarding to transparently redirect a hostname to another URL. Let our servers handle the redirection
+ afraid.org is operated from multiple redundant high capacity well connected servers, preventing interruption
+ The FreeDNS router setup guide with DD-WRT (v2) and the DD-WRT (v1) guide are guides that shows new users the most common/convenient configuration on a dynamic IP address, but is good for any new user to review to quickly understand the site flow.

Feature List:

+ Free DNS, Dynamic DNS, Static DNS services
+ Free subdomain hosting, free domain hosting, free backup dns, reverse IPv6 DNS hosting (forward/reverse)
+ Free URL redirection [web forwarding]
+ Paid services available for increased account capacity
Unlimited number of domains per account (yes really)
5 free shared hostnames, use anywhere
20 free subdomains per domain, use on your own domains only
+ INSTANTLY point yourname.afraid.org or yourname.com to any IP or URL
+ Supports every TLD on the Internet
+ Currently 57,177 other domains besides afraid.org in our shared domain pool
+ Funding is supplied by the members who go premium. Funding goes directly to servers and high bandwidth connections they reside on
+ Robust support for CNAME, A, AAAA, MX, NS, TXT, LOC, RP, HINFO, SRV, CAArecords

+ Round robin DNS supported (Multiple IP addresses for 1 hostname)
+ IPv6 forward AND reverse (both .int and .arpa) supported
+ Dynamic DNS supported, several clients for Win32 and UNIX available
+ Forward your hosts to any existing URL on the internet (even to a different port if your ISP blocks 80) with the Web Forward system
+ URL cloaking redirection supported, optionally hide real URL of your site in the address bar
+ Allows you to change web hosting providers without messy DNS propagation delays
+ Simple, fast, flexible and reliable interface, feedback is welcome
+ Works with any existing web host you may already be using for both DNS and hosting
+ If your web host goes down, visitors will see a "timeout" error instead of a "site does not exist" error, e-mail will also remain queued for 5 days
+ If you put a domain in afraid.org, you can edit TTL, Minimum, Allow/Deny AXFR's, and approve/disapprove others from using hosts on your domain. You can also share your domain with the users of afraid.org, or your own web site visitors using our 'webclude' feature
+ Support for vanity dns hosts (example: i.knew.you.were.afraid.org) currently 57,177 domains in the shared pool
