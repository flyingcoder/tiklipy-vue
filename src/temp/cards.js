import enzo from './enzo';
import alanjr from './alanjr';

const cards = [
    {
        type: 'auxiliary',
        category: 'report',
        tag: 'featured',
        promptExample: 'Computer Laborator Supervisor Auxiliary report.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Effortless Auxiliary Report Generator.',
        icon:'ti-user',
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