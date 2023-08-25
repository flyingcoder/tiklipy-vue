export default [
    {
        type: 'poem',
        category: 'Language Type',
        tag: [ 'write' ],
        promptExample: '',
        systemPrompt: 'xmhcLfeQqalj1JPavEtw',
        title: 'Craft a poem',
        icon:'ti-pencil',
        description: 'Generate customized poems based on various topics and styles.',
        inputs: {
            verse: {
                value: '',
                hint: 'Examples include Sonnet, Haiku, Free Verse, Limerick, Epic, Ballad, and Ode.',
                inputType: 'text',
                label: 'Genre of Verse',
            },
            subject: {
                value: '',
                hint: 'For instance, the subject of "States of Matter."',
                inputType: 'text',
                label: 'Subject',
            },
        }
    },
    {
        type: 'assessments',
        category: 'Assessments',
        tag: [ 'write' ],
        promptExample: 'While we have safeguards in place, the system may occasionally generate incorrect or misleading information. Please double-check answers.',
        systemPrompt: "niazrIoJNJNqjY7UKkM2",
        title: 'Generate conventional evaluation inquiries.',
        icon:'ti-pencil',
        description: 'Create queries designed to assess student comprehension.',
        inputs: {
            grade: {
                value: '',
                hint: 'e.g. 5th Grade',
                inputType: 'input',
                label: 'Enter the grade grade',
            },
            subject: {
                value: '',
                hint: 'State the general topic or paste an official standard.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
            questions: {
                value: '',
                hint: 'For instance, 1 or a range from 2 to 10.',
                inputType: 'text',
                label: 'How Many Questions Would You Like?',
            },
            type: {
                value: '',
                hint: 'For example, multiple choice, true or false, fill in the blank, short answer essay, or numeric response.',
                inputType: 'text',
                label: 'Type of Questions',
            },
        }
    },
    {
        type: 'forms',
        category: 'Forms',
        tag: [ 'write' ],
        promptExample: '',
        systemPrompt: '4LzEeBGK3bmy2Rjv7FpV',
        title: 'Formulate a solicitation for donations or supplies.',
        icon:'ti-user-check',
        description: 'Craft personalized appeals for donations or supplies to meet specific needs.',
        inputs: {
            grade: {
                value: '',
                hint: 'For instance, 6th grade.',
                inputType: 'text',
                label: 'Educational Level or Field of Study',
            },
            target: {
                value: '',
                hint: 'Who is the intended recipient of this?',
                inputType: 'text',
                label: 'Target Audience or Receiver',
            },
            request: {
                value: '',
                hint: 'For example, 25 sets of child-size scissors, four packs of mechanical pencils, and so on.',
                inputType: 'textarea',
                label: 'Items in Demand',
            },
            accasion: {
                value: '',
                hint: 'What is the reason behind seeking these donations?',
                inputType: 'textarea',
                label: 'Occasion or Function',
            },
            deadline: {
                value: '',
                hint: 'For instance, Wednesday, March 1st.',
                inputType: 'text',
                label: 'Deadline for Donation Submission',
            },
            name: {
                value: '',
                hint: 'For example, Ms. Cotant.',
                inputType: 'text',
                label: 'Name(s) of Point of Contact',
            },
            school: {
                value: '',
                hint: 'For instance, Maple Middle School.',
                inputType: 'text',
                label: 'Title of Educational Establishment',
            },
            contact: {
                value: '',
                hint: 'For example, enzo@tiklipy.com.',
                inputType: 'text',
                label: 'Contact Details',
            },
        }
    },
    {
        type: 'forms',
        category: 'Forms',
         tag: [ 'write' ],
        promptExample: '',
        systemPrompt: 'IRcCCEKLcnUTKcaVVgLE',
        title: 'Generate a document for obtaining field trip permissions.',
        icon:'ti-user-check',
        description: 'Generate a permission slip for students to participate in an off-campus excursion.',
        inputs: {
            grade: {
                value: '',
                hint: 'For example, 6th grade.',
                inputType: 'text',
                label: 'Educational Level or Discipline',
            },
            desination: {
                value: '',
                hint: 'For example, Museum of Art.',
                inputType: 'text',
                label: 'Location of Visit',
            },
            date: {
                value: '',
                hint: 'For example, Friday, March 24th.',
                inputType: 'text',
                label: 'Field Trip Date',
            },
            departure: {
                value: '',
                hint: 'At what time will the departure from the school be?',
                inputType: 'text',
                label: 'Time of Departure from School',
            },
            return: {
                value: '',
                hint: 'At what time is the expected return to the school?',
                inputType: 'text',
                label: 'Time of Return to School',
            },
            transportation: {
                value: '',
                hint: 'For example, school bus, walking, etc.',
                inputType: 'text',
                label: 'Method of Travel',
            },
            deadline: {
                value: '',
                hint: 'For instance, Wednesday, March 1st.',
                inputType: 'text',
                label: 'Last Date to Submit the Permission Slip',
            },
            contact: {
                value: '',
                hint: 'For example, Ms. Cotant',
                inputType: 'text',
                label: 'Name(s) of Contact Person(s)',
            },
            school: {
                value: '',
                hint: 'For example, Maple Middle School.',
                inputType: 'text',
                label: 'Title of Educational Institution',
            },
            email: {
                value: '',
                hint: 'For instance, ivy@classpack.com.',
                inputType: 'text',
                label: 'Contact Details',
            },
        }
    },
    {
        type: 'forms',
        category: 'Forms',
         tag: [ 'write' ],
        promptExample: '',
        systemPrompt: 'XlA4kxC1PBfoemLvqAFw',
        title: 'Generate a consent form for reading or viewing media.',
        icon:'ti-user-check',
        description: 'Design permission slips granting students permission to access and engage with specific media content.',
        inputs: {
            grade: {
                value: '',
                hint: 'For instance, 6th grade.',
                inputType: 'text',
                label: 'Educational Level or Field of Study',
            },
            literary: {
                value: '',
                hint: 'For instance, a book or a film.',
                inputType: 'text',
                label: 'Literary Work or Movie',
            },
            title: {
                value: '',
                hint: 'For example, "Allies".',
                inputType: 'textarea',
                label: 'Name of the Book or Film',
            },
            author: {
                value: '',
                hint: 'For example, Alan Gratz.',
                inputType: 'text',
                label: 'Writer or Filmmaker',
            },
            age_rating: {
                value: '',
                hint: 'For example, Ms. Cotant.',
                inputType: 'text',
                label: 'Recommended Audience or Age Rating',
            },
            rating: {
                value: '',
                hint: 'For example, PG.',
                inputType: 'text',
                label: 'Recommended Audience or Rating',
            },
            material: {
                value: '',
                hint: 'Provide a description of any potentially controversial content, such as scenes involving weapon usage, violent depictions, etc.',
                inputType: 'textarea',
                label: 'Sensitive Material',
            },
            deadline: {
                value: '',
                hint: 'For instance, Wednesday, March 1st.',
                inputType: 'text',
                label: 'Due Date for Returning the Permission Slip',
            },
            contact: {
                value: '',
                hint: 'For example, Ms. Cotant',
                inputType: 'text',
                label: 'Name(s) of Contact Person(s)',
            },
            school: {
                value: '',
                hint: 'For example, Maple Middle School.',
                inputType: 'text',
                label: 'Title of Educational Institution',
            },
            contactDetails: {
                value: '',
                hint: 'For instance, ivy@classpack.com.',
                inputType: 'text',
                label: 'Contact Details',
            },
        }
    },
    {
        type: 'forms',
        category: 'Forms',
         tag: [ 'write' ],
        promptExample: 'Present student accomplishments using an individualized social media release form.',
        systemPrompt: '6Oe5Eh7Y02OCws1nqmtq',
        title: 'Create a Social Media Release Form ',
        icon:'ti-pencil',
        description: 'Create forms that grant permission to showcase student work or images on social media platforms.',
        inputs: {
            grade: {
                value: '',
                hint: 'For instance, 6th grade.',
                inputType: 'text',
                label: 'Educational Level or Field of Study',
            },
            invitations: {
                value: '',
                hint: 'For example, general public or invitation only.',
                inputType: 'text',
                label: 'Open to the Public or Limited to Invitations',
            },
            platforms: {
                value: '',
                hint: 'For instance, Facebook, Instagram, Twitter, YouTube.',
                inputType: 'text',
                label: 'Online Social Platforms',
            },
            due: {
                value: '',
                hint: 'For instance, Wednesday, March 1st.',
                inputType: 'text',
                label: 'Due Date for Returning',
            },
            contact: {
                value: '',
                hint: 'For example, Ms. Cotant',
                inputType: 'text',
                label: 'Name(s) of Contact Person(s)',
            },
            institution: {
                value: '',
                hint: 'For example, Maple Middle School.',
                inputType: 'text',
                label: 'Title of Educational Institution',
            },
            contactDetails: {
                value: '',
                hint: 'For instance, ivy@classpack.com.',
                inputType: 'text',
                label: 'Contact Details',
            },
        }
    },
    {
        type: 'sign-ups',
        category: 'Sign Ups',
         tag: [ 'write' ],
        promptExample: 'Present student accomplishments using an individualized social media release form.',
        systemPrompt: "l7L7xpLLkX4lNBTWwJf6",
        title: 'Generate a form for volunteers to sign up.',
        icon:'ti-pencil',
        description: 'Create registration forms to gather volunteers for your cause.',
        inputs: {
            grade: {
                value: '',
                hint: 'For instance, 6th grade.',
                inputType: 'text',
                label: 'Educational Level or Field of Study',
            },
            participants: {
                value: '',
                hint: 'Who is this directed towards?',
                inputType: 'text',
                label: 'Intended Participants or Volunteers',
            },
            event: {
                value: '',
                hint: 'What is the reason for seeking volunteers?',
                inputType: 'text',
                label: 'Occasion or Project',
            },
            date: {
                value: '',
                hint: 'For instance, Monday, December 20th.',
                inputType: 'text',
                label: 'When do you require assistance?',
            },
            startTime: {
                value: '',
                hint: 'The time they are expected to arrive.',
                inputType: 'text',
                label: 'Beginning Hour',
            },
            endTime: {
                value: '',
                hint: 'The time they are expected to finish.',
                inputType: 'text',
                label: 'Concluding Time',
            },
            numberOfVolunteers: {
                value: '',
                hint: 'For example, a range from 1 to 10+.',
                inputType: 'text',
                label: 'How many volunteers are you in need of?',
            },
            confirmationToAttendDate: {
                value: '',
                hint: 'When will you confirm the assistance?',
                inputType: 'text',
                label: 'Date of Confirmation',
            },
            nameOfcontact: {
                value: '',
                hint: 'For example, Ms. Cotant',
                inputType: 'text',
                label: 'Name(s) of Contact Person(s)',
            },
            school: {
                value: '',
                hint: 'For example, Maple Middle School.',
                inputType: 'text',
                label: 'Title of Educational Institution',
            },
            contactDetails: {
                value: '',
                hint: 'For instance, ivy@classpack.com.',
                inputType: 'text',
                label: 'Contact Details',
            },
        }
    },
    {
        type: 'assessments',
        category: 'Assessments',
        tag: [ 'write', 'featured' ],
        promptExample: 'Distinguish a formative assessment by presenting students with a creative challenge that necessitates critical thinking to demonstrate their knowledge.',
        systemPrompt: "huSSaIdlj2fLP7nsSwYd",
        title: 'Develop an alternative method of evaluation.',
        icon:'ti-movie',
        description: 'Craft an unconventional assessment strategy to gauge student understanding.',
        inputs: {
            evaluation: {
                value: '',
                hint: 'For example, Project-Based, Problem-Based, Report-Based, Reflective Piece, Critical Analysis, Case-Based Scenario, and Portfolio.',
                inputType: 'text',
                label: 'Category of Non-Traditional Evaluation',
            },
            grade: {
                value: '',
                hint: 'For instance, 6th grade.',
                inputType: 'text',
                label: 'Educational Level or Field of Study',
            },
            subject: {
                value: '',
                hint: 'Indicate the overarching subject or provide an official standard.',
                inputType: 'textarea',
                label: 'Subject Matter or Learning Objective',
            },
            details: {
                value: '',
                hint: 'Indicate the overarching subject or provide an official standard.',
                inputType: 'textarea',
                label: 'Supplementary Details',
            },
        }
    },
    {
        type: 'lesson-plan',
        category: 'Lesson Planning',
         tag: [ 'lessons' ],
        promptExample: 'Although precautions are in place, the system might occasionally produce inaccurate or deceptive information. Its advisable to verify the results.',
        systemPrompt: '4DnMNJXWaDE4AF2sSQsY',
        title: 'Create a lesson plan structured around the Five-E framework.',
        icon:'ti-list',
        description: 'Devise a lesson plan that encourages active learning through five well-defined stages.',
        inputs: {
            duration: {
                value: '',
                hint: 'For example, 45 minutes.',
                inputType: 'text',
                label: 'Duration of the Lesson',
            },
            grade: {
                value: '',
                hint: 'For example, 8th grade.',
                inputType: 'text',
                label: 'Educational Level',
            },
            subject: {
                value: '',
                hint: 'For example, Mathematics, English Language Arts, Social Studies, Science, or Fine Arts.',
                inputType: 'textarea',
                label: 'Subject',
            },
            topic: {
                value: '',
                hint: 'Indicate the topic or provide an official standard.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
        }
    },
    {
        type: 'email',
        category: 'Email',
         tag: [ 'write' ],
        promptExample: 'Although precautions are in place, the system might occasionally produce inaccurate or deceptive information. Its advisable to verify the results.',
        systemPrompt: 'pd8xsIPJ5dc2WA3gAaHv',
        title: 'Creating an Effective Subject Line',
        icon:'ti-mail',
        description: 'Generate Email Subject Lines for Instant Content Summarization',
        inputs: {
            tone: {
                value: '',
                hint: 'Examples: Professional, Friendly, Positive, Casual, Urgent, Apologetic, Informal, Critical',
                inputType: 'text',
                label: 'Tone',
            },
            email: {
                value: '',
                hint: 'Paste the email here.',
                inputType: 'textarea',
                label: 'Email Content',
            },
        }
    },
    {
        type: 'curriculum',
        category: 'Curriculum',
         tag: [ 'write' ],
        promptExample: 'Save time by producing a custom piece of writing that directly aligns with your learning goal.',
        systemPrompt: "GyBIU83yceBei303iVyy",
        title: 'Generate an Article, Passage, or Short Story',
        icon:'ti-pencil',
        description: 'Instantly create content that is tailored to your individual needs and requirements.',
        inputs: {
            type: {
                value: '',
                hint: 'Examples: Article, Passage or Story',
                inputType: 'text',
                label: 'Type of Text',
            },
            grade: {
                value: '',
                hint: 'Example: 8th grade.',
                inputType: 'text',
                label: 'Grade Level',
            },
            topic: {
                value: '',
                hint: 'State the general topic or paste an official standard.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
            details: {
                value: '',
                hint: 'What specific information would you like included? ',
                inputType: 'textarea',
                label: 'Information to Include',
            },
        }
    },
    {
        type: 'lesson-plan',
        category: 'Lesson Planning',
        tag: [ 'lessons' ],
        promptExample: 'While we have safeguards in place, the system may occasionally generate incorrect or misleading information. Please double-check results.',
        systemPrompt: 'tnhqxO7B5Dr2310UQyNC',
        title: 'Generate an Explicit Lesson Plan',
        icon:'ti-list',
        description: 'Design a direct instruction lesson with clear goals, structure, and organization.',
        inputs: {
            lesson: {
                value: '',
                hint: 'Examples: 45 minutes',
                inputType: 'text',
                label: 'Lesson Length',
            },
            grade: {
                value: '',
                hint: 'Example: 8th grade.',
                inputType: 'text',
                label: 'Grade Level',
            },
            subject: {
                value: '',
                hint: 'Example, Mathematics, English Language Arts, Social Studies, Science, or Fine Arts.',
                inputType: 'textarea',
                label: 'Subject',
            },
            situation: {
                value: '',
                hint: 'State the general topic or paste an official standard.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
        }
    },
    {
        type: 'lesson-plan',
        category: 'Lesson Planning',
        tag: [ 'lessons' ],
        promptExample: 'While we have safeguards in place, the system may occasionally generate incorrect or misleading information. Please double-check results.',
        systemPrompt: 'nBqCuZPoGLvmLE8bi4lg',
        title: 'Generate an Inquiry-Based Lesson Plan',
        icon:'ti-list',
        description: 'Design a student-led lesson that prioritizes critical thinking, exploration, and discovery.',
        inputs: {
            duration: {
                value: '',
                hint: 'Examples: 45 minutes',
                inputType: 'text',
                label: 'Lesson Length',
            },
            grade: {
                value: '',
                hint: 'Example: 8th grade.',
                inputType: 'text',
                label: 'Grade Level',
            },
            subject: {
                value: '',
                hint: 'Example, Mathematics, English Language Arts, Social Studies, Science, or Fine Arts.',
                inputType: 'textarea',
                label: 'Subject',
            },
            topic: {
                value: '',
                hint: 'State the general topic or paste an official standard.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
        }
    },
    {
        type: 'relationships',
        category: 'Relationships',
         tag: [ 'write' ],
        promptExample: 'While we have safeguards in place, the system may occasionally generate incorrect or misleading information. Please double-check results.',
        systemPrompt: "wkYd3sN1rJQ73oLP8RiC",
        title: 'Produce Feedback or Constructive Criticism',
        icon:'ti-message-circle',
        description: '  .',
        inputs: {
            regarding: {
                value: '',
                hint: 'Examples: Colleague or Students',
                inputType: 'text',
                label: 'Who Is This Regarding?',
            },
            name: {
                value: '',
                hint: 'Example: Jonathan',
                inputType: 'text',
                label: 'Student or Colleague First Name',
            },
            aspects: {
                value: '',
                hint: 'What do you appreciate about this person, their work, or their work ethic?',
                inputType: 'textarea',
                label: 'List of Positive Aspects',
            },
            areas: {
                value: '',
                hint: 'What areas need improvement in regards to this person, their work, or their work ethic?',
                inputType: 'textarea',
                label: 'List of Areas to Improve Upon',
            },
        }
    },
    {
        type: 'letter',
        category: 'Letter',
         tag: [ 'write' ],
        promptExample: '',
        systemPrompt: 'cRCk9HJYdn0sUen8QXKa',
        title: 'Write a Letter of Recommendation',
        icon:'ti-file-text',
        description: 'Write professional letters that emphasize strengths and accomplishments.',
        inputs: {
            audience: {
                value: '',
                hint: 'To whom is this addressed? ',
                inputType: 'text',
                label: 'Audience or Recipient',
            },
            name: {
                value: '',
                hint: 'Who is this letter about? ',
                inputType: 'text',
                label: 'Name of Subject',
            },
            role: {
                value: '',
                hint: 'e.g., Instructional Coach',
                inputType: 'textarea',
                label: 'Title of Position/Role Being Sought',
            },
            lengthRelationship: {
                value: '',
                hint: 'e.g., 2 years',
                inputType: 'textarea',
                label: 'Length of Relationship',
            },
            history: {
                value: '',
                hint: 'How do you know this person?',
                inputType: 'textarea',
                label: 'Relationship Type and History',
            },
            recommendation: {
                value: '',
                hint: 'What are the reasons you are recommending this individual? Describe their relevant traits and qualities.',
                inputType: 'textarea',
                label: 'General Basis for Recommendation',
            },
            evidence: {
                value: '',
                hint: 'Validate your recommendation with a personal story about the subject.',
                inputType: 'textarea',
                label: 'Personalized Supporting Evidence',
            },
            sender: {
                value: '',
                hint: 'e.g., Ms. Cotant',
                inputType: 'text',
                label: 'Sender Name',
            },
            title: {
                value: '',
                hint: 'e.g., Facilitator',
                inputType: 'text',
                label: 'Your Professional Title',
            },
            contact: {
                value: '',
                hint: 'e.g., ivy@classpack.com',
                inputType: 'text',
                label: 'Contact Information',
            },
        }
    },
    {
        type: 'reminders',
        category: 'Reminders',
        tag: [ 'write' ],
        promptExample: 'Improve your text messaging by crafting concise, impactful, and efficient messages.',
        systemPrompt: 'XzTXvT6yxmvTTvz2dL3k',
        title: 'Write a Text Message Reminder or Notification',
        icon:'ti-bell',
        description: 'Write professional letters that emphasize strengths and accomplishments.',
        inputs: {
            remindedOrNotification: {
                value: '',
                hint: 'Example: Reminder or Notification',
                inputType: 'text',
                label: 'Reminder or Notification',
            },
            recipient: {
                value: '',
                hint: 'To whom is this addressed? ',
                inputType: 'text',
                label: 'Audience or Recipient',
            },
            words: {
                value: '',
                hint: 'e.g., 20 words or less',
                inputType: 'textarea',
                label: 'Preferred Word Count',
            },
            details: {
                value: '',
                hint: 'What specific information would you like included? ',
                inputType: 'textarea',
                label: 'Information to Include',
            }
        }
    },
    {
        type: 'email',
        category: 'Email',
        tag: [ 'write' ],
        promptExample: 'Improve your text messaging by crafting concise, impactful, and efficient messages.',
        systemPrompt: 'qg0fbvEdQpnXcB2rR3WV',
        title: 'Write an Email',
        icon:'ti-mail',
        description: 'Generate effective emails with personalized tone and content.',
        inputs: {
            tone: {
                value: '',
                hint: 'Examples: Professional, Friendly, Positive, Casual, Urgent, Apologetic, Informal, Critical',
                inputType: 'text',
                label: 'Tone',
            },
            sender: {
                value: '',
                hint: 'e.g., Ms. Cotant',
                inputType: 'text',
                label: 'Sender Name',
            },
            recipient : {
                value: '',
                hint: 'To whom is this addressed? ',
                inputType: 'textarea',
                label: 'Audience or Recipient',
            },
            selection: {
                value: '',
                hint: 'What specific information would you like included?',
                inputType: 'textarea',
                label: 'Information to Include',
            }
        }
    },

    // Modify Section
    {
        type: 'language_arts',
        category: 'Language Arts',
         tag: [ 'modify' ],
        promptExample: 'Simplify a confusing paragraph by breaking it down into a smaller chunk.',
        systemPrompt: "LAxE5RYjyTE8aLZWEsH4",
        title: 'Condense or Expand a Paragraph',
        icon:'ti-arrows-double-sw-ne',
        description: 'Shorten or lengthen content to meet your intent and purpose.',
        inputs: {
            concept: {
                value: '',
                hint: 'Examples: Condensed or Expand',
                inputType: 'text',
                label: 'Write What you want your sentence to become',
            },
            paragraph: {
                value: '',
                hint: 'Paste paragraph here.',
                inputType: 'textarea',
                label: 'Original Paragraph',
            },
        }
    },
    {
        type: 'language_arts',
        category: 'Language Arts',
        tag: [ 'modify' ],
        promptExample: 'Correct a students inconsistent use of past, present, and future tense.',
        systemPrompt: 'we1YuN2dCOTI548jX9Fx',
        title: 'Correct Inconsistent Tenses',
        icon:'ti-refresh',
        description: 'Create a cohesive and coherent piece of writing by ensuring tenses are consistent.',
        inputs: {
            passage: {
                value: '',
                hint: 'e.g., Yesterday, I walk to the store and buy some milk.',
                inputType: 'textarea',
                label: 'Text or Passage',
            },
            tense: {
                value: '',
                hint: 'Example: Past, Present or Future',
                inputType: 'text',
                label: 'Choose a Tense',
            },
        }
    },
    {
        type: 'language_arts',
        category: 'Language Arts',
         tag: [ 'modify' ],
        promptExample: '',
        systemPrompt: "VEuk7rJb4w2Bha4KSixs",
        title: 'Correct a Sentence',
        icon:'ti-circle-check',
        description: 'Quickly and accurately resolve basic grammar, spelling, punctuation, and syntax errors.',
        inputs: {
            sentence: {
                value: '',
                hint: 'Paste sentence here.',
                inputType: 'textarea',
                label: 'Sentence or Text',
            },
        }
    },
    {
        type: 'curriculum',
        category: 'Curriculum Arts',
         tag: [ 'modify' ],
        promptExample: 'Use this to adapt your process, products, and assessments.',
        systemPrompt: 'iHob5rui1wfNyAYZj1Xh',
        title: 'Differentiate Your Instruction',
        icon:'ti-adjustments',
        description: 'Discover how to tweak instruction to meet the needs of different learners.',
        inputs: {
            grade: {
                value: '',
                hint: 'e.g., 6th grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            cognitive: {
                value: '',
                hint: 'Are there any cognitive struggles or talents that should be noted?',
                inputType: 'textarea',
                label: 'Range of Cognitive Abilities',
            },
            styles: {
                value: '',
                hint: 'What learning styles would you like addressed? i.e., visual, kinesthetic, aural, social, verbal, solitary, logical, etc.',
                inputType: 'textarea',
                label: 'Different Learning Styles',
            },
            interest: {
                value: '',
                hint: 'Are there any student interests you would like included?',
                inputType: 'textarea',
                label: 'Group Interests',
            },
            goal: {
                value: '',
                hint: 'What learning goal(s) would you like differentiated? Feel free to include specific standards or lesson requirements.',
                inputType: 'textarea',
                label: 'Teacher Learning Goal(s)',
            },
        }
    },
    {
        type: 'language_arts',
        category: 'Language Arts',
         tag: [ 'modify' ],
        promptExample: 'Show students how using dialogue can improve their writing.',
        systemPrompt: "49vnGnbqP8nsEhaZZi8M",
        title: 'Improve Creative Writing',
        icon:'ti-message-circle',
        description: 'Engage readers and bring writing to life by adding dialogue and descriptive language.',
        inputs: {
            sentence : {
                value: '',
                hint: 'Paste text or passage here.',
                inputType: 'textarea',
                label: 'Original Text or Passage',
            },
        }
    },
    {
        type: 'language_arts',
        category: 'Language Arts',
         tag: [ 'modify' ],
        promptExample: 'Reshape student work to show alternate possibilities.',
        systemPrompt: "F4wVPSqJNITcmdjm45Zx",
        title: 'Improve Non-Fiction Writing',
        icon:'ti-list',
        description: 'Restructure and enhance writing, making it easier to read and understand.',
        inputs: {
            passage: {
                value: '',
                hint: 'Paste text or passage here.',
                inputType: 'text',
                label: 'Original Text or Passage',
            },
        }
    },
    {
        type: 'language_arts',
        category: 'Language Arts',
         tag: [ 'modify' ],
        promptExample: 'Change the tone of your email to convey a sense of urgency.',
        systemPrompt: "v0P8wfjjDd1TONUjsawI",
        title: 'Refine an Email',
        icon:'ti-refresh',
        description: 'Enhance the effectiveness of your emails by improving the tone, clarity, and impact.',
        inputs: {
            tone: {
                value: '',
                hint: 'Examples: Professional, Friendly, Positive, Casual, Urgent, Apologetic, Informal, Critical',
                inputType: 'text',
                label: 'Tone',
            },
            email: {
                value: '',
                hint: 'Paste the email here.',
                inputType: 'textarea',
                label: 'Email Content',
            },
        }
    },
    {
        type: 'curriculum',
        category: 'Curriculum',
        tag: [ 'modify' ],
        promptExample: 'Change the tone of your email to convey a sense of urgency.',
        systemPrompt: `DDNwzd1PRkNkwDVYMiJa`,
        title: 'Rephrase or Summarize a Piece of Text',
        icon:'ti-refresh',
        description: 'Alter content to clarify ideas, focus on key points, and aid in memory retention.',
        inputs: {
            option: {
                value: '',
                hint: 'Examples: Rephrase or  Summarize',
                inputType: 'text',
                label: 'Rephrase or Summarize',
            },
            passage: {
                value: '',
                hint: 'Paste text or passage here.',
                inputType: 'textarea',
                label: 'Original Text or Passage',
            },
        }
    },
    {
        type: 'language_arts',
        category: 'Language Arts',
         tag: [ 'modify' ],
        promptExample: 'Change the point of view to teach students about narrative techniques, critical thinking skills, and empathy.',
        systemPrompt: `ew6HfU9ZkKfbyhxyV7os`,
        title: 'Switch Between First, Second, and Third Person',
        icon:'ti-refresh',
        description: 'Experiment with different points of view to broaden your writing perspectives.',
        inputs: {
            view: {
                value: '',
                hint: 'Examples: First Person, Second Person or Third Person',
                inputType: 'text',
                label: 'Choose a Point of View',
            },
            passage: {
                value: '',
                hint: 'Paste text or passage here.',
                inputType: 'textarea',
                label: 'Original Text or Passage',
            },
        }
    },

    // Manage Section
    {
        type: 'classroom',
        category: 'Classroom',
        tag: [ 'manage' ],
        promptExample: 'Improve performance and behavior by creating a positive classroom climate.',
        systemPrompt: `Z309reD5PQDePVmdSmgV`,
        title: 'Enhance Your Classroom Environment',
        icon:'ti-mood-smile',
        description: 'Discover techniques for enhancing the overall environment of your classroom.',
        inputs: {
            grade: {
                value: '',
                hint: 'Examples: 6th grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
        }
    },
    {
        type: 'classroom',
        category: 'Classroom',
        tag: [ 'manage' ],
        promptExample: '',
        systemPrompt: `E3CIQEgI64djHK2qkhGZ`,
        title: 'Foster Student Motivation',
        icon:'ti-user-plus',
        description: 'Discover methods to enhance student motivation.',
        inputs: {
            grade: {
                value: '',
                hint: 'Examples: 6th grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            needs: {
                value: '',
                hint: 'Which areas of motivation are a struggle? e.g., work completion, on-task behavior, etc.',
                inputType: 'text',
                label: 'Motivational Needs',
            },
        }
    },
    {
        type: 'classroom',
        category: 'Classroom',
        tag: [ 'manage' ],
        promptExample: '',
        systemPrompt: `EbZCrYcLdkoaISogqGr4`,
        title: 'Identify Behavior Patterns',
        icon:'ti-user-plus',
        description: 'Analyze problem behaviors and detect possible patterns.',
        inputs: {
            grade: {
                value: '',
                hint: 'Examples: 12 years old',
                inputType: 'text',
                label: 'Student Age or Grade Level',
            },
            behavior: {
                value: '',
                hint: 'List any relevant behavior incidents.',
                inputType: 'textarea',
                label: 'Behavior Incidents',
            },
            action: {
                value: '',
                hint: 'List any past disciplinary action.',
                inputType: 'textarea',
                label: 'Disciplinary Action Taken',
            },
            performance: {
                value: '',
                hint: 'How does this student perform academically?',
                inputType: 'textarea',
                label: 'Academic Performance',
            },
            attendance: {
                value: '',
                hint: 'Does this student have problematic attendance? i.e., Consistent excused or unexcused tardies/absences, etc.',
                inputType: 'textarea',
                label: 'Attendance History',
            },
            development: {
                value: '',
                hint: 'e.g., on grade, behind, ahead',
                inputType: 'text',
                label: 'Status of Social Emotional Development ',
            },
            background: {
                value: '',
                hint: 'e.g., single parent home',
                inputType: 'textarea',
                label: 'Family Background',
            },
            environment: {
                value: '',
                hint: 'Describe the school environment. i.e., Does the student receive any special services, etc.?',
                inputType: 'textarea',
                label: 'School Environment',
            },
            information: {
                value: '',
                hint: 'Is there any additional information you would like noted?',
                inputType: 'textarea',
                label: 'Additional Information',
            },
        }
    },
    {
        type: 'classroom',
        category: 'Classroom',
         tag: [ 'manage' ],
        promptExample: 'Verify whether or not student behavior aligns with their age and development stage.',
        systemPrompt: `aVlNDT1CZkrveFuEob1m`,
        title: 'Learn About Social and Emotional Development',
        icon:'ti-thumb-up',
        description: 'Explore the social and emotional growth of students.',
        inputs: {
            grade: {
                value: '',
                hint: 'Examples: 8th grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
        }
    },
    {
        type: 'classroom',
        category: 'Classroom',
         tag: [ 'manage', 'featured' ],
        promptExample: 'Create a safe learning environment that promotes student responsibility.',
        systemPrompt: 'dI0okTScpU7e3yQMjrZS',
        title: 'Manage Problematic Behavior',
        icon:'ti-circle-x',
        description: 'Discover effective strategies for handling challenging behavior.',
        inputs: {
            grade: {
                value: '',
                hint: 'Examples: 6th grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            behavior: {
                value: '',
                hint: 'e.g., throwing chairs, ignoring instructions, etc. ',
                inputType: 'textarea',
                label: 'Problematic Behavior(s)',
            },
        }
    },
    {
        type: 'relationships',
        category: 'Relatioships',
         tag: [ 'manage' ],
        promptExample: 'Create a safe learning environment that promotes student responsibility.',
        systemPrompt: `IJh88AyPGndDhUQARpU7`,
        title: 'Strengthen Teacher - Student Relationships',
        icon:'ti-users',
        description: 'Generate ideas for building relationships with students.',
        inputs: {
            grade: {
                value: '',
                hint: 'Example: 6th grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
        }
    },

    //Organize Section
    {
        type: 'classroom',
        category: 'Classroom',
        tag: [ 'organize' ],
        promptExample: 'Find patterns and preferences in what students read by classifying their favorite books.',
        systemPrompt: `W0JWWnj3HjxgsBCJS3p2`,
        title: 'Categorize Information and Ideas',
        icon:'ti-list',
        description: 'Streamline the process of categorizing and classifying information.',
        inputs: {
            information: {
                value: '',
                hint: 'Input any information that you would like categorized, classified, or grouped.',
                inputType: 'textarea',
                label: 'Information or Ideas',
            },
        }
    },
    {
        type: 'language_type',
        category: 'language Type',
        tag: [ 'organize' ],
        promptExample: 'Establish a baseline for students by providing them with a unified framework.',
        systemPrompt: `Qwtf0CNvTS0W9rolgQpZ`,
        title: 'Create a Framework for Writing',
        icon:'ti-list',
        description: 'Develop a clear and organized writing outline based on a given prompt.',
        inputs: {
            writing: {
                value: '',
                hint: 'Example: Narrative, Expository, Opinion, Persuasive, Creative, Informative and Journal',
                inputType: 'text',
                label: 'Type of Writing',
            },
            grade: {
                value: '',
                hint: 'Example: 6th grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            prompt: {
                value: '',
                hint: 'What is the writing prompt or topic for this outline?',
                inputType: 'text',
                label: 'Writing Prompt',
            },
        }
    },
    {
        type: 'classroom',
        category: 'Classroom',
         tag: [ 'organize' ],
        promptExample: '',
        systemPrompt: `EQ4wxqZo2poUWAp68cuh`,
        title: 'Generate Groups or Partnerships',
        icon:'ti-folder',
        description: 'Create random student groupings with just a few clicks.',
        inputs: {
            names: {
                value: '',
                hint: 'Example: John, Paige, Xavier',
                inputType: 'textarea',
                label: 'List of Names',
            },
            group: {
                value: '',
                hint: 'Example: People per Group or Number of Groupings',
                inputType: 'text',
                label: 'Group by',
            },
            number: {
                value: '',
                hint: 'Example: 4',
                inputType: 'text',
                label: 'Desired Number',
            },
        }
    },
    {
        type: 'science_math',
        category: 'Science And Math',
        tag: [ 'organize' ],
        promptExample: 'Explain a math concept to a student using a different approach or break down an entire unit of study.',
        systemPrompt: `35BVbBT1H8zz2gfryHHc`,
        title: 'Generate Step-by-Step Teaching Directions',
        icon:'ti-list',
        description: 'Break down concepts so that you can teach with clarity.',
        inputs: {
            grade: {
                value: '',
                hint: 'Example: 6th grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            concept: {
                value: '',
                hint: 'State the math or science concept and/or include an official standard.',
                inputType: 'textarea',
                label: 'Concept or Standard',
            },
        }
    },
    {
        type: 'organization',
        category: 'Organization',
         tag: [ 'organize' ],
        promptExample: 'Enrich a science lesson on "Magnets and Functional Devices" by discovering ten devices that use magnetic forces.',
        systemPrompt: `H5IB0WVKmBSCYtW9ohVG`,
        title: 'Generate a List',
        icon:'ti-list',
        description: 'Identify and organize key information around any subject matter.',
        inputs: {
            topic: {
                value: '',
                hint: 'State the topic and details you want to be listed. e.g., Name the first ten astronauts to travel in space.',
                inputType: 'textarea',
                label: 'Topic',
            },
        }
    },

    // Explore Section
    {
        type: 'curriculum',
        category: 'Curriculum',
         tag: [ 'explore' ],
        promptExample: 'Increase understanding by generating connections between concepts.',
        systemPrompt: `aVA17QIzWhNXAPo0omHq`,
        title: 'Complete an Analogy',
        icon:'ti-layout-columns',
        description: 'Enhance comprehension by creating links between concepts.',
        inputs: {
            topic_one: {
                value: '',
                hint: 'e.g., states of matter',
                inputType: 'text',
                label: 'Topic',
            },
            topic_two: {
                value: '',
                hint: 'e.g., Berlin Wall',
                inputType: 'text',
                label: 'Topic 2',
            },
        }
    },
    {
        type: 'language_arts',
        category: 'Language Arts',
         tag: [ 'explore' ],
        promptExample: 'Improve thinking skills and enhance comprehension with critical analysis of any text.',
        systemPrompt: `4aWnIUKdJgezumo4zWr5`,
        title: 'Critically Analyze a Piece of Text',
        icon:'ti-layout-columns',
        description: 'Objectively examine written work to evaluate its strengths and weaknesses.',
        inputs: {
            passage: {
                value: '',
                hint: 'Paste text or passage here.',
                inputType: 'textarea',
                label: 'Original Text or Passage',
            },
        }
    },
    {
        type: 'language_arts',
        category: 'Language Arts',
         tag: [ 'explore' ],
        promptExample: 'Generate inferences based on President Roosevelts "Man in the Arena" speech.',
        systemPrompt: `OoR3ryrpg8UZFO3mDdaA`,
        title: 'Draw Conclusions From a Piece of Writing',
        icon:'ti-notebook',
        description: 'Make inferences and conclusions to read between the lines.',
        inputs: {
            passage: {
                value: '',
                hint: 'Paste text or passage here.',
                inputType: 'textarea',
                label: 'Original Text or Passage',
            },
        }
    },
    {
        type: 'social_studies',
        category: 'Social Studies',
         tag: [ 'explore' ],
        promptExample: 'Find the effect, or turning point, of events to help students understand their impact on society, both then and now.',
        systemPrompt: `BpIPnLfHuXQNklRA19Dw`,
        title: 'Examine Historical Impacts',
        icon:'ti-globe',
        description: 'Explore how historical events have shaped the world.',
        inputs: {
            event: {
                value: '',
                hint: 'Example: World War II in Europe',
                inputType: 'text',
                label: 'Historical Event',
            },
            situation: {
                value: '',
                hint: 'Example: Effect or Turning Point',
                inputType: 'text',
                label: 'Find the Effect or Turning Point',
            },
        }
    },
    {
        type: 'curriculum',
        category: 'Curriculum',
         tag: [ 'explore' ],
        promptExample: 'Help students broaden their knowledge and gain a deeper understanding of the theory of relativity.',
        systemPrompt: `rkNNsR9VegWKrtKhxffU`,
        title: 'Explore the Origins of Any Given Thing',
        icon:'ti-corner-down-right',
        description: 'Explore the origins of discoveries, languages, customs, cultures, and more',
        inputs: {
            grade: {
                value: '',
                hint: 'Example: 6th Grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            topic: {
                value: '',
                hint: 'Example: States of matter',
                inputType: 'text',
                label: 'Topic',
            },
        }
    },
    {
        type: 'curriculum',
        category: 'Curriculum',
         tag: [ 'explore' ],
        promptExample: 'Facilitate class discussions by comparing and contrasting different topics related to a specific content area.',
        systemPrompt: `0MJm1hwm6TwHWAf3pqk6`,
        title: 'Find Similarities and Differences',
        icon:'ti-layout-columns',
        description: 'Identify similarities and differences between two ideas.',
        inputs: {
            topic_one: {
                value: '',
                hint: 'Example: Great Wall of China',
                inputType: 'textarea',
                label: 'Topic 1',
            },
            topic_two: {
                value: '',
                hint: 'Example: Berlin Wall',
                inputType: 'textarea',
                label: 'Topic 2',
            },
            similarities: {
                value: '',
                hint: 'Example: 1 or 5',
                inputType: 'text',
                label: 'Preferred Number of Similarities',
            },
            differences: {
                value: '',
                hint: 'Example: 1 or 5',
                inputType: 'text',
                label: 'Preferred Number of Differences',
            },
        }
    },
    {
        type: 'curriculum',
        category: 'Curriculum',
         tag: [ 'explore', 'featured' ],
        promptExample: 'Help students celebrate the first day of spring while learning about its unique history.',
        systemPrompt: `NUAgVZ0AJmZvwTf7133y`,
        title: 'Find a Project Idea',
        icon:'ti-search',
        description: 'Generate a project or activity that is aligned with your individual classroom needs.',
        inputs: {
            grade: {
                value: '',
                hint: 'Example: 6th Grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            topic: {
                value: '',
                hint: 'State the general topic or paste an official standard.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
        }
    },
    {
        type: 'science_math',
        category: 'Science And Math',
        tag: [ 'explore', 'featured' ],
        promptExample: 'Save time and effort by generating an experiment that aligns with specific goals and requirements.',
        systemPrompt: `HlPXBWPhwBSWC4ZpRfsO`,
        title: 'Find a Science or Math Experiment',
        icon:'ti-search',
        description: 'Discover engaging ways to test theories and hypotheses through hands-on experimentation.',
        inputs: {
            grade: {
                value: '',
                hint: 'Example: 6th Grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            field: {
                value: '',
                hint: 'State the general topic or paste an official standard.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
        }
    },
    {
        type: 'curriculum',
        category: 'Curriculum',
         tag: [ 'explore' ],
        promptExample: 'While we have safeguards in place, the system may occasionally generate incorrect or misleading information. Please double-check examples.',
        systemPrompt: `A6EHveXFIY3udPA92muE`,
        title: 'Find an Example',
        icon:'ti-search',
        description: 'Discover examples that can help reinforce concepts.',
        inputs: {
            grade: {
                value: '',
                hint: 'Example: 6th Grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            field: {
                value: '',
                hint: 'State the general topic or paste an official standard.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
        }
    },
    {
        type: 'language_arts',
        category: 'Language Arts',
         tag: [ 'explore' ],
        promptExample: '',
        systemPrompt: `RTTOoVwor01SeqHE5v6y`,
        title: 'Generate Comprehension Questions',
        icon:'ti-list',
        description: 'Quickly craft a variety of engaging questions based on any written text.',
        inputs: {
            quantity: {
                value: '',
                hint: 'Example: 1 or 5',
                inputType: 'text',
                label: 'How Many Questions Would You Like?',
            },
            type: {
                value: '',
                hint: 'Example: Factual, Vocabulary, Analytic or Inferential',
                inputType: 'text',
                label: 'Type of Question(s)',
            },
            passage: {
                value: '',
                hint: 'Paste text or passage here.',
                inputType: 'textarea',
                label: 'Original Text or Passage',
            },
        }
    },
    {
        type: 'relationships',
        category: 'Relationships',
         tag: [ 'explore' ],
        promptExample: '',
        systemPrompt: `FWWDJv4A9EqhaZ0WzflY`,
        title: 'Generate Interview Questions',
        icon:'ti-question-mark',
        description: 'Produce interview questions for any audience, objective or intent.',
        inputs: {
            quantity: {
                value: '',
                hint: 'Example: 1 or 5',
                inputType: 'text',
                label: 'How Many Questions Would You Like?',
            },
            purpose: {
                value: '',
                hint: 'Example: Hiring or Evaluating',
                inputType: 'text',
                label: 'What is Your Purpose?',
            },
            role: {
                value: '',
                hint: 'Example: teacher or potential aide?',
                inputType: 'text',
                label: 'What is the Respondents Role or Potential Role?',
            },
        }
    },
    {
        type: 'curriculum',
        category: 'Curriculum',
         tag: [ 'explore' ],
        promptExample: '',
        systemPrompt: `nj8cmsxjEcG8dLnFi9B4`,
        title: 'Generate Writing Prompts',
        icon:'ti-pencil',
        description: 'Produce custom-made writing prompts based on any text or topic.',
        inputs: {
            type: {
                value: '',
                hint: 'Example: Narrative, Expository, Opinion, Persuasive, Creative, Informative and Journal',
                inputType: 'text',
                label: 'Type of Writing',
            },
            grade: {
                value: '',
                hint: 'Example: 6th Grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            topic: {
                value: '',
                hint: 'Example: states of matter',
                inputType: 'text',
                label: 'Topic',
            },
            passage: {
                value: '',
                hint: 'Paste text or passage here.',
                inputType: 'textarea',
                label: 'Original Text or Passage',
            },
        }
    },
    {
        type: 'support',
        category: 'Support',
         tag: [ 'explore' ],
        promptExample: '',
        systemPrompt: `vGRrFyl00eTfcLZbUCv1`,
        title: 'Get Advice',
        icon:'ti-lifebuoy',
        description: 'Get help with career and classroom-related challenges.',
        inputs: {
            people: {
                value: '',
                hint: 'Example: Student, Colleague, Administration, Parent or General',
                inputType: 'text',
                label: 'What Do You Need Help With?',
            },
            problem: {
                value: '',
                hint: 'Example: My colleague undermined me in front of a student.',
                inputType: 'textarea',
                label: 'What is the Problem?',
            },
        }
    },
    {
        type: 'support',
        category: 'Support',
         tag: [ 'explore' ],
        promptExample: '',
        systemPrompt: `STSTNazli8vaTdyw2yyM`,
        title: 'Generate a Question of the Day',
        icon:'ti-lifebuoy',
        description: 'Craft engaging questions and polls that increase student participation.',
        inputs: {
            type: {
                value: '',
                hint: 'Example: Question or Poll',
                inputType: 'text',
                label: 'Question or Poll',
            },
            grade: {
                value: '',
                hint: 'Example: 6th grade',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            topic: {
                value: '',
                hint: 'Example: states of matter',
                inputType: 'textarea',
                label: 'Topic',
            },
        }
    },
    {
        type: 'social_studies',
        category: 'Social Studies',
        tag: [ 'explore', 'featured' ],
        promptExample: 'Ensure you cover all important historical events and people related to a topic.',
        systemPrompt: `jafeYC62iH4rvsEp4mpg`,
        title: 'Identify Historical Figures and Moments',
        icon:'ti-clock',
        description: 'Discover important figures and events from any time period in history.',
        inputs: {
            figures: {
                value: '',
                hint: 'Example: Discover Historical Figures  or Highlight Key Moments',
                inputType: 'text',
                label: 'Discover Historical Figures or Highlight Key Moments',
            },
            history: {
                value: '',
                hint: 'Example: U.S or World',
                inputType: 'text',
                label: 'U.S. or World History',
            },
            period: {
                value: '',
                hint: 'Example: 1930s-1940s',
                inputType: 'text',
                label: 'Time Period',
            },
        }
    },
    {
        type: 'language_arts',
        category: 'Language Arts',
         tag: [ 'explore', 'featured' ],
        promptExample: '',
        systemPrompt: `CJxU5uddFKHDGzxD15UG`,
        title: 'Identify Themes and Main Ideas',
        icon:'ti-list',
        description: 'Quickly identify the primary concepts from any passage, article, or piece of text.',
        inputs: {
            passage: {
                value: '',
                hint: 'Paste text or passage here.',
                inputType: 'textarea',
                label: 'Original Text or Passage',
            },
        }
    },
    {
        type: 'curriculum',
        category: 'Curriculum',
         tag: [ 'explore' ],
        promptExample: 'Identify the key principles of a chemical reaction.',
        systemPrompt: `Tpf7uq09Zm7d4uuWzOGR`,
        title: 'Identify the Key Principles of a Concept',
        icon:'ti-list',
        description: 'Explore the fundamental components of any concept or standard.',
        inputs: {
            information: {
                value: '',
                hint: 'Paste topic, standard, or piece of text here.',
                inputType: 'textarea',
                label: 'Ideas or Information',
            },
        }
    },
    {
        type: 'curriculum',
        category: 'Curriculum',
         tag: [ 'explore' ],
        promptExample: '',
        systemPrompt: `FgaNdRsIuyKIQRpqmdh2`,
        title: 'Simplify a Concept',
        icon:'ti-search',
        description: 'Make a topic or standard more accessible by discovering clear and simplified explanations.',
        inputs: {
            grade: {
                value: '',
                hint: 'Example: 6th grade.',
                inputType: 'text',
                label: 'Grade Level or Subject',
            },
            topic: {
                value: '',
                hint: 'State the general topic or paste an official standard.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
        }
    },
    {
        type: 'social_studies',
        category: 'Social Studies',
         tag: [ 'explore', 'featured' ],
        promptExample: 'Help students gain understanding, foster compassion, and identify historical trends',
        systemPrompt: `wPvaEDsz2hUBsAGVADFL`,
        title: 'View History From Any Angle',
        icon:'ti-eye',
        description: 'Use different viewpoints and perspectives to examine history from multiple angles.',
        inputs: {
            event: {
                value: '',
                hint: 'Example: World War II in Europe',
                inputType: 'text',
                label: 'Historical Event',
            },
        }
    },
];