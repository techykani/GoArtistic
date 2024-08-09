export default {
  name: 'subMenu',
  title: 'Sub Menu',
  type: 'object',
  fields: [
    { name: 'headline', type: 'string' },
    { name: 'description', type: 'text' },
    { name: 'menus', title: 'Menus', type: 'array', of: [{ type: 'menuWithSubmenu' }] },
  ],
}
