# Dart score keeper

version: 0.01  
Author: Niko Pitkänen

## Install
```
git clone git@github.com:nikopitkanen/dart-score-keeper.git

cd dart-score-keeper

npm install

git checkout development

git checkout -b (branch-name)
```
## Folder structure

following folder structure has been established:
```
darts-score-keeper/
├── index.html
├── README.md
│
├── styles/
│   ├── main.css                        # global styles (colors, fonts). components need to be imported here.
│   └── components/
│       └── some-component.css          # specified styles for component of your choosing.
│
├── src/
│   ├── main.js                         # The main entry point modules needs to be imported here.
│   └── modules/
│       └── some-logic.js               # logic of functionalities that relate to eachother. 
│    
└── assets/
    └── images/
```

## Project management

For keeping project management as simple as possible, we use GitHub issues with project board. All work must be tracked!
- Before you start any work, create an issue or pickup a existing one. You can also create sub-issues.
- Use labels in issues. There are two types of labels: issue (type of task you are about to do) and priority (priority of the task. Medium is the default.). Pick one of both. You'll find existing labels under labels when creating ticket.
- Create all branches from development. Merge development to main only when development is stable and working.
- When committing a something that fullfills an issue, type closes #(issue number) inside commit message. This triggers automatic workflow that closes issue when the branch gets merged to main.

## About

Task is to create a frontend webapp for tracking darts game.

### rules of the game:

- Player tries to get from 301/501 points to zero.
- Every turn player throws 3 darts.
- Points of three throws gets substracted from your total points.
- Outer ring doubles the points, inner ring triples the points.
- If player throws past zero, the last score stays standing.
- Players last shot also needs to be double. 

