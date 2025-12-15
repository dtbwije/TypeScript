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
    create session  mainSession  http://localhost:3000 
    ${response}=    GET On session     mainSession     url=api/photo-service/login?username=Anil    expected_status=200
    log to console  LOGIN ${response}
    Should Be Equal As Strings  ${response.reason}     OK
   