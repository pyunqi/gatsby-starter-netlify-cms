import React from 'react'
import PropTypes from 'prop-types'
import { ENExchangePageTemplate } from '../../templates/enexchange-page'

const ENExchangePagePreview = ({ entry, widgetFor }) => (
  <ENExchangePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ENExchangePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ENExchangePagePreview
