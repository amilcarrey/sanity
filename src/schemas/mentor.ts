import { MdSchool } from 'react-icons/md';

export default {
  title: 'Mentores',
  name: 'mentor',
  type: 'document',
  icon: MdSchool,
  fields: [
    {
      title: 'Nombre',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Photo',
      name: 'photo',
      type: 'image',
      fields: [
        {
          title: 'Alt',
          name: 'alt',
          type: 'string',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
      ],
    },
    {
      title: 'Calendly',
      name: 'calendly',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Web / Portfolio',
      name: 'web',
      type: 'url',
    },
    {
      title: 'LinkedIn',
      name: 'linkedin',
      type: 'url',
    },
    {
      title: 'Github',
      name: 'github',
      type: 'url',
    },
    {
      title: 'Temas',
      name: 'topics',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'topic' }],
          description: 'What topic do you want to help with?',
        },
      ],
    },
  ],
};