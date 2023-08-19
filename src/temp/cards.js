import enzo from './enzo';
import alanjr from './alanjr';

const cards = [
    // {
    //     type: 'sermon',
    //     category: 'generator',
    //     tag: 'write',
    //     promptExample: '',
    //     systemPrompt: `Generate a sermon that aligns with our church's theology and core beliefs. Our theology centers on the Triune God—Father, Son, and Holy Spirit—as revealed in Scripture. ${userInputs.theologyDescription} Create a sermon that reflects these principles, focusing on the theme of ${userInputs.sermonTheme} and its relevance for a ${userInputs.audience}. Craft the sermon to be ${userInputs.sermonLength} long, while maintaining a ${userInputs.preachingStyle} style. Ensure the content aligns with ${userInputs.theologyAlignment}. Incorporate ${userInputs.specifics} in the sermon.`,
    //     title: 'A sermon tailored to your preching style.',
    //     icon:'ti-pencil',
    //     description: 'To generate a sermon effectively, just provide the following information.',
    //     inputs: {
    //         sermonTheme: {
    //             value: '',
    //             placeholder: 'Clearly state the main topic or theme of the sermon.',
    //             inputType: 'textarea',
    //             label: 'Sermon Topic or Theme',
    //         },
    //         biblePassageOrVerses: {
    //             value: '',
    //             placeholder: 'Provide Bible passages or verses you want to incorporate into the sermon.',
    //             inputType: 'textarea',
    //             label: 'Bible Passage Or Verses',
    //         },
    //         theologyAlignment: {
    //             value: "Our church's theology is rooted in the belief in the Triune God—Father, Son, and Holy Spirit—as revealed in the Scriptures. We affirm the essential doctrines of the Christian faith, including the deity of Jesus Christ, salvation by grace through faith, the authority of the Bible, and the significance of the sacraments. We emphasize the importance of personal transformation through a relationship with Christ, and we strive to cultivate a spirit of love, unity, and service within our congregation and community. Our theology is centered on God's redemptive plan for humanity, exemplified by Christ's sacrificial death and resurrection, and we are committed to sharing this message of hope and salvation with the world.",
    //             placeholder: 'Church theology belief',
    //             inputType: 'textarea',
    //             label: 'Bible Passage Or Verses',
    //         },
    //         augience: {
    //             value: '',
    //             placeholder: 'Specify the intended audience for the sermon.',
    //             inputType: 'textarea',
    //             label: 'Target Audience',
    //         },
    //         sermonLength: {
    //             value: '',
    //             placeholder: "Indicate the preferred sermon length, whether it's a short message or a longer sermon.",
    //             inputType: 'textarea',
    //             label: 'Sermon Length',
    //         },
    //         preachingStyle: {
    //             value: '',
    //             placeholder: "Describe the user's prefferred preaching style. e.g. formal, storytelling, humor, and level of theological depth.",
    //             inputType: 'textarea',
    //             label: 'Personal Preaching Style',
    //         },
    //         specifics: {
    //             value: '',
    //             placeholder: "If the sermon should address current events or specific contemporary issues.",
    //             inputType: 'textarea',
    //             label: 'Contemporary Issues or Relevance',
    //         },
    //         emphasis: {
    //             value: '',
    //             placeholder: "Describe the desired impact on the audience. Whether it's inspiring, convicting, encoaraging, or educating.",
    //             inputType: 'textarea',
    //             label: 'Engagement Goal',
    //         }
    //     }
    // },
    {
        type: 'auxiliary',
        category: 'Report',
        tag: 'write',
        promptExample: 'Computer Laborator Supervisor Auxiliary report.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Effortless Auxiliary Report Generator.',
        icon:'ti-pencil',
        description: 'Simplify your auxiliary assignment. Just share a few details, and Tiklipy will solve your problem.',
        inputs: {
            highlights: {
                value: '',
                placeholder: 'e.g. Upgraded software in computer lab for better functionality and implemented new security measures to protect lab equipment.',
                inputType: 'textarea',
                label: 'Main Highlights',
            },
            challenges: {
                value: '',
                placeholder: 'e.g. Dealing with occasional computer glitches and managing student access to specific software.',
                inputType: 'textarea',
                label: 'Challenges Faced',
            },
            insights: {
                value: '',
                placeholder: 'e.g. Recognized the need for regular maintenance to prevent technical issues',
                inputType: 'textarea',
                label: 'Insights',
            },
            purpose: {
                value: '',
                placeholder: 'e.g. To provide an overview of activities and improvements in the computer lab.',
                inputType: 'text',
                label: 'Report Insights',
            },
            outcome: {
                value: '',
                placeholder: 'e.g. Improved lab functionality and security and enhanced student experience in the lab.',
                inputType: 'text',
                label: 'Report Outcome',
            }
        }
    }
];

const main = [...cards, ...enzo, ...alanjr];

export default main;