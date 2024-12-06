# Interview test - Sahil Mohmed


## To-do (not enough time)
1. Run Cypress and Allure as Docker services.
2. Integrate Cypress and Allure Docker services into the challenge Docker container - by adding the services into the Docker-compose.
3. Configure Docker-compose to run the tests as soon as `front` service is created (`depends_on: front`).
4. Configure Allure service to auto generate a `html` report once the tests have finished running (the current setup requires the user to manually run a command to generate the report)

## Advantages
1. Can be easily integrated into a Jenkins pipeline with stages (`docker compose -> cypress run -> Allure report`).
2. All common methods have been abstracted and can be reused in new tests.
3. All tests can be run individually (no test is dependant on another).
4. Env variables json has been used, so each setup can have their own configuration.

## Disdvantages
1. Initial setup can take some time as i didnt get time to integrate into Docker


## How to run the tests
### Pre-requisites 
1. **Cypress installed**
2. **Allure installed**
3. `JAVA_HOME` set in system env (for Allure)
4. Run the DocumentGPT Docker container by downloading the `challenge.zip` extract it and run the following command in terminal `Docker compose -f "Docker-compose.yml" up -d --build`
5. Ensure all Docker services are running `Docker ps -a`
   
>[!IMPORTANT]
>OpenAI have recently removed the `proxies` argument in `Client.__init__` for the latest httpx. This will cause Docker compose to fail. To fix this, add the following to `requirements.txt` - `httpx==0.27.2`.

### Setup
1. Clone repo.
2. Open terminal in the root of the repo.

### Run in UI 
1. In the terminal - run `npx cypress open`
2. Select e2e
3. Select test specs to run
![Alt text](readme_files/run_ui.png)

### Run in cmd
1. In the terminal - run `npx cypress run --browser chrome` this will run all the test specs
![Alt text](readme_files/run_cmd.png)
![Alt text](readme_files/run_cmd2.png)

### generating a report
1. In terminal - run `allure generate --clean --single-file`
![Alt text](readme_files/allure1.png)
2. Navigate to `allure-repor`
3. Open the generated `index.html` file to view the report
![Alt text](readme_files/allure2.png)




