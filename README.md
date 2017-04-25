# Azure function Blob trigger calling cognitive services

Requires:
* NodeJS
* Azure subscription with cognitive services

Add new function via Azure function, link to Storage and container. It will trigger and attempt to upload an image file to cognitive services to analyse and apply tags.

## Notes

- Installed npm dependencies via Kudu console (see [here](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node#node-version--package-management))
- Had to set OcpApimSubscriptionKey in function app settings to be available as environmental variable
- Had to change `function.json` to add `"dataType": "binary"` so `myBlob` image data was Buffer object which could be sent via Request to Cognitive Services