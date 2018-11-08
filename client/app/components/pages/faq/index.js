import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFaqPageData } from './../../../actions/faqPage';
import { Card, Icon } from 'semantic-ui-react'


@connect(mapStateToProps)
export default class FaqPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(getFaqPageData());
  }

  render() {
    const { faqPageData: { faqs } } = this.props;
    console.log(faqs);
    return (
      <div className="faq-page">
        <Card.Group>
          {
            faqs.map((o, i) => {
              return <Card color='yellow' key={`faq${i}`}>
                <Card.Content>
                  <Card.Header content={o.title} />
                  <Card.Meta content={`Question ${i}`} />
                  <Card.Description dangerouslySetInnerHTML={{ __html: o.body }} />
                </Card.Content>
              </Card>
            })
          }
        </Card.Group>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    faqPageData: state.faqPageReducer.faqPageData
  };
}
