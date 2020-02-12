export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e43632accf97b3cef8dabd9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pyz7vqmt',
                  apiId: '97b1ac00-29b9-4791-8191-9518d6bbdd62'
                },
                {
                  buildHookId: '5e43632a447be6a5d24b99f6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-muhmsgx6',
                  apiId: '931eecd8-c0a1-4f08-9b57-fa9fbb10277b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Amirullah23/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-muhmsgx6.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
