# YT-Takeover React App

##Tech Stack

* Lerna MonoRepo
* React Router
* React 16
* Redux
* Redux Sagas
* Redux-Persist
* Reselect
* ImmutableJS
* Material-UI
* Uses Yarn

## Getting Started

* Pull Repo
* Run Yarn
* Run Yarn Start

## Why Lerna

Lerna allows us to use packages very efficiently. In this project:

* packages/core : redux logic
* packages/ui-components : Material-UI View components
* web-client : React / React-Router. Combines the Redux and View

So we've split down a traditional MVC viewpoint

* M (models) : packages/core
* V (views) : packages/ui-components
* C (controller) : web-client

