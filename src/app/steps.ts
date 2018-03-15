import { Step } from './step/step';

export const STEPS: {} = {
  1: {
    id: 1,
    question: 'Is this data?',
    helpfulText: 'Data is defined as facts, figures, and statistics objectively measured according to a standard or scale, such as frequency, volumes or occurrences. Data does not include information like reports or manuals.',
    tag: '',
    options: [
      {
        text: 'Yes, it is data',
        finishText: '',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No, turns out its information',
        finishText: 'Good to know. Information should also be published in the open, but it is published through a different channel. To get more information on how to publish open info, contact your open info ministry lead. The following is a list of of the contacts for each ministry [Ministry Open Government Contact List](https://intra.ontario.ca/wordpress/uploads/2015/10/Ministry-OG-Support-Team-Placemat-Nov-29-2017.pptx.).',
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
        finishText: '',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'Yes, our data is restricted.',
        skipText: 'Good catch, data that is restricted will not be published. However, your journey is not yet over. In order to be transparent with the public, you must publish the rationale for not releasing the data on our data catalogue. To do this contact OGO?',
        nextStep: 12, /*Is this the correct format?*/
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
        finishText: 'You will have to improve the data before it is published. To do this, get in contact with the whoever owns the data. In order to support them, provide them with the list of [aceptable file formats](). If they have any trouble creating an acceptable file format the IT cluster can help.',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        finishText: '',
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
        finishText: '',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'Yes',
        finishText: '',
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
        finishText: '',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No - Do this if you think there my be issues.',
        finishText: 'Contact legal.',
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
        finishText: '',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        finishText: 'You will need to contact your FOIP coordinator to ensure that your data does not have any potentially identifying information. To determine who your FIOP coordinator is take a look at this [List of FIOP Coordinators](http://www.infogo.gov.on.ca/infogo/home.html#orgProfile/1803/en)',
        nextStep: 0,
        previousStep: 0
      }
    ]
  },
  7: {
    id: 7,
    question: 'Has the data been reviewed for accessiility and data quality or machine readable formats?',
    helpfulText: 'Your IT cluster or ministry analytics branches can help.',
    tag: 'accessibility',
    options: [
      {
        text: 'Yes',
        finishText: '',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        finishText: 'The list of [acceptable file formats]() will let you know what files are machine readable. All machine readable files are inherently accessible, but if your file is not machine readable it can still be made accessible. If you dataset is an Microsoft Excel file, use the [Accessibility Checker](https://support.office.com/en-us/article/use-the-accessibility-checker-on-your-windows-desktop-to-find-accessibility-issues-a16f6de0-2f39-4a2b-8bd8-5ad801426c7f). If you are not using Excel, than you will need to look into how to make it accessible.',
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
        finishText: '',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        finishText: 'Before you continue it would be good to quickly think about what the impact of releasing this data would be. Who could use it or benefit from it? On the flip side, it is also a good idea to identify what could potentially go wrong if this data were to be released. Communications would be an excellent resource to assist you in this process.',
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
        finishText: '',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        finishText: 'It is unlikely that you will have to do any translation of your data, but it is good to check with your FLS coordinator. If you don\'t know who your FLS coordinator is, you can look them up in the [FLS Coordinator Directory](http://intra.ofa.gov.on.ca/page1.html#FLSA).',
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
        finishText: '',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        finishText: 'Write a briefing note with x information.',
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
        finishText: '',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        finishText: 'Here is how to convert/accessibility.',
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
        finishText: '',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        finishText: 'Here is a link to the form to complete.',
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
        finishText: '',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        finishText: 'Contact your OD lead',
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
        finishText: '',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        finishText: 'Here is how to contact your FLS coordinator.',
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
        finishText: '',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        finishText: 'Here is how to use the Excel accessibility checker.',
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
        finishText: 'Next Step.',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        finishText: '?',
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
        finishText: '',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        finishText: 'Here is how to prepare the documentation.',
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
        finishText: '',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        finishText: 'Here is how to contact your OD contact.',
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
        finishText: 'You did it! Go celebrate.',
        nextStep: 3,
        previousStep: 0
      },
      {
        text: 'No',
        finishText: 'Good opportunity to expand the impact of your data. Here is what you should consider.',
        nextStep: 0,
        previousStep: 0
      }
    ]
  }
}
