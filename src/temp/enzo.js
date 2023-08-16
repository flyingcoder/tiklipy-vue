export default [
    {
        type: 'poem',
        category: 'Language Type',
        tag: 'write',
        promptExample: '',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
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
        promptExample: 'Although we have protective measures, the system might sometimes produce inaccurate or deceptive information. Kindly verify responses.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Generate conventional evaluation inquiries.',
        icon:'ti-pencil',
        description: 'Create queries designed to assess student comprehension.',
        inputs: {
            subject: {
                value: '',
                placeholder: 'Indicate the overarching subject or insert an official standard.',
                inputType: 'textarea',
                label: 'Subject or Criterion',
            },
            questions: {
                value: '',
                placeholder: 'For instance, 1 or a range from 2 to 10.',
                inputType: 'text',
                label: 'How many questions do you desire?',
            },
            type: {
                value: '',
                placeholder: 'For example, multiple choice, true or false, fill in the blank, short answer essay, or numeric response.',
                inputType: 'text',
                label: 'Kind of Inquiries',
            },
        }
    },
    {
        type: 'forms',
        category: 'Forms',
        tag: 'write',
        promptExample: 'Computer Laborator Supervisor Auxiliary report.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Formulate a solicitation for donations or supplies.',
        icon:'ti-user-check',
        description: 'Craft personalized appeals for donations or supplies to meet specific needs.',
        inputs: {
            field: {
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
            items: {
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
            contact: {
                value: '',
                placeholder: 'For example, Ms. Cotant.',
                inputType: 'text',
                label: 'Name(s) of Point of Contact',
            },
            educational: {
                value: '',
                placeholder: 'For instance, Maple Middle School.',
                inputType: 'text',
                label: 'Title of Educational Establishment',
            },
            educational: {
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
        promptExample: 'Computer Laborator Supervisor Auxiliary report.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Generate a document for obtaining field trip permissions.',
        icon:'ti-user-check',
        description: 'Generate a permission slip for students to participate in an off-campus excursion.',
        inputs: {
            level: {
                value: '',
                placeholder: 'For example, 6th grade.',
                inputType: 'text',
                label: 'Educational Level or Discipline',
            },
            location: {
                value: '',
                placeholder: 'For example, Museum of Art.',
                inputType: 'text',
                label: 'Location of Visit',
            },
            field: {
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
            method: {
                value: '',
                placeholder: 'For example, school bus, walking, etc.',
                inputType: 'text',
                label: 'Method of Travel',
            },
            choices: {
                value: '',
                placeholder: 'Due Date for Returning the Permission Slip',
                inputType: 'text',
                label: 'Provide the choice for school-provided lunch or home-packed lunch.',
            },
            permission: {
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
        tag: 'write',
        promptExample: 'Computer Laborator Supervisor Auxiliary report.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Generate a consent form for reading or viewing media.',
        icon:'ti-user-check',
        description: 'Design permission slips granting students permission to access and engage with specific media content.',
        inputs: {
            field: {
                value: '',
                placeholder: 'For instance, 6th grade.',
                inputType: 'text',
                label: 'Educational Level or Field of Study',
            },
            target: {
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
            accasion: {
                value: '',
                placeholder: 'For example, "Allies".',
                inputType: 'textarea',
                label: 'Name of the Book or Film',
            },
            deadline: {
                value: '',
                placeholder: 'For example, Alan Gratz.',
                inputType: 'text',
                label: 'Writer or Filmmaker',
            },
            contact: {
                value: '',
                placeholder: 'For example, Ms. Cotant.',
                inputType: 'text',
                label: 'Recommended Audience or Age Rating',
            },
            educational: {
                value: '',
                placeholder: 'For example, PG.',
                inputType: 'text',
                label: 'Recommended Audience or Rating',
            },
            educational: {
                value: '',
                placeholder: 'Provide a description of any potentially controversial content, such as scenes involving weapon usage, violent depictions, etc.',
                inputType: 'textarea',
                label: 'Sensitive Material',
            },
            educational: {
                value: '',
                placeholder: 'For instance, Wednesday, March 1st.',
                inputType: 'text',
                label: 'Due Date for Returning the Permission Slip',
            },
            educational: {
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
            field: {
                value: '',
                placeholder: 'For instance, 6th grade.',
                inputType: 'text',
                label: 'Educational Level or Field of Study',
            },
            questions: {
                value: '',
                placeholder: 'For example, general public or invitation only.',
                inputType: 'text',
                label: 'Open to the Public or Limited to Invitations',
            },
            type: {
                value: '',
                placeholder: 'For instance, Facebook, Instagram, Twitter, YouTube.',
                inputType: 'text',
                label: 'Online Social Platforms',
            },
            educational: {
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
            field: {
                value: '',
                placeholder: 'For instance, 6th grade.',
                inputType: 'text',
                label: 'Educational Level or Field of Study',
            },
            questions: {
                value: '',
                placeholder: 'Who is this directed towards?',
                inputType: 'text',
                label: 'Intended Participants or Volunteers',
            },
            type: {
                value: '',
                placeholder: 'What is the reason for seeking volunteers?',
                inputType: 'text',
                label: 'Occasion or Project',
            },
            educational: {
                value: '',
                placeholder: 'For instance, Monday, December 20th.',
                inputType: 'text',
                label: 'When do you require assistance?',
            },
            educational: {
                value: '',
                placeholder: 'The time they are expected to arrive.',
                inputType: 'text',
                label: 'Beginning Hour',
            },
            educational: {
                value: '',
                placeholder: 'The time they are expected to finish.',
                inputType: 'text',
                label: 'Concluding Time',
            },
            educational: {
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
            field: {
                value: '',
                placeholder: 'For example, Project-Based, Problem-Based, Report-Based, Reflective Piece, Critical Analysis, Case-Based Scenario, and Portfolio.',
                inputType: 'text',
                label: 'Category of Non-Traditional Evaluation',
            },
            field: {
                value: '',
                placeholder: 'For instance, 6th grade.',
                inputType: 'text',
                label: 'Educational Level or Field of Study',
            },
            field: {
                value: '',
                placeholder: 'Indicate the overarching subject or provide an official standard.',
                inputType: 'textarea',
                label: 'Subject Matter or Learning Objective',
            },
            field: {
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
            field: {
                value: '',
                placeholder: 'For example, 45 minutes.',
                inputType: 'text',
                label: 'Duration of the Lesson',
            },
            field: {
                value: '',
                placeholder: 'For example, 8th grade.',
                inputType: 'text',
                label: 'Educational Level',
            },
            field: {
                value: '',
                placeholder: 'For example, Mathematics, English Language Arts, Social Studies, Science, or Fine Arts.',
                inputType: 'textarea',
                label: 'Topic or Discipline',
            },
            field: {
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
            field: {
                value: '',
                placeholder: 'Examples: Professional, Friendly, Positive, Casual, Urgent, Apologetic, Informal, Critical',
                inputType: 'text',
                label: 'Tone',
            },
            field: {
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
            field: {
                value: '',
                placeholder: 'Examples: Article, Passage or Story',
                inputType: 'text',
                label: 'Type of Text',
            },
            field: {
                value: '',
                placeholder: 'Example: 8th grade.',
                inputType: 'text',
                label: 'Grade Level',
            },
            field: {
                value: '',
                placeholder: 'State the general topic or paste an official standard.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
            field: {
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
            field: {
                value: '',
                placeholder: 'Examples: Article, Passage or Story',
                inputType: 'text',
                label: 'Type of Text',
            },
            field: {
                value: '',
                placeholder: 'Example: 8th grade.',
                inputType: 'text',
                label: 'Grade Level',
            },
            field: {
                value: '',
                placeholder: 'State the general topic or paste an official standard.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
            field: {
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
            field: {
                value: '',
                placeholder: 'Examples: 45 minutes',
                inputType: 'text',
                label: 'Lesson Length',
            },
            field: {
                value: '',
                placeholder: 'Example: 8th grade.',
                inputType: 'text',
                label: 'Grade Level',
            },
            field: {
                value: '',
                placeholder: 'Example, Mathematics, English Language Arts, Social Studies, Science, or Fine Arts.',
                inputType: 'textarea',
                label: 'Subject',
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
        type: 'lesson',
        category: 'Lesson Planning',
        tag: 'lesson',
        promptExample: 'While we have safeguards in place, the system may occasionally generate incorrect or misleading information. Please double-check results.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Generate an Inquiry-Based Lesson Plan',
        icon:'ti-pencil',
        description: 'Design a student-led lesson that prioritizes critical thinking, exploration, and discovery.',
        inputs: {
            field: {
                value: '',
                placeholder: 'Examples: 45 minutes',
                inputType: 'text',
                label: 'Lesson Length',
            },
            field: {
                value: '',
                placeholder: 'Example: 8th grade.',
                inputType: 'text',
                label: 'Grade Level',
            },
            field: {
                value: '',
                placeholder: 'Example, Mathematics, English Language Arts, Social Studies, Science, or Fine Arts.',
                inputType: 'textarea',
                label: 'Subject',
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
        type: 'relationships',
        category: 'Relationships',
        tag: 'relationships',
        promptExample: 'While we have safeguards in place, the system may occasionally generate incorrect or misleading information. Please double-check results.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Produce Feedback or Constructive Criticism',
        icon:'ti-pencil',
        description: 'Provide colleagues and students with valuable support and guidance.',
        inputs: {
            field: {
                value: '',
                placeholder: 'Examples: Colleague or Students',
                inputType: 'text',
                label: 'Who Is This Regarding?',
            },
            field: {
                value: '',
                placeholder: 'Example: Jonathan',
                inputType: 'text',
                label: 'Student or Colleague First Name',
            },
            field: {
                value: '',
                placeholder: 'What do you appreciate about this person, their work, or their work ethic?',
                inputType: 'textarea',
                label: 'List of Positive Aspects',
            },
            field: {
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
            field: {
                value: '',
                placeholder: 'To whom is this addressed? ',
                inputType: 'text',
                label: 'Audience or Recipient',
            },
            field: {
                value: '',
                placeholder: 'Who is this letter about? ',
                inputType: 'text',
                label: 'Name of Subject',
            },
            field: {
                value: '',
                placeholder: 'e.g., Instructional Coach',
                inputType: 'textarea',
                label: 'Title of Position/Role Being Sought',
            },
            field: {
                value: '',
                placeholder: 'e.g., 2 years',
                inputType: 'textarea',
                label: 'Length of Relationship',
            },
            field: {
                value: '',
                placeholder: 'How do you know this person?',
                inputType: 'textarea',
                label: 'Relationship Type and History',
            },
            field: {
                value: '',
                placeholder: 'What are the reasons you are recommending this individual? Describe their relevant traits and qualities.',
                inputType: 'textarea',
                label: 'General Basis for Recommendation',
            },
            field: {
                value: '',
                placeholder: 'Validate your recommendation with a personal story about the subject.',
                inputType: 'textarea',
                label: 'Personalized Supporting Evidence',
            },
            field: {
                value: '',
                placeholder: 'e.g., Ms. Cotant',
                inputType: 'text',
                label: 'Sender Name',
            },
            field: {
                value: '',
                placeholder: 'Your Professional Title',
                inputType: 'text',
                label: 'e.g., Facilitator ',
            },
            field: {
                value: '',
                placeholder: 'Contact Information',
                inputType: 'text',
                label: 'e.g., ivy@classpack.com',
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
            field: {
                value: '',
                placeholder: 'Example: Reminder or Notification',
                inputType: 'text',
                label: 'Reminder or Notification',
            },
            field: {
                value: '',
                placeholder: 'To whom is this addressed? ',
                inputType: 'text',
                label: 'Audience or Recipient',
            },
            field: {
                value: '',
                placeholder: 'e.g., 20 words or less',
                inputType: 'textarea',
                label: 'Preferred Word Count',
            },
            field: {
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
            field: {
                value: '',
                placeholder: 'Examples: Professional, Friendly, Positive, Casual, Urgent, Apologetic, Informal, Critical',
                inputType: 'text',
                label: 'Tone',
            },
            field: {
                value: '',
                placeholder: 'e.g., Ms. Cotant',
                inputType: 'text',
                label: 'Sender Name',
            },
            field: {
                value: '',
                placeholder: 'To whom is this addressed? ',
                inputType: 'textarea',
                label: 'Audience or Recipient',
            },
            field: {
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
            concept: {
                value: '',
                placeholder: 'e.g., Yesterday, I walk to the store and buy some milk.',
                inputType: 'text',
                label: 'Text or Passage',
            },
            paragraph: {
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
            concept: {
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
            level: {
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
            style: {
                value: '',
                placeholder: 'What learning styles would you like addressed? i.e., visual, kinesthetic, aural, social, verbal, solitary, logical, etc.',
                inputType: 'textarea',
                label: 'Different Learning Styles',
            },
            style: {
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
            level: {
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
            level: {
                value: '',
                placeholder: 'Examples: 6th grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            need: {
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
            level: {
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
                placeholder: 'e.g., on level, behind, ahead',
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
            level: {
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
            level: {
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
            level: {
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
            level: {
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
            level: {
                value: '',
                placeholder: 'Example: Narrative, Expository, Opinion, Persuasive, Creative, Informative and Journal',
                inputType: 'text',
                label: 'Type of Writing',
            },
            level: {
                value: '',
                placeholder: 'Example: 6th grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            level: {
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
            level: {
                value: '',
                placeholder: 'Example: John, Paige, Xavier',
                inputType: 'text',
                label: 'List of Names',
            },
            level: {
                value: '',
                placeholder: 'Example: People per Group or Number of Groupings',
                inputType: 'text',
                label: 'Group by',
            },
            level: {
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
            level: {
                value: '',
                placeholder: 'Example: 6th grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            level: {
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
            level: {
                value: '',
                placeholder: 'State the topic and details you want to be listed. e.g., Name the first ten astronauts to travel in space.',
                inputType: 'textarea',
                label: 'Topic',
            },
        }
    },

    
];