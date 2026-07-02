/* ==========================================
   PROJECT NEXUS
   DATABASE
========================================== */

const Database = {

    customers: [],

    journeys: [],

    purchases: [],

    subscriptions: [],

    translations: {}

};

/* ==========================================
   LOAD DATABASE
========================================== */

async function loadDatabase() {

    const files = [

        "../data/customers.json",

        "../data/journeys.json",

        "../data/purchases.json",

        "../data/subscriptions.json",

        "../data/translations.json"

    ];

    const [

        customers,

        journeys,

        purchases,

        subscriptions,

        translations

    ] = await Promise.all(

        files.map(async file => {

            const response = await fetch(file);

            if (!response.ok) {

                throw new Error(`Unable to load ${file}`);

            }

            return response.json();

        })

    );

    Database.customers = customers;

    Database.journeys = journeys;

    Database.purchases = purchases;

    Database.subscriptions = subscriptions;

    Database.translations = translations;

}

/* ==========================================
   CUSTOMER
========================================== */

function getCurrentCustomerId() {

    return Storage.get("customer");

}

function getCurrentCustomer() {

    return Database.customers.find(

        customer => customer.id === getCurrentCustomerId()

    );

}

function getCustomer(id) {

    return Database.customers.find(

        customer => customer.id === id

    );

}

/* ==========================================
   JOURNEY
========================================== */

function getCurrentJourneyId() {

    return Storage.get("journey");

}

function getCurrentJourney() {

    return Database.journeys.find(

        journey => journey.id === getCurrentJourneyId()

    );

}

function getJourney(id) {

    return Database.journeys.find(

        journey => journey.id === id

    );

}

/* ==========================================
   PURCHASES
========================================== */

function getCurrentPurchases() {

    return Database.purchases.find(

        purchase =>

            purchase.customerId === getCurrentCustomerId()

    );

}

function getPurchases(customerId) {

    return Database.purchases.find(

        purchase =>

            purchase.customerId === customerId

    );

}

/* ==========================================
   SUBSCRIPTIONS
========================================== */

function getCurrentSubscription() {

    return Database.subscriptions.find(

        subscription =>

            subscription.customerId === getCurrentCustomerId()

    );

}

function getSubscription(customerId) {

    return Database.subscriptions.find(

        subscription =>

            subscription.customerId === customerId

    );

}

/* ==========================================
   TRANSLATIONS
========================================== */

function getTranslations() {

    return Database.translations;

}

/* ==========================================
   INITIALIZATION
========================================== */

async function initializeDatabase() {

    await loadDatabase();

}
