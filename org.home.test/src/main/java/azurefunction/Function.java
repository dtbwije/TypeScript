package azurefunction;

import com.azure.identity.DefaultAzureCredentialBuilder;
import com.azure.storage.blob.BlobContainerClient;
import com.azure.storage.blob.BlobContainerClientBuilder;
import com.azure.storage.blob.BlobServiceClient;
import com.azure.storage.blob.BlobServiceClientBuilder;
import com.azure.storage.blob.models.BlobItem;
import com.microsoft.azure.functions.ExecutionContext;
import com.microsoft.azure.functions.HttpMethod;
import com.microsoft.azure.functions.HttpRequestMessage;
import com.microsoft.azure.functions.HttpResponseMessage;
import com.microsoft.azure.functions.HttpStatus;
import com.microsoft.azure.functions.annotation.AuthorizationLevel;
import com.microsoft.azure.functions.annotation.FunctionName;
import com.microsoft.azure.functions.annotation.HttpTrigger;

import java.util.Optional;

/**
 * Azure Functions with HTTP Trigger.
 */
public class Function {

    @FunctionName("HttpExample")
    public HttpResponseMessage firstExample(
            @HttpTrigger(
                name = "req",
                methods = {HttpMethod.GET, HttpMethod.POST},
                route = "httpexample",
                authLevel = AuthorizationLevel.ANONYMOUS)
                HttpRequestMessage<Optional<String>> request,
            final ExecutionContext context) {
        context.getLogger().info("Java HTTP trigger processed a request.");

        // Parse query parameter
        final String query = request.getQueryParameters().get("name");
        final String name = request.getBody().orElse(query);

        if (name == null) {
            return request.createResponseBuilder(HttpStatus.BAD_REQUEST).body("Please pass a name on the query string or in the request body").build();
        } else {
            return request.createResponseBuilder(HttpStatus.OK).body("Hello, " + name).build();
        }
    }

    
    @FunctionName("listblobs")
    public HttpResponseMessage listBlobs(
            @HttpTrigger(
                    name = "req",
                    methods = {HttpMethod.GET},
                    route = "listblobs",
                    authLevel = AuthorizationLevel.FUNCTION)
            HttpRequestMessage<Optional<String>> request,
            final ExecutionContext context) {

        try {
        
            BlobServiceClient blobServiceClient =
                new BlobServiceClientBuilder()
                    .endpoint("https://storage4test4tharanga.blob.core.windows.net")
                    .credential(new DefaultAzureCredentialBuilder().build())
                    .buildClient();


            
            StringBuilder response = new StringBuilder();

            blobServiceClient.listBlobContainers().forEach(container -> {
                System.out.println("Blob: " + container.getName());
                response.append("Container: ")
                        .append(container.getName())
                        .append("\n");
                
                BlobContainerClient containerClient =
                    blobServiceClient.getBlobContainerClient(container.getName());

                // List all blobs in the container
                for (BlobItem blob : containerClient.listBlobs()) {
                    System.out.println("Blob: " + blob.getName() + " Size: " + blob.getProperties().getContentLength());

                    response.append("    ").append(
                        "  Blob: " + blob.getName() +
                        " Size: " + blob.getProperties().getContentLength()
                    );
                }
            });

            return request.createResponseBuilder(HttpStatus.OK)
                    .body(response.toString())
                    .build();

        } catch (Exception e) {
            context.getLogger().severe(e.getMessage());

            return request.createResponseBuilder(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error: " + e.getMessage())
                    .build();
        }
    }

}
