var cloud = require('kentico-cloud-delivery-typescript-sdk');

var apiUrl = 'https://deliver.kenticocloud.com';
var projectId = 'da5abe9f-fdad-4168-97cd-b3464be2ccb9';

// no properties are necessary
class Movie extends cloud.ContentItem{

    getCategoriesText() {
        if (!this.category) {
            return null;
        }

        return this.category.options.map(m => m.name.toLocaleLowerCase()).join(', ');
    }

    getStarsText() {
        if (!this.stars) {
            return null;
        }
        return this.stars.map(actor => actor.getFullName()).join(', ');
    }
}

class Actor extends cloud.ContentItem{

    constructor() {
        super({
            resolver: (fieldName) => {
                if (fieldName === 'first_name') {
                    return 'firstName'; // binds 'first_name' response from Kentico cloud to 'firstName' property
                }
                if (fieldName === 'last_name') {
                    return 'lastName';
                }
            }
        })
    }
}


// configure type resolvers
var typeResolvers = [
    new cloud.TypeResolver("movie", () => new Movie()),
    new cloud.TypeResolver("actor", () => new Actor()),
];

var config = new cloud.DeliveryClientConfig(projectId, typeResolvers)

// instantiate delivery client
var deliveryClient = new cloud.DeliveryClient(config);

// use it
deliveryClient.getItems(null,
    [
        new cloud.LimitParameter(5)
    ])
    .subscribe(response => console.log(response));

deliveryClient.getItem("actor", "tom_hardy").subscribe(response => console.log(response));

deliveryClient.getItems("movie").subscribe(response => console.log(response));

