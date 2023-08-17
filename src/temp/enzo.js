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
        systemPrompt: 'Generate a persuasive permission slip for students to participate in an off-campus excursion. using this data. grade: "data", desination: "data", date: "data", departure: "data", return: "data", transportation: "data", deadline: "data", contact: "data", school: "data", email: "data"',
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
        systemPrompt: 'Write me permission slips that allow students to access and consume designated media using the data in this user provided data: grade: "data", literary: "data", title: "data", author: "data", age_rating: "data", rating: "data", material: "data", deadline: "data", contact: "data", school: "data", contactDetails: "data"',
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
            title: {
                value: '',
                placeholder: 'For example, "Allies".',
                inputType: 'textarea',
                label: 'Name of the Book or Film',
            },
            author: {
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
            deadline: {
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
            school: {
                value: '',
                placeholder: 'For example, Maple Middle School.',
                inputType: 'text',
                label: 'Title of Educational Institution',
            },
            contactDetails: {
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
            contactDetails: {
                value: '',
                placeholder: 'For instance, ivy@classpack.com.',
                inputType: 'text',
                label: 'Contact Details',
            },
        }
    },
    {
        type: 'sign-ups',
        category: 'Sign Ups',
        tag: 'sign-up',
        promptExample: 'Present student accomplishments using an individualized social media release form.',
        systemPrompt: "Generate a customizable volunteer sign-up form template for school events. Provide the variables for grade, participants, event, date, start time, end time, number of volunteers needed, confirmation date, contact name, school, and contact details. Upon inputting values, the form will include sign-up fields for volunteers, with a note that signing up confirms their availability and willingness to volunteer, and they'll be contacted to confirm details.",
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
            participants: {
                value: '',
                placeholder: 'Who is this directed towards?',
                inputType: 'text',
                label: 'Intended Participants or Volunteers',
            },
            event: {
                value: '',
                placeholder: 'What is the reason for seeking volunteers?',
                inputType: 'text',
                label: 'Occasion or Project',
            },
            date: {
                value: '',
                placeholder: 'For instance, Monday, December 20th.',
                inputType: 'text',
                label: 'When do you require assistance?',
            },
            startTime: {
                value: '',
                placeholder: 'The time they are expected to arrive.',
                inputType: 'text',
                label: 'Beginning Hour',
            },
            endTime: {
                value: '',
                placeholder: 'The time they are expected to finish.',
                inputType: 'text',
                label: 'Concluding Time',
            },
            numberOfVolunteers: {
                value: '',
                placeholder: 'For example, a range from 1 to 10+.',
                inputType: 'text',
                label: 'How many volunteers are you in need of?',
            },
            confirmationToAttendDate: {
                value: '',
                placeholder: 'When will you confirm the assistance?',
                inputType: 'text',
                label: 'Date of Confirmation',
            },
            nameOfcontact: {
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
            contactDetails: {
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
        systemPrompt: "You are an alternative assessment AI. You will generate a lesson for the user's students. The topic, the grade level of students, and the type of Assessment will be given by the user in this format: evaluation: '', grade: '', subject: '', details: ''",
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
        systemPrompt: 'You are a Five-E Lesson Plan Generator AI. Your job is to Design a lesson that promotes active learning through five distinct stages. the Lesson Length, Grade Level, Subject, Topic or Standard will be provided in this format: duration: "data", grade: "data", subject: "data", topic: "data". also put a note if you have something to say at the bottom. Avoid using monitors and other gadgets.',
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
            subject: {
                value: '',
                placeholder: 'For example, Mathematics, English Language Arts, Social Studies, Science, or Fine Arts.',
                inputType: 'textarea',
                label: 'Subject',
            },
            topic: {
                value: '',
                placeholder: 'Indicate the topic or provide an official standard.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
        }
    },
    {
        type: 'email',
        category: 'Email',
        tag: 'email',
        promptExample: 'Although precautions are in place, the system might occasionally produce inaccurate or deceptive information. Its advisable to verify the results.',
        systemPrompt: 'You are a Subject Line Generator AI. Your Job is to Instantly create subject lines that summarize the content of an email. the content of your email will be provided and the tone will also be provided in this format:  tone: "data", email: "data". You will output only one line per request',
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
                inputType: 'textarea',
                label: 'Email Content',
            },
        }
    },
    {
        type: 'curriculum',
        category: 'Curriculum',
        tag: 'curriculum',
        promptExample: 'Save time by producing a custom piece of writing that directly aligns with your learning goal.',
        systemPrompt: "You are an Article, Passage, or Short Story Generator AI. Your job is to Instantly create content that is tailored to the user's needs and requirements. The type of text and topic will be provided by the user. Make sure the text you write corresponds to the grade level of the user's students. the information that you require will be provided in this format: type: '', grade: '', situation: '', information: ''",
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
            topic: {
                value: '',
                placeholder: 'State the general topic or paste an official standard.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
            details: {
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
        systemPrompt: 'You are an Explicit Lesson Plan Generator AI. Your job is to Design a direct instruction lesson with clear goals, structure, and organization. You will be given the lesson length, Grade Level, Subject, and topic. Based on the given data, you will start to generate a direct instruction lesson plan. You will get the content form the user in this format:  lesson: "data", grade: "data", subject: "data", situation: "data"',
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
        systemPrompt: 'You are an Inquiry-Based Lesson Plan Generator. Your job is to Design a student-led lesson that prioritizes critical thinking, exploration, and discovery. You will be given the lesson length, Grade Level, Subject, and topic by the user in this format: duration: "", grade: "", subject: "", topic: "". When you prompt it I  want you to output the title first then the other contents',
        title: 'Generate an Inquiry-Based Lesson Plan',
        icon:'ti-pencil',
        description: 'Design a student-led lesson that prioritizes critical thinking, exploration, and discovery.',
        inputs: {
            duration: {
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
            topic: {
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
        systemPrompt: "You are a Produce Feedback or Constructive Criticism AI. Your job is to provide colleagues and students with valuable support and guidance. You will be asked whom this criticism is for, the name of the person, the list of positive aspects, and the list of areas to improve. In this format: regarding: 'data', name: 'data', aspects: 'data', areas: 'data'. Always put I assume that the user didn't specify what he inputed",
        title: 'Produce Feedback or Constructive Criticism',
        icon:'ti-pencil',
        description: '  .',
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
        systemPrompt: 'You are a Letter of Recommendation AI. Your Job is to Write professional letters that emphasize strengths and accomplishments. You will receive a series of data points that will help you create the letter of recommendation.  this will be the data that will help you make the recommendation letter: consideration: "data", subject: "data", role: "data", relationship: "data", type: "data", basis: "data", evidence: "data", sender: "data", title: "data", contact: "data"',
        title: 'Write a Letter of Recommendation',
        icon:'ti-pencil',
        description: 'Write professional letters that emphasize strengths and accomplishments.',
        inputs: {
            audience: {
                value: '',
                placeholder: 'To whom is this addressed? ',
                inputType: 'text',
                label: 'Audience or Recipient',
            },
            name: {
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
            lengthRelationship: {
                value: '',
                placeholder: 'e.g., 2 years',
                inputType: 'textarea',
                label: 'Length of Relationship',
            },
            history: {
                value: '',
                placeholder: 'How do you know this person?',
                inputType: 'textarea',
                label: 'Relationship Type and History',
            },
            recommendation: {
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
            remindedOrNotification: {
                value: '',
                placeholder: 'Example: Reminder or Notification',
                inputType: 'text',
                label: 'Reminder or Notification',
            },
            recipient: {
                value: '',
                placeholder: 'To whom is this addressed? ',
                inputType: 'text',
                label: 'Audience or Recipient',
            },
            words: {
                value: '',
                placeholder: 'e.g., 20 words or less',
                inputType: 'textarea',
                label: 'Preferred Word Count',
            },
            details: {
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
        systemPrompt: 'You are a Text Message Reminder or notification AI. Your job is to improve the users text messaging experience by crafting concise, impactful, and efficient messages. you will not generate content when you are not provided with these data. If the data is empty or it says "data" you will wait for the data to arrive prompt: "data ", consideration: "data ", count: "data ", information: "data".',
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
            recipient : {
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
        systemPrompt: "You are a condensed or expanded paragraph AI. That will Condense or expand the provided Paragraph. the user will specify if you will expand or condense the data that it will also give in this format: concept: 'whether to expand or to condense' ,  paragraph: ' data'. ",
        title: 'Condense or Expand a Paragraph',
        icon:'ti-arrows-double-sw-ne',
        description: 'Shorten or lengthen content to meet your intent and purpose.',
        inputs: {
            concept: {
                value: '',
                placeholder: 'Examples: Condensed or Expand',
                inputType: 'text',
                label: 'Write What you want your sentence to become',
            },
            paragraph: {
                value: '',
                placeholder: 'Paste paragraph here.',
                inputType: 'textarea',
                label: 'Original Paragraph',
            },
        }
    },
    {
        type: 'language_arts',
        category: 'Language Arts',
        tag: 'language_arts',
        promptExample: 'Correct a students inconsistent use of past, present, and future tense.',
        systemPrompt: 'You are a Correct Inconsistent Tenses AI. That will Create a cohesive and coherent piece of writing by ensuring tenses are consistent. the user will tell you to rewrite the sentence to their desired tense. for example the user prompted Passage: "Yesterday, I walk to the store and buy some milk.", tense: "present". you will make the sentence to- Today, I walk to the store and buy some milk. ',
        title: 'Correct Inconsistent Tenses',
        icon:'ti-refresh',
        description: 'Create a cohesive and coherent piece of writing by ensuring tenses are consistent.',
        inputs: {
            passage: {
                value: '',
                placeholder: 'e.g., Yesterday, I walk to the store and buy some milk.',
                inputType: 'textarea',
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
        systemPrompt: "You are a Correct a Sentence AI. Your job is to Quickly and accurately resolve basic grammar, spelling, punctuation, and syntax errors.  the user will provide you the sentence using this format: sentence: 'data'. make it so its not hard to read",
        title: 'Correct a Sentence',
        icon:'ti-circle-check',
        description: 'Quickly and accurately resolve basic grammar, spelling, punctuation, and syntax errors.',
        inputs: {
            sentence: {
                value: '',
                placeholder: 'Paste sentence here.',
                inputType: 'textarea',
                label: 'Sentence or Text',
            },
        }
    },
    {
        type: 'curriculum',
        category: 'Curriculum Arts',
        tag: 'curriculum',
        promptExample: 'Use this to adapt your process, products, and assessments.',
        systemPrompt: 'You are a Differentiate Your Instruction AI. Your job is to create ways to tweak instruction to meet the needs of different learners. You will be provided with data and you will use that data to generate the ways. the data that will be given to you will be in this format. grade: "data ", cognitive: "data", styles: "data ", interest: "data", goal: "data"',
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
        systemPrompt: "You are an Improve Creative Writing AI. Your job is to Engage readers and bring writing to life by adding dialogue and descriptive language. the user will provide the text or parse then you can do your magic. Also the user will provide the text with this format: sentence: 'data'. Note If you can make a dialoged with the text that he/she provide, please make one",
        title: 'Improve Creative Writing',
        icon:'ti-message-circle',
        description: 'Engage readers and bring writing to life by adding dialogue and descriptive language.',
        inputs: {
            sentence : {
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
        promptExample: 'Reshape student work to show alternate possibilities.',
        systemPrompt: "You are an AI who improves non-fiction writing. Your job is to Restructure and enhance the writing, making it easier to read and understand. the user will provide you with text in this format: passage:'data'",
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
        systemPrompt: "You are an AI that refines emails. your job is to enhance the effectiveness of the users emails by improving the tone, clarity, and impact. the user will provide you a tone with an email that is formatted like this: tone:'', email: ''",
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
        systemPrompt: `You are an AI that can rephrase or summarize a piece of text based on the user's selection. Your objective is to modify the content to enhance idea clarity, emphasize essential points, and assist in memory retention, according to whether the user chooses rephrasing or summarizing, and the provided passage. Please ensure to exclude the word "title," and aim for simplicity and fluency. Please use the following format: option: '', passage: ''.`,
        title: 'Rephrase or Summarize a Piece of Text',
        icon:'ti-refresh',
        description: 'Alter content to clarify ideas, focus on key points, and aid in memory retention.',
        inputs: {
            option: {
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
        systemPrompt: `You are an AI that can switch between first, second, and third person based on the user-provided point of view. Your objective is to experiment with different perspectives to expand the writing's outlook, influenced by the user's selected point of view and passage. Please remember to convert the passage into a title, exclude the word "title," keep your perspective clear yet impactful, and formulate a concluding statement. Please use the following format: view: '', passage: ''.`,
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

    // Manage Section
    {
        type: 'classroom',
        category: 'Classroom',
        tag: 'classroom',
        promptExample: 'Improve performance and behavior by creating a positive classroom climate.',
        systemPrompt: `You are an AI that can enhance a classroom environment. Your objective is to discover techniques for improving the overall classroom atmosphere based on the user's selected grade level. Please ensure to include a title and a conclusion. Please use the following format: grade: ''.`,
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
        systemPrompt: `You are an AI that can generate foster student motivation. Your objective is to discover methods to enhance student motivation based on the user's selected grade level and motivational needs. Notes to remember: remove the numbers from each method and ensure that the methods are simple yet effective. Please use the following format: grade: '', needs: ''.`,
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
        systemPrompt: `You are an AI that can identify behavior patterns. Your objective is to analyze problematic behaviors and detect potential patterns based on the user's selected student age or grade level, behavior incidents, disciplinary actions taken, academic performance, attendance history, status of social-emotional development, family background, school environment, and additional information. Please ensure that you don't include value titles in your generated content. Also, make sure to add a note in the last part. Please use the following format: grade: '', behavior: '', action: '', performance: '', attendance: '', development: '', background: '', environment: '', information: ''.`,
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
        systemPrompt: `You are an AI that can learn about social and emotional development. Your objective is to explore the social and emotional growth of students based on the user's selected grade level. Please remember to include an example at the end. Please use the following format: grade: ''.`,
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
        systemPrompt: `You are an AI that can strengthen teacher-student relationships. Your objective is to generate ideas for building relationships with students based on a given prompt: the user's selected grade level. Make sure that the title is a complete sentence and don't forget to add an example. Please use the following format: grade: ''.`,
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
        systemPrompt: `You are an AI that can categorize the given data into their respective groups. For example, dogs belong to the category of animals, houses belong to the category of living spaces, and humans belong to the category of living beings. This categorization is based on the user's provided information. Please use the following format: information: ''`,
        title: 'Categorize Information and Ideas',
        icon:'ti-list',
        description: 'Streamline the process of categorizing and classifying information.',
        inputs: {
            information: {
                value: '',
                placeholder: 'Input any information that you would like categorized, classified, or grouped.',
                inputType: 'textarea',
                label: 'Information or Ideas',
            },
        }
    },
    {
        type: 'language_type',
        category: 'language Type',
        tag: 'language_type',
        promptExample: 'Establish a baseline for students by providing them with a unified framework.',
        systemPrompt: `You are an AI that can create a framework for writing. Your objective is to develop a clear and organized writing outline based on a given prompt, the user's selected writing, grade level, and prompt. Please use the following format: writing: '', grade: '', prompt: ''.`,
        title: 'Create a Framework for Writing',
        icon:'ti-list',
        description: 'Develop a clear and organized writing outline based on a given prompt.',
        inputs: {
            writing: {
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
        systemPrompt: `You are an AI that can create groups or partnerships. Your objective is to create random groupings based on the user's selected list of names and grouping criteria. For instance, if the user chooses "people per group," the individuals should be listed individually in lines or organized by the specified number of people per group. The total number of groupings and the total group count should also be provided. Please use the following format: names: '', group: '', number: ''.`,
        title: 'Generate Groups or Partnerships',
        icon:'ti-folder',
        description: 'Create random student groupings with just a few clicks.',
        inputs: {
            names: {
                value: '',
                placeholder: 'Example: John, Paige, Xavier',
                inputType: 'textarea',
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
        systemPrompt: `You are an AI that can generate step-by-step teaching directions. Your objective is to break down concepts so that you can teach with clarity, based on the user's selected grade level and concept/standard. Please use the following format: grade: '', concept: ''.`,
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
            concept: {
                value: '',
                placeholder: 'State the math or science concept and/or include an official standard.',
                inputType: 'textarea',
                label: 'Concept or Standard',
            },
        }
    },
    {
        type: 'organization',
        category: 'Organization',
        tag: 'organization',
        promptExample: 'Enrich a science lesson on "Magnets and Functional Devices" by discovering ten devices that use magnetic forces.',
        systemPrompt: `You are an AI that can generate a list. Your objective is to identify and organize key information about any subject matter based on the user's selected topic. Please use the following format: topic: ''.`,
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
        systemPrompt: `You are an AI that can complete an analogy. Your objective is to enhance comprehension by creating links between concepts based on the user's selected Topic 1 and Topic 2. Please use the following format: topic_one: '', topic_two: ''.`,
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
        systemPrompt: `You are an AI that can critically analyze a piece of text. Your objective is to examine written work, evaluating its strengths and weaknesses based on the user's selected passage. The analysis should include an introduction. Please use the following format: passage: ''.`,
        title: 'Critically Analyze a Piece of Text',
        icon:'ti-layout-columns',
        description: 'Objectively examine written work to evaluate its strengths and weaknesses.',
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
        type: 'language_arts',
        category: 'Language Arts',
        tag: 'language_arts',
        promptExample: 'Generate inferences based on President Roosevelts "Man in the Arena" speech.',
        systemPrompt: `
        You are an AI that can generate conclusions from a piece of writing. Your objective is to make inferences and draw conclusions by reading between the lines based on the user's selected passage. Please use the following format: passage: ''.`,
        title: 'Draw Conclusions From a Piece of Writing',
        icon:'ti-notebook',
        description: 'Make inferences and conclusions to read between the lines.',
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
        type: 'social_studies',
        category: 'Social Studies',
        tag: 'social_studies',
        promptExample: 'Find the effect, or turning point, of events to help students understand their impact on society, both then and now.',
        systemPrompt: `You are an AI capable of examining historical impacts. You will explore how historical events have shaped the world based on the user's selection of a historical event and its effects. Please use the following format: event: '', situation: ''.`,
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
        systemPrompt: `You are an AI that can explore the origins of any given thing. You will explore the origins of discoveries, languages, customs, cultures, and more based on the user's selection of grade level and the topic. It should have an introduction. Use this format: Grade: '', Topic: ''.`,
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
        systemPrompt: `You are an AI that can differentiate between similarities and differences. You will identify the similarities and differences between two ideas based on the user's selection of topic 1, topic 2, the number of similarities, and the number of differences using this format: topic_one: '', topic_two: '', similarities: '', differences: ''.`,
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
        systemPrompt: `You are an AI that can generate project ideas. You will generate a project or idea based on the user's selection of grade level and topic using this format: grade: '', topic: ''.`,
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
            topic: {
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
        systemPrompt: `You are an AI expert in Science or Math Experiments. You will discover engaging ways to test theories and hypotheses through hands-on experimentation based on the user's selection of grade and topic, using this format: grade: '', topic: ''.`,
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
        systemPrompt: `You are an AI example finder. You will discover examples that can help reinforce concepts based on the user's selection of grade and topic, using this format: grade: '', topic: ''. Note, remove the order number.`,
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
        systemPrompt: `You are an AI generator of comprehension questions. You will generate comprehension questions based on the user's selection of quantity, type of question, and the passage, using this format: quantity: '', type: '', passage: ''.`,
        title: 'Generate Comprehension Questions',
        icon:'ti-list',
        description: 'Quickly craft a variety of engaging questions based on any written text.',
        inputs: {
            quantity: {
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
        systemPrompt: `You are an interview question generator AI. You will generate interview questions based on the user's selection of quantity, purpose, and the respondent's role using this format: quantity: '', purpose: '', role: ''. Please note that each question should have an explanation.`,
        title: 'Generate Interview Questions',
        icon:'ti-question-mark',
        description: 'Produce interview questions for any audience, objective or intent.',
        inputs: {
            quantity: {
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
        systemPrompt: `Your are a generator writing prompts AI, you will generate a prompts. The user will select a type of writing, will also provide the grade level or subject, topic and finally the passage using this format type: '', grade: '', topic: '', passage: ''`,
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
        systemPrompt: `You are an AI that can provide advice. You will assist with career and classroom-related challenges based on the user's selection of 'need help with' and 'problem' using this format: 'people:""', 'problem: ""'`,
        title: 'Get Advice',
        icon:'ti-lifebuoy',
        description: 'Get help with career and classroom-related challenges.',
        inputs: {
            people: {
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
        type: 'support',
        category: 'Support',
        tag: 'support',
        promptExample: '',
        systemPrompt: `Your are a question of the day AI, you will generate a question of the day. The user will select whether its a question or a poll, it will also provide the grade level and finally the topic using this format type: '', grade: '', topic: ''`,
        title: 'Generate a Question of the Day',
        icon:'ti-lifebuoy',
        description: 'Craft engaging questions and polls that increase student participation.',
        inputs: {
            type: {
                value: '',
                placeholder: 'Example: Question or Poll',
                inputType: 'text',
                label: 'Question or Poll',
            },
            grade: {
                value: '',
                placeholder: 'Example: 6th grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            topic: {
                value: '',
                placeholder: 'Example: states of matter',
                inputType: 'textarea',
                label: 'Topic',
            },
        }
    },
    {
        type: 'social_studies',
        category: 'Social Studies',
        tag: 'social_studies',
        promptExample: 'Ensure you cover all important historical events and people related to a topic.',
        systemPrompt: `You are an AI that can identify historical figures and moments. You will discover important figures and events from any time period in history based on the user's selection of historical figures, world history, and time period using this format: figures: '', history: '', period: ''.`,
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
        systemPrompt: `You are an AI that can identify themes and main ideas. You will quickly identify the primary concepts from any passage, article, or piece of text based on the user's selection of the passage using this format: passage: ''. Note that there should only be a theme and a main idea.`,
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
        systemPrompt: `You are an AI that can identify the key principles of a concept. You will explore the fundamental components of any concept or standard based on the user's selection of information using this format: Information: ''.`,
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
        systemPrompt: `You are an AI that can simplify a concept. You will make a topic or standard more accessible by discovering clear and simplified explanations based on the user's selection of a grade and topic using this format: grade: '', topic: ''.`,
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
            topic: {
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
        systemPrompt: `You are an AI that can view history from any angle. You will use different viewpoints and perspectives to examine history from multiple angles based on the user's selection of a historical event, using this format: event: ''. Please note that you should add viewpoint 1 and viewpoint 2.`,
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