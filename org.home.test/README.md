# README


- [Source 1](https://learn.microsoft.com/en-us/azure/azure-functions/how-to-create-function-azure-cli?pivots=programming-language-java&tabs=windows%2Ccmd%2Cazure-cli)
- [Source 2](https://microsoftlearning.github.io/Secure-storage-for-Azure-Files-and-Azure-Blob-Storage/Instructions/Labs/LAB_02b_storage_private_docs.html)

```
az group create --name "AzureFunctionsQuickstart-rg" --location "Sweden Central"

{
  "id": "/subscriptions/1f681932-af34-40e4-be5a-858701c64d48/resourceGroups/AzureFunctionsQuickstart-rg",
  "location": "swedencentral",
  "managedBy": null,
  "name": "AzureFunctionsQuickstart-rg",
  "properties": {
    "provisioningState": "Succeeded"
  },
  "tags": null,
  "type": "Microsoft.Resources/resourceGroups"
}

```

```
az storage account create --name storage4test4tharanga --location "Sweden Central" --resource-group "AzureFunctionsQuickstart-rg" --sku "Standard_LRS" --allow-blob-public-access false --allow-shared-key-access false

{
  "accessTier": "Hot",
  "accountMigrationInProgress": null,
  "allowBlobPublicAccess": false,
  "allowCrossTenantReplication": false,
  "allowSharedKeyAccess": false,
  "allowSharedKeyAccessForServices": null,
  "allowedCopyScope": null,
  "azureFilesIdentityBasedAuthentication": null,
  "blobRestoreStatus": null,
  "creationTime": "2026-07-13T16:16:33.296243+00:00",
  "customDomain": null,
  "dataCollaborationPolicyProperties": null,
  "defaultToOAuthAuthentication": null,
  "dnsEndpointType": null,
  "dualStackEndpointPreference": null,
  "enableExtendedGroups": null,
  "enableHttpsTrafficOnly": true,
  "enableNfsV3": null,
  "encryption": {
    "encryptionIdentity": null,
    "keySource": "Microsoft.Storage",
    "keyVaultProperties": null,
    "requireInfrastructureEncryption": null,
    "services": {
      "blob": {
        "enabled": true,
        "keyType": "Account",
        "lastEnabledTime": "2026-07-13T16:16:33.449590+00:00"
      },
      "file": {
        "enabled": true,
        "keyType": "Account",
        "lastEnabledTime": "2026-07-13T16:16:33.449590+00:00"
      },
      "queue": null,
      "table": null
    }
  },
  "extendedLocation": null,
  "failoverInProgress": null,
  "geoPriorityReplicationStatus": null,
  "geoReplicationStats": null,
  "id": "/subscriptions/1f681932-af34-40e4-be5a-858701c64d48/resourceGroups/AzureFunctionsQuickstart-rg/providers/Microsoft.Storage/storageAccounts/storage4test4tharanga",
  "identity": null,
  "immutableStorageWithVersioning": null,
  "isHnsEnabled": null,
  "isLocalUserEnabled": null,
  "isSftpEnabled": null,
  "isSkuConversionBlocked": null,
  "keyCreationTime": {
    "key1": "2026-07-13T16:16:33.439934+00:00",
    "key2": "2026-07-13T16:16:33.439934+00:00"
  },
  "keyPolicy": null,
  "kind": "StorageV2",
  "largeFileSharesState": null,
  "lastGeoFailoverTime": null,
  "location": "swedencentral",
  "minimumTlsVersion": "TLS1_0",
  "name": "storage4test4tharanga",
  "networkRuleSet": {
    "bypass": "None",
    "defaultAction": "Allow",
    "ipRules": [],
    "ipv6Rules": [],
    "resourceAccessRules": null,
    "virtualNetworkRules": []
  },
  "placement": null,
  "primaryEndpoints": {
    "blob": "https://storage4test4tharanga.blob.core.windows.net/",
    "dfs": "https://storage4test4tharanga.dfs.core.windows.net/",
    "file": "https://storage4test4tharanga.file.core.windows.net/",
    "internetEndpoints": null,
    "ipv6Endpoints": null,
    "microsoftEndpoints": null,
    "queue": "https://storage4test4tharanga.queue.core.windows.net/",
    "table": "https://storage4test4tharanga.table.core.windows.net/",
    "web": "https://storage4test4tharanga.z1.web.core.windows.net/"
  },
  "primaryLocation": "swedencentral",
  "privateEndpointConnections": [],
  "provisioningState": "Succeeded",
  "publicNetworkAccess": null,
  "resourceGroup": "AzureFunctionsQuickstart-rg",
  "routingPreference": null,
  "sasPolicy": null,
  "secondaryEndpoints": null,
  "secondaryLocation": null,
  "sku": {
    "name": "Standard_LRS",
    "tier": "Standard"
  },
  "statusOfPrimary": "available",
  "statusOfSecondary": null,
  "storageAccountSkuConversionStatus": null,
  "systemData": null,
  "tags": {},
  "type": "Microsoft.Storage/storageAccounts",
  "zones": null
}
```


managed_identity.bat "Sweden Central" storage4test4tharanga

sh identity.sh "Sweden Central" storage4test4tharanga

```
managed_identity.bat "Sweden Central" storage4test4tharanga
Creating managed identity "func-host-storage-user" in resource group "AzureFunctionsQuickstart-rg"...
Getting storage account resource ID for "storage4test4tharanga"...
Assigning Storage Blob Data Owner role to the managed identity...
{
  "condition": null,
  "conditionVersion": null,
  "createdBy": null,
  "createdOn": "2026-07-13T16:31:46.142693+00:00",
  "delegatedManagedIdentityResourceId": null,
  "description": null,
  "id": "/subscriptions/1f681932-af34-40e4-be5a-858701c64d48/resourceGroups/AzureFunctionsQuickstart-rg/providers/Microsoft.Storage/storageAccounts/storage4test4tharanga/providers/Microsoft.Authorization/roleAssignments/b194fc20-0676-405a-9721-be1e3f79b53d",
  "name": "b194fc20-0676-405a-9721-be1e3f79b53d",
  "principalId": "9dc6f3f6-c7f2-47f8-8b02-79fa2b9ead28",
  "principalType": "ServicePrincipal",
  "resourceGroup": "AzureFunctionsQuickstart-rg",
  "roleDefinitionId": "/subscriptions/1f681932-af34-40e4-be5a-858701c64d48/providers/Microsoft.Authorization/roleDefinitions/b7e6dc6d-f1e8-4753-8033-0f276bb0955b",
  "scope": "/subscriptions/1f681932-af34-40e4-be5a-858701c64d48/resourceGroups/AzureFunctionsQuickstart-rg/providers/Microsoft.Storage/storageAccounts/storage4test4tharanga",
  "systemData": null,
  "type": "Microsoft.Authorization/roleAssignments",
  "updatedBy": "1fba70cb-0f57-4aca-b38b-6cef8c8c58ad",
  "updatedOn": "2026-07-13T16:31:46.361700+00:00"
}
```

```
az functionapp create --resource-group "AzureFunctionsQuickstart-rg" --name <APP_NAME> --flexconsumption-location <REGION> --runtime java --runtime-version <LANGUAGE_VERSION> --storage-account <STORAGE_NAME> --deployment-storage-auth-type UserAssignedIdentity --deployment-storage-auth-value "func-host-storage-user"

az functionapp create --resource-group "AzureFunctionsQuickstart-rg" --name tharangafirstapp --flexconsumption-location "Sweden Central" --runtime java --runtime-version 17 --storage-account storage4test4tharanga --deployment-storage-auth-type UserAssignedIdentity --deployment-storage-auth-value "func-host-storage-user"


{
  "id": "/subscriptions/1f681932-af34-40e4-be5a-858701c64d48/resourceGroups/AzureFunctionsQuickstart-rg/providers/Microsoft.Web/sites/tharangafirstapp",
  "identity": {
    "type": "UserAssigned",
    "userAssignedIdentities": {
      "/subscriptions/1f681932-af34-40e4-be5a-858701c64d48/resourcegroups/AzureFunctionsQuickstart-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/func-host-storage-user": {
        "clientId": "3607fe90-5518-468b-bc5d-3e3eb074b698",
        "principalId": "9dc6f3f6-c7f2-47f8-8b02-79fa2b9ead28"
      }
    }
  },
  "kind": "functionapp,linux",
  "location": "Sweden Central",
  "name": "tharangafirstapp",
  "properties": {
    "adminEnabled": true,
    "afdEnabled": false,
    "aiIntegration": null,
    "autoGeneratedDomainNameLabelScope": null,
    "availabilityState": "Normal",
    "blockPathTraversal": false,
    "buildVersion": null,
    "cers": null,
    "clientAffinityEnabled": false,
    "clientAffinityProxyEnabled": false,
    "clientCertEnabled": false,
    "clientCertExclusionEndPoints": null,
    "clientCertExclusionPaths": null,
    "clientCertMode": "Required",
    "cloningInfo": null,
    "computeMode": null,
    "containerAllocationSubnet": null,
    "containerSize": 1536,
    "contentAvailabilityState": "Normal",
    "csrs": [],
    "customDomainVerificationId": "759C592EFC38B19A11780900A6991A98A2E94F424D5A330DFC4567F9C5525886",
    "dailyMemoryTimeQuota": 0,
    "daprConfig": null,
    "defaultHostName": "tharangafirstapp.azurewebsites.net",
    "deploymentId": "tharangafirstapp",
    "dnsConfiguration": {},
    "domainVerificationIdentifiers": null,
    "eligibleLogCategories": "FunctionAppLogs,AppServiceAuthenticationLogs,AppServiceAuditLogs,AppServiceIPSecAuditLogs",
    "enabled": true,
    "enabledHostNames": [
      "tharangafirstapp.azurewebsites.net",
      "tharangafirstapp.scm.azurewebsites.net"
    ],
    "endToEndEncryptionEnabled": false,
    "ftpUsername": "tharangafirstapp\\$tharangafirstapp",
    "ftpsHostName": "ftps://waws-prod-sec-009.ftp.azurewebsites.windows.net/site/wwwroot",
    "functionAppConfig": {
      "deployment": {
        "storage": {
          "authentication": {
            "storageAccountConnectionStringName": null,
            "type": "UserAssignedIdentity",
            "userAssignedIdentityResourceId": "/subscriptions/1f681932-af34-40e4-be5a-858701c64d48/resourcegroups/AzureFunctionsQuickstart-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/func-host-storage-user"
          },
          "type": "blobContainer",
          "value": "https://storage4test4tharanga.blob.core.windows.net/app-package-tharangafirstapp-5398099"
        }
      },
      "runtime": {
        "name": "java",
        "version": "17"
      },
      "scaleAndConcurrency": {
        "alwaysReady": [],
        "instanceMemoryMB": 2048,
        "maximumInstanceCount": 100,
        "triggers": null
      },
      "siteUpdateStrategy": {
        "type": "Recreate"
      }
    },
    "functionExecutionUnitsCache": null,
    "functionsRuntimeAdminIsolationEnabled": false,
    "geoDistributions": null,
    "homeStamp": "waws-prod-sec-009",
    "hostNamePrivateStates": [],
    "hostNameSslStates": [
      {
        "certificateResourceId": null,
        "hostType": "Standard",
        "ipBasedSslResult": null,
        "ipBasedSslState": "NotConfigured",
        "name": "tharangafirstapp.azurewebsites.net",
        "sslState": "Disabled",
        "thumbprint": null,
        "toUpdate": null,
        "toUpdateIpBasedSsl": null,
        "virtualIP": null,
        "virtualIPv6": null
      },
      {
        "certificateResourceId": null,
        "hostType": "Repository",
        "ipBasedSslResult": null,
        "ipBasedSslState": "NotConfigured",
        "name": "tharangafirstapp.scm.azurewebsites.net",
        "sslState": "Disabled",
        "thumbprint": null,
        "toUpdate": null,
        "toUpdateIpBasedSsl": null,
        "virtualIP": null,
        "virtualIPv6": null
      }
    ],
    "hostNames": [
      "tharangafirstapp.azurewebsites.net"
    ],
    "hostNamesDisabled": false,
    "hostingEnvironment": null,
    "hostingEnvironmentId": null,
    "hostingEnvironmentProfile": null,
    "httpsOnly": false,
    "hyperV": false,
    "inFlightFeatures": [
      "SiteContainers"
    ],
    "inProgressOperationId": null,
    "inboundIpAddress": "51.12.31.4",
    "inboundIpv6Address": "2603:1020:1004:3::103",
    "ipMode": "IPv4",
    "isXenon": false,
    "keyVaultReferenceIdentity": "SystemAssigned",
    "kind": "functionapp,linux",
    "lastModifiedTimeUtc": "2026-07-14T10:19:49.21",
    "legacyServiceEndpointTrafficEvaluation": null,
    "maintenanceEnabled": false,
    "managedEnvironmentId": null,
    "maxNumberOfWorkers": null,
    "migrationState": null,
    "name": "tharangafirstapp",
    "outboundIpAddresses": "20.91.177.16,20.91.180.151,20.91.183.133,20.91.183.166,20.240.16.134,20.240.16.245,51.12.31.4",
    "outboundIpv6Addresses": "2603:1020:1001:26::299,2603:1020:1001:11::3ee,2603:1020:1001:12::31d,2603:1020:1001:25::255,2603:1020:1001:13::34a,2603:1020:1001:13::34b,2603:1020:1004:3::103,2603:10e1:100:2::330c:1f04,2603:1020:1004:3::112,2603:10e1:100:2::330c:49e3",
    "owner": null,
    "possibleInboundIpAddresses": "51.12.31.4",
    "possibleInboundIpv6Addresses": "2603:1020:1004:3::103",
    "possibleOutboundIpAddresses": "20.91.177.16,20.91.180.151,20.91.183.133,20.91.183.166,20.240.16.134,20.240.16.245,20.240.17.3,20.91.183.226,20.240.17.10,20.240.17.15,20.240.18.81,20.240.18.87,20.240.18.115,20.240.18.146,20.240.18.180,20.240.18.188,20.240.18.215,20.240.18.223,20.240.18.246,20.240.18.253,20.240.19.75,20.91.183.250,20.240.19.80,20.240.19.179,51.12.31.4",
    "possibleOutboundIpv6Addresses": "2603:1020:1001:26::299,2603:1020:1001:11::3ee,2603:1020:1001:12::31d,2603:1020:1001:25::255,2603:1020:1001:13::34a,2603:1020:1001:13::34b,2603:1020:1001:26::29a,2603:1020:1001:24::2a0,2603:1020:1001:12::31e,2603:1020:1001:25::256,2603:1020:1001:25::257,2603:1020:1001:24::2a1,2603:1020:1001:12::31f,2603:1020:1001:11::3ef,2603:1020:1001:13::34c,2603:1020:1001:14::267,2603:1020:1001:10::6b9,2603:1020:1001:12::320,2603:1020:1001:14::268,2603:1020:1001:24::2a2,2603:1020:1001:14::269,2603:1020:1001:26::29b,2603:1020:1001:14::26a,2603:1020:1001:25::258,2603:1020:1004:3::103,2603:10e1:100:2::330c:1f04,2603:1020:1004:3::112,2603:10e1:100:2::330c:49e3",
    "privateEndpointConnections": [],
    "privateLinkIdentifiers": null,
    "publicNetworkAccess": "Enabled",
    "redundancyMode": "None",
    "repositorySiteName": "tharangafirstapp",
    "reserved": true,
    "resourceConfig": null,
    "resourceGroup": "AzureFunctionsQuickstart-rg",
    "runtimeAvailabilityState": "Normal",
    "sandboxType": null,
    "scmSiteAlsoStopped": false,
    "selfLink": "https://waws-prod-sec-009.api.azurewebsites.windows.net:455/subscriptions/1f681932-af34-40e4-be5a-858701c64d48/webspaces/flex-5fe05fd3c8605b55b1d0b8212180ffedce49e1c7fa29a9342018c6e2c876949c-webspace/sites/tharangafirstapp",
    "serverFarm": null,
    "serverFarmId": "/subscriptions/1f681932-af34-40e4-be5a-858701c64d48/resourceGroups/AzureFunctionsQuickstart-rg/providers/Microsoft.Web/serverfarms/ASP-AzureFunctionsQuickstartrg-df2b",
    "siteConfig": {
      "acrUseManagedIdentityCreds": false,
      "acrUserManagedIdentityID": null,
      "alwaysOn": false,
      "antivirusScanEnabled": null,
      "apiDefinition": null,
      "apiManagementConfig": null,
      "appCommandLine": null,
      "appSettings": null,
      "autoHealEnabled": null,
      "autoHealRules": null,
      "autoSwapSlotName": null,
      "azureMonitorLogCategories": null,
      "azureStorageAccounts": null,
      "clusteringEnabled": false,
      "connectionStrings": null,
      "cors": null,
      "customAppPoolIdentityAdminState": null,
      "customAppPoolIdentityTenantState": null,
      "defaultDocuments": null,
      "detailedErrorLoggingEnabled": null,
      "documentRoot": null,
      "elasticWebAppScaleLimit": null,
      "experiments": null,
      "fileChangeAuditEnabled": null,
      "ftpsState": null,
      "functionAppScaleLimit": 100,
      "functionsRuntimeScaleMonitoringEnabled": null,
      "handlerMappings": null,
      "healthCheckPath": null,
      "http20Enabled": false,
      "http20ProxyFlag": null,
      "httpLoggingEnabled": null,
      "ipSecurityRestrictions": null,
      "ipSecurityRestrictionsDefaultAction": null,
      "javaContainer": null,
      "javaContainerVersion": null,
      "javaVersion": null,
      "keyVaultReferenceIdentity": null,
      "limits": null,
      "linuxFxVersion": "",
      "loadBalancing": null,
      "localMySqlEnabled": null,
      "logsDirectorySizeLimit": null,
      "machineKey": null,
      "managedPipelineMode": null,
      "managedServiceIdentityId": null,
      "metadata": null,
      "minTlsCipherSuite": null,
      "minTlsVersion": null,
      "minimumElasticInstanceCount": 0,
      "netFrameworkVersion": null,
      "nodeVersion": null,
      "numberOfWorkers": 1,
      "phpVersion": null,
      "powerShellVersion": null,
      "preWarmedInstanceCount": null,
      "publicNetworkAccess": null,
      "publishingPassword": null,
      "publishingUsername": null,
      "push": null,
      "pythonVersion": null,
      "remoteDebuggingEnabled": null,
      "remoteDebuggingVersion": null,
      "requestTracingEnabled": null,
      "routingRules": null,
      "runtimeADUser": null,
      "runtimeADUserPassword": null,
      "sandboxType": null,
      "scmIpSecurityRestrictions": null,
      "scmIpSecurityRestrictionsDefaultAction": null,
      "scmIpSecurityRestrictionsUseMain": null,
      "scmMinTlsCipherSuite": null,
      "scmMinTlsVersion": null,
      "scmSupportedTlsCipherSuites": null,
      "scmType": null,
      "sitePort": null,
      "sitePrivateLinkHostEnabled": null,
      "storageType": null,
      "supportedTlsCipherSuites": null,
      "tracingOptions": null,
      "use32BitWorkerProcess": null,
      "virtualApplications": null,
      "vnetName": null,
      "vnetPrivatePortsCount": null,
      "vnetRouteAllEnabled": null,
      "webJobsEnabled": false,
      "webSocketsEnabled": null,
      "websiteTimeZone": null,
      "winAuthAdminState": null,
      "winAuthTenantState": null,
      "windowsConfiguredStacks": null,
      "windowsFxVersion": null,
      "xManagedServiceIdentityId": null
    },
    "siteDisabledReason": 0,
    "siteMode": null,
    "siteProperties": {
      "appSettings": null,
      "metadata": null,
      "properties": [
        {
          "name": "LinuxFxVersion",
          "value": ""
        },
        {
          "name": "WindowsFxVersion",
          "value": null
        }
      ]
    },
    "siteScopedCertificatesEnabled": true,
    "sku": "FlexConsumption",
    "slotName": null,
    "slotSwapStatus": null,
    "sshEnabled": null,
    "sslCertificates": null,
    "state": "Running",
    "storageAccountRequired": false,
    "storageRecoveryDefaultState": "Running",
    "suspendedTill": null,
    "tags": null,
    "targetBuildVersion": null,
    "targetSwapSlot": null,
    "trafficManagerHostNames": null,
    "usageState": "Normal",
    "useContainerLocalhostBindings": null,
    "useQueryStringAffinity": false,
    "virtualNetworkSubnetId": null,
    "vnetBackupRestoreEnabled": false,
    "vnetContentShareEnabled": false,
    "vnetImagePullEnabled": false,
    "vnetRouteAllEnabled": false,
    "webSpace": "flex-5fe05fd3c8605b55b1d0b8212180ffedce49e1c7fa29a9342018c6e2c876949c-webspace",
    "workloadProfileName": null
  },
  "resourceGroup": "AzureFunctionsQuickstart-rg",
  "type": "Microsoft.Web/sites"
}
```


```
appInsights=$(az monitor app-insights component show --resource-group "AzureFunctionsQuickstart-rg" --app tharangafirstapp --query "id" --output tsv)
principalId=$(az identity show --name "func-host-storage-user" --resource-group "AzureFunctionsQuickstart-rg" --query principalId -o tsv)
az role assignment create --role "Monitoring Metrics Publisher" --assignee $principalId --scope $appInsights
```

```
az monitor app-insights component list --resource-group "AzureFunctionsQuickstart-rg" --query "[].{name:name,id:id}" --output table
```

```
az monitor app-insights component list  --resource-group "AzureFunctionsQuickstart-rg" --query "[].{name:name,id:id}" --output table
```

check my current role assignments
```
az role assignment list --assignee $(az ad signed-in-user show --query id -o tsv) -o table
```

```
az role assignment create --assignee 1fba70cb-0f57-4aca-b38b-6cef8c8c58ad --role "Storage Blob Data Reader" --scope /subscriptions/1f681932-af34-40e4-be5a-858701c64d48/resourceGroups/AzureFunctionsQuickstart-rg/providers/Microsoft.Storage/storageAccounts/storage4test4tharanga
```

```

az role definition show --id 2a2b9908-6ea1-4ae2-8e65-a410df84e7d1  --query roleName

```

```
az role assignment list --scope "/subscriptions/1f681932-af34-40e4-be5a-858701c64d48/resourceGroups AzureFunctionsQuickstart-rg/providers/Microsoft.Storage/storageAccounts/storage4test4tharanga" -o table
```
- 
```
az storage account show --name storage4test4tharanga --resource-group AzureFunctionsQuickstart-rg --query networkRuleSet
```

```

az functionapp show --resource-group AzureFunctionsQuickstart-rg --name tharangafirstapp


```

dtbwi@DESKTOP-D648NRE MINGW64 ~/WebstormProjects/TypeScript/org.home.test (main)
$ az functionapp show --resource-group AzureFunctionsQuickstart-rg --name tharangafirstapp
D:\a\_work\1\s\build_scripts\windows\artifacts\cli\Lib\site-packages\cryptography/hazmat/backends/openssl/backend.py:8: UserWarning: You are using cryptography on a 32-bit Python on a 64-bit Windows Operating System. Cryptography will be significantly faster if you switch to using a 64-bit Python.
{
  "id": "/subscriptions/1f681932-af34-40e4-be5a-858701c64d48/resourceGroups/AzureFunctionsQuickstart-rg/providers/Microsoft.Web/sites/tharangafirstapp",
  "identity": {
    "principalId": "ade8efe3-728f-4570-b762-10bce29cbd67",
    "tenantId": "64084efa-2e8f-4960-a25f-87adcaea6f52",
    "type": "SystemAssigned, UserAssigned",
    "userAssignedIdentities": {
      "/subscriptions/1f681932-af34-40e4-be5a-858701c64d48/resourcegroups/AzureFunctionsQuickstart-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/func-host-storage-user": {
        "clientId": "3607fe90-5518-468b-bc5d-3e3eb074b698",
        "principalId": "9dc6f3f6-c7f2-47f8-8b02-79fa2b9ead28"
      }
    }
  },
  "kind": "functionapp,linux",
  "location": "Sweden Central",
  "name": "tharangafirstapp",
  "properties": {
    "adminEnabled": true,
    "afdEnabled": false,
    "aiIntegration": null,
    "autoGeneratedDomainNameLabelScope": null,
    "availabilityState": "Normal",
    "blockPathTraversal": false,
    "buildVersion": null,
    "cers": null,
    "clientAffinityEnabled": false,
    "clientAffinityProxyEnabled": false,
    "clientCertEnabled": false,
    "clientCertExclusionEndPoints": null,
    "clientCertExclusionPaths": null,
    "clientCertMode": "Required",
    "cloningInfo": null,
    "computeMode": null,
    "containerAllocationSubnet": null,
    "containerSize": 1536,
    "contentAvailabilityState": "Normal",
    "csrs": [],
    "customDomainVerificationId": "759C592EFC38B19A11780900A6991A98A2E94F424D5A330DFC4567F9C5525886",
    "dailyMemoryTimeQuota": 0,
    "daprConfig": null,
    "defaultHostName": "tharangafirstapp.azurewebsites.net",
    "deploymentId": "tharangafirstapp",
    "dnsConfiguration": {},
    "domainVerificationIdentifiers": null,
    "eligibleLogCategories": "FunctionAppLogs,AppServiceAuthenticationLogs,AppServiceAuditLogs,AppServiceIPSecAuditLogs",
    "enabled": true,
    "enabledHostNames": [
      "tharangafirstapp.azurewebsites.net",
      "tharangafirstapp.scm.azurewebsites.net"
    ],
    "endToEndEncryptionEnabled": false,
    "ftpUsername": "tharangafirstapp\\$tharangafirstapp",
    "ftpsHostName": "ftps://waws-prod-sec-009.ftp.azurewebsites.windows.net/site/wwwroot",
    "functionAppConfig": {
      "deployment": {
        "storage": {
          "authentication": {
            "storageAccountConnectionStringName": null,
            "type": "UserAssignedIdentity",
            "userAssignedIdentityResourceId": "/subscriptions/1f681932-af34-40e4-be5a-858701c64d48/resourcegroups/AzureFunctionsQuickstart-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/func-host-storage-user"
          },
          "type": "blobContainer",
          "value": "https://storage4test4tharanga.blob.core.windows.net/app-package-tharangafirstapp-5398099"
        }
      },
      "runtime": {
        "name": "java",
        "version": "17"
      },
      "scaleAndConcurrency": {
        "alwaysReady": [],
        "instanceMemoryMB": 2048,
        "maximumInstanceCount": 100,
        "triggers": null
      },
      "siteUpdateStrategy": {
        "type": "Recreate"
      }
    },
    "functionExecutionUnitsCache": null,
    "functionsRuntimeAdminIsolationEnabled": false,
    "geoDistributions": null,
    "homeStamp": "waws-prod-sec-009",
    "hostNamePrivateStates": [],
    "hostNameSslStates": [
      {
        "certificateResourceId": null,
        "hostType": "Standard",
        "ipBasedSslResult": null,
        "ipBasedSslState": "NotConfigured",
        "name": "tharangafirstapp.azurewebsites.net",
        "sslState": "Disabled",
        "thumbprint": null,
        "toUpdate": null,
        "toUpdateIpBasedSsl": null,
        "virtualIP": null,
        "virtualIPv6": null
      },
      {
        "certificateResourceId": null,
        "hostType": "Repository",
        "ipBasedSslResult": null,
        "ipBasedSslState": "NotConfigured",
        "name": "tharangafirstapp.scm.azurewebsites.net",
        "sslState": "Disabled",
        "thumbprint": null,
        "toUpdate": null,
        "toUpdateIpBasedSsl": null,
        "virtualIP": null,
        "virtualIPv6": null
      }
    ],
    "hostNames": [
      "tharangafirstapp.azurewebsites.net"
    ],
    "hostNamesDisabled": false,
    "hostingEnvironment": null,
    "hostingEnvironmentId": null,
    "hostingEnvironmentProfile": null,
    "httpsOnly": false,
    "hyperV": false,
    "inFlightFeatures": [
      "SiteContainers"
    ],
    "inProgressOperationId": null,
    "inboundIpAddress": "51.12.31.4",
    "inboundIpv6Address": "2603:1020:1004:3::103",
    "ipMode": "IPv4",
    "isXenon": false,
    "keyVaultReferenceIdentity": "SystemAssigned",
    "kind": "functionapp,linux",
    "lastModifiedTimeUtc": "2026-07-16T09:37:50.6833333",
    "legacyServiceEndpointTrafficEvaluation": null,
    "maintenanceEnabled": false,
    "managedEnvironmentId": null,
    "maxNumberOfWorkers": null,
    "migrationState": null,
    "name": "tharangafirstapp",
    "outboundIpAddresses": "20.91.177.16,20.91.180.151,20.91.183.133,20.91.183.166,20.240.16.134,20.240.16.245,51.12.31.4",
    "outboundIpv6Addresses": "2603:1020:1001:26::299,2603:1020:1001:11::3ee,2603:1020:1001:12::31d,2603:1020:1001:25::255,2603:1020:1001:13::34a,2603:1020:1001:13::34b,2603:1020:1004:3::103,2603:10e1:100:2::330c:1f04,2603:1020:1004:3::112,2603:10e1:100:2::330c:49e3",
    "owner": null,
    "platformVersion": "108.0.7.45",
    "possibleInboundIpAddresses": "51.12.31.4",
    "possibleInboundIpv6Addresses": "2603:1020:1004:3::103",
    "possibleOutboundIpAddresses": "20.91.177.16,20.91.180.151,20.91.183.133,20.91.183.166,20.240.16.134,20.240.16.245,20.240.17.3,20.91.183.226,20.240.17.10,20.240.17.15,20.240.18.81,20.240.18.87,20.240.18.115,20.240.18.146,20.240.18.180,20.240.18.188,20.240.18.215,20.240.18.223,20.240.18.246,20.240.18.253,20.240.19.75,20.91.183.250,20.240.19.80,20.240.19.179,51.12.31.4",
    "possibleOutboundIpv6Addresses": "2603:1020:1001:26::299,2603:1020:1001:11::3ee,2603:1020:1001:12::31d,2603:1020:1001:25::255,2603:1020:1001:13::34a,2603:1020:1001:13::34b,2603:1020:1001:26::29a,2603:1020:1001:24::2a0,2603:1020:1001:12::31e,2603:1020:1001:25::256,2603:1020:1001:25::257,2603:1020:1001:24::2a1,2603:1020:1001:12::31f,2603:1020:1001:11::3ef,2603:1020:1001:13::34c,2603:1020:1001:14::267,2603:1020:1001:10::6b9,2603:1020:1001:12::320,2603:1020:1001:14::268,2603:1020:1001:24::2a2,2603:1020:1001:14::269,2603:1020:1001:26::29b,2603:1020:1001:14::26a,2603:1020:1001:25::258,2603:1020:1004:3::103,2603:10e1:100:2::330c:1f04,2603:1020:1004:3::112,2603:10e1:100:2::330c:49e3",
    "privateEndpointConnections": [],
    "privateLinkIdentifiers": null,
    "publicNetworkAccess": "Enabled",
    "redundancyMode": "None",
    "repositorySiteName": "tharangafirstapp",
    "reserved": true,
    "resourceConfig": null,
    "resourceGroup": "AzureFunctionsQuickstart-rg",
    "runtimeAvailabilityState": "Normal",
    "sandboxType": null,
    "scmSiteAlsoStopped": false,
    "selfLink": "https://waws-prod-sec-009.api.azurewebsites.windows.net:455/subscriptions/1f681932-af34-40e4-be5a-858701c64d48/webspaces/flex-5fe05fd3c8605b55b1d0b8212180ffedce49e1c7fa29a9342018c6e2c876949c-webspace/sites/tharangafirstapp",
    "serverFarm": null,
    "serverFarmId": "/subscriptions/1f681932-af34-40e4-be5a-858701c64d48/resourceGroups/AzureFunctionsQuickstart-rg/providers/Microsoft.Web/serverfarms/ASP-AzureFunctionsQuickstartrg-df2b",
    "siteConfig": {
      "acrUseManagedIdentityCreds": false,
      "acrUserManagedIdentityID": null,
      "alwaysOn": false,
      "antivirusScanEnabled": null,
      "apiDefinition": null,
      "apiManagementConfig": null,
      "appCommandLine": null,
      "appSettings": null,
      "autoHealEnabled": null,
      "autoHealRules": null,
      "autoSwapSlotName": null,
      "azureMonitorLogCategories": null,
      "azureStorageAccounts": null,
      "clusteringEnabled": false,
      "connectionStrings": null,
      "cors": null,
      "customAppPoolIdentityAdminState": null,
      "customAppPoolIdentityTenantState": null,
      "defaultDocuments": null,
      "detailedErrorLoggingEnabled": null,
      "documentRoot": null,
      "elasticWebAppScaleLimit": null,
      "experiments": null,
      "fileChangeAuditEnabled": null,
      "ftpsState": null,
      "functionAppScaleLimit": 100,
      "functionsRuntimeScaleMonitoringEnabled": null,
      "handlerMappings": null,
      "healthCheckPath": null,
      "http20Enabled": false,
      "http20ProxyFlag": null,
      "httpLoggingEnabled": null,
      "ipSecurityRestrictions": null,
      "ipSecurityRestrictionsDefaultAction": null,
      "javaContainer": null,
      "javaContainerVersion": null,
      "javaVersion": null,
      "keyVaultReferenceIdentity": null,
      "limits": null,
      "linuxFxVersion": "",
      "loadBalancing": null,
      "localMySqlEnabled": null,
      "logsDirectorySizeLimit": null,
      "machineKey": null,
      "managedPipelineMode": null,
      "managedServiceIdentityId": null,
      "metadata": null,
      "minTlsCipherSuite": null,
      "minTlsVersion": null,
      "minimumElasticInstanceCount": 0,
      "netFrameworkVersion": null,
      "nodeVersion": null,
      "numberOfWorkers": 1,
      "phpVersion": null,
      "powerShellVersion": null,
      "preWarmedInstanceCount": null,
      "publicNetworkAccess": null,
      "publishingPassword": null,
      "publishingUsername": null,
      "push": null,
      "pythonVersion": null,
      "remoteDebuggingEnabled": null,
      "remoteDebuggingVersion": null,
      "requestTracingEnabled": null,
      "routingRules": null,
      "runtimeADUser": null,
      "runtimeADUserPassword": null,
      "sandboxType": null,
      "scmIpSecurityRestrictions": null,
      "scmIpSecurityRestrictionsDefaultAction": null,
      "scmIpSecurityRestrictionsUseMain": null,
      "scmMinTlsCipherSuite": null,
      "scmMinTlsVersion": null,
      "scmSupportedTlsCipherSuites": null,
      "scmType": null,
      "sitePort": null,
      "sitePrivateLinkHostEnabled": null,
      "storageType": null,
      "supportedTlsCipherSuites": null,
      "tracingOptions": null,
      "use32BitWorkerProcess": null,
      "virtualApplications": null,
      "vnetName": null,
      "vnetPrivatePortsCount": null,
      "vnetRouteAllEnabled": null,
      "webJobsEnabled": false,
      "webSocketsEnabled": null,
      "websiteTimeZone": null,
      "winAuthAdminState": null,
      "winAuthTenantState": null,
      "windowsConfiguredStacks": null,
      "windowsFxVersion": null,
      "xManagedServiceIdentityId": null
    },
    "siteDisabledReason": 0,
    "siteMode": null,
    "siteProperties": {
      "appSettings": null,
      "metadata": null,
      "properties": [
        {
          "name": "LinuxFxVersion",
          "value": ""
        },
        {
          "name": "WindowsFxVersion",
          "value": null
        }
      ]
    },
    "siteScopedCertificatesEnabled": true,
    "sku": "FlexConsumption",
    "slotName": null,
    "slotSwapStatus": null,
    "sshEnabled": null,
    "sslCertificates": null,
    "state": "Running",
    "storageAccountRequired": false,
    "storageRecoveryDefaultState": "Running",
    "suspendedTill": null,
    "tags": null,
    "targetBuildVersion": null,
    "targetSwapSlot": null,
    "trafficManagerHostNames": null,
    "usageState": "Normal",
    "useContainerLocalhostBindings": null,
    "useQueryStringAffinity": false,
    "virtualNetworkSubnetId": null,
    "vnetBackupRestoreEnabled": false,
    "vnetContentShareEnabled": false,
    "vnetImagePullEnabled": false,
    "vnetRouteAllEnabled": false,
    "webSpace": "flex-5fe05fd3c8605b55b1d0b8212180ffedce49e1c7fa29a9342018c6e2c876949c-webspace",
    "workloadProfileName": null
  },
  "resourceGroup": "AzureFunctionsQuickstart-rg",
  "type": "Microsoft.Web/sites"
}
