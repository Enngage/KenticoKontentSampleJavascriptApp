/* For in-depth documentation about the use of this SDK visit https://github.com/Enngage/KenticoCloudDeliveryTypeScriptSDK **/

var kc = require('kentico-cloud-delivery-typescript-sdk');
var projectId = 'da5abe9f-fdad-4168-97cd-b3464be2ccb9';

/**
 * Class representing the content type. It is not necessary to manually define properties in JavaScript
 * as all properties will be auto-assigned by the SDK
 */
class Movie extends kc.ContentItem {
    constructor() {
        super();
    }

    /**
     * Helper method to get string of all categories assigned to movie separated by comma
     */
    getCategoriesText() {
        if (!this.category) {
            return null;
        }

        return this.category.options.map(m => m.name.toLocaleLowerCase()).join(', ');
    }

    /**
     * Helper method to get string of all movie actors separated by comma
     */
    getStarsText() {
        if (!this.stars) {
            return null;
        }
        return this.stars.map(actor => actor.getFullName()).join(', ');
    }
}

/**
* Field translations for Actor class. This makes sure that 'first_name' property fetched from Kentico Cloud
* uses 'firstName' property in the Javascript class.
*/
actorFieldTranslations = {
    first_name: 'firstName',
    last_name: 'lastName',
};

/**
 * Class representing the content type. It is not necessary to manually define properties in JavaScript
 * as all properties will be auto-assigned by the SDK
 */
class Actor extends kc.ContentItem {

    constructor() {
        super({
            propertyResolver: (fieldName) => {
                // binds 'first_name' response from Kentico cloud to 'firstName' property
                return actorFieldTranslations[fieldName] || fieldName;
            },
            linkResolver: (link) => {
                return '/actors/' + link.url_slug;
            },
        });
    }
}

/**
 * Type resolvers are used to 'map' string type (i.e. 'movie') that you defined in your Kentico Cloud project
 * to a javascript Class (i.e. 'Movie' defined above)
 */
var typeResolvers = [
    new kc.TypeResolver('movie', () => new Movie()),
    new kc.TypeResolver('actor', () => new Actor()),
];

/**
 * Delivery client configuration object
 */
var config = new kc.DeliveryClientConfig(projectId, typeResolvers);

/**
 * Create new instance of Delivery Client and use it to fetch data from Kentico Cloud
 */
var deliveryClient = new kc.DeliveryClient(config);

/**
 * Fetch all items of 'movie' type and given parameters from Kentico Cloud
 */
deliveryClient.items()
    .type('movie')
    .limitParameter(10)
    .orderParameter('system.codename', kc.SortOrder.desc)
    .depthParameter(5)
    .get()
    .subscribe(response => console.log(response));

/**
 * Fetch single item with given codename from Kentico cloud
 */
deliveryClient.item('tom_hardy')
    .get()
    .subscribe(response => {
        console.log(response);
        console.log(`The URL of actor '${response.item.system.name}' resolved to: '${response.item.url.getUrl()}'`);
    });

/**
 * Fetch types
 */
deliveryClient.types()
    .limitParameter(2)
    .get()
    .subscribe(response => console.log(response));

/**
 * Fetch taxonomies
 */
deliveryClient.taxonomies()
    .get()
    .subscribe(response => console.log(response));

/**
 * By calling 'toString()' on any query, you can get the URL of the Kentico Cloud endpoint
 */
var itemsUrl = deliveryClient.items()
    .type('movie')
    .limitParameter(10)
    .orderParameter('system.codename', kc.SortOrder.desc)
    .depthParameter(5)
    .toString();

console.log(`Following is an URL of items query: ${itemsUrl}`);

/**
 * Debug information containing the raw Ajax response
 */
deliveryClient.items()
    .get()
    .subscribe(response => console.log(response.debug));

/**
 * Use with Promises
 */
deliveryClient.items()
    .get()
    .toPromise()
    .then(response => console.log(`Item '${response.firstItem.system.codename}' was fetched using a Promise`));

