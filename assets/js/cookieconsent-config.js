// import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

// Enable dark mode
document.documentElement.classList.add('cc--darkmode');

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom center",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        functionality: {
            enabled: true
        },
        analytics: {
            enabled: true
        }
    },
    language: {
        default: "en",
        autoDetect: "browser",
        translations: {
            en: {
                consentModal: {
                    title: "Hello, this message is a General Data Protection Regulation (GDPR) requirement!",
                    description: "The GDPR is a comprehensive data privacy law enacted by the European Union (EU) to protect the personal data and privacy of individuals within the EU. It applies to organizations worldwide that handle the personal data of EU residents. ",
                    // This site uses cookies to store information on your device but NOT for marketing purposes. Some cookies are essential, while others help us improve your experience, personalize content, and analyze site usage. By clicking 'Accept All,' you agree to the storing of cookies on your device. You can manage your preferences by clicking 'Manage preferences.
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: "Privacy policies and cookie preferences are accessible later in the footer of each page."
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                       // {
                       //     title: "Cookie Usage",
                       //     description: "This website uses cookies to ensure you get the best experience. Some are essential, while others help us improve our services and deliver relevant content. You can choose which cookies you're happy for us to use."
                       // },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "These cookies are essential for the proper functioning of the website. They enable basic functions like page navigation and access to secure areas of the website. Without these cookies, the website cannot function properly. These cookies do not store any personally identifiable information and cannot be disabled through this site.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Functionality Cookies",
                            description: "These cookies enable the website to provide enhanced features and personalization. Disabling them might affect the functionality of some site features.",
                            linkedCategory: "functionality"
                        },
                        {
                            title: "Analytics Cookies",
                            description: "These cookies help us understand how visitors engage with our website by collecting information anonymously. They provide insights into areas such as visitor numbers, popular pages, and user behavior. This helps us improve the website's functionality and user experience.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "More information",
                            description: "<span class=\"red\">On purpose we do NOT use any advertising cookies! </span>For any query in relation to our policy on cookies and your choices, please see the footer on this page once this popup has disappeared."
                        }
                    ]
                }
            }
        }
    }
});
