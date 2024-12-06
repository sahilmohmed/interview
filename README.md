# Interview test - Sahil Mohmed

## Pre-requisites 
1. Cypress installed
2. Allure installed
3. JAVA_HOME set in system env (for Allure)

## How to run the tests
1. clone this repo - 
2. run docker compose up to start the DocumentGPT services
3. clone this repo - 
4. open terminal in the root of the repo cloned in step 3 

### Run in UI 
1. in the terminal - run 'npx cypress open'
2. select e2e
3. select test specs to run

### Run in cmd
1. in the terminal - run 'npx cypress run --browser chrome' this will run all the test specs

### generating a report
**EXAMPLE REPORT in the allure-report directory of this repo**
1. in terminal - run 'allure generate --clean --single-file'
2. navigate to root/allure-report
3. open the generated html file to view the report


## To-do (not enough time)
1. run Cypress and Allure as docker services
2. integrate Cypress and Allure docker services into the challenge docker container - by adding the services into the docker-compose 
3. configure docker-compose to run the tests as soon as 'front' service is created (depends_on: 'front')
4. configure Allure service to auto generate a html report once the tests have finished running


