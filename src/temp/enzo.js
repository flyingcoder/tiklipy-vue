export default [
    {
        type: 'auxiliary',
        category: 'report',
        tag: 'featured',
        promptExample: 'Computer Laborator Supervisor Auxiliary report.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Bayot 2',
        icon:'ti-user',
        description: 'Simplify your auxiliary assignment. Just share a few details, and Tiklipy will solve your problem.',
        inputs: {
            highlights: {
                value: '',
                placeholder: 'e.g. Upgraded software in computer lab for better functionality and implemented new security measures to protect lab equipment.',
                inputType: 'textarea',
                label: 'Main Highlights',
            },
        }
    }
];