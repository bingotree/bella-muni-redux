# bella-muni-redux

## Objective
To create a UI-independent state management application for BellaMuni using Redux.

## Goals
- Should be pluggable into any web view system such as a CLI, React, Vue, etc, or native js client like React Native.
- Unconcerned with UI, it merely provides a set of states that a view system (UI) may use.

## TODO
- Data models are set to localhost settings, not ready for use. Mocks in the meantime?
- Data models should have environment based, customizable configs.
- Clients having to use the '../../bella-muni-redux' path seems unecessary, need to figure out a better solution.

## Client build instructions.
Any new clients should fork this main bella-muni-redux repo.

Why? Because any client needs to have all of bella-muni-redux's dependencies installed.

Note: In addition to the base dependencies, different clients will need differing ADDITIONAL dependencies (e.g. `react` for react, `chalk` for cli, etc)

### Keeping it organized
If changes are made to the redux portion (99% chance this is by me), these should be merged back into the main bella-muni-redux branch. So any client should be able to pull from the master branch at any time without clobbering their own code (except in package.json??)

Any other changes should go ONLY in the client branch.
PS how is this done? Cherry picking??

### Getting started
clone bella-muni-redux
You should now have the relevant package.json files and a file structure like the following:
    src/
       /bella-muni-redux/
       /clients/
            mocha/
                index.js
    
Create your own client directory and index.js file in clients/
npm run build to run

client directory name should match the fork name.
All references to the redux lib should be as follows, eg '../../bella-muni-redux/actions'.
