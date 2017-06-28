var kc = require('kentico-cloud-delivery-typescript-sdk');

var projectId = 'da5abe9f-fdad-4168-97cd-b3464be2ccb9';

// no properties are necessary
class Movie extends kc.ContentItem {
    constructor() {
        super({
            urlSlugResolver: (item, urlSlug) => {
                return 'someurl/movie/' + urlSlug;
            },
        });
    }

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

var actorFieldTranslations = {
    first_name: 'firstName',
    last_name: 'lastName',
};

class Actor extends kc.ContentItem {
    constructor() {
        super({
            propertyResolver: (fieldName) => {
                // binds 'first_name' response from Kentico cloud to 'firstName' property
                return actorFieldTranslations[fieldName] || fieldName;
            },
            urlSlugResolver: (item, urlSlug) => {
                return 'someurl/actor/' + urlSlug;
            },
        });
    }
}

// configure type resolvers
var typeResolvers = [
    new kc.TypeResolver('movie', () => new Movie()),
    new kc.TypeResolver('actor', () => new Actor()),
];

var config = new kc.DeliveryClientConfig(projectId, typeResolvers);

// instantiate delivery client
var deliveryClient = new kc.DeliveryClient(config);

// use it
deliveryClient.items()
    .limitParameter(10)
    .orderParameter('system.codename', kc.SortOrder.desc)
    .depthParameter(5)
    .get()
    .subscribe(response => console.log(response));

deliveryClient.item('tom_hardy')
    .get()
    .subscribe(response => console.log(response));

deliveryClient.items()
    .type('movie')
    .get()
    .subscribe(response => console.log(response));

