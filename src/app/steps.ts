import { Step } from './step/step';

export const STEPS: {} = {
  1: {
    id: 1,
    question: 'Is this data?',
    helpfulText: 'Data is defined as facts, figures, and statistics objectively measured according to a standard or scale, such as frequency, volumes or occurrences. Data does not include information like reports or manuals.',
    tag: '',
    options: [
      {
        text: 'Yes, it should be published',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No, turns out its information',
        nextStep: 0,
        previousStep: 0
      }
    ]
  },
  2: {
    id: 2,
    question: 'Is your data restricted due to privacy, confidentiallity, security, legal or commercially-sensitive resons?',
    helpfulText: 'Ministries and provincial agencies are required to release all data, unless it is exempt due to privacy, confidentiality, security, legal or commercial sensitivity reasons. However, data that is exempt from publication should still be listed in the inventory.',
    tag: '',
    options: [
      {
        text: 'No, our data can be opened.',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'Yes, our data is restricted.',
        nextStep: 0,
        previousStep: 0
      }
    ]
  },
  3: {
    id: 3,
    question: 'Do you think the data has quality issues?',
    helpfulText: '',
    tag: '',
    options: [
      {
        text: 'Yes - Advise to have Progam/Policy lead (data custodian) should review and document needed changes.',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        nextStep: 0,
        previousStep: 0
      }
    ]
  },
  4: {
    id: 4,
    question: 'Have you concidered the data benifits and limitations?',
    helpfulText: '',
    tag: '',
    options: [
      {
        text: 'No - Advise to have Progam/Policy lead (data custodian) should review and document needed changes.',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'Yes',
        nextStep: 0,
        previousStep: 0
      }
    ]
  },
  5: {
    id: 5,
    question: 'Have you checked with legal to see if there are any potential issues on their end?',
    helpfulText: '',
    tag: 'legal',
    options: [
      {
        text: 'Yes',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No - Do this if you think there my be issues.',
        nextStep: 0,
        previousStep: 0
      }
    ]
  },
  6: {
    id: 6,
    question: 'Has FOIP coordinators reviews to ensure no personal or confidetial info is included or if this has been previoulsy inclued in an FOI request?',
    helpfulText: 'If the data contains personal information, they are required to make recommendations on whether it should be redacted, de-identified or exempt from publication. The Information and Privacy Commissioner for Ontario has published De-identification Guidelines for Structured Data.',
    tag: 'FOI',
    options: [
      {
        text: 'Yes',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        nextStep: 0,
        previousStep: 0
      }
    ]
  },
  7: {
    id: 7,
    question: 'Has the data been reviewed for accessiility and data quality or machine readable formats?',
    helpfulText: 'Your IT cluster o rministrt analytics branches can help.',
    tag: 'accessibility',
    options: [
      {
        text: 'Yes',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        nextStep: 0,
        previousStep: 0
      }
    ]
  },
  8: {
    id: 8,
    question: 'Have you considered potential issues or opportunities with release of the dataset?',
    helpfulText: 'Communications can also help draft House Book notes, Issues Notes and Q&As if that would be helpful.',
    tag: 'Communications',
    options: [
      {
        text: 'Yes',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        nextStep: 0,
        previousStep: 0
      }
    ]
  },
  9: {
    id: 9,
    question: 'Have you checked with FLS to ensure you don\'t need any translations?',
    helpfulText: 'Raw data is exempt from translation but FLS coordinators will ensure that language requirements under the French Language Services Act are met and will provide advice for identified datasets on French translation needs.',
    tag: 'Translations',
    options: [
      {
        text: 'Yes',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        nextStep: 0,
        previousStep: 0
      }
    ]
  },
  10: {
    id: 10,
    question: 'Have you written a briefing note?',
    helpfulText: '',
    tag: '',
    options: [
      {
        text: 'Yes',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        nextStep: 0,
        previousStep: 0
      }
    ]
  },
  11: {
    id: 11,
    question: 'Is the data in a machine readable format?',
    helpfulText: 'These formats include: CSV, JSON, SQL, etc.',
    tag: 'Data Quality',
    options: [
      {
        text: 'Yes',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        nextStep: 0,
        previousStep: 0
      }
    ]
  },
  12: {
    id: 12,
    question: 'Have you completed the data description form?',
    helpfulText: '',
    tag: 'Data Quality',
    options: [
      {
        text: 'Yes',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        nextStep: 0,
        previousStep: 0
      }
    ]
  },
  13: {
    id: 13,
    question: 'Have you checked in with the Open Government Office?',
    helpfulText: '',
    tag: '',
    options: [
      {
        text: 'Yes',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        nextStep: 0,
        previousStep: 0
      }
    ]
  },
  14: {
    id: 14,
    question: 'Have you translated the data description form?',
    helpfulText: '',
    tag: 'Translations',
    options: [
      {
        text: 'Yes',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        nextStep: 0,
        previousStep: 0
      }
    ]
  },
  15: {
    id: 15,
    question: 'Have formatted data files such as Excel sheets been reviewd for accessibility compliance?',
    helpfulText: 'Un-formatted data files that are structured for database consumption already meet accessibility requirements.',
    tag: 'Data Quality',
    options: [
      {
        text: 'Yes',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        nextStep: 0,
        previousStep: 0
      }
    ]
  },
  16: {
    id: 16,
    question: 'Have you updated the House Book note?',
    helpfulText: '',
    tag: '',
    options: [
      {
        text: 'Yes',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        nextStep: 0,
        previousStep: 0
      }
    ]
  },
  17: {
    id: 17,
    question: 'Have you prepared your internal approvals documentation?',
    helpfulText: 'Each dataset and ministry are different, make sure you are getting the approval you feel you need to publish this. ',
    tag: '',
    options: [
      {
        text: 'Yes',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        nextStep: 0,
        previousStep: 0
      }
    ]
  },
  18: {
    id: 18,
    question: 'Have you sent your data to OGO for publishing?',
    helpfulText: '',
    tag: '',
    options: [
      {
        text: 'Yes',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        nextStep: 0,
        previousStep: 0
      }
    ]
  },
  19: {
    id: 19,
    question: 'Have you promoted your data or do you plan to?',
    helpfulText: '',
    tag: 'Communications',
    options: [
      {
        text: 'Yes',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        nextStep: 0,
        previousStep: 0
      }
    ]
  }
}
