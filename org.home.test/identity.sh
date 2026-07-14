output=$(az identity create --name "func-host-storage-user" --resource-group "AzureFunctionsQuickstart-rg" --location "Sweden Central" --query "{userId:id, principalId: principalId, clientId: clientId}" -o json)

{
  "clientId": "3607fe90-5518-468b-bc5d-3e3eb074b698",
  "principalId": "9dc6f3f6-c7f2-47f8-8b02-79fa2b9ead28",
  "userId": "/subscriptions/1f681932-af34-40e4-be5a-858701c64d48/resourcegroups/AzureFunctionsQuickstart-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/func-host-storage-user"
}
userId=$(echo $output | jq -r '.userId')
principalId=$(echo $output | jq -r '.principalId')
clientId=$(echo $output | jq -r '.clientId')

storageId=$(az storage account show --resource-group "AzureFunctionsQuickstart-rg" --name storage4test4tharanga --query 'id' -o tsv)
az role assignment create --assignee-object-id 9dc6f3f6-c7f2-47f8-8b02-79fa2b9ead28 --assignee-principal-type ServicePrincipal --role "Storage Blob Data Owner" --scope $storageId