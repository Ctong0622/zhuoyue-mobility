# Zhuoyue Mobility

## Client
Liming

## Project Description
This website was created for Zhuoyue Mobility, an EV and new-energy vehicle rental company in China. The website allows customers to browse rental vehicles, view vehicle information and daily rental price ranges, and submit a rental request.

The website includes three main pages:
- Home
- Cars
- Rent / Contact

It also supports both Chinese and English.

## Live Website
https://ctong0622.github.io/zhuoyue-mobility/

## AI Reflection
Pick one piece of AI output you did not accept as-is. What did it give you, what did you change, and how did you know it needed changing? Point at the commit.

AI initially generated some inaccurate vehicle range information for the vehicle cards. I did not accept the information as-is. I researched and verified the vehicle specifications and corrected the CLTC range information. I also made sure the Li Auto L7, which is a range-extended vehicle, shows both its electric-only range and its combined range instead of treating it like a fully electric vehicle.

I knew the information needed to be changed because the AI-generated specifications did not match the actual vehicle specifications I researched.

Commit: [Correct vehicle CLTC range information](https://github.com/Ctong0622/zhuoyue-mobility/commit/7749bd3c2a193c1ffb28cd849ac3baf5bbd54409)
