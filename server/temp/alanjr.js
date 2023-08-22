export default [
    {
        type: 'correction',
        category: 'Tools',
         tag: [ 'tools' ],
        promptExample: 'She no went to class.',
        systemPrompt: 'Given statements need conversion to standard English. User format: sentence - ""',
        title: 'Grammar correction',
        icon:'ti-tools',
        description: 'Rewrite incorrect sentences into proper English.',
        inputs: {
            sentence: {
                value: '',
                hint: 'Write here',
                inputType: 'textarea',
                label: 'Write the the sentence you would like to check and correct',
            },
        }
    },
    {
        type: 'summarize',
        category: 'Tools',
         tag: [ 'tools' ],
        promptExample: "Jupiter, the Solar System's largest planet, is fifth from the Sun. Despite having only one-thousandth of the Sun's mass, it surpasses the combined mass of all other planets. Known since ancient times, it's named after the Roman god Jupiter. Visible to the naked eye, it often outshines most celestial objects, ranking third in brightness after the Moon and Venus.",
        systemPrompt: "You'll summarize content for a student based on a provided grade grade. User format: grade - 'data', sentence - 'data'.",
        title: 'Summarization',
        icon: 'ti-tools',
        description: 'Summarize a sentence to a specific grade grade',
        inputs: {
            grade: {
                value: '',
                hint: 'e.g. 2nd Grade',
                inputType: 'input',
                label: 'Write the student\'s grade',
            },
            sentence: {
                value: '',
                label: 'Sentence',
                hint: "Write here",
                inputType: 'textarea',
                rows: '10',
            },
        }
    },
    {
        type: 'arrange',
        category: 'Tools',
         tag: [ 'tools' ],
        promptExample: 'On the recently discovered planet Goocrux, a variety of unique fruits have been found. Neoskizzles are purple and taste like candy. Loheckles are grayish-blue and tart, similar to lemons. Pounits, bright green, have a savory flavor. Loopnovas are neon pink and taste like cotton candy. Lastly, glowls, with a pale orange hue, offer a sour and bitter taste.',
        systemPrompt: 'You will transform given unstructured data into a spreadsheet format. User format: organize - "data".',
        title: 'Organize and understand data that is not structured in a specific format.',
        icon:'ti-tools',
        description: 'Create and organize tables from sentences.',
        inputs: {
            organize: {
                value: '',
                hint: 'Write here',
                inputType: 'textarea',
                label: 'Enter the sentence you would like to organize',
                rows:'10',
            },
        }
    },
    {
        type: 'translation',
        category: 'Tools',
         tag: [ 'tools' ],
        promptExample: 'Artificial intelligence is a technology with great promise.',
        systemPrompt: "You'll translate the provided text into emojis only. Do not use any regular text. Do your best with emojis only. User format: translation:'data'",
        title: 'Emoji Translation',
        icon:'ti-tools',
        description: 'Translate regular text into emoji text.',
        
        inputs: {
            translation: {
                value: '',
                hint: 'Write here',
                inputType: 'textarea',
                label: 'Enter the sentence you would like to translate',
                rows:'10',
            },
        }
    },
    {
        type: 'keyword',
        category: 'Tools',
         tag: [ 'tools' ],
        promptExample: "Black-on-black ware is a modern pottery tradition developed by Native American artists in Northern New Mexico. It's a style of pottery where designs are applied to smooth surfaces through burnishing or refractory slip. Some artists carve or incise designs and polish raised areas. Families from Kha'po Owingeh and P'ohwhóge Owingeh pueblos have passed down these techniques for generations. Other pueblos also create this pottery, and modern artists pay tribute to their ancestors' work.",
        systemPrompt: "You will be provided with a block of text, and your task is to extract a list of keywords from it. User format: extractor:'data'.",
        title: 'Keywords Extraction',
        icon:'ti-tools',
        description: 'Extract keywords from a block of text.',
        inputs: {
            extractor: {
                value: '',
                hint: 'Write here',
                inputType: 'textarea',
                label: "Please provide the sentence from which you'd like to extract keywords.",
                rows:'10',
            },
        }
    },
    {
        type: 'spreadsheet_creator',
        category: 'Tools',
         tag: [ 'tools' ],
        promptExample: "First name, Last name, age, score",
        systemPrompt: "You will be provided with a block of text and specific data fields, and your task is to create a spreadsheet based on the text and the data fields. User format: cols - '', data - ''.",
        title: 'Spreadsheet Creator',
        icon:'ti-tools',
        description: 'Create spreadsheets of various kinds of data.',
        inputs: {
            cols: {
                value: '',
                hint: ' First name, Last name, age, score, grade',
                inputType: 'input',
                label: 'Enter Information Overview',
            },
            data: {
                value: '',
                hint:'e.g. Aurora Sullivan, aged 25, achieved a score of 92; Jasper Bennett, aged 32, scored 78; Olivia Ramirez, aged 28, scored 85; Liam Anderson, aged 21, attained a score of 96; Sophia Mitchell, aged 29, received a score of 88; Ethan Roberts, aged 24, scored 91; Ava Martinez, aged 27, achieved a score of 83; Lucas Cooper, aged 30, scored 89; Mia Thompson, aged 22, received a score of 94; and Owen Johnson, aged 26, scored 77.',
                inputType: 'textarea',
                label: 'Enter data that you want to arrange',
                rows:'10',
            },
        }
    },
    {
        type: 'questions',
        category: 'Tools',
         tag: [ 'tools', 'featured' ],
        promptExample: "5th grade, 5, volcano",
        systemPrompt: "You will receive a block of text along with a specified number of questions and a designated grade grade. Your objective is to create questions that match the given grade grade in terms of complexity. The user will provide information in the following format: grade: 'data', questions: 'data', topic: 'data'.",
        title: 'Question generator',
        icon:'ti-tools',
        description: 'Create questions for spacific topic and grade level.',
        inputs: {
            grade: {
                value: '',
                hint: 'e.g. 5th Grade',
                inputType: 'input',
                label: 'Enter the grade grade',
            },
            questions: {
                value: '',
                hint: 'e.g. 5',
                inputType: 'input',
                label: 'Enter the number of questions',
            },
            topic: {
                value: '',
                hint:'e.g. volcano',
                inputType: 'input',
                label: 'Enter the topic',
                rows:'10',
            },
        }
    },
    {
        type: 'translation',
        category: 'Tools',
         tag: [ 'tools' ],
        promptExample: "English to 私は学生です",
        systemPrompt: "Your objective is to translate the provided sentence from its detected language to the second specified language. User format: language: 'data', sentence: 'data'.",
        title: 'translation',
        icon:'ti-tools',
        description:'Translate sentence to specified language.',
        inputs: {
            language: {
                value: '',
                hint: 'e.g. Bisaya',
                inputType: 'input',
                label: 'Enter the language you would like the translation to be in',
            },
            sentence: {
                value: '',
                hint: 'e.g. 私は学生です',
                inputType: 'textarea',
                label: 'Write the sentence here',
            },
        }
    },
    {
        type: 'meeting_notes_summarizer',
        category: 'Tools',
         tag: [ 'tools' ],
        promptExample: "Examples below",
        systemPrompt: "Your task: Create a brief summary of meeting notes, including discussion overview, action items with tasks and responsible people, and potential next meeting topics. User format: date - 'data', time - 'data', location - 'data', meeting - 'data', nextMeeting - 'data'.",
        title: 'Meeting notes summarizer',
        icon:'ti-tools',
        description: 'Summarize meeting notes including overall discussion, action items, and future topics.',
        inputs: {
            date: {
                value: '',
                hint: 'e.g. March 5th, 2023',
                inputType: 'input',
                label: 'Enter the date',
            },
            time: {
                value: '',
                hint: 'e.g. 2:00 PM',
                inputType: 'input',
                label: 'Enter the time',
            },
            location: {
                value: '',
                hint: 'e.g. Conference Room 3B, Intergalactic Headquarters',
                inputType: 'textarea',
                label: 'Enter the location',
            },
            meeting: {
                value: '',
                hint: 'e.g. 1.Introductions and Welcome... etc',
                inputType: 'textarea',
                label: 'Write the agenda of the meeting',
            },
            nextMeeting: {
                value: '',
                hint: 'e.g. 1.Introductions and Welcome... etc',
                inputType: 'textarea',
                label: 'Write the agenda of the next meeting',
            },
        }
    },
];