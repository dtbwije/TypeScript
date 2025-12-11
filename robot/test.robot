*** Settings ***
Library     String
Library     Collections
Library     RequestsLibrary

*** Test Cases ***
Create A Random String
    Log To Console    We are going to generate a random string
    Generate Random String    10
    Log To Console    We finished generating a random string

Login
    create session  mainSession     http://localhost:3000 
    ${response}=    get request     mainSession     api/photo-service/login?username=Anil expected_status=200
    log to console  ${response}