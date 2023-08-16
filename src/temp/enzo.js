export default [
    {
        type: 'poem',
        category: 'Language Type',
        tag: 'write',
        promptExample: '',
        systemPrompt: 'Create a poem with the provided verse and subject format: verse: "data", subject: "data".',
        title: 'Craft a poem',
        icon:'ti-pencil',
        description: 'Generate customized poems based on various topics and styles.',
        inputs: {
            verse: {
                value: '',
                placeholder: 'Examples include Sonnet, Haiku, Free Verse, Limerick, Epic, Ballad, and Ode.',
                inputType: 'text',
                label: 'Genre of Verse',
            },
            subject: {
                value: '',
                placeholder: 'For instance, the subject of "States of Matter."',
                inputType: 'text',
                label: 'Subject',
            },
        }
    },
    {
        type: 'assessments',
        category: 'Assessments',
        tag: 'write',
        promptExample: 'While we have safeguards in place, the system may occasionally generate incorrect or misleading information. Please double-check answers.',
        systemPrompt: "You'll be providing a text block, along with the desired grade grade, type of question, number of questions, and a designated topic. Your task is to generate questions that align with the specified grade grade in terms of complexity. Kindly use the following format: grade: 'data', subject: 'data', questions: 'data', type: 'data'",
        title: 'Generate conventional evaluation inquiries.',
        icon:'ti-pencil',
        description: 'Create queries designed to assess student comprehension.',
        inputs: {
            grade: {
                value: '',
                placeholder: 'e.g. 5th Grade',
                inputType: 'input',
                label: 'Enter the grade grade',
            },
            subject: {
                value: '',
                placeholder: 'State the general topic or paste an official standard.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
            questions: {
                value: '',
                placeholder: 'For instance, 1 or a range from 2 to 10.',
                inputType: 'text',
                label: 'How Many Questions Would You Like?',
            },
            type: {
                value: '',
                placeholder: 'For example, multiple choice, true or false, fill in the blank, short answer essay, or numeric response.',
                inputType: 'text',
                label: 'Type of Questions',
            },
        }
    },
    {
        type: 'forms',
        category: 'Forms',
        tag: 'write',
        promptExample: '',
        systemPrompt: 'Generate a customized donation or supply request based on the following information: grade: "data", target: "data", request: "data", accasion: "data", deadline: "data", name: "data", school: "data", contact: "data"',
        title: 'Formulate a solicitation for donations or supplies.',
        icon:'ti-user-check',
        description: 'Craft personalized appeals for donations or supplies to meet specific needs.',
        inputs: {
            grade: {
                value: '',
                placeholder: 'For instance, 6th grade.',
                inputType: 'text',
                label: 'Educational Level or Field of Study',
            },
            target: {
                value: '',
                placeholder: 'Who is the intended recipient of this?',
                inputType: 'text',
                label: 'Target Audience or Receiver',
            },
            request: {
                value: '',
                placeholder: 'For example, 25 sets of child-size scissors, four packs of mechanical pencils, and so on.',
                inputType: 'textarea',
                label: 'Items in Demand',
            },
            accasion: {
                value: '',
                placeholder: 'What is the reason behind seeking these donations?',
                inputType: 'textarea',
                label: 'Occasion or Function',
            },
            deadline: {
                value: '',
                placeholder: 'For instance, Wednesday, March 1st.',
                inputType: 'text',
                label: 'Deadline for Donation Submission',
            },
            name: {
                value: '',
                placeholder: 'For example, Ms. Cotant.',
                inputType: 'text',
                label: 'Name(s) of Point of Contact',
            },
            school: {
                value: '',
                placeholder: 'For instance, Maple Middle School.',
                inputType: 'text',
                label: 'Title of Educational Establishment',
            },
            contact: {
                value: '',
                placeholder: 'For example, enzo@tiklipy.com.',
                inputType: 'text',
                label: 'Contact Details',
            },
        }
    },
    {
        type: 'forms',
        category: 'Forms',
        tag: 'write',
        promptExample: '',
        systemPrompt: 'Generate a persuasive permission slip for students to participate in an off-campus excursion. using this format. grade: "data", desination: "data", date: "data", departure: "data", return: "data", transportation: "data", deadline: "data", contact: "data", school: "data", email: "data"',
        title: 'Generate a document for obtaining field trip permissions.',
        icon:'ti-user-check',
        description: 'Generate a permission slip for students to participate in an off-campus excursion.',
        inputs: {
            grade: {
                value: '',
                placeholder: 'For example, 6th grade.',
                inputType: 'text',
                label: 'Educational Level or Discipline',
            },
            desination: {
                value: '',
                placeholder: 'For example, Museum of Art.',
                inputType: 'text',
                label: 'Location of Visit',
            },
            date: {
                value: '',
                placeholder: 'For example, Friday, March 24th.',
                inputType: 'text',
                label: 'Field Trip Date',
            },
            departure: {
                value: '',
                placeholder: 'At what time will the departure from the school be?',
                inputType: 'text',
                label: 'Time of Departure from School',
            },
            return: {
                value: '',
                placeholder: 'At what time is the expected return to the school?',
                inputType: 'text',
                label: 'Time of Return to School',
            },
            transportation: {
                value: '',
                placeholder: 'For example, school bus, walking, etc.',
                inputType: 'text',
                label: 'Method of Travel',
            },
            deadline: {
                value: '',
                placeholder: 'For instance, Wednesday, March 1st.',
                inputType: 'text',
                label: 'Last Date to Submit the Permission Slip',
            },
            contact: {
                value: '',
                placeholder: 'For example, Ms. Cotant',
                inputType: 'text',
                label: 'Name(s) of Contact Person(s)',
            },
            school: {
                value: '',
                placeholder: 'For example, Maple Middle School.',
                inputType: 'text',
                label: 'Title of Educational Institution',
            },
            email: {
                value: '',
                placeholder: 'For instance, ivy@classpack.com.',
                inputType: 'text',
                label: 'Contact Details',
            },
        }
    },
    {
        type: 'forms',
        category: 'Forms',
        tag: 'write',
        promptExample: '',
        systemPrompt: '',
        title: 'Generate a consent form for reading or viewing media.',
        icon:'ti-user-check',
        description: 'Design permission slips granting students permission to access and engage with specific media content.',
        inputs: {
            grade: {
                value: '',
                placeholder: 'For instance, 6th grade.',
                inputType: 'text',
                label: 'Educational Level or Field of Study',
            },
            literary: {
                value: '',
                placeholder: 'For instance, a book or a film.',
                inputType: 'text',
                label: 'Literary Work or Movie',
            },
            items: {
                value: '',
                placeholder: 'For example, 25 sets of child-size scissors, four packs of mechanical pencils, and so on.',
                inputType: 'textarea',
                label: 'Items in Demand',
            },
            name: {
                value: '',
                placeholder: 'For example, "Allies".',
                inputType: 'textarea',
                label: 'Name of the Book or Film',
            },
            composer: {
                value: '',
                placeholder: 'For example, Alan Gratz.',
                inputType: 'text',
                label: 'Writer or Filmmaker',
            },
            age_rating: {
                value: '',
                placeholder: 'For example, Ms. Cotant.',
                inputType: 'text',
                label: 'Recommended Audience or Age Rating',
            },
            rating: {
                value: '',
                placeholder: 'For example, PG.',
                inputType: 'text',
                label: 'Recommended Audience or Rating',
            },
            material: {
                value: '',
                placeholder: 'Provide a description of any potentially controversial content, such as scenes involving weapon usage, violent depictions, etc.',
                inputType: 'textarea',
                label: 'Sensitive Material',
            },
            due: {
                value: '',
                placeholder: 'For instance, Wednesday, March 1st.',
                inputType: 'text',
                label: 'Due Date for Returning the Permission Slip',
            },
            contact: {
                value: '',
                placeholder: 'For example, Ms. Cotant',
                inputType: 'text',
                label: 'Name(s) of Contact Person(s)',
            },
            institution: {
                value: '',
                placeholder: 'For example, Maple Middle School.',
                inputType: 'text',
                label: 'Title of Educational Institution',
            },
            details: {
                value: '',
                placeholder: 'For instance, ivy@classpack.com.',
                inputType: 'text',
                label: 'Contact Details',
            },
        }
    },
    {
        type: 'forms',
        category: 'Forms',
        tag: 'forms',
        promptExample: 'Present student accomplishments using an individualized social media release form.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Create a Social Media Release Form ',
        icon:'ti-pencil',
        description: 'Create forms that grant permission to showcase student work or images on social media platforms.',
        inputs: {
            grade: {
                value: '',
                placeholder: 'For instance, 6th grade.',
                inputType: 'text',
                label: 'Educational Level or Field of Study',
            },
            invitations: {
                value: '',
                placeholder: 'For example, general public or invitation only.',
                inputType: 'text',
                label: 'Open to the Public or Limited to Invitations',
            },
            platforms: {
                value: '',
                placeholder: 'For instance, Facebook, Instagram, Twitter, YouTube.',
                inputType: 'text',
                label: 'Online Social Platforms',
            },
            due: {
                value: '',
                placeholder: 'For instance, Wednesday, March 1st.',
                inputType: 'text',
                label: 'Due Date for Returning',
            },
            contact: {
                value: '',
                placeholder: 'For example, Ms. Cotant',
                inputType: 'text',
                label: 'Name(s) of Contact Person(s)',
            },
            institution: {
                value: '',
                placeholder: 'For example, Maple Middle School.',
                inputType: 'text',
                label: 'Title of Educational Institution',
            },
            details: {
                value: '',
                placeholder: 'For instance, ivy@classpack.com.',
                inputType: 'text',
                label: 'Contact Details',
            },
        }
    },
    {
        type: 'sign-ups',
        category: 'Sign-Ups',
        tag: 'sign-up',
        promptExample: 'Present student accomplishments using an individualized social media release form.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Generate a form for volunteers to sign up.',
        icon:'ti-pencil',
        description: 'Create registration forms to gather volunteers for your cause.',
        inputs: {
            grade: {
                value: '',
                placeholder: 'For instance, 6th grade.',
                inputType: 'text',
                label: 'Educational Level or Field of Study',
            },
            directed: {
                value: '',
                placeholder: 'Who is this directed towards?',
                inputType: 'text',
                label: 'Intended Participants or Volunteers',
            },
            situation: {
                value: '',
                placeholder: 'What is the reason for seeking volunteers?',
                inputType: 'text',
                label: 'Occasion or Project',
            },
            assistance: {
                value: '',
                placeholder: 'For instance, Monday, December 20th.',
                inputType: 'text',
                label: 'When do you require assistance?',
            },
            start: {
                value: '',
                placeholder: 'The time they are expected to arrive.',
                inputType: 'text',
                label: 'Beginning Hour',
            },
            conclude: {
                value: '',
                placeholder: 'The time they are expected to finish.',
                inputType: 'text',
                label: 'Concluding Time',
            },
            volunteers: {
                value: '',
                placeholder: 'For example, a range from 1 to 10+.',
                inputType: 'text',
                label: 'How many volunteers are you in need of?',
            },
            educational: {
                value: '',
                placeholder: 'When will you confirm the assistance?',
                inputType: 'text',
                label: 'Date of Confirmation',
            },
            contact: {
                value: '',
                placeholder: 'For example, Ms. Cotant',
                inputType: 'text',
                label: 'Name(s) of Contact Person(s)',
            },
            institution: {
                value: '',
                placeholder: 'For example, Maple Middle School.',
                inputType: 'text',
                label: 'Title of Educational Institution',
            },
            details: {
                value: '',
                placeholder: 'For instance, ivy@classpack.com.',
                inputType: 'text',
                label: 'Contact Details',
            },
        }
    },
    {
        type: 'assessments',
        category: 'Assessments',
        tag: 'assessments',
        promptExample: 'Distinguish a formative assessment by presenting students with a creative challenge that necessitates critical thinking to demonstrate their knowledge.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Develop an alternative method of evaluation.',
        icon:'ti-pencil',
        description: 'Craft an unconventional assessment strategy to gauge student understanding.',
        inputs: {
            evaluation: {
                value: '',
                placeholder: 'For example, Project-Based, Problem-Based, Report-Based, Reflective Piece, Critical Analysis, Case-Based Scenario, and Portfolio.',
                inputType: 'text',
                label: 'Category of Non-Traditional Evaluation',
            },
            grade: {
                value: '',
                placeholder: 'For instance, 6th grade.',
                inputType: 'text',
                label: 'Educational Level or Field of Study',
            },
            subject: {
                value: '',
                placeholder: 'Indicate the overarching subject or provide an official standard.',
                inputType: 'textarea',
                label: 'Subject Matter or Learning Objective',
            },
            details: {
                value: '',
                placeholder: 'Indicate the overarching subject or provide an official standard.',
                inputType: 'textarea',
                label: 'Supplementary Details',
            },
        }
    },
    {
        type: 'lesson',
        category: 'Lesson Planning',
        tag: 'lesson',
        promptExample: 'Although precautions are in place, the system might occasionally produce inaccurate or deceptive information. Its advisable to verify the results.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Create a lesson plan structured around the Five-E framework.',
        icon:'ti-pencil',
        description: 'Devise a lesson plan that encourages active learning through five well-defined stages.',
        inputs: {
            duration: {
                value: '',
                placeholder: 'For example, 45 minutes.',
                inputType: 'text',
                label: 'Duration of the Lesson',
            },
            grade: {
                value: '',
                placeholder: 'For example, 8th grade.',
                inputType: 'text',
                label: 'Educational Level',
            },
            situation: {
                value: '',
                placeholder: 'For example, Mathematics, English Language Arts, Social Studies, Science, or Fine Arts.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
            standard: {
                value: '',
                placeholder: 'Indicate the overarching subject or provide an official standard.',
                inputType: 'textarea',
                label: 'Subject Matter or Learning Objective',
            },
        }
    },
    {
        type: 'email',
        category: 'Email',
        tag: 'email',
        promptExample: 'Although precautions are in place, the system might occasionally produce inaccurate or deceptive information. Its advisable to verify the results.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Creating an Effective Subject Line',
        icon:'ti-pencil',
        description: 'Generate Email Subject Lines for Instant Content Summarization',
        inputs: {
            tone: {
                value: '',
                placeholder: 'Examples: Professional, Friendly, Positive, Casual, Urgent, Apologetic, Informal, Critical',
                inputType: 'text',
                label: 'Tone',
            },
            email: {
                value: '',
                placeholder: 'Paste the email here.',
                inputType: 'text',
                label: 'Email Content',
            },
        }
    },
    {
        type: 'curriculum',
        category: 'Curriculum',
        tag: 'curriculum',
        promptExample: 'Save time by producing a custom piece of writing that directly aligns with your learning goal.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Generate an Article, Passage, or Short Story',
        icon:'ti-pencil',
        description: 'Instantly create content that is tailored to your individual needs and requirements.',
        inputs: {
            type: {
                value: '',
                placeholder: 'Examples: Article, Passage or Story',
                inputType: 'text',
                label: 'Type of Text',
            },
            grade: {
                value: '',
                placeholder: 'Example: 8th grade.',
                inputType: 'text',
                label: 'Grade Level',
            },
            situation: {
                value: '',
                placeholder: 'State the general topic or paste an official standard.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
            information: {
                value: '',
                placeholder: 'What specific information would you like included? ',
                inputType: 'textarea',
                label: 'Information to Include',
            },
        }
    },
    {
        type: 'lesson',
        category: 'Lesson Planning',
        tag: 'lesson',
        promptExample: 'Save time by producing a custom piece of writing that directly aligns with your learning goal.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Generate an Article, Passage, or Short Story',
        icon:'ti-pencil',
        description: 'Instantly create content that is tailored to your individual needs and requirements.',
        inputs: {
            type: {
                value: '',
                placeholder: 'Examples: Article, Passage or Story',
                inputType: 'text',
                label: 'Type of Text',
            },
            grade: {
                value: '',
                placeholder: 'Example: 8th grade.',
                inputType: 'text',
                label: 'Grade Level',
            },
            situation: {
                value: '',
                placeholder: 'State the general topic or paste an official standard.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
            include: {
                value: '',
                placeholder: 'What specific information would you like included? ',
                inputType: 'textarea',
                label: 'Information to Include',
            },
        }
    },
    {
        type: 'lesson',
        category: 'Lesson Planning',
        tag: 'lesson',
        promptExample: 'While we have safeguards in place, the system may occasionally generate incorrect or misleading information. Please double-check results.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Generate an Explicit Lesson Plan',
        icon:'ti-pencil',
        description: 'Design a direct instruction lesson with clear goals, structure, and organization.',
        inputs: {
            lesson: {
                value: '',
                placeholder: 'Examples: 45 minutes',
                inputType: 'text',
                label: 'Lesson Length',
            },
            grade: {
                value: '',
                placeholder: 'Example: 8th grade.',
                inputType: 'text',
                label: 'Grade Level',
            },
            subject: {
                value: '',
                placeholder: 'Example, Mathematics, English Language Arts, Social Studies, Science, or Fine Arts.',
                inputType: 'textarea',
                label: 'Subject',
            },
            situation: {
                value: '',
                placeholder: 'State the general topic or paste an official standard.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
        }
    },
    {
        type: 'lesson',
        category: 'Lesson Planning',
        tag: 'lesson',
        promptExample: 'While we have safeguards in place, the system may occasionally generate incorrect or misleading information. Please double-check results.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Generate an Inquiry-Based Lesson Plan',
        icon:'ti-pencil',
        description: 'Design a student-led lesson that prioritizes critical thinking, exploration, and discovery.',
        inputs: {
            lesson: {
                value: '',
                placeholder: 'Examples: 45 minutes',
                inputType: 'text',
                label: 'Lesson Length',
            },
            grade: {
                value: '',
                placeholder: 'Example: 8th grade.',
                inputType: 'text',
                label: 'Grade Level',
            },
            subject: {
                value: '',
                placeholder: 'Example, Mathematics, English Language Arts, Social Studies, Science, or Fine Arts.',
                inputType: 'textarea',
                label: 'Subject',
            },
            situation: {
                value: '',
                placeholder: 'State the general topic or paste an official standard.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
        }
    },
    {
        type: 'relationships',
        category: 'Relationships',
        tag: 'relationships',
        promptExample: 'While we have safeguards in place, the system may occasionally generate incorrect or misleading information. Please double-check results.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Produce Feedback or Constructive Criticism',
        icon:'ti-pencil',
        description: 'Provide colleagues and students with valuable support and guidance.',
        inputs: {
            regarding: {
                value: '',
                placeholder: 'Examples: Colleague or Students',
                inputType: 'text',
                label: 'Who Is This Regarding?',
            },
            name: {
                value: '',
                placeholder: 'Example: Jonathan',
                inputType: 'text',
                label: 'Student or Colleague First Name',
            },
            aspects: {
                value: '',
                placeholder: 'What do you appreciate about this person, their work, or their work ethic?',
                inputType: 'textarea',
                label: 'List of Positive Aspects',
            },
            areas: {
                value: '',
                placeholder: 'What areas need improvement in regards to this person, their work, or their work ethic?',
                inputType: 'textarea',
                label: 'List of Areas to Improve Upon',
            },
        }
    },
    {
        type: 'letter',
        category: 'Letter',
        tag: 'letter',
        promptExample: '',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Write a Letter of Recommendation',
        icon:'ti-pencil',
        description: 'Write professional letters that emphasize strengths and accomplishments.',
        inputs: {
            consideration: {
                value: '',
                placeholder: 'To whom is this addressed? ',
                inputType: 'text',
                label: 'Audience or Recipient',
            },
            subject: {
                value: '',
                placeholder: 'Who is this letter about? ',
                inputType: 'text',
                label: 'Name of Subject',
            },
            role: {
                value: '',
                placeholder: 'e.g., Instructional Coach',
                inputType: 'textarea',
                label: 'Title of Position/Role Being Sought',
            },
            relationship: {
                value: '',
                placeholder: 'e.g., 2 years',
                inputType: 'textarea',
                label: 'Length of Relationship',
            },
            type: {
                value: '',
                placeholder: 'How do you know this person?',
                inputType: 'textarea',
                label: 'Relationship Type and History',
            },
            basis: {
                value: '',
                placeholder: 'What are the reasons you are recommending this individual? Describe their relevant traits and qualities.',
                inputType: 'textarea',
                label: 'General Basis for Recommendation',
            },
            evidence: {
                value: '',
                placeholder: 'Validate your recommendation with a personal story about the subject.',
                inputType: 'textarea',
                label: 'Personalized Supporting Evidence',
            },
            sender: {
                value: '',
                placeholder: 'e.g., Ms. Cotant',
                inputType: 'text',
                label: 'Sender Name',
            },
            title: {
                value: '',
                placeholder: 'e.g., Facilitator',
                inputType: 'text',
                label: 'Your Professional Title',
            },
            contact: {
                value: '',
                placeholder: 'e.g., ivy@classpack.com',
                inputType: 'text',
                label: 'Contact Information',
            },
        }
    },
    {
        type: 'reminders',
        category: 'Reminders',
        tag: 'reminders',
        promptExample: 'Improve your text messaging by crafting concise, impactful, and efficient messages.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Write a Text Message Reminder or Notification',
        icon:'ti-pencil',
        description: 'Write professional letters that emphasize strengths and accomplishments.',
        inputs: {
            prompt: {
                value: '',
                placeholder: 'Example: Reminder or Notification',
                inputType: 'text',
                label: 'Reminder or Notification',
            },
            consideration: {
                value: '',
                placeholder: 'To whom is this addressed? ',
                inputType: 'text',
                label: 'Audience or Recipient',
            },
            count: {
                value: '',
                placeholder: 'e.g., 20 words or less',
                inputType: 'textarea',
                label: 'Preferred Word Count',
            },
            information: {
                value: '',
                placeholder: 'What specific information would you like included? ',
                inputType: 'textarea',
                label: 'Information to Include',
            }
        }
    },
    {
        type: 'email',
        category: 'Email',
        tag: 'email',
        promptExample: 'Improve your text messaging by crafting concise, impactful, and efficient messages.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Write an Email',
        icon:'ti-pencil',
        description: 'Generate effective emails with personalized tone and content.',
        inputs: {
            tone: {
                value: '',
                placeholder: 'Examples: Professional, Friendly, Positive, Casual, Urgent, Apologetic, Informal, Critical',
                inputType: 'text',
                label: 'Tone',
            },
            sender: {
                value: '',
                placeholder: 'e.g., Ms. Cotant',
                inputType: 'text',
                label: 'Sender Name',
            },
            consideration : {
                value: '',
                placeholder: 'To whom is this addressed? ',
                inputType: 'textarea',
                label: 'Audience or Recipient',
            },
            selection: {
                value: '',
                placeholder: 'What specific information would you like included?',
                inputType: 'textarea',
                label: 'Information to Include',
            }
        }
    },

    // Modify Section
    {
        type: 'language_arts',
        category: 'Language Arts',
        tag: 'language_arts',
        promptExample: 'Simplify a confusing paragraph by breaking it down into a smaller chunk.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Condense or Expand a Paragraph',
        icon:'ti-arrows-double-sw-ne',
        description: 'Shorten or lengthen content to meet your intent and purpose.',
        inputs: {
            concept: {
                value: '',
                placeholder: 'Examples: Condensed or Expand',
                inputType: 'text',
                label: 'Condense or Expand',
            },
            paragraph: {
                value: '',
                placeholder: 'Paste paragraph here.',
                inputType: 'text',
                label: 'Original Paragraph',
            },
        }
    },
    {
        type: 'language_arts',
        category: 'Language Arts',
        tag: 'language_arts',
        promptExample: 'Correct a students inconsistent use of past, present, and future tense.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Correct Inconsistent Tenses',
        icon:'ti-refresh',
        description: 'Create a cohesive and coherent piece of writing by ensuring tenses are consistent.',
        inputs: {
            passage: {
                value: '',
                placeholder: 'e.g., Yesterday, I walk to the store and buy some milk.',
                inputType: 'text',
                label: 'Text or Passage',
            },
            tense: {
                value: '',
                placeholder: 'Example: Past, Present or Future',
                inputType: 'text',
                label: 'Choose a Tense',
            },
        }
    },
    {
        type: 'language_arts',
        category: 'Language Arts',
        tag: 'language_arts',
        promptExample: '',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Correct a Sentence',
        icon:'ti-circle-check',
        description: 'Quickly and accurately resolve basic grammar, spelling, punctuation, and syntax errors.',
        inputs: {
            situation: {
                value: '',
                placeholder: 'Paste sentence here.',
                inputType: 'text',
                label: 'Sentence or Text',
            },
        }
    },
    {
        type: 'curriculum',
        category: 'Curriculum Arts',
        tag: 'curriculum',
        promptExample: 'Use this to adapt your process, products, and assessments.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Differentiate Your Instruction',
        icon:'ti-adjustments',
        description: 'Discover how to tweak instruction to meet the needs of different learners.',
        inputs: {
            grade: {
                value: '',
                placeholder: 'e.g., 6th grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            cognitive: {
                value: '',
                placeholder: 'Are there any cognitive struggles or talents that should be noted?',
                inputType: 'textarea',
                label: 'Range of Cognitive Abilities',
            },
            styles: {
                value: '',
                placeholder: 'What learning styles would you like addressed? i.e., visual, kinesthetic, aural, social, verbal, solitary, logical, etc.',
                inputType: 'textarea',
                label: 'Different Learning Styles',
            },
            interest: {
                value: '',
                placeholder: 'Are there any student interests you would like included?',
                inputType: 'textarea',
                label: 'Group Interests',
            },
            goal: {
                value: '',
                placeholder: 'What learning goal(s) would you like differentiated? Feel free to include specific standards or lesson requirements.',
                inputType: 'textarea',
                label: 'Teacher Learning Goal(s)',
            },
        }
    },
    {
        type: 'language_arts',
        category: 'Language Arts',
        tag: 'language_arts',
        promptExample: 'Show students how using dialogue can improve their writing.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Improve Creative Writing',
        icon:'ti-message-circle',
        description: 'Engage readers and bring writing to life by adding dialogue and descriptive language.',
        inputs: {
            passage: {
                value: '',
                placeholder: 'Paste text or passage here.',
                inputType: 'text',
                label: 'Original Text or Passage',
            },
        }
    },
    {
        type: 'language_arts',
        category: 'Language Arts',
        tag: 'language_arts',
        promptExample: 'Reshape student work to show alternate possibilities.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Improve Non-Fiction Writing',
        icon:'ti-list',
        description: 'Restructure and enhance writing, making it easier to read and understand.',
        inputs: {
            passage: {
                value: '',
                placeholder: 'Paste text or passage here.',
                inputType: 'text',
                label: 'Original Text or Passage',
            },
        }
    },
    {
        type: 'language_arts',
        category: 'Language Arts',
        tag: 'language_arts',
        promptExample: 'Change the tone of your email to convey a sense of urgency.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Refine an Email',
        icon:'ti-refresh',
        description: 'Enhance the effectiveness of your emails by improving the tone, clarity, and impact.',
        inputs: {
            tone: {
                value: '',
                placeholder: 'Examples: Professional, Friendly, Positive, Casual, Urgent, Apologetic, Informal, Critical',
                inputType: 'text',
                label: 'Tone',
            },
            email: {
                value: '',
                placeholder: 'Paste the email here.',
                inputType: 'textarea',
                label: 'Email Content',
            },
        }
    },
    {
        type: 'email',
        category: 'Email',
        tag: 'email',
        promptExample: 'Change the tone of your email to convey a sense of urgency.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Refine an Email',
        icon:'ti-refresh',
        description: 'Enhance the effectiveness of your emails by improving the tone, clarity, and impact.',
        inputs: {
            tone: {
                value: '',
                placeholder: 'Examples: Professional, Friendly, Positive, Casual, Urgent, Apologetic, Informal, Critical',
                inputType: 'text',
                label: 'Tone',
            },
            email: {
                value: '',
                placeholder: 'Paste the email here.',
                inputType: 'textarea',
                label: 'Email Content',
            },
        }
    },
    {
        type: 'curriculum',
        category: 'Curriculum',
        tag: 'curriculum',
        promptExample: 'Change the tone of your email to convey a sense of urgency.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Rephrase or Summarize a Piece of Text',
        icon:'ti-refresh',
        description: 'Alter content to clarify ideas, focus on key points, and aid in memory retention.',
        inputs: {
            overview: {
                value: '',
                placeholder: 'Examples: Rephrase or  Summarize',
                inputType: 'text',
                label: 'Rephrase or Summarize',
            },
            passage: {
                value: '',
                placeholder: 'Paste text or passage here.',
                inputType: 'textarea',
                label: 'Original Text or Passage',
            },
        }
    },
    {
        type: 'language_arts',
        category: 'Language Arts',
        tag: 'language_arts',
        promptExample: 'Change the point of view to teach students about narrative techniques, critical thinking skills, and empathy.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Switch Between First, Second, and Third Person',
        icon:'ti-refresh',
        description: 'Experiment with different points of view to broaden your writing perspectives.',
        inputs: {
            view: {
                value: '',
                placeholder: 'Examples: First Person, Second Person or Third Person',
                inputType: 'text',
                label: 'Choose a Point of View',
            },
            passage: {
                value: '',
                placeholder: 'Paste text or passage here.',
                inputType: 'textarea',
                label: 'Original Text or Passage',
            },
        }
    },
    {
        type: 'classroom',
        category: 'Classroom',
        tag: 'classroom',
        promptExample: '',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Translate Writing to Another Language',
        icon:'ti-refresh',
        description: 'Convert written content from one language to another.',
        inputs: {
            language: {
                value: '',
                placeholder: 'Examples: Spanish',
                inputType: 'text',
                label: 'Language',
            },
            passage: {
                value: '',
                placeholder: 'Paste text or passage here.',
                inputType: 'textarea',
                label: 'Original Text or Passage',
            },
        }
    },

    // Manage Section
    {
        type: 'classroom',
        category: 'Classroom',
        tag: 'classroom',
        promptExample: 'Improve performance and behavior by creating a positive classroom climate.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Enhance Your Classroom Environment',
        icon:'ti-mood-smile',
        description: 'Discover techniques for enhancing the overall environment of your classroom.',
        inputs: {
            grade: {
                value: '',
                placeholder: 'Examples: 6th grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
        }
    },
    {
        type: 'classroom',
        category: 'Classroom',
        tag: 'classroom',
        promptExample: '',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Foster Student Motivation',
        icon:'ti-user-plus',
        description: 'Discover methods to enhance student motivation.',
        inputs: {
            grade: {
                value: '',
                placeholder: 'Examples: 6th grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            needs: {
                value: '',
                placeholder: 'Which areas of motivation are a struggle? e.g., work completion, on-task behavior, etc.',
                inputType: 'text',
                label: 'Motivational Needs',
            },
        }
    },
    {
        type: 'classroom',
        category: 'Classroom',
        tag: 'classroom',
        promptExample: '',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Identify Behavior Patterns',
        icon:'ti-user-plus',
        description: 'Analyze problem behaviors and detect possible patterns.',
        inputs: {
            grade: {
                value: '',
                placeholder: 'Examples: 12 years old',
                inputType: 'text',
                label: 'Student Age or Grade Level',
            },
            behavior: {
                value: '',
                placeholder: 'List any relevant behavior incidents.',
                inputType: 'textarea',
                label: 'Behavior Incidents',
            },
            action: {
                value: '',
                placeholder: 'List any past disciplinary action.',
                inputType: 'textarea',
                label: 'Disciplinary Action Taken',
            },
            performance: {
                value: '',
                placeholder: 'How does this student perform academically?',
                inputType: 'textarea',
                label: 'Academic Performance',
            },
            attendance: {
                value: '',
                placeholder: 'Does this student have problematic attendance? i.e., Consistent excused or unexcused tardies/absences, etc.',
                inputType: 'textarea',
                label: 'Attendance History',
            },
            development: {
                value: '',
                placeholder: 'e.g., on grade, behind, ahead',
                inputType: 'text',
                label: 'Status of Social Emotional Development ',
            },
            background: {
                value: '',
                placeholder: 'e.g., single parent home',
                inputType: 'textarea',
                label: 'Family Background',
            },
            environment: {
                value: '',
                placeholder: 'Describe the school environment. i.e., Does the student receive any special services, etc.?',
                inputType: 'textarea',
                label: 'School Environment',
            },
            information: {
                value: '',
                placeholder: 'Is there any additional information you would like noted?',
                inputType: 'textarea',
                label: 'Additional Information',
            },
        }
    },
    {
        type: 'classroom',
        category: 'Classroom',
        tag: 'classroom',
        promptExample: 'Verify whether or not student behavior aligns with their age and development stage.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Learn About Social and Emotional Development',
        icon:'ti-thumb-up',
        description: 'Explore the social and emotional growth of students.',
        inputs: {
            grade: {
                value: '',
                placeholder: 'Examples: 8th grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
        }
    },
    {
        type: 'classroom',
        category: 'Classroom',
        tag: 'classroom',
        promptExample: 'Create a safe learning environment that promotes student responsibility.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Manage Problem Behavior',
        icon:'ti-circle-x',
        description: 'Discover effective strategies for handling challenging behavior.',
        inputs: {
            grade: {
                value: '',
                placeholder: 'Examples: 6th grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            behavior: {
                value: '',
                placeholder: 'e.g., throwing chairs, ignoring instructions, etc. ',
                inputType: 'textarea',
                label: 'Problematic Behavior(s)',
            },
        }
    },
    {
        type: 'relationships',
        category: 'Relatioships',
        tag: 'relationships',
        promptExample: 'Create a safe learning environment that promotes student responsibility.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Strengthen Teacher - Student Relationships',
        icon:'ti-users',
        description: 'Generate ideas for building relationships with students.',
        inputs: {
            grade: {
                value: '',
                placeholder: 'Example: 6th grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
        }
    },

    //Organize Section
    {
        type: 'classroom',
        category: 'Classroom',
        tag: 'classroom',
        promptExample: 'Find patterns and preferences in what students read by classifying their favorite books.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Categorize Information and Ideas',
        icon:'ti-list',
        description: 'Streamline the process of categorizing and classifying information.',
        inputs: {
            choice: {
                value: '',
                placeholder: 'Input any information that you would like categorized, classified, or grouped.',
                inputType: 'text',
                label: 'Information or Ideas',
            },
        }
    },
    {
        type: 'language_type',
        category: 'language Type',
        tag: 'language_type',
        promptExample: 'Establish a baseline for students by providing them with a unified framework.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Create a Framework for Writing',
        icon:'ti-list',
        description: 'Develop a clear and organized writing outline based on a given prompt.',
        inputs: {
            type: {
                value: '',
                placeholder: 'Example: Narrative, Expository, Opinion, Persuasive, Creative, Informative and Journal',
                inputType: 'text',
                label: 'Type of Writing',
            },
            grade: {
                value: '',
                placeholder: 'Example: 6th grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            prompt: {
                value: '',
                placeholder: 'What is the writing prompt or topic for this outline?',
                inputType: 'text',
                label: 'Writing Prompt',
            },
        }
    },
    {
        type: 'classroom',
        category: 'Classroom',
        tag: 'classroom',
        promptExample: '',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Generate Groups or Partnerships',
        icon:'ti-folder',
        description: 'Create random student groupings with just a few clicks.',
        inputs: {
            names: {
                value: '',
                placeholder: 'Example: John, Paige, Xavier',
                inputType: 'text',
                label: 'List of Names',
            },
            group: {
                value: '',
                placeholder: 'Example: People per Group or Number of Groupings',
                inputType: 'text',
                label: 'Group by',
            },
            number: {
                value: '',
                placeholder: 'Example: 4',
                inputType: 'text',
                label: 'Desired Number',
            },
        }
    },
    {
        type: 'science_math',
        category: 'Science And Math',
        tag: 'science_math',
        promptExample: 'Explain a math concept to a student using a different approach or break down an entire unit of study.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Generate Step-by-Step Teaching Directions',
        icon:'ti-list',
        description: 'Break down concepts so that you can teach with clarity.',
        inputs: {
            grade: {
                value: '',
                placeholder: 'Example: 6th grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            scenario: {
                value: '',
                placeholder: 'State the math or science concept and/or include an official standard.',
                inputType: 'text',
                label: 'Concept or Standard',
            },
        }
    },
    {
        type: 'organization',
        category: 'Organization',
        tag: 'organization',
        promptExample: 'Enrich a science lesson on "Magnets and Functional Devices" by discovering ten devices that use magnetic forces.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Generate a List',
        icon:'ti-list',
        description: 'Identify and organize key information around any subject matter.',
        inputs: {
            topic: {
                value: '',
                placeholder: 'State the topic and details you want to be listed. e.g., Name the first ten astronauts to travel in space.',
                inputType: 'textarea',
                label: 'Topic',
            },
        }
    },

    // Explore Section
    {
        type: 'curriculum',
        category: 'Curriculum',
        tag: 'curriculum',
        promptExample: 'Increase understanding by generating connections between concepts.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Complete an Analogy',
        icon:'ti-layout-columns',
        description: 'Enhance comprehension by creating links between concepts.',
        inputs: {
            topic_one: {
                value: '',
                placeholder: 'e.g., states of matter',
                inputType: 'text',
                label: 'Topic',
            },
            topic_two: {
                value: '',
                placeholder: 'e.g., Berlin Wall',
                inputType: 'text',
                label: 'Topic 2',
            },
        }
    },
    {
        type: 'language_arts',
        category: 'Language Arts',
        tag: 'language_arts',
        promptExample: 'Improve thinking skills and enhance comprehension with critical analysis of any text.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Critically Analyze a Piece of Text',
        icon:'ti-layout-columns',
        description: 'Objectively examine written work to evaluate its strengths and weaknesses.',
        inputs: {
            passage: {
                value: '',
                placeholder: 'Paste text or passage here.',
                inputType: 'text',
                label: 'Original Text or Passage',
            },
        }
    },
    {
        type: 'language_arts',
        category: 'Language Arts',
        tag: 'language_arts',
        promptExample: 'Generate inferences based on President Roosevelts "Man in the Arena" speech.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Draw Conclusions From a Piece of Writing',
        icon:'ti-notebook',
        description: 'Make inferences and conclusions to read between the lines.',
        inputs: {
            passage: {
                value: '',
                placeholder: 'Paste text or passage here.',
                inputType: 'text',
                label: 'Original Text or Passage',
            },
        }
    },
    {
        type: 'social_studies',
        category: 'Social Studies',
        tag: 'social_studies',
        promptExample: 'Find the effect, or turning point, of events to help students understand their impact on society, both then and now.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Examine Historical Impacts',
        icon:'ti-globe',
        description: 'Explore how historical events have shaped the world.',
        inputs: {
            event: {
                value: '',
                placeholder: 'Example: World War II in Europe',
                inputType: 'text',
                label: 'Historical Event',
            },
            situation: {
                value: '',
                placeholder: 'Example: Effect or Turning Point',
                inputType: 'text',
                label: 'Find the Effect or Turning Point',
            },
        }
    },
    {
        type: 'curriculum',
        category: 'Curriculum',
        tag: 'curriculum',
        promptExample: 'Help students broaden their knowledge and gain a deeper understanding of the theory of relativity.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Explore the Origins of Any Given Thing',
        icon:'ti-corner-down-right',
        description: 'Explore the origins of discoveries, languages, customs, cultures, and more',
        inputs: {
            grade: {
                value: '',
                placeholder: 'Example: 6th Grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            topic: {
                value: '',
                placeholder: 'Example: States of matter',
                inputType: 'text',
                label: 'Topic',
            },
        }
    },
    {
        type: 'curriculum',
        category: 'Curriculum',
        tag: 'curriculum',
        promptExample: 'Facilitate class discussions by comparing and contrasting different topics related to a specific content area.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Find Similarities and Differences',
        icon:'ti-layout-columns',
        description: 'Identify similarities and differences between two ideas.',
        inputs: {
            topic_one: {
                value: '',
                placeholder: 'Example: Great Wall of China',
                inputType: 'textarea',
                label: 'Topic 1',
            },
            topic_two: {
                value: '',
                placeholder: 'Example: Berlin Wall',
                inputType: 'textarea',
                label: 'Topic 2',
            },
            similarities: {
                value: '',
                placeholder: 'Example: 1 or 5',
                inputType: 'text',
                label: 'Preferred Number of Similarities',
            },
            differences: {
                value: '',
                placeholder: 'Example: 1 or 5',
                inputType: 'text',
                label: 'Preferred Number of Differences',
            },
        }
    },
    {
        type: 'curriculum',
        category: 'Curriculum',
        tag: 'curriculum',
        promptExample: 'Help students celebrate the first day of spring while learning about its unique history.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Find a Project Idea',
        icon:'ti-search',
        description: 'Generate a project or activity that is aligned with your individual classroom needs.',
        inputs: {
            grade: {
                value: '',
                placeholder: 'Example: 6th Grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            field: {
                value: '',
                placeholder: 'State the general topic or paste an official standard.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
        }
    },
    {
        type: 'science_math',
        category: 'Science And Math',
        tag: 'science_math',
        promptExample: 'Save time and effort by generating an experiment that aligns with specific goals and requirements.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Find a Science or Math Experiment',
        icon:'ti-search',
        description: 'Discover engaging ways to test theories and hypotheses through hands-on experimentation.',
        inputs: {
            grade: {
                value: '',
                placeholder: 'Example: 6th Grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            field: {
                value: '',
                placeholder: 'State the general topic or paste an official standard.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
        }
    },
    {
        type: 'curriculum',
        category: 'Curriculum',
        tag: 'curriculum',
        promptExample: 'While we have safeguards in place, the system may occasionally generate incorrect or misleading information. Please double-check examples.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Find an Example',
        icon:'ti-search',
        description: 'Discover examples that can help reinforce concepts.',
        inputs: {
            grade: {
                value: '',
                placeholder: 'Example: 6th Grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            field: {
                value: '',
                placeholder: 'State the general topic or paste an official standard.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
        }
    },
    {
        type: 'language_arts',
        category: 'Language Arts',
        tag: 'language_arts',
        promptExample: '',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Generate Comprehension Questions',
        icon:'ti-list',
        description: 'Quickly craft a variety of engaging questions based on any written text.',
        inputs: {
            questions: {
                value: '',
                placeholder: 'Example: 1 or 5',
                inputType: 'text',
                label: 'How Many Questions Would You Like?',
            },
            type: {
                value: '',
                placeholder: 'Example: Factual, Vocabulary, Analytic or Inferential',
                inputType: 'text',
                label: 'Type of Question(s)',
            },
            passage: {
                value: '',
                placeholder: 'Paste text or passage here.',
                inputType: 'textarea',
                label: 'Original Text or Passage',
            },
        }
    },
    {
        type: 'relationships',
        category: 'Relationships',
        tag: 'relationships',
        promptExample: '',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Generate Interview Questions',
        icon:'ti-question-mark',
        description: 'Produce interview questions for any audience, objective or intent.',
        inputs: {
            questions: {
                value: '',
                placeholder: 'Example: 1 or 5',
                inputType: 'text',
                label: 'How Many Questions Would You Like?',
            },
            purpose: {
                value: '',
                placeholder: 'Example: Hiring or Evaluating',
                inputType: 'text',
                label: 'What is Your Purpose?',
            },
            role: {
                value: '',
                placeholder: 'Example: teacher or potential aide?',
                inputType: 'text',
                label: 'What is the Respondents Role or Potential Role?',
            },
        }
    },
    {
        type: 'curriculum',
        category: 'Curriculum',
        tag: 'curriculum',
        promptExample: '',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Generate Writing Prompts',
        icon:'ti-pencil',
        description: 'Produce custom-made writing prompts based on any text or topic.',
        inputs: {
            type: {
                value: '',
                placeholder: 'Example: Narrative, Expository, Opinion, Persuasive, Creative, Informative and Journal',
                inputType: 'text',
                label: 'Type of Writing',
            },
            grade: {
                value: '',
                placeholder: 'Example: 6th Grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            topic: {
                value: '',
                placeholder: 'Example: states of matter',
                inputType: 'text',
                label: 'Topic',
            },
            passage: {
                value: '',
                placeholder: 'Paste text or passage here.',
                inputType: 'textarea',
                label: 'Original Text or Passage',
            },
        }
    },
    {
        type: 'support',
        category: 'Support',
        tag: 'support',
        promptExample: '',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Get Advice',
        icon:'ti-lifebuoy',
        description: 'Get help with career and classroom-related challenges.',
        inputs: {
            need: {
                value: '',
                placeholder: 'Example: Student, Colleague, Administration, Parent or General',
                inputType: 'text',
                label: 'What Do You Need Help With?',
            },
            problem: {
                value: '',
                placeholder: 'Example: My colleague undermined me in front of a student.',
                inputType: 'textarea',
                label: 'What is the Problem?',
            },
        }
    },
    {
        type: 'social_studies',
        category: 'Social Studies',
        tag: 'social_studies',
        promptExample: 'Ensure you cover all important historical events and people related to a topic.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Identify Historical Figures and Moments',
        icon:'ti-clock',
        description: 'Discover important figures and events from any time period in history.',
        inputs: {
            figures: {
                value: '',
                placeholder: 'Example: Discover Historical Figures  or Highlight Key Moments',
                inputType: 'text',
                label: 'Discover Historical Figures or Highlight Key Moments',
            },
            history: {
                value: '',
                placeholder: 'Example: U.S or World',
                inputType: 'text',
                label: 'U.S. or World History',
            },
            period: {
                value: '',
                placeholder: 'Example: 1930s-1940s',
                inputType: 'text',
                label: 'Time Period',
            },
        }
    },
    {
        type: 'language_arts',
        category: 'Language Arts',
        tag: 'language_arts',
        promptExample: '',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Identify Themes and Main Ideas',
        icon:'ti-list',
        description: 'Quickly identify the primary concepts from any passage, article, or piece of text.',
        inputs: {
            passage: {
                value: '',
                placeholder: 'Paste text or passage here.',
                inputType: 'textarea',
                label: 'Original Text or Passage',
            },
        }
    },
    {
        type: 'curriculum',
        category: 'Curriculum',
        tag: 'curriculum',
        promptExample: 'Identify the key principles of a chemical reaction.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Identify the Key Principles of a Concept',
        icon:'ti-list',
        description: 'Explore the fundamental components of any concept or standard.',
        inputs: {
            information: {
                value: '',
                placeholder: 'Paste topic, standard, or piece of text here.',
                inputType: 'textarea',
                label: 'Ideas or Information',
            },
        }
    },
    {
        type: 'curriculum',
        category: 'Curriculum',
        tag: 'curriculum',
        promptExample: '',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Simplify a Concept',
        icon:'ti-search',
        description: 'Make a topic or standard more accessible by discovering clear and simplified explanations.',
        inputs: {
            grade: {
                value: '',
                placeholder: 'Example: 6th grade.',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            field: {
                value: '',
                placeholder: 'State the general topic or paste an official standard.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
        }
    },
    {
        type: 'social_studies',
        category: 'Social Studies',
        tag: 'social_studies',
        promptExample: 'Help students gain understanding, foster compassion, and identify historical trends',
        systemPrompt: '',
        title: 'View History From Any Angle',
        icon:'ti-eye',
        description: 'Use different viewpoints and perspectives to examine history from multiple angles.',
        inputs: {
            event: {
                value: '',
                placeholder: 'Example: World War II in Europe',
                inputType: 'text',
                label: 'Historical Event',
            },
        }
    },
];