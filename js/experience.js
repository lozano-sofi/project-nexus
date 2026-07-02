/* ==========================================
   PROJECT NEXUS
   EXPERIENCE
   PART 1/4
========================================== */

const Experience = {

    customer: null,

    journey: null,

    purchases: null,

    subscription: null

};

/* ==========================================
   ELEMENTS
========================================== */

const Elements = {

    greeting: document.getElementById(
        "greeting"
    ),

    lastSync: document.getElementById(
        "lastSync"
    ),

    profileName: document.getElementById(
        "profileName"
    ),

    journeyTitle: document.getElementById(
        "journeyTitle"
    ),

    journeyText: document.getElementById(
        "journeyText"
    ),

    savingValue: document.getElementById(
        "savingValue"
    ),

    energyValue: document.getElementById(
        "energyValue"
    ),

    co2Value: document.getElementById(
        "co2Value"
    ),

    yearsValue: document.getElementById(
        "yearsValue"
    ),

    customerId: document.getElementById(
        "customerId"
    ),

    customerName: document.getElementById(
        "customerName"
    ),

    installationDate: document.getElementById(
        "installationDate"
    ),

    subscriptionPlan: document.getElementById(
        "subscriptionPlan"
    ),

    preferredContact: document.getElementById(
        "preferredContact"
    ),

    customerScore: document.getElementById(
        "customerScore"
    ),

    timelineContainer: document.getElementById(
        "timelineContainer"
    ),

    recommendationContainer: document.getElementById(
        "recommendationContainer"
    ),

    activityContainer: document.getElementById(
        "activityContainer"
    ),

    insightsContainer: document.getElementById(
        "insightsContainer"
    ),

    customerSelector: document.getElementById(
        "customerSelector"
    ),

    journeySelector: document.getElementById(
        "journeySelector"
    ),

    controlsPanel: document.getElementById(
        "controlsPanel"
    )

};

/* ==========================================
   EXPERIENCE DATA
========================================== */

function loadExperienceData() {

    Experience.customer =
        getCurrentCustomer();

    Experience.journey =
        getCurrentJourney();

    Experience.purchases =
        getCurrentPurchases();

    Experience.subscription =
        getCurrentSubscription();

}

/* ==========================================
   HEADER
========================================== */

function renderHeader() {

    if (!Experience.customer) {

        return;

    }

    const dashboard =
        Experience.customer.dashboard;

    Elements.greeting.textContent =
        dashboard.greeting;

    Elements.lastSync.textContent =
        "Last sync • Just now";

    Elements.profileName.textContent =
        Experience.customer.name.split(" ")[0];

}

/* ==========================================
   HERO
========================================== */

function renderHero() {

    if (
        !Experience.customer ||
        !Experience.journey
    ) {

        return;

    }

    const dashboard =
        Experience.customer.dashboard;

    Elements.journeyTitle.textContent =
        dashboard.heroTitle;

    Elements.journeyText.textContent =
        dashboard.heroText;

}

/* ==========================================
   METRICS
========================================== */

function renderMetrics() {

    if (!Experience.customer) {

        return;

    }

    const dashboard =
        Experience.customer.dashboard;

    Elements.savingValue.textContent =
        dashboard.savings;

    Elements.energyValue.textContent =
        dashboard.energy;

    Elements.co2Value.textContent =
        dashboard.co2;

    Elements.yearsValue.textContent =
        dashboard.relationship;

}

/* ==========================================
   CUSTOMER CARD
========================================== */

function renderCustomerInformation() {

    if (
        !Experience.customer ||
        !Experience.subscription
    ) {

        return;

    }

    Elements.customerId.textContent =
        Experience.customer.id;

    Elements.customerName.textContent =
        Experience.customer.name;

    Elements.installationDate.textContent =
        Experience.customer.memberSince;

    Elements.subscriptionPlan.textContent =
        Experience.subscription
            .subscription
            .planName;

    Elements.preferredContact.textContent =
        Experience.customer.preferredContact;

    Elements.customerScore.textContent =
        `${Experience.customer.satisfaction}%`;

}

/* ==========================================
   MAIN RENDER
========================================== */

function renderExperience() {

    loadExperienceData();

    renderHeader();

    renderHero();

    renderMetrics();

    renderCustomerInformation();

}

/* ==========================================
   PROJECT NEXUS
   EXPERIENCE
   PART 2/4
========================================== */

/* ==========================================
   TIMELINE
========================================== */

function renderTimeline() {

    if (!Experience.journey) {

        Elements.timelineContainer.innerHTML = "";

        return;

    }

    Elements.timelineContainer.innerHTML = "";

    Experience.journey.timeline.forEach(step => {

        const item = document.createElement(
            "article"
        );

        item.className =
            "timeline-item glass";

        item.innerHTML = `

            <h3>${step.title}</h3>

            <p>${step.description}</p>

        `;

        Elements.timelineContainer.appendChild(
            item
        );

    });

}

/* ==========================================
   RECOMMENDATIONS
========================================== */

function renderRecommendations() {

    if (!Experience.journey) {

        Elements.recommendationContainer.innerHTML = "";

        return;

    }

    Elements.recommendationContainer.innerHTML = "";

    Experience.journey.recommendations.forEach(item => {

        const card = document.createElement(
            "article"
        );

        card.className =
            "recommendation-card glass";

        card.innerHTML = `

            <h3>${item.title}</h3>

            <p>${item.description}</p>

        `;

        Elements.recommendationContainer.appendChild(
            card
        );

    });

}

/* ==========================================
   RECENT ACTIVITY
========================================== */

