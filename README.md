# cells-enterprise-sdk-js

Javascript SDK for **Cells Enterprise** Rest API. Please check [cells-sdk-js](https://github.com/pydio/cells-sdk-js) for accessing the core APIs of Pydio Cells (home edition).

This SDK is generated automatically using `swagger-codegen` tool from the OpenAPI specification of Cells Enterprise Rest API. It does not rely on any framework and uses superagent internally for performing HTTP requests.

Since Cells v3, it is used internally by the official Pydio Cells Enterprise web modules.

## Usage

### Installation

Simply use `npm install --save cells-enterprise-sdk` to append the latest version to your package.json.

### Authentication

Authentication is passed via the `Authorization: Bearer $TOKEN` header, where `$TOKEN` can be a Personal Access Token, or retrieved dynamically by the frontend login process.

### Endpoints

All Enterprise APIs described in Cells official documentation are supported. Below are listed the main services available :

- AuditDataService
- EnterpriseConfigService
- EnterpriseFrontendService
- EnterpriseLogService
- EnterprisePolicyService
- EnterpriseTokenService
- SchedulerService

Please refer to the docs for more information.

### Example

A sample application is available in cells-sdk example/app.js

Basic tree listing looks like :

```javascript
    var api = new TreeServiceApi(client);
    var request = new RestGetBulkMetaRequest();
    request.NodePaths = ['/folder/*'];
    api.bulkStatNodes(request).then(res => {
        // Read array res.Nodes with all nodes
    });
```

## License

This library is licensed under Apache V2.0 license.