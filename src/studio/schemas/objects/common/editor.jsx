import React from 'react'
import { ImFontSize } from 'react-icons/im'
import { RiLinkM, RiLink } from 'react-icons/ri'
import { MdHighlight } from 'react-icons/md'
import { AiOutlineFileAdd, AiOutlineFile } from 'react-icons/ai'
import { MdOutlineSuperscript } from 'react-icons/md'

export const block = {
  type: 'block',
  styles: [
    { title: 'Normal', value: 'normal' },
    { title: 'H1', value: 'h1' },
    { title: 'H2', value: 'h2' },
    { title: 'H3', value: 'h3' },
    { title: 'H4', value: 'h4' },
    { title: 'H5', value: 'h5' },
    { title: 'H6', value: 'h6' },
    { title: 'Quote', value: 'blockquote' },
    {
      title: 'Caption',
      value: 'caption',
			component: (props) => <span style={{ fontSize: '0.8rem' }}>{props.children}</span>
    },
  ],
  // Annotations can be any object structure – e.g. a link or a footnote.
  marks: {
    decorators: [
      { title: 'Strong', value: 'strong' },
      { title: 'Emphasis', value: 'em' },
      { title: 'Underline', value: 'underline' },
      {
        title: 'Superscript',
        value: 'sup',
				icon: MdOutlineSuperscript,
				component: ({children}) => <sup>{children}</sup>,
      },
      {
        title: 'Pop',
        value: 'pop',
				icon: MdHighlight,
        component: ({ children }) => <span style={{ color: '#CAB391' }}>{children}</span>,
      },
    ],
    annotations: [
      {
        title: 'Upload File',
        name: 'uploadFile',
        type: 'file',
				icon: AiOutlineFileAdd,
				component: ({ children }) => (
					<span>
						{children} <AiOutlineFile />
					</span>
				),
      },
      {
        name: 'link',
        type: 'object',
        title: 'URL',
				component: ({ children, color }) => {
					return (
						<span
							style={{
								color: color ? color : 'inherit',
							}}
						>
							{children}
						</span>
					)
				},
        fields: [
          {
            title: 'URL',
            name: 'href',
            type: 'string',
          },
          {
            name: 'color',
            type: 'string',
            title: 'Color',
            description: 'Color in hash value',
          },
          {
            name: 'onMobile',
            type: 'boolean',
            title: 'On mobile',
          },
          {
            name: 'haveWordSpacing',
            type: 'boolean',
            title: 'Have word spacing',
          },
        ],
      },
      {
        name: 'primaryLink',
        type: 'object',
        title: 'Primary URL',
				icon: RiLinkM,
				component: (props) => {
					return (
						<span
							style={{
								color: color ? color : 'inherit',
							}}
						>
							{props.children}
						</span>
					)
				},
        fields: [
          {
            title: 'Primary URL',
            name: 'href',
            type: 'string',
          },
          {
            name: 'color',
            type: 'string',
            title: 'Color',
            description: 'Color in hash value',
          },
        ],
      },
      {
        name: 'secondaryLink',
        type: 'object',
        title: 'Secondary URL',
				icon: RiLink,
				component: ({ children, color }) => {
					return (
						<span
							style={{
								color: color ? color : 'inherit',
							}}
						>
							{children}
						</span>
					)
				},
        fields: [
          {
            title: 'Secondary URL',
            name: 'href',
            type: 'string',
          },
          {
            name: 'color',
            type: 'string',
            title: 'Color',
            description: 'Color in hash value',
          },
        ],
      },
      {
        name: 'customFont',
        type: 'object',
        title: 'Custom Font',
				icon: ImFontSize,
          component: ({ children, size, weight, marginBottom, marginTop, color }) => {
            return (
              <span
                style={{
                  fontSize: size ? `${size}px` : '1em',
                  fontWeight: weight ? weight : 400,
                  marginTop: marginTop ? `${marginTop}px` : '0',
                  marginBottom: marginBottom ? `${marginBottom}px` : '0',
                  color: color ? color : 'inherit',
                  display: 'inline-block',
                }}
              >
                {children}
              </span>
            )
          },
        fields: [
          {
            name: 'size',
            type: 'number',
            title: 'Size',
            description: 'In px',
          },
          {
            name: 'weight',
            type: 'number',
            title: 'Weight',
            description: 'Font weight',
          },
          {
            name: 'marginTop',
            type: 'number',
            title: 'Margin Top',
            description: 'Margin Top',
          },
          {
            name: 'marginBottom',
            type: 'number',
            title: 'Margin Bottom',
            description: 'Margin Bottom',
          },
          {
            name: 'color',
            type: 'string',
            title: 'Color',
            description: 'Color in hash value',
          },
        ],
      },
    ],
  },
}

export const image = {
  name: 'image',
  title: 'Image',
  type: 'image',
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative',
    },
  ],
}

export const video = { type: 'file', name: 'video', title: 'Video' }
export const card = {
  type:'object',
  name:'card',
  title:'Card',
  fields:[
    {
      title: "Text",
      type:'array',
      of:[block],
      name:'data',
    },
    {
      title: "URL",
      type:"link",
      name:'mainLink'
    }
  ],
  preview: {
    title: "data"
  }
}
