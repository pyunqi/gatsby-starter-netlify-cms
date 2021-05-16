import React from 'react'
import PropTypes from 'prop-types'
import { ExchangePageTemplate } from '../../templates/exchange-page'

const ExchangePagePreview = ({ entry, widgetFor }) => (
  <ExchangePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ExchangePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ExchangePagePreview
