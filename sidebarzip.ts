import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  sidebarzip: [
    'intro',
    {
      type: 'category',
      label: 'Installation Instructions',
      link: {
        type: 'doc',
        id: 'installation-instructions/overview',
      },
      items: ['installation-instructions/how-45-trial-works','installation-instructions/how-to-license-component','installation-instructions/installation-csharp','installation-instructions/installation-vb','installation-instructions/installation-net',],
    },
    {
      type: 'category',
      label: 'Basic Concepts',
      link: {
        type: 'doc',
        id: 'basic-concepts/getting-started',
      },
      items: [
        'basic-concepts/introduction-zip-file-format',
        'basic-concepts/encryption-decription',
        'basic-concepts/listing-content-zip-file',
        'basic-concepts/removing-items-from-zip-file',
        'basic-concepts/optimizing-batch-updates-to-folder',
        'basic-concepts/handling-unicode-characters',
        'basic-concepts/aes-ecryption',
        'basic-concepts/zip64-zip-file-format',        
        {
          type: 'category',
          label: 'Zipping',
          link: {
            type: 'generated-index',
            description: 'This section contains the most important topics relating to zipping.',  
          },
          items: [
            'basic-concepts/zipping/copy-items-zip-file',
            'basic-concepts/zipping/create-zip-in-memory',
            'basic-concepts/zipping/create-spanned-zip-files',        
            'basic-concepts/zipping/create-split-zip-files', 
            'basic-concepts/zipping/zipping-items-located-memory', 
            'basic-concepts/zipping/zipping-items-using-multiple-thread', 
          ],
        },
        {
          type: 'category',
          label: 'Unzipping',       // Nombre de la subcategoría
          link: {
            type: 'generated-index',
            description: 'This section contains the most important topics relating to unzipping.',  
          },
          items: [
           'basic-concepts/unzipping/exctracting-items-from-zip-file',
           'basic-concepts/unzipping/unzipping-to-memory',
           'basic-concepts/unzipping/unzipping-items-from-zip-file',
           'basic-concepts/unzipping/handling-archives-with-directory',
          ],
        },
        'basic-concepts/quick-zip',
        {
          type: 'category',
          label: 'Tar & GZip capabilities',
          link: {
            type: 'doc',
            id: 'basic-concepts/tar-gzip-capabilities/overview',
          },
          items: [
            {
              type: 'category',
              label: 'Xceed GZip',
              link: {
                type: 'doc',
                id: 'basic-concepts/tar-gzip-capabilities/gzip/overview',
              },
              items: [
                'basic-concepts/tar-gzip-capabilities/gzip/copy-item-to-gzip',
                'basic-concepts/tar-gzip-capabilities/gzip/extracting-from-gzip',
                'basic-concepts/tar-gzip-capabilities/gzip/performing-multifile-gzip',        
                'basic-concepts/tar-gzip-capabilities/gzip/extract-multifile-gzip-to-file',
              ],
            },
            {
              type: 'category',
              label: 'Xceed Tar',
              link: {
                type: 'doc',
                id: 'basic-concepts/tar-gzip-capabilities/tar/overview',
              },
              items: [
                'basic-concepts/tar-gzip-capabilities/tar/listing-content-tarfile',
                'basic-concepts/tar-gzip-capabilities/tar/removing-item-tarfile',
                'basic-concepts/tar-gzip-capabilities/tar/copy-item-tar-archive',        
                'basic-concepts/tar-gzip-capabilities/tar/extract-item-tar-archive', 
                'basic-concepts/tar-gzip-capabilities/tar/supported-tar-format',
              ],
            },
          ],
        },
        ],
    },
    {
      type: 'category',
      label: 'Advanced Concepts',
      link: {
        type: 'generated-index',
        description: 'This section contains topics covering more advanced concepts.',
      },      
      items: [
        'advanced-concepts/retrieving-compressedstream',
        'advanced-concepts/using-alternative-aes-implementations',   
        ],
    },
    {
      type: 'category',
      label: 'Code Snippets',
      link: {
        type: 'doc',
        id: 'code-snippets/overview',
      },      
      items: [
        {
          type: 'category',
          label: 'Zipping',
          link: {
            type: 'generated-index',
            description: 'This section contains code snippets relating to zipping.',  
          },
          items: [
            'code-snippets/zipping/copy-items-to-zip',
            'code-snippets/zipping/create-zip-in-memory',
            'code-snippets/zipping/create-self-extarcting-zip',        
            'code-snippets/zipping/create-spanned-zip', 
            'code-snippets/zipping/create-split-zip', 
            'code-snippets/zipping/create-zip-archive-zipwriter', 
            'code-snippets/zipping/zipping-located-in-memory', 
            'code-snippets/zipping/zipping-quickzip', 
            'code-snippets/zipping/reading-writing-nested-zip', 
          ],
        },
        {
          type: 'category',
          label: 'Unzipping',
          link: {
            type: 'generated-index',
            description: 'This section contains code snippets relating to unzipping.',  
          },
          items: [
            'code-snippets/unzipping/extracting-item-from-zip',
            'code-snippets/unzipping/extracting-data-from-zip-zipreader',
            'code-snippets/unzipping/reading-writing-nested-zip',        
            'code-snippets/unzipping/unzipping-items-from-zip-app-res', 
            'code-snippets/unzipping/unzipping-to-memory', 
            'code-snippets/unzipping/unzipping-quickzip', 
            'code-snippets/unzipping/unzipping-encrypted-itemsuse-compatible-encryption', 
          ],
        },
        {
          type: 'category',
          label: 'Listing',
          link: {
            type: 'generated-index',
            description: 'This section contains code snippets relating to listing.',  
          },
          items: [
            'code-snippets/listing/listing-content-folder',
            'code-snippets/listing/listing-content-zip',
            'code-snippets/listing/listing-content-quickzip',        
            'code-snippets/listing/listing-content-zipreader', 
          ],
        },
        {
          type: 'category',
          label: 'Deleting',
          link: {
            type: 'generated-index',
            description: 'This section contains code snippets relating to deleting.',  
          },
          items: [
            'code-snippets/deleting/removing-items-folder',
            'code-snippets/deleting/removing-item-zip',
            'code-snippets/deleting/removing-files-quickzip',    
          ],
        },
        {
          type: 'category',
          label: 'Memory compression',
          link: {
            type: 'generated-index',
            description: 'This section contains code snippets relating to memory compression.',  
          },
          items: [
            'code-snippets/memory-compression/compressing-stream',
            'code-snippets/memory-compression/compressing-memory-buffer',
            'code-snippets/memory-compression/creating-zip-memory',    
          ],
        },
        {
          type: 'category',
          label: 'Memory decompression',
          link: {
            type: 'generated-index',
            description: 'This section contains code snippets relating to memory decompression.',  
          },
          items: [
            'code-snippets/memory-decompression/decompressing-stream',
            'code-snippets/memory-decompression/decompressing-memory-buffer',
            'code-snippets/memory-decompression/unzipping-memory',    
          ],
        },
        {
          type: 'category',
          label: 'Other',
          link: {
            type: 'generated-index',
            description: 'This section contains miscellaneous code snippets.',  
          },
          items: [
            'code-snippets/other/converting-zip-self-extract',
            'code-snippets/other/copy-items-folder',
            'code-snippets/other/encrypt-decrypt',   
          ],
        },
        {
          type: 'category',
          label: 'Tar & GZip capabilities',
          link: {
            type: 'doc',
            id: 'code-snippets/tar-gzip-capabilities/overview',  
          },
          items: [
            {
              type: 'category',
              label: 'Creating and Writing',
              link: {
                type: 'generated-index',
                description: 'This section contains code snippets relating to creating and writing tar archives and gzip files.',  
              },
              items: [
                'code-snippets/tar-gzip-capabilities/creating-writing/copy-items-tar', 
                'code-snippets/tar-gzip-capabilities/creating-writing/copy-item-gzip', 
                'code-snippets/tar-gzip-capabilities/creating-writing/performing-multifile-gzip-operation', 
                'code-snippets/tar-gzip-capabilities/creating-writing/copy-item-tarbzip2', 
                'code-snippets/tar-gzip-capabilities/creating-writing/removing-item-from-tar', 
                'code-snippets/tar-gzip-capabilities/creating-writing/adding-item-tar-quicktar', 
                'code-snippets/tar-gzip-capabilities/creating-writing/removing-item-from-tar-quicktar', 
                'code-snippets/tar-gzip-capabilities/creating-writing/compressing-with-quickgzip', 
                'code-snippets/tar-gzip-capabilities/creating-writing/removing-item-from-gzip-with-quickgzip', 
              ],
            },{
              type: 'category',
              label: 'Reading',
              link: {
                type: 'generated-index',
                description: 'This section contains code snippets relating to reading tar archives and gzip files.',  
              },
              items: [
                'code-snippets/tar-gzip-capabilities/reading/listing-tar-file',
                'code-snippets/tar-gzip-capabilities/reading/performing-multifile-gzip-op',
                'code-snippets/tar-gzip-capabilities/reading/extract-item-tar',
                'code-snippets/tar-gzip-capabilities/reading/extract-item-gzip',
                'code-snippets/tar-gzip-capabilities/reading/extract-tarbzip2',
                'code-snippets/tar-gzip-capabilities/reading/extract-tar-quicktar',
                'code-snippets/tar-gzip-capabilities/reading/listing-tar-quicktar',
                'code-snippets/tar-gzip-capabilities/reading/uncompress-quickgzip',
                'code-snippets/tar-gzip-capabilities/reading/list-gzipped-quickgzip',
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;