import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import ENIndexPagePreview from './preview-templates/ENIndexPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ExchangePagePreview from './preview-templates/ExchangePagePreview'
import ENExchangePagePreview from './preview-templates/ENExchangePagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('ENIndex', ENIndexPagePreview)
CMS.registerPreviewTemplate('exchange', ExchangePagePreview)
CMS.registerPreviewTemplate('enexchange', ENExchangePagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
