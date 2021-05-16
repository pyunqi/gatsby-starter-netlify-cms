import React from 'react'
import PropTypes from 'prop-types'
import { ENExchangeTemplate } from '../../templates/enexchange-page'

const ENExchangePreview = ({ entry, widgetFor }) => (
  <ENExchangeTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ENExchangePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ENExchangePreview
