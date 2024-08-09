export default {
  name: 'common.options',
  title: 'Options',
  type: 'object',
  fields: [
    {
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'optionsDropdown',
      title: 'Options Dropdown',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'specificConcern',
      title: 'specific Concern Filter Dropdown',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Bone & Joint', value: 'Bone & Joint Health' },
              { title: 'Digestive & Colorectal', value: 'Digestive & Colorectal Health' },
              { title: 'Heart', value: 'Heart Conditions' },
              { title: 'Liver', value: 'Liver Conditions' },
              { title: 'Kidney & Renal', value: 'Kidney & Renal Health' },
              { title: 'Sleep', value: 'Sleep Health' },
              { title: 'Chronic', value: 'Chronic Health Conditions' },
            ], // &lt;-- predefined values
          },
        },
      ],
    },
  ],
}
