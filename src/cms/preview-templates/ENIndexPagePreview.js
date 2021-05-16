import React from 'react'
import PropTypes from 'prop-types'
import { ENIndexPageTemplate } from '../../templates/enindex-page'

const ENIndexPagePreview = ({ entry, widgetFor }) => (
  <ENIndexPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ENIndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ENIndexPagePreview
