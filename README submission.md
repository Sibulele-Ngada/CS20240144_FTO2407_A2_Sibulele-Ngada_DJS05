# Required
- How to run the code.
- A brief overview of my approach.
- Any challenges I faced and how I overcame them.

## How to run the code
- Open the html fil in browser
- Open the browser console (right-click and select Inspect)
- Code should automatical run and log result in console

## A brief overview of my approach.
- As instructed, I have create a Redux-inspired store to manage and log the state of a counting Tally App
- Inspiration and guidance from the Observer Design Pattern
- As far as possible, data and functionality are kept separate
- Mostly pure function used to minimize side effects and easily trace where data is mutated
- No UI changes, all display can be found in console

## Any challenges I faced and how I overcame them.
- Coming from OOP languages, at first a function focus paradigm like redux state management can be very tough to parse and get my head around
- While following along with the LMS lectures and other videos online, I had to pause and repeat many parts as the logic is not intuitive
- When I did have a bug, it was with the subscriber functin (I'd incorrectly called .push on the array), the unidirectional flow led me to the correct place. I was able to follow the relevant function calls and confirm what was being sent, which made clear the reasoning as to where the bug would be located