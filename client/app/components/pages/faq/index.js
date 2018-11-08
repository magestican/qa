import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFaqPageData } from './../../../actions/faqPage';
import { Card, Button, Divider, Grid } from 'semantic-ui-react'


@connect(mapStateToProps)
export default class FaqPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFaqId: 0,
    }
  }

  selectFaq = (faqId) => {
    this.setState({ selectedFaqId: faqId });
  }

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(getFaqPageData());
  }

  render() {
    const { faqPageData: { faqs } } = this.props;
    const { selectedFaqId } = this.state;
    const selectedFaq = faqs[selectedFaqId] || {};
    return (
      <div className="faq-page">
        <Grid columns={2} stackable textAlign='center'>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column className="left-panel">
              <Card color='red'>
                <Card.Content>
                  <Card.Header content={selectedFaq.title} />
                  <Card.Meta content={`Question ${selectedFaqId}`} />
                  <Card.Description dangerouslySetInnerHTML={{ __html: selectedFaq.body }} />
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column className="right-panel">
              {
                faqs.map((o, i) => {
                  return <Button onClick={this.selectFaq.bind(this,i)} primary key={`faq${i}`}>{o.title}</Button>
                })
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    faqPageData: state.faqPageReducer.faqPageData
  };
}
