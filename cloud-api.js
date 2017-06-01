var cloud = require('kentico-cloud-angular2-sdk');

console.log("Kentico Cloud Test");

var apiUrl = 'https://deliver.kenticocloud.com';
var projectId = 'b52fa0db-84ec-4310-8f7c-3b94ed06644d';

// classes need to be created so that strongly typed objects are returned
// no properties are necessary as they are created on the objects themselves
class CodeExample {
}

class Category {
}

class Author {
}

class Character {
}

// configure type resolvers
var typeResolvers = [
    new cloud.TypeResolver("code_example", () => new CodeExample()),
    new cloud.TypeResolver("category", () => new Category()),
    new cloud.TypeResolver("author", () => new Author()),
    new cloud.TypeResolver("character", () => new Character()),
];

var config = new cloud.DeliveryClientConfig(apiUrl, projectId, typeResolvers)

// instantiate delivery client
var deliveryClient = new cloud.DeliveryClient(config);

// use it
deliveryClient.getItems().subscribe(response => console.log(response));
deliveryClient.getItem("author", "rimmer").subscribe(response => console.log(response));
deliveryClient.getItems(null, [
    new cloud.LimitParameter(5)
]).subscribe(response => console.log(response));
