import React, { Component } from 'react';
import axios from 'axios';
import ReviewList from './components/ReviewList.jsx';
import AddAReview from './components/AddAReview.jsx';
import MetaData from './components/MetaData.jsx';
import { Grid, Button, MenuItem, FormControl, Select } from '@material-ui/core';
import dummyMeta from './dummyMeta.js';
import dummyMainData from './dummyData.js';

class RatingReviewApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lengthTest: true,
      product_id: props.id,
      reviewData: false,
      newestData: false,
      relevanceData: false,
      helpfulData: false,
      mainData: false || dummyMainData.results,
      metaData: false || dummyMeta,
      allReviewsCount: 0,
      currentSortString: '',
      page: 1,
      filters: {},
    };
    this.putHelpful = this.putHelpful.bind(this);
    this.putReport = this.putReport.bind(this);
    this.sortByRating = this.sortByRating.bind(this);
    this.changeReviewOrRating = this.changeReviewOrRating.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    const meta = axios.get(`http://3.137.191.193/reviews/meta/?product_id=${this.state.product_id}`);
    const all = axios.get(`http://3.137.191.193/reviews/?product_id=${this.state.product_id}&count=${100}`);
    const newest = axios.get(`http://3.137.191.193/reviews/?product_id=${this.state.product_id}&count=${100}&sort=newest`);
    const relevance = axios.get(`http://3.137.191.193/reviews/?product_id=${this.state.product_id}&count=${100}%sort=relevant`);
    const helpful = axios.get(`http://3.137.191.193/reviews/?product_id=${this.state.product_id}&count=${100}&sort=helpful`);
    axios.all([meta, all, newest, relevance, helpful]).then(axios.spread((...responses) => {
      this.setState({
        metaData: responses[0].data,
        allReviewsCount: responses[1].data.results.length,
        reviewData: responses[1].data.results,
        newestData: responses[2].data.results,
        relevanceData: responses[3].data.results,
        helpfulData: responses[4].data.results
      }, () => this.reviewOrRatingData(this.state.currentSortString, this.state.filters));
    }))
      .catch((err) => {
        console.log(err);
      });
  }


  getPaginatedReviews() {
    var page = 0;
    if (this.state.mainData[this.state.page + 2]) {
      page = this.state.page + 2;
    } else {
      if (this.state.mainData[this.state.page + 1]) {
        page = this.state.page + 1;
      } else {
        this.setState({
          lengthTest: false
        });
        return;
      }
    }
    if (!this.state.mainData[this.state.page + 3]) {
      this.setState({
        lengthTest: false,
        page: page
      });
    } else {
      this.setState({
        lengthTest: true,
        page: page
      });
    }
  }

  putHelpful(id) {
    axios.put(`http://3.137.191.193/reviews/${id}/helpful`)
      .then(() => {
        const all = axios.get(`http://3.137.191.193/reviews/?product_id=${this.state.product_id}&count=${100}`);
        const newest = axios.get(`http://3.137.191.193/reviews/?product_id=${this.state.product_id}&count=${100}&sort=newest`);
        const relevance = axios.get(`http://3.137.191.193/reviews/?product_id=${this.state.product_id}&count=${100}%sort=relevant`);
        const helpful = axios.get(`http://3.137.191.193/reviews/?product_id=${this.state.product_id}&count=${100}&sort=helpful`);
        axios.all([all, newest, relevance, helpful]).then(axios.spread((...responses) => {
          this.setState({
            reviewData: responses[0].data.results,
            newestData: responses[1].data.results,
            relevanceData: responses[2].data.results,
            helpfulData: responses[3].data.results
          }, () => this.reviewOrRatingData(this.state.currentSortString, this.state.filters));
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  putReport(id) {
    axios.put(`http://3.137.191.193/reviews/${id}/report`)
      .then(() => {
        const all = axios.get(`http://3.137.191.193/reviews/?product_id=${this.state.product_id}&count=${100}`);
        const newest = axios.get(`http://3.137.191.193/reviews/?product_id=${this.state.product_id}&count=${100}&sort=newest`);
        const relevance = axios.get(`http://3.137.191.193/reviews/?product_id=${this.state.product_id}&count=${100}%sort=relevant`);
        const helpful = axios.get(`http://3.137.191.193/reviews/?product_id=${this.state.product_id}&count=${100}&sort=helpful`);
        axios.all([all, newest, relevance, helpful]).then(axios.spread((...responses) => {
          this.setState({
            reviewData: responses[0].data.results,
            newestData: responses[1].data.results,
            relevanceData: responses[2].data.results,
            helpfulData: responses[3].data.results
          }, () => this.reviewOrRatingData(this.state.currentSortString, this.state.filters));
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  postAReview(obj) {
    console.log(obj);
  }

  changeReviewOrRating() {
    this.setState({
      filters: {}
    }, () => this.reviewOrRatingData(this.state.currentSortString, {}));
  }

  handleChange(e) {
    this.setState({
      currentSortString: e.target.value,
      page: 1,
      lengthTest: true
    }, () => this.reviewOrRatingData(e.target.value, this.state.filters));
  }

  sortByRating(num) {
    var bool = false;
    const { filters } = this.state;
    if (Object.keys(filters).length > 0) {
      Object.keys(filters).map((x) => {
        if (Number(x) !== num) {
          filters[x] = true;
        } else if (Number(x) === num) {
          delete filters[x];
          bool = true;
        }
      });
    }
    if (!bool) {
      filters[num] = true;
    }
    this.setState({
      filters: filters,
      page: 1,
      lengthTest: true
    }, () => this.reviewOrRatingData(this.state.currentSortString, filters));
  }

  reviewOrRatingData(val, filters) {
    var data = false;
    var filter = Object.keys(filters);
    var rating = [];
    var count = 0;
    if (val === '') { data = this.state.reviewData; }
    if (val === 'relevant') { data = this.state.relevanceData; }
    if (val === 'helpful') { data = this.state.helpfulData; }
    if (val === 'newest') { data = this.state.newestData; }

    if (filter.length) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].rating === Number(filter[count])) {
          rating.push(data[i]);
        }
        if (i === data.length - 1 && filter[count + 1]) {
          i = 0;
          count++;
        }
      }
    }
    if (rating.length) {
      this.setState({
        mainData: rating
      });
    } else {
      this.setState({
        mainData: data
      });
    }
  }

  render() {
    const { reviewData, bool, lengthTest, metaData, filters } = this.state;
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} container direction="row">
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={4} style={{ maxWidth: 300 }}>
            </Grid>
            <Grid item xs={3} style={{ maxWidth: 148, position: 'relative', top: 3 }}>
              {/* <Typography>{this.state.allReviewsCount} reviews total.</Typography> */}
            </Grid>
            <Grid item xs={2}>
              <FormControl style={{ minWidth: 120 }}>
                <label>Sort by:</label>
                <Select
                  value={this.state.currentSortString}
                  onChange={this.handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value={''}>None</MenuItem>
                  <MenuItem value={'relevant'}>Relevant</MenuItem>
                  <MenuItem value={'helpful'}>Helpful</MenuItem>
                  <MenuItem value={'newest'}>Newest</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
            </Grid>
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={3} style={{ maxWidth: 300, position: 'relative', bottom: 45 }}>
            {metaData ? <MetaData meta={metaData} sortByRating={this.sortByRating} filters={filters} changeReviewOrRating={this.changeReviewOrRating} /> : null}
          </Grid>
          <Grid item xs={5} >
            {this.state.mainData ? <ReviewList reviews={this.state.mainData} putHelpful={this.putHelpful} putReport={this.putReport} page={this.state.page} /> : null}
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <div style={{ minWidth: 450, maxHeight: 50, margin: 'auto', paddingBottom: 150 }}>
            <Grid item xs={12} container direction="row">
              <Grid item xs={6}>
                {lengthTest ? <Button style={{ float: 'right' }} variant="outlined" onClick={() => this.getPaginatedReviews()}>MORE REVIEWS</Button> : null}
              </Grid>
              <Grid item xs={6}>
                {metaData ? <AddAReview style={{ float: 'left' }} postAReview={this.postAReview} meta={metaData} /> : null}
              </Grid>
            </Grid>
          </div>
        </Grid>
      </div>
    );
  }
}

export default RatingReviewApp;
