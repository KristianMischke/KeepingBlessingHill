import os
import sys
import requests


def sendEmail(post_title, post_url):
    if post_title is None and post_url is None:
        print("please specify post_title and post_url command line args")
        return

    if "MAILGUN_API_KEY" not in os.environ:
        print("please specify MAILGUN_API_KEY in your environment variables!")
        return

    api_key = os.environ["MAILGUN_API_KEY"]

    requests.post(
    "https://api.mailgun.net/v3/mg.keepingblessinghill.com/messages",
    auth=("api", api_key),
    data={"from": "Keeping Blessing Hill <mailgun@mg.keepingblessinghill.com>",
          "to": ["subscribers@mg.keepingblessinghill.com"],
          "subject": post_title + " Updated - Keeping Blessing Hill",
          "html": ("Dear subscriber,<br><br>There is a new post on the Keeping Blessing Hill website, you can read it <a href='http://keepingblessinghill.com" + post_url + "'>here</a><br><br>Enjoy!<br>-Keeping Blessing Hill<br><br><br><br>"),
          # "o:deliverytime": "Tue, 09 Oct 2018 08:00:00 -0400",
        })
    print("Sent!")


if len(sys.argv) == 3:
    for i in range(len(sys.argv)):
        print(sys.argv[i])
    #if sys.argv[1] is not None and sys.argv[2] is not None and sys.argv[3] is not None:
    sendEmail(sys.argv[1], sys.argv[2])
else:
    print("please specify post_title and post_url as command line args")