function renderActivity() {

    Elements.activityContainer.innerHTML = "";

    if (

        !Experience.purchases ||

        !Experience.purchases.purchases

    ) {

        return;

    }

    [...Experience.purchases.purchases]

        .sort(

            (a, b) =>

                new Date(b.date) -

                new Date(a.date)

        )

        .forEach(activity => {

            const card = document.createElement(
                "article"
            );

            card.className =
                "activity-card glass";

            card.innerHTML = `

                <strong>

                    ${activity.product}

                </strong>

                <small>

                    ${activity.category}

                </small>

                <p>

                    ${activity.date}

                </p>

                <span>

                    ${activity.status}

                </span>

            `;

            Elements.activityContainer.appendChild(
                card
            );

        });

}

/* ==========================================
   INSIGHTS
========================================== */

function renderInsights() {

    Elements.insightsContainer.innerHTML = "";

    if (

        !Experience.purchases ||

        !Experience.subscription

    ) {

        return;

    }

    const totalInvestment =

        Experience.purchases.purchases.reduce(

            (total, purchase) =>

                total + purchase.value,

            0

        );

    const subscription =

        Experience.subscription.subscription;

    const insights = [

        {

            title: "Total Investment",

            value:

                `$${totalInvestment.toLocaleString()}`

        },

        {

            title: "Subscription",

            value:

                subscription.planName

        },

        {

            title: "Annual Fee",

            value:

                `${subscription.currency} ${subscription.price}`

        },

        {

            title: "Renewal",

            value:

                subscription.renewalDate

        }

    ];

    insights.forEach(insight => {

        const card = document.createElement(
            "article"
        );

        card.className =
            "insight-card glass";

        card.innerHTML = `

            <small>

                ${insight.title}

            </small>

            <strong>

                ${insight.value}

            </strong>

        `;

        Elements.insightsContainer.appendChild(
            card
        );

    });

}

/* ==========================================
   CONTENT
========================================== */

function renderContent() {

    renderTimeline();

    renderRecommendations();

    renderActivity();

    renderInsights();

}

/* ==========================================
   PROJECT NEXUS
   EXPERIENCE
   PART 3/4
========================================== */

/* ==========================================
   CUSTOMER SELECTOR
========================================== */

function populateCustomerSelector() {

    if (!Elements.customerSelector) {

        return;

    }

    Elements.customerSelector.innerHTML = "";

    Database.customers.forEach(customer => {

        const option = document.createElement(
            "option"
        );

        option.value = customer.id;

        option.textContent =
            customer.name;

        if (

            customer.id ===

            getCurrentCustomerId()

        ) {

            option.selected = true;

        }

        Elements.customerSelector.appendChild(
            option
        );

    });

}

/* ==========================================
   JOURNEY SELECTOR
========================================== */

function populateJourneySelector() {

    if (!Elements.journeySelector) {

        return;

    }

    Elements.journeySelector.innerHTML = "";

    Database.journeys.forEach(journey => {

        const option = document.createElement(
            "option"
        );

        option.value = journey.id;

        option.textContent =
            journey.title;

        if (

            journey.id ===

            getCurrentJourneyId()

        ) {

            option.selected = true;

        }

        Elements.journeySelector.appendChild(
            option
        );

    });

}

/* ==========================================
   SELECTORS
========================================== */

function populateSelectors() {

    populateCustomerSelector();

    populateJourneySelector();

}

/* ==========================================
   EXPERIENCE UPDATE
========================================== */

function refreshExperience() {

    loadExperienceData();

    renderHeader();

    renderHero();

    renderMetrics();

    renderCustomerInformation();

    renderContent();

}

/* ==========================================
   CUSTOMER
========================================== */

function changeCustomer(customerId) {

    Storage.set(

        "customer",

        Number(customerId)

    );

    refreshExperience();

}

/* ==========================================
   JOURNEY
========================================== */

function changeJourney(journeyId) {

    Storage.set(

        "journey",

        journeyId

    );

    refreshExperience();

}

/* ==========================================
   SYNCHRONIZATION
========================================== */

function synchronizeSelectors() {

    if (Elements.customerSelector) {

        Elements.customerSelector.value =

            getCurrentCustomerId();

    }

    if (Elements.journeySelector) {

        Elements.journeySelector.value =

            getCurrentJourneyId();

    }

}

/* ==========================================
   PUBLIC REFRESH
========================================== */

function updateExperience() {

    synchronizeSelectors();

    refreshExperience();

}

/* ==========================================
   PROJECT NEXUS
   EXPERIENCE
   PART 4/4
========================================== */

/* ==========================================
   INITIAL RENDER
========================================== */

function renderExperience() {

    loadExperienceData();

    renderHeader();

    renderHero();

    renderMetrics();

    renderCustomerInformation();

    renderContent();

}

/* ==========================================
   EXPERIENCE INITIALIZATION
========================================== */

async function initializeExperience() {

    await initializeDatabase();

    populateSelectors();

    renderExperience();

    if (

        typeof initializeTranslations ===

        "function"

    ) {

        initializeTranslations();

    }

}

/* ==========================================
   EXPERIENCE API
========================================== */

window.Experience = {

    getCustomer() {

        return Experience.customer;

    },

    getJourney() {

        return Experience.journey;

    },

    getPurchases() {

        return Experience.purchases;

    },

    getSubscription() {

        return Experience.subscription;

    },

    render: renderExperience,

    refresh: updateExperience,

    initialize: initializeExperience,

    changeCustomer,

    changeJourney,

    populateSelectors

};

/* ==========================================
   READY
========================================== */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        initializeExperience();

    }

);
