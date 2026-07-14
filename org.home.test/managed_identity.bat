@echo off
setlocal enabledelayedexpansion

if "%~1"=="" (
    echo Usage: %~nx0 REGION STORAGE_ACCOUNT_NAME
    echo Example: %~nx0 eastus mystorageacct
    exit /b 1
)
if "%~2"=="" (
    echo Usage: %~nx0 REGION STORAGE_ACCOUNT_NAME
    echo Example: %~nx0 eastus mystorageacct
    exit /b 1
)

set "REGION=%~1"
set "STORAGE_NAME=%~2"
set "RESOURCE_GROUP=AzureFunctionsQuickstart-rg"
set "IDENTITY_NAME=func-host-storage-user"

echo Creating managed identity "%IDENTITY_NAME%" in resource group "%RESOURCE_GROUP%"...
for /f "usebackq delims=" %%A in (`az identity create --name "%IDENTITY_NAME%" --resource-group "%RESOURCE_GROUP%" --location "%REGION%" --query "principalId" -o tsv`) do set "PRINCIPAL_ID=%%A"
if not defined PRINCIPAL_ID (
    echo Failed to create managed identity.
    exit /b 1
)

echo Getting storage account resource ID for "%STORAGE_NAME%"...
for /f "usebackq delims=" %%A in (`az storage account show --resource-group "%RESOURCE_GROUP%" --name "%STORAGE_NAME%" --query "id" -o tsv`) do set "STORAGE_ID=%%A"
if not defined STORAGE_ID (
    echo Failed to find storage account "%STORAGE_NAME%" in resource group "%RESOURCE_GROUP%".
    exit /b 1
)

echo Assigning Storage Blob Data Owner role to the managed identity...
az role assignment create --assignee-object-id "%PRINCIPAL_ID%" --assignee-principal-type ServicePrincipal --role "Storage Blob Data Owner" --scope "%STORAGE_ID%"
if errorlevel 1 (
    echo Role assignment failed.
    exit /b 1
)

echo Managed identity created and assigned successfully.
echo principalId=%PRINCIPAL_ID%
echo storageId=%STORAGE_ID%

endlocal